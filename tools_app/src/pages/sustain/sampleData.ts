import { SdgItem, SustainState } from './types';

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

export const EMPTY_STATE: SustainState = {
  concept: {
    name: "",
    org: "",
    challenge: "",
    stakeholders: "",
    solution: "",
    credibility: "",
    sdgs: [],
    ask: "",
    timeline: ""
  },
  fourP: {
    people: "",
    planet: "",
    profit: "",
    progress: ""
  },
  ambition: {
    type: "漸進的 (Incremental)",
    rationale: ""
  },
  system: {
    causalRows: [],
    hmw: {
      action: "",
      target: "",
      outcome: ""
    }
  },
  vps: {
    peopleValue: "",
    peopleKpi: "",
    planetValue: "",
    planetKpi: "",
    profitValue: "",
    profitKpi: "",
    progressValue: "",
    progressKpi: "",
    statement: ""
  },
  tlbmc: {
    economic: {
      partners: "",
      activities: "",
      resources: "",
      vp: "",
      rel: "",
      chan: "",
      seg: "",
      costs: "",
      rev: ""
    },
    environmental: {
      supplies: "",
      prod: "",
      materials: "",
      func: "",
      use: "",
      dist: "",
      eol: "",
      impacts: "",
      benefits: ""
    },
    social: {
      comm: "",
      gov: "",
      emp: "",
      val: "",
      cult: "",
      scale: "",
      user: "",
      impacts: "",
      benefits: ""
    }
  }
};
