---
id: kc-0422
type: tool
track: "Track 9 — Reliability & Craft"
topics: [claude-code, gsd, context-engineering, sub-agents, quality-gates]
source_video: eRS3CmvrOvA
source_channel: "@nateherk"
source_views: "411K"
confidence: medium
---
# GSD: clean context via fresh sub-agents and quality gates

**What:** A plugin focused on the environment the agent works in rather than how it writes code. Instead of one long session that slowly degrades, it spawns a fresh sub-agent per task, each with a clean context window scoped to only what that task needs, and adds automated quality gates during execution.

**Why it matters:** Around the midpoint of a long session, quality decays — the agent forgets earlier requirements, skips steps, and may claim things are done when they aren't (context rot). Giving each task the full context window instead of the leftovers keeps execution reliable.

**The moves:**
1. Install it so tasks run in fresh, isolated sub-agent contexts while the main session stays clean.
2. Rely on its gates: scope-reduction detection catches the planner silently dropping a requirement, and security enforcement ties verification to your threat model.
3. Use its autonomous mode to hand it a spec and let it plan, execute, and commit through a whole project with less babysitting.
4. Discover available commands via its in-tool help command.

**Watch out for:** It's not a token-saver — all those sub-agents cost tokens. What it saves is the hours of redoing work the agent broke by forgetting requirements.

**Original example to invent:** Source describes generic multi-task projects. Writers should invent a spec where a dropped requirement would slip through without the scope-reduction gate.
