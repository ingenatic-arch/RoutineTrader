# Research Log

Dated pre-market research entries written by the `pre-market` routine.
Most-recent at the top. Each entry is the basis for any trade decision in the
`market-open` routine that day — no entry today = no new positions today.

---

### 2026-05-14 — Thursday Pre-Market (08:00 ET) — ROUTINES RESUME AFTER 5-DAY GAP; HOT PPI, FED-CHAIR TRANSITION FRIDAY, HORMUZ STILL CLOSED

**Snapshot:** Equity 99.9% of start | Cash 84.8% | Open positions: 1 (BTC 15.2%) | Week opens so far: 0 | Weekly budget remaining: 5 of 5

**Operational note:** No routine activity since 2026-05-08 midday (5 calendar days — Fri 5/8 daily-summary onward through Wed 5/13 all missed). Container/cron stall, not a strategic pause. Treating today as a fresh resume — BTC holding period continues uninterrupted from 2026-04-22 open (22 days held); the position-level math is unchanged.

**Market context** (as-of 2026-05-14 ~13:02 UTC / 09:02 ET, percentages only; data-source gaps flagged below — Perplexity returned predominantly May 12–13 dated material this morning, no clean fresh May 14 overnight prints on most metrics)
- **S&P 500 futures (ESM26):** Most recent surfaced print is May 12 close at **7413.25, −0.18%** (intraday). No fresh May 13 close or May 14 overnight print available. Treat directionally: tape was constructive but slightly tired into the May 13 PPI release.
- **VIX / US 10Y yield / DXY:** **No fresh prints surfaced** (continuing the multi-week thin-data pattern on these). Carry-forward: VIX ~17–18, 10Y ~4.34–4.38%, DXY ~98. Hot PPI yesterday (see below) suggests 10Y should be marginally higher; treat carry-forward as a floor.
- **WTI crude (CLM26):** June WTI **closed $100.92 May 13 (−1.23%)** off the May 12 spike (+4.03% to $104 area after Trump cast doubts on US-Iran ceasefire). **Strait of Hormuz remains CLOSED structurally** since April 22 brief-reopen-then-shut; 21% of world oil + 25% global LNG trade at risk; 150+ stranded vessels; war-risk insurance 16x normal; daily economic cost >$4B. US deployed "Project Freedom" escort op May 5 (guided-missile destroyers + 15k service members). On May 9 Trump claimed hostilities "terminated" but May 12 walked it back — headline-driven whippy tape, structural supply tightness intact.
- **HOT PPI YESTERDAY (May 13):** **Core PPI YoY 5.2% vs 4.3% est** (huge upside surprise) | **Headline PPI YoY 6.0% vs 4.9% est**. Major hawkish print — implies rate-cut deferral, headwind for risk assets, especially long-duration tech and rate-sensitive crypto.
- **Bitcoin (BTC):** May 13 close ~$80,304 (−0.7% off $80,861 May 12). eToro live read **$79,741 ask (13:02 UTC)** — soft overnight from $80,304 (~−0.7%, no thesis-break). Resistance at 200DMA ~$82,228 has rejected price multiple times. **Record ETF inflows ~$700M** in recent sessions. Halving (April 2026, miner block reward 3.125 → 1.5625 BTC) supply-squeeze structurally intact.
- **Ethereum (ETH):** No fresh print surfaced.
- **Sector momentum (5-day to May 13):** Data thin. **XLK $176.85** May 13 close (only data point returned). **XLE rallied +3.46% past week** to $57.63 close — mostly back to our 4/27 entry level after the 5/7 thesis-exit at $55.47, ETF data confirms structural Hormuz-supply premium re-asserting. Past-2-week XLE −2.37%; monthly −3.39%; YTD +28.9% (still sector leader).
- **Geopolitics:** Iran/Hormuz dominant. Trump's May 9 "hostilities terminated" + May 12 "ceasefire doubt" creates a headline-whipsaw pattern that drives WTI ±4% daily on a closed-strait floor.

**TODAY'S MAJOR CATALYSTS**
- **Senate Banking Committee CLARITY Act hearing today (May 14)** — described as "the biggest crypto legislation currently moving through the US government." Crypto-positive bias if hearing tone is constructive. Timing not surfaced; could be morning or afternoon US session.
- **Jerome Powell's Fed tenure ends tomorrow (May 15)**, Kevin Warsh expected to assume the chair. Historical precedent: BTC has sold off around prior Fed-chair transitions. Friday session = overnight risk for BTC tonight.
- **Trump in Beijing with Nvidia CEO Jensen Huang** — US/China rare-earth and tech-sensitive sector wildcard, no specific today-deliverable known.
- **Pre-open earnings May 14:** Search did not surface a clean list. Treating as light.
- **Macro releases May 14:** No top-tier releases confirmed in search (CPI was earlier this week per crypto-news mention; PPI was yesterday May 13). Initial Jobless Claims typically Thursday 8:30 ET — release time falls **before** US cash open, may already be on the tape by midday; consensus not surfaced. Likely second-tier vs PPI/CPI noise.

**Holdings check**
- **BTC** (crypto, 15.2% weight, +1.25% unrealized, stop $70,888.59 / −10% intact): **thesis INTACT.**
  - Original thesis (Iran-ceasefire-indefinite + MicroStrategy $2.54B buy + 3mo-high breakout, 2026-04-22): two of three legs still alive — MSTR institutional accumulation continues (search confirms ETF inflows record $700M); halving supply squeeze structurally intact; ceasefire-indefinite is no longer the clean tailwind (whippy now) but is also not actively bearish for crypto.
  - **New catalyst alignment today:** CLARITY Act hearing is a fresh positive catalyst (regulatory clarity = institutional flow tailwind).
  - **Risk that warrants close watch:** Fed-chair transition Friday May 15. Historical pattern = sell-off around transitions. Position is +1.25% — comfortable cushion above stop but no margin to add into the binary.
  - Overnight move: ~−0.7%, well below the 3% gap threshold. No adverse catalyst.

**Trade ideas** (0–5 per day)

**None proposed for today.** Screening + rejection rationale below.

1. **XLE re-entry (Energy SPDR)** — instrumentID: `3008`, ETF. **Rejected: late entry after the bounce.** Structural Hormuz-closed thesis (21% world oil at risk, WTI floor ~$100) is real and the very pattern that drove our 4/27 entry. BUT: we exited 5/7 at $55.47 on ceasefire-optimism; XLE has since rallied +3.9% to $57.63 (back near our prior $57.55 entry level). Buying back ~4% higher on the same setup is chasing — R:R degrades materially when entry isn't pristine. Live ask $57.63 with stop −10% = $51.867 / target +20% = $69.16 still mathematically clears 2:1, but the catalyst is no longer "fresh today" — the market already priced the Hormuz-still-closed reality over the past 5 trading days. Watchlist trigger: **add XLE at $56.50 or below** (a 2% pullback restores entry quality) on any clean WTI ≥$100 hold post-Fed-transition Friday.
2. **MSTR (MicroStrategy)** — direct play on BTC accumulation + halving supply squeeze + CLARITY Act regulatory tailwind. **Rejected: stacking crypto-correlated risk into Fed-chair transition tomorrow.** Adding MSTR on top of BTC 15.2% would push correlated crypto exposure to ~25%+ ahead of a known Friday binary. Wait for post-transition tape.
3. **ETH** — could be the cleaner CLARITY-Act expression (regulatory clarity disproportionately benefits ETH/staking framework). **Rejected: no fresh ETH price data surfaced (data quality gap); doubling crypto-class exposure into Fed-chair binary; no specific entry level.** Re-evaluate Friday if CLARITY hearing today produces a concrete advancement signal.
4. **GLD / Gold ETF** — defensive on hot PPI + Fed transition uncertainty. **Rejected: not screened (no GLD-specific data this morning); haven't established a thesis on the metal here in prior research, would be a cold start without confirmation of the macro thesis (real-yield direction + DXY direction both stale). Not today.**
5. **XLF (Financials) / XLV (Healthcare) / Defensives (XLP/XLU)** — possible rotation plays on hot PPI / rate-deferral. **Rejected: rotation is a multi-day theme, not a today-trigger; no fresh sector-momentum data surfaced; insufficient confirmation to act.**
6. **XLK / QQQ (tech)** — XLK $176.85 May 13 close, but hot PPI is structural duration-sensitive headwind. **Rejected: tape leadership unclear without fresh 5-day sector data; PPI surprise argues against adding duration exposure.**

**Risk factors**
- **Fed-chair transition Friday May 15** is the biggest known-unknown of the week. Historical precedent = BTC sells off around prior Fed-chair transitions. Our 15.2% BTC exposure is the entire risk book today; no need to add to it pre-transition.
- **Hot PPI (May 13)** suggests inflation re-acceleration is still a live risk. Risk-asset multiples and rate-cut expectations should both compress on the margin. Watch BTC for any catch-down move.
- **Hormuz whipsaw**: any fresh Trump statement either way drives WTI ±4% intraday. We have no energy exposure currently — this is an opportunity-cost risk, not a position-risk.
- **CLARITY Act hearing today** could be a positive crypto catalyst — if tone is constructive, BTC could break $82,228 resistance. If skeptical, BTC could test $78k support area. Position is sized to absorb either; no action required.
- **Data quality persists**: Perplexity returned predominantly stale or partial data on VIX/10Y/DXY/sector breadth/ETH/today's catalysts. Treating quantitative claims as directional only. If midday cash-market reads contradict materially, midday routine should reassess.
- **5-day routine gap** means the dashboard observability stream has been blind; this entry restores the pre-market → market-open → midday → daily-summary chain.

**Watchlist (for the rest of the week / next sessions)**
- **XLE** — re-entry trigger at **≤$56.50** on confirmed WTI sustain ≥$100 + Hormuz closed status. Post-Fed-transition Friday is the cleanest window.
- **ETH** — re-evaluate Friday if CLARITY Act hearing produces a concrete bullish advancement; size ≤10% as crypto-class co-position (BTC + ETH would push class to ~25%, well below 50% cap).
- **MSTR** — only after Fed-chair transition tape is digested and BTC holds the $78k support.
- **BTC partial trim** — NOT today. Only triggered if BTC closes < $75k (rule-cut at −5% from current, still above −10% stop). Thesis-watch only.

**Decision:** **HOLD.** No new opens today. No trims. BTC thesis intact, position +1.25% unrealized with $70,888.59 stop intact. Opens-this-week stays 0; weekly budget 5 of 5 still available through Friday. Cash 84.8% — well above the 5% floor, in line with the meta-rule patience > activity into a known Fed-chair binary tomorrow. Today's hearing (CLARITY) is a catalyst we watch, not trade into pre-transition.

---

### 2026-05-07 — Thursday Pre-Market (08:00 ET) — IRAN-CEASEFIRE OPTIMISM, WTI −10% IN 2 DAYS, XLE THESIS UNDER PRESSURE, NFP TOMORROW

**Snapshot:** Equity 100.4% of start | Cash 74.8% | Open positions: 2 (BTC 15.4%, XLE 9.9%) | Week opens so far: 0 | Weekly budget remaining: 5 of 5

**Market context** (as-of 2026-05-07 ~13:15 UTC, percentages only; data-source gaps flagged below)
- **S&P 500 futures (ESM26):** No clean fresh overnight May 7 print surfaced. Wednesday cash session was constructive (SPX +1.46%, Nasdaq 100 +1.44–2.08%, Dow +1.24–1.33%) on tech beats (AMD +17%, SMCI +24%) and Iran-ceasefire optimism — both indices at/near record area. Risk-on tape into NFP.
- **VIX / US 10Y yield / DXY:** **No fresh prints surfaced** (eighth consecutive thin morning on these). Carry-forward: VIX ~17–18, 10Y ~4.34–4.38%, DXY ~98. Treat as directional only.
- **WTI crude — MAJOR THESIS-PRESSURE EVENT:** June WTI (CLM26) **closed −7.03% / −$7.19 Wednesday May 6**, then traded down further to **~$92.56** Thursday morning (additional ~−2.5%). Cumulative ~−10% over two sessions vs Tuesday's $104+ level. Driver: **"Crude oil prices plummet on optimism of US-Iran war to end"** — multiple sources cite ceasefire-headlines as the dominant trigger. This is the exact catalyst-reversal that breaks the Hormuz-risk-premium thesis underwriting our XLE long.
- **DXY / Brent:** No fresh prints; carry-forward DXY ~98. Brent print not surfaced this morning.
- **BTC: ~$80,931 live eToro mark at 13:15Z, ~−1.2% overnight** vs Wednesday morning's $82,320. Pulled back from the $82k breakout area; still well above $80k support and entry. On-tape commentary: spot-BTC ETFs took $2.44B in April inflows (highest since Oct 2025), and the prior $80k reclaim triggered $300M+ shorts liquidation. 200DMA test at ~$83k flagged as next technical hurdle. No adverse catalyst — orderly profit-taking after the multi-month-high print.
- **ETH:** Fresh print not surfaced (third consecutive morning). Carry-forward ~$2.3–2.4k area.
- **Today's catalysts:**
  - **Initial Jobless Claims (week ending May 2)** — released this morning at 12:30 UTC: **219K actual vs 205K consensus** (and 189K prior). Mildly softer labor read — 30K above prior, 14K above consensus. Marginal NFP-tail signal: not a rate-cut trigger by itself, but consistent with a labor-cooling narrative. Tape reaction muted.
  - **Nonfarm productivity / unit labor costs (Q1 prelim)** — likely mid-morning ET. Consensus not surfaced.
  - **Earnings tape (Wed post-close + Thu pre/post):** DIS / UBER / CVS / MAR / ARM / APP / DASH / FTNT post-close Wednesday — specific reaction prints **not surfaced** in this morning's research; data-quality flag carried forward. Today's pre-open names not surfaced cleanly either. None in our portfolio class.
  - **Friday NFP** — tomorrow 8:30 ET. The week's binary. ADP yesterday printed 109K vs 99K consensus (a beat); jobless claims this morning soft (219K vs 205K). Mixed labor signal into NFP — NFP itself becomes the swing read.
  - **Geopolitics:** **US-Iran ceasefire-optimism is the dominant intraday risk-on driver this week.** Headlines specifically frame "war ending" — i.e., the path is now de-escalation, not escalation. Strait-of-Hormuz operational status not surfaced; Iran FM Araghchi's "making progress" remarks from yesterday underwrote the WTI selloff.
- **Sector momentum:** Fresh 5-day prints not surfaced cleanly. Carry-forward through 5/4 close: XLE +33.70% YTD, XLK +15.19%, XLI +11.46%, XLU +9.38%, XLP +8.15%, XLF −5.34%, XLV −5.84%. **XLE specifically:** 1-month return now −4.49%, with the WTI selloff likely to extend that on Wednesday/Thursday. The leadership unwind is in motion.
- **Data quality caveat.** Eighth consecutive thin morning on VIX/10Y/DXY/ETH; today's research had cross-source disagreement on WTI levels (one source gave $92.98, another $95.08, another $92.56 — all directionally consistent with the ~−10% two-day move). EIA crude inventories (5/6) print not surfaced. Earnings-reaction prints not surfaced. Treat third-party feeds as directional only; eToro `/pnl` + `/rates` are source of truth for position math.

**Holdings check**
- **BTC** (instrumentID 100000, weight 15.4% of equity, unrealized **+2.75%**, live $80,931.02 vs entry $78,765.12, stop $70,888.59): thesis **INTACT.** Pulled back ~−0.9% from Wednesday's $81,665.99 close on no adverse news — orderly profit-taking after the multi-month-high print. ETF inflow narrative (April $2.44B, Oct-2025 high) and the MSTR ~145k-BTC accumulation print remain tailwinds. Stop $70,888.59 untouched (~12.4% headroom from current price). No >3% adverse gap. **HOLD.**
- **XLE** (instrumentID 3008, weight 9.9% of equity, unrealized **−0.99%**, live $56.98 vs entry $57.55, stop $51.79): thesis **MATERIALLY WEAKENING.** WTI down ~−10% over two sessions on US-Iran-ceasefire-optimism — this is the explicit reversal of the Hormuz-risk-premium thesis the position was built on. Position is still in the ETF cushion (only −0.99% unrealized; stop has ~9.1% headroom; well above the −7% rule-cut threshold). Per strategy rule 9 ("thesis-exit overrides the stop — close even above −7% if catalyst broken or sector rolling"), this position is now eligible for thesis-exit. **Pre-market does not trade — flagging for midday-routine review with a `THESIS-WATCH` recommendation: if WTI does not stabilize ≥$93 with XLE holding the $56 area into the midday session, midday should consider a full thesis-exit close above the −7% rule line.** ClickUp alert sent (criterion: "overnight news broke a position's thesis").

**Trade ideas** (0–5 per day; HOLD is default only when no idea qualifies)

Screened candidates + dispositions:

1. **Add to BTC (push toward 18–20% weight)** — yesterday's watchlist trigger was "BTC pulls back to $80k on no-news + XLE stays bid." Pullback condition partially met (BTC $80.9k, ~1% pullback on no adverse catalyst). **Rejected: dual disqualifier.** (a) "XLE stays bid" condition has failed — XLE thesis is rolling, so the trigger logic that paired the BTC add to XLE strength no longer applies. (b) Pre-NFP entry on a multi-month-high consolidation is poor risk-budgeting — Friday's print is the binary, deploying additional crypto risk into a labor-data binary without a fresh same-day catalyst is anti-disciplined. Watchlist trigger reset: post-NFP confirmation OR a clean break-and-hold above $83k (200DMA).
2. **XLK (Tech SPDR)** — instrumentID 3021, ETF. Wednesday's tech rally (AMD +17%, SMCI +24% post-close) extended Tuesday's leadership reclaim. **Rejected: pre-NFP, no specific 5/7 catalyst.** Watchlist trigger remains "post-NFP sector confirmation Friday afternoon."
3. **XLI (Industrials SPDR)** — instrumentID resolution would be needed; +11.46% YTD leading quadrant. **Rejected: pre-NFP, no specific 5/7 catalyst.** Watchlist alongside XLK.
4. **XLF (Financials SPDR)** — laggard at −5.34% YTD; ADP/claims print does not establish bank-tape pivot. **Rejected: averaging into a laggard without a thesis trigger** is the textbook anti-pattern.
5. **XLV (Healthcare SPDR)** — laggard at −5.84% YTD. **Rejected: same as XLF.**
6. **Defensive rotation (XLP, XLU)** — risk-on tape (tech at record area, Iran-ceasefire optimism, BTC near multi-month highs) argues against defensives. **Rejected.** Soft jobless-claims print is too marginal a defensive trigger by itself.
7. **GLD (Gold)** — Iran ceasefire optimism is **anti-gold** — geopolitical-hedge premium is unwinding alongside oil's. **Rejected.**
8. **Energy mean-reversion long (XLE add / XOM / CVX)** — directly opposed to the active flow. **Rejected, hard.** With WTI breaking down on a confirmed catalyst-reversal (Iran de-escalation), adding to or replacing the existing XLE long would be revenge-trading the thesis-roll.
9. **Energy short / inverse-energy ETF** — strategy is **longs only** (rule 2). **Not eligible.**
10. **MSTR (BTC-leveraged proxy)** — Wednesday post-print reaction not surfaced cleanly; BTC itself is consolidating after the multi-month-high. **Rejected: post-earnings-tape unread + correlated to existing BTC long without diversification benefit.**
11. **DIS / UBER / MAR / ARM / APP / DASH / FTNT post-print mean-reversion** — Wednesday post-close reactions not surfaced in research. **Rejected: cannot evaluate without a clean overnight read.** If a clean reversal-volume setup emerges intraday, market-open could re-evaluate, but pre-buy gate requires a documented today-thesis at entry — not eligible from this morning's research.
12. **ETH (Ethereum)** — fresh print not surfaced; no fresh ETH-specific catalyst. **Rejected: derivative beta-stack on top of BTC, pre-NFP.**

**Risk factors**
- **XLE thesis-roll is the dominant idiosyncratic risk this week.** WTI −10% over two sessions on a real catalyst-reversal (Iran de-escalation framed explicitly as "war ending") is the strongest thesis-pressure event the portfolio has seen in this phase. Position size (9.9%) and current unrealized (−0.99%) provide a comfortable risk envelope, but rule 9 makes a thesis-exit eligible at any time. Midday will be the decision point.
- **NFP Friday is the week's binary.** ADP beat (109K vs 99K) and jobless-claims miss (219K vs 205K) leave NFP as the swing read. Soft NFP would extend tech / risk-on; hot NFP could revive cyclicals/financials and pressure rate-sensitive longs (BTC).
- **Iran ceasefire two-way reversal risk.** A breakdown of ceasefire negotiations would reverse the WTI selloff sharply higher and re-bid XLE. Probability assessed as low based on the current "making progress" framing, but the position's thesis hinges on this exact headline path.
- **BTC at ~$80–82k is in a profit-taking zone** after the multi-month-high print. A risk-off catalyst or hot NFP could trigger a deeper pullback to $77–78k area; existing 10% stop band provides ~12.4% headroom from current price (cushion intact, no action required).
- **Concentration math.** Crypto class 15.4% + ETF class 9.9% = 25.3% invested with 74.8% cash — well inside per-class (50%) and per-name (30%) caps. Cash buffer adequate to absorb idiosyncratic position moves and to redeploy on a clean post-NFP setup Friday afternoon.
- **Data quality.** Eighth consecutive thin morning on macro indicators; cross-source WTI disagreement (~$92.5–95) within a directionally consistent ~−10% two-day move; earnings-reaction prints not surfaced. Treat all third-party reads as directional only.

**Watchlist (for midday + market-open Friday)**
- **XLE thesis-exit (midday today)** — primary watch. Decision rule for midday: WTI not stabilizing ≥$93 + XLE not holding $56 area → consider full close above the −7% rule line on a thesis-exit.
- **BTC** — no add today. Reset trigger: post-NFP confirmation Friday OR a clean break-and-hold above $83k (200DMA).
- **XLK / XLI** — entry trigger = post-NFP sector confirmation Friday afternoon, or a pullback to 10DMA on no-news.
- **XLF / XLV** — laggards; do not add without a thesis pivot (e.g., a hot NFP rate-revival for XLF, or a healthcare-specific catalyst for XLV).
- **DIS / UBER post-print mean-reversion** — re-evaluate intraday today if a clean reversal-volume read emerges.
- **ETH** — add only on a fresh ETH-specific catalyst; not a pure beta-to-BTC stack.

**Decision:** **HOLD; THESIS-WATCH on XLE with midday-routine recommendation to consider thesis-exit if WTI does not stabilize ≥$93.** No new opens today. No pre-market trims (pre-market doesn't trade; rule 9 is a midday-routine action). Both held positions remain inside size caps (BTC 15.4% / cap 30% per-name and 50% per-class; XLE 9.9% / same caps); aggregate invested 25.3% with 74.8% cash. ClickUp alert sent flagging XLE thesis-pressure on Iran-ceasefire-driven WTI −10% two-day move, per the "overnight news broke a position's thesis" criterion. Opens-this-week stays at 0/5; full weekly budget preserved. The asymmetric play this week remains reserving dry powder for clean post-NFP Friday setups while letting the midday routine make the live thesis-exit call on XLE based on cash-session price action.

---

### 2026-05-06 — Wednesday Pre-Market (08:00 ET) — BTC EXTENDS, XLE FIRMS, ADP + EIA + EARNINGS HEAVY DAY

**Snapshot:** Equity 101.0% of start | Cash 74.3% | Open positions: 2 (BTC 15.5%, XLE 10.2%) | Week opens so far: 0 | Weekly budget remaining: 5 of 5

**Market context** (as-of 2026-05-06 ~13:08 UTC, percentages only; data-source gaps flagged below)
- **S&P 500 futures (ESM26):** Tuesday cash close strong (SPX +0.74%, ESM26 +0.70%). No clean fresh overnight Wed print surfaced; carry-forward read is constructive into the open after AMD + Arista beats Tuesday post-close set a positive earnings tone.
- **VIX / US 10Y yield / DXY:** **no fresh prints surfaced** (seventh consecutive thin morning on these). Carry-forward VIX ~17–18, 10Y ~4.34–4.38%, DXY ~98.
- **WTI crude:** **~$102.56/bbl, −1.64% overnight** vs Tuesday close $104.37. Modest pullback after Monday's Iran-missile-claim spike to $105+ — profit-taking, not thesis-break. Range $99.57–$104.36 intraday. Iran/Hormuz status: ceasefire intact but strait remains de-facto closed; Iran FM Araghchi said US talks "making progress." Brent print not surfaced. *(One Perplexity result hallucinated a −12.24% overnight crash; cross-checked vs second source — no crash, decline is ~−1.6%. Flagging for data-quality awareness.)*
- **BTC: ~$82,320 at 8:45 ET, +1.27% overnight** vs Tuesday close $81,286. Live eToro mark **$82,069.83** at 13:08Z. Continues the breakout — highest sustained level since late January 2026, +6.6% on the week.
- **MSTR Q1 earnings (released Tuesday 5/5 post-close):** Strategy bought **89,599 BTC in Q1 at avg $80,900 (~$7.3B)**, plus **another 56,235 BTC in Q2-to-date**. Total holdings now **818,334 BTC (~3.9% of supply)**. Headline GAAP loss $12.8B (mark-to-market BTC write-down, non-cash); revenue $124.3M beat $120.75M consensus; YTD Q2 unrealized fair-value gain ~$8.3B. Net read: **structural BTC-institutional-bid narrative reinforced** — exactly the catalyst we wanted from this print.
- **ETH:** ~$2,379 area carry-forward; no fresh May 6 print. ETH/BTC ratio data not surfaced.
- **Today's catalysts (data-heavy mid-week):**
  - **ADP Employment Change** — pre-market, typical 8:15 ET. Consensus not surfaced. NFP-tail read.
  - **MBA Mortgage Applications** — 7:00 ET. Tier-2.
  - **EIA Crude Oil Inventories** — 10:30 ET. **Direct catalyst for XLE.** Builds vs draws steer WTI mid-session.
  - **Heavy earnings tape (pre + post):** DIS, UBER, CVS, MAR, ARM, APP, DASH, FTNT, NVO, EQNR, APO. Mixed sectors — no single name in our portfolio.
  - **Geopolitics:** Iran ceasefire intact; Hormuz unresolved; US pressuring China to push Iran on strait reopening.
- **Sector momentum (YTD through 5/4):** **XLE +33.70%** (uncontested leader, our class), **XLK +15.19%** (tech leadership reclaim continuing), **XLI +11.46%** (industrials strong), **XLU +9.38%**, **XLP +8.15%**, **XLF −5.34%**, **XLV −5.84%**. SPY ~+5.6% YTD. 5-day window not surfaced cleanly.
- **Data quality caveat.** Perplexity continues to return thin/gapped data on VIX, 10Y, DXY, ETH, and live earnings calendars; one query hallucinated a WTI crash that did not occur. Treat third-party feeds as directional only; eToro `/pnl` + `/rates` are source of truth for position math. Carry-forward macro reads remain the working baseline.

**Holdings check**
- **BTC** (instrumentID 100000, weight 15.5% of equity, unrealized **+4.20%**, live $82,069.83 vs entry $78,765.12, stop $70,888.59): thesis **INTACT and STRENGTHENING**. MSTR Q1 confirmed ~145k BTC accumulation across Q1 + Q2-to-date — the institutional-buy catalyst we wanted from yesterday's preview. Price extending above $82k for first time since late January; +6.6% on the week. Stop $70,888.59 untouched (~13.6% headroom from current price). No adverse news, no >3% adverse gap. **HOLD.**
- **XLE** (instrumentID 3008, weight 10.2% of equity, unrealized **+3.28%**, live $59.44 vs entry $57.55, stop $51.79): thesis intact. WTI consolidating at $102.56 after Monday's $105+ Iran-missile spike; modest profit-taking, not thesis-break. Hormuz still de-facto closed = structural commodity bid. Energy sector remains YTD leader at +33.70%. Overnight move ~−0.1% on XLE itself (no >3% gap). EIA inventories at 10:30 ET is today's mid-session catalyst — builds could pressure intraday, draws could extend the leadership. Stop $51.79 untouched (~12.9% headroom). **HOLD.**

**Trade ideas** (0–5 per day; HOLD is default only when no idea qualifies)

Screened candidates + dispositions:

1. **DIS / UBER / CVS / ARM / APP / DASH / FTNT / MAR pre-earnings positioning** — heavy single-name earnings tape today. **Rejected: pre-earnings binary.** Pre-buy gate forbids speculating into a same-day earnings print. Post-print mean-reversion on a clean overnight reaction is potentially a market-open watchlist item, but pre-commit is a coin flip. None in our existing portfolio class, so no holdings-defense angle either.
2. **MSTR (BTC-leveraged proxy)** — Q1 print already digested post-close Tuesday. **Rejected: post-earnings tape unread.** With BTC at $82k+ and MSTR adding ~145k BTC YTD, a constructive reaction is plausible, but the print included a $12.8B GAAP loss optical headline — the tape may fade before it re-rates. Better captured via our existing BTC long, which gets the structural buy-pressure benefit without single-name binary risk.
3. **Add to BTC (push to ~20% weight)** — break-and-hold above $82k now confirmed; prior watchlist trigger ($79k break) cleared days ago. **Rejected: chasing the multi-month-high extension.** Position is +4.20% unrealized at the highest BTC print since late January. Adding here means buying into +6.6% week-long extension after the MSTR print is already public and priced. Concentration math: BTC class would jump from 15.5% → ~20.5% (still inside 50% class cap and 30% per-name) but on a momentum-without-pullback entry. Original 15% sizing already captures the upside; pre-add at the highs dilutes average entry without R:R improvement. Watchlist trigger for any add: BTC pulls back to $80k area on no-news + XLE stays bid.
4. **XLK (Tech SPDR)** — instrumentID 3021, ETF. Tech leadership +15.19% YTD; AMD + Arista beats Tuesday post-close set a positive sector tone. **Rejected: no specific 5/6 catalyst, NFP-binary still ahead.** ES futures roughly flat-to-up overnight; macro tape on hold for Friday's NFP. Wait for clean post-NFP sector confirmation. Watchlist for Friday afternoon / next-Monday entry.
5. **XLI (Industrials SPDR)** — +11.46% YTD, leading quadrant. **Rejected: same as XLK** — no 5/6-specific catalyst, NFP-binary ahead. Watchlist.
6. **Add to XLE / XOM direct / CVX** — energy still YTD leader, oil consolidating at $102 with Hormuz premium intact. **Rejected: chasing + EIA-print-binary mid-session.** XLE +33.70% YTD and our position +3.28% unrealized; adding pre-EIA is event-driven without an edge. If EIA prints draws AND XLE breaks $60 with volume in the cash session, market-open could re-evaluate; this morning is not the entry.
7. **ETH (Ethereum)** — instrumentID resolution + data-quality flag from yesterday unchanged. **Rejected: no fresh ETH-specific catalyst, derivative bet on broad crypto bid.** Stacking ETH on top of BTC pushes crypto class from 15.5% to ~25% on a single-driver tape (broad crypto risk-on). The MSTR catalyst is BTC-specific, not ETH-specific. Watchlist for fresh ETH-specific catalyst (regulatory, ETF flow, ratio breakout).
8. **GLD (Gold)** — Iran/Hormuz hedge. **Rejected.** Tape is risk-on (BTC at multi-month highs, S&P at record-area, energy bid intact). Iran ceasefire intact today. No fresh today-catalyst for a defensive hedge. Watchlist if Hormuz re-escalates or if Treasury-auction demand prints weak this week.
9. **XLF / XLV (lagging-quadrant ETFs)** — **Rejected: averaging into laggards without a thesis trigger** is the textbook anti-pattern.
10. **Defensive rotation (XLP, XLU)** — **Rejected.** Risk-on tape (BTC multi-month-highs, energy/tech leading, AMD/Arista beats overnight); defensive rotation is not the active flow today.

**Risk factors**
- **NFP Friday is the week's binary.** ADP this morning is a partial NFP-tail read but does not eliminate Friday's event risk. Holding 74.3% cash into the print is intentional dry-powder; deploying additional risk pre-NFP without a hard same-day catalyst is poor risk-budgeting.
- **EIA crude inventories at 10:30 ET is today's XLE-specific catalyst.** A surprise build could pressure XLE −1 to −2% intraday; a draw extends the leadership. Existing position size (10.2%) absorbs either move comfortably (~12.9% stop headroom). No action required, just awareness.
- **BTC at multi-month highs invites profit-taking.** A risk-off headline (Fed comment, tech-sector flush, macro surprise) hits crypto hardest. Position is +4.20% so the 10% stop band is now ~13.6% wide — comfortable cushion.
- **Iran-headline two-way risk.** If the ceasefire breaks overnight, oil re-prices sharply higher (XLE-positive, broader-market mixed); if Hormuz reopening is announced, oil and XLE could roll −3 to −5%. Both currently low-probability on next 24h based on FM Araghchi "making progress" remarks.
- **Heavy single-name earnings tape.** DIS / UBER / CVS / ARM / APP / DASH / FTNT / MAR cluster tonight could swing sector tape Wednesday-into-Thursday; we hold no direct exposure but XLK/XLI watchlist setups depend on the after-hours read.
- **MSTR post-earnings reaction unread.** A negative tape reaction to the $12.8B GAAP loss optical headline could weigh briefly on BTC sentiment even though the underlying BTC-accumulation story is bullish. Existing BTC long absorbs a 1–2% sympathy flush comfortably.
- **Data quality.** Perplexity returned thin data (seventh consecutive morning) on macro indicators and one explicit hallucination (WTI −12% claim) — treat all third-party quantitative reads as directional only.

**Watchlist (for market-open 9:35 ET routine and rest of week)**
- **XLE EIA reaction at 10:30 ET** — surprise draw + XLE break above $60 with volume → market-open could consider modest 5% add (taking total XLE weight to ~15%, still inside per-class cap). Surprise build + roll back toward $58 → no add, hold and reassess at midday.
- **BTC pullback to $80k on no-news** — second-tranche add condition. Skip if it pushes through $83k without pause.
- **XLK / XLI** — entry trigger = clean post-NFP sector confirmation Friday afternoon, or a fresh single-name catalyst.
- **DIS / UBER post-print mean-reversion** — if either gaps and shows reversal volume in Thursday's session on a clean overnight reaction, market-open could consider, but only with a documented today-thesis at that point.
- **ETH** — add only on a fresh ETH-specific catalyst (ETF flow, regulatory, ratio breakout); not a pure beta-to-BTC stack.

**Decision:** **HOLD.** No new opens today. No trims required (BTC 15.5% and XLE 10.2% — both under per-name 30% and per-class 50% caps; combined invested 25.7%, well under aggregate exposure limits). Both held positions in profit, theses intact and reinforced (BTC by MSTR ~145k-BTC accumulation print; XLE by Hormuz-intact + WTI consolidation at $102). No rule trips. Opens-this-week stays at 0/5; full weekly budget preserved. The asymmetric play this week remains reserving dry powder for clean post-NFP Friday setups and any EIA-driven XLE add condition, not deploying into pre-NFP Wednesday tape.

---

### 2026-05-05 — Tuesday Pre-Market (08:00 ET) — IRAN-MISSILE-CLAIM TAPE, BTC NEW HIGH SINCE JAN

**Snapshot:** Equity 100.9% of start | Cash 74.4% | Open positions: 2 (BTC 15.4%, XLE 10.2%) | Week opens so far: 0 | Weekly budget remaining: 5 of 5

**Market context** (as-of 2026-05-05 ~13:15 UTC, percentages only; data-source gaps flagged below)
- **S&P 500 futures (ESM26):** mixed overnight — one source ~−0.1%, another ~+0.2% to +0.3%. Net: roughly **flat to slightly soft into the open**. Light, undecided tape. Cash S&P referenced ~7,250 area.
- **VIX / US 10Y yield / DXY:** **no fresh prints surfaced** (sixth consecutive thin morning on these). Carry-forward VIX ~17–18, 10Y ~4.34–4.38%, DXY ~98.
- **WTI crude:** **~$104/bbl**, pulled back ~−1.5% to −2% from Monday's ~$105 high. Brent paired to $113 after Monday's +5.8% surge on Iran's disputed missile claim. Hormuz/Iran risk premium structurally bid; today's pullback is profit-taking, not thesis-break.
- **OPEC+:** modest +200kbpd output increase for May (post-UAE-exit follow-through). Headline-known, already priced.
- **BTC: ~+2.5% overnight to ~$81,500**, crossing $81k in Asian hours — **highest level since late January 2026**, +5.3% on the week. Driver: continued spot-tape bid plus risk-on rotation that briefly reversed on Monday's Iran missile headline before recovering. Live eToro mark **$81,496.35**.
- **ETH:** ~$2,379, ~flat on the day, +4.0% on the week.
- **Crypto sector:** Strategy (MSTR) reports earnings Tuesday — known BTC-bull catalyst; perennial driver of incremental BTC demand if they announce another buy. No fresh ETF-flow or regulatory headlines surfaced.
- **Sector momentum (YTD through 5/1, 5-day window not surfaced):** XLE **+32.49%** (clear leader, energizing further on Iran tape), XLK **+12.57%** (tech leadership reclaim continuing), XLI **+11.81%** (industrials strong), XLF **−4.72%** (lagging), XLV **−5.84%** (lagging — weakening quadrant). SPY **+5.97% YTD**. Read: **Energy + Tech + Industrials remain the leadership trio**; financials and healthcare in the dog house.
- **Today's catalysts:**
  - **MSTR (Strategy) earnings Tuesday** — biggest single-name BTC-tape catalyst this week.
  - **Friday: US Nonfarm Payrolls (NFP)** — the marquee macro print of the week; defer aggressive deployment until the post-print tape is readable.
  - **Pre-open earnings calendar for 5/5:** thin / not surfaced cleanly by Perplexity. No confirmed mega-cap pre-open names.
  - **Geopolitics:** Iran missile claim from Monday remains disputed; tape priced the headline once and recovered. No fresh overnight geopolitical surprise.
- **Data quality caveat.** Perplexity returned thin/gapped data on VIX, 10Y, DXY, today's earnings calendar, and 5-day sector returns — sixth consecutive morning. Carry-forward is the working baseline; midday should reconcile vs cash-market reads.

**Holdings check**
- **BTC (15.4% weight, +3.5% unrealized, live $81,496.35 vs entry $78,765.12, stop $70,888.59):** thesis intact and **strengthening sharply**. First close in solid green territory since the 4/22 entry; crossing $81k is the highest print since late January 2026. Catalysts feeding the bid: MSTR earnings today (potential further institutional-buy signaling), continued risk-on rotation despite Iran headline, and weekly-tape +5.3%. Stop $70,888.59 untouched (well below; ~13.0% headroom from current price). No adverse news, no >3% adverse gap. **HOLD.**
- **XLE (10.2% weight, +3.2% unrealized, live $59.39 vs entry $57.55, stop $51.79):** thesis intact. WTI consolidating at $104 after Monday's spike to $105+ on the Iran missile claim. Energy sector remains YTD leader at +32.49% with continuing Hormuz risk-premium tailwind. XOM-earnings-beat follow-through still in the tape. Overnight move was ~−0.1% (no >3% gap). Stop $51.79 untouched (~12.8% headroom). **HOLD.**

**Trade ideas** (0–5 per day; HOLD is default only when no idea qualifies)

Screened candidates + dispositions:

1. **MSTR (Strategy)** — BTC-leveraged proxy reporting earnings today. **Rejected: pre-earnings binary.** Pre-buy gate forbids speculating into a same-day earnings print. If MSTR announces another large BTC buy, our existing BTC long captures the second-order benefit without taking the single-name binary risk.
2. **Add to XLE / open a second energy long (XOM, CVX direct)** — energy still YTD leader, oil consolidating at $104, Hormuz premium intact. **Rejected: chasing.** XLE has already run +32% YTD and our position is +3.2% unrealized. Adding now into a +5.8% Brent surge that Monday already digested is late-cycle entry — no fresh catalyst differentiates today from the 4/27 open. Energy class would also climb to ~20% with two leveraged single-name beta on top of XLE — concentration without an independent driver.
3. **XLK (Tech SPDR)** — instrumentID 3021, ETF. Tech reclaiming leadership at +12.57% YTD; sector momentum maps put XLK in the leading quadrant alongside XLE. **Rejected: no specific 5/5 catalyst.** ES futures roughly flat overnight; no mega-cap earnings pre-open today; the macro tape is on hold for Friday's NFP. Wait for a clean catalyst (NFP-print sector reaction, single-name earnings, fresh sector flow). Watchlist for post-NFP Friday/next-Monday.
4. **ETH (Ethereum spot)** — instrumentID 100001 (verify before any open), crypto. ETH +4.0% on the week, holding $2,379. **Rejected: derivative bet, no independent catalyst.** Stacking ETH on top of BTC pushes crypto class from 15.4% to ~30% on a single-driver tape (broad crypto bid). The MSTR-earnings catalyst is BTC-specific, not ETH-specific. Revisit if ETH/BTC ratio extends materially or a fresh ETH-specific catalyst (regulatory, ETF flow, dApp narrative) appears.
5. **XLI (Industrials)** — +11.81% YTD, leading quadrant. **Rejected: same as XLK** — no 5/5-specific catalyst. Watchlist for next clean entry trigger.
6. **XLF (Financials)** / **XLV (Healthcare)** — lagging-quadrant ETFs. **Rejected: averaging into laggards without a thesis trigger** is the textbook anti-pattern.
7. **Defensive rotation (XLP, XLU)** — unconvincing. **Rejected.** Tape is risk-on (BTC at multi-month highs, energy/tech leading); defensive rotation is not the active flow today.

**Risk factors**
- **NFP Friday is the week's binary.** A hot or cold print re-prices yields → equity sectors → risk-on/off across our exposure. Holding 74.4% cash into the print is intentional dry-powder; deploying additional risk pre-NFP without a hard same-day catalyst is poor risk-budgeting.
- **Iran-missile narrative could re-escalate.** Monday's claim was disputed; if it's confirmed/extended overnight, oil re-prices higher (XLE-positive, broader-market-mixed); if the disputation is corroborated, oil gives back further (still leaves XLE +3.2% buffer, well inside −10% stop).
- **BTC at multi-month highs invites profit-taking.** A risk-off headline (Fed comment, tech-sector flush, macro surprise) hits crypto hardest. Position is +3.5% so the 10% stop band is now ~13% wide — comfortable cushion, but not infinite.
- **MSTR-earnings tail.** A weak Strategy print could puncture the BTC-institutional-bid narrative midday; a strong print + new BTC buy announcement could extend the rally further. Either way, our existing BTC long is the right vehicle, not a same-day MSTR pre-earnings open.
- **Data quality.** Perplexity's thin returns on VIX, 10Y, DXY, and 5/5 earnings calendar mean we are flying partially on carry-forward macro. Midday should reconcile vs eToro/cash-market reads.

**Watchlist (for rest of the week)**
- **XLK / XLI** — leadership reclaim continuing; entry trigger = clean post-NFP sector confirmation Friday afternoon, or a fresh single-name catalyst.
- **ETH** — add only on a fresh ETH-specific catalyst (ETF flow, regulatory, ratio breakout); not a pure beta-to-BTC stack.
- **XLE add-on** — would require a fresh leg in WTI (e.g., Iran-talks breakdown) AND XLE pulling back to 10DMA, neither present today.
- **MSTR post-earnings** — if Tuesday print includes a new large BTC buy, re-evaluate Wednesday for direct exposure.

**Decision:** **HOLD.** No new opens today. No trims required (both positions well under per-name 30% and per-class 50% caps). Both held positions are in profit and thesis-intact; no rule trips. Opens-this-week stays at 0; weekly budget of 5 untouched. The asymmetric play this week is reserving dry powder for clean post-NFP Friday setups, not deploying into a thin pre-NFP Tuesday tape.

---

### 2026-05-04 — Monday Pre-Market (08:00 ET) — POST-XOM-BEAT, FRESH WEEK

**Snapshot:** Equity 100.3% of start | Cash 74.8% | Open positions: 2 (BTC 15.0%, XLE 10.2%) | Week opens so far: 0 (fresh week) | Weekly budget remaining: 5 of 5

**Market context** (as-of 2026-05-04 ~13:12 UTC, percentages only; data-source gaps flagged below)
- **S&P 500 futures (ESM26):** ~**+0.06% to +0.20%** overnight to ~7,258–7,263 area. Modest risk-on drift into the open after Friday's strong session. No fresh cash-tape print available; tone constructive.
- **VIX / US 10Y yield / DXY:** **no fresh prints surfaced** (fifth consecutive thin morning on these). Carry-forward VIX ~17–18, 10Y ~4.34–4.38%, DXY ~98.
- **WTI crude:** **~$102/bbl** with conflicting overnight reads (one source flagged a +4.5% 24h move; Friday closed −2.98% per CLM26 reference). Net read: oil is consolidating in the $100–105 band post-Friday-pullback; **Hormuz/Iran data is contradictory this morning** — one Perplexity source surfaced an outdated narrative claiming the strait reopened on April 17, contradicting our consistent prior reads (de-facto closed driving WTI to $102–107). Treating Hormuz status as **structurally bid-supportive but unresolved**; reconcile midday on eToro/cash-market reaction.
- **BTC:** **eToro live closeRate $78,947.02** at 13:10Z — **+0.99% from Friday's $78,173.16 close**, modest weekend recovery. Position now **+0.23% unrealized** (vs −0.8% Friday EOD). Independent confirmation: Fortune $78,178 (5/1) → CoinStats $78,569 (5/4) ≈ +0.5% weekend move; eToro feed is source of truth. **Strong ETF tailwind**: Friday 5/1 alone saw **$629.8M net inflows across spot BTC ETFs** (BlackRock IBIT $284.4M, Fidelity FBTC $213.4M, ARK ARKB $88.5M); April 2026 closed as the strongest BTC-ETF month of the year at **$1.97–2.44B net inflow**, total BTC-ETF AUM crossed **$100B**. BTC dominance >60% as capital rotates back into BTC from alts.
- **ETH:** May 1 reference $2,308.85; **no fresh May 4 print available** — Perplexity returned no clean ETH/BTC ratio update today. Data-quality flag.
- **Today's catalysts (light Monday):**
  - **No top-tier US macro release** confirmed for 5/4 (Perplexity returned no specific calendar). Treasury auctions flagged as a wildcard this week (weak demand → 10Y yield spike risk).
  - **No confirmed pre-open earnings** for Monday. Q4 2025 earnings season is officially kicking off this week with major banks leading the first wave — specific tickers/dates not surfaced.
  - **Geopolitics:** Iran/Hormuz/Middle East "war-inflation" narrative continues; no fresh weekend escalation/de-escalation headline. Venezuela + Greenland headline-risk noise (low-conviction signal).
  - **Fed independence:** ongoing political pressure on Powell flagged in macro commentary; not a today-event but a regime backdrop.
- **Sector momentum (YTD through 5/1, total return per Perplexity):** **XLE +32.49%** (uncontested leader, reinforced by Friday's XOM beat), **XLK +12.57%**, **XLI +11.81%**, **XLF −4.72%**, **XLV −5.84%**. 5-day prints not surfaced cleanly. Carry-forward read: energy/tech leadership intact, financials/healthcare lagging into Q4-bank-prints.
- **XOM Q1 (reported Friday 5/1 pre-market) — STRONG BEAT, MUTED REACTION:**
  - GAAP EPS $1.00 (down YoY due to $3.9B unfavorable derivative timing + $0.7B Middle East hedge losses); **adjusted EPS $2.09** ex-timing. Headline EPS $1.16 vs consensus $1.02–1.07 = **+8.8% to +13.7% beat**. Revenue $85.1B vs $83.1B prior year, beat by +4.5%.
  - **Industry-leading 42% Q1 TSR.** $9.2B distributed ($4.3B dividends + $4.9B buybacks); on track for $20B 2026 buyback plan.
  - Operational beats: record Guyana output, first LNG from Golden Pass Train 1, $0.6B structural cost savings.
  - **Stock reaction:** XOM closed Friday $151.63, **−0.73% on the day** — market faded the beat on the GAAP optical headline despite strong adjusted EPS, 42% TSR, and operational wins. Possible setup: a beat-but-sold reaction can mean-revert if Monday tape reads the underlying numbers cleanly.
- **CVX Q1:** **no Perplexity data surfaced** despite being same-window report. Cannot reconcile the print without secondary sources. Data-quality flag.

**Holdings check**
- **BTC** (instrumentID 100000, weight 15.0% of equity, unrealized **+0.23%**) — **thesis INTACT and STRENGTHENING.** Weekend recovery (+1% from Friday close), $629.8M Friday ETF inflow + April $1.97–2.44B cumulative + AUM crossing $100B is structural institutional bid. Stop $70,888.59 untouched (live $78,947 = ~10.2% cushion). Hold. **Risk:** weekend gap-risk window has now closed cleanly; this week's risk is a hawkish 10Y auction outcome pressuring duration-sensitive risk assets.
- **XLE** (instrumentID 3008, weight 10.2% of equity, unrealized **+2.24%**) — **thesis INTACT and REINFORCED by XOM beat.** XOM (~24% of XLE NAV) just printed +13% adjusted-EPS beat with industry-leading 42% TSR + $20B buyback on track + record Guyana + Golden Pass LNG first. WTI consolidating in the $100–105 band still keeps the underlying commodity tailwind structurally bid. CVX print uncertain (data gap) but XLE-level diversification absorbs single-name surprise. Stop $51.79 untouched (live $58.84 = ~12.0% cushion). Hold; do **not** pre-add ahead of cash-market read. **Risk:** Iran/Hormuz reversal headline (one source flagged a possibly-outdated "April 17 reopen" narrative that needs midday reconciliation); CVX print disappointment (still unresolved).

**Trade ideas** (0–5 per day; HOLD is default only when no idea clears the gate)

Screened candidates + disposition:

1. **XOM (Stocks — Energy)** — instrumentID `1036`, exact `internalSymbolFull=XOM` match. **B+/A-grade — DEFERRED to market-open watchlist.** Catalyst: Friday's +13% adjusted-EPS beat with 42% Q1 TSR, $20B buyback, record Guyana, Golden Pass LNG — and the stock SOLD OFF −0.73% on the GAAP optical headline ($1.00 vs $2.09 adjusted). Setup logic: a beat-but-sold post-earnings reaction can mean-revert as the market re-reads underlying numbers. Current $151.63 (−1.75% MTD, +27.25% YTD, six-month +34.2%). **Why deferred:** (a) XOM is ~24% of our existing XLE weight, so a direct add stacks single-name concentration on the same commodity catalyst — not diversification; (b) post-earnings reactions can extend over multiple sessions before reversing; (c) the right entry is intraday confirmation (XOM gapping lower at open with reversal volume, OR XOM holding the $151 area into the cash-tape close), not a pre-market pre-commit. Market-open routine should re-evaluate at 9:35 ET; if a clean reversal print emerges, size 5–8% with a 10% stop ($136.47), accepting concentrated-but-coherent stack on XLE.
2. **XLE add (~15–20% total weight)** — instrumentID `3008`. **Rejected: chasing the breakout into a +32% YTD leader.** XLE already +2.24% unrealized for us; XOM beat is now confirmed; the structural commodity tailwind is the same one we're already long. Adding here means buying the post-confirmation extension — textbook "doji-prone leader chase." Original 10% sizing captures the upside; pre-add risks dilute average entry without R:R improvement.
3. **CVX direct (Stocks — Energy)** — eToro `search CVX` returns `internalSymbolFull=CVX.US` (instrumentID 1014, NYSE Chevron equity). **Rejected: instrument-resolution failure.** CLAUDE.md rule 8 requires `internalSymbolFull == "<SYMBOL>"` exact match — `CVX.US` is not equal to `CVX`. Also: Perplexity returned no Q1 print data for CVX, so the catalyst cannot be confirmed. Two independent gate failures.
4. **BTC add** — already 15.0% weight. **Rejected: watchlist trigger not fired.** The carry-forward add condition is "clean break-and-hold above $79k with no adverse headline." BTC is at $78,947 — **below $79k**, only marginally close. ETF flows are structurally supportive but there's no fresh today-specific A-grade catalyst beyond carry-over from Friday's $629.8M inflow. Adding now pushes crypto class to ~25% on a non-triggered breakout.
5. **ETH (Crypto)** — **Rejected: data-quality flag.** Perplexity returned no clean ETH May 4 print, so the ETH/BTC ratio expansion read cannot be confirmed today. Strategy explicitly screens against "averaging into momentum without thesis" — without a fresh ETH-specific catalyst or a confirmed ratio expansion, no entry today.
6. **Bank earnings pre-positioning (XLF / single-name banks)** — **Rejected: no confirmed Monday names.** Q4 2025 earnings season starting this week with banks first per Perplexity, but no specific tickers/dates surfaced. Pre-buy gate requires catalyst documented today; speculating on unconfirmed timing violates rule 4.
7. **GLD (Gold)** — **Rejected: no fresh today-catalyst.** Iran/Hormuz status data is contradictory (April 17 stale-narrative flag), and the dominant inflation-hedge narrative is not a Monday-specific trigger. Defer until either (a) a confirmed Hormuz escalation, (b) a soft Treasury auction this week pushing yields up.
8. **XLK / QQQ (Tech ETFs)** — **Rejected: no fresh today-catalyst.** YTD strength remains intact (+12.57%), but no specific 5/4 tech-sector trigger. Mag-7 reports already digested; entry is mid-range, not on a pullback.

**Risk factors**
- **Hormuz/Iran narrative uncertainty.** One Perplexity source returned a possibly-outdated "April 17 strait reopened" narrative that contradicts our consistent prior reads (still de-facto closed). If the reopening is real and we missed the headline, XLE thesis weakens materially. Midday should reconcile via cash-market WTI reaction and fresh news scan.
- **CVX Q1 data gap.** No Perplexity data on Chevron's Friday print. If CVX missed/disappointed where XOM beat, XLE could roll on the second leg of the energy-earnings binary even though XOM was strong. ~17% of XLE NAV.
- **Treasury auction wildcard this week.** Weak demand at 10Y/30Y auctions could spike yields, pressuring duration-sensitive risk (BTC, growth equities). Position sizes (15% BTC, 10.2% XLE) are sized to absorb a 1–2% yield-driven equity flush; deeper moves trip the −7% manual cut.
- **Earnings-season open.** Q4 2025 banks lead this week — XLF (−4.72% YTD) is the lagging sector going in; a hot bank print could re-rate XLF (we don't hold), a soft print could deepen the lag (still we don't hold).
- **Cash drag at 74.8%.** Above the 5–10% buffer target by design — deliberate dry powder. Three weeks running at 75%+ cash; the May 1 strategy amendment explicitly permits this when meta-rule "patience > activity" supersedes the deployment target. Today's tape (no top-tier catalyst, light Monday) does not warrant forcing a B-grade entry.
- **Data quality.** Perplexity returned thin data on VIX/10Y/DXY (5th consecutive thin morning), no FOMC speaker/macro-calendar specifics, no ETH May 4 print, no CVX Q1 data, and a contradictory Hormuz narrative. Treat all third-party quantitative reads as directional only; eToro `/pnl` + `/rates` are the source of truth for position math.

**Watchlist (for market-open 9:35 ET routine and rest of week)**
- **XOM intraday reversal** — if XOM gaps lower at the cash open AND shows reversal volume / closes the gap within the first 30 minutes, consider 5–8% direct add (stop $136.47, target ~$182, R:R 2:1), accepting concentrated-but-coherent stack on existing XLE.
- **BTC $79k break-and-hold** — second-tranche add condition unchanged; would push crypto class to ~25%.
- **CVX clean instrument-resolution + Q1 confirmation** — if a name-based search resolves CVX cleanly OR an alternate ticker form returns exact match, AND CVX print is at-least-in-line, can size 5% as a complement to XLE.
- **XLF / banks** — once specific Q4 2025 bank-print dates are confirmed for this week, set up post-print read for entry.
- **GLD** — escalate if Hormuz status is confirmed worsening OR if Treasury auctions print weak demand later this week.

**Decision:** **HOLD.** No new opens at the pre-market mark. The cleanest A-grade construct (XOM mean-reversion on muted post-earnings reaction) requires intraday confirmation, not a pre-commit. Both held positions thesis-intact and reinforced (BTC +0.23% with structural ETF inflow tailwind; XLE +2.24% with XOM beat directly reinforcing the underlying NAV). No trims required (BTC 15.0%, XLE 10.2% — neither over a class or single-name cap; combined invested 25.2%, well under the 50% class cap). Opens-this-week stays at 0/5; full weekly budget preserved for any A-grade catalyst emerging Tue–Fri.

---

### 2026-05-01 — Friday Pre-Market (08:00 ET) — XOM/CVX EARNINGS DAY, WTI PULLBACK

**Snapshot:** Equity 100.3% of start | Cash 74.8% | Open positions: 2 (BTC, XLE) | Week opens so far: 1 | Weekly budget remaining: 4 of 5

**Market context** (as-of 2026-05-01 ~13:20 UTC, percentages only; data-source gaps flagged below)
- **S&P 500 futures (ESM26):** Thursday cash close +1.02%, ESM26 +1.01% — strong risk-on session yesterday on lower oil + lower yields. Perplexity returned no clean Friday overnight print; cash level carry-forward ~7,210 area. Tone constructive into the open.
- **VIX:** no fresh print surfaced; carry-forward ~17–18 (calm regime).
- **US 10Y yield:** **4.34–4.38%** (down −5bp Thursday on the oil-pullback / disinflation read; consensus expectations 4.34–4.36% for today).
- **WTI crude — REVERSAL.** Spot ~**$102.25, −3.0% overnight** vs $105.41 close 4/30 (and pulling back from a $107.35 Thursday peak). Brent still elevated near $114 (Hormuz de-facto closed, US gasoline ~$4.30/gal). Net: yesterday's +7% commodity surge has paused/partially-faded — XLE bid is still structurally there but the immediate tape tailwind has cooled. **This is the biggest read of the morning for the XLE position.**
- **DXY:** no fresh print available.
- **BTC:** **eToro live closeRate $78,276.49** at 13:18Z — **+2.4% from 4/30 EOD ($76,435.32)**, recovering meaningfully overnight after multi-day softness. Position now −0.6% unrealized vs −3.0% yesterday. Perplexity returned conflicting third-party prints ($91k vs $77k across sources) — **flagging as data-quality issue; eToro feed is source of truth for our position math**. April BTC ETF inflow was strong (~$2.44B, multi-month high) and ETH outperformance vs BTC continues in the rotation read (ETH/BTC ratio at YTD highs).
- **ETH:** ~$2,283 area; +8%/24h vs BTC's mixed prints in third-party data — flagged as inconsistent across sources but directionally supports ETH > BTC continued rotation.
- **Today's catalysts (heavy — first Friday of the month):**
  - **XOM Q1 earnings — pre-market 5:30 CT** (already released by 13:20Z routine time; conference call 8:30 CT). Consensus: EPS $1.07 (−39% YoY), Revenue $81.5B (−2% YoY). Zacks ESP −10.88% (model leaned miss); however XOM beat 4 straight quarters (avg +4.2% surprise). Guidance: upstream +$1.9–$2.3B sequential on higher liquids; +$200–600M from gas. Premium valuation 9.85x EV/EBITDA vs 6.83x sector avg.
  - **CVX Q1 earnings — same morning.** Consensus revenue $51.86B (vs ~$45B prior-year). Premium valuation 9.92x EV/EBITDA.
  - **ISM Manufacturing PMI** — consensus 53. **ISM Prices Paid** consensus 80 (prior 78.3) — a hot Prices Paid print signals tariff/oil cost pass-through. Standard 10:00 ET release.
  - **NFP / Jobs Report** — first Friday of month is the standard window (8:30 ET); Perplexity did not surface confirmed timing or consensus today, flagging as **possibly-unconfirmed** — treat as event-risk window even if Perplexity missed it.
  - **Geopolitics:** Hormuz blockade still active; the modest overnight oil pullback suggests no fresh escalation but no resolution either.
- **Sector momentum (YTD through ~4/30):** **XLE +33–34% YTD** (uncontested leader; XOM/CVX prints today are the binary), **XLI +12.86%**, **XLK +10.7–10.9%**, **XLU +7.8–10.5%**, **XLP +7.4–9.2%**, **XLF −4.3 to −4.7%**, **XLV −7.4%**. 5-day prints not surfaced cleanly; carry-forward read is energy/tech leadership intact, financials/healthcare lagging.

**Holdings check**
- **BTC** (instrumentID 100000, weight 14.9% of equity, unrealized **−0.6%**) — **thesis INTACT and IMPROVING.** Price recovered from $76.4k → $78.3k overnight (+2.4%), unrealized loss compressed from −3.0% to −0.6%. April ETF inflow strong, MicroStrategy still adding, no adverse catalyst. Stop $70,888.59 untouched (live $78,276.49 = ~9.4% cushion vs −10% rule). Hold. **Risk:** weekend gap exposure inherent to crypto — Friday close = max-risk-of-week window.
- **XLE** (instrumentID 3008, weight 10.3% of equity, unrealized **+3.7%**) — **thesis INTACT but ENTERS BINARY-EVENT WINDOW.** XOM and CVX both reporting this morning pre-market with mixed analyst skew (Zacks model leans miss for XOM, but recent surprise history is +4.2% beat-rate). Hormuz still bid-supportive structurally even with the −3% overnight WTI pullback. Stop $51.79 untouched (live $59.68 = ~13.2% cushion vs −10% rule). Hold; do not pre-add. **Risk:** if XOM and CVX both miss/disappoint on the print, XLE could roll back 1–2% intraday and unwind today's mark-to-market gain.

**Trade ideas** (0–5 per day; HOLD is default only when no idea clears the gate)

Screened candidates + disposition:

1. **XLE add (to ~15–20%)** — instrumentID `3008`. Catalyst: XOM/CVX pre-market earnings, Hormuz risk premium intact. **Rejected: pre-emptive doubling into a binary print is event-driven without an edge**, especially when we already hold +3.7% unrealized. The clean play is to let the print hit and re-evaluate at market-open with confirmed price reaction. If XOM beats AND XLE gaps up with volume on the open, market-open can consider a modest add on confirmation; if XOM misses, XLE pullback could be a better re-entry layer than chasing here.

2. **XOM single-name long pre-print** — direct earnings binary. **Rejected: same problem.** Pre-print event-trading on a single name with negative Zacks ESP and 9.85x premium valuation is a coin flip dressed up as a trade. No edge.

3. **GLD (Gold)** — Hormuz/geopolitical hedge. **Rejected.** WTI −3% overnight signals geopolitical risk premium is fading, not building, this morning. Gold long without an escalation catalyst today is fading the tape. If Hormuz news breaks adverse, market-open can revisit.

4. **XLI (Industrials SPDR)** — YTD +12.86%, second-best sector. **Rejected.** ISM Manufacturing print at consensus 53 is borderline-expansion; **ISM Prices Paid at 80 is bearish for industrials** (input-cost squeeze on margins), and a beat on Prices Paid would actually pressure XLI. Asymmetric-risk against XLI today, not toward. No A-grade setup.

5. **ETH (Ethereum) — rotation play.** Catalyst: ETH outperforming BTC, ETH/BTC at YTD highs, ETH ETF inflows strong, BTC ETF outflows. **Rejected: data-quality flag.** Perplexity returned conflicting price prints ($91k BTC across one source, $77k across another) — when third-party feeds are this inconsistent, the right call is no new crypto exposure today. Also weekend-gap-risk on a Friday open is structurally bad timing for fresh crypto. Reconsider Monday with cleaner data.

6. **BTC add** — already 14.9% weight; class cap 50% allows headroom. **Rejected.** Weekend-gap risk argues against adding to crypto on Friday with no fresh catalyst beyond a 24h price recovery.

7. **XLK (Technology SPDR)** — YTD +10.7–10.9%, strong leadership intact. **Rejected.** No specific tech catalyst today; broader market is XOM/CVX/ISM/possibly-NFP-driven. No catalyst-today = pre-buy gate failure.

**Risk factors**
- **Earnings-day binary on XLE.** XOM and CVX prints this morning are a true two-sided event — beats with positive guidance extend XLE's run; misses or weak guidance trigger a 1–3% intraday roll. Existing position size (10.3%) is the right risk-budgeted exposure into this; not adding, not trimming.
- **WTI reversal continuation.** Overnight −3% pullback off $107 → $102 could be a one-day pause, or it could be the first leg of a Hormuz-de-escalation re-rate (no confirmed news either way). If WTI breaks $100 cleanly, XLE thesis is materially weakened.
- **ISM Prices Paid stagflation read.** A hot 80+ Prices Paid coupled with a soft Manufacturing print (sub-50) would be stagflation-flagging — broadly bearish equities, bullish gold/Treasuries, bearish industrials/financials.
- **Possible NFP miss/blowout.** First-Friday window risk; Perplexity didn't surface consensus, so this is unmodeled event risk. Soft NFP would lower yields further (bullish duration, mixed for equities); blowout NFP could spike yields (negative for both BTC and broader risk).
- **Crypto weekend gap.** Friday-into-Monday is the max-gap-risk window for BTC. Stop at $70,888.59 is on-server 24/7 — survives the gap — but a sub-$70k Sunday print would auto-cut the position.
- **Data-quality fragility.** Multiple Perplexity queries today returned thin or conflicting prints (VIX, DXY, ETH/BTC, NFP confirmation). Treat all third-party quantitative reads as directional only; eToro `/pnl` is the source of truth for position math.

**Watchlist for market-open (9:35 ET routine)**
- **XLE / XOM / CVX post-print confirmation.** If XOM and CVX both beat with constructive guidance AND XLE gaps and holds above $60.00 in the first 30 minutes, consider a modest XLE add (~5% incremental, taking total XLE weight to ~15%, well inside 30% per-name and 50% per-class caps). If they miss/disappoint and XLE rolls below $58.50, no add and reassess stop discipline only (stop at $51.79 still holds).
- **ISM Prices Paid reaction at 10:00 ET.** Hot print + soft headline → no new longs in industrials/financials; cool print + stable headline → cyclicals re-bid possible.
- **Crypto:** no add into the weekend without a fresh catalyst.

**Decision:** **HOLD.** No new opens at the pre-market mark; let XOM/CVX earnings, ISM 10:00 ET, and possible NFP 8:30 ET print before any market-open action. No trims required (XLE +3.7% and BTC −0.6% both well inside risk band, both theses intact). Opens-this-week stays at 1/5; cash 74.8% (above the 5–10% target by design — deliberate dry powder into a multi-catalyst session, with conditional add prepared for market-open if XOM/CVX confirms).

---

### 2026-04-30 — Thursday Pre-Market (08:00 ET) — POST-FOMC, OIL +7%

**Snapshot:** Equity 99.8% of start | Cash 75.2% | Open positions: 2 (BTC, XLE) | Week opens so far: 1 | Weekly budget remaining: 4 of 5

**Market context** (as-of 2026-04-30 ~13:05 UTC, percentages only; data-source gaps flagged below)
- **S&P 500 futures (ESM26):** Perplexity returned no clean overnight print; carry-forward from 4/27 ESM6 ~7,210 (above prior all-time-high band). Prediction-market odds suggest >97% settle ≥7,150 on 4/29. Weak data quality on the cash-equity tape this morning — flagged.
- **VIX / 10Y / DXY:** no fresh prints (fourth consecutive thin morning on these). Carry-forward VIX ~17–18, 10Y ~4.30%, DXY ~98.4.
- **WTI crude — MAJOR ESCALATION.** June 2026 futures (CLM26) closed **+6.95% on 4/29** to ~$106 area. Spot WTI ~$108. This is on top of the prior 8-day rally (4/29 entry noted +3.4% then). Driver: Hormuz still de-facto closed; Iran talks remain stalled. Brent–WTI spreads continue to widen on shipping costs. **One Perplexity result mentioned "UAE exiting OPEC" — unconfirmed in cross-source; flagging as a potential cross-current that could complicate the long-energy thesis if real, since OPEC discipline weakening is medium-term bearish even if Hormuz keeps the spot bid.** Net read: the energy bid is materially stronger than yesterday, and yesterday's flagged path (XOM/CVX direct on Thu/Fri post-FOMC) is now active-window — but the entry is later (oil already pre-paid +7%).
- **BTC:** $76,200–$77,000 overnight; eToro live $76,314.70 at 13:04Z. Mild softness vs yesterday's $77.0k consolidation. April monthly +16% (highest since Oct 2025). **US spot BTC-ETF April net inflows ~$2.44B** (cumulative; highest since Oct 2025 per Perplexity). MicroStrategy added 3,273 BTC (~818k total). 9-day inflow streak persisting.
- **ETH:** ~$2,260 (–0.5% intraday); ETH/BTC ratio at YTD highs; April rally double-digit on the alts.
- **Today's catalysts (light/uncertain — Perplexity returned no clear catalyst calendar):**
  - **No top-tier US macro release confirmed** for 4/30 in research (jobless claims is the standard Thursday print but Perplexity didn't surface time/consensus — treating as unconfirmed soft tape).
  - **Earnings:** Perplexity surfaced "Intel surging in after-hours" (presumably reported 4/29 PM) and "earnings surprises across nine sectors" — non-specific. **XOM reports Friday 5/1 pre-market 5:30 CT** (confirmed). CVX timing not surfaced but historically same week.
  - **Geopolitics:** Iran/Hormuz oil-bid story is the dominant tape driver for the second consecutive day.
- **Sector momentum (YTD through ~4/29):** **XLE +32.89% YTD** (extended leader, accelerating — added another ~+1% from 4/28→4/29, XLE intraday $59.05 vs 4/29 close $58.28 = another +1.32% so far today). **XLI +9.86% YTD**, XLF –4.72% YTD, XLV –6.70% YTD. XLK YTD not surfaced; carry-forward strong (1Y +35%). Apr 24 daily prints: XLK +1.78%, XLI +0.26%, XLE −0.83%, XLV −0.71%, XLF flat. **Energy is the only obviously-confirmed-strong tape today.**

**Holdings check**
- **BTC** (instrumentID 100000, weight ~14.6% of equity, unrealized **−3.11%**) — **thesis INTACT.** April ETF inflow at $2.44B (a multi-month high), MicroStrategy adding, BTC consolidating in the $76–77k band rather than breaking down post-FOMC. Stop $70,888.59 untouched (live $76,314.70 vs −10% rule, ~7% cushion). Hold. **Risk:** further cash-equities risk-off on the oil-shock tape could pressure BTC further.
- **XLE** (instrumentID 3008, weight ~10.3% of equity, unrealized **+2.61%**) — **thesis INTACT and STRENGTHENING materially.** WTI +6.95% on 4/29 + Hormuz still closed = direct tailwind into XLE's largest holdings. XOM and CVX both report Friday 5/1, which is an additional positive-skew event for the existing position. Stop $51.79 untouched (live $59.05 = +2.61% vs −10% rule, ~12.6% cushion). Hold.

**Trade ideas** (0–5 per day; HOLD is default only when no idea clears the gate)

**Zero new opens proposed today.** Screened candidates + reasoning:

1. **XOM direct (instrumentID 1036, Stocks)** — *Rejected: Friday-earnings binary 24h away.* Resolved exact `internalSymbolFull=XOM` (id 1036, NYSE). Last close $153, 1-day −1.08%, 1-week +2.75%, 1-month **−9.82%** (lagging the commodity). Earnings confirmed Friday 5/1 5:30 CT pre-market. Setup logic is real (oil rally + lagging name + earnings catalyst), but the pre-buy gate requires "catalyst documented today that resolves during today's session in our favor" — earnings is tomorrow. A Thursday entry commits across the overnight earnings binary; even with WTI tailwind, single-name + earnings = a 5–10% overnight gap is plausible either direction. Existing XLE position already captures the commodity move proportionally to XOM weight (~24% of XLE). **Better setup: revisit Friday post-earnings if the print is benign and oil holds.**
2. **CVX direct** — *Rejected: ticker-clash + Friday-earnings binary.* eToro `search CVX` returned "Convex Finance" (crypto) as the top match, not the Chevron equity. Ticker resolution unclean — would need a name-search to resolve cleanly. Skipping rather than risking ID confusion. Same Friday-earnings binary logic as XOM applies anyway.
3. **USO (US Oil Fund, ETF, instrumentID 3007)** — *Rejected: extended + profit-taking print.* Resolved exact match. Last close $146.16, **YTD +117.8%**, current $146.16 vs 50DMA $114.19 = **+28% above 50DMA** (very extended). Today's intraday print already shows −2.97% (profit-taking on yesterday's WTI spike). Buying USO at +28% above 50DMA into a profit-taking session = textbook chase. Existing XLE position already captures the directional commodity bet at much better entry levels.
4. **Add to XLE (existing position concentrate)** — *Rejected: chasing the breakout.* XLE is now +2.61% above our 4/27 entry and the YTD leader at +33%. Adding here means buying the extension after a +7% WTI day. Better R:R is to hold the original 10% size and let it work; if the trade extends to +10–15%, the original size already captures upside. Adding now would dilute average entry and concentrate single-name exposure.
5. **GLD (gold)** — *Rejected: no fresh today-catalyst beyond ongoing geopolitics.* Iran/Hormuz tension is the same setup that's been live since 4/27; not a new catalyst. Gold tape data thin in research; deferred until cleaner read.
6. **ETH (Ethereum)** — *Rejected: no fresh today-catalyst, B-grade momentum only.* ETH/BTC ratio at YTD highs is a momentum signal, not a catalyst. Adding ETH would push crypto class to ~25% with no specific 4/30 trigger. Strategy explicitly screens against "averaging into momentum without thesis." Watchlist if BTC breaks $79.2k post-data with ETH/BTC continuing to expand.
7. **XLK / QQQ (tech)** — *Rejected: no fresh today-catalyst, post-FOMC reactivity not yet readable from research.* Mag-7 reports rolled this week — Intel post-close 4/29 was mentioned but no other today-specific names confirmed. Wait for cleaner sector signal.

**Risk factors**
- **Oil-shock tape is two-sided.** A WTI +7% session + Hormuz-closed narrative typically pressures consumer-discretionary, transports, and sometimes broader equities/crypto on inflation-restart fear. BTC already drifting (−3.1% pos-level) — further softening is plausible if rate-cut-pricing unwinds. The 10% server stop is the backstop.
- **"UAE exiting OPEC" headline (unconfirmed) is a cross-current.** If real, it's medium-term bearish for the energy thesis even though spot stays bid on Hormuz disruption. Single-source unverified; not yet actionable, but worth flagging — if confirmed midday, may warrant tightening the energy thesis read.
- **XOM/CVX Friday earnings binary.** XLE has ~24% weight in XOM and ~17% in CVX — a combined ~41% of XLE NAV reports a binary tomorrow morning. A double-miss into a stretched commodity tape could pressure XLE −2 to −4% Friday despite oil strength. Existing position is sized at 10% with a 10% stop = absorbs a bad earnings session without rule-tripping. No action required, just awareness.
- **BTC FOMC-tail.** Yesterday's FOMC outcome was not surfaced in this morning's data (Perplexity gap), but BTC is sitting at $76.3k vs the consolidation top of ~$78k — softening, not breaking. If the FOMC was hawkish-shock, more downside is possible into the weekend.
- **Cash drag at 75.2%.** Same posture as yesterday — deliberate dry powder. Today is the second post-FOMC session and the energy entry has clearly run without us; the patience-vs-inaction balance now strictly requires a cleaner non-energy A-grade catalyst before deploying. Friday post-XOM/CVX-earnings is a likely re-evaluation window.
- **Data quality.** Perplexity returned weak/thin data on VIX, 10Y, DXY, today's macro calendar, and S&P futures cash-tape. Treat sector/oil/crypto numbers as the operative signals; ignore precise level claims for indices.

**Watchlist (next 24–48h)**
- **XOM / CVX direct** — re-evaluate Friday after earnings prints. If oil holds + reports benign + neither name gaps up >3%, size 5–8% with a 10% stop, accepting the stack on existing XLE exposure as concentrated-but-coherent.
- **GLD** — re-evaluate Friday with fresh data on gold tape and DXY direction.
- **ETH** — add only if BTC reclaims the $78–79k supply zone with ETH/BTC continuing to expand.
- **XLK / QQQ** — wait for a clean post-FOMC + post-Mag7-earnings reactivity read; not actionable today.

**Decision: HOLD.** No new opens. No trims (BTC 14.6%, XLE 10.3% — neither over a class or single-name cap; combined invested 24.9%, well under the 50% class cap). Both held positions thesis-intact today, both materially reinforced by the post-FOMC oil rally for XLE (+2.6% unrealized) and persistent ETF-inflow flow for BTC (–3.1% unrealized, well inside stop band). The cleanest A-grade entries (XOM/CVX direct on the energy theme) sit on the wrong side of a 24h earnings binary; the second-cleanest (USO/XLE concentrate) is a chase at +28% above 50DMA. 4 of 5 weekly opens preserved for a Friday post-earnings window.

---

### 2026-04-29 — Wednesday Pre-Market (08:00 ET) — FOMC DAY

**Snapshot:** Equity 99.7% of start | Cash 75.2% | Open positions: 2 (BTC, XLE) | Week opens so far: 1 | Weekly budget remaining: 4 of 5

**Market context** (as-of 2026-04-29 ~13:25 UTC, percentages only; data-source gaps flagged below)
- **S&P 500 futures (ESM26): ~−0.6% overnight** to ~7,193.50; cash S&P printed similar pre-open weakness. Soft, cautious tape into the FOMC binary at 14:00 ET.
- **VIX / 10Y / DXY:** no fresh overnight prints from Perplexity (third consecutive thin morning on these). Carry-forward VIX ~17–18, 10Y ~4.30%, DXY ~98.4.
- **WTI crude: BIG OVERNIGHT MOVE — gapped from $99.62 close (4/28, +0.33%) to $102.21 open, peaked $106.34, last $105.69 (+3.41% on the session).** This is the **eighth consecutive up-day** and a clean **break above $100** for the first time since the Iran disruption began. Driver: **Strait of Hormuz remains de-facto closed**, US–Iran talks still stalled after Trump rejection of Iran's proposal. EIA flagged widened Brent–WTI spreads from elevated shipping costs. **Net: oil thesis is materially stronger today than yesterday — XLE position exposure is a tailwind into FOMC.**
- **BTC: holding $76.2k–$77.8k overnight**, currently $77,075.53 (eToro 13:22Z). Mild firming vs yesterday's intraday low ~$76.1k (+1.2% intraday recovery). **9-day US spot-BTC-ETF net inflow streak holds at ~$2.1B** (no break of streak overnight). BTC pinned under the $78.2k–$79.2k supply zone entering FOMC — consolidation pattern, not breakdown.
- **ETH:** no fresh print. Carry-forward ~$2,300s.
- **Today's catalysts:**
  - **DOMINANT — FOMC statement 14:00 ET + Powell presser 14:30 ET.** Consensus = pause at 3.50–3.75%. **No dot plot / SEP update this meeting** (focus on statement tone + Powell tone). Statement language may shift "solid" → "moderate" growth on recent GDP revisions (mildly dovish). Two January dissenters favored a 25bp cut; Powell's tone on labor concerns + Middle East demand risks + energy-driven inflation drives the reaction. **Two-way binary; sized exposure today commits across it.**
  - **Earnings:** No specific A-grade pre-open names confirmed for 4/29 in research. Bank-tail and Mag-7 reports continue to roll through this week.
  - **Macro (other):** No top-tier US data scheduled today besides FOMC.
  - **Geopolitics:** Iran/Hormuz stalemate persists; oil bid + risk-off undertone (oil +3.4% yesterday is the loudest signal).
- **Sector momentum (YTD through ~4/28):** **XLE +29.08%** (extended leader, +3.29% over 5 sessions, broke out and held the 38.2% Fib / 50DMA ~$57.38 confluence). Other sector 5-day prints not surfaced by Perplexity (data thin). Carry-forward: XLI ~+11.5%, XLK ~+11.4%, XLF ~−5.6%, XLV ~−6.5% YTD.

**Holdings check**
- **BTC** (instrumentID 100000, weight ~14.7% of equity, unrealized **−2.14%**) — **thesis INTACT.** 9-day ETF inflow streak unbroken; price firmed +1.2% off yesterday's intraday low; consolidating under the $78–79k supply zone heading into FOMC. Stop $70,888.59 untouched (live $77,075.53 = −2.14% vs −10% rule, ~5x cushion). Hold. **Risk:** FOMC hawkish surprise pressures crypto first.
- **XLE** (instrumentID 3008, weight ~10.0% of equity, unrealized **+0.28%** — flipped green overnight) — **thesis INTACT and materially STRONGER today than at open.** WTI broke $100 (8-day rally), Hormuz still closed, XLE 5-day +3.3%, held 50DMA on the pullback, top holdings (XOM 24%, CVX 17%) report **this Friday 5/1**. Stop $51.79 untouched (live $57.71 = +0.28% vs −10% rule). Hold.

**Trade ideas** (0–5 per day; HOLD is default only when no idea clears the gate)

**Zero new opens proposed today.** Screened candidates + reasoning:

1. **Adding to energy via XOM / CVX direct or USO** — *Rejected: pre-FOMC binary + thesis-stacking on existing exposure.* WTI breaking $100 IS A-grade today, but (a) we already hold the exposure via XLE 10%, (b) FOMC at 14:00 ET is a two-way binary that can flip DXY/oil regardless of supply, (c) XOM/CVX print Friday — a Wed-AM entry commits across both FOMC AND a 48h earnings-binary tail. **Better setup**: post-FOMC reaction read first, then size XOM directly Thursday afternoon or Friday pre-open if oil holds and Powell wasn't hawkish-shock.
2. **GLD (gold)** — *Rejected: pre-FOMC binary risk.* Same logic as yesterday — gold is a legitimate FOMC + geopolitical hedge but entering the morning of the announcement is a coin-flip on Powell's tone. A hawkish surprise pukes gold regardless of Iran.
3. **XLK / XLI (tech / industrials)** — *Rejected: no fresh today-catalyst, FOMC-eve tape.* Both up YTD on rotation; today's tape is the FOMC statement, not a sector-specific trigger. Wait for post-FOMC reactivity.
4. **ETH (Ethereum)** — *Rejected: stacks on existing crypto exposure into a binary.* No fresh ETH-specific catalyst; adding to crypto pre-FOMC pushes class exposure into the high-20s into the announcement. Revisit post-FOMC if the tape is dovish.
5. **VIX hedge / SPY-short alternative** — *Rejected.* Strategy is longs-only, leverage-1; no compliant short or vol-long instrument.

**Risk factors**
- **FOMC binary today at 14:00 ET / 14:30 ET.** This is the single dominant intraday wildcard. Hawkish surprise (no language softening, sticky-inflation framing, Powell pushes back on cut pricing) → BTC and equities pressured, DXY firms, oil mixed (DXY headwind vs Hormuz tailwind). Dovish surprise (statement softens to "moderate," Powell acknowledges labor weakness, opens door to summer cut) → all risk-on, BTC breaks supply zone, XLE accelerates. Either way, opening size today commits capital across the binary; HOLDING preserves dry powder for the post-FOMC reaction trade.
- **Iran-headline whipsaw remains live.** A "talks-resume" or unilateral-ceasefire headline would unwind oil's 8-day rally and pressure XLE. The 10% server-side stop is the backstop; XLE is now slightly green so the stop sits ~10% below entry, not below current price.
- **BTC FOMC-tail.** A hawkish Fed could break the 9-day ETF inflow streak intraday and pressure BTC through the supply zone. Position is 14.7% with a 10% stop — sized to absorb a normal hawkish reaction. Thesis-exit only if ETF flows flip and the broader crypto tape rolls.
- **Cash drag at 75.2%.** Above the 5–10% buffer target — deliberate dry powder into the FOMC binary. After today's print, the patience-vs-inaction balance starts pressing toward Thursday/Friday deployment if a clean post-FOMC setup emerges (XOM/XLK most likely candidates).
- **Data quality.** Perplexity returned thin VIX/10Y/DXY data again; some oil source numbers (WTI $99–$106 range) wide — directional signal (gapped above $100, multi-day rally) is the operative read, exact level less so.

**Watchlist (post-FOMC)**
- **XOM direct** — if (a) Powell tone is benign, (b) WTI holds ≥$100, (c) XOM doesn't gap-up materially from current — size 5–10% Thu PM or Fri pre-open into the Friday earnings print. Stacks on XLE but isolates to the highest-weight name with a known catalyst window.
- **CVX direct** — same setup as XOM, second-highest XLE weight, also reports Friday.
- **GLD** — re-evaluate post-Powell based on tone + DXY reaction. Dovish + DXY weakening = clean entry.
- **ETH** — add only if BTC breaks-and-holds $79.2k post-FOMC and ETH/BTC ratio extends.
- **XLK / QQQ** — re-rate post-FOMC if tech leadership reasserts on a dovish print.

**Decision: HOLD.** No new opens. No trims (BTC 14.7%, XLE 10.0% — neither over a class or single-name cap; combined invested 24.8%, well under the 50% class cap). Both held positions thesis-intact today, both reinforced by overnight catalysts (XLE via the WTI $100+ break; BTC via inflow-streak persistence + intraday firming). FOMC at 14:00 ET makes pre-event sizing low-edge; today's job is to hold the existing exposure into the binary and let market-open re-evaluate at 9:35 ET if anything shifts on the tape. 4 of 5 weekly opens preserved for post-FOMC clarity (Wed PM → Friday).

---

### 2026-04-28 — Tuesday Pre-Market (08:00 ET)

**Snapshot:** Equity 99.4% of start | Cash 75.5% | Open positions: 2 (BTC, XLE) | Week opens so far: 1 | Weekly budget remaining: 4 of 5

**Market context** (as-of 2026-04-28 ~13:20 UTC, percentages only; data-source gaps flagged below)
- **S&P 500 futures (ESM26): ~−0.19% overnight** to ~7,192.50; cash S&P closed −0.12% Monday. Soft, cautious tape ahead of FOMC.
- **VIX / 10Y yield / DXY:** no fresh overnight prints from Perplexity. Carry-forward VIX ~17–18, 10Y ~4.30%, **DXY ~98.4** (one source: +0.31% on session, easing back from last week's +1% rally).
- **WTI crude: ~+1.0–1.3% overnight** to ~$97.6/bbl (one source intraday $99.75, +3.5% day-on-day); Brent ~$109.6 — **seventh consecutive up-day**. Driver: **Strait of Hormuz remains largely closed** under the ongoing US–Israel–Iran conflict (commercial traffic restricted since late February); Trump administration **rejected Iran's latest proposal**, extending the stalemate. Soc Gen tail-risk flag $150/bbl on further disruption. **Net: oil thesis is stronger today than at XLE entry, not weaker.**
- **BTC: holding $77.7k–$79k overnight** (sources cite intra-day range; one source $79k recovery on White House-shooting headline). Our position quote 76,131 (live eToro 13:18Z) — slightly below the cited overnight range, mild fade. **9 consecutive days of US spot-BTC-ETF net inflows totaling $2.12B since 4/14.** Strategy (formerly MicroStrategy) reportedly **815,061 BTC** held — overtook BlackRock as a top holder. **Bitcoin 2026 Conference kicked off in Las Vegas 4/27** with SEC + CFTC chairs jointly on-stage and the BITCOIN Act (1M-BTC reserve proposal) discussed. Fundamentals firmly bid.
- **ETH: no fresh print**; weekend report has ETH +3.2% on the same shooting-bid catalyst. Carry-forward ~$2,300s.
- **Today's catalysts:**
  - **Macro: FOMC begins today (4/28); statement + Powell presser tomorrow Wed 4/29 ~14:00 ET.** Consensus = pause at 3.50–3.75%; inflation print 3.3%. **The dominant binary of the week.** Also Tuesday: **Case-Shiller 9:00 ET + Conf. Board Consumer Confidence 10:00 ET** (both second-tier).
  - **Earnings:** ~33% of S&P 500 reporting this week (Mag-7 reports plus bank-tail); **no specific A-grade pre-open names confirmed for 4/28 in research** — calendar light for today.
  - **Geopolitics:** Iran/Hormuz stalemate with Trump rejection of Iran proposal = persistent oil bid + risk-off undertone. No central-bank or regulator surprise headlines.
- **Sector momentum (YTD through ~4/24, total return):** **XLE +28.0%** (clear leader), **XLI +11.5%**, **XLK +11.4%** (+0% Mon close 160.57), **XLF −5.6%**, **XLV −6.5%**. Energy still #1 by a wide margin; tech leadership has reasserted but is digesting; financials/healthcare lagging. (Precise 5-day prints not available from sources today.)

**Holdings check**
- **BTC** (instrumentID 100000, weight ~14.6% of equity, unrealized **−3.34%**) — **thesis INTACT and arguably stronger today than at open.** 9-day ETF inflow streak, Strategy 815k-BTC top-holder headline, Bitcoin 2026 Conference w/ SEC+CFTC on-stage. Stop $70,888.59 untouched (live $76,131 = −3.34% vs −10% rule, ~5x cushion). Hold. **Risk:** FOMC tomorrow could pressure crypto on a hawkish surprise.
- **XLE** (instrumentID 3008, weight ~9.9% of equity, unrealized **−1.34%**) — **thesis INTACT and stronger today than at open.** Brent 7-day rally, Hormuz partial-closure persists, Trump rejection of Iran proposal extends stalemate. XLE closed $56.79 Monday (−0.14%). Stop $51.79 untouched (live $56.78 = −1.34% vs −10% rule). Hold.

**Trade ideas** (0–5 per day; HOLD is default only when no idea clears the gate)

**Zero new opens proposed today.** Screened candidates + reasoning:

1. **Adding to energy via XOM / CVX / USO** — *Rejected: thesis-stacking on the same exposure.* The Iran-Hormuz/oil thesis IS A-grade today, but we already own it via XLE 9.9%. Adding XOM or CVX on top duplicates the catalyst and risk profile (any "talks-resume" headline reverses both legs simultaneously). Not diversification — concentration.
2. **GLD (gold)** — *Rejected: pre-FOMC binary risk.* Gold is a legitimate FOMC + geopolitical-risk hedge, but entering gold the day before the FOMC announcement is a coin-flip on tone. If Powell lands hawkish, gold pukes regardless of Iran. Wait for post-FOMC reaction.
3. **XLI / XLK (industrials / tech)** — *Rejected: no fresh today-catalyst.* Both up YTD on rotation, but Tuesday's tape is FOMC-eve drift; no specific 4/28 trigger and entry is mid-range, not on a pullback.
4. **ETH (Ethereum)** — *Rejected: stacks on existing crypto exposure.* Strong tape, but adding ETH on top of BTC 14.6% pre-FOMC pushes crypto class into the high-20s into a binary event. Revisit post-FOMC.
5. **VIX hedge / SPY-short alternative** — *Rejected.* Strategy is longs-only and leverage-1; no compliant short instrument.

**Risk factors**
- **FOMC binary tomorrow (Wed 4/29 ~14:00 ET).** This is the dominant intraday wildcard for the next 36h. Hawkish surprise → BTC and equities pressured, DXY firms, oil mixed. Dovish surprise → all risk-on. Either way, opening size today commits capital across the binary; HOLDING preserves dry powder for the post-FOMC reaction.
- **Iran-headline whipsaw remains live.** A "talks-resume" or ceasefire-extension headline would unwind oil's 7-day rally, hurt XLE, and not necessarily help BTC. The XLE position absorbs this via a 10% server-side stop; no further action needed pre-event.
- **BTC FOMC-tail.** A hawkish Fed could break the 9-day ETF inflow streak intraday Wednesday and pressure BTC. Position is 14.6% with a 10% stop — sized to absorb a normal hawkish reaction. Thesis-exit only if ETF flows flip and Strategy headline gets faded.
- **Cash drag at 75.5%.** Above the 5–10% buffer target by design — deliberate dry powder into FOMC binary. Acceptable through Wednesday's close; if no setup post-FOMC, the patience-vs-inaction balance starts pressing toward Thursday/Friday deployment.
- **Data quality.** Perplexity returned thin VIX/10Y/DXY data again; some XLE/oil source numbers (Brent $109, WTI $99 intraday) appear elevated vs the eToro live quote on XLE — treat as directional, not precise.

**Watchlist (post-FOMC)**
- **GLD** — re-evaluate Wed afternoon based on Powell tone + DXY reaction.
- **ETH** — add only if BTC bid holds through FOMC and ETH/BTC ratio extends.
- **XOM / CVX** — only as a complement if XLE breaks and holds above $60 with WTI ≥$100.
- **XLK / QQQ** — re-rate post-FOMC if tech leadership reasserts on a dovish print.

**Decision: HOLD.** No new opens. No trims (BTC 14.6%, XLE 9.9% — neither over a class or single-name cap). Both held positions thesis-intact, both well inside 10% stops, both with reinforced fundamentals overnight. FOMC announcement tomorrow makes pre-event sizing low-edge; preserve 4 weekly opens for post-FOMC clarity (Wed afternoon → Friday).

---

### 2026-04-27 — Monday Pre-Market (08:00 ET)

**Snapshot:** Equity 99.9% of start | Cash 85.2% | Open positions: 1 (BTC) | Week opens so far: 0 | Weekly budget remaining: 5 of 5 (fresh week)

**Market context** (as-of 2026-04-27 ~13:10 UTC, percentages only; data-source conflicts flagged below)
- **S&P 500 futures (ES Jun-2026 / ESM26): ~+0.7% recent** per Perplexity (Friday cash-S&P closed +0.8% with S&P + Nasdaq finishing at **record highs**, Nvidia retaking $5T, semis week +11%). No precise overnight tick from Sun-close → Mon-cash, so treat the +0.7% as directional, not exact.
- VIX / US 10Y yield / DXY: **no fresh overnight prints** from research sources today. Carry-forward VIX ~17.7 / 10Y ~4.30% / DXY ~98.3 from prior pre-market reads.
- **WTI crude: ~+2% overnight to $96.17–$96.85/bbl** on **Iran-talks-stalled** + Strait-of-Hormuz disruptions resurfacing. **This re-rates oil back into the pre-Hormuz-reopen range** — a meaningful regime change vs the 4/20 thesis (WTI had crashed −11.45% on Hormuz reopening). Energy thesis is back on the table.
- **BTC overnight: roughly flat to +0.3%** ($77,706 vs Fri close $77,500 → +0.27% snapshot). ETH no fresh print; carry-forward ~$2,300s. No regulatory / ETF-flow weekend headlines surfaced. Quiet crypto tape.
- **Today's catalysts:**
  - **Earnings:** GM ($2B profit-jump guide), American Airlines (miss + better outlook), Boeing (rising 4Q cash), UPS (beat 2026 sales outlook), UnitedHealth (2026 sales-dip guide) noted in pre-open watchlist — most are reaction prints, not fresh-today reports.
  - **Macro:** **No top-tier US data scheduled for Monday.** Tuesday: Case-Shiller 9:00 ET + Conf. Board Consumer Confidence 10:00 ET. **Wednesday: FOMC statement + Powell presser** (consensus = hold at 3.50–3.75%).
  - **Geopolitics:** Iran tensions back (talks stalled, Hormuz disruptions) — drives oil bid + DXY firm. No central-bank surprise headlines.
- **Sector momentum (YTD through ~4/24):** XLE **+28.0%** (clear leader, but −7.2% past month — leader pulled back into base), XLU +8.9%, XLP +7.8%, XLF −5.6%, XLK closing 160.34 (+0.07% Fri but week-of-records on semis). No clean 5-day prints for XLV/XLI from sources. Tape character: tech-led record highs Friday + energy basing on fresh oil bid.

**Holdings check**
- **BTC** (14.85% weight, unrealized −1.34%) — **thesis intact.** No adverse weekend headlines (no exchange hack, no regulatory shock, no ETF outflow story); price drifted +0.27% over the weekend. Stop $70,888.59 untouched (current −1.3% vs −10% rule). Hold.

**Trade ideas** (0–5 per day; HOLD is default when no idea clears the gate)

1. **XLE** (ETF — energy sector) — instrumentId: `3008` (exact `internalSymbolFull` match)
   - **Catalyst:** WTI +2% overnight to $96 on Iran-talks-stalled + Hormuz disruptions = clean **fresh today** macro driver into a sector that just pulled back ~7% from highs (mean-rev + catalyst combo). Energy still **YTD leader at +28%**, but 4-week pullback unwound the "doji-prone leader chase" risk that voided the same setup on 4/17.
   - **Entry:** ask near **$56.91** (last quote = Fri 19:59 UTC; market re-opens 9:30 ET — market-open routine will re-quote)
   - **Stop (−10%):** $51.22
   - **Target (+20%, 2:1 R:R):** $68.29
   - **Size:** **10% of equity** (~$1,000 virtual / ~$100 real-mirror). Conservative first tranche given (a) Iran-headline whipsaw history, (b) leader still digesting recent weakness, (c) Wednesday FOMC adds mid-week volatility.
   - **R:R:** 2:1
   - **Asset-class check:** ETF/stocks class exposure currently 0% — well inside the 50% class cap. Position-after-fill 2 of 8.
   - **Pre-buy gate (verify at market-open):** positions ≤ 8 ✓ (2/8); opens-this-week + 1 ≤ 5 ✓ (1/5); cost ≤ 30% ✓ (10%); cash buffer ≥ 5% after ✓ (~75% post-fill); class ≤ 50% ✓; catalyst documented ✓ (this entry); exact symbol match ✓; order body Leverage=1, IsBuy=true, StopLossRate set ✓.

**Risk factors**
- **Iran-headline whipsaw.** Same Iran/Hormuz news has flipped WTI ±10% twice in two weeks. A Sunday-night/Monday-AM "talks-resume" headline would unwind today's oil bid and pressure XLE intraday.
- **FOMC Wednesday.** Even with a "hold" baseline, Powell's tone (sticky-inflation hawkish vs growth-cool dovish) drives sector rotation. Position size deliberately small to absorb a hawkish surprise.
- **Tech-led record-high tape** could pull rotation flows out of energy/defensives — XLE has historically lagged on days where semis lead the index higher.
- **BTC weekend gap risk** is now mostly behind us (Sunday/Monday cash open with BTC roughly flat); midday backstop −7% rule still in play.
- **Data-source thinness.** VIX, 10Y, DXY, ETH all carry-forward from prior days — treat regime reads as directional, not precise.

**Decision:** **OPEN 1** (XLE ~10% of equity at market-open) for any A−/A-grade prints on Iran-headline persistence into 9:30 ET. **TRIM:** none required (no over-concentration). **Default fallback:** if Iran headlines flip "talks resume" between now and 9:30 ET (and WTI reverses below $94), market-open should drop XLE and HOLD — the catalyst is the entire thesis.

---

### 2026-04-24 — Friday Pre-Market (08:00 ET)

**Snapshot:** Equity 100.0% of start | Cash 85.0% | Open positions: 1 (BTC) | Week opens so far: 1 | Weekly budget remaining: 4 of 5

**Market context** (as-of 2026-04-24 ~13:17 UTC, percentages only; data-source conflicts flagged below)
- **S&P 500 futures (ES Jun-2026 / ESM26): ~+0.38% overnight** to ~7170.75. Modest risk-on drift; chipmaker strength cited as the tape driver. No top-tier US macro releases and no FOMC events on the calendar — a quiet into-the-weekend read.
- VIX / US 10Y yield: **no fresh overnight prints** from Perplexity. Carry-forward VIX ~17.7 / 10Y ~4.30%.
- **Oil (WTI): ~+1.90% daily to ~$97.67/bbl** per Perplexity; one source framed "Strait of Hormuz tensions," another noted 79% Polymarket probability of a down close. This continues the unresolved **narrative conflict** flagged Thursday: Iran-ceasefire-indefinite (our operative truth) vs. intermittent Perplexity "Hormuz disruption" flashes. No corroborating ceasefire-breakdown headline today; treating Iran de-escalation as intact and oil's move as a supply-side squiggle, not a risk-off signal. Will reconcile midday.
- DXY: no fresh print; carry-forward ~98.2.
- **BTC: live eToro ask $78,344.24 at 13:17 UTC (closeRate $78,378.35 in 13:14 pnl).** Roughly flat vs yesterday's $77,990 close (+0.4%). **Perplexity returned a wildly stale $73,700 print** — contradicted by live eToro data, yesterday's $77–78k consolidation, and the TRADE-LOG close series. Using eToro as the operative reference. Position-level unrealized: **−0.49%** (−$7.38 on $1,503 margin), well inside the 10% stop band.
- **ETH: live eToro ask $2,327.71.** Essentially flat vs yesterday's ~$2,328 reference. **ETH/BTC ratio: 2327.71 / 78344.24 = 0.02971** (vs yesterday ~0.02985) — **still contracting, not expanding.** The specific watchlist trigger from 4/22 / 4/23 (BTC bid + ETH/BTC ratio expanding) has not fired.
- **Today's macro catalysts:** **No top-tier US macro releases** surfaced by Perplexity. **No confirmed pre-open earnings**. Bank-earnings tail (JPM / BAC / C / MS) still generic "this week" framing — no confirmed Friday print. Next FOMC April 29.
- **TSLA post-earnings (reported after-close 4/22):** **Beat headline** — non-GAAP EPS $0.41 vs $0.36, revenue $22.387B vs $22.35B, gross margin 21.1% (+478bps YoY), free cash flow $1.44B. **Mixed internals** — Q1 deliveries 358,023 missed by ~7,600 units, built > sold by 50k (inventory build), energy storage −38% QoQ to 8.8 GWh vs 12–14 GWh consensus. Net read: beat-on-profitability with deliveries/storage miss is a **muted** TSLA-specific catalyst, not a broad XLK/QQQ re-rating trigger. XLK printed **−1.48% on 4/23** — tech sold off into the print; no clean post-earnings re-acceleration setup visible pre-market.
- **Sector momentum (YTD through 4/22, per Perplexity):** XLE **+27.29%** (still leader, still fighting oil narrative), XLP **+6.30%**, XLU **+5.84%**, XLF **−4.18%**. 5-day sector prints thin; XLK −1.48% single-day Thursday is the only fresh sector data. Carry-forward read: tech leadership decelerating, defensives rangebound, energy leading on YTD but under pressure.
- **Crypto sector news (past 24h):** No overnight gap >3% on BTC. No major regulatory headlines since 4/23 close. Digital Asset Market Clarity Act still in late-stage negotiation (2–3 issues remaining) — legislative backdrop is supportive but not a today-catalyst. UK FCA stablecoin/staking consultation targeting June 3 finalization — also not today. No exchange incidents reported.
- **Geopolitics:** Iran-ceasefire-indefinite holding. No fresh war / central-bank / regulator headlines overnight. Dominant market-positive narrative remains.

**Holdings check**
- **BTC (14.96% weight, −0.49% unrealized, stop $70,888.59)** — **thesis INTACT.** Position opened 4/22 at ask $78,765.12; current live ask $78,344.24 (−0.53% vs entry ex-fees; pnl reports −0.49% unrealized net). All three original catalysts still live: Iran ceasefire indefinite, MicroStrategy $2.54B buy (no unwind), 3-month breakout above $76k support. No adverse news since yesterday's close. Still below the $79k break-and-hold trigger that would warrant an add. **Hold.**

**Trade ideas** (0–5 per day)

No A-grade idea clears the pre-buy gate today. Screened and rejected:

1. **BTC add** — instrumentID: `100000`, Crypto. **Rejected: watchlist trigger not fired.** Thursday's entry specified: "clean break-and-hold above $79k with no adverse headline." BTC ask $78,344 is **below $79k**, not above. A second crypto slug on a non-triggered breakout would push class exposure 15% → ~25% on weakening setup. Defer.
2. **ETH** — instrumentID: `100001`, Crypto. **Rejected: watchlist trigger not fired.** ETH/BTC ratio 0.02971 is **contracting** (vs 0.02985 Thursday). The add-condition was "ratio resumes expansion." Still no. Deferred for the third consecutive day.
3. **XLK / QQQ (Tech ETFs)** — **Rejected: TSLA beat was mixed and XLK already sold off.** TSLA post-earnings is a muted catalyst (profitability beat, delivery/storage miss); XLK −1.48% on 4/23 is a pullback but with no confirming reversal signal pre-market. Entering long into a mixed-earnings / selling-day tape on Friday is chasing a reactive setup, not an A-grade catalyst. Market-open routine can re-evaluate from live post-open tape if XLK reclaims 10DMA with volume; pre-market pre-commit is not justified.
4. **Bank earnings pre-positioning (JPM / BAC / C / MS)** — **Rejected: still no confirmed Friday report date.** Same situation as Mon–Thu entries. Pre-buy gate requires catalyst today; speculating on unconfirmed timing violates the rule.
5. **Energy (XLE)** — **Rejected.** WTI +1.90% today is a single-day squiggle within an unresolved Iran-narrative conflict; the dominant de-escalation read is intact. No clean energy long catalyst.
6. **TSLA direct** — **Rejected.** Binary post-earnings entry into mixed internals is a coin flip. No edge.

**Risk factors**
- **Concentration: BTC remains the whole book.** 14.96% crypto, nothing else. Any BTC-specific risk-off (Iran-ceasefire breakdown, exchange incident, large miner unwind, regulatory shock) hits today's P&L in size. Stop at $70,888.59 is the backstop; manual −7% cut line is an additional midday backstop.
- **Data quality — Perplexity BTC price wildly stale ($73.7k claim vs live $78.3k).** Perplexity returned a ~$4.6k-off BTC reference this morning. Treating all Perplexity quantitative prints with skepticism; live eToro rates are the operative truth. If midday sees further Perplexity drift, prefer eToro `rates` + native `WebSearch` for cross-checks.
- **Oil / Iran narrative conflict unresolved.** WTI +1.90% daily print sits on top of a multi-day Perplexity conflict between "ceasefire-indefinite" (corroborating) and "Hormuz disruption" (hallucination-flavored). No corroborating risk-off headline elsewhere (equity futures green, BTC holding) so the operative read is "oil noise, not regime change" — but a midday cash-market re-check is prudent if WTI extends.
- **Friday-into-weekend gap risk.** Crypto trades 24/7; a weekend headline (regulatory, exchange, geopolitical) can re-price BTC before Monday with no ability to act. Position is sized for this (15%, 10% stop). Nothing warrants a pre-weekend trim — thesis is intact — but the concentration is the weekend exposure.
- **Weekly budget underuse vs discipline.** Opens-this-week 1 of 5 heading into the final session. Strategy explicitly permits no-A-grade → HOLD, not forcing trades. Today's setup (no top-tier catalysts, no confirmed earnings, mixed TSLA read, oil-narrative noise) does not warrant forcing a B-grade entry. Weekly review at 16:30 ET will grade this appropriately.
- **Cash drag, Day 5.** 85% cash all week. Defensible: one A-grade BTC setup fired Wednesday; Monday/Tuesday/Thursday/Friday did not clear the gate. Not chasing unconvinced setups is the correct posture given the macro-quiet tape.

**Watchlist (carry into next week)**
- **BTC add** — only on a clean break-and-hold above $79k with no adverse headline. Would push class exposure 15% → ~25%.
- **ETH** — re-engage when ETH/BTC ratio resumes expansion (ETH day-gain > BTC day-gain while BTC bid holds).
- **XLK / QQQ** — pullback-to-10DMA entry on a benign tape, or a fresh catalyst (sector-wide re-rating, not single-name TSLA).
- **JPM / BAC / C / MS** — confirm the actual report date first; last week's bank beats set a bullish bar.
- **Energy mean-reversion** — dead until Iran talks visibly break down (still no signal of that).

**Decision:** **HOLD.** No new opens today. BTC position stays (thesis intact, stop at −10% unchanged, unrealized −0.49% well inside stop band). No trims required (BTC 14.96% weight is under all caps). Opens-this-week stays at 1 of 5; week closes with one fill. No urgent ClickUp alert — BTC at −0.49% is nowhere near the −7% cut line, and no overnight news broke its thesis.

---

### 2026-04-23 — Thursday Pre-Market (08:00 ET)

**Snapshot:** Equity 99.9% of start | Cash 85.1% | Open positions: 1 (BTC) | Week opens so far: 1 | Weekly budget remaining: 4 of 5

**Market context** (as-of 2026-04-23 ~10:52 UTC, percentages only; data-source conflicts flagged below)
- **S&P 500 futures (ES Jun-2026): ~+0.56% overnight.** Modest risk-on bid extending yesterday's grind. Earnings-season momentum and Iran-ceasefire-indefinite overhang continue to support the tape.
- VIX / US 10Y yield: **no fresh overnight print** from Perplexity. Carry-forward VIX ~17.7 / 10Y ~4.30% until cash-market opens.
- **Oil (WTI) / DXY data conflict — flag:** The oil-specific Perplexity query returned a contradictory narrative (WTI +1.4% to ~$94 on "Iranian cargo seizure + Hormuz disruption"), while the catalysts query returned the consistent narrative (Hormuz completely reopened, Iran de-escalation intact). The "cargo seizure" claim appears to be Perplexity hallucinating from stale pre-ceasefire context — it contradicts yesterday's logged thesis (ceasefire indefinite + MSTR buy driving BTC bid) and would require a ~+10% WTI spike that no other source corroborates. **Treating Iran narrative as: de-escalation intact, oil quiet.** Will reconcile at midday against cash-market prints.
- DXY: no fresh print; carry-forward ~98.2.
- **BTC: ~+2.2–3.0% overnight to $77.9–78.2k.** eToro closeRate $77,989.80 at 10:52 UTC. Continuation of the breakout above $76k; analysts targeting $80–90k on a clean break of $78k resistance. Catalysts (Iran ceasefire, MicroStrategy $2.54B buy, 3mo-high breakout) all within the last 48h and still live.
- **ETH: ~+0.7% overnight per Perplexity, but eToro reference shows daily −2.9% to $2,333.68.** Data sources disagree; either way ETH is **underperforming BTC today** (BTC +2.5% vs ETH flat-to-down). **ETH/BTC ratio is contracting, not expanding** — the specific watchlist trigger from yesterday's entry (BTC bid + ETH/BTC ratio expanding) has **not** fired.
- **Today's macro catalysts (Perplexity coverage thin):** No top-tier US macro releases surfaced. No FOMC events. Light econ calendar.
- **Today's earnings:** Perplexity surfaced **no specific pre-open earnings** for 4/23. Two small-cap biotech FDA catalysts (GRCE, COCP) flagged but these are single-name speculative, not index-moving, and not in our universe.
- **Sector momentum** (last 5 trading days through 4/22): Perplexity data thin again. Snapshots available: **XLK 1-week +0.22%**, XLK trading $155.52–158.57 on 4/22 (cooling from last Wednesday's +4.56% 5-day print — tech leadership bid is decelerating). Other sector 5-day prints unavailable; carry-forward from Tue/Wed entries: defensives (XLP/XLU) cooling, energy fighting oil, financials still lagging.
- **Geopolitics:** Iran-ceasefire-indefinite holding. No fresh war/central-bank/regulator headlines overnight. Dominant market-positive narrative remains.

**Holdings check**
- **BTC (15% weight, −1.0% unrealized)** — **thesis INTACT.** Position opened 4/22 at ask $78,765.12; current closeRate $77,989.80 (−0.98% unrealized, well inside the 10% stop band at $70,888.59). All three original catalysts still live: Iran ceasefire indefinite, MicroStrategy $2.54B buy, 3-month breakout. Overnight +2.2–3.0% directional move consistent with thesis. No adverse news since yesterday's close. **Hold.**

**Trade ideas** (0–5 per day)

No A-grade idea clears the pre-buy gate today. Screened and rejected:

1. **ETH (Ethereum spot)** — instrumentID: `100001`, asset class: Crypto. **Rejected: watchlist trigger did not fire.** Yesterday's entry specified the add-condition: "BTC bid holds into Thursday **and ETH/BTC ratio continues expanding**." BTC bid held (✓) but ETH is flat-to-down while BTC is +2.5% — ratio is contracting, not expanding. Stacking a second crypto name on a weakening ETH/BTC signal to push class exposure 15% → ~25% on a derivative-momentum thesis fails the A-grade bar. Defer; re-evaluate if ETH/BTC ratio resumes expansion.
2. **XLK / QQQ (Tech ETFs)** — **Rejected: same as yesterday — extended, no fresh today-catalyst, and now decelerating.** XLK 1-week is only +0.22% vs last Wednesday's +4.56% 5-day print — leadership bid is fading at the same extended level. Still waiting for a pullback-to-10DMA or a fresh catalyst.
3. **Bank earnings (BAC, MS)** — **Rejected: still no confirmed report date.** Same situation as Mon/Tue/Wed entries.
4. **TSLA post-earnings reaction** — **Rejected.** Perplexity returned no post-close earnings data for TSLA from 4/22. Without a confirmed beat/miss/guide direction, pre-market entry is a blind coin-flip. If the print is strong and post-market action is clean, market-open routine can re-evaluate from live tape.
5. **Energy (XLE / XOM)** — **Rejected.** Oil-data conflict unresolved; Iran-de-escalation narrative still dominant. No trigger.
6. **Biotech FDA plays (GRCE, COCP)** — **Rejected.** Single-name binary events outside our edge; micro-caps ($20–72M) outside our universe and liquidity profile.

**Risk factors**
- **Concentration: BTC is still the whole book.** Any BTC-specific risk-off (Iran-ceasefire breakdown, exchange incident, large miner unwind) hits today's P&L in size. Size capped at 15% specifically for this; the 10% stop at $70,888.59 is the backstop.
- **Data-quality flag — oil/Iran narrative conflict.** Perplexity returned flatly contradictory Iran/oil narratives between two queries this morning. The de-escalation read is consistent with yesterday's log, BTC bid, and equity futures green — treating that as the operative truth. If midday cash-market prints WTI materially higher (say ≥ +3%) with a corroborating ceasefire-breakdown headline, crypto/risk-on thesis weakens and BTC stop-management comes into play.
- **BTC breakout failure.** If BTC fails to hold $77k today, the "clean break of $78k → $90k" technical thesis weakens. Stop at $70,888 still protects capital, but thesis-break close (thesis-exit rule) becomes live if catalysts erode.
- **Cash drag vs aggression.** 85% cash with 4 of 5 weekly opens still available. Acceptable today (no A-grade idea), but this is day 4 of the week — if no catalyst emerges tomorrow or Friday, we end the week having used only 1 of 5 slots. The strategy allows that; not forcing B-grade ideas into an uncertain setup is the correct discipline.
- **TSLA earnings secondary effects.** After-close print last night (direction unknown to us). If a miss, tech leadership bid weakens further; if a beat, XLK/QQQ may re-accelerate — in which case a Friday pullback-entry in tech becomes the higher-quality setup.

**Watchlist (rest of this week + next)**
- **ETH** — re-engage when ETH/BTC ratio resumes expansion (e.g., ETH day-gain > BTC day-gain while BTC bid holds).
- **BTC add** — only on a clean break-and-hold above $79k with no adverse headline; would push class exposure from 15% → ~25%.
- **XLK / QQQ** — pullback-to-10DMA entry on a benign tape, or fresh catalyst (post-TSLA re-rating if beat).
- **BAC / MS** — confirm report date first.
- **Energy mean-reversion** — dead until Iran talks visibly break down (increasingly unlikely).

**Decision:** **HOLD.** No new opens today. BTC position stays (thesis intact, stop at −10% unchanged). No trims required (BTC 15% weight is under all caps). Opens-this-week stays at 1 of 5. No urgent ClickUp alert — BTC at −1% is nowhere near the −7% cut line, and no overnight news broke its thesis.

---

### 2026-04-22 — Wednesday Pre-Market (08:00 ET)

**Snapshot:** Equity 100.2% of start | Cash 100.0% | Open positions: 0 | Week opens so far: 0 | Weekly budget remaining: 5 of 5

**Market context** (as-of 2026-04-22 ~08:00 ET, percentages only; some data sources thin — flagged below)
- S&P 500 E-mini futures (ES Jun-2026): **~+0.35% overnight** — modest risk-on bid extending yesterday's tape. Separate search print referenced ESM26 at 7142.50 (+0.60% context).
- VIX / US 10Y yield: no fresh overnight print available from Perplexity. Carry-forward VIX ~17.7 / 10Y ~4.30% until cash-market opens.
- WTI crude: Perplexity data thin/stale (mixed signals — one source had WIJ26 at $96.14 −0.19%, another said oil "trading around $98/bbl" on residual supply-risk premium). Treating the direction as roughly flat, with a lingering Iran-premium bid still partially in the tape.
- DXY: no fresh print; carry-forward ~98.2.
- **BTC: ~+2.2% overnight to $77.4–77.5k area. eToro live ask $78,509 at 08:00 ET — confirming continuation into pre-market.** Weekly +4.3%. Testing three-month highs after breaking $76k support.
- **ETH: ~+0.7–2% overnight to ~$2,390.** Tracking BTC bid, altcoins broader green.
- **Today's macro catalysts (confirmed by Perplexity calendar scrape):**
  - **EIA Weekly Crude & Fuel Stock Report** — 10:30 AM ET (oil-specific, not index-wide mover absent a surprise).
  - **MBA Mortgage Applications** — 6:00 AM ET (already printed; low-impact).
  - **US Treasury 20-year Bond Auction** — 12:00 PM ET (auction tail = rates signal).
  - **No FOMC minutes, no Beige Book, no CPI/PPI/Retail today.** Next FOMC April 29.
- **Today's earnings:** **Tesla (TSLA)** reports — Perplexity's "pre-open" tag is almost certainly wrong (TSLA has historically reported after-close and Perplexity's own second source hedged). Treat as after-close; no mechanical pre-market entry edge. EPS consensus ~$0.37, revenue ~$22.7B.
- **Sector momentum (last ~5 trading days through 4/21):**
  - **XLK (Tech): +4.56% 5d**, period high $156.07 on 4/21 (eToro ref rate $156.14 this morning). 10DMA $148.59 — price trading cleanly above. **Tech has reclaimed leadership** vs the Monday "defensives leading" narrative.
  - XLE / XLF / XLV / XLI / XLP / XLU: Perplexity returned no fresh 5-day data this morning (source thin). Carry-forward from Tuesday: XLU breaking down, XLP consolidating, XLE fighting oil headwind, financials still lagging.
  - **QQQ:** eToro rates show 10DMA $629.12 vs ask $649.25 — +3.2% above 10DMA. Extended.
- **Crypto sector news (past 24h):**
  - **Trump extended US–Iran ceasefire indefinitely.** This is the dominant risk-on catalyst since yesterday's close and directly feeds crypto bid (ceasefire removes Hormuz tail-risk).
  - **Strategy (MicroStrategy) bought $2.54B in BTC overnight**, lifting holdings above 815,000 coins. Soaking miner supply; classic institutional accumulation signal.
  - **$330M in liquidations (114k traders)** on the BTC push to $77.4k — the move was a real squeeze, not passive drift.
  - Kelp DAO hacker (suspected Lazarus) moved 75,701 ETH via Thorchain — isolated, not a macro crypto negative.
- **Geopolitics:** Iran ceasefire now **indefinite** (Trump). Talks "stalled" per US side but no further strikes planned. This is a meaningful step beyond Monday's "truce holding" read — removes the April-21-truce-expiry binary that was still on the board yesterday.

**Holdings check**
- **No open positions.** Nothing to evaluate. Cash 100%.

**Trade ideas** (0–5 per day)

1. **BTC (Bitcoin spot)** — instrumentID: `100000`, asset class: Crypto. **A-grade, propose OPEN at market-open.**
   - **Catalyst today:** Iran-ceasefire-indefinite headline (overnight) + MicroStrategy $2.54B institutional buy (overnight) + 3-month-high breakout with $330M in squeeze liquidations (overnight). Three concurrent, independent bid drivers, all dated within the last 24h.
   - **Entry:** ask ~$78,509.25 (live eToro read 13:41Z).
   - **Stop (−10%):** round(78509.25 × 0.90, 4) = **$70,658.3250**.
   - **Target (≥2:1 R:R):** $94,211.11 (~+20% from entry). Weekly +4.3% momentum, prior resistance ~$76k now support; $94k is roughly the January 2026 swing-high area.
   - **Size:** **15% of equity** (~15% × $10,020.59 = ~$1,503 virtual). Crypto class exposure 0% → 15% (≤50% class cap). Cash after: ~85% (≥5% buffer).
   - **R:R:** ~2.0:1. Downside 10% / upside 20%.
   - **Pre-buy gate status:** Positions-after 1≤8 ✓ | Week-opens-after 1≤5 ✓ | Cost 15%≤30% ✓ | Class 15%≤50% ✓ | Cash buffer after ~85% ✓ | Exact `internalSymbolFull=BTC` match ✓ | Catalyst documented (this entry) ✓.

Screened and rejected:

2. **XLK (Tech SPDR)** — instrumentID: `3021`, ETF. **Rejected: extended, no fresh today-catalyst.** Monthly +17%, 5-day +4.56%, ask $156.14 sits 5.1% above 10DMA $148.59. Tech leadership reclaim is real but the entry is late; no specific 4/22 catalyst (TSLA is after-close and company-specific, not sector-wide). Wait for a pullback to the 10DMA or a post-TSLA sector re-rating.
3. **QQQ (Invesco QQQ)** — instrumentID: `3006`, ETF. **Rejected: same reason as XLK.** Ask $649.25 is +3.2% above 10DMA $629.12; weekly +0.05% says the move has already consolidated. No edge chasing here.
4. **TSLA earnings pre-positioning** — **Rejected.** Pre-earnings binary bet into an after-close print is gambling, not an edge. Pre-buy gate requires documented catalyst that resolves during the session in our favor — a post-close earnings report does not.
5. **XLE / energy longs** — **Rejected.** Iran ceasefire extended indefinitely strengthens, not weakens, the bearish commodity read. Energy equities still fighting commodity headwind.
6. **ETH (Ethereum spot)** — tempting as a crypto co-hedge but **deferred**. BTC is the cleaner A-grade catalyst (MicroStrategy buy is BTC-specific; ETH momentum is derivative). Stacking two crypto longs on day one would push class exposure to ~30% without a second independent catalyst — not disciplined. Revisit midday if BTC holds bid and ETH/BTC ratio extends.

**Risk factors**
- **BTC is the whole book today.** A single 15% crypto position concentrates today's P&L into one tape. A sudden risk-off headline (Iran talks re-escalating, unexpected Fed comment, tech-sector flush) hits crypto hardest. Size is capped at 15% specifically to absorb this.
- **Cash drag vs aggression.** After filling BTC the book is still ~85% cash. That's intentional — Tuesday/Wednesday have no macro prints, Thursday likely sees flash PMIs, Friday weekly review. Leaving room to add on any clean A-grade setup Thursday/Friday.
- **Overnight-news-driven entries can fade intraday.** The BTC $77.4k print happened overnight on the liquidation squeeze; market-open US session may see profit-taking into the open. Acceptable: our 10% stop is wide enough to absorb normal intraday chop.
- **EIA crude print 10:30 ET.** A bullish crude surprise would re-energize energy / hurt tech / mixed for crypto. Neutral for BTC directly.
- **20Y auction 12:00 ET.** A sloppy tail pushes yields higher → pressures tech and crypto. Second-order risk.
- **Data quality caveat.** Perplexity returned thin VIX/10Y/DXY/sector data again this morning; carrying forward where stale. If cash-market reads contradict these materially, midday should reassess.

**Watchlist (for rest of the week)**
- **ETH** — add if BTC bid holds into Thursday and ETH/BTC ratio continues expanding.
- **XLK / QQQ** — re-evaluate on any pullback to 10DMA; tech leadership reclaim is real but needs a better entry.
- **BAC / MS** — bank-earnings tail still unconfirmed for specific day this week.
- **Energy mean-reversion** — dead until Iran talks break down, which looks less likely after the indefinite extension.

**Decision:** **OPEN 1 at market-open** — BTC @ 15% of equity, stop $70,658.3250, target ~$94,211 (≥2:1 R:R). No trims (account is flat). Opens-this-week 0 → 1 after fill (4 of 5 remaining).

**Operational note (added after write, not research-related):** this pre-market run initially aborted at 13:15Z on an eToro-API HTTP 503 storm during key-check. The automated market-open cron at 13:37Z then aborted correctly (no research for the day). This re-run landed at 13:43Z — after market-open had already given up — so the BTC trade above **will not auto-fire today**. It stands as: (a) validated research for tomorrow's context carry-forward, (b) an eligible setup for a manual `/trade` invocation if the user wishes, and (c) a documented demonstration that today's HOLD is an infrastructure accident, not a strategic decision.

---

### 2026-04-21 — Tuesday Pre-Market (08:00 ET)

**Snapshot:** Equity 100.2% of start | Cash 100.0% | Open positions: 0 | Week opens so far: 0 | Weekly budget remaining: 5 of 5

**Market context** (as-of 2026-04-21 ~08:00 ET, percentages only; some data sources thin — flagged below)
- S&P 500 futures (ES Jun-2026): **~+0.10% overnight**, modest recovery after yesterday's cash S&P −0.41% print. (Absolute level returned by Perplexity differs materially from yesterday's entry; treating the % direction as the usable signal, not the absolute.)
- VIX / US 10Y yield: **no fresh overnight print** available from Perplexity this morning. Carry-forward VIX ~17.7 / 10Y ~4.30% from last confirmed reads; revisit midday if tape is orderly.
- WTI crude: **~−1.7% overnight** to ~$88 area (May contract), ~$86 (June). Brent ~$94.5 (−1%). Driver: **US–Iran peace talks scheduled in Pakistan this week** — de-escalation premium continues to compress oil. Analyst tail-risk flag: $110/bbl scenario if talks fail. Iran "truce expiry" was yesterday (4/20) and the de-escalation path is still intact. This further confirms Thursday's Iran-premium-long thesis is dead.
- DXY: no fresh print; carry-forward ~98.2.
- BTC: ~flat near **$75k**, ETH ~flat near **$2.3k**. Perplexity explicitly lacks fresh 4/21 data — using 4/20 close as proxy. No fresh regulatory/ETF headlines. YTD BTC −19%, ETH −27%; still in Extreme-Fear regime with ETH/BTC ratio elevated on earlier-month post-ceasefire rotation.
- **Today's catalysts (real, unlike yesterday's empty tape):**
  - **Retail Sales (March)** — likely 8:30 AM ET standard release window (Perplexity said 9:30 ET, treating as possible time-zone confusion; standard BEA/Census window is 8:30 ET). Consumer-spending bellwether.
  - **Durable Goods Orders** — same morning. Consensus figures not surfaced in research.
  - **No confirmed pre-open earnings.** BAC / MS bank-earnings tail still "this week" but unconfirmed for today.
  - D-Wave Quantum (QBTS) Extraordinary General Meeting scheduled today — agenda opaque, speculative catalyst only.
- Sector momentum (YTD through 4/20, via Perplexity + eToro snapshots):
  - **XLE +24.0% YTD** (still the leader but now fighting the sustained WTI crash — leadership probably breaking).
  - **XLU +7.3% YTD** but **−0.9% past week** and price below 10DMA/50DMA.
  - **XLP +6.1% YTD** but **−0.1% past week** and price (82.39) right at 10DMA / above 200DMA; slight pullback in uptrend.
  - **XLF −3.4% YTD** (lagging).
  - XLK / XLV / XLI YTD prints not available.
  - **Read:** The Monday entry's "defensives leading" theme is cooling this week — XLU broke down a bit, XLP consolidating. Rotation is not accelerating.
- Geopolitics: Iran-US talks in Pakistan this week = dominant risk-on catalyst. Truce de-escalation is the path being priced. Any breakdown from the talks would re-price oil sharply higher.

**Holdings check**
- **No open positions.** Nothing to evaluate. Cash 100%.

**Trade ideas** (0–5 per day; HOLD is default only when no idea qualifies)

Screened candidates + why each was rejected:

1. **XLP (Consumer Staples SPDR)** — instrumentID: `3022`, asset class: ETF. Catalyst: Retail Sales print + continuing defensive rotation narrative. Current ask ~$82.39, 10DMA $82.02, 50DMA $84.81, YTD +6.1%. **Rejected: B-grade, not A-grade.** Past-week change is **−0.08%**, MTD +0.5%, and price sits just above 10DMA after rolling off 50DMA — rotation theme is cooling, not accelerating. A Retail Sales print is binary and the direction-of-reaction is unknown; buying defensives ahead of a print that could trigger cyclical rotation either way is a coin flip. If XLP reclaims ~$83 post-print with confirmation, market-open can re-evaluate.
2. **XLU (Utilities SPDR)** — instrumentID: `3013`, asset class: ETF. Catalyst: defensive rotation + rate-sensitive long on soft retail print. Current ask ~$45.75, 10DMA $46.43, 50DMA $46.19, YTD +7.3%. **Rejected: weaker setup than XLP.** Past-week −0.89%, MTD −0.31%, price **below 10DMA and 50DMA** — a cooling uptrend with bearish near-term structure. Don't chase a losing short-term flow.
3. **XLE (Energy SPDR)** — YTD +24% leader. **Rejected.** Thesis broken: WTI printing another −1.7% overnight on Iran de-escalation. Energy equities fighting a persistent commodity headwind. Leader reversal setup, not a long.
4. **Bank-earnings pre-positioning (BAC, MS)** — **Rejected.** Reports still "this week" but not confirmed for today. Pre-buy gate requires catalyst **today**; speculating ahead of unconfirmed timing violates the rule.
5. **D-Wave Quantum (QBTS) EGM play** — **Rejected.** Agenda unknown. Event-driven without a thesis is a gamble, not an edge.
6. **Crypto (BTC / ETH)** — **Rejected.** No fresh catalyst; range-bound in Extreme-Fear regime without a trigger. Strategy: buying into Extreme Fear without thesis ≈ averaging into downtrend.

**Risk factors**
- **Cash drag, Day 2.** 100% cash for a second consecutive day. The strategy's preferred posture is 90–95% deployed, 5–10% buffer. Deliberate dry-powder is defensible into a truly binary session (Retail Sales print can go either way), but another flat day Wednesday without conviction will force the "patience vs inaction" dial toward deploying on any B+ idea.
- **Retail Sales whipsaw.** A strong print flips defensive rotation → cyclical bid; weak print extends defensives. Either way, market-open at 9:35 ET will have a post-print tape and is the correct entry window — not pre-market pre-commitment.
- **Iran talks in Pakistan.** If talks collapse this week, oil re-prices violently higher (analyst tail: $110/bbl) → energy/industrials bid, defensives sold. If talks make progress, risk-on extends and defensives keep cooling.
- **Data quality.** Perplexity returned thin/gapped data on VIX, 10Y, DXY, and fresh crypto prices; treat quantitative comparisons as directional, not precise.

**Watchlist (for rest of the week)**
- **XLP / XLU** — re-evaluate post-Retail-Sales reaction. If XLP reclaims 10DMA with volume, consider a ≤15% allocation with a 10% stop.
- **BAC / MS** — once the earnings day is confirmed, pre-open setup candidate. Last week's bank prints (JPM +13%, WFC/C/BLK beats) set a bullish bar.
- **Energy mean-reversion (XLE / XOM / CVX)** — only if WTI stabilizes ≥$85 and Iran talks clearly break down. Not today's trade.

**Decision:** **HOLD.** No new opens today. No trims required (account is flat). Opens-this-week stays 0; weekly budget of 5 is untouched. Defer directional bets to market-open once today's Retail Sales + Durable Goods prints have hit the tape and sector reaction is readable.

---

### 2026-04-20 — Monday Pre-Market (08:00 ET)

**Snapshot:** Equity 100.2% of start | Cash 100.0% | Open positions: 0 | Week opens so far: 0 (fresh week)

**Market context** (as-of 2026-04-20 ~08:00 ET, percentages only)
- S&P 500 futures (ES Jun-2026): **7119.00, −0.59% overnight** (−42.50 pts). Soft open expected.
- VIX / US 10Y: no fresh overnight print available (Perplexity source thin); last-known baselines from Friday are VIX ~17.7 and 10Y ~4.30%. Treat as carry-forward until cash-market opens.
- **WTI crude: big bearish re-rate.** May futures closed **−11.45% Friday** and sit in the **$83–86** range on reports the Strait of Hormuz has reopened to commercial traffic. Forecasts now target $76–78. This **contradicts** last Thursday's working thesis of an Iran-truce expiry around April 21 driving oil higher — the de-escalation headline already happened and the commodity has re-priced. Energy sector setups built on "Iran premium" are void.
- DXY: no current print available; carry-forward ~98.2.
- BTC: ~+0%, stable near **$74–75k**. ETH: near-flat at **~$2,300**. ETH/BTC ratio ~0.0313 (three-month high; ETH still relatively stronger). Weekend was quiet, no new regulatory / ETF headlines of note. BTC YTD −19%, ETH YTD −27% (context: crypto still in Extreme-Fear regime).
- Today's catalysts: **no confirmed pre-open earnings** and **no top-tier macro releases** scheduled for April 20. Bank-earnings tail (BAC / MS) reports "this week" but the specific day is not confirmed for Monday. Light tape.
- Sector momentum (5-day to 4/17 close): **XLK −2.2%** (Lagging), **XLE +0.6%** (still Leading YTD but now under pressure from the oil crash), **XLF −0.3%** (Lagging), **XLI −0.7%** (still Leading despite the dip), XLV Weakening (no 5-day print). Rotation signals: flight-to-safety building — **XLP making new highs**, XLU improving. This matches 2000/2007-style defensive leadership patterns called out by sector-rotation screens.
- Geopolitics: Strait of Hormuz reopening is the dominant weekend story. Iran-US "truce expiry" narrative that headlined last Thursday is no longer live — the market has already digested the de-escalation. No other fresh macro/regulatory wildcards.

**Holdings check**
- No open positions. Nothing to evaluate.

**Trade ideas** (0–5 per day; HOLD is default when no idea clears the gate)
- **None today.** Rationale:
  1. **No catalyst today.** Pre-buy gate requires a catalyst documented in today's RESEARCH-LOG entry. Sector rotation (defensives leading) is a multi-day theme, not a Monday-specific trigger. BAC/MS earnings are "this week" but unconfirmed for today.
  2. **Soft open into an empty calendar** is the worst setup to chase: a −0.6% futures drift on no news often drags through the first hour, then reverses on thin flows.
  3. **Energy thesis reversed over the weekend.** The working assumption into Thursday was Iran-premium tailwinds; the Hormuz reopening killed that. XLE / XOM / CVX are still YTD leaders but now fighting a −11% WTI gap — not a clean long-side setup.
  4. **Defensive ETFs (XLP, XLU) are legitimate watchlist items** but chasing them on Monday after a week of leadership isn't A-grade — entry is extended and there's no fresh catalyst today. Better read mid-week if rotation persists.
  5. **Crypto** is range-bound with no catalyst; Extreme-Fear regime without a trigger is averaging-into-downtrend, not a setup.

**Watchlist for the rest of the week**
- **XLP / XLU** — defensive rotation continuation. Confirmation signal: XLP new high holding with XLK continuing to lag. Re-evaluate Tuesday pre-market.
- **BAC and MS earnings** — bank-earnings tail. Last week's prints (JPM +13%, WFC, C, BLK beats) set a bullish bar. If confirmed for Tuesday/Wednesday, set up a pre-open long with a tight stop.
- **Energy re-test** — if WTI stabilizes ≥ $82 after the Hormuz flush, XLE could offer a mean-reversion long, but not today.

**Risk factors**
- **Cash drag.** Account is at 100% cash vs strategy's 5–10% buffer target. Acceptable for the moment — deliberate dry-powder posture into a no-catalyst session — but another no-catalyst day on Tuesday with no earnings confirmation will push the "patience vs inaction" balance toward needing to deploy on any B+ setup.
- **Fed / yield surprise.** 10Y print is stale; any sudden move in yields on a low-news Monday could drive sector rotation in either direction.
- **Oil second leg.** If WTI breaks $82 intraday, expect energy equities to extend down and broader cyclicals to follow.
- **Bank-earnings surprise.** A BAC or MS miss this week (unconfirmed Monday timing) would shift the "financials lagging" note from noise into confirmation.

**Decision:** **HOLD.** No new opens today. No trims required (account is flat). Opens-this-week stays at 0; budget resets fresh today — still 5 available through Friday.

---

### 2026-04-17 — Friday Pre-Market (08:00 ET refresh)

**Snapshot:** Equity 100.2% of start | Cash 100.0% | Open positions: 0 | Week opens so far: 0 (net of one round-trip on SPY+QQQ — see "Resolved" below)

**Resolved from earlier entry**
- The two pre-cron anomaly positions flagged earlier (SPY 35% and QQQ 30%, both with `stopLossRate=0.0001`) are no longer on the account. `pnl` now returns `positions: []`, `credit: $10,020.59`. The cap and broken-stop violations are cleared; equity sits ~+0.2% vs $10k baseline. TRADE-LOG still shows Day 0 only — the closes were not logged through the routines (manual or platform-side action). **Action:** `daily-summary` should reconcile today and add the missing trade entries; pre-market does not write to TRADE-LOG.

**Market context** (as-of 2026-04-17 ~08:00 ET, percentages only)
- S&P 500 futures (ES front-month): ~+0.1% to +0.3% overnight; cash S&P referenced near 7050. Quiet bid.
- VIX: 17.74, −1.11% vs prior close 17.94 — calm regime, easing further.
- US 10Y yield: ~4.29–4.31% area (no fresh overnight print); range-bound.
- WTI crude: noisy reads — one source −3.9% to ~$91.0, another flat at ~$91.4. Likely a meaningful overnight fade on Iran-truce extension hopes; will reconcile midday.
- DXY: 98.27, +0.05%; dollar firm above 98 on the same Iran-deal optimism.
- BTC: +0.45% overnight to ~$75,146. ETH: −0.50% to ~$2,348. Crypto Fear & Greed Index 21 (Extreme Fear). ETH/BTC ratio at YTD high; ETH ETFs taking inflows while BTC ETFs see outflows — rotation, not trend break.
- Today's catalysts: **no pre-open US earnings** (Nasdaq calendar: "no reports on this date"). **No scheduled top-tier US macro releases** today (CPI/PPI/retail-sales/sentiment/housing all not scheduled). Light tape.
- Geopolitics: April 7 US–Iran two-week truce holding; **expiry around April 21** — next-week event risk, not today.
- Sector momentum (YTD through ~April 15–16): XLE +25.5% (clear leader, extended), XLK +4.5%, XLF −4.3%, XLV −4.2%. Energy is far ahead but stretched; tech is the only other green YTD print.

**Holdings check**
- No open positions. Nothing to evaluate.

**Trade ideas** (0–3 per day; HOLD is the default)
- **None today.** Rationale: (1) zero scheduled US catalysts on a Friday — opening into a low-information tape is asymmetric risk; (2) account just transitioned from over-concentrated to fully flat — re-deploying immediately into the same names would look like revenge-trading; (3) Iran truce expiry (~April 21) is a known near-term binary that argues for reserving dry powder until Monday's pre-market with a fresh catalyst read; (4) energy is up 25% YTD and doji-prone — wrong moment to chase the leader; tech is up only 4.5% but has no fresh trigger today. Patience > activity.

**Risk factors**
- Iran-truce extension headlines either way (bull on extension, bear on collapse) could whipsaw equity + oil + DXY; this is the dominant intraday wildcard given an empty US calendar.
- Quiet tapes can drift — a benign +0.1–0.3% open could turn into a passive grind higher and we'd watch from the sidelines. Acceptable opportunity cost vs the discipline of waiting for documented catalysts.
- Crypto Fear & Greed at 21 (Extreme Fear) with ETH outperforming BTC suggests selective bid; it is **not** a green light to add crypto today without a specific catalyst — adding into Extreme Fear without a thesis is closer to averaging into a downtrend than buying capitulation.

**Decision:** **HOLD.** No new opens today. No trims required (account is flat). Cash 100% (above the 15–25% target band, by design — the band is for invested days, not for a deliberate dry-powder posture into a no-catalyst session). Week opens-so-far stays at 0; budget for next week begins fresh Monday.

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
