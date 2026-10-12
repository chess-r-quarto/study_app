// Generated from tools/prototype/pm2.html (createSampleProject).
import type { ProjectData } from './types';

const SAMPLE_BASE = {
  "schemaVersion": "1.0",
  "metadata": {
    "projectId": "sample_gov_sign_renewal",
    "projectName": "本庁舎窓口案内表示・多言語サイン刷新事業",
    "projectCode": "R08-INFO-004",
    "organization": "希望市役所",
    "department": "総務部 庁舎管理課 施設担当",
    "projectManager": "主査 鈴木 健太",
    "createdAt": "2026-04-01T08:30:00.000Z",
    "exportedAt": null
  },
  "charter": {
    "background": "昭和62年竣工の本庁舎1階〜3階の案内板は経年劣化と度重なる課名変更シール貼付により視認性が著しく悪化している。外国人居住者や高齢・車椅子来庁者の急増に伴い、「窓口が分かりにくい」「総合案内に長蛇の列ができる」といった市民の声が年間200件を超えているため。",
    "purpose": "誰もが直感的に迷わず1分以内に目的地窓口へ辿り着けるユニバーサルデザイン・4言語対応の案内サイン体系を確立し、総合案内での誘導問い合わせ時間を半減させる。",
    "objectives": "1. 本庁舎1F〜3Fの案内板一新\n2. JISピクトグラム＋日英中韓4言語対応\n3. 点字案内板の適正配置",
    "scope": "・本庁舎1階〜3階の天井吊り下げ型案内板、壁面フロアマップの撤去および新設\n・ピクトグラムの選定およびサインデザインマニュアルの作成\n・総合案内前へのUD対応タッチパネル式案内サイネージ（試行1台）の調達",
    "outOfScope": "・市民会館・各支所・別館のサイン改修（次年度以降の別事業）\n・窓口カウンター内部の什器・システム機器の改修\n・庁舎敷地外の道路誘導標識",
    "deliverables": "・案内サイン施工完了物一式\n・多言語ピクトグラム設計データ集 (AI/PDF)\n・サイン維持管理マニュアル\n・完了検査調書",
    "successCriteria": "1. 令和8年12月25日までに施工完了・供用開始すること。\n2. 配当予算4,800,000円以内で執行すること。\n3. 市民・来庁者向けモニターアンケートで満足度90%以上を獲得すること。",
    "assumptions": "天井ボードの耐荷重が既存図面通りであり、大規模な構造補強なしで新設看板を吊り下げ可能であること。",
    "constraints": "平日開庁時間（8:30〜17:15）中の騒音・振動作業は厳禁。施工工事は閉庁日（土日祝・夜間）に限定して実施すること。",
    "budget": "4,800,000円 (当初予算確保済)",
    "authority": "仕様策定・現場打合せ・業者調整は主査専決。契約変更・最終検収承認は課長決裁。",
    "notes": "次年度以降の支所改修のモデルケースとして実施する。"
  },
  "stakeholders": [
    {
      "id": "sh_1",
      "name": "高橋 誠 (庁舎管理課長)",
      "organization": "総務部 庁舎管理課",
      "role": "事業決裁者・総括責任者",
      "power": 5,
      "interest": 4,
      "attitude": "supportive",
      "currentEngagement": "supportive",
      "desiredEngagement": "supportive",
      "strategy": "月2回の課内定例で重要決定事項と予算執行状況を簡潔に報告。重要トラブルは即日報告。",
      "communicationMethod": "対面協議・起案書",
      "communicationFrequency": "隔週1回",
      "notes": "予算超過と議会からの指摘を最も警戒している。"
    },
    {
      "id": "sh_2",
      "name": "佐藤 美咲 (窓口サービス係長)",
      "organization": "市民生活部 窓口サービス課",
      "role": "現場ユーザー代表 (1F総合窓口)",
      "power": 4,
      "interest": 5,
      "attitude": "supportive",
      "currentEngagement": "supportive",
      "desiredEngagement": "leading",
      "strategy": "デザイン原案の段階で窓口スタッフ全員の導線意見を聴取し、不満が出ないよう共同検討する。",
      "communicationMethod": "現場立会い・庁内チャット",
      "communicationFrequency": "週1回",
      "notes": "住民票と戸籍の案内カラーを明確に色分けしてほしい強い要望あり。"
    },
    {
      "id": "sh_3",
      "name": "ジョン・スミス (国際交流推進員)",
      "organization": "企画政策部 国際交流課",
      "role": "多言語表記アドバイザー",
      "power": 2,
      "interest": 5,
      "attitude": "supportive",
      "currentEngagement": "supportive",
      "desiredEngagement": "supportive",
      "strategy": "英語・中国語・韓国語のスペルチェックおよびピクトグラムの直感性を確認してもらう。",
      "communicationMethod": "庁内メール・データ校正",
      "communicationFrequency": "校正時随時",
      "notes": "直訳ではなく外国人住民にとって自然な行政用語の選定に協力いただく。"
    },
    {
      "id": "sh_4",
      "name": "伊藤 義男 (市障害者福祉団体連絡会)",
      "organization": "外部当事者団体",
      "role": "当事者目線アドバイザー",
      "power": 3,
      "interest": 4,
      "attitude": "cautious",
      "currentEngagement": "neutral",
      "desiredEngagement": "supportive",
      "strategy": "試作品段階で現地体験会を開催し、事前の意見反映を行う。",
      "communicationMethod": "福祉課経由での対面ヒアリング",
      "communicationFrequency": "月1回",
      "notes": "点字の突起高さと車椅子目線（床上120cm）での視認性に特に配慮が必要。"
    },
    {
      "id": "sh_5",
      "name": "財政課 予算担当主幹",
      "organization": "総務部 財政課",
      "role": "予算配当・流用承認",
      "power": 5,
      "interest": 2,
      "attitude": "neutral",
      "currentEngagement": "neutral",
      "desiredEngagement": "neutral",
      "strategy": "予算枠内の厳格な執行を維持し、定期予算状況表を共有。",
      "communicationMethod": "財務会計システム通知",
      "communicationFrequency": "四半期1回",
      "notes": "年度末繰越は極力避けてほしい意向。"
    }
  ],
  "tasks": [
    {
      "id": "task_1",
      "name": "現状庁舎サインの総点検・写真台帳作成",
      "description": "1F〜3Fの全案内板の位置、寸法、老朽度、配線状況を記録。",
      "owner": "山田 (施設係)",
      "startDate": "2026-09-01",
      "endDate": "2026-09-15",
      "progress": 100,
      "status": "completed",
      "priority": "medium"
    },
    {
      "id": "task_2",
      "name": "障害者団体・国際交流課への要求ヒアリング",
      "description": "点字、車椅子導線、多言語表記のガイドライン整理。",
      "owner": "鈴木主査",
      "startDate": "2026-09-16",
      "endDate": "2026-09-30",
      "progress": 80,
      "status": "in_progress",
      "priority": "high"
    },
    {
      "id": "task_3",
      "name": "公募型プロポーザル仕様書・評価基準の策定",
      "description": "設計・施工一括発注のための仕様書作成および課長決裁。",
      "owner": "鈴木主査",
      "startDate": "2026-10-01",
      "endDate": "2026-10-20",
      "progress": 20,
      "status": "in_progress",
      "priority": "high"
    },
    {
      "id": "task_4",
      "name": "入札公告および事業者選定審査会",
      "description": "提案書の審査、プレゼンテーション評価、優先交渉権者決定。",
      "owner": "選定委員会",
      "startDate": "2026-10-21",
      "endDate": "2026-11-10",
      "progress": 0,
      "status": "not_started",
      "priority": "high"
    },
    {
      "id": "task_5",
      "name": "サイン詳細設計図面の作成・校正",
      "description": "文字サイズ、色覚UDテスト、4言語スペル最終校正。",
      "owner": "選定事業者 / 鈴木主査",
      "startDate": "2026-11-11",
      "endDate": "2026-11-28",
      "progress": 0,
      "status": "not_started",
      "priority": "medium"
    },
    {
      "id": "task_6",
      "name": "閉庁日夜間施工工事 (既存撤去・新設取付)",
      "description": "土曜・日曜夜間における吊り下げ工事および配線接続。",
      "owner": "施工事業者 / 山田立会",
      "startDate": "2026-12-05",
      "endDate": "2026-12-20",
      "progress": 0,
      "status": "not_started",
      "priority": "high"
    },
    {
      "id": "task_7",
      "name": "完了検査および新サイン供用開始",
      "description": "施工品質検査、調書作成、庁内への新サイン周知。",
      "owner": "鈴木主査 / 課長",
      "startDate": "2026-12-21",
      "endDate": "2026-12-25",
      "progress": 0,
      "status": "not_started",
      "priority": "medium"
    }
  ],
  "milestones": [
    {
      "id": "ms_1",
      "name": "発注仕様書の庁内決裁完了",
      "date": "2026-10-20",
      "status": "pending",
      "description": "契約検査課および部課長決裁の完了"
    },
    {
      "id": "ms_2",
      "name": "設計・施工事業者の契約締結",
      "date": "2026-11-10",
      "status": "pending",
      "description": "プロポーザル特定事業者の正式契約"
    },
    {
      "id": "ms_3",
      "name": "新サイン全箇所供用開始 (完了検査)",
      "date": "2026-12-25",
      "status": "pending",
      "description": "全フロアサインの引渡しと市民供用"
    }
  ],
  "risks": [
    {
      "id": "risk_1",
      "title": "看板面のアクリル・アルミ特殊資材の納期遅延",
      "probability": 3,
      "impact": 4,
      "responseStrategy": "入札仕様書に「JIS規格同等品の国内即納資材による代替承認条項」を記載しておく。",
      "owner": "鈴木主査",
      "status": "open",
      "dueDate": "2026-10-20"
    },
    {
      "id": "risk_2",
      "title": "夜間工事後の月曜朝における現場清掃不備・養生残り",
      "probability": 2,
      "impact": 4,
      "responseStrategy": "月曜朝7:30に担当職員による現場完全復旧確認を義務付ける。",
      "owner": "山田 (施設係)",
      "status": "open",
      "dueDate": "2026-12-07"
    }
  ],
  "issues": [
    {
      "id": "issue_1",
      "title": "1階中央柱の天井裏に耐震補強用鉄骨ブレースが近接していることが判明",
      "severity": "high",
      "owner": "建築課 構造担当 / 鈴木",
      "status": "open",
      "dueDate": "2026-09-25",
      "resolution": "建築課と現地立会いを実施し、挟み込み金具に変更して固定する設計変更で合意。"
    }
  ],
  "decisions": [
    {
      "id": "dec_1",
      "date": "2026-09-08",
      "topic": "多言語表記の対象言語とフォント規格の選定",
      "decision": "表記言語は「日本語、英語、中国語（簡体字）、韓国語」の4言語とし、フォントはJISユニバーサルデザインフォントを採用することを決定した。",
      "decisionMaker": "総務部長・庁舎管理課長決裁",
      "reason": "5言語案も検討したが文字が縮小し高齢者の視認性が低下するため、市内在住外国人の91%をカバーする4言語を採択。",
      "impact": "広報広聴課の庁内ピクトグラムガイドラインと整合を図る。"
    }
  ],
  "deliverables": [
    {
      "id": "deliv_1",
      "name": "天井吊下げ型案内サイン (1F〜3F 計18箇所)",
      "description": "アルミ成形・アクリル面板・UDフォント・4言語表記看板",
      "owner": "施工事業者",
      "dueDate": "2026-12-20",
      "status": "drafting",
      "acceptanceCriteria": "耐震取付強度試験合格、色ムラなし、誤字脱字なし、床上220cmクリアランスの確保"
    },
    {
      "id": "deliv_2",
      "name": "サイン維持管理マニュアル及びIllustratorデータ集",
      "description": "課名変更時のシール作成手順および原版ベクターデータ一式",
      "owner": "設計事業者",
      "dueDate": "2026-12-25",
      "status": "not_started",
      "acceptanceCriteria": "アウトライン前後のAIデータ、仕様フォント明記、印刷指定カラー記載"
    }
  ],
  "closure": {
    "completionDate": "",
    "overallStatus": "in_progress",
    "achievements": "（現在事業進行中。完了後に記入）",
    "unachievedObjectives": "",
    "lessonsLearned": "【教訓】天井裏の構造物干渉は、設計発注前（現状点検時）に点検口からスコープ等で入念に事前確認しておくべきであった。",
    "handover": "維持管理マニュアルは施設係の日常管理台帳へファイリング予定。",
    "futureActions": "令和9年度は東別館のサイン改修予算要求を検討。",
    "approval": "進行中"
  }
};

export function createSampleProject(): ProjectData {
  const p = JSON.parse(JSON.stringify(SAMPLE_BASE)) as ProjectData;
  p.metadata.updatedAt = new Date().toISOString();
  return p;
}
