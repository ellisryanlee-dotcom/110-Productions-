---
id: kc-0620
type: example
track: "Track 8 — Applied Automations"
topics: [autonomous-agents, trading, cron, portfolio, experiment]
source_video: eu8UJtuIi-E
source_channel: "@nateherk"
source_views: "248K"
confidence: high
---
# An autonomous portfolio agent that trades on a scheduled loop

**What:** A worked example of wiring an agent to manage a real brokerage account
autonomously. It runs on a recurring schedule (a job firing at a fixed interval
during market hours) where each cycle it pulls signals and news, evaluates the
portfolio, rebalances, and places trades through a broker API — with position and
risk rules baked into its strategy (e.g., caps per position, a cash reserve, limits
on riskier instruments). Two builders ran competing agents over 30 days; both roughly
beat a market-index baseline over that specific, unusual window.

**Why it matters:** It demonstrates the full shape of a self-directed agent acting on
the real world with money at stake: scheduled wake-ups, live data, decision-making,
and API-executed actions. It's a concrete template for any "monitor, decide, act on a
loop" automation, financial or not.

**The moves:**
1. Define a strategy with explicit constraints (max per position, cash floor, risk
   limits) the agent must obey.
2. Give it access to the signals/data it needs and a broker (or other action) API.
3. Schedule a recurring job to run the evaluate-rebalance-act cycle on cadence.
4. Monitor its actions and outputs without interfering, if the goal is a fair test.

**Watch out for:** A 30-day result over an atypical market (major news shocks) proves
almost nothing about a strategy — the window was short and few of those days were even
trading days. Past-window performance is not evidence the approach generalizes.

**Original example to invent:** Source built stock-trading agents. Writers must NOT
reuse trading; adapt the scheduled monitor-decide-act loop to an unrelated domain
(e.g., an agent that watches inventory levels and places restock orders on a cadence).
