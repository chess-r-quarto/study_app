import React from 'react';
import { ConceptState } from '../types';
import { SDGS_DATA } from '../sampleData';

interface OverviewTabProps {
  concept: ConceptState;
  onChange: (key: keyof ConceptState, value: any) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ concept, onChange }) => {
  const toggleSdg = (id: number) => {
    const next = concept.sdgs.includes(id)
      ? concept.sdgs.filter((x) => x !== id)
      : [...concept.sdgs, id].sort((a, b) => a - b);
    onChange('sdgs', next);
  };

  return (
    <section className="space-y-6">
      <div className="bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-5 shadow-xs">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-3 mb-4">
          <div>
            <h2 className="text-base font-bold tracking-tight text-[#111111] dark:text-white">
              コース1 / タスク1: サステナビリティ・コンセプトカード
            </h2>
            <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
              人類が直面する壮大な課題（Grand Challenges）とSDGs目標を起点に、解決すべき課題領域を定義します。
            </p>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#edebe9] dark:bg-[#363431] text-[#6e6a64] dark:text-[#8a8882]">
            TASK_01_CONCEPT
          </span>
        </div>

        {/* 2-Column Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                事業 / コンセプト名 (Team & Concept Name)
              </label>
              <input
                type="text"
                value={concept.name}
                onChange={(e) => onChange('name', e.target.value)}
                placeholder="例: LoopPack - 循環型リユース資材プラットフォーム"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                対象組織 / 推進主体 (Organisation)
              </label>
              <input
                type="text"
                value={concept.org}
                onChange={(e) => onChange('org', e.target.value)}
                placeholder="例: サステナブル・パッケージング共創コンソーシアム"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                直面する壮大な課題 (Grand Challenge)
              </label>
              <textarea
                rows={3}
                value={concept.challenge}
                onChange={(e) => onChange('challenge', e.target.value)}
                placeholder="例: プラスチック包装の大量破棄による海洋生態系破壊およびリニア型経済（採掘-製造-破棄）における資源枯渇危機"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                主要ステークホルダー (Key Stakeholders)
              </label>
              <input
                type="text"
                value={concept.stakeholders}
                onChange={(e) => onChange('stakeholders', e.target.value)}
                placeholder="例: 日用品メーカー, 物流企業, 小売事業者, 自治体, 一般消費者, 回収清掃業者"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                解決策のコア概要 (Solution Overview)
              </label>
              <textarea
                rows={3}
                value={concept.solution}
                onChange={(e) => onChange('solution', e.target.value)}
                placeholder="例: RFIDタグを組み込んだ耐久型バイオベース輸送用コンテナと、業界横断型のデポジット・返却・洗浄トラッキングエコシステム"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
                実現可能性・チームの信頼性 (Credibility & Capability)
              </label>
              <input
                type="text"
                value={concept.credibility}
                onChange={(e) => onChange('credibility', e.target.value)}
                placeholder="例: 共同創業者のサプライチェーン15年実績と大学材料工学研究室との特許共同出願"
                className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
              />
            </div>
          </div>
        </div>

        {/* SDGs Grid */}
        <div className="mt-5 pt-4 border-t border-[#d8d6d2] dark:border-[#363431]">
          <label className="block text-xs font-semibold mb-2 text-[#2d2b28] dark:text-neutral-200">
            連携する国連SDGs目標 (SDGs Opportunity Mapping - 複数選択可)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
            {SDGS_DATA.map((sdg) => {
              const isChecked = concept.sdgs.includes(sdg.id);
              return (
                <label
                  key={sdg.id}
                  className={`p-2 rounded border cursor-pointer transition-all flex items-start space-x-2 select-none ${
                    isChecked
                      ? 'border-[#52801e] dark:border-[#629924] bg-[#52801e]/10 dark:bg-[#629924]/10 text-[#2d2b28] dark:text-[#c4c3be]'
                      : 'border-[#d8d6d2] dark:border-[#363431] hover:bg-[#f7f6f5] dark:hover:bg-[#302e2b] text-[#6e6a64] dark:text-[#8a8882]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleSdg(sdg.id)}
                    className="mt-0.5 rounded text-[#52801e] dark:text-[#629924] focus:ring-0 cursor-pointer"
                  />
                  <span className="text-[11px] leading-tight">
                    <span className="font-mono font-bold">G{sdg.id}</span>. {sdg.name}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Ask & Timeline (Restored) */}
        <div className="mt-5 pt-4 border-t border-[#d8d6d2] dark:border-[#363431] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
              アクションの要請 / 資金・資源調達 (Call to Action / Ask)
            </label>
            <input
              type="text"
              value={concept.ask}
              onChange={(e) => onChange('ask', e.target.value)}
              placeholder="例: パイロット実証実験（3社合同）の実施に向けたシード資金 3,000万円および自治体特区承認"
              className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#2d2b28] dark:text-neutral-200">
              想定投資回収・成果創出期間 (Horizon / Timeline)
            </label>
            <input
              type="text"
              value={concept.timeline}
              onChange={(e) => onChange('timeline', e.target.value)}
              placeholder="例: 実証期間 12ヶ月、全国拡大フェーズ 36ヶ月"
              className="w-full px-3 py-2 rounded bg-transparent border border-[#d8d6d2] dark:border-[#363431] focus:border-[#52801e] dark:focus:border-[#629924] focus:outline-none text-[#2d2b28] dark:text-[#c4c3be]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
