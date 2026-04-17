import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import type { ResearchEntry } from '../types/schema';

interface Props {
  research: ResearchEntry[];
  height?: number;
}

const COLORS = { HOLD: '#94a3b8', OPEN: '#4ade80', TRIM: '#fbbf24', OTHER: '#60a5fa' };

export default function DecisionMix({ research, height = 240 }: Props) {
  const tally = { HOLD: 0, OPEN: 0, TRIM: 0, OTHER: 0 };
  for (const r of research) tally[r.decisionKind] += 1;
  const data = Object.entries(tally)
    .filter(([, v]) => v > 0)
    .map(([name, value]) => ({ name, value }));

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center text-ink-muted" style={{ height }}>
        No research entries yet.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
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
          {data.map((d) => (
            <Cell key={d.name} fill={COLORS[d.name as keyof typeof COLORS]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v: number, n: string) => [`${v} day${v === 1 ? '' : 's'}`, n]}
        />
        <Legend wrapperStyle={{ fontSize: 12, color: '#94a3b8' }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
