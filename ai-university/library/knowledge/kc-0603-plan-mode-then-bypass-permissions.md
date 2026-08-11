---
id: kc-0603
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, plan-mode, permissions, safety, workflow]
source_video: tDGiWn0flK8
source_channel: "@nateherk"
source_views: "262K"
confidence: high
---
# Plan first, then switch to autonomous execution

**What:** Coding agents offer several permission modes — plan-only, ask-before-each-edit,
edit-automatically, and a fully autonomous "bypass" mode that executes without
prompting. The recommended flow is to start in plan mode, let the agent research and
produce a detailed plan (asking you clarifying questions), review and adjust it, and
only then flip to autonomous execution once you trust the plan.

**Why it matters:** Autonomous mode is powerful but blind if you skipped planning —
it will just do whatever it decided, at whatever cost. Planning first is what makes
full autonomy safe: you've already seen the architecture, tool choices, cost
estimate, and edge-case handling before granting it free rein.

**The moves:**
1. Enter plan mode and state the goal in natural language; invite questions.
2. Answer the agent's discovery questions (scope, data, budget, cadence).
3. Read the returned plan — architecture, tools/APIs, cost breakdown, edge cases.
4. If something's wrong, keep planning and revise (e.g., swap in your real assets)
   rather than accepting.
5. When confident, accept the plan and enable autonomous execution to build/run.

**Watch out for:** Autonomous mode is labeled "dangerous" for a reason — with no
plan and a huge task, it can take sweeping actions unasked. Enable it in a settings
toggle only after planning. Keep an eye on the run.

**Original example to invent:** Source planned a branded competitor-analysis build.
Writers should show the plan-then-execute loop on an unrelated project and highlight
one plan revision the user forced before accepting.
