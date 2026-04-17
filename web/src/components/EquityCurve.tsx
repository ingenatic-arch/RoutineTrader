import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { EodSnapshot } from '../types/schema';

interface Props {
  snapshots: EodSnapshot[];
  height?: number;
  compact?: boolean;
}

export default function EquityCurve({ snapshots, height = 280, compact = false }: Props) {
  const data = snapshots.map((s) => ({
    day: `D${s.day}`,
    equity: s.equityPct,
  }));

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center text-ink-muted" style={{ height }}>
        No snapshots yet — waiting for the first daily-summary to run.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: compact ? -28 : 0 }}>
        <defs>
          <linearGradient id="equityFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#4ade80" stopOpacity={0} />
          </linearGradient>
        </defs>
        {!compact && <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />}
        <XAxis
          dataKey="day"
          stroke="#64748b"
          tick={{ fontSize: 11 }}
          hide={compact}
        />
        <YAxis
          stroke="#64748b"
          tick={{ fontSize: 11 }}
          tickFormatter={(v) => `${v}%`}
          domain={['dataMin - 1', 'dataMax + 1']}
          hide={compact}
        />
        <Tooltip
          contentStyle={{
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v: number) => [`${v.toFixed(2)}%`, 'Equity']}
          labelStyle={{ color: '#94a3b8' }}
        />
        <Area
          type="monotone"
          dataKey="equity"
          stroke="#4ade80"
          strokeWidth={2}
          fill="url(#equityFill)"
          isAnimationActive={!compact}
          dot={data.length < 30 && !compact}
          activeDot={{ r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
