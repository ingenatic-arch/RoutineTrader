import { useMemo, useState } from 'react';
import type { IssueItem } from '../types/schema';

interface Props {
  issues: IssueItem[];
}

const FILTERS: Array<{ key: 'all' | IssueItem['severity']; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'alert', label: 'Alerts' },
  { key: 'warn', label: 'Warnings' },
  { key: 'info', label: 'Info' },
];

const KIND_LABEL: Record<IssueItem['kind'], string> = {
  'missed-routine': 'missed routine',
  'stop-loss': 'stop-loss',
  'thesis-break': 'thesis broken',
  event: 'event',
  'cap-warning': 'cap warning',
};

function severityChip(s: IssueItem['severity']) {
  if (s === 'alert') return 'chip-neg';
  if (s === 'warn') return 'chip-warn';
  return 'chip-info';
}

export default function IssueList({ issues }: Props) {
  const [filter, setFilter] = useState<'all' | IssueItem['severity']>('all');
  const filtered = useMemo(
    () => (filter === 'all' ? issues : issues.filter((i) => i.severity === filter)),
    [issues, filter],
  );

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
              filter === f.key
                ? 'bg-info/20 text-info ring-1 ring-info/40'
                : 'bg-bg-muted/60 text-ink-muted hover:text-ink'
            }`}
          >
            {f.label}
            <span className="ml-1.5 text-ink-dim">
              {f.key === 'all' ? issues.length : issues.filter((i) => i.severity === f.key).length}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card p-8 text-center text-ink-muted">
          No issues in this view. All systems go.
        </div>
      ) : (
        <ul className="space-y-2">
          {filtered.map((i) => (
            <li key={i.id} className="card p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={severityChip(i.severity)}>{i.severity}</span>
                    <span className="chip-muted">{KIND_LABEL[i.kind] ?? i.kind}</span>
                    <span className="text-xs text-ink-dim">{i.ts.slice(0, 16).replace('T', ' ')}Z</span>
                  </div>
                  <div className="mt-2 font-medium">{i.title}</div>
                  <div className="mt-1 text-sm text-ink-muted">{i.detail}</div>
                </div>
                {i.source && (
                  <div className="text-[11px] text-ink-dim whitespace-nowrap">{i.source}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
