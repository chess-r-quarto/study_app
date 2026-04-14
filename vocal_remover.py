"""ボーカル除去（カラオケ音源作成）を行うためのオーディオ処理スクリプト。

このモジュールは、古典的な位相キャンセル方式と、
機械学習（Spleeter）を用いた高精度なボーカル除去の2つのアプローチを提供します。

Google Python Style Guideに準拠しています。
"""

import argparse
import os
import sys

import librosa
import numpy as np
import soundfile as sf


def remove_vocals_phase_cancellation(input_path: str, output_path: str) -> None:
    """位相キャンセル（L - R）を用いて、中央に定位するボーカルを除去します。

    ステレオの左チャンネルから右チャンネルを減算することで、中央の音を打ち消します。
    ※ボーカルだけでなく、中央に定位するキックドラムやベースも減少する可能性があります。

    Args:
        input_path: 入力オーディオファイルのパス（ステレオ音源である必要があります）。
        output_path: 処理後のインストゥルメンタル音源の保存先パス。

    Raises:
        ValueError: 入力されたオーディオファイルがステレオでない場合。
        FileNotFoundError: 入力ファイルが存在しない場合。
    """
    if not os.path.exists(input_path):
        raise FileNotFoundError(f"ファイルが見つかりません: {input_path}")

    print(f"[{input_path}] を読み込んでいます（位相キャンセル）...")
    # オリジナルのサンプリングレートとステレオチャンネルを保持して読み込み
    audio_data, sample_rate = librosa.load(input_path, sr=None, mono=False)

    if audio_data.ndim == 1 or audio_data.shape[0] != 2:
        raise ValueError("ステレオ音源が必要です。モノラル音源では位相キャンセルは機能しません。")

    left_channel = audio_data[0]
    right_channel = audio_data[1]

    # ステレオの左右の差分を取り、中央定位の音を打ち消す
    instrumental = left_channel - right_channel

    # 音割れ（クリッピング）を防ぐための正規化（Normalize）
    max_amplitude = np.max(np.abs(instrumental))
    if max_amplitude > 0:
        instrumental = instrumental / max_amplitude

    # 結果をモノラル音源として保存
    sf.write(output_path, instrumental, sample_rate)
    print(f"ボーカル除去が完了しました。出力先: {output_path}")


def remove_vocals_demucs(input_path: str, output_dir: str) -> None:
    """Demucs（機械学習モデル）を用いて高精度にボーカルを分離・除去します。

    デフォルトでは htdemucs モデルを使用し、4つのステム（vocals, drums, bass, other）に分割します。
    インストゥルメンタルは (drums + bass + other) となります。

    Args:
        input_path: 入力オーディオファイルのパス。
        output_dir: 分離されたファイルを保存するディレクトリパス。
        
    Raises:
        ImportError: demucsライブラリがインストールされていない場合。
    """
    try:
        import demucs.separate
    except ImportError as exc:
        raise ImportError(
            "Demucsがインストールされていません。"
            "実行するには 'pip install demucs' を実行してください。"
        ) from exc

    print(f"[{input_path}] をDemucsで処理しています。初回はモデルのダウンロードに時間がかかります...")
    
    # demucs.separate.main への引数をリストとして用意
    # -n htdemucs : モデル指定
    # --two-stems vocals : ボーカルとそれ以外(accompaniment)の2つに分ける
    # -o : 出力先ディレクトリ
    args = [
        "-n", "htdemucs",
        "--two-stems", "vocals",
        "-o", output_dir,
        input_path
    ]
    
    # Demucsの分離処理を実行
    demucs.separate.main(args)
    print(f"高精度なボーカル分離が完了しました。出力先ディレクトリ: {output_dir}")


def main() -> None:
    """コマンドライン引数を解析し、ボーカル除去処理を実行します。"""
    parser = argparse.ArgumentParser(
        description="オーディオファイルからボーカルを除去します。"
    )
    parser.add_argument(
        "input",
        type=str,
        help="入力オーディオファイルのパス"
    )
    parser.add_argument(
        "--method",
        type=str,
        choices=["phase", "ai"],
        default="ai",
        help="ボーカル除去の方式 ('phase': 位相キャンセル, 'ai': Demucsによる機械学習分離)"
    )
    parser.add_argument(
        "--output",
        type=str,
        default="output",
        help="出力先のファイルパス（位相キャンセルの場合）またはディレクトリ（AIの場合）"
    )

    args = parser.parse_args()

    try:
        if args.method == "phase":
            # outputが指定されていない場合、デフォルトのファイル名を設定
            out_path = args.output if args.output != "output" else "instrumental_output.wav"
            remove_vocals_phase_cancellation(args.input, out_path)
        elif args.method == "ai":
            remove_vocals_demucs(args.input, args.output)
    except Exception as e:
        print(f"エラーが発生しました: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
