import React from 'react';
import { VpsState, ConceptState } from '../types';

interface VpsTabProps {
  vps: VpsState;
  concept: ConceptState;
  onChange: (key: keyof VpsState, value: string) => void;
  onGenerateStatement: () => void;
}

export const VpsTab: React.FC<VpsTabProps> = ({
  vps,
  concept: _concept,
  onChange,
  onGenerateStatement,
}) => {
  return (
    <section className="space-y-6">
      <div className="bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-5 shadow-xs">
        {/* Title */}
        <div className="flex items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-3 mb-4">
          <div>
            <h2 className="text-base font-bold tracking-tight text-[#111111] dark:text-white">
              コース4 / タスク1: 4P持続可能価値提案キャンバス & 初期検証KPI
            </h2>
            <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
              130+の価値タイプを4P（人・地球・利益・進歩）に割り当て、初期段階の検証KPIを設定します。
            </p>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#edebe9] dark:bg-[#363431] text-[#6e6a64] dark:text-[#8a8882]">
            VALUE_CANVAS
          </span>
        </div>

        {/* 4P Value Quadrants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* People */}
          <div className="p-4 rounded border border-[#d8d6d2] dark:border-[#363431] space-y-3 bg-[#edebe9]/40 dark:bg-[#161512]/40">
            <div className="flex items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-2">
              <span className="font-bold text-amber-700 dark:text-amber-400 font-mono">
                PEOPLE（社会的望ましさの価値）
              </span>
              <span className="text-[11px] text-[#6e6a64] dark:text-[#8a8882]">
                社会・ステークホルダー
              </span>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                提供する中核的価値タイプ (1〜3項目)
              </label>
              <input
                type="text"
                value={vps.peopleValue}
                onChange={(e) => onChange('peopleValue', e.target.value)}
                placeholder="例: 廃棄ストレスの軽減、環境配慮のステータス、コミュニティ信頼"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                初期検証KPI (社会的望ましさ)
              </label>
              <input
                type="text"
                value={vps.peopleKpi}
                onChange={(e) => onChange('peopleKpi', e.target.value)}
                placeholder="例: パイロット参加意向率 80%以上、ユーザー継続利用率 90%"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
          </div>

          {/* Planet */}
          <div className="p-4 rounded border border-[#d8d6d2] dark:border-[#363431] space-y-3 bg-[#edebe9]/40 dark:bg-[#161512]/40">
            <div className="flex items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-2">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                PLANET（環境の必要性の価値）
              </span>
              <span className="text-[11px] text-[#6e6a64] dark:text-[#8a8882]">
                生態系・環境循環
              </span>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                提供する中核的価値タイプ (1〜3項目)
              </label>
              <input
                type="text"
                value={vps.planetValue}
                onChange={(e) => onChange('planetValue', e.target.value)}
                placeholder="例: 資源循環性、バージンプラゼロ化、カーボンフットプリント削減"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                初期検証KPI (環境の必要性)
              </label>
              <input
                type="text"
                value={vps.planetKpi}
                onChange={(e) => onChange('planetKpi', e.target.value)}
                placeholder="例: 1年間の容器循環率 95%、CO2総排出量削減 120トン/年"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
          </div>

          {/* Profit */}
          <div className="p-4 rounded border border-[#d8d6d2] dark:border-[#363431] space-y-3 bg-[#edebe9]/40 dark:bg-[#161512]/40">
            <div className="flex items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-2">
              <span className="font-bold text-blue-700 dark:text-blue-400 font-mono">
                PROFIT（経済的実行可能性の価値）
              </span>
              <span className="text-[11px] text-[#6e6a64] dark:text-[#8a8882]">
                収益・事業持続性
              </span>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                提供する中核的価値タイプ (1〜3項目)
              </label>
              <input
                type="text"
                value={vps.profitValue}
                onChange={(e) => onChange('profitValue', e.target.value)}
                placeholder="例: 調達コストの削減、安定在庫供給、新規サステナブル顧客獲得"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                初期検証KPI (経済的実行可能性)
              </label>
              <input
                type="text"
                value={vps.profitKpi}
                onChange={(e) => onChange('profitKpi', e.target.value)}
                placeholder="例: 1社あたり包装コスト 18%削減、デポジット回収損耗率 2%未満"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
          </div>

          {/* Progress */}
          <div className="p-4 rounded border border-[#d8d6d2] dark:border-[#363431] space-y-3 bg-[#edebe9]/40 dark:bg-[#161512]/40">
            <div className="flex items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-2">
              <span className="font-bold text-purple-700 dark:text-purple-400 font-mono">
                PROGRESS（技術的実現可能性の価値）
              </span>
              <span className="text-[11px] text-[#6e6a64] dark:text-[#8a8882]">
                イネーブリング技術・拡張性
              </span>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                提供する中核的価値タイプ (1〜3項目)
              </label>
              <input
                type="text"
                value={vps.progressValue}
                onChange={(e) => onChange('progressValue', e.target.value)}
                placeholder="例: 追跡透明性、標準化API連携、洗浄耐性マテリアル技術"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                初期検証KPI (技術的実現可能性)
              </label>
              <input
                type="text"
                value={vps.progressKpi}
                onChange={(e) => onChange('progressKpi', e.target.value)}
                placeholder="例: RFIDスキャン読取精度 99.8%、100回洗浄後の耐久性保持"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
          </div>
        </div>

        {/* Value Proposition Statement */}
        <div className="mt-6 pt-5 border-t border-[#d8d6d2] dark:border-[#363431] space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-white">
                バリュー・プロポジション・ステートメント (Value Proposition Statement)
              </h3>
              <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
                主要ステークホルダーにコンセプトの真価を簡潔に説明するエレベーターピッチ。
              </p>
            </div>
            <button
              onClick={onGenerateStatement}
              className="px-3 py-1 text-xs rounded border border-[#d8d6d2] dark:border-[#363431] hover:bg-[#f7f6f5] dark:hover:bg-[#302e2b] transition-colors font-medium cursor-pointer text-[#2d2b28] dark:text-[#c4c3be]"
            >
              自動生成を再適用
            </button>
          </div>

          <textarea
            rows={3}
            value={vps.statement}
            onChange={(e) => onChange('statement', e.target.value)}
            className="w-full text-xs sm:text-sm px-3 py-2 rounded bg-[#edebe9]/60 dark:bg-[#161512] border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none leading-relaxed font-mono text-[#2d2b28] dark:text-[#c4c3be]"
          />
        </div>
      </div>
    </section>
  );
};
