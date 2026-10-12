import React, { useState } from 'react';
import { TlbmcState, TlbmcLayer } from '../types';

interface TlbmcTabProps {
  tlbmc: TlbmcState;
  onChange: (layer: keyof TlbmcState, field: string, value: string) => void;
}

export const TlbmcTab: React.FC<TlbmcTabProps> = ({ tlbmc, onChange }) => {
  const [activeLayer, setActiveLayer] = useState<TlbmcLayer>('layer-economic');

  return (
    <section className="space-y-6">
      <div className="bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-5 shadow-xs">
        {/* Header & Subtab Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#d8d6d2] dark:border-[#363431] pb-3 mb-4 gap-3">
          <div>
            <h2 className="text-base font-bold tracking-tight text-[#111111] dark:text-white">
              コース4 / タスク2: 三層構造ビジネスモデル・キャンバス (TLBMC)
            </h2>
            <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
              Joyce & Paquin (2016) モデルに基づく経済・環境ライフサイクル・社会ステークホルダーの3層分析。
            </p>
          </div>

          <div className="flex rounded border border-[#d8d6d2] dark:border-[#363431] p-0.5 bg-[#edebe9] dark:bg-[#161512] text-xs">
            <button
              onClick={() => setActiveLayer('layer-economic')}
              className={`px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer ${
                activeLayer === 'layer-economic'
                  ? 'bg-[#ffffff] dark:bg-[#262421] text-[#2d2b28] dark:text-[#c4c3be] shadow-xs'
                  : 'text-[#6e6a64] dark:text-[#8a8882]'
              }`}
            >
              1. 経済 (Economic)
            </button>
            <button
              onClick={() => setActiveLayer('layer-environmental')}
              className={`px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer ${
                activeLayer === 'layer-environmental'
                  ? 'bg-[#ffffff] dark:bg-[#262421] text-[#2d2b28] dark:text-[#c4c3be] shadow-xs'
                  : 'text-[#6e6a64] dark:text-[#8a8882]'
              }`}
            >
              2. 環境 (Environmental)
            </button>
            <button
              onClick={() => setActiveLayer('layer-social')}
              className={`px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer ${
                activeLayer === 'layer-social'
                  ? 'bg-[#ffffff] dark:bg-[#262421] text-[#2d2b28] dark:text-[#c4c3be] shadow-xs'
                  : 'text-[#6e6a64] dark:text-[#8a8882]'
              }`}
            >
              3. 社会 (Social)
            </button>
          </div>
        </div>

        {/* LAYER 1: Economic */}
        {activeLayer === 'layer-economic' && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-white">
                経済的BMC (Economic Standard BMC: 9 Blocks)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 text-xs">
              {/* Partners */}
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex flex-col justify-between">
                <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                  主要パートナー (Partners)
                </label>
                <textarea
                  rows={4}
                  value={tlbmc.economic.partners}
                  onChange={(e) => onChange('economic', 'partners', e.target.value)}
                  placeholder="例: 容器製造メーカー、配送各社、洗浄プラント"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>

              {/* Activities & Resources */}
              <div className="space-y-2.5 flex flex-col">
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    主要活動 (Activities)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.economic.activities}
                    onChange={(e) => onChange('economic', 'activities', e.target.value)}
                    placeholder="例: デポジット管理、容器回収洗浄、在庫差配"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    主要資源 (Resources)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.economic.resources}
                    onChange={(e) => onChange('economic', 'resources', e.target.value)}
                    placeholder="例: 耐久容器ストック、RFID追跡システム"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
              </div>

              {/* Value Proposition */}
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] bg-blue-500/5 flex flex-col justify-between">
                <label className="font-bold block mb-1 text-blue-600 dark:text-blue-400">
                  価値提案 (Value Proposition)
                </label>
                <textarea
                  rows={4}
                  value={tlbmc.economic.vp}
                  onChange={(e) => onChange('economic', 'vp', e.target.value)}
                  placeholder="例: 包装廃棄コストゼロ化と環境ブランディングの同時達成"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>

              {/* Relationships & Channels */}
              <div className="space-y-2.5 flex flex-col">
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    顧客との関係 (Relationships)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.economic.rel}
                    onChange={(e) => onChange('economic', 'rel', e.target.value)}
                    placeholder="例: SLA長期契約、APIデータ共有"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    チャネル (Channels)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.economic.chan}
                    onChange={(e) => onChange('economic', 'chan', e.target.value)}
                    placeholder="例: B2B直接商談、EC連携プラットフォーム"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
              </div>

              {/* Segments */}
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex flex-col justify-between">
                <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                  顧客セグメント (Segments)
                </label>
                <textarea
                  rows={4}
                  value={tlbmc.economic.seg}
                  onChange={(e) => onChange('economic', 'seg', e.target.value)}
                  placeholder="例: 大手日用品メーカー、持続可能性重視のD2Cブランド"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>
            </div>

            {/* Costs & Revenues */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs pt-1">
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                  コスト構造 (Cost Structure)
                </label>
                <textarea
                  rows={2}
                  value={tlbmc.economic.costs}
                  onChange={(e) => onChange('economic', 'costs', e.target.value)}
                  placeholder="例: 容器製造イニシャル費、洗浄・検査オペレーション費、物流回収費"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                  収益の流れ (Revenue Streams)
                </label>
                <textarea
                  rows={2}
                  value={tlbmc.economic.rev}
                  onChange={(e) => onChange('economic', 'rev', e.target.value)}
                  placeholder="例: 容器利用従量サブスクリプション、データインサイト提供料、紛失補償金"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>
            </div>
          </div>
        )}

        {/* LAYER 2: Environmental */}
        {activeLayer === 'layer-environmental' && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-white">
                環境ライフサイクルBMC (Environmental Life Cycle Canvas: 9 Blocks)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 text-xs">
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex flex-col justify-between">
                <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                  サプライ & アウトソーシング (Supplies & Outsourcing)
                </label>
                <textarea
                  rows={4}
                  value={tlbmc.environmental.supplies}
                  onChange={(e) => onChange('environmental', 'supplies', e.target.value)}
                  placeholder="例: 認証バイオプラスチック原料調達、太陽光電力稼働の洗浄工場"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>

              <div className="space-y-2.5 flex flex-col">
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    生産 (Production)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.environmental.prod}
                    onChange={(e) => onChange('environmental', 'prod', e.target.value)}
                    placeholder="例: 射出成形時の端材100%再利用、低エネルギー金型"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    原材料 (Materials)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.environmental.materials}
                    onChange={(e) => onChange('environmental', 'materials', e.target.value)}
                    placeholder="例: 高耐久PP、食品安全リサイクル材、生分解性パッキン"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
              </div>

              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] bg-emerald-500/5 flex flex-col justify-between">
                <label className="font-bold block mb-1 text-emerald-600 dark:text-emerald-400">
                  機能的価値 (Functional Value)
                </label>
                <textarea
                  rows={4}
                  value={tlbmc.environmental.func}
                  onChange={(e) => onChange('environmental', 'func', e.target.value)}
                  placeholder="例: 100回以上の再利用サイクルによる輸送耐性と衛生保証"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>

              <div className="space-y-2.5 flex flex-col">
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    使用段階 (Use Phase)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.environmental.use}
                    onChange={(e) => onChange('environmental', 'use', e.target.value)}
                    placeholder="例: 破損ゼロのスタッキング設計、洗浄時の節水機構"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    流通・配送 (Distribution)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.environmental.dist}
                    onChange={(e) => onChange('environmental', 'dist', e.target.value)}
                    placeholder="例: EVトラック共同配送、折りたたみによる空輸容積70%削減"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
              </div>

              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex flex-col justify-between">
                <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                  寿命終了・廃棄 (End of Life)
                </label>
                <textarea
                  rows={4}
                  value={tlbmc.environmental.eol}
                  onChange={(e) => onChange('environmental', 'eol', e.target.value)}
                  placeholder="例: 寿命を迎えた容器の完全マテリアルリサイクル（次世代容器へ再粉砕）"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs pt-1">
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <label className="font-bold block mb-1 text-red-600 dark:text-red-400">
                  環境負荷・影響 (Environmental Impacts)
                </label>
                <textarea
                  rows={2}
                  value={tlbmc.environmental.impacts}
                  onChange={(e) => onChange('environmental', 'impacts', e.target.value)}
                  placeholder="例: 回収・洗浄オペレーションに伴う水消費、初期成型エネルギー"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <label className="font-bold block mb-1 text-emerald-600 dark:text-emerald-400">
                  環境便益 (Environmental Benefits)
                </label>
                <textarea
                  rows={2}
                  value={tlbmc.environmental.benefits}
                  onChange={(e) => onChange('environmental', 'benefits', e.target.value)}
                  placeholder="例: 年間450トンの使い捨てプラ削減、Scope 3 CO2排出量 62%削減"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>
            </div>
          </div>
        )}

        {/* LAYER 3: Social */}
        {activeLayer === 'layer-social' && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-white">
                社会ステークホルダーBMC (Social Stakeholder Canvas: 9 Blocks)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 text-xs">
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex flex-col justify-between">
                <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                  地域コミュニティ (Local Communities)
                </label>
                <textarea
                  rows={4}
                  value={tlbmc.social.comm}
                  onChange={(e) => onChange('social', 'comm', e.target.value)}
                  placeholder="例: 洗浄拠点での地域雇用創出、美化活動を通じた地域連携"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>

              <div className="space-y-2.5 flex flex-col">
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    ガバナンス (Governance)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.social.gov}
                    onChange={(e) => onChange('social', 'gov', e.target.value)}
                    placeholder="例: 透明性高いLCA情報開示、第三者監査委員会"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    従業員 (Employees)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.social.emp}
                    onChange={(e) => onChange('social', 'emp', e.target.value)}
                    placeholder="例: 安全衛生基準遵守、サーキュラーエコノミー研修"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
              </div>

              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] bg-amber-500/5 flex flex-col justify-between">
                <label className="font-bold block mb-1 text-amber-600 dark:text-amber-400">
                  社会的価値 (Social Value)
                </label>
                <textarea
                  rows={4}
                  value={tlbmc.social.val}
                  onChange={(e) => onChange('social', 'val', e.target.value)}
                  placeholder="例: 「ごみを生まない生活様式」への行動変容と連帯感の醸成"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>

              <div className="space-y-2.5 flex flex-col">
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    社会文化 (Societal Culture)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.social.cult}
                    onChange={(e) => onChange('social', 'cult', e.target.value)}
                    placeholder="例: 使い捨てからリユースを誇る意識への規範シフト"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
                <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex-1">
                  <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                    普及規模 (Scale of Outreach)
                  </label>
                  <textarea
                    rows={2}
                    value={tlbmc.social.scale}
                    onChange={(e) => onChange('social', 'scale', e.target.value)}
                    placeholder="例: 首都圏主要5都市から全国150万世帯への波及"
                    className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                  />
                </div>
              </div>

              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431] flex flex-col justify-between">
                <label className="font-bold block mb-1 text-[#2d2b28] dark:text-neutral-200">
                  エンドユーザー (End User)
                </label>
                <textarea
                  rows={4}
                  value={tlbmc.social.user}
                  onChange={(e) => onChange('social', 'user', e.target.value)}
                  placeholder="例: 日常生活の中で無理なく環境貢献できる共感型消費者"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs pt-1">
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <label className="font-bold block mb-1 text-red-600 dark:text-red-400">
                  社会的負の影響 (Social Impacts)
                </label>
                <textarea
                  rows={2}
                  value={tlbmc.social.impacts}
                  onChange={(e) => onChange('social', 'impacts', e.target.value)}
                  placeholder="例: 従来の使い捨て包装メーカーでの段階的事業転換負担"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>
              <div className="p-3 rounded border border-[#d8d6d2] dark:border-[#363431]">
                <label className="font-bold block mb-1 text-amber-600 dark:text-amber-400">
                  社会的便益 (Social Benefits)
                </label>
                <textarea
                  rows={2}
                  value={tlbmc.social.benefits}
                  onChange={(e) => onChange('social', 'benefits', e.target.value)}
                  placeholder="例: 地域循環型モデルによる雇用拡大、消費者の環境意識向上"
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-xs focus:outline-none resize-none text-[#2d2b28] dark:text-[#c4c3be]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
