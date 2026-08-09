---
id: kc-0637
type: how-to
track: "Track 2 — AI Agents Core"
topics: [agent-config, model-selection, budgets, adapters, cost-control]
source_video: HJ-dwefABss
source_channel: "@nateherk"
source_views: "244K"
confidence: high
---
# Give each agent its own model, provider, and budget

**What:** In an agent org you can configure each agent independently: its underlying
model and provider (the "adapter"), its name/title, who it reports to, its
capabilities, and a spending cap. That means a lightweight role can run a cheaper model
while a demanding role runs a stronger one, and each agent's monthly spend can be
capped and tracked separately.

**Why it matters:** Per-agent configuration is what turns a generic swarm into a
specialized, cost-controlled organization. You match model power to task difficulty
(saving money on simple roles), and budgets prevent any single agent from running away
with cost. Spend visibility per agent makes the economics manageable.

**The moves:**
1. For each agent, set its model/provider adapter to fit the role's difficulty.
2. Configure name, title, reporting line, and capabilities.
3. Set a per-agent budget cap and monitor spend.
4. Reserve stronger/pricier models for the roles that genuinely need them.

**Watch out for:** If you run everything on your subscription, per-agent spend may show
as zero and hide the true cost; metered API usage is where the real budget signal lives.
An under-powered model on a hard role fails quietly; an over-powered model on an easy
role wastes money.

**Original example to invent:** Source configured a CEO agent's model and referenced
budgets. Writers should design a small org where different roles deliberately run
different models for cost/quality reasons.
