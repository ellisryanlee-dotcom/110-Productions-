---
id: kc-0616
type: pitfall
track: "Elective — Model & Tool Literacy"
topics: [terms-of-service, api-keys, subscriptions, cost, wrappers]
source_video: CBNbcbMs_Lc
source_channel: "@nateherk"
source_views: "251K"
confidence: medium
---
# Don't drive a third-party agent wrapper with your model subscription plan

**What:** Some always-on assistant tools are essentially a chat wrapper around a
coding agent. Driving such a wrapper with a personal model *subscription* plan can
violate the provider's terms of service; the intended path is a proper API key
(from the model provider or an aggregator). The trade-off: subscriptions offer
fixed-cost, high-volume usage, while API keys are metered per token and can run up a
large bill fast if you chat with an always-on agent all day.

**Why it matters:** Getting this wrong risks both a terms violation and a surprise
bill. Understanding the licensing boundary between "using the app you subscribed to"
and "using its model through a third-party wrapper" keeps you compliant and in control
of cost.

**The moves:**
1. For a third-party wrapper or self-hosted agent, use an API key rather than piping
   in a personal subscription plan.
2. Budget for metered token cost — heavy always-on chatter burns tokens continuously.
3. Prefer the first-party app for subscription-based usage; reserve API keys for
   programmatic and wrapper scenarios.

**Watch out for:** This is stated as the presenter's understanding of the terms, not a
quoted policy — verify the current terms of service before relying on it. Token bills
from an always-on agent can escalate quickly and quietly.

**Original example to invent:** Source noted a large single-day token spend during
testing. Writers should invent a cost scenario contrasting subscription vs. API-key
usage with fresh numbers, and flag readers to check current terms.
