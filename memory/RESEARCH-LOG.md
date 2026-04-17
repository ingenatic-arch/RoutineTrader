# Research Log

Dated pre-market research entries written by the `pre-market` routine.
Most-recent at the top. Each entry is the basis for any trade decision in the
`market-open` routine that day — no entry today = no new positions today.

---

### 2026-04-17 — Friday Pre-Market

**Snapshot:** Equity 100.0% of start | Cash 34.9% | Open positions: 2 | Week opens so far: 0 logged (2 present on account — see Anomaly below)

**Anomaly flagged**
- Account state does not match `memory/TRADE-LOG.md` (which shows Day 0 baseline, zero positions). Two positions are open and were opened today pre-cron (~04:58 ET):
  - SPY (iID 3000) opened 703.17, 35.0% of equity, `stopLossRate=0.0001` (no effective stop) — violates rule 9.
  - QQQ (iID 3006) opened 641.35, 30.0% of equity, `stopLossRate=0.0001` (no effective stop) — violates rule 9.
- Each individually exceeds the 20% per-position cap (rule 4). Combined 65.0% of equity in US equity-index ETFs exceeds the 50% asset-class cap (rule 5). Cash buffer 34.9% is above the 15–25% target band — under-deployed, not over-deployed, so no risk-of-margin problem, just a concentration problem.
- eToro has no modify-position endpoint, so stops cannot be patched in place — only fixed by close-and-reopen with a correct `StopLossRate`. `market-open` decision below prescribes a TRIM to restore caps.

**Market context** (all figures as-of early 2026-04-17, percentages only)
- S&P 500 futures (ES front-month): +0.13% overnight to ~7086; Polymarket pegs 88% probability of a higher open vs prior close.
- VIX: 18.22, +1.56% — moderate regime, not stressed.
- US 10Y yield: not retrievable this morning (data unavailable from research source).
- WTI crude: +0.42%, ~$93.7 handle; energy still the laggard sector.
- DXY: last print +0.2% yesterday; no fresh overnight read.
- BTC: ~+0.9% overnight in the low-$74k area; ETH overnight data unclear. Crypto consolidating since February; no fresh catalyst.
- Today's catalysts: no major earnings before the open. Econ docket — NFIB 10:00 ET (cons. 97, prev 98.6); ADP weekly 12:15 ET; **PPI MoM + YoY 12:30 ET (prev 3.5% MoM / 5.9% YoY)** — the key market-mover; Import Prices 12:30 ET; NAHB 2:00 ET (cons. 37); EIA crude stocks 2:30 ET.
- Geopolitics: US–Iran two-week ceasefire (April 7) still the dominant backdrop — has been a tailwind to equities and a drag on oil.
- Sector momentum (week ending April 10 per research): XLK +4.8%, XLI +4.7%, XLF +2.5%, XLV +0.4%, XLE −4.1%. Tech + industrials leading; energy lagging. Friday intra-week readings on April 15 showed financials +0.76%, healthcare −0.72%, industrials −1.24%.

**Holdings check**
- **SPY (iID 3000)** — unrealized +0.12%. No overnight gap. Thesis intact: tech leadership + ceasefire tailwind support broad US equity. **Action flag:** OVER-CAP at 35% (vs 20% limit) and broken stop — market-open must TRIM to ≤ 20%, and ideally close-and-reopen to install a proper 10%-below-ask stop.
- **QQQ (iID 3006)** — unrealized +0.14%. No overnight gap. Thesis intact: Nasdaq-100 tracks the leading sector (tech +4.8% last week). **Action flag:** OVER-CAP at 30% (vs 20% limit) and broken stop — same TRIM/reopen treatment.

**Trade ideas** (0–3 per day; HOLD is the default)
- **None today.** The account is already over-concentrated in US equity-index ETFs (65% combined vs 50% class cap). Any new open would compound the violation. Priority is to restore caps, not to add risk.

**Risk factors**
- 12:30 ET PPI: hot print (> consensus, versus prev 3.5% MoM / 5.9% YoY) would re-price rate-cut odds and hit long-duration tech harder than broad S&P → bigger drag on QQQ than SPY. A cool print is the opposite.
- Both held positions have **no effective stop loss** — a sudden adverse intraday move has no server-side backstop; only the midday −7% rule-cut + thesis-exit protects them. This elevates tail risk until the stops are fixed via close-and-reopen.
- US–Iran ceasefire is only a two-week pause (agreed April 7) — expiry risk around April 21; not today, but on the near horizon.
- VIX 18.22 with a +1.56% tick and a doji on SPY April 16 suggests indecision at resistance (~$697 prior context, spot now ~$704); a failed breakout is the main downside setup.

**Decision:** **HOLD + prescribe TRIM at market-open.** Market-open routine should:
1. Trim SPY from 35% → ≤ 20% of equity (partial close ~15%).
2. Trim QQQ from 30% → ≤ 20% of equity (partial close ~10%).
3. Ideally, after trims, full-close-and-reopen the remaining stakes with proper `StopLossRate = round(ask*0.90, 4)` to replace the broken `0.0001` stops. This is the only way to install stops given eToro's API.
4. No new opens today — class exposure recovery takes priority. Week opens-so-far remains 0; room for up to 3 new opens in the week once caps are clean.

---

## Template (copy for each new day)

### YYYY-MM-DD — Weekday Pre-Market

**Snapshot:** Equity X.X% of start | Cash X.X% | Open positions: N | Week opens so far: N

**Market context**
- S&P futures: …
- VIX: …
- Oil / DXY / 10Y: …
- Crypto (BTC/ETH overnight %): …
- Key catalysts today: earnings (tickers + AM/PM), econ data (time + consensus), geopolitics.
- Sector / asset-class momentum: …

**Holdings check**
- For each open position: news since last close? Thesis intact? Any gaps > 3%?

**Trade ideas** (0–3 per day; HOLD is the default)
1. **SYMBOL** (assetClass) — instrumentId: `XXXXX`
   - Catalyst: …
   - Entry: ask near $X.XX
   - Stop (−10%): $X.XX
   - Target (2:1 min): $X.XX
   - Size: X% of equity (≤ 20%, respects class cap)
   - R:R: X:1
2. …

**Risk factors**
- …

**Decision:** HOLD / OPEN N positions at market-open / TRIM X.

---
