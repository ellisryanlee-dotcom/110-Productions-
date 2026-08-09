---
id: kc-0103
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [plan-mode, permission-modes, prompting, claude-code, clarifying-questions]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Plan-mode-first prompting across Claude Code's permission modes

**What:** Claude Code has four permission levels — plan mode (reads and researches only, changes nothing), a manual-approval editing mode, an auto-accept editing mode, and a full-autonomy mode that executes without asking. The recommended default workflow for anything non-trivial is to describe the goal in plan mode, let the agent ask clarifying questions and propose an approach, review and adjust that plan, and only then switch to the autonomous mode to let it execute unattended.

**Why it matters:** Output quality tracks directly with how precisely the goal, constraints, and success criteria were communicated going in; an ambiguous one-line request produces a generic result. Plan mode is the mechanism that surfaces the gaps in a request before any work is done, which avoids paying for several rounds of rework after the fact.

**The moves:**
1. State the goal, plus any known constraints, in plan mode rather than in an execution mode.
2. Explicitly invite the agent to ask clarifying questions until it's highly confident it understands the request — this can be stated directly in the prompt.
3. Read the proposed plan before accepting; add or correct details (attach reference assets, name a different tool/library, adjust scope) before execution begins.
4. Switch to an autonomous execution mode only after the plan looks right, so the agent doesn't stop and ask permission on every minor step.
5. For low-stakes, small edits, skip plan mode and prompt directly — the overhead isn't worth it for trivial requests.

**Watch out for:** Full-autonomy mode will run destructive or costly commands without asking, so it should be paired with supervision or with an explicit allow/deny list rather than left unattended by default. A vague prompt in autonomous mode wastes the most work, since there's no checkpoint to catch a misunderstanding early.

**Original example to invent:** The source used this pattern to plan a newsletter generator and a competitor-research tool. Writers should invent a different first request (e.g., planning a meeting-notes summarizer) and show the plan-mode Q&A round before execution.
