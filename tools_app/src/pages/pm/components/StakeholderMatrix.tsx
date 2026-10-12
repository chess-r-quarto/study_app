import React from 'react';
import type { Stakeholder } from '../types';

interface Props {
  stakeholders: Stakeholder[];
  isDark: boolean;
  onSelectStakeholder: (sh: Stakeholder) => void;
}

export const StakeholderMatrix: React.FC<Props> = ({
  stakeholders,
  isDark,
  onSelectStakeholder,
}) => {
  return (
    <div className="relative w-full aspect-square max-h-[440px] mx-auto border border-[#dad5cc] dark:border-[#3c3934] rounded bg-[#f6f4f0] dark:bg-[#1c1b18] overflow-hidden flex items-center justify-center select-none">
      <svg className="w-full h-full" viewBox="0 0 500 500">
        {/* Background Quads */}
        <rect
          x="20"
          y="20"
          width="230"
          height="230"
          strokeWidth="1"
          fill={isDark ? '#1f1e1a' : '#f7f6f4'}
          stroke={isDark ? '#363431' : '#dad5cc'}
        />
        <text
          x="30"
          y="45"
          fontSize="11"
          fontWeight="bold"
          fill={isDark ? '#dcd8d3' : '#33312c'}
        >
          満足度を維持 (High P / Low I)
        </text>
        <text
          x="30"
          y="62"
          fontSize="9.5"
          fill={isDark ? '#8c8880' : '#78736a'}
        >
          要点のみ簡潔報告 (例: 財政課・総務部長)
        </text>

        <rect
          x="250"
          y="20"
          width="230"
          height="230"
          strokeWidth="1"
          fill={isDark ? '#26292e' : '#f0f5fa'}
          stroke={isDark ? '#2c3c4f' : '#c7dcee'}
        />
        <text
          x="260"
          y="45"
          fontSize="11"
          fontWeight="bold"
          fill={isDark ? '#3692e7' : '#1d609a'}
        >
          最重要連携 (High P / High I)
        </text>
        <text
          x="260"
          y="62"
          fontSize="9.5"
          fill={isDark ? '#8c8880' : '#78736a'}
        >
          定期協議・意思決定を共有 (例: 主管課長・窓口)
        </text>

        <rect
          x="20"
          y="250"
          width="230"
          height="230"
          strokeWidth="1"
          fill={isDark ? '#1a1916' : '#faf9f8'}
          stroke={isDark ? '#363431' : '#dad5cc'}
        />
        <text
          x="30"
          y="275"
          fontSize="11"
          fontWeight="bold"
          fill={isDark ? '#dcd8d3' : '#33312c'}
        >
          定期監視 (Low P / Low I)
        </text>
        <text
          x="30"
          y="292"
          fontSize="9.5"
          fill={isDark ? '#8c8880' : '#78736a'}
        >
          全体周知のみで対応 (例: 一般来庁者)
        </text>

        <rect
          x="250"
          y="250"
          width="230"
          height="230"
          strokeWidth="1"
          fill={isDark ? '#1d241c' : '#f2f8f0'}
          stroke={isDark ? '#293a26' : '#c8e5c2'}
        />
        <text
          x="260"
          y="275"
          fontSize="11"
          fontWeight="bold"
          fill={isDark ? '#629924' : '#30681f'}
        >
          丁寧な情報提供 (Low P / High I)
        </text>
        <text
          x="260"
          y="292"
          fontSize="9.5"
          fill={isDark ? '#8c8880' : '#78736a'}
        >
          進捗をこまめに共有 (例: 推進協力員)
        </text>

        {/* Center Axis */}
        <line
          x1="20"
          y1="250"
          x2="480"
          y2="250"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          stroke={isDark ? '#4a4640' : '#b8b2a6'}
        />
        <line
          x1="250"
          y1="20"
          x2="250"
          y2="480"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          stroke={isDark ? '#4a4640' : '#b8b2a6'}
        />

        {/* Axis Labels */}
        <text
          x="250"
          y="495"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill={isDark ? '#8c8880' : '#5a564e'}
        >
          関心度 (Interest) → 高い
        </text>
        <text
          x="12"
          y="250"
          textAnchor="middle"
          transform="rotate(-90 12,250)"
          fontSize="10"
          fontWeight="bold"
          fill={isDark ? '#8c8880' : '#5a564e'}
        >
          影響力 (Power) → 強い
        </text>

        {/* Points */}
        <g>
          {stakeholders.map((sh) => {
            const p = Math.max(1, Math.min(5, Number(sh.power) || 3));
            const i = Math.max(1, Math.min(5, Number(sh.interest) || 3));
            const baseX = 30 + ((i - 1) / 4) * 440;
            const baseY = 470 - ((p - 1) / 4) * 440;
            const hash = (sh.id || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const offsetX = (hash % 16) - 8;
            const offsetY = ((hash * 3) % 16) - 8;
            const cx = Math.max(40, Math.min(460, baseX + offsetX));
            const cy = Math.max(40, Math.min(460, baseY + offsetY));

            let fillColor = isDark ? '#3692e7' : '#1d609a';
            if (sh.attitude === 'supportive') fillColor = isDark ? '#629924' : '#2e7d1d';
            if (sh.attitude === 'cautious') fillColor = isDark ? '#bf811d' : '#b06d15';
            if (sh.attitude === 'resistant') fillColor = isDark ? '#c33b32' : '#b82b22';

            const isGap = sh.currentEngagement !== sh.desiredEngagement;

            return (
              <g
                key={sh.id}
                className="cursor-pointer group"
                onClick={() => onSelectStakeholder(sh)}
              >
                {isGap && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="13"
                    fill="none"
                    stroke={isDark ? '#c33b32' : '#b82b22'}
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                  />
                )}
                <circle
                  cx={cx}
                  cy={cy}
                  r="7"
                  fill={fillColor}
                  stroke={isDark ? '#161512' : '#ffffff'}
                  strokeWidth="1.5"
                  className="transition-transform group-hover:scale-125 origin-center"
                />
                <text
                  x={cx + 10}
                  y={cy + 3.5}
                  fontSize="9.5"
                  fontWeight="bold"
                  fill={isDark ? '#dcd8d3' : '#22211e'}
                >
                  {sh.name.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
