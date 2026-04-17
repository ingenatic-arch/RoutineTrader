import { useEffect, useState } from 'react';
import { relativeTime } from './format';

interface BuildInfo {
  ts: string;
  headSha: string | null;
  headMessage: string | null;
}

export default function LastBuildBadge({ fallbackTs }: { fallbackTs: string }) {
  const [info, setInfo] = useState<BuildInfo | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const base = (import.meta as any).env?.BASE_URL ?? '/';
    fetch(`${base.replace(/\/$/, '')}/last-build.json`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setInfo(d))
      .catch(() => {});
    const t = setInterval(() => setTick((x) => x + 1), 30_000);
    return () => clearInterval(t);
  }, []);

  const ts = info?.ts ?? fallbackTs;
  const sha = info?.headSha?.slice(0, 7);
  const msg = info?.headMessage ?? '';

  return (
    <div className="chip-muted" title={msg} data-tick={tick}>
      <span className="h-1.5 w-1.5 rounded-full bg-pos animate-pulse" />
      Built {relativeTime(ts)}
      {sha && <span className="ml-1 font-mono text-ink-dim">{sha}</span>}
    </div>
  );
}
