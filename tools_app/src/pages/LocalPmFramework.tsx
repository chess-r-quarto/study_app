import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Building2,
  Calendar,
  AlertTriangle,
  FileCheck2,
  Users,
  CheckCircle2,
  RefreshCw,
  Plus,
  Trash2,
  Download,
  Upload,
  Printer,
  Info,
  Clock,
  Layers,
  FileText,
  FileSpreadsheet,
  Check,
  ChevronRight,
  BookOpen
} from 'lucide-react';

// --- Types ---
export interface Stakeholder {
  id: string;
  name: string;
  organization: string;
  role: string;
  power: number; // 1-5
  interest: number; // 1-5
  strategy: string;
  communicationMethod: string;
  notes: string;
}

export interface TaskItem {
  id: string;
  name: string;
  description: string;
  owner: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: 'not_started' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

export interface Milestone {
  id: string;
  name: string;
  date: string;
  status: 'pending' | 'achieved';
  description: string;
}

export interface RiskItem {
  id: string;
  title: string;
  probability: number; // 1-5
  impact: number; // 1-5
  responseStrategy: string;
  owner: string;
  status: 'open' | 'mitigated' | 'closed';
  dueDate: string;
}

export interface IssueItem {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high';
  owner: string;
  status: 'open' | 'in_progress' | 'resolved';
  dueDate: string;
  resolution: string;
}

export interface DecisionItem {
  id: string;
  date: string;
  topic: string;
  decision: string;
  decisionMaker: string;
  reason: string;
  impact: string;
}

export interface DeliverableItem {
  id: string;
  name: string;
  description: string;
  owner: string;
  dueDate: string;
  status: 'not_started' | 'drafting' | 'under_review' | 'accepted';
  acceptanceCriteria: string;
}

export interface ProjectData {
  metadata: {
    projectId: string;
    projectName: string;
    projectCode: string;
    organization: string;
    department: string;
    projectManager: string;
    createdAt: string;
    updatedAt: string;
  };
  charter: {
    background: string;
    purpose: string;
    objectives: string;
    scope: string;
    outOfScope: string;
    deliverables: string;
    successCriteria: string;
    assumptions: string;
    constraints: string;
    budget: string;
    authority: string;
    notes: string;
  };
  stakeholders: Stakeholder[];
  tasks: TaskItem[];
  milestones: Milestone[];
  risks: RiskItem[];
  issues: IssueItem[];
  decisions: DecisionItem[];
  deliverables: DeliverableItem[];
  closure: {
    completionDate: string;
    overallStatus: 'not_started' | 'in_progress' | 'completed';
    achievements: string;
    unachievedObjectives: string;
    lessonsLearned: string;
    handover: string;
    futureActions: string;
    approval: string;
  };
}

export const PM_TIPS: Record<string, { title: string; pmbokTerm: string; explanation: string; practicalMeaning: string }> = {
  projectOverview: {
    title: "自治体実務におけるプロジェクトマネジメント",
    pmbokTerm: "Project Management Standard",
    explanation: "通常の定常業務（ルーティン）と異なり、期限・予算・目的が定まった個別事業を確実にやり切るための構造化フレームワークです。",
    practicalMeaning: "要綱制定、新システム導入、庁舎改修等、複数部局が絡む事業において「担当者の頭の中」から「共有資産」へ変換します。"
  },
  projectCharter: {
    title: "事業目的・計画書 (プロジェクト憲章)",
    pmbokTerm: "Project Charter",
    explanation: "事業の存在意義、達成目標、予算枠、担当者の専決権限を公認する基本文書です。",
    practicalMeaning: "行政における「起案文書（伺い書）」や「基本計画策定書」に相当し、後からの仕様の後出しや迷走を防ぎます。"
  },
  scope: {
    title: "スコープと境界線 (対象と対象外の定義)",
    pmbokTerm: "Project Scope & Out of Scope",
    explanation: "この事業の中で責任を持って完了させる対象と、扱わない事項の境界線です。",
    practicalMeaning: "行政実務で生じやすい「ついでにあれもやってくれると思った」というトラブルを未然に防ぎます。"
  },
  stakeholders: {
    title: "関係者・ステークホルダー分析",
    pmbokTerm: "Stakeholder Engagement & Power/Interest Grid",
    explanation: "事業に影響を与える、または影響を受ける人や組織を洗い出し、関与度を設計します。",
    practicalMeaning: "行政における「根回し」「事前協議」「合意形成」を論理的・計画的に進めるためのツールです。"
  },
  ganttChart: {
    title: "工程表・ガントチャート",
    pmbokTerm: "WBS & Schedule Network",
    explanation: "大きな業務を細分化（タスク化）し、時系列と依存関係を可視化したスケジュール表です。",
    practicalMeaning: "「今誰が作業していて次に何をすべきか」が一目で分かり、ボトルネックを特定できます。"
  },
  riskAndIssue: {
    title: "リスクと課題の違い",
    pmbokTerm: "Risk Register vs. Issue Log",
    explanation: "【リスク】将来起きるかもしれない不確実なこと。【課題】すでに発生してしまっている問題。",
    practicalMeaning: "「今消火すべき火事（課題）」と「将来の火災予防（リスク）」を明確に区別して整理します。"
  },
  decisionLog: {
    title: "決定事項録 (Decision Log)",
    pmbokTerm: "Decision Log",
    explanation: "誰が、いつ、どのような理由でその方針を決めたのかを蓄積する公式記録です。",
    practicalMeaning: "定期異動による「前任者がなぜこの方針にしたのか分からない」という迷走を防ぎます。"
  },
  closure: {
    title: "事業完了・引継報告 (教訓登録簿)",
    pmbokTerm: "Project Closure & Lessons Learned",
    explanation: "事業を公式に締めくくり、得られたノウハウや反省点を次世代へ引き継ぐ手続きです。",
    practicalMeaning: "「終わったから終わり」にせず、教訓を残すことで同じ失敗を繰り返さない組織知にします。"
  }
};

export const SAMPLE_PROJECT: ProjectData = {
  metadata: {
    projectId: "sample_gov_sign_renewal",
    projectName: "本庁舎窓口案内表示・多言語サイン刷新事業",
    projectCode: "R08-INFO-004",
    organization: "希望市役所",
    department: "総務部 庁舎管理課 施設担当",
    projectManager: "主査 鈴木 健太",
    createdAt: "2026-04-01T08:30:00.000Z",
    updatedAt: new Date().toISOString()
  },
  charter: {
    background: "昭和62年竣工の本庁舎1階〜3階の案内板は経年劣化と度重なる課名変更シール貼付により視認性が著しく悪化している。外国人居住者や高齢・車椅子来庁者の急増に伴い、「窓口が分かりにくい」「総合案内に長蛇の列ができる」といった市民の声が年間200件を超えているため。",
    purpose: "誰もが直感的に迷わず1分以内に目的地窓口へ辿り着けるユニバーサルデザイン・4言語対応の案内サイン体系を確立し、総合案内での誘導問い合わせ時間を半減させる。",
    objectives: "1. 本庁舎1F〜3Fの案内板一新\n2. JISピクトグラム＋日英中韓4言語対応\n3. 点字案内板の適正配置",
    scope: "・本庁舎1階〜3階の天井吊り下げ型案内板、壁面フロアマップの撤去および新設\n・ピクトグラムの選定およびサインデザインマニュアルの作成\n・総合案内前へのUD対応タッチパネル式案内サイネージ（試行1台）の調達",
    outOfScope: "・市民会館・各支所・別館のサイン改修（次年度以降の別事業）\n・窓口カウンター内部の什器・システム機器の改修\n・庁舎敷地外の道路誘導標識",
    deliverables: "・案内サイン施工完了物一式\n・多言語ピクトグラム設計データ集 (AI/PDF)\n・サイン維持管理マニュアル\n・完了検査調書",
    successCriteria: "1. 令和8年12月25日までに施工完了・供用開始すること。\n2. 配当予算4,800,000円以内で執行すること。\n3. 市民・来庁者向けモニターアンケートで満足度90%以上を獲得すること。",
    assumptions: "天井ボードの耐荷重が既存図面通りであり、大規模な構造補強なしで新設看板を吊り下げ可能であること。",
    constraints: "平日開庁時間（8:30〜17:15）中の騒音・振動作業は厳禁。施工工事は閉庁日（土日祝・夜間）に限定して実施すること。",
    budget: "4,800,000円 (当初予算確保済)",
    authority: "仕様策定・現場打合せ・業者調整は主査専決。契約変更・最終検収承認は課長決裁。",
    notes: "次年度以降の支所改修のモデルケースとして実施する。"
  },
  stakeholders: [
    {
      id: "sh_1",
      name: "高橋 誠 (庁舎管理課長)",
      organization: "総務部 庁舎管理課",
      role: "事業決裁者・総括責任者",
      power: 5,
      interest: 4,
      strategy: "月2回の課内定例で重要決定事項と予算執行状況を簡潔に報告。重要トラブルは即日報告。",
      communicationMethod: "対面協議・起案書",
      notes: "予算超過と議会からの指摘を最も警戒している。"
    },
    {
      id: "sh_2",
      name: "佐藤 美咲 (窓口サービス係長)",
      organization: "市民生活部 窓口サービス課",
      role: "現場ユーザー代表 (1F総合窓口)",
      power: 4,
      interest: 5,
      strategy: "デザイン原案の段階で窓口スタッフ全員の導線意見を聴取し、不満が出ないよう共同検討する。",
      communicationMethod: "現場立会い・庁内チャット",
      notes: "住民票と戸籍の案内カラーを明確に色分けしてほしい強い要望あり。"
    },
    {
      id: "sh_3",
      name: "ジョン・スミス (国際交流推進員)",
      organization: "企画政策部 国際交流課",
      role: "多言語表記アドバイザー",
      power: 2,
      interest: 5,
      strategy: "英語・中国語・韓国語のスペルチェックおよびピクトグラムの直感性を確認してもらう。",
      communicationMethod: "庁内メール・データ校正",
      notes: "直訳ではなく外国人住民にとって自然な行政用語の選定に協力いただく。"
    },
    {
      id: "sh_4",
      name: "伊藤 義男 (市障害者福祉団体連絡会)",
      organization: "外部当事者団体",
      role: "当事者目線アドバイザー",
      power: 3,
      interest: 4,
      strategy: "試作品段階で現地体験会を開催し、事前の意見反映を行う。",
      communicationMethod: "福祉課経由での対面ヒアリング",
      notes: "点字の突起高さと車椅子目線（床上120cm）での視認性に特に配慮が必要。"
    },
    {
      id: "sh_5",
      name: "財政課 予算担当主幹",
      organization: "総務部 財政課",
      role: "予算配当・流用承認",
      power: 5,
      interest: 2,
      strategy: "予算枠内の厳格な執行を維持し、定期予算状況表を共有。",
      communicationMethod: "財務会計システム通知",
      notes: "年度末繰越は極力避けてほしい意向。"
    }
  ],
  tasks: [
    {
      id: "task_1",
      name: "現状庁舎サインの総点検・写真台帳作成",
      description: "1F〜3Fの全案内板の位置、寸法、老朽度、配線状況を記録。",
      owner: "山田 (施設係)",
      startDate: "2026-09-01",
      endDate: "2026-09-15",
      progress: 100,
      status: "completed",
      priority: "medium"
    },
    {
      id: "task_2",
      name: "障害者団体・国際交流課への要求ヒアリング",
      description: "点字、車椅子導線、多言語表記のガイドライン整理。",
      owner: "鈴木主査",
      startDate: "2026-09-16",
      endDate: "2026-09-30",
      progress: 80,
      status: "in_progress",
      priority: "high"
    },
    {
      id: "task_3",
      name: "公募型プロポーザル仕様書・評価基準の策定",
      description: "設計・施工一括発注のための仕様書作成および課長決裁。",
      owner: "鈴木主査",
      startDate: "2026-10-01",
      endDate: "2026-10-20",
      progress: 20,
      status: "in_progress",
      priority: "high"
    },
    {
      id: "task_4",
      name: "入札公告および事業者選定審査会",
      description: "提案書の審査、プレゼンテーション評価、優先交渉権者決定。",
      owner: "選定委員会",
      startDate: "2026-10-21",
      endDate: "2026-11-10",
      progress: 0,
      status: "not_started",
      priority: "high"
    },
    {
      id: "task_5",
      name: "サイン詳細設計図面の作成・校正",
      description: "文字サイズ、色覚UDテスト、4言語スペル最終校正。",
      owner: "選定事業者 / 鈴木主査",
      startDate: "2026-11-11",
      endDate: "2026-11-28",
      progress: 0,
      status: "not_started",
      priority: "medium"
    },
    {
      id: "task_6",
      name: "閉庁日夜間施工工事 (既存撤去・新設取付)",
      description: "土曜・日曜夜間における吊り下げ工事および配線接続。",
      owner: "施工事業者 / 山田立会",
      startDate: "2026-12-05",
      endDate: "2026-12-20",
      progress: 0,
      status: "not_started",
      priority: "high"
    },
    {
      id: "task_7",
      name: "完了検査および新サイン供用開始",
      description: "施工品質検査、調書作成、庁内への新サイン周知。",
      owner: "鈴木主査 / 課長",
      startDate: "2026-12-21",
      endDate: "2026-12-25",
      progress: 0,
      status: "not_started",
      priority: "medium"
    }
  ],
  milestones: [
    {
      id: "ms_1",
      name: "発注仕様書の庁内決裁完了",
      date: "2026-10-20",
      status: "pending",
      description: "契約検査課および部課長決裁の完了"
    },
    {
      id: "ms_2",
      name: "設計・施工事業者の契約締結",
      date: "2026-11-10",
      status: "pending",
      description: "プロポーザル特定事業者の正式契約"
    },
    {
      id: "ms_3",
      name: "新サイン全箇所供用開始 (完了検査)",
      date: "2026-12-25",
      status: "pending",
      description: "全フロアサインの引渡しと市民供用"
    }
  ],
  risks: [
    {
      id: "risk_1",
      title: "看板面のアクリル・アルミ特殊資材の納期遅延",
      probability: 3,
      impact: 4,
      responseStrategy: "入札仕様書に「JIS規格同等品の国内即納資材による代替承認条項」を記載しておく。",
      owner: "鈴木主査",
      status: "open",
      dueDate: "2026-10-20"
    },
    {
      id: "risk_2",
      title: "夜間工事後の月曜朝における現場清掃不備・養生残り",
      probability: 2,
      impact: 4,
      responseStrategy: "月曜朝7:30に担当職員による現場完全復旧確認を義務付ける。",
      owner: "山田 (施設係)",
      status: "open",
      dueDate: "2026-12-07"
    }
  ],
  issues: [
    {
      id: "issue_1",
      title: "1階中央柱の天井裏に耐震補強用鉄骨ブレースが近接していることが判明",
      severity: "high",
      owner: "建築課 構造担当 / 鈴木",
      status: "open",
      dueDate: "2026-09-25",
      resolution: "建築課と現地立会いを実施し、挟み込み金具に変更して固定する設計変更で合意。"
    }
  ],
  decisions: [
    {
      id: "dec_1",
      date: "2026-09-08",
      topic: "多言語表記の対象言語とフォント規格の選定",
      decision: "表記言語は「日本語、英語、中国語（簡体字）、韓国語」の4言語とし、フォントはJISユニバーサルデザインフォントを採用することを決定した。",
      decisionMaker: "総務部長・庁舎管理課長決裁",
      reason: "5言語案も検討したが文字が縮小し高齢者の視認性が低下するため、市内在住外国人の91%をカバーする4言語を採択。",
      impact: "広報広聴課の庁内ピクトグラムガイドラインと整合を図る。"
    }
  ],
  deliverables: [
    {
      id: "deliv_1",
      name: "天井吊下げ型案内サイン (1F〜3F 計18箇所)",
      description: "アルミ成形・アクリル面板・UDフォント・4言語表記看板",
      owner: "施工事業者",
      dueDate: "2026-12-20",
      status: "drafting",
      acceptanceCriteria: "耐震取付強度試験合格、色ムラなし、誤字脱字なし、床上220cmクリアランスの確保"
    },
    {
      id: "deliv_2",
      name: "サイン維持管理マニュアル及びIllustratorデータ集",
      description: "課名変更時のシール作成手順および原版ベクターデータ一式",
      owner: "設計事業者",
      dueDate: "2026-12-25",
      status: "not_started",
      acceptanceCriteria: "アウトライン前後のAIデータ、仕様フォント明記、印刷指定カラー記載"
    }
  ],
  closure: {
    completionDate: "",
    overallStatus: "in_progress",
    achievements: "（現在事業進行中。完了後に記入）",
    unachievedObjectives: "",
    lessonsLearned: "【教訓】天井裏の構造物干渉は、設計発注前（現状点検時）に点検口からスコープ等で入念に事前確認しておくべきであった。",
    handover: "維持管理マニュアルは施設係の日常管理台帳へファイリング予定。",
    futureActions: "令和9年度は東別館のサイン改修予算要求を検討。",
    approval: "進行中"
  }
};

const EMPTY_PROJECT: ProjectData = {
  metadata: {
    projectId: "proj_" + Math.random().toString(36).substring(2, 9),
    projectName: "新規プロジェクト",
    projectCode: "PRJ-001",
    organization: "",
    department: "",
    projectManager: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  charter: {
    background: "",
    purpose: "",
    objectives: "",
    scope: "",
    outOfScope: "",
    deliverables: "",
    successCriteria: "",
    assumptions: "",
    constraints: "",
    budget: "",
    authority: "",
    notes: ""
  },
  stakeholders: [],
  tasks: [],
  milestones: [],
  risks: [],
  issues: [],
  decisions: [],
  deliverables: [],
  closure: {
    completionDate: "",
    overallStatus: "not_started",
    achievements: "",
    unachievedObjectives: "",
    lessonsLearned: "",
    handover: "",
    futureActions: "",
    approval: ""
  }
};

export default function LocalPmFramework() {
  const [project, setProject] = useState<ProjectData>(() => {
    try {
      const saved = localStorage.getItem('gov_local_pm_state');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return SAMPLE_PROJECT;
  });

  const [activeTab, setActiveTab] = useState<
    'overview' | 'charter' | 'stakeholders' | 'gantt' | 'riskIssue' | 'decisions' | 'deliverables' | 'closure'
  >('overview');

  const [activeTipKey, setActiveTipKey] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Auto-save
  useEffect(() => {
    try {
      localStorage.setItem('gov_local_pm_state', JSON.stringify(project));
    } catch (e) {
      console.error('LocalStorage save error', e);
    }
  }, [project]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  // Updaters
  const updateMetadata = (key: keyof ProjectData['metadata'], val: string) => {
    setProject(prev => ({
      ...prev,
      metadata: { ...prev.metadata, [key]: val, updatedAt: new Date().toISOString() }
    }));
  };

  const updateCharter = (key: keyof ProjectData['charter'], val: string) => {
    setProject(prev => ({
      ...prev,
      charter: { ...prev.charter, [key]: val }
    }));
  };

  // Stakeholders
  const addStakeholder = () => {
    const newSh: Stakeholder = {
      id: "sh_" + Date.now(),
      name: "新規関係者",
      organization: "",
      role: "",
      power: 3,
      interest: 3,
      strategy: "",
      communicationMethod: "",
      notes: ""
    };
    setProject(prev => ({
      ...prev,
      stakeholders: [...prev.stakeholders, newSh]
    }));
  };

  const updateStakeholder = (id: string, field: keyof Stakeholder, val: any) => {
    setProject(prev => ({
      ...prev,
      stakeholders: prev.stakeholders.map(sh => (sh.id === id ? { ...sh, [field]: val } : sh))
    }));
  };

  const removeStakeholder = (id: string) => {
    setProject(prev => ({
      ...prev,
      stakeholders: prev.stakeholders.filter(sh => sh.id !== id)
    }));
  };

  // Tasks
  const addTask = () => {
    const newTask: TaskItem = {
      id: "task_" + Date.now(),
      name: "新規タスク",
      description: "",
      owner: "",
      startDate: new Date().toISOString().slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10),
      progress: 0,
      status: "not_started",
      priority: "medium"
    };
    setProject(prev => ({
      ...prev,
      tasks: [...prev.tasks, newTask]
    }));
  };

  const updateTask = (id: string, field: keyof TaskItem, val: any) => {
    setProject(prev => ({
      ...prev,
      tasks: prev.tasks.map(t => (t.id === id ? { ...t, [field]: val } : t))
    }));
  };

  const removeTask = (id: string) => {
    setProject(prev => ({
      ...prev,
      tasks: prev.tasks.filter(t => t.id !== id)
    }));
  };

  // Risks
  const addRisk = () => {
    const newRisk: RiskItem = {
      id: "risk_" + Date.now(),
      title: "新規リスク",
      probability: 3,
      impact: 3,
      responseStrategy: "",
      owner: "",
      status: "open",
      dueDate: ""
    };
    setProject(prev => ({ ...prev, risks: [...prev.risks, newRisk] }));
  };

  const updateRisk = (id: string, field: keyof RiskItem, val: any) => {
    setProject(prev => ({
      ...prev,
      risks: prev.risks.map(r => (r.id === id ? { ...r, [field]: val } : r))
    }));
  };

  const removeRisk = (id: string) => {
    setProject(prev => ({ ...prev, risks: prev.risks.filter(r => r.id !== id) }));
  };

  // Issues
  const addIssue = () => {
    const newIssue: IssueItem = {
      id: "issue_" + Date.now(),
      title: "新規課題",
      severity: "medium",
      owner: "",
      status: "open",
      dueDate: "",
      resolution: ""
    };
    setProject(prev => ({ ...prev, issues: [...prev.issues, newIssue] }));
  };

  const updateIssue = (id: string, field: keyof IssueItem, val: any) => {
    setProject(prev => ({
      ...prev,
      issues: prev.issues.map(i => (i.id === id ? { ...i, [field]: val } : i))
    }));
  };

  const removeIssue = (id: string) => {
    setProject(prev => ({ ...prev, issues: prev.issues.filter(i => i.id !== id) }));
  };

  // Decisions
  const addDecision = () => {
    const newDec: DecisionItem = {
      id: "dec_" + Date.now(),
      date: new Date().toISOString().slice(0, 10),
      topic: "",
      decision: "",
      decisionMaker: "",
      reason: "",
      impact: ""
    };
    setProject(prev => ({ ...prev, decisions: [...prev.decisions, newDec] }));
  };

  const updateDecision = (id: string, field: keyof DecisionItem, val: any) => {
    setProject(prev => ({
      ...prev,
      decisions: prev.decisions.map(d => (d.id === id ? { ...d, [field]: val } : d))
    }));
  };

  const removeDecision = (id: string) => {
    setProject(prev => ({ ...prev, decisions: prev.decisions.filter(d => d.id !== id) }));
  };

  // Deliverables
  const addDeliverable = () => {
    const newDel: DeliverableItem = {
      id: "deliv_" + Date.now(),
      name: "新規成果物",
      description: "",
      owner: "",
      dueDate: "",
      status: "not_started",
      acceptanceCriteria: ""
    };
    setProject(prev => ({ ...prev, deliverables: [...prev.deliverables, newDel] }));
  };

  const updateDeliverable = (id: string, field: keyof DeliverableItem, val: any) => {
    setProject(prev => ({
      ...prev,
      deliverables: prev.deliverables.map(d => (d.id === id ? { ...d, [field]: val } : d))
    }));
  };

  const removeDeliverable = (id: string) => {
    setProject(prev => ({ ...prev, deliverables: prev.deliverables.filter(d => d.id !== id) }));
  };

  // Closure
  const updateClosure = (field: keyof ProjectData['closure'], val: any) => {
    setProject(prev => ({
      ...prev,
      closure: { ...prev.closure, [field]: val }
    }));
  };

  // Import / Export
  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project, null, 2));
    const a = document.createElement('a');
    const filename = `gov_pm_${project.metadata.projectCode || 'export'}_${new Date().toISOString().slice(0, 10)}.json`;
    a.setAttribute("href", dataStr);
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast('JSONファイルを保存・書き出しました');
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && parsed.metadata && parsed.charter) {
          setProject(parsed);
          showToast('プロジェクトデータを読み込みました');
        } else {
          showToast('無効なデータ形式です');
        }
      } catch {
        showToast('JSONの解析に失敗しました');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleLoadSample = () => {
    if (window.confirm('実務サンプルデータ（庁舎窓口サイン刷新事業）で上書きしますか？')) {
      setProject(SAMPLE_PROJECT);
      showToast('サンプルプロジェクトを読み込みました');
    }
  };

  const handleNewProject = () => {
    if (window.confirm('新規の白紙プロジェクトを作成しますか？未保存の変更は失われます。')) {
      setProject(EMPTY_PROJECT);
      showToast('新規プロジェクトを作成しました');
    }
  };

  // Calculations for Overview Dashboard
  const totalTasks = project.tasks.length;
  const completedTasks = project.tasks.filter(t => t.status === 'completed').length;
  const overallProgress = totalTasks === 0 ? 0 : Math.round(
    project.tasks.reduce((acc, cur) => acc + (cur.progress || 0), 0) / totalTasks
  );
  const openRisks = project.risks.filter(r => r.status === 'open').length;
  const openIssues = project.issues.filter(i => i.status !== 'resolved').length;

  return (
    <div className="min-h-screen bg-[#161512] text-[#dcd8d3] font-sans selection:bg-[#3692e7] selection:text-white flex flex-col">
      {/* Toast Bar */}
      {toastMsg && (
        <div className="fixed bottom-4 right-4 z-50 bg-[#3692e7] text-white text-xs font-semibold px-4 py-2.5 rounded shadow-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#262421] border-b border-[#3c3934]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-3 overflow-hidden">
            <Link
              to="/"
              className="w-8 h-8 rounded bg-[#302e2b] hover:bg-[#3d3a36] text-white flex items-center justify-center transition-colors"
              title="ツール一覧に戻る"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="w-8 h-8 rounded bg-[#302e2b] border border-[#3c3934] flex items-center justify-center text-[#dcd8d3]">
              <Building2 className="w-4 h-4 text-[#3692e7]" />
            </div>
            <div className="truncate">
              <div className="flex items-center space-x-2">
                <h1 className="text-sm sm:text-base font-semibold text-white truncate">
                  {project.metadata.projectName || '未設定のプロジェクト'}
                </h1>
                <span className="bg-[#302e2b] text-[#8c8880] text-[11px] px-1.5 py-0.5 rounded font-mono border border-[#3c3934] hidden sm:inline-block">
                  {project.metadata.projectCode || 'PRJ-001'}
                </span>
              </div>
              <p className="text-[11px] text-[#8c8880] flex items-center space-x-1.5 truncate">
                <span>{project.metadata.organization || '自治体実務支援'}</span>
                <span className="opacity-40">|</span>
                <span className="text-[#629924] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#629924] inline-block"></span>
                  自動保存済
                </span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={handleLoadSample}
              className="px-2.5 py-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#3c3934] text-[#dcd8d3] flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">サンプル読込</span>
            </button>
            <button
              onClick={handleNewProject}
              className="px-2.5 py-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#3c3934] text-[#dcd8d3] flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden md:inline">新規</span>
            </button>
            <label className="px-2.5 py-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#3c3934] text-[#dcd8d3] flex items-center gap-1.5 cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden md:inline">開く</span>
              <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
            </label>
            <button
              onClick={handleExportJson}
              className="px-2.5 py-1.5 rounded bg-[#3692e7] hover:bg-[#257ac9] text-white font-medium flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>保存</span>
            </button>
            <button
              onClick={() => window.print()}
              className="p-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#3c3934] text-[#dcd8d3] cursor-pointer"
              title="印刷"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex space-x-1 border-t border-[#3c3934] overflow-x-auto">
          {[
            { id: 'overview', label: '概要ダッシュボード', icon: Building2 },
            { id: 'charter', label: 'プロジェクト憲章', icon: FileSpreadsheet },
            { id: 'stakeholders', label: '関係者分析', icon: Users },
            { id: 'gantt', label: 'WBS & 工程表', icon: Calendar },
            { id: 'riskIssue', label: 'リスク & 課題', icon: AlertTriangle },
            { id: 'decisions', label: '決定事項録', icon: CheckCircle2 },
            { id: 'deliverables', label: '成果物受入', icon: FileCheck2 },
            { id: 'closure', label: '事業完了・教訓', icon: BookOpen },
          ].map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-3 border-b-2 font-medium text-xs whitespace-nowrap flex items-center gap-1.5 transition-colors cursor-pointer ${
                  active
                    ? 'border-[#3692e7] text-white font-bold bg-[#161512]/50'
                    : 'border-transparent text-[#8c8880] hover:text-[#dcd8d3]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        {/* TAB 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#262421] p-4 rounded-xl border border-[#3c3934] space-y-1">
                <span className="text-[11px] text-[#8c8880] font-mono block">全体の進捗率</span>
                <div className="text-2xl font-bold text-white flex items-baseline gap-2">
                  <span>{overallProgress}%</span>
                  <span className="text-xs text-[#8c8880] font-normal">{completedTasks}/{totalTasks} 完了</span>
                </div>
                <div className="w-full bg-[#1e1d1a] h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-[#629924] h-full" style={{ width: `${overallProgress}%` }}></div>
                </div>
              </div>

              <div className="bg-[#262421] p-4 rounded-xl border border-[#3c3934] space-y-1">
                <span className="text-[11px] text-[#8c8880] font-mono block">未解決の課題 (Issues)</span>
                <div className="text-2xl font-bold text-red-400">
                  {openIssues} <span className="text-xs font-normal text-[#8c8880]">件</span>
                </div>
                <span className="text-[10px] text-[#8c8880] block">現在対応中の障害</span>
              </div>

              <div className="bg-[#262421] p-4 rounded-xl border border-[#3c3934] space-y-1">
                <span className="text-[11px] text-[#8c8880] font-mono block">監視中のリスク (Risks)</span>
                <div className="text-2xl font-bold text-amber-400">
                  {openRisks} <span className="text-xs font-normal text-[#8c8880]">件</span>
                </div>
                <span className="text-[10px] text-[#8c8880] block">予防措置の対象</span>
              </div>

              <div className="bg-[#262421] p-4 rounded-xl border border-[#3c3934] space-y-1">
                <span className="text-[11px] text-[#8c8880] font-mono block">主要マイルストーン</span>
                <div className="text-2xl font-bold text-blue-400">
                  {project.milestones.length} <span className="text-xs font-normal text-[#8c8880]">箇所</span>
                </div>
                <span className="text-[10px] text-[#8c8880] block">決裁・契約・供用</span>
              </div>
            </div>

            {/* Basic Info & Charter Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
                <div className="border-b border-[#3c3934] pb-2 flex items-center justify-between">
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#3692e7]" />
                    事業基本情報
                  </h2>
                  <span className="text-[11px] text-[#8c8880] font-mono">METADATA</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[#8c8880] block mb-1">事業名称</label>
                    <input
                      type="text"
                      value={project.metadata.projectName}
                      onChange={(e) => updateMetadata('projectName', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded bg-[#1e1d1a] border border-[#3c3934] text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[#8c8880] block mb-1">事業管理コード</label>
                    <input
                      type="text"
                      value={project.metadata.projectCode}
                      onChange={(e) => updateMetadata('projectCode', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded bg-[#1e1d1a] border border-[#3c3934]"
                    />
                  </div>
                  <div>
                    <label className="text-[#8c8880] block mb-1">自治体・所属組織</label>
                    <input
                      type="text"
                      value={project.metadata.organization}
                      onChange={(e) => updateMetadata('organization', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded bg-[#1e1d1a] border border-[#3c3934]"
                    />
                  </div>
                  <div>
                    <label className="text-[#8c8880] block mb-1">主幹課・担当係</label>
                    <input
                      type="text"
                      value={project.metadata.department}
                      onChange={(e) => updateMetadata('department', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded bg-[#1e1d1a] border border-[#3c3934]"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-[#8c8880] block mb-1">主査・プロジェクトマネージャー</label>
                    <input
                      type="text"
                      value={project.metadata.projectManager}
                      onChange={(e) => updateMetadata('projectManager', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded bg-[#1e1d1a] border border-[#3c3934]"
                    />
                  </div>
                </div>
              </div>

              {/* Charter Quick Look */}
              <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
                <div className="border-b border-[#3c3934] pb-2 flex items-center justify-between">
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#629924]" />
                    事業の目的・ゴール像
                  </h2>
                  <button
                    onClick={() => setActiveTab('charter')}
                    className="text-[11px] text-[#3692e7] hover:underline flex items-center gap-0.5"
                  >
                    <span>詳細編集</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-xs space-y-3">
                  <div>
                    <span className="text-[#8c8880] block mb-1 font-semibold">達成ゴール (Purpose):</span>
                    <p className="bg-[#1e1d1a] p-2.5 rounded border border-[#3c3934] text-neutral-300 leading-relaxed">
                      {project.charter.purpose || '（憲章タブで事業目的を設定してください）'}
                    </p>
                  </div>
                  <div>
                    <span className="text-[#8c8880] block mb-1 font-semibold">予算枠 (Budget):</span>
                    <p className="font-mono text-sm font-bold text-[#629924]">
                      {project.charter.budget || '未定'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Tasks List */}
            <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-3">
              <div className="flex items-center justify-between border-b border-[#3c3934] pb-2">
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#3692e7]" />
                  直近の工程タスク
                </h2>
                <button
                  onClick={() => setActiveTab('gantt')}
                  className="text-[11px] text-[#3692e7] hover:underline"
                >
                  全タスク工程表を開く
                </button>
              </div>
              <div className="space-y-2 text-xs">
                {project.tasks.slice(0, 5).map(task => (
                  <div
                    key={task.id}
                    className="flex flex-wrap items-center justify-between p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        task.status === 'completed' ? 'bg-[#629924]' : task.status === 'in_progress' ? 'bg-[#3692e7]' : 'bg-[#8c8880]'
                      }`}></span>
                      <span className="font-semibold text-white">{task.name}</span>
                      <span className="text-[#8c8880] text-[11px]">({task.owner})</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] font-mono">
                      <span>{task.startDate} 〜 {task.endDate}</span>
                      <span className="font-bold text-[#629924]">{task.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Charter */}
        {activeTab === 'charter' && (
          <div className="space-y-6">
            <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
              <div className="border-b border-[#3c3934] pb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-white">プロジェクト憲章 (Project Charter)</h2>
                  <p className="text-xs text-[#8c8880]">起案文書・基本計画書に相当し、事業の存在意義・権限・境界線を明確にします。</p>
                </div>
                <button
                  onClick={() => setActiveTipKey(activeTipKey === 'projectCharter' ? null : 'projectCharter')}
                  className="px-2.5 py-1 rounded bg-[#302e2b] border border-[#3c3934] text-xs text-[#3692e7] flex items-center gap-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>PM解説</span>
                </button>
              </div>

              {activeTipKey === 'projectCharter' && (
                <div className="p-3.5 rounded bg-[#1e1d1a] border border-[#3692e7]/40 text-xs space-y-1.5">
                  <span className="font-bold text-[#3692e7] font-mono">PMBOK: {PM_TIPS.projectCharter.pmbokTerm}</span>
                  <p className="text-neutral-300">{PM_TIPS.projectCharter.explanation}</p>
                  <p className="text-[#8c8880]">{PM_TIPS.projectCharter.practicalMeaning}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-1 text-white">1. 事業の背景 (Background / Business Case)</label>
                  <textarea
                    rows={3}
                    value={project.charter.background}
                    onChange={(e) => updateCharter('background', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                    placeholder="なぜ今この事業に着手する必要があるのか、現状の課題や市民の要望"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block font-semibold mb-1 text-white">2. 事業の目的・ゴール像 (Purpose & Objectives)</label>
                  <textarea
                    rows={3}
                    value={project.charter.purpose}
                    onChange={(e) => updateCharter('purpose', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                    placeholder="事業完了によってどのような市民価値・業務価値が達成されるか"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-emerald-400">3. 今回実施すること (Scope / 対象範囲)</label>
                  <textarea
                    rows={4}
                    value={project.charter.scope}
                    onChange={(e) => updateCharter('scope', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                    placeholder="この事業で責任を持って完了させる対象・工事・成果物"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-amber-400">4. 今回やらないこと (Out of Scope / 境界外)</label>
                  <textarea
                    rows={4}
                    value={project.charter.outOfScope}
                    onChange={(e) => updateCharter('outOfScope', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                    placeholder="今回含まない事項、別事業や次年度に回す事項（仕様の膨張防止）"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-white">5. 成功基準 (Success Criteria)</label>
                  <textarea
                    rows={3}
                    value={project.charter.successCriteria}
                    onChange={(e) => updateCharter('successCriteria', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                    placeholder="期日厳守、予算内執行、アンケート満足度等"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-white">6. 制約事項・前提条件 (Constraints & Assumptions)</label>
                  <textarea
                    rows={3}
                    value={project.charter.constraints}
                    onChange={(e) => updateCharter('constraints', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                    placeholder="閉庁日施工限定、予算執行期限、耐荷重条件など"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-white">7. 予算枠 (Budget)</label>
                  <input
                    type="text"
                    value={project.charter.budget}
                    onChange={(e) => updateCharter('budget', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-white">8. 専決権限・決裁区分 (Authority)</label>
                  <input
                    type="text"
                    value={project.charter.authority}
                    onChange={(e) => updateCharter('authority', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Stakeholders */}
        {activeTab === 'stakeholders' && (
          <div className="space-y-6">
            <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
              <div className="flex items-center justify-between border-b border-[#3c3934] pb-3">
                <div>
                  <h2 className="text-base font-bold text-white">関係者・ステークホルダー分析 (Stakeholder Analysis)</h2>
                  <p className="text-xs text-[#8c8880]">事業への影響力（権限）と関心度を可視化し、適切な合意形成・根回しを計画します。</p>
                </div>
                <button
                  onClick={addStakeholder}
                  className="px-3 py-1.5 rounded bg-[#3692e7] hover:bg-[#257ac9] text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>関係者を追加</span>
                </button>
              </div>

              {/* Grid representation */}
              <div className="overflow-x-auto border border-[#3c3934] rounded-lg">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#1e1d1a] border-b border-[#3c3934] text-[#8c8880] font-semibold">
                      <th className="p-2.5">氏名・役職</th>
                      <th className="p-2.5">所属組織</th>
                      <th className="p-2.5">役割</th>
                      <th className="p-2.5 w-20 text-center">権限 (1-5)</th>
                      <th className="p-2.5 w-20 text-center">関心 (1-5)</th>
                      <th className="p-2.5">関与方針・コミュニケーション</th>
                      <th className="p-2.5 w-12 text-center">削除</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3c3934]">
                    {project.stakeholders.map(sh => (
                      <tr key={sh.id} className="hover:bg-[#302e2b]/30">
                        <td className="p-2">
                          <input
                            type="text"
                            value={sh.name}
                            onChange={(e) => updateStakeholder(sh.id, 'name', e.target.value)}
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#3c3934] text-xs focus:outline-none focus:border-[#3692e7] font-semibold text-white"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={sh.organization}
                            onChange={(e) => updateStakeholder(sh.id, 'organization', e.target.value)}
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#3c3934] text-xs focus:outline-none focus:border-[#3692e7]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={sh.role}
                            onChange={(e) => updateStakeholder(sh.id, 'role', e.target.value)}
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#3c3934] text-xs focus:outline-none focus:border-[#3692e7]"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <select
                            value={sh.power}
                            onChange={(e) => updateStakeholder(sh.id, 'power', Number(e.target.value))}
                            className="bg-[#1e1d1a] border border-[#3c3934] rounded px-1.5 py-1 text-xs text-white"
                          >
                            {[1, 2, 3, 4, 5].map(v => <option key={v} value={v}>{v}</option>)}
                          </select>
                        </td>
                        <td className="p-2 text-center">
                          <select
                            value={sh.interest}
                            onChange={(e) => updateStakeholder(sh.id, 'interest', Number(e.target.value))}
                            className="bg-[#1e1d1a] border border-[#3c3934] rounded px-1.5 py-1 text-xs text-white"
                          >
                            {[1, 2, 3, 4, 5].map(v => <option key={v} value={v}>{v}</option>)}
                          </select>
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={sh.strategy}
                            onChange={(e) => updateStakeholder(sh.id, 'strategy', e.target.value)}
                            placeholder="例: 月2回の課内定例で重要決定事項を簡潔に報告"
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#3c3934] text-xs focus:outline-none focus:border-[#3692e7]"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <button
                            onClick={() => removeStakeholder(sh.id)}
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
            </div>
          </div>
        )}

        {/* TAB 4: Gantt & WBS */}
        {activeTab === 'gantt' && (
          <div className="space-y-6">
            <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
              <div className="flex items-center justify-between border-b border-[#3c3934] pb-3">
                <div>
                  <h2 className="text-base font-bold text-white">WBS・工程表 (Gantt Schedule)</h2>
                  <p className="text-xs text-[#8c8880]">業務をタスク化し、スケジュール・担当・進捗率を一元管理します。</p>
                </div>
                <button
                  onClick={addTask}
                  className="px-3 py-1.5 rounded bg-[#3692e7] hover:bg-[#257ac9] text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>タスクを追加</span>
                </button>
              </div>

              {/* Tasks List Table */}
              <div className="overflow-x-auto border border-[#3c3934] rounded-lg">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#1e1d1a] border-b border-[#3c3934] text-[#8c8880] font-semibold">
                      <th className="p-2.5 w-1/4">タスク名</th>
                      <th className="p-2.5 w-24">担当者</th>
                      <th className="p-2.5 w-28">開始日</th>
                      <th className="p-2.5 w-28">完了期日</th>
                      <th className="p-2.5 w-20 text-center">進捗率</th>
                      <th className="p-2.5 w-24 text-center">状態</th>
                      <th className="p-2.5">作業内容・備考</th>
                      <th className="p-2.5 w-12 text-center">削除</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3c3934]">
                    {project.tasks.map(task => (
                      <tr key={task.id} className="hover:bg-[#302e2b]/30">
                        <td className="p-2">
                          <input
                            type="text"
                            value={task.name}
                            onChange={(e) => updateTask(task.id, 'name', e.target.value)}
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#3c3934] text-xs focus:outline-none focus:border-[#3692e7] font-semibold text-white"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={task.owner}
                            onChange={(e) => updateTask(task.id, 'owner', e.target.value)}
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#3c3934] text-xs focus:outline-none focus:border-[#3692e7]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="date"
                            value={task.startDate}
                            onChange={(e) => updateTask(task.id, 'startDate', e.target.value)}
                            className="w-full px-1.5 py-1 rounded bg-[#1e1d1a] border border-[#3c3934] text-xs text-white"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="date"
                            value={task.endDate}
                            onChange={(e) => updateTask(task.id, 'endDate', e.target.value)}
                            className="w-full px-1.5 py-1 rounded bg-[#1e1d1a] border border-[#3c3934] text-xs text-white"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={task.progress}
                            onChange={(e) => updateTask(task.id, 'progress', Number(e.target.value))}
                            className="w-14 px-1.5 py-1 text-center rounded bg-[#1e1d1a] border border-[#3c3934] text-xs font-mono font-bold text-[#629924]"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <select
                            value={task.status}
                            onChange={(e) => updateTask(task.id, 'status', e.target.value)}
                            className="bg-[#1e1d1a] border border-[#3c3934] rounded px-1.5 py-1 text-xs text-white"
                          >
                            <option value="not_started">未着手</option>
                            <option value="in_progress">進行中</option>
                            <option value="completed">完了</option>
                          </select>
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={task.description}
                            onChange={(e) => updateTask(task.id, 'description', e.target.value)}
                            className="w-full px-2 py-1 rounded bg-transparent border border-[#3c3934] text-xs focus:outline-none focus:border-[#3692e7]"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <button
                            onClick={() => removeTask(task.id)}
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
            </div>
          </div>
        )}

        {/* TAB 5: Risk & Issue */}
        {activeTab === 'riskIssue' && (
          <div className="space-y-6">
            {/* Risks */}
            <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
              <div className="flex items-center justify-between border-b border-[#3c3934] pb-3">
                <div>
                  <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    リスク管理簿 (Risk Register - 将来の不確実性)
                  </h2>
                  <p className="text-xs text-[#8c8880]">まだ起きていないが、起きると悪影響を及ぼす事象と予防策を定めます。</p>
                </div>
                <button
                  onClick={addRisk}
                  className="px-3 py-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#3c3934] text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-amber-400" />
                  <span>リスクを追加</span>
                </button>
              </div>

              <div className="space-y-3">
                {project.risks.map(risk => (
                  <div key={risk.id} className="p-3.5 rounded-lg bg-[#1e1d1a] border border-[#3c3934] space-y-2 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <input
                        type="text"
                        value={risk.title}
                        onChange={(e) => updateRisk(risk.id, 'title', e.target.value)}
                        placeholder="リスク概要"
                        className="flex-1 font-bold text-white bg-transparent border-b border-[#3c3934] pb-1 focus:outline-none focus:border-amber-400"
                      />
                      <div className="flex items-center gap-3">
                        <span>発生確率:</span>
                        <select
                          value={risk.probability}
                          onChange={(e) => updateRisk(risk.id, 'probability', Number(e.target.value))}
                          className="bg-[#262421] border border-[#3c3934] rounded px-1.5 py-0.5 text-xs text-white"
                        >
                          {[1, 2, 3, 4, 5].map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                        <span>影響度:</span>
                        <select
                          value={risk.impact}
                          onChange={(e) => updateRisk(risk.id, 'impact', Number(e.target.value))}
                          className="bg-[#262421] border border-[#3c3934] rounded px-1.5 py-0.5 text-xs text-white"
                        >
                          {[1, 2, 3, 4, 5].map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                        <button
                          onClick={() => removeRisk(risk.id)}
                          className="text-red-400 hover:text-red-300 font-mono text-xs cursor-pointer"
                        >
                          [削除]
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-[#8c8880] block mb-1">対応策・回避方針 (Response Strategy)</label>
                      <input
                        type="text"
                        value={risk.responseStrategy}
                        onChange={(e) => updateRisk(risk.id, 'responseStrategy', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded bg-[#262421] border border-[#3c3934] text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Issues */}
            <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
              <div className="flex items-center justify-between border-b border-[#3c3934] pb-3">
                <div>
                  <h2 className="text-base font-bold text-red-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    課題管理簿 (Issue Log - 発生済みの問題)
                  </h2>
                  <p className="text-xs text-[#8c8880]">現在発生している障害・懸案と、その解決策・対応者を記録します。</p>
                </div>
                <button
                  onClick={addIssue}
                  className="px-3 py-1.5 rounded bg-[#302e2b] hover:bg-[#3d3a36] border border-[#3c3934] text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-red-400" />
                  <span>課題を追加</span>
                </button>
              </div>

              <div className="space-y-3">
                {project.issues.map(issue => (
                  <div key={issue.id} className="p-3.5 rounded-lg bg-[#1e1d1a] border border-[#3c3934] space-y-2 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <input
                        type="text"
                        value={issue.title}
                        onChange={(e) => updateIssue(issue.id, 'title', e.target.value)}
                        placeholder="発生している問題・課題"
                        className="flex-1 font-bold text-white bg-transparent border-b border-[#3c3934] pb-1 focus:outline-none focus:border-red-400"
                      />
                      <div className="flex items-center gap-3">
                        <span>重要度:</span>
                        <select
                          value={issue.severity}
                          onChange={(e) => updateIssue(issue.id, 'severity', e.target.value)}
                          className="bg-[#262421] border border-[#3c3934] rounded px-1.5 py-0.5 text-xs text-white"
                        >
                          <option value="low">低</option>
                          <option value="medium">中</option>
                          <option value="high">高</option>
                        </select>
                        <span>状態:</span>
                        <select
                          value={issue.status}
                          onChange={(e) => updateIssue(issue.id, 'status', e.target.value)}
                          className="bg-[#262421] border border-[#3c3934] rounded px-1.5 py-0.5 text-xs text-white"
                        >
                          <option value="open">未解決</option>
                          <option value="in_progress">対応中</option>
                          <option value="resolved">解決済</option>
                        </select>
                        <button
                          onClick={() => removeIssue(issue.id)}
                          className="text-red-400 hover:text-red-300 font-mono text-xs cursor-pointer"
                        >
                          [削除]
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-[#8c8880] block mb-1">解決策・対応方針 (Resolution Action)</label>
                      <input
                        type="text"
                        value={issue.resolution}
                        onChange={(e) => updateIssue(issue.id, 'resolution', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded bg-[#262421] border border-[#3c3934] text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: Decisions */}
        {activeTab === 'decisions' && (
          <div className="space-y-6">
            <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
              <div className="flex items-center justify-between border-b border-[#3c3934] pb-3">
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3692e7]" />
                    決定事項録 (Decision Log)
                  </h2>
                  <p className="text-xs text-[#8c8880]">誰が、いつ、どのような理由でその方針を決裁したのかを記録します。</p>
                </div>
                <button
                  onClick={addDecision}
                  className="px-3 py-1.5 rounded bg-[#3692e7] hover:bg-[#257ac9] text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>決定事項を追加</span>
                </button>
              </div>

              <div className="space-y-3">
                {project.decisions.map(dec => (
                  <div key={dec.id} className="p-4 rounded-lg bg-[#1e1d1a] border border-[#3c3934] space-y-2 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3c3934] pb-2">
                      <div className="flex items-center gap-2 flex-1">
                        <input
                          type="date"
                          value={dec.date}
                          onChange={(e) => updateDecision(dec.id, 'date', e.target.value)}
                          className="bg-[#262421] border border-[#3c3934] rounded px-2 py-0.5 font-mono text-xs text-white"
                        />
                        <input
                          type="text"
                          value={dec.topic}
                          onChange={(e) => updateDecision(dec.id, 'topic', e.target.value)}
                          placeholder="決定テーマ (例: 多言語表記言語の選定)"
                          className="flex-1 font-bold text-white bg-transparent border-0 focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#8c8880]">決定者:</span>
                        <input
                          type="text"
                          value={dec.decisionMaker}
                          onChange={(e) => updateDecision(dec.id, 'decisionMaker', e.target.value)}
                          placeholder="部長・課長決裁"
                          className="bg-[#262421] border border-[#3c3934] rounded px-2 py-0.5 text-xs text-white"
                        />
                        <button
                          onClick={() => removeDecision(dec.id)}
                          className="text-red-400 hover:text-red-300 font-mono text-xs cursor-pointer ml-2"
                        >
                          [削除]
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-[#8c8880] block mb-1">決定内容 (Decided Option)</label>
                      <textarea
                        rows={2}
                        value={dec.decision}
                        onChange={(e) => updateDecision(dec.id, 'decision', e.target.value)}
                        className="w-full p-2 rounded bg-[#262421] border border-[#3c3934] focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[#8c8880] block mb-1">決定理由・背景 (Rationale)</label>
                      <input
                        type="text"
                        value={dec.reason}
                        onChange={(e) => updateDecision(dec.id, 'reason', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-[#262421] border border-[#3c3934] focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: Deliverables */}
        {activeTab === 'deliverables' && (
          <div className="space-y-6">
            <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
              <div className="flex items-center justify-between border-b border-[#3c3934] pb-3">
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-[#629924]" />
                    成果物・納品物受入管理 (Deliverables)
                  </h2>
                  <p className="text-xs text-[#8c8880]">事業者から受領する成果物の仕様と受入合格基準（検収基準）を管理します。</p>
                </div>
                <button
                  onClick={addDeliverable}
                  className="px-3 py-1.5 rounded bg-[#3692e7] hover:bg-[#257ac9] text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>成果物を追加</span>
                </button>
              </div>

              <div className="space-y-3">
                {project.deliverables.map(del => (
                  <div key={del.id} className="p-4 rounded-lg bg-[#1e1d1a] border border-[#3c3934] space-y-2 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3c3934] pb-2">
                      <input
                        type="text"
                        value={del.name}
                        onChange={(e) => updateDeliverable(del.id, 'name', e.target.value)}
                        placeholder="成果物名称"
                        className="flex-1 font-bold text-white bg-transparent border-0 focus:outline-none"
                      />
                      <div className="flex items-center gap-3">
                        <span>状態:</span>
                        <select
                          value={del.status}
                          onChange={(e) => updateDeliverable(del.id, 'status', e.target.value)}
                          className="bg-[#262421] border border-[#3c3934] rounded px-2 py-0.5 text-xs text-white"
                        >
                          <option value="not_started">未着手</option>
                          <option value="drafting">作成中</option>
                          <option value="under_review">検査・校正中</option>
                          <option value="accepted">検収完了</option>
                        </select>
                        <button
                          onClick={() => removeDeliverable(del.id)}
                          className="text-red-400 hover:text-red-300 font-mono text-xs cursor-pointer ml-2"
                        >
                          [削除]
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-[#8c8880] block mb-1">受入合格基準 (Acceptance Criteria)</label>
                      <input
                        type="text"
                        value={del.acceptanceCriteria}
                        onChange={(e) => updateDeliverable(del.id, 'acceptanceCriteria', e.target.value)}
                        placeholder="例: 強度試験合格、誤字脱字なし、指定フォント仕様書準拠"
                        className="w-full px-2 py-1.5 rounded bg-[#262421] border border-[#3c3934] focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 8: Closure & Lessons Learned */}
        {activeTab === 'closure' && (
          <div className="space-y-6">
            <div className="bg-[#262421] p-5 rounded-xl border border-[#3c3934] space-y-4">
              <div className="border-b border-[#3c3934] pb-3">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#3692e7]" />
                  事業完了・引継報告 & 教訓登録簿 (Lessons Learned)
                </h2>
                <p className="text-xs text-[#8c8880]">事業を締めくくり、後任者や他部署へ引き継ぐための組織知（教訓）を蓄積します。</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1 text-white">完了日</label>
                  <input
                    type="date"
                    value={project.closure.completionDate}
                    onChange={(e) => updateClosure('completionDate', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-white">事業完了ステータス</label>
                  <select
                    value={project.closure.overallStatus}
                    onChange={(e) => updateClosure('overallStatus', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] text-white"
                  >
                    <option value="not_started">未完了</option>
                    <option value="in_progress">進行中</option>
                    <option value="completed">全完了・引継済</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block font-semibold mb-1 text-white">得られた教訓 (Lessons Learned - 次回への組織知)</label>
                  <textarea
                    rows={4}
                    value={project.closure.lessonsLearned}
                    onChange={(e) => updateClosure('lessonsLearned', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                    placeholder="うまくいった点、次回への改善点、事前の調査不足だった点など"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-white">引継先・文書保管場所 (Handover)</label>
                  <textarea
                    rows={3}
                    value={project.closure.handover}
                    onChange={(e) => updateClosure('handover', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                    placeholder="維持管理マニュアルの保管場所、担当係への引継ぎ"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-white">次年度以降の展開 (Future Actions)</label>
                  <textarea
                    rows={3}
                    value={project.closure.futureActions}
                    onChange={(e) => updateClosure('futureActions', e.target.value)}
                    className="w-full p-2.5 rounded bg-[#1e1d1a] border border-[#3c3934] focus:border-[#3692e7] outline-none"
                    placeholder="支所・別館への横展開、次年度予算要求など"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
