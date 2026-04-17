import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from 'recharts';
import type { WeeklyReview } from '../types/schema';

interface Props {
  weekly: WeeklyReview[];
  height?: number;
}

export default function AlphaVsSpx({ weekly, height = 280 }: Props) {
  const data = [...weekly]
    .reverse()
    .map((w) => ({
      label: w.weekStart.slice(5),
      portfolio: Number.isNaN(w.returnPct) ? 0 : w.returnPct,
      spx: Number.isNaN(w.spxPct) ? 0 : w.spxPct,
      alpha: Number.isNaN(w.alphaPct) ? 0 : w.alphaPct,
    }));

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center text-ink-muted" style={{ height }}>
        No weekly reviews yet — the first Friday run will populate this chart.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="label" stroke="#64748b" tick={{ fontSize: 11 }} />
        <YAxis stroke="#64748b" tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
        <ReferenceLine y={0} stroke="#374151" />
        <Tooltip
          contentStyle={{
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v: number, name: string) => [`${v >= 0 ? '+' : ''}${v.toFixed(2)}%`, name]}
          labelStyle={{ color: '#94a3b8' }}
        />
        <Legend wrapperStyle={{ fontSize: 12, color: '#94a3b8' }} />
        <Bar dataKey="portfolio" name="Portfolio" fill="#4ade80" radius={[3, 3, 0, 0]} />
        <Bar dataKey="spx" name="S&P 500" fill="#60a5fa" radius={[3, 3, 0, 0]} />
        <Bar dataKey="alpha" name="Alpha" radius={[3, 3, 0, 0]}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.alpha >= 0 ? '#fbbf24' : '#f87171'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
