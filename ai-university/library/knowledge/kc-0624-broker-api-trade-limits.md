---
id: kc-0624
type: pitfall
track: "Track 8 — Applied Automations"
topics: [api-limits, brokerage, alpaca, rate-limits, integration]
source_video: eu8UJtuIi-E
source_channel: "@nateherk"
source_views: "248K"
confidence: high
---
# External APIs impose limits your agent will hit — and must adapt to

**What:** When an agent acts through a third-party API, that platform's own rules can
block it. In this case a brokerage API restricted how many trades an account could
make unless it met a certain account level/requirement; the agent tried to trade,
got blocked, and had to readjust its approach. The account also logged far more
underlying orders than the agent's "trade" count because of automatic stop-loss
orders.

**Why it matters:** Integrations fail not just from your bugs but from the provider's
constraints — rate limits, tier requirements, order-count caps. If you don't know
them, your automation silently underperforms or stalls. And provider-side mechanics
(like stop losses generating extra orders) mean the raw activity can differ from what
your agent intended.

**The moves:**
1. Before building, read the provider's limits: rate limits, account-tier
   requirements, per-period action caps.
2. Design the agent to detect a block and adapt (back off, reduce frequency, reroute)
   rather than fail hard.
3. Reconcile the agent's intended actions against what the platform actually recorded.
4. Account for provider-generated side actions (e.g., protective orders) in your
   metrics.

**Watch out for:** A blocked call can look like an agent failure when it's really a
tier or limit issue. Order counts on the platform may not match the agent's own tally
because of mechanics you didn't initiate.

**Original example to invent:** Source hit a brokerage's trade limit. Writers should
use a different API's constraint (e.g., a messaging API's send-rate cap) and show the
agent detecting and adapting to it.
