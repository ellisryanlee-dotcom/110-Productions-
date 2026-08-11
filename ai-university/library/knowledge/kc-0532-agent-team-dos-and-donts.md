---
id: kc-0532
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-teams, best-practices, file-ownership, team-size]
source_video: vDVSGVpB2vc
source_channel: "@nateherk"
source_views: "278K"
confidence: high
---
# Agent-team dos and don'ts

**What:** A checklist of practices that make agent teams work well: give each agent its own files/territory, define concrete outputs, name message recipients explicitly, keep the team small, and always supply full context.

**Why it matters:** Multi-agent runs fail in predictable ways — agents overwrite each other, produce vague results, don't know who to talk to, or balloon cost. These guidelines head off each failure mode and keep quality high without runaway spend.

**The moves:**
1. **Own specific files** — assign each agent its own files/deliverables so agents don't overwrite each other's work.
2. **Define the output** — specify concrete deliverables, not vague goals.
3. **Name recipients** — tell agents exactly who to message and why; don't assume they'll infer it.
4. **Keep it small** — roughly three to five teammates; avoid swarms of ten-plus (which also cost proportionally more).
5. **Give full context** — since no history is provided at spawn, include what each agent needs to act.

**Watch out for:** Shared files across agents cause overwrites; oversized swarms multiply cost with little quality gain. If deliverables feel disjointed, check file ownership; if an agent sits idle, ensure it was assigned real work or a dependency.

**Original example to invent:** The source lists these against a dev-team build. Writers should invent a scenario that violates two of the don'ts (e.g., shared files + a swarm of ten) and show the corrected setup.
