---
id: kc-1133
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [hooks, lifecycle, deterministic-automation, settings, matchers]
source_video: amEUIuBKwvg
source_channel: "@ColeMedin"
source_views: "149K"
confidence: high
---
# Claude Code hooks: deterministic lifecycle automation

**What:** Hooks let you run your own command at defined points in the agent's life cycle — before a tool runs, after a tool runs, after a subagent finishes, at session start/end, and so on. You define them in JSON in the settings file, optionally with a matcher to filter which events trigger them, and point each at a script.

**Why it matters:** Hooks add deterministic control on top of a probabilistic agent — guaranteed actions (logging, formatting, notifications, guardrail checks, memory capture) that fire regardless of what the model decides. They're the reliable backbone around the model's reasoning.

**The moves:**
1. Create a hooks JSON and reference it from settings.
2. Choose the lifecycle event and (optionally) a matcher to scope it.
3. Point the hook at a script; use hook parameters to log details like which tool ran.
4. Refresh the session so new hooks load.

**Watch out for:** Hooks need a session refresh to take effect. Keep scripts fast and side-effect-safe since they can fire on every matching event. (Not every assistant supports hooks yet.)

**Original example to invent:** Source logs a timestamp on each edit. Invent a different lifecycle hook (e.g., auto-run a formatter after writes) with your own script.
