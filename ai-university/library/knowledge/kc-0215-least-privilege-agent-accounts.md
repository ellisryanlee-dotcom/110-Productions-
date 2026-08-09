---
id: kc-0215
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [least-privilege, api-keys, permissions, cost-tracking, security]
source_video: [bCljOfCH8Ms, gb5TlGw6Uks]
source_channel: "@nateherk"
source_views: ["395K", "336K"]
confidence: high
---
# Least privilege: separate accounts and scoped keys per agent

**What:** Instead of handing an agent your own full-access account, give it its own
account (or its own API key) with only the permissions and scopes it needs for its
job. Scope every agent to the minimum authority its role requires — never your own
blanket, full-access credentials.

**Why it matters:** Full-permission access is dangerous (an over-empowered agent can
delete data or write where it shouldn't) and opaque. Named, scoped credentials limit
blast radius and, because each agent spends on its own key, let you see exactly which
agent is using how much money and doing what.

**The moves:**
1. Create a dedicated account for the agent rather than sharing yours.
2. Or issue a per-agent API key scoped to the minimum (e.g., read-only where writes
   aren't needed).
3. Give each agent its own named keys so cost and activity are attributable.
4. Keep each agent's secrets isolated (e.g., its own container/env) so they don't
   clash or leak to each other.
5. Review and adjust scopes over time as the agent's role changes.

**Watch out for:** Over-scoped keys are a standing risk — public incidents exist of
an AI deleting a production database. A marketing agent probably shouldn't have
finance-system access; split by need. Shared keys across agents remove your ability
to attribute spend and blame.

**Original example to invent:** Source made a dedicated task-manager account for its
agent and per-agent research keys. Writers should illustrate with a different tool
stack and role split. The source also framed least-privilege as an onboarding-trust
role-comparison (don't hand a brand-new hire your credit card and admin rights on day
one). The load-bearing idea is *minimum standing authority / earn-scope-over-time* —
invent a fresh analogy for it from a different domain and do NOT reuse the new-hire /
intern / credit-card framing.
