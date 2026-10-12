// Generated from tools/prototype/pm2.html (PM_TIPS). Edit the content here directly if needed.
import type { TipEntry } from './types';

export const PM_TIPS: Record<string, TipEntry> = {
  "projectOverview": {
    "title": "自治体実務におけるプロジェクトマネジメント",
    "pmbokTerm": "Project Management Standard",
    "explanation": "通常の定常業務（ルーティン）と異なり、期限・予算・目的が定まった個別事業を確実にやり切るための構造化フレームワークです。",
    "practicalMeaning": "要綱制定、新システム導入、庁舎改修、大型イベント等、複数部局が絡む事業において「担当者の頭の中」から「可視化された共有資産」へ変換します。",
    "example": "「誰が見ても現在の進捗・課題・決定理由が把握できる状態」を維持することが最大の目的です。"
  },
  "projectCharter": {
    "title": "事業目的・計画書 (プロジェクト憲章)",
    "pmbokTerm": "Project Charter",
    "explanation": "事業の存在意義、達成目標、予算枠、担当者の専決権限を公認する基本文書です。",
    "practicalMeaning": "行政における「起案文書（伺い書）」や「基本計画策定書」に相当。後からの大幅な方針変更やスコープ膨張（仕様の後出し）を防ぎます。",
    "example": "「庁舎窓口サイン刷新において、目的は市民の迷い解消、予算480万円、担当者は仕様策定権限を持つ」といった骨子を定めます。"
  },
  "background": {
    "title": "事業の背景",
    "pmbokTerm": "Business Case & Strategic Alignment",
    "explanation": "なぜ今この事業に着手する必要があるのか、現状の課題や社会情勢の要請を説明します。",
    "practicalMeaning": "住民アンケート、議会での指摘、法令改正、設備老朽化など「公費を投入すべき正当な理由」を論述します。",
    "example": "「築30年の庁舎でサインの視認性が著しく低下しており、市民アンケートで窓口のわかりにくさを訴える声が45%に達したため。」"
  },
  "purpose": {
    "title": "事業の目的",
    "pmbokTerm": "Project Purpose & High-Level Objectives",
    "explanation": "事業が完了した結果、どのような市民価値・業務価値が達成されるかのゴール像です。",
    "practicalMeaning": "「サインを新設する（手段）」ではなく「初めての来庁者が迷わず1分以内に窓口に到達できるようにする（価値・目的）」を記述します。",
    "example": "「誰もが直感的に迷わず手続きできるユニバーサルデザイン窓口の実現。」"
  },
  "scope": {
    "title": "今回実施すること (スコープ対象)",
    "pmbokTerm": "Project Scope",
    "explanation": "この事業の中で責任を持って完了させる対象・成果の明確な境界線です。",
    "practicalMeaning": "何をやってもらえるのかを関係部署に明示し、過大な期待や業務の曖昧さを排除します。",
    "example": "「本庁舎1F〜3Fの天井案内板およびフロアマップの更新、多言語ピクトグラムの導入。」"
  },
  "outOfScope": {
    "title": "今回やらないこと (スコープ境界線)",
    "pmbokTerm": "Out of Scope",
    "explanation": "この事業では扱わない、あるいは次年度以降に回す境界外の事項です。",
    "practicalMeaning": "行政実務で最も生じやすい「ついでにあれもやってくれると思った」というトラブルを未然に防ぐ防波堤です。",
    "example": "「別館・出張所のサイン更新は今回含まない」「窓口カウンター本体の改修は含まない」"
  },
  "successCriteria": {
    "title": "成功基準",
    "pmbokTerm": "Success Criteria & Acceptance",
    "explanation": "何を達成したら「この事業は成功した」と客観的に判断できるかの基準です。",
    "practicalMeaning": "期日厳守、予算内執行、アンケート満足度など、終了時の評価指標を設定します。",
    "example": "「1. 12月25日までに供用開始、2. 当初予算480万円以内、3. アンケート満足度85%以上」"
  },
  "constraints": {
    "title": "制約事項・前提条件",
    "pmbokTerm": "Constraints & Assumptions",
    "explanation": "事業を進める上で自由に動かせない制約と、確証はないが前提としている条件です。",
    "practicalMeaning": "開庁日の騒音工事禁止、年度末の予算執行期限、天井の耐震調査完了前提など。",
    "example": "「制約: 平日昼間のドリル作業不可、土日夜間施工のみ」"
  },
  "stakeholders": {
    "title": "関係者・ステークホルダー分析",
    "pmbokTerm": "Stakeholder Engagement & Power/Interest Grid",
    "explanation": "事業に影響を与える、または影響を受ける人や組織を漏れなく洗い出し、関与度を設計します。",
    "practicalMeaning": "行政における「根回し」「事前協議」「合意形成」を論理的・計画的に進めるためのツールです。",
    "example": "権限が強く関心も高い相手には密に事前相談し、権限は強いが関心が薄い相手には重要点のみを報告します。"
  },
  "ganttChart": {
    "title": "工程表・ガントチャート",
    "pmbokTerm": "WBS (Work Breakdown Structure) & Schedule",
    "explanation": "大きな業務を細分化（タスク化）し、時系列と依存関係を可視化したスケジュール表です。",
    "practicalMeaning": "「今誰が作業していて、次に何をすべきか」が一目で分かり、遅延時のボトルネックを特定できます。",
    "example": "「現状調査」→「要求ヒアリング」→「仕様書策定」→「入札」→「施工」→「検査」"
  },
  "riskAndIssue": {
    "title": "リスクと課題の違い",
    "pmbokTerm": "Risk Register vs. Issue Log",
    "explanation": "【リスク】将来起きるかもしれない不確実なこと。【課題】すでに発生してしまっている問題。",
    "practicalMeaning": "混同しがちな2つを分離することで、「今消火すべき火事（課題）」と「将来の火災予防（リスク）」を冷静に整理できます。",
    "example": "リスク:「海外資材の納品が遅れるかもしれない」／課題:「現場で金具が鉄骨ブレースに干渉してしまっている」"
  },
  "decisionLog": {
    "title": "決定事項録 (Decision Log)",
    "pmbokTerm": "Decision Log",
    "explanation": "誰が、いつ、どのような理由でその方針を決めたのかを蓄積する公式記録です。",
    "practicalMeaning": "公務員は定期異動があります。「前任者がなぜこの方針にしたのか分からない」という迷走を防ぎ、説明責任を果たします。",
    "example": "「令和8年9月8日：多言語は4言語に決定（理由: 視認性維持のため。決定者: 部長・課長決裁）」"
  },
  "deliverables": {
    "title": "成果物・納品物管理",
    "pmbokTerm": "Deliverables & Inspection",
    "explanation": "事業の対価として手元に残る最終成果の定義と検収条件です。",
    "practicalMeaning": "工事完成物、マニュアル、デザイン元データなど、業者から何を受け取り、どう合格判定するかを定めます。",
    "example": "「天井案内サイン看板本体、ピクトグラム生データ(AI)、維持管理要領書」"
  },
  "projectClosure": {
    "title": "事業完了・引継報告",
    "pmbokTerm": "Project Closure & Lessons Learned",
    "explanation": "事業を公式に締めくくり、得られたノウハウや反省点を次世代へ引き継ぐ手続きです。",
    "practicalMeaning": "「終わったから終わり」にせず、教訓を残すことで同僚や後任者が同じ失敗を繰り返さない組織知にします。",
    "example": "教訓:「当事者団体への意見聴取は仕様書入札公示の2ヶ月前には終えておくべきだった」"
  }
};

export const DEFAULT_TIP: TipEntry = {
  title: 'プロジェクトマネジメント実務ヒント',
  pmbokTerm: 'Project Management Standard',
  explanation: '業務の可視化と合意形成を支援する標準的枠組みです。',
  practicalMeaning: '後からの手戻りを防ぎ、合意形成を論理的に進めるために記録を残します。',
  example: '誰が見ても事業の目的と状況が客観的に把握できる状態を目指します。'
};
