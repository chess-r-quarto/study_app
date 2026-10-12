import React from 'react';
import { SystemState, CausalRow } from '../types';

interface SystemTabProps {
  system: SystemState;
  onChange: (system: SystemState) => void;
}

export const SystemTab: React.FC<SystemTabProps> = ({ system, onChange }) => {
  const addRow = () => {
    const newRow: CausalRow = {
      cause: "新しいノード変数",
      polarity: "[+]",
      effect: "影響を受けるノード",
      isLeverage: false,
      note: "因果関係のメモ"
    };
    onChange({
      ...system,
      causalRows: [...system.causalRows, newRow]
    });
  };

  const updateRow = (idx: number, field: keyof CausalRow, val: any) => {
    const nextRows = [...system.causalRows];
    nextRows[idx] = { ...nextRows[idx], [field]: val };
    onChange({ ...system, causalRows: nextRows });
  };

  const togglePolarity = (idx: number) => {
    const cur = system.causalRows[idx].polarity;
    updateRow(idx, 'polarity', cur === '[+]' ? '[-]' : '[+]');
  };

  const removeRow = (idx: number) => {
    const nextRows = system.causalRows.filter((_, i) => i !== idx);
    onChange({ ...system, causalRows: nextRows });
  };

  const updateHmw = (field: keyof SystemState['hmw'], val: string) => {
    onChange({
      ...system,
      hmw: { ...system.hmw, [field]: val }
    });
  };

  const hmwAction = system.hmw.action || '達成したい行動';
  const hmwTarget = system.hmw.target || '影響を与えたい対象';
  const hmwOutcome = system.hmw.outcome || '理想的な成果';

  return (
    <section className="space-y-6">
      <div className="bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-5 shadow-xs">
        {/* Title */}
        <div className="flex items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-3 mb-4">
          <div>
            <h2 className="text-base font-bold tracking-tight text-[#111111] dark:text-white">
              コース2 / タスク2: システム思考・因果関係マップとレバレッジポイント
            </h2>
            <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
              ステークホルダー（関係者）とノード（測定可能な要因）を区別し、正負の因果関係[+] / [-]と介入点（レバレッジポイント）を特定します。
            </p>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#edebe9] dark:bg-[#363431] text-[#6e6a64] dark:text-[#8a8882]">
            SYSTEM_DYNAMICS
          </span>
        </div>

        {/* Node & Stakeholder Distinction Guide (Restored) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded bg-[#edebe9]/60 dark:bg-[#161512] border border-[#d8d6d2] dark:border-[#363431] text-xs mb-4">
          <div>
            <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">
              [STAKEHOLDER]
            </span>{' '}
            <strong className="text-[#111111] dark:text-white">ステークホルダー</strong>
            <p className="text-[11px] text-[#6e6a64] dark:text-[#8a8882] mt-0.5">
              意思決定に関わる個人または組織（例: 自治体、消費市場、物流業者）。
            </p>
          </div>
          <div>
            <span className="font-bold text-amber-600 dark:text-amber-400 font-mono">
              [NODE_VARIABLE]
            </span>{' '}
            <strong className="text-[#111111] dark:text-white">システムノード（変数）</strong>
            <p className="text-[11px] text-[#6e6a64] dark:text-[#8a8882] mt-0.5">
              時間経過で増減・測定可能な要因（例: 廃棄処分費用、容器回収率、環境意識水準）。
            </p>
          </div>
        </div>

        {/* Causal Relationship Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-white">
              因果関係ループ & レバレッジポイント一覧
            </h3>
            <button
              onClick={addRow}
              className="px-2.5 py-1 text-xs rounded border border-[#d8d6d2] dark:border-[#363431] hover:bg-[#f7f6f5] dark:hover:bg-[#302e2b] flex items-center space-x-1 transition-colors cursor-pointer text-[#2d2b28] dark:text-[#c4c3be]"
            >
              <span>+ 行を追加</span>
            </button>
          </div>

          <div className="overflow-x-auto border border-[#d8d6d2] dark:border-[#363431] rounded">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#edebe9]/60 dark:bg-[#161512] border-b border-[#d8d6d2] dark:border-[#363431] font-semibold text-[#2d2b28] dark:text-neutral-200">
                  <th className="p-2.5 w-1/4">原因ノード (Cause Node)</th>
                  <th className="p-2.5 w-16 text-center">極性</th>
                  <th className="p-2.5 w-1/4">結果ノード (Effect Node)</th>
                  <th className="p-2.5 w-24 text-center">レバレッジ点?</th>
                  <th className="p-2.5">因果関係の背景・介入メカニズム</th>
                  <th className="p-2.5 w-12 text-center">削除</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d8d6d2] dark:divide-[#363431]">
                {system.causalRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f7f6f5]/50 dark:hover:bg-[#302e2b]/30">
                    <td className="p-2">
                      <input
                        type="text"
                        value={row.cause}
                        onChange={(e) => updateRow(idx, 'cause', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] text-xs focus:outline-none focus:border-[#52801e] dark:focus:border-[#629924] text-[#2d2b28] dark:text-[#c4c3be]"
                      />
                    </td>
                    <td className="p-2 text-center">
                      <button
                        type="button"
                        onClick={() => togglePolarity(idx)}
                        className={`font-mono font-bold px-2 py-1 rounded border border-[#d8d6d2] dark:border-[#363431] text-xs cursor-pointer ${
                          row.polarity === '[+]'
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-red-600 dark:text-red-400'
                        }`}
                      >
                        {row.polarity}
                      </button>
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={row.effect}
                        onChange={(e) => updateRow(idx, 'effect', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] text-xs focus:outline-none focus:border-[#52801e] dark:focus:border-[#629924] text-[#2d2b28] dark:text-[#c4c3be]"
                      />
                    </td>
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        checked={row.isLeverage}
                        onChange={(e) => updateRow(idx, 'isLeverage', e.target.checked)}
                        className="rounded text-[#52801e] dark:text-[#629924] focus:ring-0 cursor-pointer"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={row.note}
                        onChange={(e) => updateRow(idx, 'note', e.target.value)}
                        placeholder="介入メカニズムのメモ"
                        className="w-full px-2 py-1 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] text-xs focus:outline-none focus:border-[#52801e] dark:focus:border-[#629924] text-[#2d2b28] dark:text-[#c4c3be]"
                      />
                    </td>
                    <td className="p-2 text-center">
                      <button
                        type="button"
                        onClick={() => removeRow(idx)}
                        className="text-red-500 hover:text-red-700 font-mono text-xs px-1.5 py-0.5 cursor-pointer"
                        title="削除"
                      >
                        [X]
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* HMW Generator */}
        <div className="mt-6 pt-5 border-t border-[#d8d6d2] dark:border-[#363431] space-y-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-1 text-[#111111] dark:text-white">
              「How Might We? (HMW: どうすれば〜できるか？)」ステートメント作成
            </h3>
            <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
              特定したレバレッジポイントを元に、定型フォーマットに落とし込みます:{' '}
              <span className="font-mono font-bold text-[#111111] dark:text-white">
                どうすれば [達成したい行動] + [影響を与えたい対象] によって [理想的な成果] を実現できるだろうか？
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                1. 達成したい行動 (Action)
              </label>
              <input
                type="text"
                value={system.hmw.action}
                onChange={(e) => updateHmw('action', e.target.value)}
                placeholder="例: 回収インセンティブと集荷ネットワークを最適化し"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                2. 影響を与えたい対象 (Target Node)
              </label>
              <input
                type="text"
                value={system.hmw.target}
                onChange={(e) => updateHmw('target', e.target.value)}
                placeholder="例: 都市部一般消費者の返却行動"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                3. 理想的な成果 (Ideal Outcome)
              </label>
              <input
                type="text"
                value={system.hmw.outcome}
                onChange={(e) => updateHmw('outcome', e.target.value)}
                placeholder="例: 容器回収率95%以上とサプライチェーン全体のプラゴミ半減"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
          </div>

          <div className="p-3.5 rounded bg-[#edebe9]/60 dark:bg-[#161512] border border-[#d8d6d2] dark:border-[#363431]">
            <label className="block text-[11px] font-mono font-bold text-[#6e6a64] dark:text-[#8a8882] mb-1">
              統合HMW問い文 (AUTO-GENERATED HMW STATEMENT)
            </label>
            <p className="text-xs sm:text-sm font-semibold leading-relaxed text-[#52801e] dark:text-[#629924] font-mono">
              どうすれば、[{hmwAction}] + [{hmwTarget}] によって、[{hmwOutcome}] を実現できるだろうか？
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
