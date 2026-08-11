---
id: kc-0510
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [cost, abuse, chat-agents, rate-limiting]
source_video: A0OwvNOLNlw
source_channel: "@nateherk"
source_views: "342K"
confidence: medium
---
# A public chat number exposes you to per-message model costs

**What:** When a chat agent (WhatsApp, SMS, web widget) is reachable by the public and is backed by a pay-per-use model provider, every inbound message triggers a paid model call. That cost lands on you, the operator — including messages from anyone who spams or abuses the number.

**Why it matters:** It's easy to celebrate a working agent and forget that "anyone can text this number" is also "anyone can run up my bill." A single bad actor sending a flood of messages converts directly into provider charges.

**The moves:**
1. Before exposing a chat agent publicly, decide how you'll cap or absorb per-message cost.
2. Add protective layers: rate limits per sender, allow-lists or verification for who can message, and message-volume caps.
3. Prefer providers/plans where you can bound spend, and monitor usage so a spike is visible early.
4. Factor expected (and abusive) message volume into whether the automation is worth deploying.

**Watch out for:** The exposure is invisible until the bill arrives. Closed/paid model credits are consumed on *every* message regardless of whether it's a real customer.

**Original example to invent:** The source raises this as a closing caution on a WhatsApp build. Writers should invent a concrete abuse scenario and a specific mitigation (e.g., a support bot that throttles unknown numbers after N messages/hour).
