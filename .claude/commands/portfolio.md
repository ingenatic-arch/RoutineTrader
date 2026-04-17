---
description: Read-only snapshot of the eToro agent-portfolio (percentages only).
---

Show the current state of the agent-portfolio. **No trades, no writes.**

Rules:
- User-facing text = **percentages only**, never dollars.
- Read `.env` via the wrapper (local mode); if `ETORO_USER_KEY` is unset, tell the user to fill `.env`.

Steps:

1. **Key-type sanity**: `bash scripts/etoro.sh agent-portfolios`.
   - Last line `HTTP_CODE=403` → agent-portfolio key, proceed.
   - `HTTP_CODE=200` → main-account key, STOP. Tell the user the token in
     `.env` is the wrong scope and must be replaced with an agent-portfolio token.
   - Anything else → show the HTTP code and the response body; stop.

2. `bash scripts/etoro.sh pnl`.

3. Render a concise snapshot, percentages only:
   ```
   📈 RoutineTrader — snapshot

   Equity: X.X% of start ($10k virtual / $1k real mirror)
   Phase P&L: ±X.X%
   Cash: X.X%
   Positions: N (N% deployed)

   | Sym | Class  | Weight% | Unrealized% | Stop   |
   |-----|--------|---------|-------------|--------|
   | ... | ...    |   ...   |     ...     |  ...   |

   Pending orders: N.
   Last pnl fetched: <utc>.
   ```
   Resolve each position's symbol via `bash scripts/etoro.sh instrument <id>`
   if it isn't already in `memory/TRADE-LOG.md`.

4. Do NOT commit anything. This is read-only.
