import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  FileSpreadsheet,
  Download,
  Upload,
  RefreshCw,
  Printer,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  Layers,
  Leaf,
  Users,
  TrendingUp,
  Cpu,
  HelpCircle,
  FileText
} from 'lucide-react';

// --- Type Definitions ---
export interface SdgItem {
  id: number;
  name: string;
}

export interface CausalRow {
  cause: string;
  polarity: '[+]' | '[-]';
  effect: string;
  isLeverage: boolean;
  note: string;
}

export interface SustainState {
  concept: {
    name: string;
    org: string;
    challenge: string;
    stakeholders: string;
    solution: string;
    credibility: string;
    sdgs: number[];
    ask: string;
    timeline: string;
  };
  fourP: {
    people: string;
    planet: string;
    profit: string;
    progress: string;
  };
  ambition: {
    type: string;
    rationale: string;
  };
  system: {
    causalRows: CausalRow[];
    hmw: {
      action: string;
      target: string;
      outcome: string;
    };
  };
  vps: {
    peopleValue: string;
    peopleKpi: string;
    planetValue: string;
    planetKpi: string;
    profitValue: string;
    profitKpi: string;
    progressValue: string;
    progressKpi: string;
    statement: string;
  };
  tlbmc: {
    economic: {
      partners: string;
      activities: string;
      resources: string;
      vp: string;
      rel: string;
      chan: string;
      seg: string;
      costs: string;
      rev: string;
    };
    environmental: {
      supplies: string;
      prod: string;
      materials: string;
      func: string;
      use: string;
      dist: string;
      eol: string;
      impacts: string;
      benefits: string;
    };
    social: {
      comm: string;
      gov: string;
      emp: string;
      val: string;
      cult: string;
      scale: string;
      user: string;
      impacts: string;
      benefits: string;
    };
  };
}

export const SDGS_DATA: SdgItem[] = [
  { id: 1, name: "貧困をなくそう" },
  { id: 2, name: "飢餓をゼロに" },
  { id: 3, name: "すべての人に健康と福祉を" },
  { id: 4, name: "質の高い教育をみんなに" },
  { id: 5, name: "ジェンダー平等を実現しよう" },
  { id: 6, name: "安全な水とトイレを世界中に" },
  { id: 7, name: "エネルギーをみんなにそしてクリーンに" },
  { id: 8, name: "働きがいも経済成長も" },
  { id: 9, name: "産業と技術革新の基盤をつくろう" },
  { id: 10, name: "人や国の不平等をなくそう" },
  { id: 11, name: "住み続けられるまちづくりを" },
  { id: 12, name: "つくる責任 つかう責任" },
  { id: 13, name: "気候変動に具体的な対策を" },
  { id: 14, name: "海の豊かさを守ろう" },
  { id: 15, name: "陸の豊かさも守ろう" },
  { id: 16, name: "平和と公正をすべての人に" },
  { id: 17, name: "パートナーシップで目標を達成しよう" }
];

export const SAMPLE_STATE: SustainState = {
  concept: {
    name: "LoopPack - 循環型リユース資材プラットフォーム",
    org: "持続可能包装推進コンソーシアム",
    challenge: "EC・小売の急拡大に伴う使い捨てプラスチック資材の大量破棄と、リニア型サプライチェーン（採掘-製造-使い捨て）によるCO2排出および海洋汚染の加速。",
    stakeholders: "日用品メーカー、EC通販事業者、配送物流会社、資材回収拠点、一般消費者、地方自治体",
    solution: "高耐久バイオプラスチック製標準化コンテナとRFID分散管理システムを組み合わせ、業界横断型でシェア・回収・洗浄・再流通を行うクローズドループ・インフラ。",
    credibility: "大手物流企業との12ヶ月共同PoC完了済（破損率0.8%維持）および東京大学材料工学研究室との共同特許出願中。",
    sdgs: [9, 11, 12, 13, 17],
    ask: "首都圏300店舗・10万人規模の実証拡大に向けたシード調達 4,500万円および自治体モデル事業採択",
    timeline: "PoCフェーズ 9ヶ月、商用化 18ヶ月、全国展開 36ヶ月"
  },
  fourP: {
    people: "返却の手間を最小化するためコンビニ受取・街頭ロッカー返却に対応し、デポジット還元で日常の生活習慣へ定着させる。",
    planet: "容器の想定回転数50回以上により、1回あたりのGHG排出量を使い捨て段ボール比で74%削減する。",
    profit: "利用企業は初期包装資材費を30%削減、デポジット管理費と容器利用料の従量課金でユニットエコノミクス黒字化を担保。",
    progress: "長距離パッシブRFIDとAPI群を統合し、全自動で所在・洗浄履歴・耐用回数を追跡できる管理基盤を構築。"
  },
  ambition: {
    type: "破壊的 (Disruptive)",
    rationale: "実証済みのRFIDおよび成形技術（既存技術）を活用しつつ、資材を『購入・廃棄』から『従量利用・回収シェア』へとビジネスモデルを根本的に転換するため。"
  },
  system: {
    causalRows: [
      {
        cause: "デポジット還元率の水準",
        polarity: "[+]",
        effect: "消費者の容器返却率",
        isLeverage: true,
        note: "還元インセンティブの適正化が返却の自発的行動を劇的に高める最重要介入ポイント。"
      },
      {
        cause: "消費者の容器返却率",
        polarity: "[+]",
        effect: "再流通コンテナの回転効率",
        isLeverage: false,
        note: "返却率が高まることで洗浄・補修サイクルが短縮し、必要総在庫数を抑制できる。"
      },
      {
        cause: "再流通コンテナの回転効率",
        polarity: "[-]",
        effect: "使い捨てプラ包装の総破棄量",
        isLeverage: true,
        note: "循環サイクルが高速化するほど、サプライチェーン全体のバージン資材需要が急減する。"
      },
      {
        cause: "使い捨てプラ包装の総破棄量",
        polarity: "[-]",
        effect: "自治体の廃棄物処理コスト",
        isLeverage: false,
        note: "焼却・埋立負担の低減が地域財政と脱炭素目標達成に寄与する。"
      }
    ],
    hmw: {
      action: "デポジット還元インセンティブと街頭回収ネットワークを最適化し",
      target: "都市部消費者の返却行動",
      outcome: "容器回収率95%以上を達成し、使い捨て包装破棄ゼロの循環型配送を実現する"
    }
  },
  vps: {
    peopleValue: "廃棄ストレスの解消、環境貢献への即時リワード、生活のシンプル化",
    peopleKpi: "サービス継続利用率 88%以上、回収NPS +42",
    planetValue: "プラスチック消費半減、製品ライフサイクルCO2削減、資源の閉ループ維持",
    planetKpi: "年間バージンプラ削減量 320トン、資材循環率 95%以上",
    profitValue: "包装調達コストの安定化、ESG評価の向上による企業ブランド価値向上",
    profitKpi: "顧客企業の包装コスト 22%削減、チャーンレート 1.5%未満",
    progressValue: "所在追跡の完全透明化、サプライチェーンAPI標準化、洗浄耐久マテリアル",
    progressKpi: "RFID自動読取精度 99.9%、コンテナ耐用洗浄回数 100回達成",
    statement: "LoopPackは、配送資材の大量破棄に悩む小売・EC事業者と環境配慮を志向する消費者に対し、高耐久バイオコンテナとRFID循環インフラを提供することで、包装コストを22%削減しながら使い捨てプラ包装を95%削減し、誰もが無理なく循環経済に参加できる持続可能な配送標準を実現します。"
  },
  tlbmc: {
    economic: {
      partners: "大手宅配便各社、バイオプラ成形メーカー、主要コンビニチェーン",
      activities: "コンテナ在庫管理、回収・洗浄拠点オペレーション、追跡クラウド保守",
      resources: "共有コンテナ資産、独自RFIDトラッキング台帳、洗浄特許設備",
      vp: "調達コストと廃棄物処理負担を同時に削減する次世代リユース包装インフラ",
      rel: "B2B企業向けSLA管理、API自動発注連携、月次排出削減レポート提供",
      chan: "大手ECモールへのシステム組込、流通企業への直接提案",
      seg: "持続可能性を重視する日用品・アパレルEC企業、食品宅配事業者",
      costs: "コンテナ初期製造費、洗浄・配送運行コスト、システム開発費",
      rev: "容器1回あたりの利用従量課金、デポジット運用マージン、データAPI利用料"
    },
    environmental: {
      supplies: "認証バイオベース樹脂サプライヤー、再エネ100%稼働の契約洗浄工場",
      prod: "射出成形端材の完全リペレット化と低温度金型による省エネ生産",
      materials: "食品安全基準適合の高耐久複合PP、植物由来バインダー",
      func: "破損せず内容物を守り、100回以上の再利用を可能にする耐衝撃・防水性能",
      use: "利用企業の既存自動梱包ラインへのそのまま投入可能なスタッキング設計",
      dist: "返却コンテナの平坦折りたたみ構造による返送時積載容積75%圧縮",
      eol: "100回使用後のマテリアルリサイクル保証（粉砕して二次製品部材へ）",
      impacts: "初期製造時の樹脂エネルギー消費、回収時の個別輸送CO2排出",
      benefits: "使い捨て段ボール・緩衝材の年間400トン削減、Scope3排出量62%削減"
    },
    social: {
      comm: "洗浄センターにおける地域雇用の創出とシルバー人材センター連携",
      gov: "マテリアルフローおよびLCAの第三者検証と年次インパクトレポートの開示",
      emp: "梱包・運搬作業員の身体的負荷軽減（軽量設計と持ち手最適化）",
      val: "消費者が日常の買い物を通じて自然に脱炭素に参加できる安心感と誇り",
      cult: "「使い捨てが当たり前」から「大切に巡らせる」文化への社会的価値観シフト",
      scale: "首都圏からスタートし、全国47都道府県の配送拠点への段階的展開",
      user: "環境配慮に関心がありつつも過度な不便を望まない都市部消費者",
      impacts: "既存の使い捨て段ボール製造事業者における需要減少と業態転換課題",
      benefits: "ごみ集積所の混雑緩和、地域サーキュラーエコノミーのモデル形成"
    }
  }
};

const EMPTY_STATE: SustainState = {
  concept: { name: "", org: "", challenge: "", stakeholders: "", solution: "", credibility: "", sdgs: [], ask: "", timeline: "" },
  fourP: { people: "", planet: "", profit: "", progress: "" },
  ambition: { type: "漸進的 (Incremental)", rationale: "" },
  system: { causalRows: [], hmw: { action: "", target: "", outcome: "" } },
  vps: { peopleValue: "", peopleKpi: "", planetValue: "", planetKpi: "", profitValue: "", profitKpi: "", progressValue: "", progressKpi: "", statement: "" },
  tlbmc: {
    economic: { partners: "", activities: "", resources: "", vp: "", rel: "", chan: "", seg: "", costs: "", rev: "" },
    environmental: { supplies: "", prod: "", materials: "", func: "", use: "", dist: "", eol: "", impacts: "", benefits: "" },
    social: { comm: "", gov: "", emp: "", val: "", cult: "", scale: "", user: "", impacts: "", benefits: "" }
  }
};

export default function SustainEvaluator() {
  const [state, setState] = useState<SustainState>(() => {
    try {
      const saved = localStorage.getItem('sust_strategy_state');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return SAMPLE_STATE;
  });

  const [activeTab, setActiveTab] = useState<'concept' | 'system' | 'vps' | 'tlbmc' | 'summary'>('concept');
  const [tlbmcSubtab, setTlbmcSubtab] = useState<'economic' | 'environmental' | 'social'>('economic');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto-save
  useEffect(() => {
    try {
      localStorage.setItem('sust_strategy_state', JSON.stringify(state));
    } catch (e) {
      console.error('LocalStorage error', e);
    }
  }, [state]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Concept updates
  const updateConcept = (key: keyof SustainState['concept'], val: any) => {
    setState(prev => ({
      ...prev,
      concept: { ...prev.concept, [key]: val }
    }));
  };

  const toggleSdg = (id: number) => {
    const cur = state.concept.sdgs;
    const next = cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id].sort((a, b) => a - b);
    updateConcept('sdgs', next);
  };

  // Four P updates
  const updateFourP = (key: keyof SustainState['fourP'], val: string) => {
    setState(prev => ({
      ...prev,
      fourP: { ...prev.fourP, [key]: val }
    }));
  };

  // Ambition updates
  const setAmbitionType = (type: string) => {
    setState(prev => ({
      ...prev,
      ambition: { ...prev.ambition, type }
    }));
  };

  // System Causal Rows
  const addCausalRow = () => {
    setState(prev => ({
      ...prev,
      system: {
        ...prev.system,
        causalRows: [
          ...prev.system.causalRows,
          { cause: "", polarity: "[+]", effect: "", isLeverage: false, note: "" }
        ]
      }
    }));
  };

  const updateCausalRow = (index: number, field: keyof CausalRow, val: any) => {
    setState(prev => {
      const rows = [...prev.system.causalRows];
      rows[index] = { ...rows[index], [field]: val };
      return {
        ...prev,
        system: { ...prev.system, causalRows: rows }
      };
    });
  };

  const removeCausalRow = (index: number) => {
    setState(prev => ({
      ...prev,
      system: {
        ...prev.system,
        causalRows: prev.system.causalRows.filter((_, i) => i !== index)
      }
    }));
  };

  // HMW updates
  const updateHmw = (field: keyof SustainState['system']['hmw'], val: string) => {
    setState(prev => ({
      ...prev,
      system: {
        ...prev.system,
        hmw: { ...prev.system.hmw, [field]: val }
      }
    }));
  };

  // VPS updates
  const updateVps = (field: keyof SustainState['vps'], val: string) => {
    setState(prev => ({
      ...prev,
      vps: { ...prev.vps, [field]: val }
    }));
  };

  const autoGenerateVpsStatement = () => {
    const st = `${state.concept.name || '当事業'}は、${state.concept.challenge ? '課題（' + state.concept.challenge.slice(0, 30) + '...）' : '社会的課題'}に直面する${state.concept.stakeholders || '関係者'}に対し、${state.concept.solution || '独自の持続可能ソリューション'}を提供することで、${state.vps.profitValue || '経済的価値'}と${state.vps.planetValue || '環境循環'}を両立させ、${state.vps.peopleValue || '社会的望ましさ'}を実現します。`;
    updateVps('statement', st);
    showToast('ステートメントを自動生成しました');
  };

  // TLBMC updates
  const updateTlbmc = (
    layer: 'economic' | 'environmental' | 'social',
    field: string,
    val: string
  ) => {
    setState(prev => ({
      ...prev,
      tlbmc: {
        ...prev.tlbmc,
        [layer]: {
          ...prev.tlbmc[layer],
          [field]: val
        }
      }
    }));
  };

  // JSON Export / Import
  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const a = document.createElement('a');
    const filename = `sustainable_strategy_${(state.concept.name || 'eval').replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.json`;
    a.setAttribute("href", dataStr);
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast('JSONファイルを書き出しました');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && parsed.concept && parsed.fourP && parsed.tlbmc) {
          setState(parsed);
          showToast('JSONデータを正常に読み込みました');
        } else {
          showToast('形式が一致しません');
        }
      } catch {
        showToast('JSONの解析に失敗しました');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleLoadSample = () => {
    if (window.confirm('現在の内容を講義サンプルデータで上書きしますか？')) {
      setState(SAMPLE_STATE);
      showToast('サンプルデータをロードしました');
    }
  };

  const handleReset = () => {
    if (window.confirm('入力内容をすべて消去して白紙に戻しますか？')) {
      setState(EMPTY_STATE);
      showToast('全データを初期化しました');
    }
  };

  return (
    <div className="min-h-screen bg-[#161512] text-[#c4c3be] font-sans selection:bg-[#629924] selection:text-white flex flex-col">
      {/* Toast Bar */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-[#629924] text-white text-xs font-semibold px-4 py-2.5 rounded shadow-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#262421]/95 backdrop-blur border-b border-[#363431]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="w-8 h-8 rounded bg-[#302e2b] hover:bg-[#3d3a36] text-white flex items-center justify-center transition-colors"
              title="ツール一覧に戻る"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="w-8 h-8 rounded bg-[#629924] text-white flex items-center justify-center font-bold text-sm tracking-wider">
              OU
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-bold leading-tight text-white">
                サステナブル経営戦略 総合評価シート
              </h1>
              <p className="text-[11px] text-[#8a8882]">
                The Open University & Explorer Labs 実践フレームワーク体系
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={handleLoadSample}
              className="px-2.5 py-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#363431] text-[#c4c3be] flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">サンプル読込</span>
            </button>
            <label className="px-2.5 py-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#363431] text-[#c4c3be] flex items-center gap-1.5 cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">インポート</span>
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>
            <button
              onClick={handleExport}
              className="px-2.5 py-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#363431] text-[#c4c3be] flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">エクスポート</span>
            </button>
            <button
              onClick={handleReset}
              className="px-2 py-1.5 rounded bg-[#302e2b] hover:bg-red-950/40 text-neutral-400 hover:text-red-400 border border-[#363431] flex items-center gap-1 cursor-pointer"
              title="初期化"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setActiveTab('summary');
                setTimeout(() => window.print(), 100);
              }}
              className="px-3 py-1.5 rounded bg-[#629924] hover:bg-[#75b32c] text-white font-semibold flex items-center gap-1.5 shadow cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>A4印刷 / PDF</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex space-x-1 border-t border-[#363431] overflow-x-auto">
          {[
            { id: 'concept', label: '1. 概要・4P優先・野心', icon: FileSpreadsheet },
            { id: 'system', label: '2. システム思考・HMW', icon: Layers },
            { id: 'vps', label: '3. 価値提案キャンバス', icon: Sparkles },
            { id: 'tlbmc', label: '4. 三層BMC (TLBMC)', icon: Layers },
            { id: 'summary', label: '5. A4総合サマリー出力', icon: FileText },
          ].map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2.5 px-3 border-b-2 font-medium text-xs whitespace-nowrap flex items-center gap-1.5 transition-colors cursor-pointer ${
                  active
                    ? 'border-[#629924] text-white font-bold bg-[#161512]/60'
                    : 'border-transparent text-[#8a8882] hover:text-[#c4c3be]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        {/* TAB 1: Concept & Ambition */}
        {activeTab === 'concept' && (
          <div className="space-y-6">
            {/* Concept Info */}
            <div className="bg-[#262421] border border-[#363431] rounded-xl p-5 space-y-4">
              <div className="border-b border-[#363431] pb-3">
                <h2 className="text-base font-bold text-white">
                  事業コンセプト定義 & 壮大な課題 (Grand Challenges)
                </h2>
                <p className="text-xs text-[#8a8882]">
                  持続可能ビジネスモデルの起点となる社会的課題とソリューション骨子を定義します。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1 text-white">事業コンセプト名称</label>
                  <input
                    type="text"
                    value={state.concept.name}
                    onChange={(e) => updateConcept('name', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none text-white font-bold"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-white">推進組織 / コンソーシアム名</label>
                  <input
                    type="text"
                    value={state.concept.org}
                    onChange={(e) => updateConcept('org', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block font-semibold mb-1 text-white">直面する壮大な課題 (Grand Challenge)</label>
                  <textarea
                    rows={2}
                    value={state.concept.challenge}
                    onChange={(e) => updateConcept('challenge', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-white">主要ステークホルダー</label>
                  <input
                    type="text"
                    value={state.concept.stakeholders}
                    onChange={(e) => updateConcept('stakeholders', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-white">信頼性の根拠 (Credibility & Traction)</label>
                  <input
                    type="text"
                    value={state.concept.credibility}
                    onChange={(e) => updateConcept('credibility', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block font-semibold mb-1 text-white">提供ソリューションの概要</label>
                  <textarea
                    rows={2}
                    value={state.concept.solution}
                    onChange={(e) => updateConcept('solution', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                  />
                </div>
              </div>

              {/* SDGs Grid */}
              <div className="pt-2">
                <label className="block font-semibold text-xs text-white mb-2">
                  連携SDGs目標 (複数選択)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
                  {SDGS_DATA.map(sdg => {
                    const checked = state.concept.sdgs.includes(sdg.id);
                    return (
                      <button
                        key={sdg.id}
                        type="button"
                        onClick={() => toggleSdg(sdg.id)}
                        className={`p-2 rounded border text-left flex items-start gap-1.5 transition-all cursor-pointer ${
                          checked
                            ? 'border-[#629924] bg-[#629924]/15 text-white font-semibold'
                            : 'border-[#363431] bg-[#161512]/40 text-[#8a8882] hover:bg-[#302e2b]'
                        }`}
                      >
                        <span className="font-mono text-[10px] text-[#75b32c] mt-0.5">G{sdg.id}</span>
                        <span className="text-[11px] leading-tight line-clamp-2">{sdg.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 4P Validation Principle */}
            <div className="bg-[#262421] border border-[#363431] rounded-xl p-5 space-y-4">
              <div className="border-b border-[#363431] pb-3">
                <h2 className="text-base font-bold text-white">
                  4P検証優先順位の設計 (People → Planet → Profit → Progress)
                </h2>
                <p className="text-xs text-[#8a8882]">
                  持続可能ビジネスでは「人の望ましさ」と「環境の必要性」を先行検証し、その後に経済的実行可能性を成立させます。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-lg border border-[#363431] bg-[#161512]/50 space-y-2">
                  <span className="font-bold font-mono text-amber-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> 1. PEOPLE (望ましさ)
                  </span>
                  <textarea
                    rows={3}
                    value={state.fourP.people}
                    onChange={(e) => updateFourP('people', e.target.value)}
                    className="w-full p-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none text-xs"
                    placeholder="ステークホルダー・消費者が本当に望む行動変容やストレス解消"
                  />
                </div>

                <div className="p-3.5 rounded-lg border border-[#363431] bg-[#161512]/50 space-y-2">
                  <span className="font-bold font-mono text-emerald-400 flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5" /> 2. PLANET (環境の必要性)
                  </span>
                  <textarea
                    rows={3}
                    value={state.fourP.planet}
                    onChange={(e) => updateFourP('planet', e.target.value)}
                    className="w-full p-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none text-xs"
                    placeholder="生態系循環・資源枯渇防止・排出削減への寄与"
                  />
                </div>

                <div className="p-3.5 rounded-lg border border-[#363431] bg-[#161512]/50 space-y-2">
                  <span className="font-bold font-mono text-blue-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> 3. PROFIT (経済的実行可能性)
                  </span>
                  <textarea
                    rows={3}
                    value={state.fourP.profit}
                    onChange={(e) => updateFourP('profit', e.target.value)}
                    className="w-full p-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none text-xs"
                    placeholder="ユニットエコノミクスの成立、コスト削減、適正利潤"
                  />
                </div>

                <div className="p-3.5 rounded-lg border border-[#363431] bg-[#161512]/50 space-y-2">
                  <span className="font-bold font-mono text-purple-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> 4. PROGRESS (技術的実現可能性)
                  </span>
                  <textarea
                    rows={3}
                    value={state.fourP.progress}
                    onChange={(e) => updateFourP('progress', e.target.value)}
                    className="w-full p-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none text-xs"
                    placeholder="標準化技術、API基盤、マテリアル工学による持続的拡張"
                  />
                </div>
              </div>
            </div>

            {/* Ambition Matrix */}
            <div className="bg-[#262421] border border-[#363431] rounded-xl p-5 space-y-4">
              <div className="border-b border-[#363431] pb-3">
                <h2 className="text-base font-bold text-white">
                  イノベーション野心マトリックス (Ambition Matrix)
                </h2>
                <p className="text-xs text-[#8a8882]">
                  技術革新軸とビジネスモデル変革軸に基づき、自社取り組みの位置づけを特定します。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    {
                      id: "破壊的 (Disruptive)",
                      label: "破壊的 (Disruptive)",
                      sub: "新ビジネスモデル x 既存技術",
                      desc: "実証済みの技術を用いて市場の商慣習や課金形態を根本変革。"
                    },
                    {
                      id: "建築的 (Architectural)",
                      label: "建築的 (Architectural)",
                      sub: "新ビジネスモデル x 新技術",
                      desc: "先端技術開発と新システムを融合し、新たな産業構造を創造。"
                    },
                    {
                      id: "漸進的 (Incremental)",
                      label: "漸進的 (Incremental)",
                      sub: "既存ビジネスモデル x 既存技術",
                      desc: "現行製品・プロセスの効率化や資源消費削減の改善を積み重ね。"
                    },
                    {
                      id: "急進的 (Radical)",
                      label: "急進的 (Radical)",
                      sub: "既存ビジネスモデル x 新技術",
                      desc: "現行取引を維持しつつ革新的材料や省エネ技術等を導入。"
                    }
                  ].map(quad => {
                    const isSelected = state.ambition.type === quad.id;
                    return (
                      <div
                        key={quad.id}
                        onClick={() => setAmbitionType(quad.id)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#629924] bg-[#629924]/15 text-white'
                            : 'border-[#363431] hover:border-[#629924] bg-[#161512]/40 text-[#c4c3be]'
                        }`}
                      >
                        <div className="flex items-center justify-between font-bold mb-1 text-xs">
                          <span>{quad.label}</span>
                          {isSelected && <span className="text-[#75b32c] font-mono text-[10px]">[SELECTED]</span>}
                        </div>
                        <p className="text-[10px] text-[#8a8882]">{quad.sub}</p>
                        <p className="text-[11px] mt-1.5 leading-snug">{quad.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-3 text-xs flex flex-col justify-between">
                  <div>
                    <label className="block font-semibold mb-1 text-white">選択されたイノベーション種別</label>
                    <input
                      type="text"
                      readOnly
                      value={state.ambition.type}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] font-mono font-bold text-[#629924]"
                    />
                  </div>
                  <div className="flex-1 mt-2">
                    <label className="block font-semibold mb-1 text-white">戦略的選定理由 (Rationale)</label>
                    <textarea
                      rows={5}
                      value={state.ambition.rationale}
                      onChange={(e) => setState(prev => ({
                        ...prev,
                        ambition: { ...prev.ambition, rationale: e.target.value }
                      }))}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                      placeholder="例: 実証済みの既存資材技術を活用しつつ、従量定額課金と回収エコシステムという新ビジネスモデルで市場を開拓するため。"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: System Dynamics & HMW */}
        {activeTab === 'system' && (
          <div className="space-y-6">
            <div className="bg-[#262421] border border-[#363431] rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#363431] pb-3">
                <div>
                  <h2 className="text-base font-bold text-white">
                    システム思考・因果関係ループ & レバレッジポイント
                  </h2>
                  <p className="text-xs text-[#8a8882]">
                    ステークホルダーと測定可能な変数を整理し、正負の因果関係[+] / [-]と介入点（レバレッジポイント）を特定します。
                  </p>
                </div>
                <button
                  onClick={addCausalRow}
                  className="px-3 py-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#363431] text-xs font-semibold text-white flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#629924]" />
                  <span>行を追加</span>
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto border border-[#363431] rounded-lg">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#161512] border-b border-[#363431] text-neutral-400 font-semibold">
                      <th className="p-2.5 w-1/4">原因ノード (Cause)</th>
                      <th className="p-2.5 w-16 text-center">極性</th>
                      <th className="p-2.5 w-1/4">結果ノード (Effect)</th>
                      <th className="p-2.5 w-24 text-center">レバレッジ点?</th>
                      <th className="p-2.5">介入メカニズム・メモ</th>
                      <th className="p-2.5 w-12 text-center">削除</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#363431]">
                    {state.system.causalRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#302e2b]/30">
                        <td className="p-2">
                          <input
                            type="text"
                            value={row.cause}
                            onChange={(e) => updateCausalRow(idx, 'cause', e.target.value)}
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#363431] text-xs focus:outline-none focus:border-[#629924]"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <button
                            type="button"
                            onClick={() => updateCausalRow(idx, 'polarity', row.polarity === '[+]' ? '[-]' : '[+]')}
                            className={`font-mono font-bold px-2 py-1 rounded border border-[#363431] text-xs cursor-pointer ${
                              row.polarity === '[+]' ? 'text-emerald-400 bg-emerald-950/20' : 'text-red-400 bg-red-950/20'
                            }`}
                          >
                            {row.polarity}
                          </button>
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={row.effect}
                            onChange={(e) => updateCausalRow(idx, 'effect', e.target.value)}
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#363431] text-xs focus:outline-none focus:border-[#629924]"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <input
                            type="checkbox"
                            checked={row.isLeverage}
                            onChange={(e) => updateCausalRow(idx, 'isLeverage', e.target.checked)}
                            className="rounded text-[#629924] focus:ring-0 cursor-pointer"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={row.note}
                            onChange={(e) => updateCausalRow(idx, 'note', e.target.value)}
                            placeholder="介入メカニズムのメモ"
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#363431] text-xs focus:outline-none focus:border-[#629924]"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <button
                            type="button"
                            onClick={() => removeCausalRow(idx)}
                            className="text-red-400 hover:text-red-300 font-mono text-xs cursor-pointer"
                          >
                            [X]
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* HMW Generator */}
              <div className="mt-6 pt-5 border-t border-[#363431] space-y-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    How Might We? (HMW) 統合ステートメント
                  </h3>
                  <p className="text-xs text-[#8a8882]">
                    特定したレバレッジポイントを元に、定型フォーマットに落とし込みます。
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block font-semibold mb-1 text-white">1. 達成したい行動 (Action)</label>
                    <input
                      type="text"
                      value={state.system.hmw.action}
                      onChange={(e) => updateHmw('action', e.target.value)}
                      placeholder="例: 回収インセンティブと集荷拠点を最適化し"
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-white">2. 影響を与えたい対象 (Target)</label>
                    <input
                      type="text"
                      value={state.system.hmw.target}
                      onChange={(e) => updateHmw('target', e.target.value)}
                      placeholder="例: 都市部一般消費者の返却行動"
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-white">3. 理想的な成果 (Ideal Outcome)</label>
                    <input
                      type="text"
                      value={state.system.hmw.outcome}
                      onChange={(e) => updateHmw('outcome', e.target.value)}
                      placeholder="例: 容器回収率95%以上とサプライチェーン全体のプラゴミ半減"
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded bg-[#161512] border border-[#363431]">
                  <span className="block text-[11px] font-mono font-bold text-[#8a8882] mb-1">
                    統合 HMW 問い文
                  </span>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-[#75b32c] font-mono">
                    どうすれば、[{state.system.hmw.action || '達成したい行動'}] ＋ [{state.system.hmw.target || '対象'}] によって、[{state.system.hmw.outcome || '成果'}] を実現できるだろうか？
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Value Proposition Spectrum */}
        {activeTab === 'vps' && (
          <div className="space-y-6">
            <div className="bg-[#262421] border border-[#363431] rounded-xl p-5 space-y-4">
              <div className="border-b border-[#363431] pb-3">
                <h2 className="text-base font-bold text-white">
                  4P 持続可能価値提案キャンバス & 初期検証KPI
                </h2>
                <p className="text-xs text-[#8a8882]">
                  人・地球・利益・進歩の各側面に価値タイプと測定KPIを設定します。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* People */}
                <div className="p-4 rounded-lg border border-[#363431] bg-[#161512]/50 space-y-3">
                  <span className="font-bold font-mono text-amber-400 block border-b border-[#363431] pb-1.5">
                    PEOPLE（社会的望ましさの価値）
                  </span>
                  <div>
                    <label className="block font-semibold mb-1 text-white">提供する中核的価値タイプ</label>
                    <input
                      type="text"
                      value={state.vps.peopleValue}
                      onChange={(e) => updateVps('peopleValue', e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-white">初期検証KPI</label>
                    <input
                      type="text"
                      value={state.vps.peopleKpi}
                      onChange={(e) => updateVps('peopleKpi', e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                </div>

                {/* Planet */}
                <div className="p-4 rounded-lg border border-[#363431] bg-[#161512]/50 space-y-3">
                  <span className="font-bold font-mono text-emerald-400 block border-b border-[#363431] pb-1.5">
                    PLANET（環境の必要性の価値）
                  </span>
                  <div>
                    <label className="block font-semibold mb-1 text-white">提供する中核的価値タイプ</label>
                    <input
                      type="text"
                      value={state.vps.planetValue}
                      onChange={(e) => updateVps('planetValue', e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-white">初期検証KPI</label>
                    <input
                      type="text"
                      value={state.vps.planetKpi}
                      onChange={(e) => updateVps('planetKpi', e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                </div>

                {/* Profit */}
                <div className="p-4 rounded-lg border border-[#363431] bg-[#161512]/50 space-y-3">
                  <span className="font-bold font-mono text-blue-400 block border-b border-[#363431] pb-1.5">
                    PROFIT（経済的実行可能性の価値）
                  </span>
                  <div>
                    <label className="block font-semibold mb-1 text-white">提供する中核的価値タイプ</label>
                    <input
                      type="text"
                      value={state.vps.profitValue}
                      onChange={(e) => updateVps('profitValue', e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-white">初期検証KPI</label>
                    <input
                      type="text"
                      value={state.vps.profitKpi}
                      onChange={(e) => updateVps('profitKpi', e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                </div>

                {/* Progress */}
                <div className="p-4 rounded-lg border border-[#363431] bg-[#161512]/50 space-y-3">
                  <span className="font-bold font-mono text-purple-400 block border-b border-[#363431] pb-1.5">
                    PROGRESS（技術的実現可能性の価値）
                  </span>
                  <div>
                    <label className="block font-semibold mb-1 text-white">提供する中核的価値タイプ</label>
                    <input
                      type="text"
                      value={state.vps.progressValue}
                      onChange={(e) => updateVps('progressValue', e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-white">初期検証KPI</label>
                    <input
                      type="text"
                      value={state.vps.progressKpi}
                      onChange={(e) => updateVps('progressKpi', e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Pitch Statement */}
              <div className="mt-6 pt-5 border-t border-[#363431] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                      バリュー・プロポジション・ステートメント (Value Proposition Statement)
                    </h3>
                    <p className="text-xs text-[#8a8882]">
                      主要ステークホルダーにコンセプトの真価を簡潔に伝える統合ピッチです。
                    </p>
                  </div>
                  <button
                    onClick={autoGenerateVpsStatement}
                    className="px-2.5 py-1 text-xs rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#363431] text-white cursor-pointer"
                  >
                    自動生成
                  </button>
                </div>

                <textarea
                  rows={3}
                  value={state.vps.statement}
                  onChange={(e) => updateVps('statement', e.target.value)}
                  className="w-full p-3 rounded bg-[#161512] border border-[#363431] focus:border-[#629924] outline-none text-xs leading-relaxed font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Triple Layered Business Model Canvas */}
        {activeTab === 'tlbmc' && (
          <div className="space-y-6">
            <div className="bg-[#262421] border border-[#363431] rounded-xl p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#363431] pb-3 gap-3">
                <div>
                  <h2 className="text-base font-bold text-white">
                    三層構造ビジネスモデル・キャンバス (TLBMC)
                  </h2>
                  <p className="text-xs text-[#8a8882]">
                    経済・環境・社会の3つの視点からビジネスモデルを多面的に設計・評価します。
                  </p>
                </div>

                <div className="flex rounded border border-[#363431] p-0.5 bg-[#161512] text-xs">
                  <button
                    onClick={() => setTlbmcSubtab('economic')}
                    className={`px-3 py-1 rounded font-semibold transition-colors cursor-pointer ${
                      tlbmcSubtab === 'economic' ? 'bg-[#302e2b] text-blue-400' : 'text-[#8a8882]'
                    }`}
                  >
                    1. 経済 (Economic)
                  </button>
                  <button
                    onClick={() => setTlbmcSubtab('environmental')}
                    className={`px-3 py-1 rounded font-semibold transition-colors cursor-pointer ${
                      tlbmcSubtab === 'environmental' ? 'bg-[#302e2b] text-emerald-400' : 'text-[#8a8882]'
                    }`}
                  >
                    2. 環境 (Environmental)
                  </button>
                  <button
                    onClick={() => setTlbmcSubtab('social')}
                    className={`px-3 py-1 rounded font-semibold transition-colors cursor-pointer ${
                      tlbmcSubtab === 'social' ? 'bg-[#302e2b] text-amber-400' : 'text-[#8a8882]'
                    }`}
                  >
                    3. 社会 (Social)
                  </button>
                </div>
              </div>

              {/* Economic Layer */}
              {tlbmcSubtab === 'economic' && (
                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-white">パートナー (Partners)</label>
                      <textarea
                        rows={4}
                        value={state.tlbmc.economic.partners}
                        onChange={(e) => updateTlbmc('economic', 'partners', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">主要活動 (Activities)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.economic.activities}
                          onChange={(e) => updateTlbmc('economic', 'activities', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">主要資源 (Resources)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.economic.resources}
                          onChange={(e) => updateTlbmc('economic', 'resources', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-blue-400">価値提案 (Value Proposition)</label>
                      <textarea
                        rows={4}
                        value={state.tlbmc.economic.vp}
                        onChange={(e) => updateTlbmc('economic', 'vp', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">顧客関係 (Relationships)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.economic.rel}
                          onChange={(e) => updateTlbmc('economic', 'rel', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">チャネル (Channels)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.economic.chan}
                          onChange={(e) => updateTlbmc('economic', 'chan', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-white">顧客セグメント (Segments)</label>
                      <textarea
                        rows={4}
                        value={state.tlbmc.economic.seg}
                        onChange={(e) => updateTlbmc('economic', 'seg', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-red-400">コスト構造 (Cost Structure)</label>
                      <textarea
                        rows={2}
                        value={state.tlbmc.economic.costs}
                        onChange={(e) => updateTlbmc('economic', 'costs', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-emerald-400">収益の流れ (Revenue Streams)</label>
                      <textarea
                        rows={2}
                        value={state.tlbmc.economic.rev}
                        onChange={(e) => updateTlbmc('economic', 'rev', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Environmental Layer */}
              {tlbmcSubtab === 'environmental' && (
                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-white">供給 & サプライヤー (Supplies)</label>
                      <textarea
                        rows={4}
                        value={state.tlbmc.environmental.supplies}
                        onChange={(e) => updateTlbmc('environmental', 'supplies', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">生産工程 (Production)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.environmental.prod}
                          onChange={(e) => updateTlbmc('environmental', 'prod', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">材料 (Materials)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.environmental.materials}
                          onChange={(e) => updateTlbmc('environmental', 'materials', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-emerald-400">機能的価値 (Functional Value)</label>
                      <textarea
                        rows={4}
                        value={state.tlbmc.environmental.func}
                        onChange={(e) => updateTlbmc('environmental', 'func', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">使用段階 (Use Phase)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.environmental.use}
                          onChange={(e) => updateTlbmc('environmental', 'use', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">配送・輸送 (Distribution)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.environmental.dist}
                          onChange={(e) => updateTlbmc('environmental', 'dist', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-white">寿命末期 (End-of-Life)</label>
                      <textarea
                        rows={4}
                        value={state.tlbmc.environmental.eol}
                        onChange={(e) => updateTlbmc('environmental', 'eol', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-red-400">環境負荷 (Environmental Impacts)</label>
                      <textarea
                        rows={2}
                        value={state.tlbmc.environmental.impacts}
                        onChange={(e) => updateTlbmc('environmental', 'impacts', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-emerald-400">環境便益 (Environmental Benefits)</label>
                      <textarea
                        rows={2}
                        value={state.tlbmc.environmental.benefits}
                        onChange={(e) => updateTlbmc('environmental', 'benefits', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Social Layer */}
              {tlbmcSubtab === 'social' && (
                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-white">地域社会 (Local Community)</label>
                      <textarea
                        rows={4}
                        value={state.tlbmc.social.comm}
                        onChange={(e) => updateTlbmc('social', 'comm', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">ガバナンス (Governance)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.social.gov}
                          onChange={(e) => updateTlbmc('social', 'gov', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">従業員 (Employees)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.social.emp}
                          onChange={(e) => updateTlbmc('social', 'emp', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-amber-400">社会的価値 (Social Value)</label>
                      <textarea
                        rows={4}
                        value={state.tlbmc.social.val}
                        onChange={(e) => updateTlbmc('social', 'val', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">文化 (Culture)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.social.cult}
                          onChange={(e) => updateTlbmc('social', 'cult', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                      <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                        <label className="font-bold block mb-1 text-white">普及規模 (Scale of Outreach)</label>
                        <textarea
                          rows={2}
                          value={state.tlbmc.social.scale}
                          onChange={(e) => updateTlbmc('social', 'scale', e.target.value)}
                          className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-white">エンドユーザー (End User)</label>
                      <textarea
                        rows={4}
                        value={state.tlbmc.social.user}
                        onChange={(e) => updateTlbmc('social', 'user', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-red-400">社会的負の影響 (Social Impacts)</label>
                      <textarea
                        rows={2}
                        value={state.tlbmc.social.impacts}
                        onChange={(e) => updateTlbmc('social', 'impacts', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                    <div className="p-3 rounded border border-[#363431] bg-[#161512]/50">
                      <label className="font-bold block mb-1 text-emerald-400">社会的便益 (Social Benefits)</label>
                      <textarea
                        rows={2}
                        value={state.tlbmc.social.benefits}
                        onChange={(e) => updateTlbmc('social', 'benefits', e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-xs focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: Summary & Print View */}
        {activeTab === 'summary' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-[#262421] p-4 rounded-xl border border-[#363431]">
              <div>
                <h2 className="text-sm font-bold text-white">A4形式 総合戦略サマリー</h2>
                <p className="text-xs text-[#8a8882]">ブラウザの印刷機能（Cmd+P / Ctrl+P）でPDFとして保存できます。</p>
              </div>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded bg-[#629924] hover:bg-[#75b32c] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow"
              >
                <Printer className="w-4 h-4" />
                <span>印刷プレビュー</span>
              </button>
            </div>

            {/* A4 Sheet Container */}
            <div className="bg-[#262421] border border-[#363431] rounded-xl p-6 sm:p-8 space-y-6 text-xs max-w-5xl mx-auto shadow-2xl">
              {/* Header */}
              <div className="border-b-2 border-[#484541] pb-4 flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a8882]">
                    THE OPEN UNIVERSITY / EXPLORER LABS FRAMEWORK
                  </span>
                  <h1 className="text-xl font-bold text-white mt-1">
                    {state.concept.name || '（未設定の事業名）'}
                  </h1>
                  <p className="text-xs text-[#8a8882]">{state.concept.org}</p>
                </div>
                <div className="text-right font-mono text-[11px] text-[#8a8882]">
                  <div>REPORT: SUSTAINABLE_EVAL</div>
                  <div>{new Date().toISOString().slice(0, 10)}</div>
                </div>
              </div>

              {/* Section 1 */}
              <div className="space-y-3">
                <h2 className="font-bold text-xs uppercase tracking-wider border-b border-[#363431] pb-1 text-white">
                  1. コンセプト定義 & 壮大な課題
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold block text-[11px] text-[#8a8882]">直面する課題:</span>
                    <p className="leading-relaxed mt-0.5 whitespace-pre-wrap">{state.concept.challenge || '-'}</p>
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-[#8a8882]">ソリューション概要:</span>
                    <p className="leading-relaxed mt-0.5 whitespace-pre-wrap">{state.concept.solution || '-'}</p>
                    <p className="mt-1 text-[11px] text-[#8a8882]">信頼性: {state.concept.credibility || '-'}</p>
                  </div>
                </div>
                <div className="pt-1">
                  <span className="font-semibold block text-[11px] text-[#8a8882] mb-1">連携SDGs目標:</span>
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {state.concept.sdgs.map(id => (
                      <span key={id} className="px-2 py-0.5 rounded bg-[#302e2b] text-[#75b32c] border border-[#363431]">
                        Goal {id}: {SDGS_DATA.find(s => s.id === id)?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-3 pt-2 border-t border-[#363431]">
                <h2 className="font-bold text-xs uppercase tracking-wider border-b border-[#363431] pb-1 text-white">
                  2. 4P検証優先原則 & イノベーション野心
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2.5 rounded border border-[#363431] bg-[#161512]/40">
                    <span className="font-bold block font-mono text-amber-400">1. PEOPLE (望ましさ)</span>
                    <p className="mt-1 whitespace-pre-wrap">{state.fourP.people || '-'}</p>
                  </div>
                  <div className="p-2.5 rounded border border-[#363431] bg-[#161512]/40">
                    <span className="font-bold block font-mono text-emerald-400">2. PLANET (必要性)</span>
                    <p className="mt-1 whitespace-pre-wrap">{state.fourP.planet || '-'}</p>
                  </div>
                  <div className="p-2.5 rounded border border-[#363431] bg-[#161512]/40">
                    <span className="font-bold block font-mono text-blue-400">3. PROFIT (実行可能性)</span>
                    <p className="mt-1 whitespace-pre-wrap">{state.fourP.profit || '-'}</p>
                  </div>
                  <div className="p-2.5 rounded border border-[#363431] bg-[#161512]/40">
                    <span className="font-bold block font-mono text-purple-400">4. PROGRESS (実現性)</span>
                    <p className="mt-1 whitespace-pre-wrap">{state.fourP.progress || '-'}</p>
                  </div>
                </div>
                <div className="p-2.5 rounded bg-[#161512] border border-[#363431] flex flex-col sm:flex-row justify-between gap-2">
                  <div>
                    <span className="font-bold font-mono">野心タイプ: </span>
                    <span className="font-bold text-[#629924]">{state.ambition.type}</span>
                  </div>
                  <div className="flex-1 sm:ml-4">
                    <span className="font-semibold text-[#8a8882]">選定理由: </span>
                    <span>{state.ambition.rationale}</span>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-3 pt-2 border-t border-[#363431]">
                <h2 className="font-bold text-xs uppercase tracking-wider border-b border-[#363431] pb-1 text-white">
                  3. 統合 HMW 問い文 & バリュープロポジション
                </h2>
                <div className="p-3 rounded bg-[#161512] border border-[#363431] space-y-2">
                  <div className="text-[11px] font-mono text-[#8a8882]">HMW STATEMENT:</div>
                  <p className="text-xs sm:text-sm font-semibold text-[#75b32c] font-mono">
                    どうすれば、[{state.system.hmw.action}] ＋ [{state.system.hmw.target}] によって、[{state.system.hmw.outcome}] を実現できるだろうか？
                  </p>
                </div>
                <div className="p-3 rounded bg-[#161512] border border-[#363431] space-y-1">
                  <div className="text-[11px] font-mono text-[#8a8882]">VALUE PROPOSITION STATEMENT:</div>
                  <p className="text-xs leading-relaxed text-white font-mono">{state.vps.statement || '-'}</p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-3 pt-2 border-t border-[#363431]">
                <h2 className="font-bold text-xs uppercase tracking-wider border-b border-[#363431] pb-1 text-white">
                  4. 三層キャンバス概要 (TLBMC)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded border border-[#363431] bg-[#161512]/40 space-y-1">
                    <span className="font-bold font-mono text-blue-400 block border-b border-[#363431] pb-1">
                      経済レイヤー (9 Blocks)
                    </span>
                    <p className="text-[11px]"><strong>価値提案:</strong> {state.tlbmc.economic.vp || '-'}</p>
                    <p className="text-[11px]"><strong>主要顧客:</strong> {state.tlbmc.economic.seg || '-'}</p>
                    <p className="text-[11px]"><strong>収益源:</strong> {state.tlbmc.economic.rev || '-'}</p>
                  </div>
                  <div className="p-3 rounded border border-[#363431] bg-[#161512]/40 space-y-1">
                    <span className="font-bold font-mono text-emerald-400 block border-b border-[#363431] pb-1">
                      環境レイヤー (ライフサイクル)
                    </span>
                    <p className="text-[11px]"><strong>機能価値:</strong> {state.tlbmc.environmental.func || '-'}</p>
                    <p className="text-[11px]"><strong>寿命末期:</strong> {state.tlbmc.environmental.eol || '-'}</p>
                    <p className="text-[11px]"><strong>環境便益:</strong> {state.tlbmc.environmental.benefits || '-'}</p>
                  </div>
                  <div className="p-3 rounded border border-[#363431] bg-[#161512]/40 space-y-1">
                    <span className="font-bold font-mono text-amber-400 block border-b border-[#363431] pb-1">
                      社会レイヤー (ステークホルダー)
                    </span>
                    <p className="text-[11px]"><strong>社会的価値:</strong> {state.tlbmc.social.val || '-'}</p>
                    <p className="text-[11px]"><strong>地域社会:</strong> {state.tlbmc.social.comm || '-'}</p>
                    <p className="text-[11px]"><strong>社会的便益:</strong> {state.tlbmc.social.benefits || '-'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
