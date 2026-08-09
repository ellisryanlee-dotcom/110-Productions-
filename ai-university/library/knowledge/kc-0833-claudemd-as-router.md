---
id: kc-0833
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-md, agents-md, routing, second-brain, context, memory]
source_video: DTCyvo6cC54
source_channel: "@nateherk"
source_views: "202K"
confidence: high
---
# Using CLAUDE.md/AGENTS.md as a knowledge router

**What:** Treating the always-loaded project instructions file (CLAUDE.md, or AGENTS.md
for other agents) not just as a role/system prompt but as a router — explicit rules that
tell the agent where each kind of information lives (personal context here, current
priorities there, decisions in this log).

**Why it matters:** An agent won't blindly search your whole project — that would waste
time and tokens. If it doesn't know something exists at a path, it can't find it. Good
routing rules stop the endless re-explaining and let the agent go straight to the right
folder.

**The moves:**
1. Put a "where things live" section in the instructions file with routing rules per
   information type.
2. Point to a context folder (always-true background), a projects folder, a decision log,
   and any wikis/references.
3. For tool-agnostic setups, mirror the file (e.g., copy CLAUDE.md to AGENTS.md) so a
   different agent can read it; route memory to a memory file both can use.
4. Optionally reference one instructions file from the other to avoid duplication.

**Watch out for:** If the router grows too big it gets messy and can feel ignored. There
is no single "correct" folder architecture — what matters is that routing exists and makes
sense to both you and the agent. Turn on auto-memory so a memory file self-updates.

**Original example to invent:** Design routing rules for a different project's folder
layout than the source's.
