---
description: Manually open one position with the full pre-buy gate and confirm step.
argument-hint: SYMBOL SIZE_PCT buy
---

Manually place a single long open order, with the full pre-buy gate. Requires
**interactive confirmation** before any write — this is the local dry-run /
single-shot path, not the routine's autonomous loop.

Usage: `/trade SYMBOL SIZE_PCT buy` (e.g., `/trade AAPL 15 buy`). Only `buy` is
accepted (longs only per strategy).

Arguments: `$ARGUMENTS` — parse as `<SYMBOL> <SIZE_PCT> <SIDE>`.

Steps:

1. **Parse args**: extract `SYMBOL`, `SIZE_PCT` (an integer 1–20), `SIDE` (must
   equal `buy`). If parse fails or SIDE ≠ `buy`, print usage and stop.

2. **Key-type sanity**: `bash scripts/etoro.sh key-check` → must print
   `KEY=agent`. If `KEY=main`, tell the user to replace `ETORO_USER_KEY` with
   the agent-portfolio token and stop. If `KEY=unknown`, a transient API error
   — tell the user to retry.

3. **Resolve instrument**:
   `bash scripts/etoro.sh search <SYMBOL>` → find the entry with
   `internalSymbolFull == "<SYMBOL>"` (EXACT match). Capture `instrumentID` +
   confirm it looks like a valid long-tradable instrument. If no exact match,
   show the closest matches and stop.

4. **Get rate**:
   `bash scripts/etoro.sh rates <instrumentID>` → capture `ask`. Compute:
   - `stop = round(ask * 0.90, 4)` (10% below entry, eToro-side)
   - Target (informational only): `round(ask * 1.20, 4)` (20% — 2:1 R:R)

5. **Snapshot for gate**: `bash scripts/etoro.sh pnl`. Compute:
   - `equity`, `available_cash`, current `positions[]` with class, class_exposure map.

6. **Pre-buy gate** — check ALL (if any fails, print which + stop):
   - positions-after-fill ≤ 6
   - SIZE_PCT ≤ 20
   - `Amount = SIZE_PCT/100 * equity` ≤ available_cash AND post-fill cash ≥ 5%
   - `class_exposure[class] + SIZE_PCT/100` ≤ 0.50 (look up class via
     `bash scripts/etoro.sh instrument <id>`)
   - opens-this-week in `memory/TRADE-LOG.md` < 3 (WARN + allow if user confirms)

7. **Show the plan, ask for confirmation** (percentages only):
   ```
   Plan:
   • SYMBOL (class) — instrumentID XXXXX
   • Long, size SIZE% of equity, leverage 1
   • Entry near ask (stop −10%, target +20%, R:R 2:1)
   • Post-fill: positions N, cash X.X%, class exposure X.X%
   Proceed? [y/N]
   ```
   Use `AskUserQuestion` for the y/N. Default is N (no trade).

8. **If confirmed**:
   ```bash
   bash scripts/etoro.sh open '{"InstrumentID":<id>,"IsBuy":true,"Leverage":1,"Amount":<amount_usd>,"StopLossRate":<stop>}'
   ```
   On 429: sleep 15 → retry once → 30 → retry → 60 → retry → give up.
   On success, print the order token percentages-summary.

9. **Log the trade** (only if it fired): append to `memory/TRADE-LOG.md` in
   the same shape as the `market-open` routine entries. Do NOT auto-commit
   from a slash command — tell the user: "Trade logged. Commit with:
   `git add memory/TRADE-LOG.md && git commit -m '...' && git push`."

If the user answers N: print "No trade placed. Plan was valid." and stop.
