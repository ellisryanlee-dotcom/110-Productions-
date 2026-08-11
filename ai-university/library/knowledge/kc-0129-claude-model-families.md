---
id: kc-0129
type: concept
track: "Elective — Model & Tool Literacy"
topics: [claude-models, haiku, sonnet, opus, model-selection, cost]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Claude model families: Haiku, Sonnet, Opus

**What:** Claude comes in three model families with different strengths, speeds, and costs. Haiku is the fastest, lightest, and cheapest — good for simple tasks and high-volume sub-agent work. Sonnet is the balanced middle — fast and capable for everyday coding. Opus is the heavy-reasoning model — smartest but slowest and priciest. The trailing number (e.g., 4.5, 4.6) is just the version; higher means more refined.

**Why it matters:** Matching model to task controls cost and performance. A common strategy is Sonnet for the bulk of work and Opus for hard architecture decisions or tricky bugs; Haiku for cheap, data-heavy delegation.

**The moves:**
1. Switch models with the model command mid-session.
2. Default to Sonnet for routine coding; escalate to Opus for complex reasoning, then switch back.
3. Use Haiku where a sub-agent must chew through lots of tokens and only return a summary.
4. Don't over-focus on version numbers — they just track incremental improvements.

**Watch out for:** Using a top-tier model for trivial tasks wastes money and hits limits faster; using a light model for hard reasoning yields weaker output. (The presenter admits a habit of defaulting to Opus for most things — fine for feel, not for cost discipline.)

**Original example to invent:** The source assigns models by task in a live build. Invent your own task mix and justify a model per step so writers don't copy the exact assignments.
