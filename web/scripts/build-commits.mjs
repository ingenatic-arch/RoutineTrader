#!/usr/bin/env node
/**
 * Prebuild step: dump the last 500 commits into src/data/commits.json so
 * the dashboard can show routine cadence and detect missed runs.
 *
 * Routine commits are classified by message prefix (`routine: <name> ...`).
 */
import { execSync } from 'node:child_process';
import { writeFileSync, mkdirSync, writeFileSync as wf } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..', '..');
const OUT_DIR = resolve(HERE, '..', 'src', 'data');
const OUT = resolve(OUT_DIR, 'commits.json');

const ROUTINE_RE = /^routine:\s+(pre-market|market-open|midday|daily-summary|weekly-review)\b/;

function gitLog() {
  try {
    const raw = execSync(
      `git -C ${JSON.stringify(REPO_ROOT)} log --pretty=format:%H%x09%cI%x09%s -n 500`,
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
    );
    return raw;
  } catch (err) {
    console.warn('build-commits: git log failed:', err?.message ?? err);
    return '';
  }
}

// Commit subjects reach the rendered page (HEAD badge on Overview, cadence
// list). Our own fix commits sometimes reference `$` ("scrub $ from parser");
// the check-no-dollars gate would reject that even though the $ is talking
// about the rule, not violating it. Strip $ here so the rendered payload
// stays clean without us having to police commit messages.
function stripDollars(s) {
  return s.replace(/\$/g, '');
}

function parse(raw) {
  const out = [];
  for (const line of raw.split('\n')) {
    if (!line.trim()) continue;
    const [sha, ts, ...rest] = line.split('\t');
    if (!sha || !ts) continue;
    const message = stripDollars(rest.join('\t').trim());
    const m = message.match(ROUTINE_RE);
    out.push({
      sha,
      ts,
      message,
      ...(m ? { routine: m[1] } : {}),
    });
  }
  return out;
}

const records = parse(gitLog());
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT, JSON.stringify(records, null, 2) + '\n', 'utf8');

const buildInfo = {
  ts: new Date().toISOString(),
  headSha: records[0]?.sha ?? null,
  headMessage: records[0]?.message ?? null,
  commitCount: records.length,
};
mkdirSync(resolve(HERE, '..', 'public'), { recursive: true });
wf(resolve(HERE, '..', 'public', 'last-build.json'), JSON.stringify(buildInfo, null, 2) + '\n', 'utf8');

console.log(`build-commits: wrote ${records.length} commits to ${OUT}`);
