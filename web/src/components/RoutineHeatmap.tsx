import type { CommitRecord, RoutineName } from '../types/schema';

interface Props {
  commits: CommitRecord[];
  days?: number;
}

const ROUTINE_ORDER: RoutineName[] = [
  'pre-market',
  'market-open',
  'midday',
  'daily-summary',
  'weekly-review',
];

function ymd(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * Grid: rows = routine, columns = day (most recent on right).
 * Filled cell = routine committed that day. Unfilled cell on a weekday
 * past the fire time = skipped.
 */
export default function RoutineHeatmap({ commits, days = 28 }: Props) {
  const now = new Date();
  const byDay = new Map<string, Set<RoutineName>>();
  for (const c of commits) {
    if (!c.routine) continue;
    const day = c.ts.slice(0, 10);
    if (!byDay.has(day)) byDay.set(day, new Set());
    byDay.get(day)!.add(c.routine as RoutineName);
  }

  const cols: Array<{ date: string; weekday: number }> = [];
  for (let back = days - 1; back >= 0; back--) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - back));
    cols.push({ date: ymd(d), weekday: d.getUTCDay() });
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate" style={{ borderSpacing: 2 }}>
        <thead>
          <tr>
            <th className="sticky left-0 bg-bg-surface/90 backdrop-blur z-10 px-2 py-1 text-xs font-medium text-ink-muted text-right">
              Routine
            </th>
            {cols.map((c) => (
              <th key={c.date} className="px-0 py-1 text-[9px] font-normal text-ink-dim">
                {c.weekday === 1 ? c.date.slice(5) : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROUTINE_ORDER.map((routine) => (
            <tr key={routine}>
              <td className="sticky left-0 bg-bg-surface/90 backdrop-blur z-10 px-2 py-1 text-xs text-ink-muted text-right whitespace-nowrap">
                {routine}
              </td>
              {cols.map((c) => {
                const ran = byDay.get(c.date)?.has(routine) ?? false;
                const isWeekend = c.weekday === 0 || c.weekday === 6;
                const skip = routine === 'weekly-review' && c.weekday !== 5;
                let bg = 'bg-line/40';
                let title = `${routine} on ${c.date}: not run`;
                if (ran) {
                  bg = 'bg-pos/80';
                  title = `${routine} on ${c.date}: committed`;
                } else if (isWeekend || skip) {
                  bg = 'bg-bg-muted/40';
                  title = `${routine} on ${c.date}: not scheduled`;
                }
                return (
                  <td key={c.date} className="p-0">
                    <div
                      className={`h-4 w-4 rounded-sm ${bg}`}
                      title={title}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 flex items-center gap-3 text-[11px] text-ink-muted">
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-sm bg-pos/80" /> ran
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-sm bg-line/40" /> missed
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-sm bg-bg-muted/40" /> not scheduled
        </span>
      </div>
    </div>
  );
}
