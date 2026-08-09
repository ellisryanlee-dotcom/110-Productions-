---
id: kc-0600
type: concept
track: "Track 2 — AI Agents Core"
topics: [agentic-workflows, automation, agent-design, non-deterministic]
source_video: tDGiWn0flK8
source_channel: "@nateherk"
source_views: "262K"
confidence: medium
---
# Agentic workflows vs. traditional node-based automation

**What:** Two ways to build automations. In traditional node-based automation you
specify *how*: you place each step, wire the connections, map the variables, and
when something breaks you diagnose and patch it yourself. In an agentic workflow
you specify *what* — the outcome you want — and a reasoning agent decides the
steps, chooses tools, asks clarifying questions, handles errors, and adapts as it
runs.

**Why it matters:** The two shine in different places. Predictable, repetitive
processes are cheapest and safest as fixed step-by-step automations. Messy tasks
that need judgment at many points — research, content, support triage, lead
handling — are where an agent's ability to reason and self-correct pays off, and
where a rigid fixed pipeline would be brittle.

**The moves:**
1. Decide whether the task is stable (fixed steps win) or variable (agent wins).
2. For agentic work, describe the goal, the inputs you can provide, and the
   deliverable — not the internal procedure.
3. Let the agent propose the sequence and the tools; review its plan before it runs.
4. Give feedback on outputs; a well-structured agent updates its own instructions
   so the next run is better.

**Watch out for:** Agentic does not mean "always better." Fixed automations are
predictable and boring by design, which is a feature for compliance-sensitive or
high-volume steps. Handing an under-specified goal to an agent invites unpredictable
behavior and cost.

**Original example to invent:** Source framed this around a competitor-research
build. Writers should contrast the two approaches on a fresh task (e.g., triaging
inbound support tickets) and show which layer of it stays fixed vs. agentic.
