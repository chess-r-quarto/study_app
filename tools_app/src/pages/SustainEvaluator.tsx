import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  SustainState,
  TabKey,
  ThemeMode,
  ToastState,
  ConceptState,
  FourPState,
  AmbitionState,
  SystemState,
  VpsState,
  TlbmcState
} from './sustain/types';
import { SAMPLE_STATE, EMPTY_STATE } from './sustain/sampleData';
import {
  loadSustainState,
  saveSustainState,
  getInitialTheme,
  saveThemePref,
  exportSustainJSON
} from './sustain/storage';
import { ConfirmModal } from './sustain/components/ConfirmModal';
import { Toast } from './sustain/components/Toast';
import { OverviewTab } from './sustain/components/OverviewTab';
import { FourPAmbitionTab } from './sustain/components/FourPAmbitionTab';
import { SystemTab } from './sustain/components/SystemTab';
import { VpsTab } from './sustain/components/VpsTab';
import { TlbmcTab } from './sustain/components/TlbmcTab';
import { SummaryTab } from './sustain/components/SummaryTab';

const TABS: { id: TabKey; label: string }[] = [
  { id: 'tab-overview', label: '01. コンセプト & SDGs' },
  { id: 'tab-4p-ambition', label: '02. 4Pモデル & 野心マトリックス' },
  { id: 'tab-system', label: '03. システム思考 & HMW' },
  { id: 'tab-vps', label: '04. 4P価値提案 & KPI' },
  { id: 'tab-tlbmc', label: '05. 三層ビジネスモデル (TLBMC)' },
  { id: 'tab-summary', label: '06. A4総合レポート出力' },
];

export default function SustainEvaluator() {
  const [state, setState] = useState<SustainState>(loadSustainState);
  const [activeTab, setActiveTab] = useState<TabKey>('tab-overview');
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [toast, setToast] = useState<ToastState | null>(null);

  // Modal State
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    desc: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    desc: '',
    onConfirm: () => {},
  });

  // Auto-save state
  useEffect(() => {
    saveSustainState(state);
  }, [state]);

  // Sync theme preference to html class & localStorage
  useEffect(() => {
    saveThemePref(theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const showToast = useCallback((message: string, type: 'info' | 'success' | 'error' = 'info') => {
    setToast({ message, type });
    const timer = setTimeout(() => {
      setToast(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      showToast(next === 'dark' ? 'ダークモードに切り替えました' : 'ライトモードに切り替えました');
      return next;
    });
  };

  // Updaters
  const handleConceptChange = (key: keyof ConceptState, value: any) => {
    setState((prev) => ({
      ...prev,
      concept: { ...prev.concept, [key]: value },
    }));
  };

  const handleFourPChange = (key: keyof FourPState, value: string) => {
    setState((prev) => ({
      ...prev,
      fourP: { ...prev.fourP, [key]: value },
    }));
  };

  const handleAmbitionChange = (key: keyof AmbitionState, value: string) => {
    setState((prev) => ({
      ...prev,
      ambition: { ...prev.ambition, [key]: value },
    }));
  };

  const handleSystemChange = (nextSystem: SystemState) => {
    setState((prev) => ({
      ...prev,
      system: nextSystem,
    }));
  };

  const handleVpsChange = (key: keyof VpsState, value: string) => {
    setState((prev) => ({
      ...prev,
      vps: { ...prev.vps, [key]: value },
    }));
  };

  const handleGenerateVpsStatement = () => {
    const cName = state.concept.name || '当コンセプト';
    const cProblem = state.concept.challenge ? state.concept.challenge.split('。')[0] : '課題';
    const cSol = state.concept.solution ? state.concept.solution.split('。')[0] : 'ソリューション';
    const pVal = state.vps.planetValue || '環境循環価値';
    const ecoVal = state.vps.profitValue || '事業性改善';

    const generated = `${cName}は、${cProblem}に対し、${cSol}を提供することで、${pVal}と${ecoVal}を同時に実現し、持続可能なシステム変革をもたらします。`;
    setState((prev) => ({
      ...prev,
      vps: { ...prev.vps, statement: generated },
    }));
    showToast('バリュー・プロポジション文を生成しました', 'success');
  };

  const handleTlbmcChange = (layer: keyof TlbmcState, field: string, value: string) => {
    setState((prev) => ({
      ...prev,
      tlbmc: {
        ...prev.tlbmc,
        [layer]: {
          ...prev.tlbmc[layer],
          [field]: value,
        },
      },
    }));
  };

  // Toolbar Actions
  const handleLoadSample = () => {
    setModalConfig({
      isOpen: true,
      title: 'サンプルデータの読み込み',
      desc: '現在入力されているデータが講義サンプルの循環型パッケージング事業データで上書きされます。よろしいですか？',
      onConfirm: () => {
        setState(JSON.parse(JSON.stringify(SAMPLE_STATE)));
        setModalConfig((m) => ({ ...m, isOpen: false }));
        showToast('講義サンプルデータをロードしました', 'success');
      },
    });
  };

  const handleReset = () => {
    setModalConfig({
      isOpen: true,
      title: '全データの初期化',
      desc: '入力したすべてのフレームワークデータが消去され、空のシートに戻ります。この操作は元に戻せません。',
      onConfirm: () => {
        setState(JSON.parse(JSON.stringify(EMPTY_STATE)));
        setModalConfig((m) => ({ ...m, isOpen: false }));
        showToast('データをすべて初期化しました');
      },
    });
  };

  const handleExport = () => {
    exportSustainJSON(state);
    showToast('JSONファイルを書き出しました', 'success');
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
          showToast('JSONデータを正常に読み込みました', 'success');
        } else {
          showToast('無効なサステナブル評価データ形式です', 'error');
        }
      } catch {
        showToast('JSONの解析に失敗しました', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handlePrint = () => {
    setActiveTab('tab-summary');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 bg-[#edebe9] text-[#2d2b28] dark:bg-[#161512] dark:text-[#c4c3be] ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 10mm 12mm 10mm;
          }
          body {
            background-color: #ffffff !important;
            color: #111111 !important;
            font-size: 9.5pt;
          }
          .no-print {
            display: none !important;
          }
          .a4-page {
            page-break-after: always;
            break-after: page;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .a4-page:last-child {
            page-break-after: avoid;
            break-after: avoid;
          }
          .print-card {
            border: 1px solid #777777 !important;
            background-color: #ffffff !important;
            color: #111111 !important;
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>

      {/* Toast Notification */}
      <Toast toast={toast} />

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        desc={modalConfig.desc}
        onConfirm={modalConfig.onConfirm}
        onCancel={() => setModalConfig((m) => ({ ...m, isOpen: false }))}
      />

      {/* Header Toolbar */}
      <header className="no-print sticky top-0 z-40 bg-[#ffffff]/95 dark:bg-[#262421]/95 backdrop-blur border-b border-[#d8d6d2] dark:border-[#363431]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Title & Branding */}
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="w-8 h-8 rounded border border-[#d8d6d2] dark:border-[#363431] bg-[#ffffff] dark:bg-[#302e2b] hover:bg-[#f7f6f5] dark:hover:bg-[#3d3a36] text-[#2d2b28] dark:text-white flex items-center justify-center transition-colors shadow-xs"
              title="ツール一覧に戻る"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="w-8 h-8 rounded bg-[#52801e] dark:bg-[#629924] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-xs">
              OU
            </div>
            <div>
              <h1 className="text-base font-bold leading-tight text-[#111111] dark:text-white">
                サステナブル経営戦略 総合評価シート
              </h1>
              <p className="text-xs text-[#6e6a64] dark:text-[#8a8882]">
                The Open University & Explorer Labs 実践フレームワーク体系
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded border border-[#d8d6d2] dark:border-[#363431] hover:bg-[#f7f6f5] dark:hover:bg-[#302e2b] flex items-center space-x-1.5 transition-colors cursor-pointer text-[#2d2b28] dark:text-[#c4c3be]"
              title="テーマ切り替え"
            >
              {theme === 'dark' ? (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                  <span>ライト表示</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                  <span>ダーク表示</span>
                </>
              )}
            </button>

            {/* Load Sample Button */}
            <button
              onClick={handleLoadSample}
              className="px-3 py-1.5 rounded border border-[#d8d6d2] dark:border-[#363431] hover:bg-[#f7f6f5] dark:hover:bg-[#302e2b] transition-colors font-medium cursor-pointer text-[#2d2b28] dark:text-[#c4c3be]"
            >
              サンプル読込
            </button>

            {/* Export JSON Button */}
            <button
              onClick={handleExport}
              className="px-3 py-1.5 rounded border border-[#d8d6d2] dark:border-[#363431] hover:bg-[#f7f6f5] dark:hover:bg-[#302e2b] transition-colors font-medium cursor-pointer text-[#2d2b28] dark:text-[#c4c3be]"
            >
              JSON書出
            </button>

            {/* Import JSON Button */}
            <label className="px-3 py-1.5 rounded border border-[#d8d6d2] dark:border-[#363431] hover:bg-[#f7f6f5] dark:hover:bg-[#302e2b] transition-colors font-medium cursor-pointer text-[#2d2b28] dark:text-[#c4c3be]">
              JSON読込
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#52801e] dark:bg-[#629924] text-white hover:opacity-90 font-medium transition-opacity flex items-center space-x-1.5 cursor-pointer shadow-xs"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>A4印刷 / PDF保存</span>
            </button>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="px-2.5 py-1.5 rounded border border-red-300 dark:border-red-900/60 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
              title="全データを初期化"
            >
              リセット
            </button>
          </div>
        </div>

        {/* Tab Navigation (6 Tabs Restored) */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto space-x-1 border-t border-[#d8d6d2] dark:border-[#363431] py-1.5 scrollbar-thin">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded text-xs font-semibold whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#edebe9] dark:bg-[#161512] text-[#111111] dark:text-white shadow-2xs font-bold'
                    : 'text-[#6e6a64] dark:text-[#8a8882] hover:text-[#2d2b28] dark:hover:text-[#c4c3be]'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6">
        {activeTab === 'tab-overview' && (
          <OverviewTab concept={state.concept} onChange={handleConceptChange} />
        )}
        {activeTab === 'tab-4p-ambition' && (
          <FourPAmbitionTab
            fourP={state.fourP}
            ambition={state.ambition}
            onFourPChange={handleFourPChange}
            onAmbitionChange={handleAmbitionChange}
          />
        )}
        {activeTab === 'tab-system' && (
          <SystemTab system={state.system} onChange={handleSystemChange} />
        )}
        {activeTab === 'tab-vps' && (
          <VpsTab
            vps={state.vps}
            concept={state.concept}
            onChange={handleVpsChange}
            onGenerateStatement={handleGenerateVpsStatement}
          />
        )}
        {activeTab === 'tab-tlbmc' && (
          <TlbmcTab tlbmc={state.tlbmc} onChange={handleTlbmcChange} />
        )}
        {activeTab === 'tab-summary' && (
          <SummaryTab state={state} onPrint={handlePrint} />
        )}
      </main>

      {/* Footer */}
      <footer className="no-print mt-auto border-t border-[#d8d6d2] dark:border-[#363431] py-4 bg-[#ffffff] dark:bg-[#262421] text-center text-xs text-[#6e6a64] dark:text-[#8a8882]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>The Open University / Explorer Labs - Sustainable Business Strategy Evaluation Environment</p>
          <p className="font-mono text-[11px]">System Status: Ready | Lichess-Inspired UI</p>
        </div>
      </footer>
    </div>
  );
}
