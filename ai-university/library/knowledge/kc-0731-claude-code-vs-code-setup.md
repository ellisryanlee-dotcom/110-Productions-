---
id: kc-0731
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, vs-code, claude-md, plan-mode, bypass-permissions, setup]
source_video: [B6k_vAjndMo, AO5aW01DKHo, q0TgUtj6vIs]
source_channel: "@nateherk"
source_views: "222K / 237K / 231K"
confidence: high
---
# Set up Claude Code in VS Code with a CLAUDE.md and the right modes

**What:** The base setup for driving Claude Code from a clean, non-intimidating
interface. Install VS Code, add the Claude Code extension, and sign in with a paid
Anthropic plan. Open a dedicated project folder; the left pane holds your files,
the right pane is where you talk to the agent. Create a `CLAUDE.md` file — the
project's system prompt describing the environment, goal, and rules — and have the
agent help write it. Use run modes deliberately: *plan mode* (agent only reads and
proposes a plan, no changes) before any build, and *bypass permissions* (agent
acts without asking) once you want it to execute; there are also ask-before-edits
and edit-automatically modes.

**Why it matters:** VS Code is a cleaner surface than the terminal for people who
don't want to "look at code." A CLAUDE.md gives the project durable structure so
the agent knows what it's for and how files fit together, and mode discipline
(plan first, then execute) keeps you in control while still letting the agent work
autonomously.

**The moves:**
1. Install VS Code, add the Claude Code extension, sign in (paid plan required).
2. Open a fresh project folder for the work.
3. Create `CLAUDE.md` and have the agent draft it (environment, goal, safety
   rules); answer its clarifying questions.
4. Enable bypass permissions in settings (allow-skip-permissions) if you want it.
5. Start tasks in plan mode; review the plan; switch to bypass to execute.

**Watch out for:** Bypass permissions still pauses when it lacks needed info
(e.g., instance URL/keys), which is a feature. You must explicitly enable
skip-permissions in settings first. Restart Claude Code after adding
servers/skills so they load.

**Original example to invent:** Write a short CLAUDE.md for a project with a
different purpose, in your own words, covering environment, goal, and one safety
rule.
