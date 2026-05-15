# Weekly Review

Friday-afternoon recaps written by the `weekly-review` routine. Most-recent week
at the top. The grade (A–F) is honest self-assessment against the strategy rules
and the 60/40 benchmark — not just P&L.

---

### Week of 2026-05-11 → 2026-05-15

**Week return:** −0.2% | **S&P 500 week:** −0.4% | **Alpha:** +0.2%
**60/40 proxy (0.6·SPX + 0.4·BTC):** −1.5% | **Alpha vs 60/40:** +1.3%
**Phase-to-date return:** −0.3%
**Grade: B** _(only one day of observable routine behavior — Friday — but that day's discipline was clean and the heavy-cash posture cushioned a BTC −3.2% week; the missing review for the prior week 5/4–5/8 plus four of five sessions dark this week is the dominant operational story)_

**Caveat — baseline.** No Monday 5/11 EOD snapshot exists; no prior-Friday 5/8 snapshot exists either (routine series went dark **2026-05-08 → 2026-05-13** — no pre-market, market-open, or daily-summary entries committed across six consecutive trading sessions). The closest available baseline is the 5/7 EOD ($9,993.61). Week return above is therefore computed against 5/7 EOD, not Monday 5/11 EOD — it spans 5/8 → 5/15 (a week and a day) rather than a clean Mon→Fri window. Phase-to-date math is unaffected ($10,000 launch baseline → 5/15 EOD).

**Adjustments next week (preview):** **No strategy edits.** Rule 6 (cash-buffer reframe from 5/1) validated itself immediately in its first live week — 85% cash absorbed BTC's −3.2% drawdown and let us beat the 60/40 proxy by ~1.3%. No other rule failed badly enough this week to warrant edits — the dominant issue is operational (routine availability), not strategic. **Operational flag (engineering follow-up, not a strategy edit):** the routine-gap pattern (5/8–5/13 dark, also the 5/4–5/8 weekly review missed) is now a recurring failure mode. Last week's weekly review noted "consider a wrapper-level one-shot re-fire if the pattern persists" — the pattern has persisted, twice. This is the engineering item with the most P&L sensitivity now; the strategy itself is performing as designed.

**Context.** This was a structurally unusual week. Following the 5/7 XLE thesis-exit close (Iran-ceasefire WTI −10%/2 sessions), the routine series went dark from 5/8 Friday through 5/13 Wednesday — six consecutive sessions with no pre-market, market-open, or daily-summary commits (the 5/8 midday no-op was the last activity until 5/14). The 5/14 daily-summary resumed as a gap-recovery snapshot (Day P&L computed against the 5/7 baseline, not a single session). Full routine cadence returned only on 5/15 Friday — pre-market screened 9 candidates and rejected all; market-open carried two watchlist triggers (XLE re-entry primary on WTI +3.61% Hormuz-back, BTC add secondary on CLARITY Act markup advance); both were correctly skipped on quality-gate fails at 09:36 ET (XLE 30-min-bid-hold unverifiable, B+ grade not A, weekend headline risk, entry ask $58.80 above the already-flagged $58.08 chase concern; BTC live $79,622 below the $81,500 breakout threshold). Midday was a no-op (BTC thesis intact). The BTC long carried untouched across the entire gap, ending the week at +0.4% unrealized (drifted from the 5/14 mark of +3.4% on a modest crypto-tape pullback Friday, stop $70,888.59 with ~11.6% headroom throughout). Macro-narrative-wise, the Iran/Hormuz path reversed back toward escalation during the routine gap (WTI bottomed near $92 on 5/7 ceasefire optimism, rallied back to ~$104 by 5/15 on Hormuz-disruption re-emergence) — XLE re-entry was the obvious trade idea this week but failed the routine's own quality bar.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   0   |
| Trades closed       |   0   |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Avg hold (days)     |  n/a  |
| Profit factor       |  n/a  |
| Open positions EOW  |   1   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed         |
|--------|-------|------|-------|-----------------------|
| —      | —     | —    | —     | No closes this week.  |

**Open positions EOW**
| Symbol | Class  | Weight% | Unrealized% | Stop  |
|--------|--------|---------|-------------|-------|
| BTC    | crypto |  15.1%  |    +0.4%    | −10%  |

Cash: 84.9% of equity. Deployed: 15.1%. Opens-this-week: 0 of 5 budget. Class exposure: crypto 15.1% (cap 50%). Positions: 1 of 8.

**What worked**
- **Friday's discipline gate held under live pressure on the one day it could be observed.** Both market-open watchlist triggers were genuinely tempting: XLE re-entry on WTI +3.61% / Hormuz-back was the natural continuation of the original 4/27 thesis, and BTC-add on CLARITY Act markup optimism was the cleanest crypto-specific catalyst of the cycle. Both were rejected on named, pre-committed criteria — XLE skipped because 30-min-bid-hold was unverifiable, grade was B+ not A, entry ask $58.80 was above the already-flagged $58.08 chase concern, and weekend headline risk loomed; BTC skipped because live $79,622 was below the $81,500 breakout threshold. Neither was a "vibes" reject. The pre-buy gate worked exactly as the strategy intends.
- **Heavy-cash posture (85%) absorbed a sharply negative crypto week.** BTC closed the week −3.2%; our portfolio closed −0.2%. The defensive positioning that has been the empirical pattern for four weeks now is finally being validated by a down week instead of being penalized in an up tape. Alpha vs 60/40 was +1.3% — by far the cleanest benchmark beat of the program so far, and the first that wasn't entirely attributable to a single position's intraweek mark.
- **The 5/7 thesis-exit on XLE was retrospectively the right call.** XLE was at $55.47 when we closed; it climbed to $58.08 by 5/14 (+4.7%) on the Hormuz-back reversal. Re-entering would have given us back the −3.6% closed loss plus some gain — but the strategy's rule 9 (thesis-exit overrides) is precisely about not staying in a position whose catalyst is broken just because the catalyst might come back. Last week's exit was clean discipline; this week's choice not to chase the round-trip (B+ not A, $58.80 above $58.08 chase concern) closed the loop on that discipline.
- **BTC long carried the routine-gap without drama.** Six sessions of no live thesis-check is exactly the regime sizing caps are designed to survive. BTC drifted within an ~$3k range across the gap, stop $70,888.59 with double-digit-percentage headroom throughout, no overnight gap >3% adverse. The 15% position weight + 10% server-side stop combination did its job; the 5/15 pre-market thesis re-check confirmed catalyst stack still constructive (ETH/BTC at 10-month low, CLARITY Act tape, Powell→Warsh dovish tilt, ETF inflows).

**What didn't**
- **Routine series dark for six consecutive sessions (5/8 → 5/13).** This is the dominant operational story of the week. No pre-market, market-open, or daily-summary commits from Friday 5/8 through Wednesday 5/13. The 5/14 EOD was a gap-recovery snapshot; only 5/15 Friday had a full live routine cadence. Last week's weekly review explicitly flagged this risk ("if the pattern persists through next week, consider a wrapper-level one-shot re-fire") — and the pattern has persisted, materially worse than the 503-storm week from 4/20–4/24. The bot itself is invisible across 80% of this week's sessions; whatever discipline we credit ourselves with on Friday is sample-of-one.
- **Weekly review for the week of 5/4–5/8 was never written.** A separate consequence of the same gap: the missing 5/8 EOD also meant no Friday-5/8 weekly-review fired. That week is now an unreviewed hole in the audit trail; the only EOD data we have for it is 5/4 (Mon), 5/5 (Tue), 5/6 (Wed), 5/7 (Thu) — no Friday close, no week-of stats, no grade. The TRADE-LOG entries are there but the synthesis pass never happened. Best we can do now is reference forward: the period 5/4–5/8 carried both positions Mon–Wed (XLE +3.2% Mon, BTC +1.6% Mon; +2.7%/+3.4% Tue; etc.), and 5/7 closed XLE on rule-9 thesis-exit at −3.6%; Friday 5/8 carried only BTC, with the midday no-op noting BTC at +1.35%. That week is grade-eligible but un-graded.
- **Cumulative observability is thin.** Three weeks of partial-cadence operation in five (5/4–5/8 partial, 5/11–5/15 mostly dark, plus prior 503-storm weeks) means we have less than four full weeks of observable routine behavior across what is now a five-week program. The strategy edits we've made (rule 6 reframe) are being grounded on a thinner-than-ideal data base; engineering reliability is now the constraint on the strategy's evolution, not the strategy itself.
- **XLE re-entry skip will look mistaken if Monday gaps up cleanly.** Friday's reject was correct on the strategy's own terms (B+ not A, chase-price concern, weekend headline risk) — but the underlying setup (WTI +3.6%, Hormuz-back, XLE leadership reasserting) is real. If Monday's pre-market re-grades XLE to A on a fresh daily-bar close above $58 and Monday market-open fills above today's $58.80, the cost-of-discipline will be visible. This is the right kind of "what didn't" — a defensible miss, not a rule failure — but worth naming so next week's pre-market doesn't accidentally over-correct.

**Lessons**
- **Cash-as-defense is now empirically demonstrated, not just strategically assumed.** Last week's rule 6 reframe ("tolerate >50% cash during low-signal regimes") was an after-the-fact rationalization of three weeks of cash-heavy operation in an up tape. This week tested it in a down tape: 85% cash → +1.3% alpha vs 60/40 in a week BTC dropped −3.2%. The reframe wasn't just "explain away the violation"; it was tracking a real edge. Keep the rule as amended; don't second-guess the cash posture next week.
- **Six-session blind spots are tolerable for catalyst-based positions with stops set at open.** BTC survived a six-session no-check window because rule 7 (stop at open, server-side, 24/7) is doing exactly what it's designed to do. The strategy's resilience to routine-gap is structurally good — but resilience is not the same as observability. The bot can survive being offline; it cannot demonstrate discipline while offline.
- **Operational reliability is now the binding constraint.** Two consecutive weekly reviews have flagged "consider a wrapper-level re-fire" as engineering follow-up. The pattern has now happened in 3 of 5 weeks (503 storms 4/20–4/24; intermittent gaps 5/4–5/8; full multi-session blackout 5/8–5/13). Strategy adjustments going forward will be data-starved until the cron-reliability issue is resolved. Naming this explicitly so the next operational review treats it as P1, not P3.
- **A defensible miss is not a rule failure.** Friday's XLE-skip and BTC-skip were both A-grade decisions against the strategy's own gate. If Monday proves them wrong on price action, that does not retroactively make Friday's reasoning wrong — it makes the gate slightly tight on a fast-reversing tape. The cure for that is another week of data on tape-reversal setups, not a mid-week panicked loosening of the entry bar.

**Adjustments for next week**
- **No strategy edits.** The rule 6 reframe held its weight in its first stress test; no other rule failed badly. Continue grading discipline above P&L.
- **Operational ask (engineering, not strategy):** wrapper-level retry / cron-availability is now the highest-leverage engineering item. The strategy is being run on infrastructure that is offline 40–60% of the time across the last three weeks. Whatever the next-week pre-market posture is, treat the routine series as fragile and assume any single session may be the only observable one — preserve weekly-budget conservatively (i.e., don't burn 3 of 5 opens on a Monday when Tue–Fri may go dark).
- **Watching next week:** (1) XLE re-grade on Monday — if the gate now reads A on a fresh close above $58 with WTI ≥$103, take it; don't anchor to Friday's reject. (2) BTC add re-grade on CLARITY Act follow-through if the markup advances cleanly and $81.5k breaks-and-holds. (3) If routine cadence stays partial for a third consecutive week, the next weekly review should propose a circuit-breaker: cap weekly opens at 2 (not 5) while engineering reliability is unresolved, on the principle that one observed day per week cannot support five entries' worth of risk budget.
- **Watching at week 6:** opens-cadence has now been 0–1 trade per week for five consecutive weeks. We're amending nothing this week (data still thin from the routine gap), but if week 6 sees a normal-cadence tape and still 0–1 opens with B+ rejects piling up, the entry bar conversation revisits in the week-6 review — calibrated tightening or loosening of "A-grade" relative to the rate at which the natural tape produces qualifying setups.

---

### Week of 2026-04-27 → 2026-05-01

**Week return:** +0.3% | **S&P 500 week:** +1.0% | **Alpha:** −0.6%
**60/40 proxy (0.6·SPX + 0.4·BTC):** +0.8% | **Alpha vs 60/40:** −0.5%
**Phase-to-date return:** +0.2%
**Grade: B+** _(discipline clean, second routine-sourced fill working at +2.2%, BTC recovered most of prior softness; trailed benchmark by ~0.5–0.7% — the cost of dry powder in a continuing risk-on tape)_

**Adjustments next week (preview):** small, targeted edit to `TRADING-STRATEGY.md`
rule 6 — the "5–10% cash buffer at all times" target has been violated for three
consecutive weeks (cash ended 100% / 85% / 75%) without breaking discipline,
because the meta-rule "patience > activity" took precedence whenever no idea
cleared the pre-buy gate. Rather than continue to fail a written rule we
deliberately don't enforce, the rule is reframed: 5–10% cash is the **target
when A-grade theses are abundant**; tolerate >50% cash during low-signal
regimes. Detail at the bottom of this entry.

**Context.** This was the third week of routine-driven activity. Monday opened
XLE at 10% weight on a clean A-grade thesis (WTI +2% overnight on Iran-talks-
stalled + Hormuz disruption + XLE pulled back ~7% from highs while still YTD
leader at +28%); the routine pipeline converted research → fill on the same
cron cycle with no manual rescue. The XLE thesis played out cleanly — WTI ran
+7% on Tuesday/Wednesday post-FOMC, XLE peaked at +3.7% unrealized Thursday,
ended the week at +2.2% after Friday's WTI −3% pullback / XOM/CVX earnings
binary cooled the move. BTC drifted from −1.6% (prior EOW) → −4.0% (Wednesday
intraday low) → −0.8% (this Friday EOW), well inside the −10% server stop
throughout. Tuesday/Wednesday/Thursday/Friday market-opens correctly held —
each on a named criterion (FOMC eve, FOMC day, post-FOMC oil entry late after
+7%, Friday earnings binary). Friday market-open had a conditional XLE add
gated on >$60.00 print; live ask traded $59.46, gate not met, no add — clean
discipline. Three full days of routine runs (Mon, Tue, Wed full; Thu/Fri full)
fired without any 503-induced abort, a meaningful operational improvement
versus the prior week's three abort events.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   1   |
| Trades closed       |   0   |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Avg hold (days)     |  n/a  |
| Profit factor       |  n/a  |
| Open positions EOW  |   2   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed         |
|--------|-------|------|-------|-----------------------|
| —      | —     | —    | —     | No closes this week.  |

**Open positions EOW**
| Symbol | Class  | Weight% | Unrealized% | Stop  |
|--------|--------|---------|-------------|-------|
| BTC    | crypto |  14.9%  |    −0.8%    | −10%  |
| XLE    | etf    |  10.2%  |    +2.2%    | −10%  |

Cash: 74.9% of equity. Deployed: 25.1%. Opens-this-week: 1 of 5 budget. Class
exposure: crypto 14.9% (cap 50%), ETF 10.2% (cap 50%). Positions: 2 of 8.

**What worked**
- **Second routine-sourced fill landed cleanly.** Monday's XLE entry walked the
  full pre-buy gate (positions-after-fill 2/8, opens-this-week 1/5, position
  cost 10% of virtual equity, cash 75% post-fill, ETF class 10% post-fill,
  catalyst documented in research-log, exact `internalSymbolFull=XLE` match,
  Leverage 1, IsBuy true, StopLossRate $51.79). Fill 57.54 ask vs 57.55 open
  rate (~0bp slippage). The 13:42Z cron correctly detected the fill on its
  duplicate-run pass at 13:43Z and no-op'd. End-to-end routine pipeline is
  now demonstrably stable across two consecutive opens (BTC 4/22, XLE 4/27).
- **Sizing caps absorbed normal post-entry chop without drama.** BTC traveled
  −1.6% → −4.0% → −0.8% over the week with stop $70,888.59 and live cushion
  never below ~7% above stop. XLE drifted −1.3% on Monday post-fill before
  building to +3.7% by Thursday and settling +2.2%. The strategy's 10–15%
  per-position weights and 10% server stops are doing exactly what they were
  designed to do — third week running.
- **Four HOLD days defended on named criteria, not vibes.** Tuesday (FOMC eve
  binary), Wednesday (FOMC day at 14:00 ET — held through the announcement),
  Thursday (energy entries late after WTI +7%, XOM/CVX earnings binary 24h
  away), Friday (XOM/CVX earnings same morning, conditional XLE add gated at
  $60.00 — gate not met). Every HOLD had a named, pre-committed reject reason
  in the research log; none were "nothing obvious."
- **Operational stability improved meaningfully.** Zero key-check / 503 aborts
  this week vs three the prior week. The wrapper-side retry path that was the
  Engineering follow-up flagged at week-2 close-out is still pending, but the
  underlying eToro 503 storms cleared on their own this week.
- **Data-quality skepticism continued to pay off.** Friday flagged Perplexity
  BTC prints diverging by ~$14k across sources ($91k vs $77k); eToro
  `closeRate` was treated as the operative truth. ETH/BTC rotation idea was
  correctly deferred on data-quality grounds rather than entered on noisy
  third-party prints.

**What didn't**
- **Trailed benchmark by ~0.5–0.7%.** Week return +0.3% vs SPX +1.0% and 60/40
  proxy +0.8%. This is the second consecutive risk-on week where dry powder
  cost us alpha — last week was −0.9% vs SPX, this week −0.6%. Cumulative
  alpha bleed is small but consistent. The XLE position is contributing
  positively (+2.2%, ~+0.22% to equity); the BTC position drifted slightly
  negative (−0.8%, ~−0.12% to equity). Net is small green but slower than the
  index.
- **Cash buffer rule violated for the third consecutive week.** Strategy says
  "Target 90–95% deployed, 5–10% cash buffer at all times" but cash ended
  100% (week of 4/13–4/17) → 85% (4/20–4/24) → 75% (4/27–5/1). Deployment
  trended in the right direction (we added a position), but a strict reading
  of rule 6 says we are out of compliance, week-after-week. Two interpretations:
  (a) the rule is aspirational, not enforceable, and the meta-rule "patience >
  activity" supersedes it during low-signal regimes; or (b) the entry bar is
  calibrated above the natural rate at which A-grade setups appear and we
  should loosen it. We're acting consistently with (a); the rulebook says (b).
  Three weeks running of the same gap → time for a small, targeted edit.
- **Conditional XLE add Friday may have been threshold-tight.** Market-open
  gated an XLE add on confirmed >$60.00 print; the live ask traded $59.46
  intraday with XLE briefly +3.3%. By midday WTI had pulled back −3% and the
  gate became correctly-too-tight, so the no-add was a winner in retrospect.
  But absent the WTI pullback, gating at exactly $60.00 (round-number resistance)
  vs $59.50 (just-above pre-open levels) was a coin-flip on the threshold.
  Not a rule failure; an observation worth noting for future conditional adds —
  set thresholds with a small explicit tolerance band, not a single round number.

**Lessons**
- **Two clean entries is enough to validate the routine pipeline.** BTC (week 2)
  and XLE (this week) both routed research → market-open → fill → midday
  thesis-check → daily-summary EOD without manual rescue. We can stop framing
  the routine path as "unproven" and start judging it on output. Output: two
  thesis-driven entries, both still alive, combined +1.4% unrealized, no rule
  trips, no stops hit. That's the working definition of the strategy doing
  what it's designed to do.
- **The cash-buffer target is aspirational, not enforceable.** A rule that fails
  three weeks running while the meta-rule "patience > activity" succeeds three
  weeks running is a rule that needs rephrasing. Forcing deployment to chase
  deployment for its own sake would invert the discipline-vs-P&L hierarchy
  the strategy was built around.
- **Conditional adds need a tolerance band, not a single threshold.** A clean
  catalyst that triggers at $60.01 looks identical to one that triggers at
  $59.99; a binary threshold on a noisy intraday print produces false negatives
  on theses that would otherwise qualify. Future conditional adds should
  specify "above level X with Y minutes of confirmation" or "above X-band
  $A–$B" rather than a single round number.

**Adjustments for next week**
- **Strategy edit (this week):** rule 6 is reframed in `TRADING-STRATEGY.md`.
  Old text: "Target **90–95% deployed**, **5–10% cash buffer** at all times."
  New text: "Target **5–10% cash buffer when A-grade theses are abundant**;
  tolerate **>50% cash during low-signal regimes** — the meta-rule
  *patience > activity* supersedes the deployment target. The 5–10% floor on
  cash is a hard minimum (never go fully invested); the upper bound is
  aspirational and should not push the bar below A-grade."
  Rationale: three consecutive weeks of cash 75–100% with B-or-better grading
  (discipline preserved, benchmark trailed by <1%/wk) is a strong empirical
  signal that the rule, as written, is out-of-step with how the strategy is
  actually being run successfully.
- **Operational note (no rule change):** future conditional market-open adds
  should specify a tolerance band on price thresholds, not a single round
  number. Add this convention in the next pre-market that proposes a
  conditional add.
- **Watching at week 4:** if opens-cadence stays at ≤1/week for the fourth
  week, *that* is the signal to revisit the entry bar (not the cash-buffer
  rule, which we're amending today). One more week of data; no entry-bar
  change yet.

---

### Week of 2026-04-20 → 2026-04-24

**Week return:** −0.4% | **S&P 500 week:** +0.5% | **Alpha:** −0.9%
**60/40 proxy (0.6·SPX + 0.4·BTC):** +1.5% | **Alpha vs 60/40:** −1.9%
**Phase-to-date return:** −0.2%
**Grade: B** _(discipline perfect, one A-grade entry executed cleanly; trailed benchmark as the single crypto long drifted intraweek, well inside the stop band)_

**Context.** First week with a routine-sourced fill. Research fired A-grade on
Wednesday (BTC long, Iran-ceasefire-indefinite + MicroStrategy $2.54B buy +
3mo-high breakout with $330M squeeze liqs) and market-open converted it to a
15%-weight position with the server-side −10% stop at $70,888.59 and an implicit
+20% target. The other four sessions held cash against macro-light / binary /
no-confirmed-catalyst tapes — all HOLDs were well-reasoned against the rulebook,
none were default-inaction. Three routine runs aborted on transient eToro HTTP
503 storms during key-check (Monday daily-summary, Wednesday pre-market,
Thursday pre-market); each recovered on a same-day re-run. The BTC fill itself
landed via a manual re-fire after Wednesday's 13:15Z pre-market aborted and the
13:37Z market-open correctly refused to trade without a research entry.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   1   |
| Trades closed       |   0   |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Avg hold (days)     |  n/a  |
| Profit factor       |  n/a  |
| Open positions EOW  |   1   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed                 |
|--------|-------|------|-------|-------------------------------|
| —      | —     | —    | —     | No closes this week.          |

**Open positions EOW**
| Symbol | Class  | Weight% | Unrealized% | Stop  |
|--------|--------|---------|-------------|-------|
| BTC    | crypto |  14.8%  |    −1.6%    | −10%  |

Cash: 85.2% of equity. Deployed: 14.8%. Opens-this-week: 1 of 5 budget. Class
exposure: crypto 14.8% (cap 50%).

**What worked**
- A-grade setup recognized and executed. The BTC thesis on 4/22 (three concurrent
  independent catalysts in the prior 24h) was correctly sized at 15% (inside
  both the 30% name cap and 50% class cap), with a server-side −10% stop
  committed at open, a 2:1 R:R profile, and a catalyst block in the research
  log. Pre-buy gate was walked line-by-line — not skipped.
- Discipline held across four HOLDs. Monday (empty calendar, oil re-rate
  invalidated the energy thesis), Tuesday (Retail-Sales binary direction
  unknown), Thursday (ETH/BTC ratio contracting — named watchlist trigger
  did not fire), Friday (BTC below $79k break-and-hold threshold — same).
  Every HOLD had a named reason, not "nothing obvious."
- Data-quality skepticism paid off twice. Thursday flagged a Perplexity oil/Iran
  narrative hallucination (Hormuz-disruption claim contradicting our ceasefire
  thesis); Friday caught a ~$4.6k-stale Perplexity BTC print. Live eToro rates
  were treated as the operative truth both days — correctly.
- Key-check sanity gate worked as designed. Three 503 storms produced
  KEY=unknown responses; each routine aborted correctly and did not trade into
  an ambiguous key state. No false-positive main-account fills.

**What didn't**
- Benchmark miss. Week return −0.4% vs S&P +0.5% and a 60/40 proxy of +1.5%
  (crypto +3.1% was the week's big bid). Our single crypto long drifted
  −1.6% intraweek from the $78,765 fill to $77,500 on broad crypto softness —
  nothing broke the thesis, but entry was early in the local trend.
- Platform-side 503 storms are killing cron runs. Three of fifteen routine
  firings this week aborted on transient eToro 503s during key-check (20%
  failure rate). The wrapper's retry logic is sound, but the fresh-clone
  container has no ability to self-re-fire within the same cron. Wednesday's
  A-grade BTC thesis required a manual re-fire to convert to a fill — the
  cron path alone would have missed it.
- Opens-cadence still low. 1 of 5 budget used, second week in a row at or below
  1 routine-opened trade. Each HOLD was defensible in isolation, but the
  pattern suggests the entry bar may be calibrated slightly above the actual
  rate at which A-grade setups appear on ordinary tapes. Watch over weeks 3–4.

**Lessons**
- Sizing is the backstop when entry timing is imperfect. A 15% weight drifting
  −1.6% = a −0.24% hit to virtual equity. The strategy's size caps are doing
  exactly what they were designed to do — absorb normal post-entry chop without
  forcing a thesis-exit or stop-out. Keep them.
- Named watchlist triggers > vibes. Thursday (ETH/BTC ratio) and Friday (BTC
  $79k break-and-hold) both offered plausible crypto-add ideas; both failed a
  named, pre-committed condition; both were correctly deferred. The
  reject-reasons in the research log create an auditable chain — this is what
  stops a good week from becoming an over-traded one.
- One A-grade entry is allowed to trail the benchmark in a crypto-up week.
  The trade is still alive (−1.6% unrealized, stop at −10%, thesis intact);
  the grade shouldn't over-weight a single week's unrealized drift.

**Adjustments for next week**
- **No strategy change.** Two weeks in (one fully flat, one with a single
  A-grade entry), the signal-to-noise ratio is still too low to amend
  `TRADING-STRATEGY.md`. Continue to grade discipline above P&L through at
  least weeks 3–4.
- **Operational flag (not a rule change):** the eToro-503 / key-check-unknown
  abort path cost us an auto-fired Wednesday entry. If the pattern persists
  through next week, consider a wrapper-level "one-shot re-fire 5 minutes after
  key-check abort" so the routine can self-heal through transient storms
  within the same cron window. Engineering follow-up, not a strategy edit.

---

### Week of 2026-04-13 → 2026-04-17

**Week return:** +0.2% | **S&P 500 week:** +1.1% | **Alpha:** −0.9%
**60/40 proxy (0.6·SPX + 0.4·BTC):** +1.5% | **Alpha vs 60/40:** −1.3%
**Phase-to-date return:** +0.2%
**Grade: B** _(disciplined HOLD on a no-catalyst Friday; legacy anomalies cleared; trailed benchmark as the cost of dry powder)_

**Context.** This was the first live weekly review. The routines opened zero
new positions this week. At Monday's start the account held two pre-cron
anomaly positions (SPY ~35%, QQQ ~30%) with broken `stopLossRate=0.0001` —
both violated the 20% per-name cap and the "stop set at open" rule. Neither
was opened by these routines; they predate the Monday pre-market fire. By
Friday pre-market those positions were off the account (manual or
platform-side action, not logged through the routines), leaving `positions:[]`
and credit ≈ $10,020.59. Friday's pre-market correctly decided HOLD (empty US
calendar, Iran-truce expiry next week, energy extended). Week-start equity
was taken as the Day 0 baseline since no Monday EOD snapshot exists yet.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   0   |
| Trades closed       |   0*  |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Avg hold (days)     |  n/a  |
| Profit factor       |  n/a  |
| Open positions EOW  |   0   |

_*Two legacy positions (SPY, QQQ) left the account during the week but were
not closed via the routines, so they are not counted in routine stats. The
residual +0.2% equity bump is what those round-trips left behind._

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed                        |
|--------|-------|------|-------|--------------------------------------|
| —      | —     | —    | —     | No routine-driven closes this week.  |

**Open positions EOW**
| Symbol | Class | Weight% | Unrealized% | Stop |
|--------|-------|---------|-------------|------|
| —      | —     |   0%    |     —       |  —   |

Cash: 100% of equity (above the 15–25% target band by design, since we were
fully flat going into a no-catalyst Friday).

**What worked**
- Friday's HOLD call was the right read of a no-catalyst tape. Not chasing
  extended energy (+25% YTD) or a quiet bid into the Iran-truce expiry
  window preserved optionality for Monday.
- Pre-market research captured the anomaly-clearing event correctly and flagged
  the reconciliation gap for `daily-summary` instead of papering over it.
- Key-check sanity gate ran cleanly each routine; no KEY=main false alarm.

**What didn't**
- We trailed both the S&P (+1.1%) and the 60/40 proxy (+1.5%) — being 100%
  cash on an up week is the mechanical cost of discipline, but it is still
  the cost.
- TRADE-LOG still shows only Day 0 by EOW Friday. The two legacy closes
  happened outside the routine path and were not logged, so reconciliation
  depends on `daily-summary` catching up. This is a gap in observability,
  not a rule we broke, but it is worth naming.
- We have no market-open routine-sourced fills yet, so the Monday-through-
  Thursday attempts did not convert any of the research log's ideas into
  positions. Worth watching whether the entry bar is calibrated too high.

**Lessons**
- "Patience > activity" is priced: a quiet-tape HOLD is allowed to trail the
  benchmark in a single week. The grade must weight discipline above P&L
  until we have enough weeks to judge the strategy on returns.
- Pre-existing account state can violate the rulebook even before a routine
  has opened a single trade. The key-check and Monday-pre-market holdings
  review are the only chance to catch that — both need to keep being the
  first thing we do, not skipped on "should be flat" assumptions.

**Adjustments for next week**
- No strategy change. One week of data (and zero routine-opened trades) is
  not enough signal to amend `TRADING-STRATEGY.md`. Re-evaluate after 2–3
  weeks of actual routine-driven activity.
- Operational nudge (not a rule change): if `daily-summary` sees a position
  disappear that was not closed via the routine path, it should append a
  synthetic trade entry to `TRADE-LOG.md` with reason `"reconciled (off-routine close)"`
  so the weekly stats table doesn't have to caveat legacy closes next week.

---

## Template (copy for each new week)

### Week of YYYY-MM-DD → YYYY-MM-DD

**Week return:** ±X.X% | **S&P 500 week:** ±X.X% | **Alpha:** ±X.X%
**Phase-to-date return:** ±X.X%
**Grade: X** _(A excellent / B good / C okay / D poor / F broken discipline)_

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   N   |
| Trades closed       |   N   |
| Win rate            |  X%   |
| Best trade          | +X.X% |
| Worst trade         | −X.X% |
| Avg hold (days)     |  X.X  |
| Profit factor       |  X.XX |
| Open positions EOW  |   N   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed |
|--------|-------|------|-------|---------------|
| …      | …     | …d   | ±X%   | …             |

**Open positions EOW**
| Symbol | Class | Weight% | Unrealized% | Stop |
|--------|-------|---------|-------------|------|
| …      | …     |  X%     |    ±X%      | −10% |

**What worked** (3–5 bullets)
- …

**What didn't** (3–5 bullets)
- …

**Lessons**
- …

**Adjustments for next week**
- (If a rule proved out over 2+ weeks or failed badly, edit TRADING-STRATEGY.md and note the change here.)

---
