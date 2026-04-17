import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { EodSnapshot } from '../types/schema';

interface Props {
  snapshots: EodSnapshot[];
  height?: number;
}

/**
 * Cash % over time with the 15–25% target band from TRADING-STRATEGY.md
 * overlayed. Above the band = conservative dry-powder posture; below = too
 * fully invested relative to the rulebook.
 */
export default function CashBand({ snapshots, height = 260 }: Props) {
  const data = snapshots.map((s) => ({ day: `D${s.day}`, cash: s.cashPct }));

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center text-ink-muted" style={{ height }}>
        No cash history yet.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 11 }} />
        <YAxis
          stroke="#64748b"
          tick={{ fontSize: 11 }}
          tickFormatter={(v) => `${v}%`}
          domain={[0, 105]}
        />
        <ReferenceArea y1={15} y2={25} fill="#60a5fa" fillOpacity={0.12} stroke="none" />
        <ReferenceLine y={15} stroke="#60a5fa" strokeDasharray="4 4" strokeOpacity={0.5} />
        <ReferenceLine y={25} stroke="#60a5fa" strokeDasharray="4 4" strokeOpacity={0.5} />
        <Tooltip
          contentStyle={{
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v: number) => [`${v.toFixed(1)}%`, 'Cash']}
          labelStyle={{ color: '#94a3b8' }}
        />
        <Line
          type="monotone"
          dataKey="cash"
          stroke="#60a5fa"
          strokeWidth={2}
          dot={data.length < 30}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
