#!/usr/bin/env node
/**
 * Defence-in-depth: fail the build if any rendered HTML in web/dist contains
 * a `$` character. The CLAUDE.md rule is percentages only in user-facing text;
 * parsers strip the `_Internal (reconciliation only)_` block, but this guard
 * catches any future regression.
 *
 * Allowlist: nothing. If a legitimate use ever appears (e.g. a CSS variable
 * named `--foo`), extend the allow-list explicitly rather than loosening.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(HERE, '..', 'dist');
const TEXT_EXT = new Set(['.html', '.json']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = resolve(dir, name);
    const s = statSync(full);
    if (s.isDirectory()) walk(full, out);
    else if (TEXT_EXT.has(extname(name))) out.push(full);
  }
  return out;
}

// Strip inline <script> blocks before scanning. Astro's island hydration
// runtime ships JS that uses template literals like `${v}` and `astro:${c}`
// — those are script internals, never user-visible text, so they must not
// trigger the gate. We only care about `$` that reaches the rendered page.
function stripScripts(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
}

let offenders = [];
try {
  const files = walk(DIST);
  for (const f of files) {
    const raw = readFileSync(f, 'utf8');
    const content = extname(f) === '.html' ? stripScripts(raw) : raw;
    if (content.includes('$')) {
      const lines = content.split('\n');
      const hits = [];
      lines.forEach((line, i) => {
        if (line.includes('$')) hits.push(`${i + 1}: ${line.trim().slice(0, 200)}`);
      });
      offenders.push({ file: f, count: hits.length, sample: hits.slice(0, 5) });
    }
  }
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('check-no-dollars: dist/ not found — nothing to check (is this a dev run?)');
    process.exit(0);
  }
  throw err;
}

if (offenders.length) {
  console.error(`check-no-dollars: FAIL — $ found in ${offenders.length} built file(s):`);
  for (const o of offenders) {
    console.error(`  ${o.file} (${o.count} lines)`);
    for (const s of o.sample) console.error(`    ${s}`);
  }
  process.exit(1);
}

console.log('check-no-dollars: OK — no $ in built output');
