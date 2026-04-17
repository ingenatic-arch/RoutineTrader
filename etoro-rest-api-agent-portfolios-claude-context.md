# eToro REST API and Agent Portfolios: Claude Context Pack

## Purpose

This document is a working context pack for Claude, Claude Code, or another command-executing AI agent that needs to understand the new eToro Public API, the Agent Portfolios product, and how an AI agent can inspect an eToro portfolio, make bounded trading decisions, place trades, and monitor outcomes. eToro’s Public API is documented as a REST API for market data, order management, portfolio management, social trading, watchlists, and agent portfolio workflows ([eToro API introduction](https://api-portal.etoro.com/index.md)).

This is technical implementation context, not a trading recommendation. Any agent using this API must treat real-money trading as a high-risk action requiring explicit human approval, strict scope control, and auditable logs.

## Core concepts

| Concept | Meaning for Claude |
| --- | --- |
| Public API | The REST API is hosted at `https://public-api.etoro.com` and uses `/api/v1` paths for the current API surface ([eToro OpenAPI spec](https://api-portal.etoro.com/api-reference/openapi.json)). |
| Authentication | Requests require `x-request-id`, `x-api-key`, and `x-user-key` headers; `x-request-id` should be a unique UUID per request ([eToro authentication guide](https://api-portal.etoro.com/getting-started/authentication.md)). |
| Public API key | Identifies the application making the API request ([eToro authentication guide](https://api-portal.etoro.com/getting-started/authentication.md)). |
| User key | Identifies the user account, and can be generated through the eToro platform under Settings > Trading > API Key Management ([eToro authentication guide](https://api-portal.etoro.com/getting-started/authentication.md)). |
| Demo vs real keys | eToro’s authentication guide says each generated key is tied to either the Demo or Real environment, so a user needs separate keys for both environments ([eToro authentication guide](https://api-portal.etoro.com/getting-started/authentication.md)). |
| Read vs write permissions | Read permission is for portfolio data access, while Write permission is required to execute trades ([eToro authentication guide](https://api-portal.etoro.com/getting-started/authentication.md)). |
| Agent Portfolio | A dedicated sub-portfolio inside the user’s eToro account that can be connected to an AI agent through scoped API credentials ([eToro Agent Portfolios announcement](https://www.etoro.com/news-and-analysis/etoro-updates/agent-portfolios-let-your-ai-agent-trade-for-you/)). |
| Scoped agent API key | Agent Portfolios use a dedicated API key tied to the scoped portfolio rather than giving the agent general account-wide control ([eToro Agent Portfolios announcement](https://www.etoro.com/news-and-analysis/etoro-updates/agent-portfolios-let-your-ai-agent-trade-for-you/)). |
| Claude Code MCP | eToro documents an MCP integration for Claude Code using `claude mcp add --transport http etoro-api-docs https://api-portal.etoro.com/mcp` ([eToro Claude Code guide](https://api-portal.etoro.com/vibe-code/claude-code.md)). |

## What an Agent Portfolio is

An Agent Portfolio is a dedicated sub-portfolio inside an eToro account, intended for AI-driven trading and separated from the user’s personal investments ([eToro Agent Portfolios announcement](https://www.etoro.com/news-and-analysis/etoro-updates/agent-portfolios-let-your-ai-agent-trade-for-you/)). The user names the portfolio, chooses the capital allocation, and connects an agent through a scoped API key ([eToro Agent Portfolios announcement](https://www.etoro.com/news-and-analysis/etoro-updates/agent-portfolios-let-your-ai-agent-trade-for-you/)). eToro’s CEO describes Agent Portfolios as a way for users to connect a portion of their investments to an AI agent while keeping their core portfolio separate and under direct user control ([Yoni Assia on Agent Portfolios](https://www.etoro.com/news-and-analysis/insights-from-the-ceo/introducing-agent-portfolios/)).

The product is described as a way to let an AI agent open positions, close positions, check balances, and manage the portfolio scoped to it ([eToro Agent Portfolios announcement](https://www.etoro.com/news-and-analysis/etoro-updates/agent-portfolios-let-your-ai-agent-trade-for-you/)). eToro’s announcement says users can start with a minimum allocation of $200 for an Agent Portfolio ([eToro Agent Portfolios announcement](https://www.etoro.com/news-and-analysis/etoro-updates/agent-portfolios-let-your-ai-agent-trade-for-you/)). The same announcement says Agent Portfolios were in beta and rolling out gradually at publication time ([eToro Agent Portfolios announcement](https://www.etoro.com/news-and-analysis/etoro-updates/agent-portfolios-let-your-ai-agent-trade-for-you/)).

Claude should distinguish between a normal chatbot and a command-executing agent. eToro explicitly says the standard conversational setup requires an agent that can execute commands and run API calls directly, and that standard sandboxed chatbots such as ChatGPT, Gemini, and Claude.ai are not supported for that flow ([eToro Agent Portfolios announcement](https://www.etoro.com/news-and-analysis/etoro-updates/agent-portfolios-let-your-ai-agent-trade-for-you/)). Claude Code is a better fit because eToro documents Claude Code access to its API docs via MCP ([eToro Claude Code guide](https://api-portal.etoro.com/vibe-code/claude-code.md)).

## How Agent Portfolios work internally

The API endpoint `POST /api/v1/agent-portfolios` creates an agent portfolio, described as a dedicated user account that receives its own fixed virtual balance returned as `agentPortfolioVirtualBalance` ([Create Agent Portfolio](https://api-portal.etoro.com/api-reference/agent-portfolios/create-agent-portfolio.md)). The same endpoint documentation states that `investmentAmountInUsd` is deducted from the caller’s account balance to copy-trade the agent portfolio and is not the agent portfolio’s own balance ([Create Agent Portfolio](https://api-portal.etoro.com/api-reference/agent-portfolios/create-agent-portfolio.md)).

The important sizing mechanic is proportional mirroring. eToro’s docs give the example that if the user invests $2,000 and the agent portfolio virtual balance is $10,000, each position is copied at 20% of its size into the user’s account ([Create Agent Portfolio](https://api-portal.etoro.com/api-reference/agent-portfolios/create-agent-portfolio.md)). The create response includes an `agentPortfolioId`, `agentPortfolioGcid`, `agentPortfolioVirtualBalance`, `mirrorId`, and any generated `userTokens`, so Claude should preserve these IDs in persistent configuration and logs ([Create Agent Portfolio](https://api-portal.etoro.com/api-reference/agent-portfolios/create-agent-portfolio.md)).

The `GET /api/v1/agent-portfolios` endpoint retrieves the authenticated user’s agent portfolios and returns fields including `agentPortfolioId`, `agentPortfolioName`, `agentPortfolioGcid`, `agentPortfolioVirtualBalance`, `mirrorId`, `createdAt`, and associated `userTokens` ([Get Agent Portfolios](https://api-portal.etoro.com/api-reference/agent-portfolios/get-agent-portfolios.md)). The token metadata returned by this endpoint includes `userTokenId`, `userTokenName`, `clientId`, `externalApplicationName`, `ipsWhitelist`, `expiresAt`, `scopeIds`, and `createdAt` ([Get Agent Portfolios](https://api-portal.etoro.com/api-reference/agent-portfolios/get-agent-portfolios.md)).

## Agent Portfolio endpoint map

| Action | Method and path | Notes for Claude |
| --- | --- | --- |
| List agent portfolios | `GET /api/v1/agent-portfolios` | Use first to discover existing agent portfolios and their `mirrorId`, virtual balance, and token metadata ([Get Agent Portfolios](https://api-portal.etoro.com/api-reference/agent-portfolios/get-agent-portfolios.md)). |
| Create agent portfolio | `POST /api/v1/agent-portfolios` | Requires `investmentAmountInUsd`, `agentPortfolioName`, `userTokenName`, and `scopeIds`; name is documented as 6-10 characters ([Create Agent Portfolio](https://api-portal.etoro.com/api-reference/agent-portfolios/create-agent-portfolio.md)). |
| Create user token | `POST /api/v1/agent-portfolios/{agentPortfolioId}/user-tokens` | Creates a new token for a specified agent portfolio; the generated secret is only available at creation time ([Create User Token](https://api-portal.etoro.com/api-reference/agent-portfolios/create-user-token.md)). |
| Update user token | `PATCH /api/v1/agent-portfolios/{agentPortfolioId}/user-tokens/{userTokenId}` | Listed in the eToro documentation index as the endpoint for updating user token settings ([eToro llms.txt](https://api-portal.etoro.com/llms.txt)). |
| Delete user token | `DELETE /api/v1/agent-portfolios/{agentPortfolioId}/user-tokens/{userTokenId}` | Listed in the eToro documentation index as the endpoint for permanently revoking a token ([eToro llms.txt](https://api-portal.etoro.com/llms.txt)). |
| Delete agent portfolio | `DELETE /api/v1/agent-portfolios/{agentPortfolioId}` | Listed in the eToro documentation index as permanently removing an agent portfolio by revoking tokens, stopping the copy mirror, and deleting from storage ([eToro llms.txt](https://api-portal.etoro.com/llms.txt)). |

## Token scopes

Agent Portfolio token scope IDs are documented as permission identifiers. Use the least privileged set needed for the task.

| Scope ID | Scope name | Meaning |
| --- | --- | --- |
| `200` | `etoro-public:real:read` | Read real account or real agent portfolio data ([Create Agent Portfolio](https://api-portal.etoro.com/api-reference/agent-portfolios/create-agent-portfolio.md)). |
| `201` | `etoro-public:demo:read` | Read demo account or demo portfolio data ([Create Agent Portfolio](https://api-portal.etoro.com/api-reference/agent-portfolios/create-agent-portfolio.md)). |
| `202` | `etoro-public:real:write` | Write or execute against real account or real agent portfolio trading endpoints ([Create Agent Portfolio](https://api-portal.etoro.com/api-reference/agent-portfolios/create-agent-portfolio.md)). |
| `203` | `etoro-public:demo:write` | Write or execute against demo trading endpoints ([Create Agent Portfolio](https://api-portal.etoro.com/api-reference/agent-portfolios/create-agent-portfolio.md)). |

The token creation request supports `ipsWhitelist` and `expiresAt`, so Claude should recommend whitelisting the execution host’s IPv4 address and using short expiration dates for agent tokens where practical ([Create User Token](https://api-portal.etoro.com/api-reference/agent-portfolios/create-user-token.md)). eToro says a generated user token secret is only available at creation time, so Claude should never assume it can recover the secret later ([Create User Token](https://api-portal.etoro.com/api-reference/agent-portfolios/create-user-token.md)).

## Authentication pattern

Every private API request should include the following headers:

```http
x-request-id: <uuid-v4>
x-api-key: <public-api-key>
x-user-key: <user-key-or-agent-token>
Content-Type: application/json
```

The required headers are `x-request-id`, `x-api-key`, and `x-user-key`, and eToro’s authentication guide describes `x-request-id` as a unique UUID for the request ([eToro authentication guide](https://api-portal.etoro.com/getting-started/authentication.md)). Claude should generate a fresh UUID for each request and should never reuse `x-request-id` values for order execution or portfolio modification requests.

Credential handling rules for Claude:

- Never print, log, or echo `x-api-key`, `x-user-key`, token secrets, or raw environment variables in terminal output.
- Keep credentials in environment variables or a local secrets manager, not in source code.
- Use separate credentials for demo and real environments because eToro states each key can only be used for one environment ([eToro authentication guide](https://api-portal.etoro.com/getting-started/authentication.md)).
- Prefer read-only keys until a human explicitly approves write access.
- Prefer demo write scope before real write scope.

Suggested environment variables:

```bash
ETORO_API_BASE="https://public-api.etoro.com/api/v1"
ETORO_PUBLIC_API_KEY="<public-api-key>"
ETORO_USER_KEY="<user-key-or-agent-token>"
ETORO_ENV="demo" # demo | real
```

## Rate limits

eToro applies rate limits per user key using a one-minute rolling window ([eToro rate limits](https://api-portal.etoro.com/getting-started/rate-limits.md)). The rate limit guide states most standard GET data retrieval endpoints allow up to 60 requests per minute, including market data, portfolio and account info, social and feed reads, and watchlist reads ([eToro rate limits](https://api-portal.etoro.com/getting-started/rate-limits.md)). It also states trading execution, watchlist modifications, social writes, and heavier user trade-info queries are limited to 20 requests per minute ([eToro rate limits](https://api-portal.etoro.com/getting-started/rate-limits.md)).

Claude should implement exponential backoff for HTTP `429 Too Many Requests`, because eToro recommends retry logic with exponential backoff when limits are exceeded ([eToro rate limits](https://api-portal.etoro.com/getting-started/rate-limits.md)). Claude should cache stable data such as instrument IDs and exchange metadata because eToro recommends local caching for non-volatile data ([eToro rate limits](https://api-portal.etoro.com/getting-started/rate-limits.md)).

## Market data workflow

Most trading endpoints require a numeric `instrumentId`, not a text ticker, so Claude must resolve tickers before placing orders ([Find Instrument ID guide](https://api-portal.etoro.com/guides/get-instrument-id.md)). The documented search endpoint is `GET /api/v1/market-data/search`, and eToro’s guide shows querying `internalSymbolFull=AAPL` or `internalSymbolFull=BTC` to resolve the instrument ID ([Find Instrument ID guide](https://api-portal.etoro.com/guides/get-instrument-id.md)).

| Need | Method and path | Notes |
| --- | --- | --- |
| Search instruments | `GET /api/v1/market-data/search` | Use `internalSymbolFull` for exact ticker-style lookup or `searchText` for broader discovery ([Find Instrument ID guide](https://api-portal.etoro.com/guides/get-instrument-id.md)). |
| Current rates | `GET /api/v1/market-data/instruments/rates` | Use before execution to check current bid, ask, and execution pricing; eToro recommends checking rates before orders ([Open and close market orders](https://api-portal.etoro.com/guides/market-orders.md)). |
| Historical candles | `GET /api/v1/market-data/instruments/{instrumentId}/history/candles/{direction}/{interval}/{candlesCount}` | The OpenAPI summary lists candle intervals and a maximum of 1,000 candles ([eToro OpenAPI spec](https://api-portal.etoro.com/api-reference/openapi.json)). |
| Instrument metadata | `GET /api/v1/market-data/instruments` | Use to enrich positions with display names, exchange IDs, and classification ([eToro llms.txt](https://api-portal.etoro.com/llms.txt)). |
| Instrument types | `GET /api/v1/market-data/instrument-types` | Use to discover asset classes such as stocks, ETFs, and commodities ([eToro llms.txt](https://api-portal.etoro.com/llms.txt)). |
| Exchanges | `GET /api/v1/market-data/exchanges` | Use to discover supported exchanges ([eToro llms.txt](https://api-portal.etoro.com/llms.txt)). |

Minimal instrument-resolution logic:

```python
import os, uuid, requests

BASE = os.environ.get("ETORO_API_BASE", "https://public-api.etoro.com/api/v1")

def headers():
    return {
        "x-request-id": str(uuid.uuid4()),
        "x-api-key": os.environ["ETORO_PUBLIC_API_KEY"],
        "x-user-key": os.environ["ETORO_USER_KEY"],
        "Content-Type": "application/json",
    }

def resolve_instrument_id(symbol: str) -> int:
    r = requests.get(
        f"{BASE}/market-data/search",
        headers=headers(),
        params={"internalSymbolFull": symbol},
        timeout=20,
    )
    r.raise_for_status()
    data = r.json()
    matches = data.get("items", [])
    exact = [x for x in matches if x.get("internalSymbolFull") == symbol]
    if not exact:
        raise RuntimeError(f"No exact instrument match for {symbol}")
    return exact[0]["instrumentId"]
```

## Portfolio inspection workflow

The real-account comprehensive portfolio endpoint is `GET /api/v1/trading/info/portfolio`, and the demo equivalent is listed as `GET /api/v1/trading/info/demo/portfolio` in the OpenAPI summary ([Real portfolio endpoint](https://api-portal.etoro.com/api-reference/trading--real/retrieve-comprehensive-portfolio-information-including-positions-orders-and-account-status.md), [eToro OpenAPI spec](https://api-portal.etoro.com/api-reference/openapi.json)). The real portfolio endpoint returns a `clientPortfolio` object with positions, credit, mirrors, orders, `ordersForOpen`, `ordersForClose`, `ordersForCloseMultiple`, and `bonusCredit` ([Real portfolio endpoint](https://api-portal.etoro.com/api-reference/trading--real/retrieve-comprehensive-portfolio-information-including-positions-orders-and-account-status.md)).

Claude should treat `clientPortfolio.credit` as available trading balance, `positions[]` as live exposure, `orders[]` and `ordersForOpen` or `ordersForClose` as pending actions, and `mirrors[]` as copy-trading state ([Real portfolio endpoint](https://api-portal.etoro.com/api-reference/trading--real/retrieve-comprehensive-portfolio-information-including-positions-orders-and-account-status.md)). Each position includes important fields such as `positionID`, `openDateTime`, `openRate`, `instrumentID`, `isBuy`, `takeProfitRate`, `stopLossRate`, `amount`, `leverage`, `units`, `initialAmountInDollars`, `totalFees`, `isTslEnabled`, `isNoTakeProfit`, and `isNoStopLoss` ([Real portfolio endpoint](https://api-portal.etoro.com/api-reference/trading--real/retrieve-comprehensive-portfolio-information-including-positions-orders-and-account-status.md)).

Portfolio state should be the source of truth before any trade. Claude should call portfolio info before and after each trade, diff the state, and log any changed positions or pending orders.

```python
def portfolio_path(env: str) -> str:
    if env == "demo":
        return "/trading/info/demo/portfolio"
    if env == "real":
        return "/trading/info/portfolio"
    raise ValueError("env must be 'demo' or 'real'")

def get_portfolio(env: str):
    r = requests.get(f"{BASE}{portfolio_path(env)}", headers=headers(), timeout=20)
    r.raise_for_status()
    return r.json()["clientPortfolio"]
```

## Trading execution workflow

eToro separates opening a new position from closing an existing one ([Open and close market orders](https://api-portal.etoro.com/guides/market-orders.md)). To open a position, Claude can specify either a cash amount or units; the amount-based endpoint is intended for fixed-budget and dollar-cost-averaging style strategies ([Open and close market orders](https://api-portal.etoro.com/guides/market-orders.md)). To close a position, Claude must reference a specific `positionId`; eToro’s guide explicitly says the agent cannot simply “sell” an instrument without closing a specific line item ([Open and close market orders](https://api-portal.etoro.com/guides/market-orders.md)).

### Real vs demo execution paths

The OpenAPI summary describes demo trading execution paths as including `/demo/`, while real trading execution paths omit `/demo/` ([eToro OpenAPI spec](https://api-portal.etoro.com/api-reference/openapi.json)). For example, the real open-by-amount path is `POST /api/v1/trading/execution/market-open-orders/by-amount`, while the demo path is summarized as `POST /api/v1/trading/execution/demo/market-open-orders/by-amount` ([eToro OpenAPI spec](https://api-portal.etoro.com/api-reference/openapi.json)).

| Operation | Real path | Demo path |
| --- | --- | --- |
| Open market order by amount | `/trading/execution/market-open-orders/by-amount` | `/trading/execution/demo/market-open-orders/by-amount` |
| Open market order by units | `/trading/execution/market-open-orders/by-units` | `/trading/execution/demo/market-open-orders/by-units` |
| Close market position | `/trading/execution/market-close-orders/positions/{positionId}` | `/trading/execution/demo/market-close-orders/positions/{positionId}` |
| Cancel open order | `/trading/execution/market-open-orders/{orderId}` | `/trading/execution/demo/market-open-orders/{orderId}` |
| Cancel close order | `/trading/execution/market-close-orders/{orderId}` | `/trading/execution/demo/market-close-orders/{orderId}` |
| Place MIT order | `/trading/execution/limit-orders` | `/trading/execution/demo/limit-orders` |
| Cancel MIT order | `/trading/execution/limit-orders/{orderId}` | `/trading/execution/demo/limit-orders/{orderId}` |

### Open by amount

The real open-by-amount endpoint is `POST /api/v1/trading/execution/market-open-orders/by-amount` ([Open by amount endpoint](https://api-portal.etoro.com/api-reference/trading--real/create-a-market-order-to-open-a-position-by-specifying-the-amount-of-cash-you-would-like-to-use-in-the-trade.md)). The required request fields are `InstrumentID`, `IsBuy`, `Leverage`, and `Amount` ([Open by amount endpoint](https://api-portal.etoro.com/api-reference/trading--real/create-a-market-order-to-open-a-position-by-specifying-the-amount-of-cash-you-would-like-to-use-in-the-trade.md)). Optional fields include `StopLossRate`, `TakeProfitRate`, `IsTslEnabled`, `IsNoStopLoss`, and `IsNoTakeProfit` ([Open by amount endpoint](https://api-portal.etoro.com/api-reference/trading--real/create-a-market-order-to-open-a-position-by-specifying-the-amount-of-cash-you-would-like-to-use-in-the-trade.md)).

Stop-loss and take-profit rates must be directionally valid. eToro’s endpoint docs state the stop-loss trigger price must be worse than current price and the take-profit trigger price must be better than current price ([Open by amount endpoint](https://api-portal.etoro.com/api-reference/trading--real/create-a-market-order-to-open-a-position-by-specifying-the-amount-of-cash-you-would-like-to-use-in-the-trade.md)).

```python
def execution_prefix(env: str) -> str:
    if env == "demo":
        return "/trading/execution/demo"
    if env == "real":
        return "/trading/execution"
    raise ValueError("env must be 'demo' or 'real'")

def open_by_amount(env: str, instrument_id: int, amount: float, is_buy: bool = True,
                   leverage: int = 1, stop_loss_rate=None, take_profit_rate=None):
    payload = {
        "InstrumentID": instrument_id,
        "IsBuy": is_buy,
        "Leverage": leverage,
        "Amount": amount,
    }
    if stop_loss_rate is not None:
        payload["StopLossRate"] = stop_loss_rate
    if take_profit_rate is not None:
        payload["TakeProfitRate"] = take_profit_rate

    r = requests.post(
        f"{BASE}{execution_prefix(env)}/market-open-orders/by-amount",
        headers=headers(),
        json=payload,
        timeout=20,
    )
    r.raise_for_status()
    return r.json()
```

### Close or partially close a position

The real close-position endpoint is `POST /api/v1/trading/execution/market-close-orders/positions/{positionId}` ([Close position endpoint](https://api-portal.etoro.com/api-reference/trading--real/creates-a-market-order-to-close-a-position-or-partially-close-it-by-specifying-the-number-of-units-to-deduct.md)). The request body requires `InstrumentId`, and `UnitsToDeduct` is nullable; omitting it or setting it to null closes the full position, while providing a number partially closes that amount of units ([Close position endpoint](https://api-portal.etoro.com/api-reference/trading--real/creates-a-market-order-to-close-a-position-or-partially-close-it-by-specifying-the-number-of-units-to-deduct.md)).

```python
def close_position(env: str, position_id: int, instrument_id: int, units_to_deduct=None):
    payload = {"InstrumentId": instrument_id, "UnitsToDeduct": units_to_deduct}
    r = requests.post(
        f"{BASE}{execution_prefix(env)}/market-close-orders/positions/{position_id}",
        headers=headers(),
        json=payload,
        timeout=20,
    )
    r.raise_for_status()
    return r.json()
```

### Order confirmation

Order execution endpoints return order objects plus a confirmation `token`, while order status details can be retrieved using the order information endpoint after execution ([Open by amount endpoint](https://api-portal.etoro.com/api-reference/trading--real/create-a-market-order-to-open-a-position-by-specifying-the-amount-of-cash-you-would-like-to-use-in-the-trade.md), [Get real order information](https://api-portal.etoro.com/api-reference/trading--real/get-order-information-and-position-details-for-real-account.md)). The real order information endpoint is `GET /api/v1/trading/info/real/orders/{orderId}`, and it returns order status, execution details, and all positions opened from the order ([Get real order information](https://api-portal.etoro.com/api-reference/trading--real/get-order-information-and-position-details-for-real-account.md)).

Claude should not assume a returned order means the desired final position exists. Claude should confirm the order, fetch order details when needed, then re-fetch the portfolio and reconcile `positions[]`, `orders[]`, and cash.

## Suggested Claude trading loop

Claude should operate as a bounded execution agent, not as an unconstrained investor. The minimum safe loop is:

1. Load configuration and confirm `ETORO_ENV` is `demo` or `real`.
2. Verify credentials with a harmless read endpoint such as identity, watchlists, or portfolio info.
3. Fetch the current portfolio state.
4. Resolve any target symbols to eToro `instrumentId` values.
5. Fetch current rates for target instruments.
6. Evaluate the strategy under explicit constraints.
7. Produce a proposed action plan in plain English.
8. For real trading, stop and request human approval before any write endpoint.
9. For demo trading, execute only if the user has explicitly allowed autonomous demo execution.
10. After execution, fetch order details and portfolio state again.
11. Log the request ID, endpoint, sanitized payload, order ID, confirmation token, and resulting position delta.

The loop should always include a pre-trade portfolio check because the comprehensive portfolio endpoint exposes active positions, pending orders, account balances, and mirror state ([Real portfolio endpoint](https://api-portal.etoro.com/api-reference/trading--real/retrieve-comprehensive-portfolio-information-including-positions-orders-and-account-status.md)). The loop should always include an instrument-ID resolution step because eToro’s own guide says most endpoints require numeric `instrumentId` values instead of text symbols ([Find Instrument ID guide](https://api-portal.etoro.com/guides/get-instrument-id.md)). The loop should always include a market-rate check because eToro recommends checking current rates before executing orders ([Open and close market orders](https://api-portal.etoro.com/guides/market-orders.md)).

## Recommended guardrails

Claude must implement the following guardrails before any real-money trade:

| Guardrail | Rule |
| --- | --- |
| Human approval | Never call real write endpoints without explicit per-action approval from the human. |
| Demo first | Require successful demo execution and reconciliation before enabling real write scope. |
| Least privilege | Use read-only scopes for analysis and only enable write scopes for execution windows. |
| Budget cap | Enforce a maximum trade amount and a maximum daily traded notional specified by the human. |
| Position cap | Reject trades that would create excessive concentration in one instrument, sector, or asset class. |
| Leverage cap | Default to `Leverage: 1` unless the human explicitly approves leverage. |
| Stop-loss policy | Require either a documented reason for no stop loss or a valid `StopLossRate` for each new position. |
| No secret logging | Redact all auth headers, token values, and environment variables. |
| Idempotency awareness | Use unique `x-request-id` values and log them so accidental retries can be investigated. |
| Rate-limit handling | Back off on `429` responses and avoid tight polling loops. |
| Market-hours awareness | Check execution availability, spreads, and asset-specific market conditions before orders. |
| Post-trade reconciliation | Confirm order status and portfolio deltas after every order. |

The eToro docs do not describe an API-level “human approval” mechanism, so this approval gate must be implemented by the agent or surrounding application. The docs do, however, provide scoped permissions, IP whitelisting, token expiration, and separate read/write scopes that can be used as operational controls ([Create User Token](https://api-portal.etoro.com/api-reference/agent-portfolios/create-user-token.md)).

## Prompt to give Claude Code

Use this prompt when handing the context to Claude Code:

```text
You are an execution-safe eToro API coding agent. Read the attached context document fully before taking action.

Goals:
1. Build or modify a small Python client for the eToro Public API.
2. Use environment variables for ETORO_API_BASE, ETORO_PUBLIC_API_KEY, ETORO_USER_KEY, and ETORO_ENV.
3. Implement read-only functions first: get_agent_portfolios, get_portfolio, resolve_instrument_id, get_rates.
4. Implement write functions behind explicit approval gates: open_by_amount, open_by_units, close_position, cancel_order.
5. Default to demo mode and refuse real-money write calls unless the user explicitly approves the exact trade.
6. Never print secrets or raw auth headers.
7. Log request IDs, sanitized payloads, order IDs, confirmation tokens, and pre/post portfolio deltas.
8. Use eToro's MCP docs if available: claude mcp add --transport http etoro-api-docs https://api-portal.etoro.com/mcp

Trading constraints:
- Default leverage is 1.
- Do not exceed the user-specified per-trade amount or daily notional.
- Do not trade instruments that cannot be resolved to a single exact eToro instrumentId.
- Check current rates before every order.
- Fetch portfolio state before and after every write call.
- For real trading, present the exact endpoint, sanitized payload, target instrument, amount, leverage, stop-loss/take-profit settings, and expected portfolio impact, then wait for explicit approval.
```

## Minimal client skeleton

```python
import os
import uuid
import requests
from dataclasses import dataclass

@dataclass
class EtoroConfig:
    base: str = os.environ.get("ETORO_API_BASE", "https://public-api.etoro.com/api/v1")
    public_api_key: str = os.environ["ETORO_PUBLIC_API_KEY"]
    user_key: str = os.environ["ETORO_USER_KEY"]
    env: str = os.environ.get("ETORO_ENV", "demo")

    def headers(self):
        return {
            "x-request-id": str(uuid.uuid4()),
            "x-api-key": self.public_api_key,
            "x-user-key": self.user_key,
            "Content-Type": "application/json",
        }

class EtoroClient:
    def __init__(self, cfg: EtoroConfig):
        if cfg.env not in ("demo", "real"):
            raise ValueError("ETORO_ENV must be demo or real")
        self.cfg = cfg

    def _get(self, path, **params):
        r = requests.get(f"{self.cfg.base}{path}", headers=self.cfg.headers(), params=params, timeout=20)
        r.raise_for_status()
        return r.json()

    def _post(self, path, payload):
        r = requests.post(f"{self.cfg.base}{path}", headers=self.cfg.headers(), json=payload, timeout=20)
        r.raise_for_status()
        return r.json()

    def execution_prefix(self):
        return "/trading/execution/demo" if self.cfg.env == "demo" else "/trading/execution"

    def portfolio_path(self):
        return "/trading/info/demo/portfolio" if self.cfg.env == "demo" else "/trading/info/portfolio"

    def get_agent_portfolios(self):
        return self._get("/agent-portfolios")

    def get_portfolio(self):
        return self._get(self.portfolio_path())

    def resolve_instrument_id(self, symbol):
        data = self._get("/market-data/search", internalSymbolFull=symbol)
        exact = [x for x in data.get("items", []) if x.get("internalSymbolFull") == symbol]
        if len(exact) != 1:
            raise RuntimeError(f"Expected one exact match for {symbol}, got {len(exact)}")
        return exact[0]["instrumentId"]

    def open_by_amount(self, instrument_id, amount, is_buy=True, leverage=1,
                       stop_loss_rate=None, take_profit_rate=None, approved=False):
        if self.cfg.env == "real" and not approved:
            raise PermissionError("Refusing real-money write without explicit approval")
        payload = {
            "InstrumentID": instrument_id,
            "IsBuy": is_buy,
            "Leverage": leverage,
            "Amount": amount,
        }
        if stop_loss_rate is not None:
            payload["StopLossRate"] = stop_loss_rate
        if take_profit_rate is not None:
            payload["TakeProfitRate"] = take_profit_rate
        return self._post(f"{self.execution_prefix()}/market-open-orders/by-amount", payload)

    def close_position(self, position_id, instrument_id, units_to_deduct=None, approved=False):
        if self.cfg.env == "real" and not approved:
            raise PermissionError("Refusing real-money write without explicit approval")
        payload = {"InstrumentId": instrument_id, "UnitsToDeduct": units_to_deduct}
        return self._post(f"{self.execution_prefix()}/market-close-orders/positions/{position_id}", payload)
```

## Implementation checklist

Claude should use this checklist before enabling trading:

- Confirm whether the user wants demo-only or real trading.
- Confirm the target Agent Portfolio and whether the token is scoped only to that portfolio.
- Verify the token scopes and reject broader scopes than necessary.
- Confirm IP whitelist and expiration for the token if token creation is in scope.
- Implement read-only endpoints and test them first.
- Implement write endpoints with approval gates.
- Store no secrets in code or logs.
- Cache instrument IDs after exact lookup.
- Rate-limit outbound requests and implement exponential backoff for `429`.
- For every real trade, display the exact planned action and wait for explicit approval.
- After every write, reconcile order status and portfolio state.

## Key limitations and unknowns

eToro’s public documentation explains REST endpoints, scopes, token management, and product-level Agent Portfolio behavior, but it does not fully define every risk-control parameter an agent should use for trading strategy design. The user or surrounding application must define strategy constraints such as allowed instruments, per-trade notional, leverage limits, maximum drawdown, stop-loss policy, trading frequency, and approval rules.

The documentation retrieved here includes official eToro pages and the OpenAPI-derived documentation. Older unofficial GitHub wrappers exist, but they predate the new Agent Portfolio workflow and should not be treated as authoritative for the current API.

## Safe operating principle

Claude may analyze, code, simulate, and prepare orders, but real-money writes must be treated as irreversible financial actions. Use demo mode by default, use least-privilege credentials, and require explicit human approval before calling any real trading write endpoint.

This is research and analysis only, not personalized financial advice. Consult a qualified financial advisor before making investment decisions.
