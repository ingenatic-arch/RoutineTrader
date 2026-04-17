import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import type { OpenPosition } from '../types/schema';

interface Props {
  positions: OpenPosition[];
  groupBy?: 'symbol' | 'assetClass';
  height?: number;
  title?: string;
}

const PALETTE = ['#4ade80', '#60a5fa', '#fbbf24', '#f87171', '#a78bfa', '#34d399', '#fb7185', '#818cf8'];

export default function PositionsPie({ positions, groupBy = 'symbol', height = 240, title }: Props) {
  const totals = new Map<string, number>();
  for (const p of positions) {
    const key = (groupBy === 'assetClass' ? p.assetClass : p.symbol) ?? 'Unknown';
    totals.set(key, (totals.get(key) ?? 0) + (p.weightPct ?? 0));
  }
  const data = [...totals.entries()].map(([name, value]) => ({ name, value }));
  const invested = data.reduce((acc, d) => acc + d.value, 0);

  if (data.length === 0 || invested === 0) {
    return (
      <div className="flex items-center justify-center text-ink-muted" style={{ height }}>
        {title ?? 'No open positions'} — fully in cash.
      </div>
    );
  }

  const cashWeight = Math.max(0, 100 - invested);
  const withCash = [...data, { name: 'Cash', value: cashWeight }];

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={withCash}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="55%"
          outerRadius="85%"
          paddingAngle={2}
          stroke="#0b1018"
          strokeWidth={2}
        >
          {withCash.map((d, i) => (
            <Cell key={i} fill={d.name === 'Cash' ? '#334155' : PALETTE[i % PALETTE.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v: number, n: string) => [`${v.toFixed(1)}%`, n]}
        />
        <Legend wrapperStyle={{ fontSize: 12, color: '#94a3b8' }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
