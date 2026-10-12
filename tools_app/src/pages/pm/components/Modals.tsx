import React, { useState, useEffect } from 'react';
import type {
  Stakeholder,
  TaskItem,
  Milestone,
  RiskItem,
  IssueItem,
  DecisionItem,
  DeliverableItem,
  Snapshot,
  TipEntry,
  Attitude,
  Engagement,
  TaskStatus,
  Priority,
  RiskStatus,
  IssueSeverity,
  IssueStatus,
  DeliverableStatus,
} from '../types';

// ======================= Confirm Modal =======================
interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  showCancel?: boolean;
  onOk: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  message,
  showCancel = true,
  onOk,
  onCancel,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-sm rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden p-5 text-center shadow-xl">
        <div className="w-10 h-10 rounded border border-neutral-300 dark:border-[#3c3934] bg-[#f6f4f0] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] flex items-center justify-center mx-auto mb-3 font-mono font-bold text-sm">
          !
        </div>
        <h4 className="font-semibold text-sm text-neutral-900 dark:text-white mb-1">{title}</h4>
        <p className="text-xs text-neutral-600 dark:text-[#8c8880] mb-5 leading-relaxed">{message}</p>
        <div className="flex justify-center space-x-2">
          {showCancel && (
            <button
              onClick={onCancel}
              className="px-3.5 py-1.5 bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] rounded text-xs font-medium hover:bg-[#e4e0d7] dark:hover:bg-[#3d3a36] transition cursor-pointer"
            >
              キャンセル
            </button>
          )}
          <button
            onClick={onOk}
            className="px-4 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] rounded text-xs font-medium shadow-xs transition cursor-pointer"
          >
            実行する
          </button>
        </div>
      </div>
    </div>
  );
};

// ======================= Tips Modal =======================
interface TipsModalProps {
  isOpen: boolean;
  tip: TipEntry | null;
  onClose: () => void;
}

export const TipsModal: React.FC<TipsModalProps> = ({ isOpen, tip, onClose }) => {
  if (!isOpen || !tip) return null;
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-2xl rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col max-h-[90vh] shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">{tip.title}</h3>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-base cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="p-5 overflow-y-auto space-y-4 text-xs leading-relaxed text-neutral-800 dark:text-[#dcd8d3]">
          <div className="bg-[#f6f4f0] dark:bg-[#1e1d1a] p-3 rounded border border-[#dad5cc] dark:border-[#3c3934]">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 dark:text-[#8c8880] block">
              PMBOK体系での定義
            </span>
            <h4 className="font-bold text-neutral-900 dark:text-white text-xs mt-0.5">{tip.pmbokTerm}</h4>
          </div>

          <div>
            <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs mb-1">【要点の解説】</h5>
            <p className="text-neutral-600 dark:text-[#8c8880] leading-relaxed">{tip.explanation}</p>
          </div>

          <div className="bg-[#fdfaf3] dark:bg-[#201d17] p-3 rounded border border-[#ebd8ad] dark:border-[#423927]">
            <h5 className="font-semibold text-amber-900 dark:text-amber-300 text-xs mb-1">【自治体実務における重要性】</h5>
            <p className="text-amber-800 dark:text-neutral-300 leading-relaxed">{tip.practicalMeaning}</p>
          </div>

          {tip.example && (
            <div>
              <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs mb-1">【実務での記入具体例】</h5>
              <p className="bg-[#fcfbfa] dark:bg-[#1e1d1a] p-2.5 rounded border border-[#dad5cc] dark:border-[#3c3934] font-mono text-[11px] text-neutral-700 dark:text-[#dcd8d3] leading-relaxed whitespace-pre-line">
                {tip.example}
              </p>
            </div>
          )}
        </div>
        <div className="p-3 bg-[#f6f4f0] dark:bg-[#201e1b] border-t border-[#dad5cc] dark:border-[#3c3934] flex justify-end">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 dark:bg-[#302e2b] dark:hover:bg-[#3d3a36] text-white rounded text-xs font-medium cursor-pointer"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

// ======================= Stakeholder Modal =======================
interface StakeholderModalProps {
  isOpen: boolean;
  initialData: Stakeholder | null;
  onSave: (sh: Stakeholder) => void;
  onClose: () => void;
}

export const StakeholderModal: React.FC<StakeholderModalProps> = ({
  isOpen,
  initialData,
  onSave,
  onClose,
}) => {
  const [form, setForm] = useState<Partial<Stakeholder>>({});

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        name: '',
        organization: '',
        role: '',
        attitude: 'supportive',
        power: 3,
        interest: 3,
        currentEngagement: 'neutral',
        desiredEngagement: 'supportive',
        strategy: '',
        communicationMethod: '',
        communicationFrequency: '',
        notes: '',
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name?.trim()) return;
    const sh: Stakeholder = {
      id: form.id || 'sh_' + Date.now(),
      name: form.name.trim(),
      organization: form.organization?.trim() || '',
      role: form.role?.trim() || '',
      attitude: (form.attitude as Attitude) || 'supportive',
      power: Number(form.power) || 3,
      interest: Number(form.interest) || 3,
      currentEngagement: (form.currentEngagement as Engagement) || 'neutral',
      desiredEngagement: (form.desiredEngagement as Engagement) || 'supportive',
      strategy: form.strategy?.trim() || '',
      communicationMethod: form.communicationMethod?.trim() || '',
      communicationFrequency: form.communicationFrequency?.trim() || '',
      notes: form.notes?.trim() || '',
    };
    onSave(sh);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-xl rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col max-h-[95vh] shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">
            {initialData ? '関係者の編集' : '関係者の追加'}
          </h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-3 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
                氏名 / 担当者名 <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name || ''}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                placeholder="例: 鈴木 一郎"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
                組織 / 所属部署 <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={form.organization || ''}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                placeholder="例: 市民生活部 窓口サービス課"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">本事業での役割</label>
              <input
                type="text"
                value={form.role || ''}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                placeholder="例: 窓口運用キーパーソン / 現場責任者"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">態度 (現在の姿勢)</label>
              <select
                value={form.attitude || 'supportive'}
                onChange={(e) => setForm({ ...form, attitude: e.target.value as Attitude })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              >
                <option value="supportive">支持的・積極推進</option>
                <option value="neutral">中立・静観</option>
                <option value="cautious">慎重・懸念あり</option>
                <option value="resistant">反対・抵抗感あり</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-[#f6f4f0] dark:bg-[#1e1d1a] p-3 rounded border border-[#dad5cc] dark:border-[#3c3934]">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1 flex justify-between">
                <span>影響力 (Power): <span className="font-bold text-neutral-900 dark:text-[#3692e7]">{form.power || 3}</span></span>
                <span className="text-[10px] text-neutral-400">1:低 〜 5:決裁権</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={form.power || 3}
                onChange={(e) => setForm({ ...form, power: Number(e.target.value) })}
                className="w-full accent-neutral-800 dark:accent-[#3692e7]"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1 flex justify-between">
                <span>関心度 (Interest): <span className="font-bold text-neutral-900 dark:text-[#3692e7]">{form.interest || 3}</span></span>
                <span className="text-[10px] text-neutral-400">1:低 〜 5:極めて高</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={form.interest || 3}
                onChange={(e) => setForm({ ...form, interest: Number(e.target.value) })}
                className="w-full accent-neutral-800 dark:accent-[#3692e7]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">現在の関与度 (Current)</label>
              <select
                value={form.currentEngagement || 'neutral'}
                onChange={(e) => setForm({ ...form, currentEngagement: e.target.value as Engagement })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              >
                <option value="unaware">認知なし (未把握)</option>
                <option value="resistant">抵抗 (反対)</option>
                <option value="neutral">中立 (傍観)</option>
                <option value="supportive">支持 (協力的)</option>
                <option value="leading">主導 (推進)</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">望ましい関与度 (Desired)</label>
              <select
                value={form.desiredEngagement || 'supportive'}
                onChange={(e) => setForm({ ...form, desiredEngagement: e.target.value as Engagement })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              >
                <option value="neutral">中立で十分</option>
                <option value="supportive">支持・協力を得たい</option>
                <option value="leading">自ら主導してほしい</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">対応方針 (巻き込み策・合意形成アプローチ)</label>
            <input
              type="text"
              value={form.strategy || ''}
              onChange={(e) => setForm({ ...form, strategy: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 月1回の進捗打ち合わせで事前に原案を見せ、意見を反映させる"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">連絡手段</label>
              <input
                type="text"
                value={form.communicationMethod || ''}
                onChange={(e) => setForm({ ...form, communicationMethod: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                placeholder="例: 庁内メール + 定例対面協議"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">連絡頻度</label>
              <input
                type="text"
                value={form.communicationFrequency || ''}
                onChange={(e) => setForm({ ...form, communicationFrequency: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                placeholder="例: 隔週1回 / 節目毎"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">特記事項・経緯メモ</label>
            <textarea
              rows={2}
              value={form.notes || ''}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 過去のサイン変更時に窓口職員から見づらいと意見が出た経緯あり。事前配慮が有効。"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-3 border-t border-[#ece8df] dark:border-[#3c3934]">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] rounded font-medium cursor-pointer"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] rounded font-medium cursor-pointer"
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ======================= Task Modal =======================
interface TaskModalProps {
  isOpen: boolean;
  initialData: TaskItem | null;
  onSave: (task: TaskItem) => void;
  onClose: () => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  initialData,
  onSave,
  onClose,
}) => {
  const [form, setForm] = useState<Partial<TaskItem>>({});

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      const today = new Date().toISOString().slice(0, 10);
      setForm({
        name: '',
        owner: '',
        priority: 'medium',
        startDate: today,
        endDate: today,
        status: 'not_started',
        progress: 0,
        description: '',
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleStatusChange = (status: TaskStatus) => {
    let progress = form.progress || 0;
    if (status === 'completed') progress = 100;
    else if (status === 'not_started') progress = 0;
    setForm({ ...form, status, progress });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name?.trim()) return;
    const task: TaskItem = {
      id: form.id || 'task_' + Date.now(),
      name: form.name.trim(),
      owner: form.owner?.trim() || '',
      priority: (form.priority as Priority) || 'medium',
      startDate: form.startDate || '',
      endDate: form.endDate || '',
      status: (form.status as TaskStatus) || 'not_started',
      progress: Number(form.progress) || 0,
      description: form.description?.trim() || '',
    };
    onSave(task);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-lg rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col max-h-[95vh] shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">
            {initialData ? 'タスクの編集' : 'タスクの登録'}
          </h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-3 text-xs">
          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
              作業・タスク名 <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name || ''}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 基本設計書・デザイン案の庁内回覧"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">担当者 (ボール保持者)</label>
              <input
                type="text"
                value={form.owner || ''}
                onChange={(e) => setForm({ ...form, owner: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                placeholder="例: 山田主査"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">優先度</label>
              <select
                value={form.priority || 'medium'}
                onChange={(e) => setForm({ ...form, priority: e.target.value as Priority })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              >
                <option value="high">高 (最優先)</option>
                <option value="medium">中 (通常)</option>
                <option value="low">低 (順次)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
                開始予定日 <span className="text-rose-600">*</span>
              </label>
              <input
                type="date"
                required
                value={form.startDate || ''}
                onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
                完了予定日 <span className="text-rose-600">*</span>
              </label>
              <input
                type="date"
                required
                value={form.endDate || ''}
                onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-[#f6f4f0] dark:bg-[#1e1d1a] p-3 rounded border border-[#dad5cc] dark:border-[#3c3934]">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">状態</label>
              <select
                value={form.status || 'not_started'}
                onChange={(e) => handleStatusChange(e.target.value as TaskStatus)}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#262421] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              >
                <option value="not_started">未着手</option>
                <option value="in_progress">進行中</option>
                <option value="review">確認・決裁中</option>
                <option value="completed">完了</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1 flex justify-between">
                <span>進捗率: <span className="font-bold text-neutral-900 dark:text-[#3692e7]">{form.progress || 0}%</span></span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={form.progress || 0}
                onChange={(e) => setForm({ ...form, progress: Number(e.target.value) })}
                className="w-full accent-neutral-800 dark:accent-[#3692e7]"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">作業内容・完了要件メモ</label>
            <textarea
              rows={2}
              value={form.description || ''}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="作業の検収条件や注意点など"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-3 border-t border-[#ece8df] dark:border-[#3c3934]">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] rounded font-medium cursor-pointer"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] rounded font-medium cursor-pointer"
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ======================= Milestone Modal =======================
interface MilestoneModalProps {
  isOpen: boolean;
  initialData: Milestone | null;
  onSave: (ms: Milestone) => void;
  onClose: () => void;
}

export const MilestoneModal: React.FC<MilestoneModalProps> = ({
  isOpen,
  initialData,
  onSave,
  onClose,
}) => {
  const [form, setForm] = useState<Partial<Milestone>>({});

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        name: '',
        date: new Date().toISOString().slice(0, 10),
        status: 'pending',
        description: '',
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name?.trim() || !form.date) return;
    const ms: Milestone = {
      id: form.id || 'ms_' + Date.now(),
      name: form.name.trim(),
      date: form.date,
      status: form.status === 'achieved' ? 'achieved' : 'pending',
      description: form.description?.trim() || '',
    };
    onSave(ms);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-md rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">
            {initialData ? '重要マイルストーンの編集' : '重要マイルストーン (節目) の登録'}
          </h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-3 text-xs">
          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
              マイルストーン名 <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name || ''}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 設計確定・プロポーザル入札公示"
            />
          </div>
          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
              達成目標日 <span className="text-rose-600">*</span>
            </label>
            <input
              type="date"
              required
              value={form.date || ''}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
            />
          </div>
          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">状態</label>
            <select
              value={form.status || 'pending'}
              onChange={(e) => setForm({ ...form, status: e.target.value as 'pending' | 'achieved' })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
            >
              <option value="pending">未達成</option>
              <option value="achieved">達成済み</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">判定基準・概要</label>
            <textarea
              rows={2}
              value={form.description || ''}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="何をもってこの節目を通過したと見なすか"
            />
          </div>
          <div className="flex justify-end space-x-2 pt-3 border-t border-[#ece8df] dark:border-[#3c3934]">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] rounded font-medium cursor-pointer"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-amber-700 hover:bg-amber-600 text-white dark:bg-[#bf811d] rounded font-medium cursor-pointer"
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ======================= Risk Modal =======================
interface RiskModalProps {
  isOpen: boolean;
  initialData: RiskItem | null;
  onSave: (risk: RiskItem) => void;
  onClose: () => void;
}

export const RiskModal: React.FC<RiskModalProps> = ({
  isOpen,
  initialData,
  onSave,
  onClose,
}) => {
  const [form, setForm] = useState<Partial<RiskItem>>({});

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        title: '',
        probability: 3,
        impact: 3,
        responseStrategy: '',
        owner: '',
        status: 'open',
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const score = (Number(form.probability) || 3) * (Number(form.impact) || 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title?.trim()) return;
    const risk: RiskItem = {
      id: form.id || 'risk_' + Date.now(),
      title: form.title.trim(),
      probability: Number(form.probability) || 3,
      impact: Number(form.impact) || 3,
      responseStrategy: form.responseStrategy?.trim() || '',
      owner: form.owner?.trim() || '',
      status: (form.status as RiskStatus) || 'open',
      dueDate: form.dueDate || '',
    };
    onSave(risk);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-lg rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col max-h-[95vh] shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">
            {initialData ? '懸念・リスクの編集' : '懸念・リスクの登録'}
          </h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-3 text-xs">
          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
              懸念される事象 (何が起きそうか) <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              required
              value={form.title || ''}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 看板用特殊資材の納期遅延による施工期日超過"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 bg-[#f6f4f0] dark:bg-[#1e1d1a] p-3 rounded border border-[#dad5cc] dark:border-[#3c3934]">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1 flex justify-between">
                <span>発生確率 (1-5): <span className="font-bold text-amber-700 dark:text-[#bf811d]">{form.probability || 3}</span></span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={form.probability || 3}
                onChange={(e) => setForm({ ...form, probability: Number(e.target.value) })}
                className="w-full accent-amber-600 dark:accent-[#bf811d]"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1 flex justify-between">
                <span>影響度 (1-5): <span className="font-bold text-amber-700 dark:text-[#bf811d]">{form.impact || 3}</span></span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={form.impact || 3}
                onChange={(e) => setForm({ ...form, impact: Number(e.target.value) })}
                className="w-full accent-amber-600 dark:accent-[#bf811d]"
              />
            </div>
            <div className="col-span-2 text-right text-neutral-600 dark:text-[#8c8880] font-medium">
              計算リスクスコア: <span className="text-sm font-bold text-amber-700 dark:text-[#bf811d]">{score}</span> / 25
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">予防策・事後対応策 (Strategy)</label>
            <textarea
              rows={2}
              value={form.responseStrategy || ''}
              onChange={(e) => setForm({ ...form, responseStrategy: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 【予防】入札仕様書に代替国内資材の認容条項を明記しておく。"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">監視責任者</label>
              <input
                type="text"
                value={form.owner || ''}
                onChange={(e) => setForm({ ...form, owner: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                placeholder="例: 施設係 山田"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">状態</label>
              <select
                value={form.status || 'open'}
                onChange={(e) => setForm({ ...form, status: e.target.value as RiskStatus })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              >
                <option value="open">監視中 (Open)</option>
                <option value="mitigated">軽減済 (対応完了)</option>
                <option value="occurred">顕在化 (課題へ移行)</option>
                <option value="closed">終息・影響なし</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-3 border-t border-[#ece8df] dark:border-[#3c3934]">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] rounded font-medium cursor-pointer"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-amber-700 hover:bg-amber-600 text-white dark:bg-[#bf811d] rounded font-medium cursor-pointer"
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ======================= Issue Modal =======================
interface IssueModalProps {
  isOpen: boolean;
  initialData: IssueItem | null;
  onSave: (issue: IssueItem) => void;
  onClose: () => void;
}

export const IssueModal: React.FC<IssueModalProps> = ({
  isOpen,
  initialData,
  onSave,
  onClose,
}) => {
  const [form, setForm] = useState<Partial<IssueItem>>({});

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        title: '',
        severity: 'high',
        dueDate: new Date().toISOString().slice(0, 10),
        owner: '',
        status: 'open',
        resolution: '',
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title?.trim()) return;
    const issue: IssueItem = {
      id: form.id || 'issue_' + Date.now(),
      title: form.title.trim(),
      severity: (form.severity as IssueSeverity) || 'high',
      dueDate: form.dueDate || '',
      owner: form.owner?.trim() || '',
      status: (form.status as IssueStatus) || 'open',
      resolution: form.resolution?.trim() || '',
    };
    onSave(issue);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-lg rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col max-h-[95vh] shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">
            {initialData ? '発生中課題の編集' : '発生中課題 (Issue) の登録'}
          </h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-3 text-xs">
          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
              発生している問題・障害 <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              required
              value={form.title || ''}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 柱の耐震補強ボルトと案内板の固定位置が干渉することが判明"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">深刻度</label>
              <select
                value={form.severity || 'high'}
                onChange={(e) => setForm({ ...form, severity: e.target.value as IssueSeverity })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              >
                <option value="critical">緊急・事業停止レベル</option>
                <option value="high">高 (至急解決が必要)</option>
                <option value="medium">中 (通常対応)</option>
                <option value="low">低 (軽微)</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
                解決期限 <span className="text-rose-600">*</span>
              </label>
              <input
                type="date"
                required
                value={form.dueDate || ''}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">現在の対応者 (ボール保持者)</label>
              <input
                type="text"
                value={form.owner || ''}
                onChange={(e) => setForm({ ...form, owner: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                placeholder="例: 建築指導課 鈴木係長"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">状態</label>
              <select
                value={form.status || 'open'}
                onChange={(e) => setForm({ ...form, status: e.target.value as IssueStatus })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              >
                <option value="open">対応中 (Open)</option>
                <option value="pending">回答待ち</option>
                <option value="resolved">解決済み (Resolved)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">解決策・実施した対処内容</label>
            <textarea
              rows={2}
              value={form.resolution || ''}
              onChange={(e) => setForm({ ...form, resolution: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 特注L字アタッチメントに変更して干渉を回避する方針で合意。"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-3 border-t border-[#ece8df] dark:border-[#3c3934]">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] rounded font-medium cursor-pointer"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-rose-700 hover:bg-rose-600 text-white dark:bg-[#c33b32] rounded font-medium cursor-pointer"
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ======================= Decision Modal =======================
interface DecisionModalProps {
  isOpen: boolean;
  initialData: DecisionItem | null;
  onSave: (decision: DecisionItem) => void;
  onClose: () => void;
}

export const DecisionModal: React.FC<DecisionModalProps> = ({
  isOpen,
  initialData,
  onSave,
  onClose,
}) => {
  const [form, setForm] = useState<Partial<DecisionItem>>({});

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        date: new Date().toISOString().slice(0, 10),
        decisionMaker: '',
        topic: '',
        decision: '',
        reason: '',
        impact: '',
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.topic?.trim() || !form.decision?.trim() || !form.date) return;
    const dec: DecisionItem = {
      id: form.id || 'dec_' + Date.now(),
      date: form.date,
      decisionMaker: form.decisionMaker?.trim() || '',
      topic: form.topic.trim(),
      decision: form.decision.trim(),
      reason: form.reason?.trim() || '',
      impact: form.impact?.trim() || '',
    };
    onSave(dec);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-lg rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col max-h-[95vh] shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">
            {initialData ? '決定事項の編集' : '決定事項・判断の記録'}
          </h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-3 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
                決定日 <span className="text-rose-600">*</span>
              </label>
              <input
                type="date"
                required
                value={form.date || ''}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
                決定者 (誰が決めたか) <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={form.decisionMaker || ''}
                onChange={(e) => setForm({ ...form, decisionMaker: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
                placeholder="例: 庁舎管理課長決裁 / 部長承認"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
              議題・テーマ <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              required
              value={form.topic || ''}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 多言語ピクトグラムの採用言語および色覚UD規格の選定"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
              決定した内容 <span className="text-rose-600">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={form.decision || ''}
              onChange={(e) => setForm({ ...form, decision: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: JIS規格のユニバーサルデザインを採用し、言語表記は日英中韓の4言語併記とすることを決定。"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">決定理由・検討した代替案</label>
            <textarea
              rows={2}
              value={form.reason || ''}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 5言語案も検討したが文字サイズが小さくなり視認性が損なわれるため、上位4言語に絞り込み。"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">波及影響・他部署への連絡事項</label>
            <input
              type="text"
              value={form.impact || ''}
              onChange={(e) => setForm({ ...form, impact: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 広報広聴課の多言語パンフレットと用語統一を図る必要あり"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-3 border-t border-[#ece8df] dark:border-[#3c3934]">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] rounded font-medium cursor-pointer"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] rounded font-medium cursor-pointer"
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ======================= Deliverable Modal =======================
interface DeliverableModalProps {
  isOpen: boolean;
  initialData: DeliverableItem | null;
  onSave: (deliv: DeliverableItem) => void;
  onClose: () => void;
}

export const DeliverableModal: React.FC<DeliverableModalProps> = ({
  isOpen,
  initialData,
  onSave,
  onClose,
}) => {
  const [form, setForm] = useState<Partial<DeliverableItem>>({});

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        name: '',
        dueDate: '',
        status: 'not_started',
        acceptanceCriteria: '',
        owner: '',
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name?.trim()) return;
    const deliv: DeliverableItem = {
      id: form.id || 'deliv_' + Date.now(),
      name: form.name.trim(),
      dueDate: form.dueDate || '',
      status: (form.status as DeliverableStatus) || 'not_started',
      acceptanceCriteria: form.acceptanceCriteria?.trim() || '',
      owner: form.owner?.trim() || '',
      description: form.description?.trim() || '',
    };
    onSave(deliv);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-md rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">
            {initialData ? '成果物の編集' : '成果物・納品物の登録'}
          </h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-3 text-xs">
          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
              成果物名 <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name || ''}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 庁舎案内サイン施工完成物及び検査調書"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">完成・納品期日</label>
              <input
                type="date"
                value={form.dueDate || ''}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">状態</label>
              <select
                value={form.status || 'not_started'}
                onChange={(e) => setForm({ ...form, status: e.target.value as DeliverableStatus })}
                className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              >
                <option value="not_started">未作成</option>
                <option value="drafting">作成・施工中</option>
                <option value="review">検収・確認中</option>
                <option value="accepted">検収完了 (受入済)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">
              受入条件・検収基準 (何を確認してOKとするか)
            </label>
            <textarea
              rows={2}
              value={form.acceptanceCriteria || ''}
              onChange={(e) => setForm({ ...form, acceptanceCriteria: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 設計図書通りの取付強度、誤字脱字なし、点字突起寸法の基準適合。"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-[#8c8880] mb-1">作成責任者 / 納入事業者</label>
            <input
              type="text"
              value={form.owner || ''}
              onChange={(e) => setForm({ ...form, owner: e.target.value })}
              className="w-full px-2.5 py-1.5 bg-[#fcfbfa] dark:bg-[#1e1d1a] border border-[#d2ccbf] dark:border-[#3c3934] rounded text-neutral-900 dark:text-[#dcd8d3]"
              placeholder="例: 株式会社○○工芸 / 施設係"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-3 border-t border-[#ece8df] dark:border-[#3c3934]">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] rounded font-medium cursor-pointer"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] rounded font-medium cursor-pointer"
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ======================= Snapshots Modal =======================
interface SnapshotsModalProps {
  isOpen: boolean;
  snapshots: Snapshot[];
  onTakeSnapshot: () => void;
  onRestore: (snap: Snapshot) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}

export const SnapshotsModal: React.FC<SnapshotsModalProps> = ({
  isOpen,
  snapshots,
  onTakeSnapshot,
  onRestore,
  onDelete,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-xl rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col max-h-[90vh] shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">保存世代・スナップショット履歴</h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer">✕</button>
        </div>
        <div className="p-5 overflow-y-auto space-y-4 text-xs">
          <div className="flex items-center justify-between bg-[#f6f4f0] dark:bg-[#1e1d1a] p-3 rounded border border-[#dad5cc] dark:border-[#3c3934]">
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">現在の状態を手動スナップショットとして保存</p>
              <p className="text-[11px] text-neutral-500 dark:text-[#8c8880]">仕様変更前や決裁前の節目に記録を残せます</p>
            </div>
            <button
              onClick={onTakeSnapshot}
              className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-[#3692e7] dark:hover:bg-[#257ac9] font-medium rounded shadow-xs cursor-pointer transition"
            >
              手動保存
            </button>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-700 dark:text-[#8c8880] mb-2">保存されている世代一覧 (ブラウザ内IndexedDB)</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {snapshots.length === 0 ? (
                <p className="text-neutral-400 dark:text-[#8c8880] py-4 text-center text-xs">保存された世代はありません</p>
              ) : (
                snapshots.map((snap) => (
                  <div
                    key={snap.snapshotId}
                    className="p-3 bg-[#f6f4f0] dark:bg-[#1e1d1a] border border-[#dad5cc] dark:border-[#3c3934] rounded flex items-center justify-between hover:bg-[#edebe6] dark:hover:bg-[#302e2b] transition"
                  >
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white text-xs">
                        {snap.memo || snap.projectName}
                      </div>
                      <div className="text-[10px] text-neutral-500 dark:text-[#8c8880] font-mono">
                        {new Date(snap.createdAt).toLocaleString('ja-JP')}
                      </div>
                    </div>
                    <div className="flex space-x-1.5">
                      <button
                        onClick={() => onRestore(snap)}
                        className="px-2 py-1 bg-neutral-900 dark:bg-[#3692e7] text-white rounded text-[10px] font-medium transition cursor-pointer"
                      >
                        復元
                      </button>
                      <button
                        onClick={() => onDelete(snap.snapshotId)}
                        className="px-2 py-1 text-neutral-500 hover:text-rose-600 dark:text-[#8c8880] dark:hover:text-rose-400 text-[10px] cursor-pointer"
                      >
                        削除
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="p-3 bg-[#f6f4f0] dark:bg-[#201e1b] border-t border-[#dad5cc] dark:border-[#3c3934] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#f0ede6] dark:bg-[#302e2b] text-neutral-700 dark:text-[#dcd8d3] rounded font-medium cursor-pointer"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

// ======================= Settings Modal =======================
interface SettingsModalProps {
  isOpen: boolean;
  storageUsage: string;
  onClearAll: () => void;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  storageUsage,
  onClearAll,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#262421] w-full max-w-lg rounded border border-[#dad5cc] dark:border-[#3c3934] overflow-hidden flex flex-col shadow-xl">
        <div className="px-5 py-3.5 bg-[#f6f4f0] dark:bg-[#201e1b] border-b border-[#dad5cc] dark:border-[#3c3934] flex items-center justify-between">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">システム設定・データ保護方針</h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer">✕</button>
        </div>
        <div className="p-5 space-y-4 text-xs text-neutral-800 dark:text-[#dcd8d3] leading-relaxed">
          <div className="bg-[#f6f4f0] dark:bg-[#1e1d1a] border border-[#dad5cc] dark:border-[#3c3934] p-3 rounded">
            <p className="font-semibold text-neutral-900 dark:text-white">完全ローカル・通信ゼロ保証</p>
            <p className="text-[11px] text-neutral-600 dark:text-[#8c8880] mt-0.5">
              外部サーバーへのデータ送信は一切行いません。入力内容はすべてお使いのブラウザ内部（IndexedDB）のみに保持されるため、行政内部の機密・検討中情報が漏洩するリスクはありません。
            </p>
          </div>

          <div className="border-t border-[#ece8df] dark:border-[#3c3934] pt-3">
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">バックアップについての注意</h4>
            <p className="text-neutral-600 dark:text-[#8c8880] text-[11px]">
              ブラウザのCookieやサイトデータを完全消去するとデータが消失する可能性があります。重要な業務情報は定期的に「保存」ボタンからJSONファイルとしてPCや庁内共有サーバーへ書き出してください。
            </p>
          </div>

          <div className="border-t border-[#ece8df] dark:border-[#3c3934] pt-3">
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">ストレージ使用状況</h4>
            <p className="text-neutral-500 dark:text-[#8c8880] font-mono text-[11px]">{storageUsage}</p>
          </div>

          <div className="border-t border-[#ece8df] dark:border-[#3c3934] pt-3 flex justify-between items-center">
            <span className="text-rose-700 dark:text-[#c33b32] font-medium">全データ初期化</span>
            <button
              onClick={onClearAll}
              className="px-3 py-1.5 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 hover:bg-rose-100 border border-rose-200 dark:border-rose-900 rounded font-medium cursor-pointer"
            >
              端末のデータを消去
            </button>
          </div>
        </div>
        <div className="p-3 bg-[#f6f4f0] dark:bg-[#201e1b] border-t border-[#dad5cc] dark:border-[#3c3934] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-800 text-white rounded font-medium cursor-pointer"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
