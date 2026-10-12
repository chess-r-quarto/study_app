import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  desc: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  desc,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-[#ffffff] dark:bg-[#262421] border border-[#d8d6d2] dark:border-[#363431] rounded p-6 max-w-md w-full shadow-2xl space-y-4 text-[#2d2b28] dark:text-[#c4c3be]">
        <h3 className="text-base font-bold text-[#111111] dark:text-white">{title}</h3>
        <p className="text-xs text-[#6e6a64] dark:text-[#8a8882] leading-relaxed">{desc}</p>
        <div className="flex justify-end space-x-3 pt-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-xs font-semibold rounded border border-[#d8d6d2] dark:border-[#363431] hover:bg-[#f7f6f5] dark:hover:bg-[#302e2b] transition-colors cursor-pointer text-[#2d2b28] dark:text-[#c4c3be]"
          >
            キャンセル
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-xs font-semibold rounded bg-[#52801e] dark:bg-[#629924] text-white hover:opacity-90 transition-opacity cursor-pointer shadow"
          >
            実行
          </button>
        </div>
      </div>
    </div>
  );
};
