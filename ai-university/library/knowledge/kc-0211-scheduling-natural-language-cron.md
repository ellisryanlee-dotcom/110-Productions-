---
id: kc-0211
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [cron, scheduling, automation, cadence, natural-language]
source_video: [bCljOfCH8Ms, gb5TlGw6Uks, saggDHHnmtQ]
source_channel: "@nateherk"
source_views: ["395K", "336K", "410K"]
confidence: high
---
# Scheduling recurring agent tasks in plain language

**What:** Modern agent harnesses let you create scheduled/recurring jobs by simply
describing them in natural language ("every morning at 6, do X"; "for the next 12
hours, check every 10 minutes"). The agent translates that into a cron job using
create/list/delete tools — you never write cron syntax.

**Why it matters:** This turns a reactive assistant into a proactive one that acts on
a cadence. It's the mechanism behind daily briefings, monitoring loops, follow-up
reminders, and periodic checks — all set up conversationally.

**The moves:**
1. Describe the task and its timing in plain language.
2. The agent creates the cron; ask it to list scheduled jobs to confirm.
3. Use recurring intervals for ongoing tasks and one-shot times for reminders.
4. For a scheduled run, keep the prompt self-contained — it fires in a fresh,
   isolated session with no prior conversation context.
5. Cancel by asking it to delete the job (or by closing the session, if session-bound).

**Watch out for:** A scheduled/isolated run does not inherit your current chat's
context, so the instruction must stand alone. Some scheduled sessions cannot spawn
further schedules recursively. Session-bound loops die when the session/terminal
closes; durable schedules survive restarts (see the routines-vs-loop card).

**Original example to invent:** Source scheduled a nightly repo backup and a
comment-monitoring loop. Writers should schedule different recurring jobs.
