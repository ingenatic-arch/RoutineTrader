import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from 'recharts';
import type { EodSnapshot } from '../types/schema';

interface Props {
  snapshots: EodSnapshot[];
  height?: number;
}

export default function DayPnlBars({ snapshots, height = 260 }: Props) {
  const data = snapshots.map((s) => ({ day: `D${s.day}`, pnl: s.dayPnlPct }));

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center text-ink-muted" style={{ height }}>
        No daily P&L data yet.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 11 }} />
        <YAxis stroke="#64748b" tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
        <ReferenceLine y={0} stroke="#374151" />
        <Tooltip
          contentStyle={{
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v: number) => [`${v >= 0 ? '+' : ''}${v.toFixed(2)}%`, 'Day P&L']}
          labelStyle={{ color: '#94a3b8' }}
          cursor={{ fill: '#1e293b', fillOpacity: 0.5 }}
        />
        <Bar dataKey="pnl" radius={[3, 3, 0, 0]}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.pnl >= 0 ? '#4ade80' : '#f87171'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
