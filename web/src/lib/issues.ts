import type {
  CommitRecord,
  EventEntry,
  IssueItem,
  RoutineName,
  TradeEntry,
} from '../types/schema';

const ROUTINE_SCHEDULE: Array<{ name: RoutineName; hourUtc: number; minuteUtc: number; weekdayOnly: boolean; fridayOnly?: boolean }> = [
  { name: 'pre-market', hourUtc: 12, minuteUtc: 0, weekdayOnly: true },
  { name: 'market-open', hourUtc: 13, minuteUtc: 35, weekdayOnly: true },
  { name: 'midday', hourUtc: 16, minuteUtc: 30, weekdayOnly: true },
  { name: 'daily-summary', hourUtc: 20, minuteUtc: 15, weekdayOnly: true },
  { name: 'weekly-review', hourUtc: 20, minuteUtc: 30, weekdayOnly: true, fridayOnly: true },
];

function isWeekday(d: Date): boolean {
  const day = d.getUTCDay();
  return day >= 1 && day <= 5;
}

function isFriday(d: Date): boolean {
  return d.getUTCDay() === 5;
}

function ymd(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * For each (weekday × routine) in the last `days` calendar days whose
 * scheduled fire time is in the past, find a matching commit. Missing
 * matches become issues.
 */
function detectMissedRoutines(
  commits: CommitRecord[],
  now: Date,
  days = 14,
): IssueItem[] {
  const out: IssueItem[] = [];
  const byDay = new Map<string, Set<RoutineName>>();
  let firstRoutineDay: string | null = null;
  for (const c of commits) {
    if (!c.routine) continue;
    const day = c.ts.slice(0, 10);
    if (!firstRoutineDay || day < firstRoutineDay) firstRoutineDay = day;
    if (!byDay.has(day)) byDay.set(day, new Set());
    byDay.get(day)!.add(c.routine);
  }
  if (!firstRoutineDay) return out;

  for (let back = 0; back < days; back++) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - back));
    if (!isWeekday(d)) continue;
    const dayKey = ymd(d);
    if (dayKey < firstRoutineDay) continue;
    const ran = byDay.get(dayKey) ?? new Set<RoutineName>();

    for (const spec of ROUTINE_SCHEDULE) {
      if (spec.weekdayOnly && !isWeekday(d)) continue;
      if (spec.fridayOnly && !isFriday(d)) continue;
      const fireAt = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), spec.hourUtc, spec.minuteUtc));
      if (fireAt > now) continue;
      if (!ran.has(spec.name)) {
        out.push({
          id: `missed-${spec.name}-${dayKey}`,
          severity: spec.name === 'daily-summary' ? 'alert' : 'warn',
          kind: 'missed-routine',
          ts: fireAt.toISOString(),
          title: `${spec.name} did not run on ${dayKey}`,
          detail: `Expected a routine commit for ${spec.name} on ${dayKey} (${d.toUTCString()}); none was found.`,
          source: 'git commit history',
        });
      }
    }
  }
  return out;
}

function detectTradeIssues(trades: TradeEntry[]): IssueItem[] {
  const out: IssueItem[] = [];
  for (const t of trades) {
    const reason = (t.reason ?? '').toLowerCase();
    const pnl = t.pnlPct ?? 0;
    const id = `trade-${t.symbol}-${t.date ?? ''}`;
    if (reason.includes('stop')) {
      out.push({
        id: `${id}-stop`,
        severity: 'alert',
        kind: 'stop-loss',
        ts: t.date ? `${t.date}T20:00:00Z` : new Date().toISOString(),
        title: `${t.symbol} hit stop-loss`,
        detail: `Closed at ${pnl.toFixed(1)}% (${t.reason ?? 'stop'}).`,
        source: 'TRADE-LOG.md',
      });
    } else if (/thesis/.test(reason)) {
      out.push({
        id: `${id}-thesis`,
        severity: 'warn',
        kind: 'thesis-break',
        ts: t.date ? `${t.date}T16:30:00Z` : new Date().toISOString(),
        title: `${t.symbol} thesis broken`,
        detail: `Closed on thesis break at ${pnl.toFixed(1)}%.`,
        source: 'TRADE-LOG.md',
      });
    }
  }
  return out;
}

function eventsToIssues(events: EventEntry[]): IssueItem[] {
  return events
    .filter((e) => e.status !== 'ok')
    .map((e) => ({
      id: `event-${e.ts}-${e.routine}`,
      severity: e.status === 'warn' ? 'warn' : 'alert',
      kind: 'event',
      ts: e.ts,
      title: `${e.routine}: ${e.status}`,
      detail: e.message,
      source: 'EVENTS-LOG.md',
    }));
}

export function detectIssues(args: {
  commits: CommitRecord[];
  events: EventEntry[];
  trades: TradeEntry[];
  now?: Date;
}): IssueItem[] {
  const now = args.now ?? new Date();
  const issues = [
    ...eventsToIssues(args.events),
    ...detectTradeIssues(args.trades),
    ...detectMissedRoutines(args.commits, now),
  ];
  issues.sort((a, b) => b.ts.localeCompare(a.ts));
  return issues;
}
