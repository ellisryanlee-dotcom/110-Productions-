---
id: kc-0208
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [permissions, autonomy, safety, claude-code]
source_video: [saggDHHnmtQ, bCljOfCH8Ms]
source_channel: "@nateherk"
source_views: ["410K", "395K"]
confidence: high
---
# Permission modes: ask, auto, and bypass

**What:** Coding agents run at different autonomy levels. In an "ask/approve" mode
the agent stops for confirmation before each edit or command. An "auto" mode uses a
lightweight safety check to run harmless actions on its own but pauses for risky ones
(deletes, pushes). A "bypass/dangerously-skip-permissions" mode lets it do everything
without stopping.

**Why it matters:** Constant approval prompts are slow for research-heavy work, but
full autonomy carries real risk (an agent can delete data or push code). Choosing the
right mode per task trades speed against safety deliberately instead of by accident.

**The moves:**
1. Start in ask/approve or plan mode for anything sensitive or exploratory.
2. Use auto mode to move faster while still gating destructive operations.
3. Enable bypass mode (via settings) only when you trust the task and want full speed.
4. Match the mode to the blast radius of what the agent might do.

**Watch out for:** Auto mode spends extra tokens running the safety assessment.
Bypass mode will happily execute destructive actions — it only "misbehaves" when you
told it to do something risky, so scope the request carefully. Bypass must be enabled
in settings before the option appears.

**Original example to invent:** Source ran research in bypass mode. Writers should
illustrate mode selection on a different task (e.g., a data-cleanup job where auto
mode's guardrail matters).
