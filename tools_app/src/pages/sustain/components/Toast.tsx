import React from 'react';
import { ToastState } from '../types';

interface ToastProps {
  toast: ToastState | null;
}

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  if (!toast) return null;

  const typeStyle =
    toast.type === 'success'
      ? 'bg-[#52801e] dark:bg-[#629924] text-white border-transparent'
      : toast.type === 'error'
      ? 'bg-red-700 text-white border-transparent'
      : 'bg-[#ffffff] dark:bg-[#262421] text-[#2d2b28] dark:text-[#c4c3be] border-[#d8d6d2] dark:border-[#363431]';

  return (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-300 px-4 py-3 rounded border text-xs font-semibold shadow-xl max-w-md ${typeStyle}`}
    >
      {toast.message}
    </div>
  );
};
