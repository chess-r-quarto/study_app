import React from 'react';
import { FourPState, AmbitionState } from '../types';

interface FourPAmbitionTabProps {
  fourP: FourPState;
  ambition: AmbitionState;
  onFourPChange: (key: keyof FourPState, value: string) => void;
  onAmbitionChange: (key: keyof AmbitionState, value: string) => void;
}

const QUADRANTS = [
  {
    id: "破壊的 (Disruptive)",
    label: "破壊的 (Disruptive)",
    sub: "新ビジネスモデル x 既存技術",
    desc: "実証済みの技術を用いて、市場の商慣習や課金形態を根本的に変革する。"
  },
  {
    id: "建築的 (Architectural)",
    label: "建築的 (Architectural)",
    sub: "新ビジネスモデル x 新技術",
    desc: "先端研究開発と完全な新システムを融合し、新たな産業構造を創造する。"
  },
  {
    id: "漸進的 (Incremental)",
    label: "漸進的 (Incremental)",
    sub: "既存ビジネスモデル x 既存技術",
    desc: "現行製品・プロセスの効率化や資源消費削減の改善を積み重ねる。"
  },
  {
    id: "急進的 (Radical)",
    label: "急進的 (Radical)",
    sub: "既存ビジネスモデル x 新技術",
    desc: "現行の取引関係を維持しつつ、革新的な材料・省エネ技術等を導入する。"
  }
];

export const FourPAmbitionTab: React.FC<FourPAmbitionTabProps> = ({
  fourP,
  ambition,
  onFourPChange,
  onAmbitionChange,
}) => {
  return (
    <section className="space-y-6">
      {/* 4P Sustainable Innovation Model */}
      <div className="bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-3 mb-4">
          <div>
            <h2 className="text-base font-bold tracking-tight text-[#111111] dark:text-white">
              持続可能なイノベーション 4Pモデル
            </h2>
            <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
              検証の優先順位原則: People（社会的望ましさ） → Planet（環境の必要性） → Profit（経済的実行可能性） → Progress（技術的実現可能性）
            </p>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#edebe9] dark:bg-[#363431] text-[#6e6a64] dark:text-[#8a8882]">
            MODEL_4P
          </span>
        </div>

        {/* 4P Priority Flow Visualizer (Restored) */}
        <div className="p-3 mb-5 rounded bg-[#edebe9]/60 dark:bg-[#161512] border border-[#d8d6d2] dark:border-[#363431]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
            <div className="p-3 rounded border border-amber-600/40 bg-amber-500/10 flex-1 w-full text-center">
              <span className="font-mono font-bold text-amber-700 dark:text-amber-400 block mb-1">
                PHASE 1: PEOPLE
              </span>
              <p className="font-semibold text-xs text-[#2d2b28] dark:text-white">
                社会的望ましさ (Social Desirability)
              </p>
              <p className="text-[11px] text-[#6e6a64] dark:text-[#8a8882] mt-1">
                顧客・地域・従業員が本当に望んでいるか？
              </p>
            </div>
            <div className="text-[#6e6a64] dark:text-[#8a8882] font-bold">→</div>
            <div className="p-3 rounded border border-emerald-600/40 bg-emerald-500/10 flex-1 w-full text-center">
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                PHASE 2: PLANET
              </span>
              <p className="font-semibold text-xs text-[#2d2b28] dark:text-white">
                環境の必要性 (Environmental Necessity)
              </p>
              <p className="text-[11px] text-[#6e6a64] dark:text-[#8a8882] mt-1">
                生態系や地球資源の循環に資するか？
              </p>
            </div>
            <div className="text-[#6e6a64] dark:text-[#8a8882] font-bold">→</div>
            <div className="p-3 rounded border border-blue-600/40 bg-blue-500/10 flex-1 w-full text-center">
              <span className="font-mono font-bold text-blue-700 dark:text-blue-400 block mb-1">
                PHASE 3: PROFIT
              </span>
              <p className="font-semibold text-xs text-[#2d2b28] dark:text-white">
                経済的実行可能性 (Economic Viability)
              </p>
              <p className="text-[11px] text-[#6e6a64] dark:text-[#8a8882] mt-1">
                持続的に利益を生み、回収できるか？
              </p>
            </div>
            <div className="text-[#6e6a64] dark:text-[#8a8882] font-bold">→</div>
            <div className="p-3 rounded border border-purple-600/40 bg-purple-500/10 flex-1 w-full text-center">
              <span className="font-mono font-bold text-purple-700 dark:text-purple-400 block mb-1">
                PHASE 4: PROGRESS
              </span>
              <p className="font-semibold text-xs text-[#2d2b28] dark:text-white">
                技術的実現可能性 (Technological Feasibility)
              </p>
              <p className="text-[11px] text-[#6e6a64] dark:text-[#8a8882] mt-1">
                新技術やインフラを実装可能か？
              </p>
            </div>
          </div>
        </div>

        {/* 4P Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
              People（社会的望ましさ）の検証方針
            </label>
            <textarea
              rows={2}
              value={fourP.people}
              onChange={(e) => onFourPChange('people', e.target.value)}
              placeholder="例: 配送業者・店舗スタッフの返却オペレーション負荷を調査し、利便性を損なわない回収動線を設計。"
              className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
              Planet（環境の必要性）の検証方針
            </label>
            <textarea
              rows={2}
              value={fourP.planet}
              onChange={(e) => onFourPChange('planet', e.target.value)}
              placeholder="例: 容器の平均回転数50回以上でバージンプラスチック比CO2排出削減率78%を担保するLCAシミュレーション。"
              className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
              Profit（経済的実行可能性）の検証方針
            </label>
            <textarea
              rows={2}
              value={fourP.profit}
              onChange={(e) => onFourPChange('profit', e.target.value)}
              placeholder="例: パッケージ従量課金＋デポジット管理費により、ユーザー企業の包装調達単価を従来の使い捨てと同等以下に抑制。"
              className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
              Progress（技術的実現可能性）の検証方針
            </label>
            <textarea
              rows={2}
              value={fourP.progress}
              onChange={(e) => onFourPChange('progress', e.target.value)}
              placeholder="例: 長距離パッシブRFIDリーダーとクラウド分散台帳を統合し、全自動で紛失率2%未満を達成する。"
              className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
            />
          </div>
        </div>
      </div>

      {/* Innovation Ambition Matrix */}
      <div className="bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-3 mb-4">
          <div>
            <h2 className="text-base font-bold tracking-tight text-[#111111] dark:text-white">
              イノベーション野心マトリックス (Innovation Ambition Matrix)
            </h2>
            <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
              縦軸: ビジネスモデル適合度（既存 vs 新規） / 横軸: 技術コンピテンシー（既存 vs 新規）から野心の立ち位置を選択します。
            </p>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#edebe9] dark:bg-[#363431] text-[#6e6a64] dark:text-[#8a8882]">
            MATRIX_2x2
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Interactive 2x2 Quadrants */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {QUADRANTS.map((quad) => {
              const isSelected = ambition.type === quad.id;
              return (
                <div
                  key={quad.id}
                  onClick={() => onAmbitionChange('type', quad.id)}
                  className={`p-4 rounded border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#52801e] dark:border-[#629924] bg-[#52801e]/10 dark:bg-[#629924]/10 text-[#2d2b28] dark:text-[#c4c3be]'
                      : 'border-[#d8d6d2] dark:border-[#363431] hover:border-[#52801e] dark:hover:border-[#629924] text-[#6e6a64] dark:text-[#8a8882]'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold mb-1 text-[#111111] dark:text-white">
                    <span>{quad.label}</span>
                    {isSelected && (
                      <span className="text-[#52801e] dark:text-[#629924] font-mono text-[10px]">
                        [SELECTED]
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6e6a64] dark:text-[#8a8882]">{quad.sub}</p>
                  <p className="text-[11px] mt-2 leading-relaxed">{quad.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Quadrant Details Form */}
          <div className="space-y-3 text-xs flex flex-col justify-between">
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                選択されたイノベーション種別 (Selected Ambition Type)
              </label>
              <input
                type="text"
                readOnly
                value={ambition.type}
                className="w-full px-3 py-2 rounded bg-[#edebe9]/60 dark:bg-[#161512] border border-[#d8d6d2] dark:border-[#363431] font-mono font-bold text-[#52801e] dark:text-[#629924]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                戦略的選定理由 (Rationale & Resource Allocation)
              </label>
              <textarea
                rows={4}
                value={ambition.rationale}
                onChange={(e) => onAmbitionChange('rationale', e.target.value)}
                placeholder="例: 容器材料そのものは既存の堅牢ポリプロピレンを活用し技術リスクを抑えつつ、従量定額課金と回収エコシステムという新ビジネスモデルで市場を開拓するため。"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
