import React from 'react';
import type { TaskItem, Milestone } from '../types';

interface Props {
  tasks: TaskItem[];
  milestones: Milestone[];
  scale: 'day' | 'week' | 'month';
  isDark: boolean;
  onSelectTask: (task: TaskItem) => void;
  onSelectMilestone: (ms: Milestone) => void;
}

export const GanttChart: React.FC<Props> = ({
  tasks,
  milestones,
  scale,
  isDark,
  onSelectTask,
  onSelectMilestone,
}) => {
  if (tasks.length === 0 && milestones.length === 0) {
    return (
      <div className="py-16 text-center text-neutral-400 dark:text-[#8c8880] text-xs">
        タスクまたはマイルストーンを登録すると、工程表が自動描画されます。
      </div>
    );
  }

  const dates: Date[] = [];
  tasks.forEach((t) => {
    if (t.startDate) dates.push(new Date(t.startDate));
    if (t.endDate) dates.push(new Date(t.endDate));
  });
  milestones.forEach((m) => {
    if (m.date) dates.push(new Date(m.date));
  });
  dates.push(new Date());

  dates.sort((a, b) => a.getTime() - b.getTime());
  const minDate = new Date(dates[0]);
  const maxDate = new Date(dates[dates.length - 1]);

  minDate.setDate(minDate.getDate() - 2);
  maxDate.setDate(maxDate.getDate() + 5);

  const totalDays = Math.max(14, Math.round((maxDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24)));

  let dayWidth = 32;
  if (scale === 'week') dayWidth = 16;
  if (scale === 'month') dayWidth = 8;

  const chartWidth = Math.max(900, totalDays * dayWidth);

  const today = new Date();
  const todayDiffDays = (today.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24);
  const todayX = todayDiffDays >= 0 && todayDiffDays <= totalDays ? 240 + todayDiffDays * dayWidth : -1;

  // Generate header columns
  const dayCols = [];
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(minDate);
    d.setDate(d.getDate() + i);
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    const isFirst = d.getDate() === 1;
    const dayNum = d.getDate();

    let label: number | string = dayNum;
    if (scale === 'week' && d.getDay() !== 1) label = '';
    if (scale === 'month' && !isFirst) label = '';

    dayCols.push(
      <div
        key={i}
        style={{ width: `${dayWidth}px` }}
        className={`flex-shrink-0 text-center py-1 border-r border-[#dad5cc] dark:border-[#3c3934] ${
          isWeekend
            ? isDark
              ? 'bg-[#181714] text-neutral-500'
              : 'bg-[#e8e4db] text-neutral-500'
            : 'text-neutral-700 dark:text-[#8c8880]'
        }`}
      >
        {isFirst && (
          <div className="text-[9px] font-bold text-neutral-900 dark:text-white">
            {d.getMonth() + 1}月
          </div>
        )}
        <div>{label}</div>
      </div>
    );
  }

  return (
    <div
      style={{ width: `${chartWidth}px` }}
      className="relative min-w-[900px] select-none pb-6"
    >
      {/* Header */}
      <div className="flex border-b border-[#dad5cc] dark:border-[#3c3934] bg-[#f6f4f0] dark:bg-[#1e1d1a] text-[10px] font-mono sticky top-0 z-10">
        <div className="w-60 flex-shrink-0 p-2 border-r border-[#dad5cc] dark:border-[#3c3934] font-semibold text-neutral-700 dark:text-[#8c8880] bg-[#f6f4f0] dark:bg-[#1e1d1a] sticky left-0 z-20">
          タスク / マイルストーン
        </div>
        <div className="flex-1 flex">{dayCols}</div>
      </div>

      {/* Rows */}
      <div className="relative divide-y divide-[#ece8df] dark:divide-[#3c3934]">
        {/* Tasks */}
        {tasks.map((t) => {
          let bar = null;
          if (t.startDate && t.endDate) {
            const startDiff = (new Date(t.startDate).getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24);
            const duration = Math.max(
              1,
              (new Date(t.endDate).getTime() - new Date(t.startDate).getTime()) / (1000 * 60 * 60 * 24) + 1
            );
            const left = Math.max(0, startDiff * dayWidth);
            const width = Math.max(8, duration * dayWidth);

            bar = (
              <div
                style={{ left: `${left}px`, width: `${width}px` }}
                className="absolute top-2 h-5.5 bg-neutral-800 dark:bg-[#3692e7] rounded-xs shadow-xs flex items-center px-1.5 text-[10px] text-white font-medium truncate cursor-pointer hover:opacity-90 transition overflow-hidden"
                onClick={() => onSelectTask(t)}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 bg-neutral-950/30 dark:bg-white/20"
                  style={{ width: `${t.progress}%` }}
                />
                <span className="relative z-10 truncate">
                  {t.name} ({t.progress}%)
                </span>
              </div>
            );
          }

          return (
            <div
              key={t.id}
              className="flex h-9.5 items-center hover:bg-[#f6f4f0] dark:hover:bg-[#302e2b] transition"
            >
              <div className="w-60 flex-shrink-0 px-2.5 py-1 border-r border-[#dad5cc] dark:border-[#3c3934] bg-white dark:bg-[#262421] sticky left-0 z-10 truncate flex items-center justify-between text-xs">
                <span
                  className="truncate font-medium text-neutral-900 dark:text-[#dcd8d3]"
                  title={t.name}
                >
                  {t.name}
                </span>
                <span className="text-[10px] text-neutral-400 font-mono flex-shrink-0 ml-1">
                  {t.progress}%
                </span>
              </div>
              <div className="flex-1 relative h-full">{bar}</div>
            </div>
          );
        })}

        {/* Milestones */}
        {milestones.map((m) => {
          let marker = null;
          if (m.date) {
            const diff = (new Date(m.date).getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24);
            const left = Math.max(0, diff * dayWidth - 6);

            marker = (
              <div
                style={{ left: `${left}px` }}
                className="absolute top-2 w-5 h-5 flex items-center justify-center cursor-pointer group"
                title={`${m.name} (${m.date})`}
                onClick={() => onSelectMilestone(m)}
              >
                <div className="w-3.5 h-3.5 bg-amber-600 dark:bg-[#bf811d] rotate-45 border border-white dark:border-[#262421] shadow-xs" />
                <span className="absolute left-5 text-[10px] font-bold text-amber-900 dark:text-amber-200 bg-white dark:bg-[#262421] px-1.5 py-0.5 rounded border border-[#dad5cc] dark:border-[#3c3934] whitespace-nowrap hidden group-hover:block z-30">
                  {m.name} ({m.date})
                </span>
              </div>
            );
          }

          return (
            <div
              key={m.id}
              className="flex h-9.5 items-center bg-[#fdfaf5] dark:bg-[#1a1916] hover:bg-[#f8f4ec] dark:hover:bg-[#302e2b] transition"
            >
              <div className="w-60 flex-shrink-0 px-2.5 py-1 border-r border-[#dad5cc] dark:border-[#3c3934] bg-[#fdfaf5] dark:bg-[#1a1916] sticky left-0 z-10 truncate flex items-center justify-between text-xs">
                <span className="truncate font-semibold text-amber-900 dark:text-[#bf811d] flex items-center">
                  <span className="w-2 h-2 bg-amber-600 dark:bg-[#bf811d] rotate-45 mr-1.5 flex-shrink-0" />
                  {m.name}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">{m.date}</span>
              </div>
              <div className="flex-1 relative h-full">{marker}</div>
            </div>
          );
        })}
      </div>

      {/* TODAY Line */}
      {todayX >= 240 && (
        <div
          style={{ left: `${todayX}px` }}
          className="absolute top-0 bottom-0 w-px bg-rose-600 z-20 pointer-events-none"
        >
          <div className="bg-rose-600 text-white text-[9px] px-1 py-0.2 rounded absolute -top-3.5 -left-3 font-mono font-bold">
            TODAY
          </div>
        </div>
      )}
    </div>
  );
};
