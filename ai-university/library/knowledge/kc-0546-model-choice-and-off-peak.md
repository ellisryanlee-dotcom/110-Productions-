---
id: kc-0546
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [model-selection, delegation, off-peak, cost-optimization]
source_video: 49V-5Ock8LU
source_channel: "@nateherk"
source_views: "268K"
confidence: high
---
# Manage cost with model choice, delegation, and off-peak timing

**What:** Advanced cost tactics centered on *which* model does *what* and *when* you run heavy work. Match model tier to task, delegate parallel/one-off subtasks to cheaper models, use agent teams sparingly, and schedule big jobs for off-peak hours.

**Why it matters:** Tokens cost more or less depending on the model, so shifting the bulk of your token spend onto cheaper models — and running big sessions when limits drain slower — stretches the same plan much further without sacrificing quality where it counts.

**The moves:**
1. **Pick the right model per task** — a mid-tier model for most coding, a light model for sub-agents/formatting/simple tasks, and the top model only for deep architectural planning when the mid-tier wasn't enough (keep top-model use to a small share).
2. **Delegate to cheaper workers** — for parallel or one-off tasks (heavy research, processing lots of info) spin up sub-agents on a light model and get a clean summary back; making 80% of your tokens cheap-model tokens saves real money.
3. **Cross-tool review** — for large codebases, have your primary models build and bring in a separate tool/model to review, saving your primary plan's tokens.
4. **Use agent teams sparingly** — they raise quality but are very expensive.
5. **Time heavy work off-peak** — session windows drain faster during peak demand; run big refactors/multi-agent jobs during off-peak (afternoons/evenings/weekends). If near a reset with budget left, go heavy; if near your limit with lots of time left, take a break and return with a full budget.

**Watch out for:** Sub-agents each reload full context, so they use roughly 7–10× the tokens of a single-agent turn — cheap-model delegation helps, but tokens are still tokens. There's a real quality-vs-cost trade-off; sometimes you must pay for the higher-quality model. (Peak-window specifics are provider- and time-dependent — verify current details.)

**Original example to invent:** The source suggests delegating research to a light-model sub-agent and reviewing with a second tool. Writers should invent a specific task split across model tiers with a rationale for each choice.
