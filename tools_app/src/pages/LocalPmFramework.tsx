import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Download,
  Upload,
  Printer,
  FileText,
  Clock,
  Sun,
  Moon,
  Settings,
  Layers,
} from 'lucide-react';

import type {
  ProjectData,
  TabId,
  Stakeholder,
  TaskItem,
  Milestone,
  RiskItem,
  IssueItem,
  DecisionItem,
  DeliverableItem,
  Snapshot,
  TipEntry,
} from './pm/types';
import { createEmptyProject, normalizeProject } from './pm/project';
import { createSampleProject } from './pm/sampleData';
import { StorageService, LEGACY_LS_KEY } from './pm/storage';
import { PM_TIPS, DEFAULT_TIP } from './pm/tips';

import { StakeholderMatrix } from './pm/components/StakeholderMatrix';
import { RiskMatrix } from './pm/components/RiskMatrix';
import { GanttChart } from './pm/components/GanttChart';
import {
  ConfirmModal,
  TipsModal,
  StakeholderModal,
  TaskModal,
  MilestoneModal,
  RiskModal,
  IssueModal,
  DecisionModal,
  DeliverableModal,
  SnapshotsModal,
  SettingsModal,
} from './pm/components/Modals';

const storage = new StorageService();

export default function LocalPmFramework() {
  const [project, setProject] = useState<ProjectData>(createEmptyProject);
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [ganttScale, setGanttScale] = useState<'day' | 'week' | 'month'>('day');
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error'>('saved');
  const [toastMsg, setToastMsg] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Modals state
  const [activeTip, setActiveTip] = useState<TipEntry | null>(null);
  const [confirmState, setConfirmState] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onOk: () => void;
  }>({ isOpen: false, title: '', message: '', onOk: () => {} });

  const [editingSh, setEditingSh] = useState<{ isOpen: boolean; data: Stakeholder | null }>({ isOpen: false, data: null });
  const [editingTask, setEditingTask] = useState<{ isOpen: boolean; data: TaskItem | null }>({ isOpen: false, data: null });
  const [editingMs, setEditingMs] = useState<{ isOpen: boolean; data: Milestone | null }>({ isOpen: false, data: null });
  const [editingRisk, setEditingRisk] = useState<{ isOpen: boolean; data: RiskItem | null }>({ isOpen: false, data: null });
  const [editingIssue, setEditingIssue] = useState<{ isOpen: boolean; data: IssueItem | null }>({ isOpen: false, data: null });
  const [editingDecision, setEditingDecision] = useState<{ isOpen: boolean; data: DecisionItem | null }>({ isOpen: false, data: null });
  const [editingDeliverable, setEditingDeliverable] = useState<{ isOpen: boolean; data: DeliverableItem | null }>({ isOpen: false, data: null });

  const [snapshotsState, setSnapshotsState] = useState<{ isOpen: boolean; list: Snapshot[] }>({ isOpen: false, list: [] });
  const [settingsState, setSettingsState] = useState<{ isOpen: boolean; storageUsage: string }>({ isOpen: false, storageUsage: '' });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInitialMount = useRef(true);

  // Toast helper
  const showToast = useCallback((text: string, type: 'success' | 'info' | 'error' = 'info') => {
    setToastMsg({ text, type });
    setTimeout(() => {
      setToastMsg((prev) => (prev?.text === text ? null : prev));
    }, 3000);
  }, []);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('gov_pm_theme');
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('gov_pm_theme', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Initial Data Load (IndexedDB -> localStorage fallback -> Sample)
  useEffect(() => {
    async function loadData() {
      try {
        await storage.init();
        const saved = await storage.loadCurrentProject();
        if (saved && saved.schemaVersion) {
          setProject(normalizeProject(saved));
          showToast('前回のプロジェクトを復元しました', 'info');
          return;
        }

        // Check legacy localStorage
        const legacy = localStorage.getItem(LEGACY_LS_KEY);
        if (legacy) {
          try {
            const parsed = JSON.parse(legacy);
            const normalized = normalizeProject(parsed);
            setProject(normalized);
            await storage.saveCurrentProject(normalized);
            showToast('既存の保存データをIndexedDBへ移行しました', 'info');
            return;
          } catch {
            // fallback
          }
        }

        // Fallback to sample project
        const sample = createSampleProject();
        setProject(sample);
        await storage.saveCurrentProject(sample);
        showToast('実務サンプルプロジェクトを読み込みました', 'success');
      } catch (err) {
        console.error('Storage Init Error', err);
        setProject(createSampleProject());
      }
    }
    loadData();
  }, [showToast]);

  // Auto-Save Effect (IndexedDB, 400ms debounce)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    setSaveStatus('saving');
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    saveTimeoutRef.current = setTimeout(async () => {
      try {
        const updated = {
          ...project,
          metadata: {
            ...project.metadata,
            updatedAt: new Date().toISOString(),
          },
        };
        await storage.saveCurrentProject(updated);
        setSaveStatus('saved');
      } catch (err) {
        console.error('Save failed', err);
        setSaveStatus('error');
      }
    }, 400);

    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [project]);

  // Header Handlers
  const handleLoadSample = () => {
    setConfirmState({
      isOpen: true,
      title: 'サンプルプロジェクトの読み込み',
      message: '現在の入力内容が自治体実務サンプルデータに置き換わります。よろしいですか？',
      onOk: async () => {
        const sample = createSampleProject();
        setProject(sample);
        await storage.saveCurrentProject(sample);
        setConfirmState((prev) => ({ ...prev, isOpen: false }));
        showToast('サンプルデータを読み込みました', 'success');
      },
    });
  };

  const handleNewProject = () => {
    setConfirmState({
      isOpen: true,
      title: '新規プロジェクトの作成',
      message: '白紙の新規プロジェクトを開始します。現在の編集内容は上書きされます。よろしいですか？',
      onOk: async () => {
        const empty = createEmptyProject();
        setProject(empty);
        await storage.saveCurrentProject(empty);
        setActiveTab('charter');
        setConfirmState((prev) => ({ ...prev, isOpen: false }));
        showToast('新規プロジェクトを作成しました', 'info');
      },
    });
  };

  const handleExportJson = async () => {
    const updated = {
      ...project,
      metadata: {
        ...project.metadata,
        exportedAt: new Date().toISOString(),
      },
    };
    setProject(updated);

    const cleanName = (project.metadata.projectName || 'プロジェクト').replace(/[\\/:*?"<>| ]/g, '_');
    const ymd = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const filename = `${cleanName}_${ymd}.json`;

    const jsonStr = JSON.stringify(updated, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    await storage.saveSnapshot(updated, `書き出し保存世代: ${filename}`);
    showToast(`「${filename}」として書き出しました`, 'success');
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (!parsed || typeof parsed !== 'object' || !parsed.schemaVersion) {
          throw new Error('未対応または破損したプロジェクトファイルです (schemaVersionが見つかりません)。');
        }
        if (!parsed.metadata || !parsed.charter) {
          throw new Error('必須の構成要素 (metadata, charter) が不足しています。');
        }

        setConfirmState({
          isOpen: true,
          title: 'プロジェクトの上書き読込',
          message: `「${file.name}」を読み込みます。現在の編集内容は置き換えられます。よろしいですか？`,
          onOk: async () => {
            const normalized = normalizeProject(parsed);
            setProject(normalized);
            await storage.saveCurrentProject(normalized);
            await storage.saveSnapshot(normalized, `インポート復元世代: ${file.name}`);
            setActiveTab('overview');
            setConfirmState((prev) => ({ ...prev, isOpen: false }));
            showToast('プロジェクトファイルを正常に読み込みました', 'success');
          },
        });
      } catch (err: any) {
        setConfirmState({
          isOpen: true,
          title: 'ファイル読込エラー',
          message: err.message || 'JSONファイルの解析に失敗しました。',
          onOk: () => setConfirmState((prev) => ({ ...prev, isOpen: false })),
        });
      } finally {
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  const handleOpenSnapshots = async () => {
    const list = await storage.getSnapshots();
    setSnapshotsState({ isOpen: true, list });
  };

  const handleTakeManualSnapshot = async () => {
    const nowStr = new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    await storage.saveSnapshot(project, `手動保存 (${nowStr})`);
    const list = await storage.getSnapshots();
    setSnapshotsState({ isOpen: true, list });
    showToast('現在の状態をスナップショットとして保存しました', 'success');
  };

  const handleRestoreSnapshot = (snap: Snapshot) => {
    setConfirmState({
      isOpen: true,
      title: '保存世代の復元',
      message: `「${snap.memo}」(${new Date(snap.createdAt).toLocaleString('ja-JP')}) の状態を復元しますか？`,
      onOk: async () => {
        const normalized = normalizeProject(snap.projectData);
        setProject(normalized);
        await storage.saveCurrentProject(normalized);
        setSnapshotsState((prev) => ({ ...prev, isOpen: false }));
        setConfirmState((prev) => ({ ...prev, isOpen: false }));
        showToast('指定した世代のプロジェクトを復元しました', 'success');
      },
    });
  };

  const handleDeleteSnapshot = async (id: string) => {
    await storage.deleteSnapshot(id);
    const list = await storage.getSnapshots();
    setSnapshotsState({ isOpen: true, list });
    showToast('世代レコードを削除しました', 'info');
  };

  const handleOpenSettings = async () => {
    const usage = await storage.getStorageEstimate();
    setSettingsState({ isOpen: true, storageUsage: usage });
  };

  const handleClearAllData = () => {
    setConfirmState({
      isOpen: true,
      title: '全データの初期化',
      message: '端末内に保存されたプロジェクトとすべての世代履歴を完全に削除します。元に戻すことはできません。実行しますか？',
      onOk: async () => {
        await storage.clearAll();
        const empty = createEmptyProject();
        setProject(empty);
        setSettingsState((prev) => ({ ...prev, isOpen: false }));
        setConfirmState((prev) => ({ ...prev, isOpen: false }));
        showToast('端末のデータを初期化しました', 'info');
      },
    });
  };

  // Tips opener helper
  const openTip = (key: string) => {
    setActiveTip(PM_TIPS[key] || DEFAULT_TIP);
  };

  // Overview metrics calculation
  const totalTasks = project.tasks.length;
  const completedTasks = project.tasks.filter((t) => t.status === 'completed' || Number(t.progress) === 100).length;
  const pendingTasks = totalTasks - completedTasks;
  const avgProgress = totalTasks > 0 ? Math.round(project.tasks.reduce((sum, t) => sum + (Number(t.progress) || 0), 0) / totalTasks) : 0;

  // Due soon tasks (within 7 days)
  const now = new Date();
  const next7Days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const dueSoonTasks = project.tasks.filter((t) => {
    if (!t.endDate || t.status === 'completed') return false;
    const d = new Date(t.endDate);
    return d >= now && d <= next7Days;
  }).length;

  const openRisks = project.risks.filter((r) => r.status === 'open');
  const highRisks = openRisks.filter((r) => (Number(r.probability) || 1) * (Number(r.impact) || 1) >= 12);
  const openIssues = project.issues.filter((i) => i.status === 'open');

  const shGaps = project.stakeholders.filter((s) => s.currentEngagement !== s.desiredEngagement);
  const keyStakeholders = project.stakeholders.filter((s) => Number(s.power) >= 4).slice(0, 3);
  const recentDecisions = [...project.decisions].reverse().slice(0, 3);

  // Date range
  let dateRangeText = '未定';
  if (project.tasks.length > 0) {
    const starts = project.tasks.map((t) => t.startDate).filter(Boolean).sort();
    const ends = project.tasks.map((t) => t.endDate).filter(Boolean).sort();
    if (starts.length && ends.length) {
      dateRangeText = `${starts[0]} 〜 ${ends[ends.length - 1]}`;
    }
  }

  const combinedAttention = [
    ...openIssues.map((i) => ({ type: 'issue' as const, title: i.title, due: i.dueDate, sev: i.severity })),
    ...highRisks.map((r) => ({ type: 'risk' as const, title: r.title, due: r.dueDate, score: (r.probability || 1) * (r.impact || 1) })),
  ].slice(0, 4);

  return (
    <div className="bg-[#edebe8] dark:bg-[#161512] text-neutral-800 dark:text-[#dcd8d3] min-h-screen flex flex-col font-sans transition-colors duration-150">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
          <div
            className={`px-3.5 py-2 rounded shadow-md border text-xs flex items-center space-x-2 font-medium ${
              toastMsg.type === 'success'
                ? 'bg-neutral-900 dark:bg-[#262421] text-emerald-600 dark:text-[#629924] border-[#dad5cc] dark:border-[#3c3934]'
                : toastMsg.type === 'error'
                ? 'bg-neutral-900 dark:bg-[#262421] text-rose-600 dark:text-[#c33b32] border-[#dad5cc] dark:border-[#3c3934]'
                : 'bg-neutral-900 dark:bg-[#262421] text-neutral-100 dark:text-[#dcd8d3] border-[#dad5cc] dark:border-[#3c3934]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            <span>{toastMsg.text}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white dark:bg-[#262421] border-b border-[#dad5cc] dark:border-[#3c3934] sticky top-0 z-30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left: Identity & Status */}
            <div className="flex items-center space-x-3 overflow-hidden">
              <Link
                to="/"
                className="flex-shrink-0 w-8 h-8 rounded bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#3d3a36] border border-[#cbc6bc] dark:border-[#3c3934] flex items-center justify-center text-neutral-700 dark:text-[#dcd8d3] transition cursor-pointer"
                title="ツール一覧に戻る"
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <div className="flex-shrink-0 w-8 h-8 rounded bg-[#e3e0d8] dark:bg-[#302e2b] border border-[#cbc6bc] dark:border-[#3c3934] flex items-center justify-center text-neutral-700 dark:text-[#dcd8d3]">
                <Building2 className="w-4 h-4 text-[#3692e7]" />
              </div>
              <div className="truncate">
                <div className="flex items-center space-x-2">
                  <h1 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white truncate">
                    {project.metadata.projectName || '未設定のプロジェクト'}
                  </h1>
                  {project.metadata.projectCode && (
                    <span className="bg-[#e4e0d7] dark:bg-[#302e2b] text-neutral-700 dark:text-[#8c8880] text-[11px] px-1.5 py-0.2 rounded font-mono border border-[#d2ccbf] dark:border-[#3c3934] hidden sm:inline-block">
                      {project.metadata.projectCode}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] flex items-center space-x-1.5 truncate">
                  <span>
                    {[project.metadata.organization, project.metadata.department, project.metadata.projectManager ? `PM:${project.metadata.projectManager}` : '']
                      .filter(Boolean)
                      .join(' / ') || '自治体実務支援 / 自律構造化マネージャー'}
                  </span>
                  <span className="opacity-40">|</span>
                  <span
                    className={`font-medium flex items-center ${
                      saveStatus === 'saved'
                        ? 'text-emerald-600 dark:text-[#629924]'
                        : saveStatus === 'saving'
                        ? 'text-amber-600 dark:text-[#bf811d]'
                        : 'text-rose-600 dark:text-[#c33b32]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full inline-block mr-1 ${
                        saveStatus === 'saved'
                          ? 'bg-emerald-600 dark:bg-[#629924]'
                          : saveStatus === 'saving'
                          ? 'bg-amber-600 dark:bg-[#bf811d] animate-pulse'
                          : 'bg-rose-600 dark:bg-[#c33b32]'
                      }`}
                    />
                    {saveStatus === 'saved' ? '保存済' : saveStatus === 'saving' ? '保存中...' : '保存失敗'}
                  </span>
                </p>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <button
                onClick={handleLoadSample}
                className="px-2.5 py-1.5 text-xs font-medium bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#3b3834] text-neutral-800 dark:text-[#dcd8d3] rounded border border-[#d0cac0] dark:border-[#3c3934] flex items-center space-x-1 transition cursor-pointer"
                title="自治体業務の実務サンプルを読み込みます"
              >
                <RefreshCw className="w-3.5 h-3.5 text-neutral-600 dark:text-[#8c8880]" />
                <span className="hidden md:inline">サンプル読込</span>
              </button>

              <button
                onClick={handleNewProject}
                className="px-2.5 py-1.5 text-xs font-medium bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#3b3834] text-neutral-800 dark:text-[#dcd8d3] rounded border border-[#d0cac0] dark:border-[#3c3934] flex items-center space-x-1 transition cursor-pointer"
                title="新規に白紙のプロジェクトを作成"
              >
                <Plus className="w-3.5 h-3.5 text-neutral-600 dark:text-[#8c8880]" />
                <span className="hidden md:inline">新規</span>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-2.5 py-1.5 text-xs font-medium bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#3b3834] text-neutral-800 dark:text-[#dcd8d3] rounded border border-[#d0cac0] dark:border-[#3c3934] flex items-center space-x-1 transition cursor-pointer"
                title="JSONファイルを読み込み"
              >
                <Upload className="w-3.5 h-3.5 text-neutral-600 dark:text-[#8c8880]" />
                <span className="hidden md:inline">開く</span>
              </button>
              <input ref={fileInputRef} type="file" accept=".json,application/json" onChange={handleImportJson} className="hidden" />

              <button
                onClick={handleExportJson}
                className="px-2.5 py-1.5 text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] rounded shadow-sm flex items-center space-x-1 transition cursor-pointer"
                title="JSONとして保存・書き出し"
              >
                <Download className="w-3.5 h-3.5" />
                <span>保存</span>
              </button>

              <button
                onClick={handleOpenSnapshots}
                className="px-2 py-1.5 text-xs font-medium bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#3b3834] text-neutral-800 dark:text-[#dcd8d3] rounded border border-[#d0cac0] dark:border-[#3c3934] flex items-center space-x-1 transition cursor-pointer"
                title="ブラウザ内の保存世代・スナップショットを管理"
              >
                <Layers className="w-3.5 h-3.5 text-neutral-600 dark:text-[#8c8880]" />
                <span className="hidden lg:inline">世代</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-1.5 text-neutral-700 dark:text-[#8c8880] hover:text-neutral-900 dark:hover:text-white bg-[#f0ede6] dark:bg-[#302e2b] hover:bg-[#e4e0d7] dark:hover:bg-[#3b3834] rounded border border-[#d0cac0] dark:border-[#3c3934] transition cursor-pointer"
                title="ダーク / ライトモードの切り替え"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
              </button>

              <button
                onClick={handleOpenSettings}
                className="p-1.5 text-neutral-700 dark:text-[#8c8880] hover:text-neutral-900 dark:hover:text-white bg-[#f0ede6] dark:bg-[#302e2b] hover:bg-[#e4e0d7] dark:hover:bg-[#3b3834] rounded border border-[#d0cac0] dark:border-[#3c3934] transition cursor-pointer"
                title="設定・プライバシー情報"
              >
                <Settings className="w-4 h-4" />
              </button>

              <button
                onClick={() => window.print()}
                className="p-1.5 text-neutral-700 dark:text-[#8c8880] hover:text-neutral-900 dark:hover:text-white bg-[#f0ede6] dark:bg-[#302e2b] hover:bg-[#e4e0d7] dark:hover:bg-[#3b3834] rounded border border-[#d0cac0] dark:border-[#3c3934] transition cursor-pointer"
                title="印刷"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#f6f4f0] dark:bg-[#201e1b] border-t border-[#dad5cc] dark:border-[#3c3934] px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-1.5 overflow-x-auto py-1.5 text-xs font-medium">
            {[
              { id: 'overview' as const, label: '概要', icon: Building2 },
              { id: 'charter' as const, label: '事業目的・計画 (憲章)', icon: FileText },
              { id: 'stakeholders' as const, label: '関係者 (利害調整)', icon: Users },
              { id: 'tasks' as const, label: '工程表 (WBS)', icon: Calendar },
              { id: 'risks' as const, label: '懸念・課題', icon: AlertTriangle },
              { id: 'decisions' as const, label: '決定事項録', icon: CheckCircle2 },
              { id: 'deliverables' as const, label: '成果物', icon: FileCheck2 },
              { id: 'closure' as const, label: '完了・引継', icon: Clock },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2.5 py-1.5 rounded whitespace-nowrap flex items-center space-x-1.5 transition cursor-pointer ${
                    active
                      ? 'text-neutral-900 dark:text-white bg-white dark:bg-[#262421] border border-[#cfc9be] dark:border-[#3c3934] shadow-xs font-semibold'
                      : 'text-neutral-600 dark:text-[#8c8880] hover:text-neutral-900 dark:hover:text-white hover:bg-[#ece8e1] dark:hover:bg-[#302e2b]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* ===================== TAB 1: OVERVIEW ===================== */}
        {activeTab === 'overview' && (
          <section className="space-y-6">
            {/* Top Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="bg-white dark:bg-[#262421] p-4 rounded border border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium text-neutral-500 dark:text-[#8c8880] uppercase tracking-wider">全体進捗率</p>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-0.5">{avgProgress}%</h3>
                  <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-0.5">タスク加重平均</p>
                </div>
                <div className="w-11 h-11 rounded border-2 border-neutral-300 dark:border-[#3c3934] flex items-center justify-center font-mono font-semibold text-xs text-neutral-700 dark:text-[#dcd8d3]">
                  {avgProgress}%
                </div>
              </div>

              <div className="bg-white dark:bg-[#262421] p-4 rounded border border-[#dad5cc] dark:border-[#3c3934]">
                <p className="text-[11px] font-medium text-neutral-500 dark:text-[#8c8880] uppercase tracking-wider">タスク残件</p>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{pendingTasks}</h3>
                  <span className="text-xs text-neutral-500 dark:text-[#8c8880]">/ {totalTasks} 件</span>
                </div>
                <p className="text-[11px] text-amber-700 dark:text-[#bf811d] mt-0.5 font-medium">
                  直近7日以内の期限: {dueSoonTasks}件
                </p>
              </div>

              <div className="bg-white dark:bg-[#262421] p-4 rounded border border-[#dad5cc] dark:border-[#3c3934]">
                <p className="text-[11px] font-medium text-neutral-500 dark:text-[#8c8880] uppercase tracking-wider">懸念・発生課題</p>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <h3 className="text-2xl font-bold text-amber-700 dark:text-[#bf811d]">{openRisks.length}</h3>
                  <span className="text-xs text-neutral-500 dark:text-[#8c8880]">
                    懸念 / <span className="text-rose-700 dark:text-[#c33b32] font-semibold">{openIssues.length}</span> 課題
                  </span>
                </div>
                <p className="text-[11px] text-rose-700 dark:text-[#c33b32] mt-0.5 font-medium">
                  高リスク: {highRisks.length}件
                </p>
              </div>

              <div className="bg-white dark:bg-[#262421] p-4 rounded border border-[#dad5cc] dark:border-[#3c3934]">
                <p className="text-[11px] font-medium text-neutral-500 dark:text-[#8c8880] uppercase tracking-wider">関係者・決定事項</p>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{project.stakeholders.length}</h3>
                  <span className="text-xs text-neutral-500 dark:text-[#8c8880]">
                    名 / <span className="font-semibold text-neutral-800 dark:text-[#dcd8d3]">{project.decisions.length}</span> 決定
                  </span>
                </div>
                <p className="text-[11px] text-neutral-600 dark:text-[#8c8880] mt-0.5">
                  要対応ギャップ: {shGaps.length}名
                </p>
              </div>
            </div>

            {/* Summary & Milestones */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2 bg-white dark:bg-[#262421] rounded border border-[#dad5cc] dark:border-[#3c3934] p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#ece8df] dark:border-[#3c3934]">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-neutral-600 dark:bg-[#3692e7]" />
                      <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">
                        {project.metadata.projectName || '事業名未定'}
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveTab('charter')}
                      className="text-xs text-neutral-700 dark:text-[#3692e7] hover:underline font-medium cursor-pointer"
                    >
                      計画書を編集
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 py-2.5 bg-[#f6f4f0] dark:bg-[#1e1d1a] rounded border border-[#e5e1d7] dark:border-[#3c3934] p-3 text-xs">
                    <div>
                      <span className="text-neutral-500 dark:text-[#8c8880] text-[11px] block">主幹組織 / 課</span>
                      <span className="font-medium text-neutral-800 dark:text-[#dcd8d3] truncate block">
                        {project.metadata.department || '未設定'}
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500 dark:text-[#8c8880] text-[11px] block">事業担当者 (PM)</span>
                      <span className="font-medium text-neutral-800 dark:text-[#dcd8d3] truncate block">
                        {project.metadata.projectManager || '未設定'}
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500 dark:text-[#8c8880] text-[11px] block">計画期間</span>
                      <span className="font-mono text-neutral-800 dark:text-[#dcd8d3] truncate block">{dateRangeText}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 dark:text-[#8c8880] text-[11px] block">概算予算</span>
                      <span className="font-medium text-neutral-800 dark:text-[#dcd8d3] truncate block">
                        {project.charter.budget || '未定'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-neutral-700 dark:text-[#8c8880] mb-1.5">事業の目的 (Why)</h4>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 line-clamp-3 bg-[#fdfdfc] dark:bg-[#1c1b18] p-3 rounded border border-[#e8e4dc] dark:border-[#3c3934] leading-relaxed">
                      {project.charter.purpose || '(事業目的が未入力です。「事業目的・計画」タブで背景と目的を入力してください)'}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ece8df] dark:border-[#3c3934] flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 dark:text-[#8c8880]">
                  <span>最終更新: {new Date(project.metadata.updatedAt).toLocaleDateString('ja-JP')}</span>
                  <button onClick={() => openTip('projectOverview')} className="hover:text-neutral-900 dark:hover:text-[#dcd8d3] underline cursor-pointer">
                    実務活用指針
                  </button>
                </div>
              </div>

              {/* Milestones Preview */}
              <div className="bg-white dark:bg-[#262421] rounded border border-[#dad5cc] dark:border-[#3c3934] p-5 flex flex-col">
                <div className="flex items-center justify-between pb-3 border-b border-[#ece8df] dark:border-[#3c3934] mb-3">
                  <h3 className="font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider flex items-center space-x-1.5">
                    <span>重要マイルストーン (節目)</span>
                  </h3>
                  <button onClick={() => setActiveTab('tasks')} className="text-xs text-neutral-700 dark:text-[#3692e7] hover:underline cursor-pointer">
                    工程表
                  </button>
                </div>
                <div className="space-y-2 flex-1 overflow-y-auto max-h-56 pr-1 text-xs">
                  {project.milestones.length === 0 ? (
                    <p className="text-neutral-400 dark:text-[#8c8880] py-3 text-center">マイルストーン未登録</p>
                  ) : (
                    project.milestones.map((ms) => (
                      <div
                        key={ms.id}
                        className="flex items-center justify-between p-2 rounded bg-[#f6f4f0] dark:bg-[#1e1d1a] border border-[#dad5cc] dark:border-[#3c3934]"
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <span className="w-2 h-2 bg-amber-600 dark:bg-[#bf811d] rotate-45 flex-shrink-0" />
                          <span className="font-medium text-neutral-800 dark:text-[#dcd8d3] truncate">{ms.name}</span>
                        </div>
                        <div className="text-right flex-shrink-0 ml-2">
                          <span className="font-mono text-neutral-500 dark:text-[#8c8880] block text-[10px]">{ms.date}</span>
                          <span
                            className={`px-1.5 py-0.2 text-[9px] rounded font-medium ${
                              ms.status === 'achieved'
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                            }`}
                          >
                            {ms.status === 'achieved' ? '達成済' : '未達成'}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Attention Items: Risks/Issues, Decisions, Key Stakeholders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Critical Issues / Risks */}
              <div className="bg-white dark:bg-[#262421] rounded border border-[#dad5cc] dark:border-[#3c3934] p-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#ece8df] dark:border-[#3c3934] mb-3">
                  <h4 className="text-xs font-semibold text-neutral-800 dark:text-[#dcd8d3] uppercase">対処すべき懸念・課題</h4>
                  <button onClick={() => setActiveTab('risks')} className="text-xs text-neutral-600 dark:text-[#3692e7] hover:underline cursor-pointer">
                    一覧
                  </button>
                </div>
                <div className="space-y-2 text-xs">
                  {combinedAttention.length === 0 ? (
                    <p className="text-neutral-400 dark:text-[#8c8880] py-2 text-center">特段の緊急懸念・課題はありません</p>
                  ) : (
                    combinedAttention.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded border ${
                          item.type === 'issue'
                            ? 'border-rose-300 bg-rose-50/50 dark:border-rose-900/60 dark:bg-rose-950/20'
                            : 'border-amber-300 bg-amber-50/50 dark:border-amber-900/60 dark:bg-amber-950/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-medium truncate ${item.type === 'issue' ? 'text-rose-900 dark:text-rose-300' : 'text-amber-900 dark:text-amber-300'}`}>
                            {item.title}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-500">{item.due || '期日未定'}</span>
                        </div>
                        <span className="text-[10px] text-neutral-500 dark:text-[#8c8880]">
                          {item.type === 'issue' ? `課題 (深刻度: ${item.sev})` : `高リスク (スコア: ${item.score})`}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Recent Decisions */}
              <div className="bg-white dark:bg-[#262421] rounded border border-[#dad5cc] dark:border-[#3c3934] p-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#ece8df] dark:border-[#3c3934] mb-3">
                  <h4 className="text-xs font-semibold text-neutral-800 dark:text-[#dcd8d3] uppercase">直近の方針決定録</h4>
                  <button onClick={() => setActiveTab('decisions')} className="text-xs text-neutral-600 dark:text-[#3692e7] hover:underline cursor-pointer">
                    一覧
                  </button>
                </div>
                <div className="space-y-2 text-xs">
                  {recentDecisions.length === 0 ? (
                    <p className="text-neutral-400 dark:text-[#8c8880] py-2 text-center">決定事項の記録はありません</p>
                  ) : (
                    recentDecisions.map((d) => (
                      <div key={d.id} className="p-2 rounded border border-[#dad5cc] dark:border-[#3c3934] bg-[#f6f4f0] dark:bg-[#1e1d1a]">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-medium text-neutral-900 dark:text-white truncate">{d.topic}</span>
                          <span className="font-mono text-neutral-400 text-[10px]">{d.date}</span>
                        </div>
                        <p className="text-[10px] text-neutral-600 dark:text-[#8c8880] line-clamp-2 mt-0.5">{d.decision}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Stakeholder Attention */}
              <div className="bg-white dark:bg-[#262421] rounded border border-[#dad5cc] dark:border-[#3c3934] p-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#ece8df] dark:border-[#3c3934] mb-3">
                  <h4 className="text-xs font-semibold text-neutral-800 dark:text-[#dcd8d3] uppercase">重点調整対象者 (High Power)</h4>
                  <button onClick={() => setActiveTab('stakeholders')} className="text-xs text-neutral-600 dark:text-[#3692e7] hover:underline cursor-pointer">
                    分析表
                  </button>
                </div>
                <div className="space-y-2 text-xs">
                  {keyStakeholders.length === 0 ? (
                    <p className="text-neutral-400 dark:text-[#8c8880] py-2 text-center">影響力上位の関係者はいません</p>
                  ) : (
                    keyStakeholders.map((s) => (
                      <div key={s.id} className="p-2 rounded border border-[#dad5cc] dark:border-[#3c3934] bg-[#f6f4f0] dark:bg-[#1e1d1a] flex items-center justify-between">
                        <div>
                          <div className="font-medium text-neutral-900 dark:text-white">{s.name}</div>
                          <div className="text-[10px] text-neutral-500 dark:text-[#8c8880]">{s.organization}</div>
                        </div>
                        <div className="text-right">
                          <span className="px-1.5 py-0.5 text-[9px] rounded font-mono font-semibold bg-[#e4e0d7] dark:bg-[#302e2b] text-neutral-800 dark:text-[#dcd8d3] border border-[#d2ccbf] dark:border-[#3c3934]">
                            P:{s.power} / I:{s.interest}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===================== TAB 2: PROJECT CHARTER ===================== */}
        {activeTab === 'charter' && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-[#262421] border border-[#dad5cc] dark:border-[#3c3934] rounded p-4 flex items-start justify-between">
              <div className="space-y-1">
                <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">事業目的・計画書 (プロジェクト憲章)</h2>
                <p className="text-xs text-neutral-600 dark:text-[#8c8880] max-w-3xl leading-relaxed">
                  「なぜこの事業を行うのか」「何を目指し、何を範囲外（やらないこと）とするか」を整理します。行政内部の引き継ぎや他部署説明で誤解を生じさせない論理的合意形成の土台となります。
                </p>
              </div>
              <button
                onClick={() => openTip('projectCharter')}
                className="px-2.5 py-1.5 bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#383530] text-neutral-800 dark:text-[#dcd8d3] text-xs rounded border border-[#d0cac0] dark:border-[#3c3934] flex-shrink-0 transition cursor-pointer"
              >
                解説 Tips
              </button>
            </div>

            {/* Basic Info Box */}
            <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-[#8c8880] border-b border-[#ece8df] dark:border-[#3c3934] pb-2 flex items-center justify-between">
                <span>基本情報・主管部署</span>
                <span className="text-[11px] font-normal text-neutral-500 dark:text-[#8c8880]">起案・伺い文書への転記対応</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
                    事業・プロジェクト名 <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={project.metadata.projectName}
                    onChange={(e) => setProject({ ...project, metadata: { ...project.metadata, projectName: e.target.value } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                    placeholder="例: 庁舎窓口案内サイン刷新事業"
                  />
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">事業コード / 予算科目</label>
                  <input
                    type="text"
                    value={project.metadata.projectCode}
                    onChange={(e) => setProject({ ...project, metadata: { ...project.metadata, projectCode: e.target.value } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                    placeholder="例: R08-INFO-004"
                  />
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">所管組織名</label>
                  <input
                    type="text"
                    value={project.metadata.organization}
                    onChange={(e) => setProject({ ...project, metadata: { ...project.metadata, organization: e.target.value } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                    placeholder="例: ○○市役所"
                  />
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">主幹部課 / 係</label>
                  <input
                    type="text"
                    value={project.metadata.department}
                    onChange={(e) => setProject({ ...project, metadata: { ...project.metadata, department: e.target.value } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                    placeholder="例: 総務部 庁舎管理課 施設係"
                  />
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">事業主担当者 (PM)</label>
                  <input
                    type="text"
                    value={project.metadata.projectManager}
                    onChange={(e) => setProject({ ...project, metadata: { ...project.metadata, projectManager: e.target.value } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                    placeholder="例: 主査 山田 太郎"
                  />
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">概算事業費 / 配当予算</label>
                  <input
                    type="text"
                    value={project.charter.budget}
                    onChange={(e) => setProject({ ...project, charter: { ...project.charter, budget: e.target.value } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                    placeholder="例: 4,800,000円"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">担当者の専決権限範囲</label>
                  <input
                    type="text"
                    value={project.charter.authority}
                    onChange={(e) => setProject({ ...project, charter: { ...project.charter, authority: e.target.value } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                    placeholder="例: 仕様策定・業者連絡は担当者決裁、設計承認・契約変更は課長決裁"
                  />
                </div>
              </div>
            </div>

            {/* 6 Structured Charter Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 1. 背景 */}
              <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-semibold text-neutral-900 dark:text-white text-xs">
                      1. 事業の背景 (なぜ今着手するのか)
                    </label>
                    <button onClick={() => openTip('background')} className="text-[11px] text-neutral-600 dark:text-[#3692e7] hover:underline cursor-pointer">
                      Tips
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={project.charter.background}
                    onChange={(e) => setProject({ ...project, charter: { ...project.charter, background: e.target.value } })}
                    className="w-full p-2.5 text-xs bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例: 庁舎建設から30年が経過し、窓口案内板の老朽化と視認性低下が顕著。外国人来庁者や要配慮者の増加に伴い、ユニバーサルデザイン刷新要望が市民アンケートで多数寄せられているため。"
                  />
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-2">妥当性根拠（ビジネスケース）に相当</p>
              </div>

              {/* 2. 目的 */}
              <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-semibold text-neutral-900 dark:text-white text-xs">
                      2. 事業の目的 (最終的にどういう状態にしたいか)
                    </label>
                    <button onClick={() => openTip('purpose')} className="text-[11px] text-neutral-600 dark:text-[#3692e7] hover:underline cursor-pointer">
                      Tips
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={project.charter.purpose}
                    onChange={(e) => setProject({ ...project, charter: { ...project.charter, purpose: e.target.value } })}
                    className="w-full p-2.5 text-xs bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例: 初めて来庁した市民や要支援者が迷わずに目的の窓口へ到達できる快適・安心な案内サイン体系を構築し、総合案内の問い合わせ滞留時間を半減させる。"
                  />
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-2">事業が達成すべき本質的価値（Objectives）</p>
              </div>

              {/* 3. 今回やること (Scope) */}
              <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-semibold text-neutral-900 dark:text-white text-xs">
                      3. 今回実施すること (スコープ対象)
                    </label>
                    <button onClick={() => openTip('scope')} className="text-[11px] text-neutral-600 dark:text-[#3692e7] hover:underline cursor-pointer">
                      Tips
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={project.charter.scope}
                    onChange={(e) => setProject({ ...project, charter: { ...project.charter, scope: e.target.value } })}
                    className="w-full p-2.5 text-xs bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例:&#10;・本庁舎1階〜3階の天井吊り下げ型案内板およびフロアマップの撤去・新設&#10;・4言語（日・英・中・韓）対応ピクトグラム導入&#10;・デジタルサイネージ1台の設置テスト"
                  />
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-2">事業責任を持って完遂する境界内</p>
              </div>

              {/* 4. 今回やらないこと (Out of Scope) */}
              <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-semibold text-rose-800 dark:text-rose-400 text-xs">
                      4. 今回「やらない」こと (スコープ境界線の明確化)
                    </label>
                    <button onClick={() => openTip('outOfScope')} className="text-[11px] text-neutral-600 dark:text-[#3692e7] hover:underline cursor-pointer">
                      Tips
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={project.charter.outOfScope}
                    onChange={(e) => setProject({ ...project, charter: { ...project.charter, outOfScope: e.target.value } })}
                    className="w-full p-2.5 text-xs bg-[#fffaf9] dark:bg-[#1e1d1a] border border-rose-300 dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例:&#10;・別館・出張所の案内サイン改修（次年度以降の別事業）&#10;・窓口カウンター内部の什器・端末改修&#10;・庁舎外周の道路誘導看板の更新"
                  />
                </div>
                <p className="text-[11px] text-rose-700 dark:text-rose-400 mt-2 font-medium">後からの「やってもらえると思った」を防ぐ最重要項目</p>
              </div>

              {/* 5. 成功基準 */}
              <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-semibold text-neutral-900 dark:text-white text-xs">
                      5. 成功基準 (客観的評価指標)
                    </label>
                    <button onClick={() => openTip('successCriteria')} className="text-[11px] text-neutral-600 dark:text-[#3692e7] hover:underline cursor-pointer">
                      Tips
                    </button>
                  </div>
                  <textarea
                    rows={3}
                    value={project.charter.successCriteria}
                    onChange={(e) => setProject({ ...project, charter: { ...project.charter, successCriteria: e.target.value } })}
                    className="w-full p-2.5 text-xs bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例:&#10;1. 令和8年12月25日までに施工完了・供用開始。&#10;2. 当初配当予算枠（480万円）以内に収めること。&#10;3. 来庁者視認性アンケートで満足度85%以上。"
                  />
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-2">事業終了時の検収判定条件</p>
              </div>

              {/* 6. 制約事項 & 前提条件 */}
              <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-semibold text-neutral-900 dark:text-white text-xs">
                      6. 制約事項・前提条件 (予算・開庁時間・法令)
                    </label>
                    <button onClick={() => openTip('constraints')} className="text-[11px] text-neutral-600 dark:text-[#3692e7] hover:underline cursor-pointer">
                      Tips
                    </button>
                  </div>
                  <textarea
                    rows={3}
                    value={project.charter.constraints}
                    onChange={(e) => setProject({ ...project, charter: { ...project.charter, constraints: e.target.value } })}
                    className="w-full p-2.5 text-xs bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例:&#10;【制約】開庁日（平日昼間）の騒音・振動作業は不可。工事は閉庁日（土日夜間）に限定。&#10;【前提】既存の天井ボード耐荷重が新設看板重量に耐えうること。"
                  />
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-2">動かせない外生条件（Constraints）と仮定条件</p>
              </div>
            </div>
          </section>
        )}

        {/* ===================== TAB 3: STAKEHOLDERS ===================== */}
        {activeTab === 'stakeholders' && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-[#262421] border border-[#dad5cc] dark:border-[#3c3934] rounded p-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">関係者・ステークホルダー分析 (Power / Interest Grid)</h2>
                <p className="text-xs text-neutral-600 dark:text-[#8c8880] mt-0.5">
                  各関係者の影響力と関心度を4象限で可視化し、合意形成（事前協議・根回し）の優先度を整理します。
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => openTip('stakeholders')}
                  className="px-2.5 py-1.5 bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#383530] text-neutral-800 dark:text-[#dcd8d3] text-xs rounded border border-[#d0cac0] dark:border-[#3c3934] transition cursor-pointer"
                >
                  解説 Tips
                </button>
                <button
                  onClick={() => setEditingSh({ isOpen: true, data: null })}
                  className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] text-xs font-medium rounded shadow-xs flex items-center space-x-1 transition cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>関係者追加</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* SVG 4-Quadrant Matrix */}
              <div className="lg:col-span-6 bg-white dark:bg-[#262421] p-4 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-[#8c8880]">
                    4象限マトリックス (影響力 × 関心度)
                  </h3>
                  <span className="text-[11px] text-neutral-500 dark:text-[#8c8880]">プロット選択で編集</span>
                </div>

                <StakeholderMatrix
                  stakeholders={project.stakeholders}
                  isDark={theme === 'dark'}
                  onSelectStakeholder={(sh) => setEditingSh({ isOpen: true, data: sh })}
                />

                <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500 dark:text-[#8c8880]">
                  <span>● 支持</span>
                  <span>▲ 中立</span>
                  <span>■ 慎重/配慮</span>
                  <span className="text-rose-600 dark:text-rose-400 font-medium">点線枠: 関与度ギャップ</span>
                </div>
              </div>

              {/* Stakeholders Register Table */}
              <div className="lg:col-span-6 bg-white dark:bg-[#262421] p-4 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#ece8df] dark:border-[#3c3934] mb-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-[#8c8880]">
                      関係者一覧 (Stakeholder Register)
                    </h3>
                    <span className="text-xs bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] px-2 py-0.2 rounded font-mono border border-[#d2ccbf] dark:border-[#3c3934]">
                      {project.stakeholders.length}名
                    </span>
                  </div>

                  <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#f6f4f0] dark:bg-[#1e1d1a] text-neutral-600 dark:text-[#8c8880] font-medium border-b border-[#dad5cc] dark:border-[#3c3934]">
                        <tr>
                          <th className="p-2">氏名 / 所属</th>
                          <th className="p-2">役割</th>
                          <th className="p-2">影響/関心</th>
                          <th className="p-2">態度 / ギャップ</th>
                          <th className="p-2 text-right">操作</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8df] dark:divide-[#3c3934]">
                        {project.stakeholders.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="text-center py-6 text-neutral-400 dark:text-[#8c8880]">
                              関係者が未登録です。「+関係者追加」から登録してください。
                            </td>
                          </tr>
                        ) : (
                          project.stakeholders.map((sh) => {
                            const isGap = sh.currentEngagement !== sh.desiredEngagement;
                            return (
                              <tr
                                key={sh.id}
                                onClick={() => setEditingSh({ isOpen: true, data: sh })}
                                className="hover:bg-[#f6f4f0] dark:hover:bg-[#302e2b] transition cursor-pointer"
                              >
                                <td className="p-2">
                                  <div className="font-semibold text-neutral-900 dark:text-white">{sh.name}</div>
                                  <div className="text-[10px] text-neutral-500 dark:text-[#8c8880]">{sh.organization}</div>
                                </td>
                                <td className="p-2 text-neutral-600 dark:text-neutral-300">{sh.role || '-'}</td>
                                <td className="p-2 font-mono">
                                  <span className="font-semibold text-neutral-800 dark:text-[#3692e7]">P:{sh.power}</span> /{' '}
                                  <span className="font-semibold text-neutral-600 dark:text-[#8c8880]">I:{sh.interest}</span>
                                </td>
                                <td className="p-2">
                                  <div className="flex items-center space-x-1.5">
                                    <span
                                      className={`px-1.5 py-0.5 rounded font-medium border text-[10px] ${
                                        sh.attitude === 'supportive'
                                          ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-900'
                                          : sh.attitude === 'cautious'
                                          ? 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-900'
                                          : sh.attitude === 'resistant'
                                          ? 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950 border-rose-200 dark:border-rose-900'
                                          : 'text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-[#302e2b] border-neutral-300 dark:border-[#3c3934]'
                                      }`}
                                    >
                                      {sh.attitude === 'supportive'
                                        ? '支持'
                                        : sh.attitude === 'cautious'
                                        ? '慎重'
                                        : sh.attitude === 'resistant'
                                        ? '反対'
                                        : '中立'}
                                    </span>
                                    {isGap && (
                                      <span className="text-rose-600 dark:text-rose-400 font-medium text-[10px] border border-rose-300 dark:border-rose-900 px-1 rounded">
                                        要対応
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="p-2 text-right space-x-1" onClick={(e) => e.stopPropagation()}>
                                  <button
                                    onClick={() => setEditingSh({ isOpen: true, data: sh })}
                                    className="p-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-xs cursor-pointer"
                                  >
                                    編集
                                  </button>
                                  <button
                                    onClick={() => {
                                      setConfirmState({
                                        isOpen: true,
                                        title: '関係者の削除',
                                        message: `「${sh.name}」を削除しますか？`,
                                        onOk: () => {
                                          setProject((prev) => ({
                                            ...prev,
                                            stakeholders: prev.stakeholders.filter((x) => x.id !== sh.id),
                                          }));
                                          setConfirmState((prev) => ({ ...prev, isOpen: false }));
                                        },
                                      });
                                    }}
                                    className="p-1 text-neutral-400 hover:text-rose-600 text-xs cursor-pointer"
                                  >
                                    削除
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ece8df] dark:border-[#3c3934] bg-[#fdfaf3] dark:bg-[#201d17] p-2.5 rounded border border-[#ebd8ad] dark:border-[#423927] text-xs text-neutral-700 dark:text-neutral-300">
                  <span className="font-bold">行政実務の要諦:</span>
                  <span>「態度（支持・中立・慎重）」は個人の主観評価ではなく、現時点で事業方針に公式合意が得られているかのステータスとして扱います。</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===================== TAB 4: TASKS & GANTT ===================== */}
        {activeTab === 'tasks' && (
          <section className="space-y-6">
            {/* Toolbar */}
            <div className="bg-white dark:bg-[#262421] p-4 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">工程表・作業管理 (WBS & Gantt Chart)</h2>
                <p className="text-xs text-neutral-600 dark:text-[#8c8880] mt-0.5">タスクとマイルストーンを登録すると、自動的に工程表が生成されます。</p>
              </div>

              <div className="flex items-center space-x-2">
                <div className="inline-flex rounded border border-[#d0cac0] dark:border-[#3c3934] overflow-hidden text-xs">
                  {(['day', 'week', 'month'] as const).map((sc) => (
                    <button
                      key={sc}
                      onClick={() => setGanttScale(sc)}
                      className={`px-2.5 py-1.5 font-medium cursor-pointer transition ${
                        ganttScale === sc
                          ? 'bg-neutral-900 text-white dark:bg-[#3692e7]'
                          : 'bg-white dark:bg-[#262421] text-neutral-700 dark:text-[#dcd8d3] hover:bg-[#f0ede6] dark:hover:bg-[#302e2b]'
                      }`}
                    >
                      {sc === 'day' ? '日表示' : sc === 'week' ? '週表示' : '月表示'}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => openTip('ganttChart')}
                  className="px-2.5 py-1.5 bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#383530] text-neutral-800 dark:text-[#dcd8d3] text-xs rounded border border-[#d0cac0] dark:border-[#3c3934] transition cursor-pointer"
                >
                  解説 Tips
                </button>
                <button
                  onClick={() => setEditingTask({ isOpen: true, data: null })}
                  className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] text-xs font-medium rounded shadow-xs flex items-center space-x-1 transition cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>タスク追加</span>
                </button>
                <button
                  onClick={() => setEditingMs({ isOpen: true, data: null })}
                  className="px-3 py-1.5 bg-amber-700 hover:bg-amber-600 text-white dark:bg-[#bf811d] dark:hover:opacity-90 text-xs font-medium rounded shadow-xs flex items-center space-x-1 transition cursor-pointer"
                >
                  <span>◆</span>
                  <span>節目追加</span>
                </button>
              </div>
            </div>

            {/* Gantt Chart Component */}
            <div className="bg-white dark:bg-[#262421] rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden">
              <div className="p-3 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between text-xs">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-neutral-800 dark:bg-[#3692e7] rounded-xs mr-1.5" />通常タスク
                  </span>
                  <span className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-amber-600 dark:bg-[#bf811d] rotate-45 mr-1.5" />マイルストーン
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mr-1.5" />本日線
                  </span>
                </div>
                <div className="font-mono text-neutral-500 dark:text-[#8c8880]">{dateRangeText}</div>
              </div>

              <div className="overflow-x-auto" style={{ minHeight: '380px' }}>
                <GanttChart
                  tasks={project.tasks}
                  milestones={project.milestones}
                  scale={ganttScale}
                  isDark={theme === 'dark'}
                  onSelectTask={(t) => setEditingTask({ isOpen: true, data: t })}
                  onSelectMilestone={(ms) => setEditingMs({ isOpen: true, data: ms })}
                />
              </div>
            </div>

            {/* Tasks & Milestones Register Table */}
            <div className="bg-white dark:bg-[#262421] rounded border border-[#dad5cc] dark:border-[#3c3934] p-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#ece8df] dark:border-[#3c3934] mb-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-[#8c8880]">
                  タスク・工程一覧詳細 (WBS)
                </h3>
                <span className="text-xs bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] px-2 py-0.2 rounded font-mono border border-[#d2ccbf] dark:border-[#3c3934]">
                  {project.tasks.length}件
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#f6f4f0] dark:bg-[#1e1d1a] text-neutral-600 dark:text-[#8c8880] font-medium border-b border-[#dad5cc] dark:border-[#3c3934]">
                    <tr>
                      <th className="p-2">状態</th>
                      <th className="p-2">タスク名 / 節目</th>
                      <th className="p-2">担当者</th>
                      <th className="p-2">開始日 〜 終了日</th>
                      <th className="p-2">進捗率</th>
                      <th className="p-2">優先度</th>
                      <th className="p-2 text-right">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ece8df] dark:divide-[#3c3934]">
                    {project.tasks.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center py-6 text-neutral-400 dark:text-[#8c8880]">
                          タスクが登録されていません。「+タスク追加」から登録してください。
                        </td>
                      </tr>
                    ) : (
                      project.tasks.map((t) => (
                        <tr
                          key={t.id}
                          onClick={() => setEditingTask({ isOpen: true, data: t })}
                          className="hover:bg-[#f6f4f0] dark:hover:bg-[#302e2b] transition cursor-pointer"
                        >
                          <td className="p-2">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-medium border ${
                                t.status === 'completed'
                                  ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900'
                                  : t.status === 'review'
                                  ? 'bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-900'
                                  : t.status === 'in_progress'
                                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-900'
                                  : 'bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#8c8880] border-[#d2ccbf] dark:border-[#3c3934]'
                              }`}
                            >
                              {t.status === 'completed' ? '完了' : t.status === 'review' ? '確認中' : t.status === 'in_progress' ? '進行中' : '未着手'}
                            </span>
                          </td>
                          <td className="p-2 font-medium text-neutral-900 dark:text-white">{t.name}</td>
                          <td className="p-2 text-neutral-600 dark:text-[#8c8880]">{t.owner || '-'}</td>
                          <td className="p-2 font-mono text-[11px] text-neutral-500 dark:text-[#8c8880]">
                            {t.startDate || '-'} 〜 {t.endDate || '-'}
                          </td>
                          <td className="p-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-[#e4e0d7] dark:bg-[#1e1d1a] rounded h-1.5 overflow-hidden">
                                <div className="bg-neutral-800 dark:bg-[#3692e7] h-1.5" style={{ width: `${t.progress}%` }} />
                              </div>
                              <span className="font-mono text-[10px] text-neutral-500 dark:text-[#8c8880]">{t.progress}%</span>
                            </div>
                          </td>
                          <td className="p-2">
                            <span
                              className={`text-[10px] font-bold ${
                                t.priority === 'high'
                                  ? 'text-rose-600 dark:text-[#c33b32]'
                                  : t.priority === 'medium'
                                  ? 'text-neutral-600 dark:text-[#8c8880]'
                                  : 'text-neutral-400'
                              }`}
                            >
                              {t.priority === 'high' ? '高' : t.priority === 'medium' ? '中' : '低'}
                            </span>
                          </td>
                          <td className="p-2 text-right space-x-1" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => setEditingTask({ isOpen: true, data: t })}
                              className="p-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-xs cursor-pointer"
                            >
                              編集
                            </button>
                            <button
                              onClick={() => {
                                setConfirmState({
                                  isOpen: true,
                                  title: 'タスクの削除',
                                  message: `「${t.name}」を削除しますか？`,
                                  onOk: () => {
                                    setProject((prev) => ({
                                      ...prev,
                                      tasks: prev.tasks.filter((x) => x.id !== t.id),
                                    }));
                                    setConfirmState((prev) => ({ ...prev, isOpen: false }));
                                  },
                                });
                              }}
                              className="p-1 text-neutral-400 hover:text-rose-600 text-xs cursor-pointer"
                            >
                              削除
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ===================== TAB 5: RISKS & ISSUES ===================== */}
        {activeTab === 'risks' && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-[#262421] border border-[#dad5cc] dark:border-[#3c3934] rounded p-4 flex items-start justify-between">
              <div>
                <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">懸念事項 (リスク) と 発生中問題 (課題) の管理</h2>
                <p className="text-xs text-neutral-600 dark:text-[#8c8880] mt-1 leading-relaxed">
                  「まだ起きていないが起きるとまずいこと（将来リスク）」と「既に発生して対処中のこと（課題 / Issue）」を明確に区別し、ボール保持者を可視化します。
                </p>
              </div>
              <button
                onClick={() => openTip('riskAndIssue')}
                className="px-2.5 py-1.5 bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#383530] text-neutral-800 dark:text-[#dcd8d3] text-xs rounded border border-[#d0cac0] dark:border-[#3c3934] flex-shrink-0 transition cursor-pointer"
              >
                解説 Tips
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Risks Section */}
              <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#ece8df] dark:border-[#3c3934] mb-3">
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider">
                        将来の懸念・リスク (Risk Register)
                      </h3>
                      <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-0.5">発生確率 × 影響度 ＝ リスクスコア</p>
                    </div>
                    <button
                      onClick={() => setEditingRisk({ isOpen: true, data: null })}
                      className="px-2.5 py-1 text-xs bg-amber-700 hover:bg-amber-600 text-white dark:bg-[#bf811d] dark:hover:opacity-90 rounded font-medium transition cursor-pointer"
                    >
                      + リスク登録
                    </button>
                  </div>

                  {/* 5x5 Matrix Preview */}
                  <div className="mb-4 bg-[#f6f4f0] dark:bg-[#1c1b18] p-3 rounded border border-[#dad5cc] dark:border-[#3c3934]">
                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-700 dark:text-[#8c8880] mb-2">
                      <span>リスクマトリックス (5段階評価)</span>
                      <span className="text-[10px] text-neutral-500 dark:text-[#8c8880]">赤: 優先対処 / 黄: 定期監視</span>
                    </div>
                    <RiskMatrix
                      risks={project.risks}
                      isDark={theme === 'dark'}
                      onSelectRisk={(r) => setEditingRisk({ isOpen: true, data: r })}
                    />
                  </div>

                  {/* Risk List */}
                  <div className="overflow-y-auto max-h-80 space-y-2">
                    {project.risks.length === 0 ? (
                      <p className="text-neutral-400 dark:text-[#8c8880] py-6 text-center text-xs">懸念・リスクは未登録です</p>
                    ) : (
                      project.risks.map((r) => {
                        const score = (r.probability || 1) * (r.impact || 1);
                        return (
                          <div
                            key={r.id}
                            onClick={() => setEditingRisk({ isOpen: true, data: r })}
                            className="p-3 rounded border border-[#dad5cc] dark:border-[#3c3934] bg-white dark:bg-[#262421] hover:bg-[#f6f4f0] dark:hover:bg-[#302e2b] transition cursor-pointer"
                          >
                            <div className="flex items-start justify-between">
                              <span className="font-semibold text-neutral-900 dark:text-white text-xs">{r.title}</span>
                              <span
                                className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-semibold ${
                                  score >= 15
                                    ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                                    : score >= 8
                                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                                    : 'bg-neutral-100 text-neutral-700 dark:bg-[#302e2b] dark:text-[#dcd8d3]'
                                }`}
                              >
                                スコア: {score}
                              </span>
                            </div>
                            <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-1 line-clamp-2">
                              {r.responseStrategy || ''}
                            </p>
                            <div className="flex items-center justify-between text-[10px] text-neutral-400 dark:text-[#8c8880] mt-2">
                              <span>担当: {r.owner || '未定'}</span>
                              <span>状態: {r.status}</span>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>

              {/* Issues Section */}
              <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#ece8df] dark:border-[#3c3934] mb-3">
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider">
                        現在発生している課題 (Issue Log)
                      </h3>
                      <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-0.5">「今誰がボールを持っていて、いつまでに解決するか」</p>
                    </div>
                    <button
                      onClick={() => setEditingIssue({ isOpen: true, data: null })}
                      className="px-2.5 py-1 text-xs bg-rose-700 hover:bg-rose-600 text-white dark:bg-[#c33b32] dark:hover:opacity-90 rounded font-medium transition cursor-pointer"
                    >
                      + 課題登録
                    </button>
                  </div>

                  <div className="overflow-y-auto max-h-[460px] space-y-2.5">
                    {project.issues.length === 0 ? (
                      <p className="text-neutral-400 dark:text-[#8c8880] py-6 text-center text-xs">現在発生している課題はありません</p>
                    ) : (
                      project.issues.map((iss) => (
                        <div
                          key={iss.id}
                          onClick={() => setEditingIssue({ isOpen: true, data: iss })}
                          className={`p-3 rounded border border-[#dad5cc] dark:border-[#3c3934] bg-white dark:bg-[#262421] hover:bg-[#f6f4f0] dark:hover:bg-[#302e2b] transition cursor-pointer ${
                            iss.severity === 'critical'
                              ? 'border-l-2 border-l-rose-600 bg-rose-50/30 dark:bg-rose-950/20'
                              : iss.severity === 'high'
                              ? 'border-l-2 border-l-amber-600 bg-amber-50/30 dark:bg-amber-950/20'
                              : 'border-l-2 border-l-neutral-400'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <span className="font-semibold text-neutral-900 dark:text-white text-xs">{iss.title}</span>
                            <span className="text-[10px] font-mono text-neutral-500">期限: {iss.dueDate || '-'}</span>
                          </div>
                          {iss.resolution && (
                            <p className="text-[11px] text-neutral-700 dark:text-neutral-300 mt-1 bg-[#f6f4f0] dark:bg-[#1e1d1a] p-1.5 rounded border border-[#dad5cc] dark:border-[#3c3934]">
                              <span className="font-semibold">対処方針:</span> {iss.resolution}
                            </p>
                          )}
                          <div className="flex items-center justify-between text-[10px] text-neutral-500 dark:text-[#8c8880] mt-2">
                            <span>担当: {iss.owner || '未定'}</span>
                            <span
                              className={`font-semibold ${
                                iss.status === 'resolved'
                                  ? 'text-emerald-600 dark:text-[#629924]'
                                  : 'text-rose-600 dark:text-[#c33b32]'
                              }`}
                            >
                              {iss.status === 'resolved' ? '解決済' : iss.status === 'pending' ? '回答待ち' : '対応中 (Open)'}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===================== TAB 6: DECISIONS ===================== */}
        {activeTab === 'decisions' && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-[#262421] border border-[#dad5cc] dark:border-[#3c3934] rounded p-4 flex items-start justify-between">
              <div>
                <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">意思決定の経緯・決定事項録 (Decision Log)</h2>
                <p className="text-xs text-neutral-600 dark:text-[#8c8880] mt-1 leading-relaxed">
                  「誰が、いつ、どのような理由でその方針を決めたか」を時系列で蓄積します。年度替わりの人事異動や議会答弁での経緯確認、後々の「言った言わない」を防ぐ公式ログとなります。
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => openTip('decisionLog')}
                  className="px-2.5 py-1.5 bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#383530] text-neutral-800 dark:text-[#dcd8d3] text-xs rounded border border-[#d0cac0] dark:border-[#3c3934] transition cursor-pointer"
                >
                  解説 Tips
                </button>
                <button
                  onClick={() => setEditingDecision({ isOpen: true, data: null })}
                  className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] text-xs font-medium rounded shadow-xs flex items-center space-x-1 transition cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>決定事項を記録</span>
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934]">
              <div className="flex items-center justify-between pb-3 border-b border-[#ece8df] dark:border-[#3c3934] mb-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-[#8c8880]">
                  決定事項タイムライン一覧
                </h3>
                <span className="text-xs bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] px-2 py-0.2 rounded font-mono border border-[#d2ccbf] dark:border-[#3c3934]">
                  {project.decisions.length}件
                </span>
              </div>

              <div className="space-y-4">
                {project.decisions.length === 0 ? (
                  <p className="text-neutral-400 dark:text-[#8c8880] py-8 text-center text-xs">
                    決定事項の記録はまだありません。「+決定事項を記録」から追加してください。
                  </p>
                ) : (
                  project.decisions.map((d) => (
                    <div
                      key={d.id}
                      className="relative pl-5 pb-5 border-l border-neutral-300 dark:border-[#3c3934] last:border-l-0 last:pb-0"
                    >
                      <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-700 dark:bg-[#3692e7]" />
                      <div
                        onClick={() => setEditingDecision({ isOpen: true, data: d })}
                        className="bg-white dark:bg-[#262421] rounded border border-[#dad5cc] dark:border-[#3c3934] p-4 hover:border-neutral-400 dark:hover:border-neutral-500 transition cursor-pointer"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <span className="font-semibold text-neutral-900 dark:text-white text-xs sm:text-sm">{d.topic}</span>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs text-neutral-600 dark:text-[#3692e7] font-semibold">{d.date}</span>
                            <span className="bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#8c8880] text-[10px] px-1.5 py-0.2 rounded border border-[#d2ccbf] dark:border-[#3c3934] font-medium">
                              {d.decisionMaker}
                            </span>
                          </div>
                        </div>
                        <div className="bg-[#f6f4f0] dark:bg-[#1e1d1a] p-2.5 rounded border border-[#dad5cc] dark:border-[#3c3934] mt-2 text-xs text-neutral-800 dark:text-[#dcd8d3] leading-relaxed">
                          {d.decision}
                        </div>
                        {d.reason && (
                          <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-2">
                            <span className="font-medium">決定理由:</span> {d.reason}
                          </p>
                        )}
                        {d.impact && (
                          <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-1">
                            <span className="font-medium">波及影響:</span> {d.impact}
                          </p>
                        )}
                        <div className="flex justify-end mt-2 space-x-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => setEditingDecision({ isOpen: true, data: d })}
                            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-xs cursor-pointer"
                          >
                            編集
                          </button>
                          <button
                            onClick={() => {
                              setConfirmState({
                                isOpen: true,
                                title: '決定記録の削除',
                                message: `「${d.topic}」を削除しますか？`,
                                onOk: () => {
                                  setProject((prev) => ({
                                    ...prev,
                                    decisions: prev.decisions.filter((x) => x.id !== d.id),
                                  }));
                                  setConfirmState((prev) => ({ ...prev, isOpen: false }));
                                },
                              });
                            }}
                            className="text-neutral-400 hover:text-rose-600 text-xs cursor-pointer"
                          >
                            削除
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        )}

        {/* ===================== TAB 7: DELIVERABLES ===================== */}
        {activeTab === 'deliverables' && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-[#262421] border border-[#dad5cc] dark:border-[#3c3934] rounded p-4 flex items-start justify-between">
              <div>
                <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">成果物・納品物管理 (Deliverable Register)</h2>
                <p className="text-xs text-neutral-600 dark:text-[#8c8880] mt-1 leading-relaxed">
                  事業によって最終的に残る調達物・成果（看板本体、設計データ一式、検査調書、維持管理要領等）の完成状態と受入検収基準を管理します。
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => openTip('deliverables')}
                  className="px-2.5 py-1.5 bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#383530] text-neutral-800 dark:text-[#dcd8d3] text-xs rounded border border-[#d0cac0] dark:border-[#3c3934] transition cursor-pointer"
                >
                  解説 Tips
                </button>
                <button
                  onClick={() => setEditingDeliverable({ isOpen: true, data: null })}
                  className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] text-xs font-medium rounded shadow-xs flex items-center space-x-1 transition cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>成果物を追加</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.deliverables.length === 0 ? (
                <div className="col-span-full py-12 text-center text-neutral-400 dark:text-[#8c8880] text-xs">
                  成果物が未登録です。「+成果物を追加」から登録してください。
                </div>
              ) : (
                project.deliverables.map((deliv) => {
                  const statusClass =
                    deliv.status === 'accepted'
                      ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold'
                      : deliv.status === 'review'
                      ? 'bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-medium'
                      : deliv.status === 'drafting'
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-medium'
                      : 'bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-600 dark:text-[#8c8880]';

                  const statusText =
                    deliv.status === 'accepted'
                      ? '検収完了 (受入済)'
                      : deliv.status === 'review'
                      ? '検収確認中'
                      : deliv.status === 'drafting'
                      ? '作成中'
                      : '未作成';

                  return (
                    <div
                      key={deliv.id}
                      onClick={() => setEditingDeliverable({ isOpen: true, data: deliv })}
                      className="bg-white dark:bg-[#262421] p-4 rounded border border-[#dad5cc] dark:border-[#3c3934] flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-500 transition cursor-pointer"
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <span className="font-semibold text-neutral-900 dark:text-white text-xs line-clamp-1">{deliv.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border border-neutral-300 dark:border-[#3c3934] ${statusClass}`}>
                            {statusText}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 dark:text-[#8c8880] mt-1 line-clamp-2">
                          {deliv.description || '概要未入力'}
                        </p>
                        {deliv.acceptanceCriteria && (
                          <div className="mt-2.5 p-2 bg-[#f6f4f0] dark:bg-[#1e1d1a] rounded border border-[#dad5cc] dark:border-[#3c3934] text-[10px] text-neutral-700 dark:text-neutral-300">
                            <span className="font-semibold block">受入条件:</span>
                            <span className="line-clamp-2">{deliv.acceptanceCriteria}</span>
                          </div>
                        )}
                      </div>
                      <div className="mt-3 pt-2 border-t border-[#ece8df] dark:border-[#3c3934] flex items-center justify-between text-[10px] text-neutral-400 dark:text-[#8c8880]" onClick={(e) => e.stopPropagation()}>
                        <span>期日: {deliv.dueDate || '未定'}</span>
                        <div className="space-x-1.5">
                          <button
                            onClick={() => setEditingDeliverable({ isOpen: true, data: deliv })}
                            className="hover:text-neutral-900 dark:hover:text-white cursor-pointer"
                          >
                            編集
                          </button>
                          <button
                            onClick={() => {
                              setConfirmState({
                                isOpen: true,
                                title: '成果物の削除',
                                message: `「${deliv.name}」を削除しますか？`,
                                onOk: () => {
                                  setProject((prev) => ({
                                    ...prev,
                                    deliverables: prev.deliverables.filter((x) => x.id !== deliv.id),
                                  }));
                                  setConfirmState((prev) => ({ ...prev, isOpen: false }));
                                },
                              });
                            }}
                            className="hover:text-rose-600 cursor-pointer"
                          >
                            削除
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </section>
        )}

        {/* ===================== TAB 8: PROJECT CLOSURE ===================== */}
        {activeTab === 'closure' && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-[#262421] border border-[#dad5cc] dark:border-[#3c3934] rounded p-5 flex items-start justify-between">
              <div>
                <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">事業完了・引継報告書 (Closure & Lessons Learned)</h2>
                <p className="text-xs text-neutral-600 dark:text-[#8c8880] mt-1 leading-relaxed">
                  事業終了時に「何が達成でき、何が課題として残ったか」「次の担当者が同じ失敗をしないための教訓（ノウハウ）」をまとめます。
                </p>
              </div>
              <button
                onClick={() => openTip('projectClosure')}
                className="px-2.5 py-1.5 bg-[#f0ede6] hover:bg-[#e4e0d7] dark:bg-[#302e2b] dark:hover:bg-[#383530] text-neutral-800 dark:text-[#dcd8d3] text-xs rounded border border-[#d0cac0] dark:border-[#3c3934] flex-shrink-0 transition cursor-pointer"
              >
                解説 Tips
              </button>
            </div>

            <div className="bg-white dark:bg-[#262421] p-5 rounded border border-[#dad5cc] dark:border-[#3c3934] space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-[#ece8df] dark:border-[#3c3934] text-xs">
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">事業完了日</label>
                  <input
                    type="date"
                    value={project.closure.completionDate}
                    onChange={(e) => setProject({ ...project, closure: { ...project.closure, completionDate: e.target.value } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">総合完了ステータス</label>
                  <select
                    value={project.closure.overallStatus}
                    onChange={(e) => setProject({ ...project, closure: { ...project.closure, overallStatus: e.target.value as any } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                  >
                    <option value="in_progress">事業継続中 (未完了)</option>
                    <option value="completed_success">完全達成・無事完了</option>
                    <option value="completed_partial">一部目標を残して完了</option>
                    <option value="cancelled">事業中止・凍結</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">決裁・完了承認状況</label>
                  <input
                    type="text"
                    value={project.closure.approval}
                    onChange={(e) => setProject({ ...project, closure: { ...project.closure, approval: e.target.value } })}
                    className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                    placeholder="例: 令和8年12月28日 課長供覧決裁済"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                <div>
                  <label className="block font-semibold text-neutral-900 dark:text-white mb-1">達成できたこと (成果・成功点)</label>
                  <textarea
                    rows={4}
                    value={project.closure.achievements}
                    onChange={(e) => setProject({ ...project, closure: { ...project.closure, achievements: e.target.value } })}
                    className="w-full p-2.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例: 当初予定期日までに全フロアの案内サイン更新を完了。来庁者アンケートで「見やすくなった」の回答が92%に達した。予算執行も当初比で30万円削減できた。"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-900 dark:text-white mb-1">未達成だったこと・残された課題</label>
                  <textarea
                    rows={4}
                    value={project.closure.unachievedObjectives}
                    onChange={(e) => setProject({ ...project, closure: { ...project.closure, unachievedObjectives: e.target.value } })}
                    className="w-full p-2.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例: デジタルサイネージのリアルタイム混雑表示連動はネットワーク回線工事の制約により次年度以降へ持ち越しとなった。"
                  />
                </div>

                <div className="md:col-span-2 bg-[#fdfaf3] dark:bg-[#201d17] p-4 rounded border border-[#ebd8ad] dark:border-[#423927]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-semibold text-neutral-900 dark:text-white text-xs">
                      教訓・反省点・申し送り事項 (Lessons Learned)
                    </label>
                    <span className="text-[11px] text-neutral-600 dark:text-[#8c8880]">
                      次年度の担当者が同じ失敗を繰り返さないための最重要ノウハウ
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    value={project.closure.lessonsLearned}
                    onChange={(e) => setProject({ ...project, closure: { ...project.closure, lessonsLearned: e.target.value } })}
                    className="w-full p-2.5 bg-white dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] text-xs leading-relaxed"
                    placeholder="例:&#10;【仕様策定】障害当事者団体への事前意見照会は、仕様書入札公示の最低2ヶ月前に実施すべきだった（直前の修正要望への対応が逼迫したため）。&#10;【工事日程】夜間工事は警備会社への鍵貸出届出が3日前までに必要。事前の警備部局との調整フローを標準化しておくこと。"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-900 dark:text-white mb-1">引き継ぎ事項 (後任者・維持管理担当へ)</label>
                  <textarea
                    rows={4}
                    value={project.closure.handover}
                    onChange={(e) => setProject({ ...project, closure: { ...project.closure, handover: e.target.value } })}
                    className="w-full p-2.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例: 看板面の定期清掃マニュアルは施設管理係へ共有済。ピクトグラムの生データは庁内共有フォルダ (//srv01/share/sign_data) に格納済。"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-900 dark:text-white mb-1">今後の対応・展開予定</label>
                  <textarea
                    rows={4}
                    value={project.closure.futureActions}
                    onChange={(e) => setProject({ ...project, closure: { ...project.closure, futureActions: e.target.value } })}
                    className="w-full p-2.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3] leading-relaxed"
                    placeholder="例: 令和9年度当初予算にて別館および市民会館への横展開を要求予定。"
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ===================== MODALS ===================== */}
      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={confirmState.title}
        message={confirmState.message}
        onOk={confirmState.onOk}
        onCancel={() => setConfirmState((prev) => ({ ...prev, isOpen: false }))}
      />

      <TipsModal isOpen={!!activeTip} tip={activeTip} onClose={() => setActiveTip(null)} />

      {/* Stakeholder Modal */}
      <StakeholderModal
        isOpen={editingSh.isOpen}
        initialData={editingSh.data}
        onSave={(sh) => {
          setProject((prev) => {
            const idx = prev.stakeholders.findIndex((s) => s.id === sh.id);
            const nextList = [...prev.stakeholders];
            if (idx >= 0) nextList[idx] = sh;
            else nextList.push(sh);
            return { ...prev, stakeholders: nextList };
          });
          setEditingSh({ isOpen: false, data: null });
          showToast('関係者を保存しました', 'success');
        }}
        onClose={() => setEditingSh({ isOpen: false, data: null })}
      />

      {/* Task Modal */}
      <TaskModal
        isOpen={editingTask.isOpen}
        initialData={editingTask.data}
        onSave={(task) => {
          setProject((prev) => {
            const idx = prev.tasks.findIndex((t) => t.id === task.id);
            const nextList = [...prev.tasks];
            if (idx >= 0) nextList[idx] = task;
            else nextList.push(task);
            return { ...prev, tasks: nextList };
          });
          setEditingTask({ isOpen: false, data: null });
          showToast('タスクを保存しました', 'success');
        }}
        onClose={() => setEditingTask({ isOpen: false, data: null })}
      />

      {/* Milestone Modal */}
      <MilestoneModal
        isOpen={editingMs.isOpen}
        initialData={editingMs.data}
        onSave={(ms) => {
          setProject((prev) => {
            const idx = prev.milestones.findIndex((m) => m.id === ms.id);
            const nextList = [...prev.milestones];
            if (idx >= 0) nextList[idx] = ms;
            else nextList.push(ms);
            return { ...prev, milestones: nextList };
          });
          setEditingMs({ isOpen: false, data: null });
          showToast('マイルストーンを保存しました', 'success');
        }}
        onClose={() => setEditingMs({ isOpen: false, data: null })}
      />

      {/* Risk Modal */}
      <RiskModal
        isOpen={editingRisk.isOpen}
        initialData={editingRisk.data}
        onSave={(risk) => {
          setProject((prev) => {
            const idx = prev.risks.findIndex((r) => r.id === risk.id);
            const nextList = [...prev.risks];
            if (idx >= 0) nextList[idx] = risk;
            else nextList.push(risk);
            return { ...prev, risks: nextList };
          });
          setEditingRisk({ isOpen: false, data: null });
          showToast('リスクを保存しました', 'success');
        }}
        onClose={() => setEditingRisk({ isOpen: false, data: null })}
      />

      {/* Issue Modal */}
      <IssueModal
        isOpen={editingIssue.isOpen}
        initialData={editingIssue.data}
        onSave={(iss) => {
          setProject((prev) => {
            const idx = prev.issues.findIndex((i) => i.id === iss.id);
            const nextList = [...prev.issues];
            if (idx >= 0) nextList[idx] = iss;
            else nextList.push(iss);
            return { ...prev, issues: nextList };
          });
          setEditingIssue({ isOpen: false, data: null });
          showToast('課題を保存しました', 'success');
        }}
        onClose={() => setEditingIssue({ isOpen: false, data: null })}
      />

      {/* Decision Modal */}
      <DecisionModal
        isOpen={editingDecision.isOpen}
        initialData={editingDecision.data}
        onSave={(dec) => {
          setProject((prev) => {
            const idx = prev.decisions.findIndex((d) => d.id === dec.id);
            const nextList = [...prev.decisions];
            if (idx >= 0) nextList[idx] = dec;
            else nextList.push(dec);
            return { ...prev, decisions: nextList };
          });
          setEditingDecision({ isOpen: false, data: null });
          showToast('決定事項を保存しました', 'success');
        }}
        onClose={() => setEditingDecision({ isOpen: false, data: null })}
      />

      {/* Deliverable Modal */}
      <DeliverableModal
        isOpen={editingDeliverable.isOpen}
        initialData={editingDeliverable.data}
        onSave={(deliv) => {
          setProject((prev) => {
            const idx = prev.deliverables.findIndex((d) => d.id === deliv.id);
            const nextList = [...prev.deliverables];
            if (idx >= 0) nextList[idx] = deliv;
            else nextList.push(deliv);
            return { ...prev, deliverables: nextList };
          });
          setEditingDeliverable({ isOpen: false, data: null });
          showToast('成果物を保存しました', 'success');
        }}
        onClose={() => setEditingDeliverable({ isOpen: false, data: null })}
      />

      {/* Snapshots Modal */}
      <SnapshotsModal
        isOpen={snapshotsState.isOpen}
        snapshots={snapshotsState.list}
        onTakeSnapshot={handleTakeManualSnapshot}
        onRestore={handleRestoreSnapshot}
        onDelete={handleDeleteSnapshot}
        onClose={() => setSnapshotsState({ isOpen: false, list: [] })}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={settingsState.isOpen}
        storageUsage={settingsState.storageUsage}
        onClearAll={handleClearAllData}
        onClose={() => setSettingsState({ isOpen: false, storageUsage: '' })}
      />
    </div>
  );
}
