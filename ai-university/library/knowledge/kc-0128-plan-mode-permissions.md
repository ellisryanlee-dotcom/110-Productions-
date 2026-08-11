---
id: kc-0128
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [plan-mode, permission-modes, safe-autonomy, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Plan mode and permission modes (and safe autonomy)

**What:** An agentic coding tool runs in selectable permission modes: plan mode (the agent can read, research, and propose a plan but changes nothing), accept-edits (it can read/write/edit files without asking but still asks before running shell commands), and bypass-permissions (full autonomy). Plan mode is the recommended starting point for anything creative because the agent thinks harder and asks clarifying questions before building.

**Why it matters:** Planning first — and reading the plan — dramatically reduces wasted work and rework. Bypass mode is fast but unsupervised; the safer path to the same speed is to explicitly allow known-safe commands and deny destructive ones (deny always wins over allow).

**The moves:**
1. Start in plan mode; describe the goal loosely and let the agent ask questions until it's confident.
2. Review (and optionally comment on) the plan before approving.
3. Switch to bypass/auto-accept once you trust the plan so it can execute without babysitting.
4. For safe autonomy, edit permissions: allowlist commands you know are safe, denylist destructive ones (deletes/removes) — this gives bypass-like speed without the risk.
5. Enable bypass mode via settings if you don't see it ("dangerously skip permissions").

**Watch out for:** Running bypass on a big, unplanned task lets the agent do anything. Deployed/scheduled agents run unsupervised, so lock down permissions so they can't go off the rails.

**Original example to invent:** The source toggles modes live on a build. Invent a different task where plan-mode questioning prevents a costly wrong turn.
