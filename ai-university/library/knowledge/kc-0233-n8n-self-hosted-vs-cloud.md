---
id: kc-0233
type: framework
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, self-hosted, cloud, deployment, decision]
source_video: ZHH3sr234zY
source_channel: "@nateherk"
source_views: "523K"
confidence: medium
---
# Self-hosted vs. cloud n8n: how to choose

**What:** n8n can run self-hosted (on your own server) or on the managed cloud. Self-
hosted gives full control and customization, data ownership on your private server, no
subscription fee, and the ability to modify source — at the cost of you handling setup,
updates, backups, scaling, and security. Cloud is managed for you (updates, scaling,
security, SSL) with a usage-tier subscription, better for beginners who don't want to
run infrastructure.

**Why it matters:** The hosting choice front-loads real tradeoffs around control, cost,
compliance, and maintenance burden. Picking wrong means either paying for convenience
you didn't need or drowning in server maintenance you weren't ready for.

**The moves:**
1. Choose self-hosted if you need full data control, deep on-premise integration, or
   have the technical comfort/team to maintain a server.
2. Choose cloud if you prefer simplicity, quick reliable setup, and are fine paying a
   subscription and being handled by a third party.
3. Factor compliance: sensitive-data/privacy needs push toward self-hosting.
4. Factor cost realistically: self-hosting adds infra/maintenance costs; cloud scales
   with seats/usage.

**Watch out for:** Self-hosting's "no subscription" can be offset by infrastructure and
maintenance costs (database, server, possibly staff). Cloud cost rises with heavy usage
but usually correlates with the value you're getting. This is guidance, not a hard rule.

**Original example to invent:** Source weighed the two generically. Writers should walk
a specific business through the decision (e.g., a healthcare firm vs. a solo creator).
