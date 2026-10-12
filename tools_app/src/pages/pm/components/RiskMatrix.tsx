import React from 'react';
import type { RiskItem } from '../types';

interface Props {
  risks: RiskItem[];
  isDark: boolean;
  onSelectRisk: (risk: RiskItem) => void;
}

export const RiskMatrix: React.FC<Props> = ({ risks, isDark, onSelectRisk }) => {
  const cellW = 40;
  const cellH = 24;
  const startX = 35;
  const startY = 15;

  const cells = [];
  for (let prob = 1; prob <= 5; prob++) {
    for (let imp = 1; imp <= 5; imp++) {
      const x = startX + (imp - 1) * cellW;
      const y = startY + (5 - prob) * cellH;
      const score = prob * imp;

      let fill = isDark ? '#1e241c' : '#f0f6ee';
      if (score >= 8) fill = isDark ? '#2e271a' : '#fcf5e5';
      if (score >= 15) fill = isDark ? '#311c1c' : '#fdeeed';

      cells.push(
        <rect
          key={`${prob}-${imp}`}
          x={x}
          y={y}
          width={cellW - 2}
          height={cellH - 2}
          fill={fill}
          rx="1"
          stroke={isDark ? '#3c3934' : '#dad5cc'}
          strokeWidth="0.5"
        />
      );
    }
  }

  return (
    <div className="w-full flex items-center justify-center select-none">
      <svg className="w-full max-w-[340px] aspect-[5/3]" viewBox="0 0 250 150">
        {cells}

        {/* Labels */}
        <text
          x={startX + (5 * cellW) / 2}
          y={startY + 5 * cellH + 14}
          textAnchor="middle"
          fontSize="8.5"
          fill={isDark ? '#8c8880' : '#6b6860'}
        >
          影響度 (Impact 1 → 5)
        </text>

        <text
          x="10"
          y={startY + (5 * cellH) / 2}
          textAnchor="middle"
          transform={`rotate(-90 10, ${startY + (5 * cellH) / 2})`}
          fontSize="8.5"
          fill={isDark ? '#8c8880' : '#6b6860'}
        >
          発生確率 (Prob 1 → 5)
        </text>

        {/* Risk points */}
        {risks.map((r) => {
          const imp = Math.max(1, Math.min(5, Number(r.impact) || 3));
          const prob = Math.max(1, Math.min(5, Number(r.probability) || 3));
          const cx = startX + (imp - 1) * cellW + cellW / 2 - 1;
          const cy = startY + (5 - prob) * cellH + cellH / 2 - 1;

          return (
            <circle
              key={r.id}
              cx={cx}
              cy={cy}
              r="4.5"
              fill={isDark ? '#c33b32' : '#b82b22'}
              stroke={isDark ? '#161512' : '#ffffff'}
              strokeWidth="1.5"
              className="cursor-pointer hover:scale-125 transition-transform"
              onClick={() => onSelectRisk(r)}
            >
              <title>{`${r.title} (スコア: ${prob * imp})`}</title>
            </circle>
          );
        })}
      </svg>
    </div>
  );
};
