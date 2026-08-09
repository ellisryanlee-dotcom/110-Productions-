---
id: kc-0109
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [scheduled-tasks, loop-feature, claude-code, automation-scheduling, cron]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Native scheduled tasks vs /loop: running the agent itself on a timer

**What:** Separate from deploying code to an external host, Claude Code itself offers two native ways to run the agent (not just its code) on a timer. Scheduled tasks are persistent, long-lived, and stored by the desktop app; they survive being missed (catching up on recent missed runs when the app reopens) and can run daily/weekly indefinitely, but require the desktop app to be open. The /loop feature is lighter weight, created from natural language or a slash command inside any existing session, runs an interval or one-time reminder within that same session (so it keeps conversational context between firings), but automatically expires after three days, has no catch-up if the session/terminal is closed, and dies with the session.

**Why it matters:** These solve a different problem than external deployment — "run part of the actual agent regularly, using everything it knows about this project" rather than "run a fixed script." Choosing between them (or the external-deployment approach) comes down to how long the recurrence needs to last and whether shared memory between runs matters.

**The moves:**
1. Use /loop for short-lived, session-scoped recurring checks (e.g., "check on this deploy every 20 minutes") or one-time future reminders — invoke it with natural language or the explicit slash command.
2. Use native scheduled tasks (created via the schedule interface or by typing /schedule in an existing session) for anything that needs to run daily, weekly, or indefinitely.
3. Because each scheduled-task run is a stateless fresh session with no memory of prior runs, design a small persistent log file the task reads at the start and overwrites at the end, so consecutive runs can hand off context to each other.
4. Immediately after creating a new scheduled task, trigger it manually once to confirm it can complete without stopping to ask for a permission or missing credential — an unattended run that pauses for approval effectively fails silently.
5. Pair either mechanism with a notification hook (a sound or a message sent to a chat tool) so completion is noticed without having to check back manually.

**Watch out for:** Both mechanisms require the relevant app/session to stay open/running — a closed laptop or closed terminal kills a /loop and (for scheduled tasks specifically) means the schedule won't fire, though scheduled tasks will catch up once reopened whereas /loop will not. Because loop tasks aren't deterministic scripts, avoid using them for anything that must never skip a step; use the external-deployment approach for that instead.

**Original example to invent:** The source used a "morning planning" scheduled task and a "check the deploy every N minutes" loop as its examples. Writers should invent a different recurring use (e.g., a scheduled task that checks and summarizes new customer feedback each morning).
