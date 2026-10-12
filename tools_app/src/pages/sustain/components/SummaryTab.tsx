import React from 'react';
import { SustainState } from '../types';
import { SDGS_DATA } from '../sampleData';

interface SummaryTabProps {
  state: SustainState;
  onPrint: () => void;
}

export const SummaryTab: React.FC<SummaryTabProps> = ({ state, onPrint }) => {
  const currentDate = new Date().toISOString().split('T')[0];

  const hmwAction = state.system.hmw.action || '';
  const hmwTarget = state.system.hmw.target || '';
  const hmwOutcome = state.system.hmw.outcome || '';
  const hmwStatement = `どうすれば、[${hmwAction}] + [${hmwTarget}] によって、[${hmwOutcome}] を実現できるだろうか？`;

  return (
    <section className="space-y-6">
      {/* Action Banner (hidden in print) */}
      <div className="no-print bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div>
          <h2 className="text-sm font-bold text-[#111111] dark:text-white">
            A4形式 総合戦略サマリー出力プレビュー
          </h2>
          <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
            入力された全フレームワーク（コンセプト、4P優先検証、システムHMW、4P価値・KPI、三層BMC）を統合して表示しています。
          </p>
        </div>
        <button
          onClick={onPrint}
          className="px-4 py-2 rounded bg-[#52801e] dark:bg-[#629924] text-white hover:opacity-90 text-xs font-semibold flex items-center space-x-1.5 transition-opacity cursor-pointer shadow"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>A4印刷 / PDF保存を実行</span>
        </button>
      </div>

      {/* Printable Document Container */}
      <div id="print-container" className="space-y-6">
        {/* PAGE 1: Overview, 4P Priority, Ambition Matrix, & System Dynamics */}
        <div className="a4-page print-card bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-6 sm:p-8 space-y-6 text-xs shadow-xs text-[#2d2b28] dark:text-[#c4c3be]">
          {/* Document Header */}
          <div className="border-b-2 border-[#bab7b0] dark:border-[#484541] pb-4 flex items-start justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#6e6a64] dark:text-[#8a8882]">
                THE OPEN UNIVERSITY / EXPLORER LABS FRAMEWORK
              </span>
              <h1 className="text-lg sm:text-xl font-bold mt-0.5 text-[#111111] dark:text-white">
                {state.concept.name || '（事業コンセプト未入力）'}
              </h1>
              <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
                {state.concept.org || '（推進組織未設定）'}
              </p>
            </div>
            <div className="text-right font-mono text-[11px] text-[#6e6a64] dark:text-[#8a8882]">
              <div>REPORT_TYPE: SUSTAINABLE_EVAL</div>
              <div>{currentDate}</div>
            </div>
          </div>

          {/* Section 1: Concept & Grand Challenge */}
          <div className="space-y-2">
            <h2 className="font-bold text-xs uppercase tracking-wider border-b border-[#d8d6d2] dark:border-[#363431] pb-1 text-[#111111] dark:text-white">
              1. コンセプト定義 & 壮大な課題 (Grand Challenges)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="font-semibold block text-[11px] text-[#6e6a64] dark:text-[#8a8882]">
                  直面する壮大な課題:
                </span>
                <p className="leading-relaxed mt-0.5 whitespace-pre-wrap">
                  {state.concept.challenge || '（課題未入力）'}
                </p>
              </div>
              <div>
                <span className="font-semibold block text-[11px] text-[#6e6a64] dark:text-[#8a8882]">
                  ソリューション概要 & 信頼性:
                </span>
                <p className="leading-relaxed mt-0.5 whitespace-pre-wrap">
                  {state.concept.solution || '（ソリューション未入力）'}
                </p>
                <p className="mt-1 text-[11px] text-[#6e6a64] dark:text-[#8a8882]">
                  [信頼性/裏付け] {state.concept.credibility || '未設定'}
                </p>
              </div>
            </div>
            <div className="pt-2">
              <span className="font-semibold block text-[11px] text-[#6e6a64] dark:text-[#8a8882] mb-1">
                連携SDGs目標:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                {state.concept.sdgs.length > 0 ? (
                  state.concept.sdgs
                    .slice()
                    .sort((a, b) => a - b)
                    .map((id) => {
                      const sdg = SDGS_DATA.find((s) => s.id === id);
                      return (
                        <span
                          key={id}
                          className="px-1.5 py-0.5 rounded border border-[#d8d6d2] dark:border-[#363431] bg-[#edebe9]/60 dark:bg-[#161512]"
                        >
                          [G{id} {sdg?.name}]
                        </span>
                      );
                    })
                ) : (
                  <span className="text-[#6e6a64] dark:text-[#8a8882]">選択なし</span>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: 4P Priority Validation & Ambition Matrix */}
          <div className="space-y-2 pt-2 border-t border-[#d8d6d2] dark:border-[#363431]">
            <h2 className="font-bold text-xs uppercase tracking-wider border-b border-[#d8d6d2] dark:border-[#363431] pb-1 text-[#111111] dark:text-white">
              2. 4P検証優先原則 & イノベーション野心
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-[11px]">
              <div className="p-2 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <span className="font-bold block font-mono text-amber-700 dark:text-amber-400">
                  1. PEOPLE (望ましさ)
                </span>
                <p className="mt-1 whitespace-pre-wrap text-[10.5px]">
                  {state.fourP.people || '-'}
                </p>
              </div>
              <div className="p-2 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <span className="font-bold block font-mono text-emerald-700 dark:text-emerald-400">
                  2. PLANET (必要性)
                </span>
                <p className="mt-1 whitespace-pre-wrap text-[10.5px]">
                  {state.fourP.planet || '-'}
                </p>
              </div>
              <div className="p-2 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <span className="font-bold block font-mono text-blue-700 dark:text-blue-400">
                  3. PROFIT (実行可能性)
                </span>
                <p className="mt-1 whitespace-pre-wrap text-[10.5px]">
                  {state.fourP.profit || '-'}
                </p>
              </div>
              <div className="p-2 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <span className="font-bold block font-mono text-purple-700 dark:text-purple-400">
                  4. PROGRESS (実現性)
                </span>
                <p className="mt-1 whitespace-pre-wrap text-[10.5px]">
                  {state.fourP.progress || '-'}
                </p>
              </div>
            </div>

            <div className="p-2.5 rounded bg-[#edebe9]/60 dark:bg-[#161512] border border-[#d8d6d2] dark:border-[#363431] mt-2 flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <span className="font-bold font-mono">野心タイプ: </span>
                <span className="font-bold text-[#52801e] dark:text-[#629924]">
                  {state.ambition.type || '-'}
                </span>
              </div>
              <div className="flex-1 sm:ml-4">
                <span className="font-semibold text-[#6e6a64] dark:text-[#8a8882]">選定理由: </span>
                <span>{state.ambition.rationale || '特記事項なし'}</span>
              </div>
            </div>
          </div>

          {/* Section 3: System Dynamics & HMW Statement */}
          <div className="space-y-2 pt-2 border-t border-[#d8d6d2] dark:border-[#363431]">
            <h2 className="font-bold text-xs uppercase tracking-wider border-b border-[#d8d6d2] dark:border-[#363431] pb-1 text-[#111111] dark:text-white">
              3. システム思考・レバレッジポイント & HMW課題文
            </h2>
            <div className="p-3 rounded bg-[#edebe9]/60 dark:bg-[#161512] border border-[#d8d6d2] dark:border-[#363431]">
              <span className="font-mono text-[10px] font-bold block text-[#6e6a64] dark:text-[#8a8882] mb-0.5">
                FORMULATED HMW QUESTION:
              </span>
              <p className="font-semibold font-mono text-xs leading-relaxed text-[#52801e] dark:text-[#629924]">
                {hmwStatement}
              </p>
            </div>

            {/* Restored Causal Table */}
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left text-[11px] border-collapse border border-[#d8d6d2] dark:border-[#363431]">
                <thead className="bg-[#edebe9]/60 dark:bg-[#161512]">
                  <tr className="border-b border-[#d8d6d2] dark:border-[#363431] font-semibold text-[#2d2b28] dark:text-neutral-200">
                    <th className="p-1.5">原因ノード</th>
                    <th className="p-1.5 text-center">極性</th>
                    <th className="p-1.5">結果ノード</th>
                    <th className="p-1.5 text-center">レバレッジ点</th>
                    <th className="p-1.5">介入メカニズム</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d8d6d2] dark:divide-[#363431]">
                  {state.system.causalRows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-1 font-semibold">{row.cause}</td>
                      <td
                        className={`p-1 text-center font-mono font-bold ${
                          row.polarity === '[+]'
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-red-600 dark:text-red-400'
                        }`}
                      >
                        {row.polarity}
                      </td>
                      <td className="p-1 font-semibold">{row.effect}</td>
                      <td className="p-1 text-center font-mono">
                        {row.isLeverage ? (
                          <span className="text-[#52801e] dark:text-[#629924] font-bold">
                            [LEVERAGE]
                          </span>
                        ) : (
                          '-'
                        )}
                      </td>
                      <td className="p-1 text-[#6e6a64] dark:text-[#8a8882]">{row.note || ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* PAGE 2: 4P Value Proposition Canvas & TLBMC */}
        <div className="a4-page print-card bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-6 sm:p-8 space-y-6 text-xs shadow-xs text-[#2d2b28] dark:text-[#c4c3be]">
          {/* Section 4: 4P Value Proposition Canvas & Early KPIs */}
          <div className="space-y-3">
            <div className="border-b-2 border-[#bab7b0] dark:border-[#484541] pb-2 flex items-center justify-between">
              <h2 className="font-bold text-xs uppercase tracking-wider text-[#111111] dark:text-white">
                4. 4P価値提案キャンバス & 初期検証KPI
              </h2>
              <span className="text-[10px] font-mono text-[#6e6a64] dark:text-[#8a8882]">
                VALUE_PROPOSITION_CANVAS
              </span>
            </div>

            <div className="p-3 rounded bg-[#edebe9]/60 dark:bg-[#161512] border border-[#d8d6d2] dark:border-[#363431] font-mono">
              <span className="text-[10px] font-bold block text-[#6e6a64] dark:text-[#8a8882] mb-0.5">
                ELEVATOR PITCH / VALUE STATEMENT:
              </span>
              <p className="text-xs leading-relaxed text-[#111111] dark:text-white">
                {state.vps.statement || '（ステートメント未生成）'}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10.5px]">
              <div className="p-2 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <span className="font-bold block font-mono text-amber-700 dark:text-amber-400">
                  PEOPLE VALUE & KPI
                </span>
                <p className="font-semibold mt-1">{state.vps.peopleValue || '-'}</p>
                <p className="text-[#6e6a64] dark:text-[#8a8882] mt-0.5">
                  KPI: {state.vps.peopleKpi || '-'}
                </p>
              </div>
              <div className="p-2 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <span className="font-bold block font-mono text-emerald-700 dark:text-emerald-400">
                  PLANET VALUE & KPI
                </span>
                <p className="font-semibold mt-1">{state.vps.planetValue || '-'}</p>
                <p className="text-[#6e6a64] dark:text-[#8a8882] mt-0.5">
                  KPI: {state.vps.planetKpi || '-'}
                </p>
              </div>
              <div className="p-2 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <span className="font-bold block font-mono text-blue-700 dark:text-blue-400">
                  PROFIT VALUE & KPI
                </span>
                <p className="font-semibold mt-1">{state.vps.profitValue || '-'}</p>
                <p className="text-[#6e6a64] dark:text-[#8a8882] mt-0.5">
                  KPI: {state.vps.profitKpi || '-'}
                </p>
              </div>
              <div className="p-2 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <span className="font-bold block font-mono text-purple-700 dark:text-purple-400">
                  PROGRESS VALUE & KPI
                </span>
                <p className="font-semibold mt-1">{state.vps.progressValue || '-'}</p>
                <p className="text-[#6e6a64] dark:text-[#8a8882] mt-0.5">
                  KPI: {state.vps.progressKpi || '-'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Tri-Layer Business Model Canvas Summary (Full 27 Blocks) */}
          <div className="space-y-4 pt-2 border-t border-[#d8d6d2] dark:border-[#363431]">
            <div className="border-b border-[#d8d6d2] dark:border-[#363431] pb-1 flex items-center justify-between">
              <h2 className="font-bold text-xs uppercase tracking-wider text-[#111111] dark:text-white">
                5. 三層構造ビジネスモデル・キャンバス (TLBMC) 統合俯瞰
              </h2>
              <span className="text-[10px] font-mono text-[#6e6a64] dark:text-[#8a8882]">
                ECONOMIC / ENVIRONMENTAL / SOCIAL
              </span>
            </div>

            {/* Economic BMC Grid */}
            <div className="border border-[#d8d6d2] dark:border-[#363431] rounded p-2.5 space-y-1.5">
              <div className="font-bold text-[11px] text-blue-600 dark:text-blue-400 flex items-center space-x-1">
                <span>[層 1: 経済的BMC]</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 text-[10px]">
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">パートナー:</span>
                  <span>{state.tlbmc.economic.partners || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">活動/資源:</span>
                  <span>{state.tlbmc.economic.activities || '-'} / {state.tlbmc.economic.resources || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-blue-600 dark:text-blue-400">価値提案:</span>
                  <span>{state.tlbmc.economic.vp || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">関係/チャネル:</span>
                  <span>{state.tlbmc.economic.rel || '-'} / {state.tlbmc.economic.chan || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">セグメント:</span>
                  <span>{state.tlbmc.economic.seg || '-'}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px] pt-0.5">
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">コスト構造:</span>
                  <span>{state.tlbmc.economic.costs || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">収益の流れ:</span>
                  <span>{state.tlbmc.economic.rev || '-'}</span>
                </div>
              </div>
            </div>

            {/* Environmental Lifecycle BMC Grid */}
            <div className="border border-[#d8d6d2] dark:border-[#363431] rounded p-2.5 space-y-1.5">
              <div className="font-bold text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                <span>[層 2: 環境ライフサイクルBMC]</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 text-[10px]">
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">サプライ調達:</span>
                  <span>{state.tlbmc.environmental.supplies || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">生産/原材料:</span>
                  <span>{state.tlbmc.environmental.prod || '-'} / {state.tlbmc.environmental.materials || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-emerald-600 dark:text-emerald-400">機能的価値:</span>
                  <span>{state.tlbmc.environmental.func || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">使用/流通:</span>
                  <span>{state.tlbmc.environmental.use || '-'} / {state.tlbmc.environmental.dist || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">寿命終了:</span>
                  <span>{state.tlbmc.environmental.eol || '-'}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px] pt-0.5">
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-red-500">環境負荷:</span>
                  <span>{state.tlbmc.environmental.impacts || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-emerald-500">環境便益:</span>
                  <span>{state.tlbmc.environmental.benefits || '-'}</span>
                </div>
              </div>
            </div>

            {/* Social Stakeholder BMC Grid */}
            <div className="border border-[#d8d6d2] dark:border-[#363431] rounded p-2.5 space-y-1.5">
              <div className="font-bold text-[11px] text-amber-600 dark:text-amber-400 flex items-center space-x-1">
                <span>[層 3: 社会ステークホルダーBMC]</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 text-[10px]">
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">地域社会:</span>
                  <span>{state.tlbmc.social.comm || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">統治/従業員:</span>
                  <span>{state.tlbmc.social.gov || '-'} / {state.tlbmc.social.emp || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-amber-600 dark:text-amber-400">社会的価値:</span>
                  <span>{state.tlbmc.social.val || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">文化/普及規模:</span>
                  <span>{state.tlbmc.social.cult || '-'} / {state.tlbmc.social.scale || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-[#6e6a64] dark:text-[#8a8882]">エンドユーザー:</span>
                  <span>{state.tlbmc.social.user || '-'}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px] pt-0.5">
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-red-500">社会的負の影響:</span>
                  <span>{state.tlbmc.social.impacts || '-'}</span>
                </div>
                <div className="p-1.5 rounded bg-[#edebe9]/60 dark:bg-[#161512]">
                  <span className="font-semibold block text-amber-500">社会的便益:</span>
                  <span>{state.tlbmc.social.benefits || '-'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer / Ask & Timeline (Restored) */}
          <div className="pt-3 border-t border-[#d8d6d2] dark:border-[#363431] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6e6a64] dark:text-[#8a8882] gap-2">
            <div>
              <span className="font-bold text-[#111111] dark:text-white">要求事項 (Ask): </span>
              <span>{state.concept.ask || '特になし'}</span>
            </div>
            <div>
              <span className="font-bold text-[#111111] dark:text-white">タイムライン: </span>
              <span>{state.concept.timeline || '未設定'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
