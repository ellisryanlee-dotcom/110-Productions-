---
id: kc-0424
type: tool
track: "Track 9 — Reliability & Craft"
topics: [claude-code, context-mode, tool-output, session-persistence]
source_video: eRS3CmvrOvA
source_channel: "@nateherk"
source_views: "411K"
confidence: medium
---
# Context Mode: keep tool-output garbage out and rebuild state after compaction

**What:** A plugin that fixes two context problems at once. First, it routes each tool call through a sandbox so raw output (browser snapshots, logs, bulk API results) is captured in an isolated subprocess and only the part the agent actually needs returns to the window. Second, it logs every meaningful session event to a local database and, when the conversation compacts, rebuilds and reinjects a snapshot so the model resumes with its files, tasks, and last prompt intact.

**Why it matters:** After a while, a large share of the window is just raw tool output the agent never needed, and when it compacts, it forgets what it was editing and what you last asked. Context Mode attacks both, so sessions that used to fall apart after half an hour can run for hours.

**The moves:**
1. Install it (it auto-installs its tool server, hooks, and routing) and restart the agent.
2. Let it capture tool output in a sandbox and return only the needed slice, shrinking large raw payloads to a tiny fraction.
3. Rely on its local event log so compaction no longer loses your working state.
4. Check your own before/after numbers with its stats command.

**Watch out for:** The dramatic size reductions come from published benchmarks — measure your own workload rather than assuming identical results.

**Original example to invent:** Source cites benchmark byte counts for a browser snapshot and an access log. Writers should demonstrate the raw-vs-captured idea on a different noisy tool without reusing those figures as claims.
