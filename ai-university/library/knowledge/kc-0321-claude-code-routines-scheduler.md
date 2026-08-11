---
id: kc-0321
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, routines, scheduling, cron, autonomous-agents]
source_video: 6MC1XqZSltw
source_channel: "@nateherk"
source_views: "584K"
confidence: high
---
# Running an autonomous agent on a schedule with Claude Code routines

**What:** Routines are Claude Code's built-in scheduler: recurring, cron-timed
triggers that each fire a defined prompt in a chosen environment. Chaining several
routines across the day (a pre-market research run, a market-open run, a midday
run, a close run, a weekly review) gives you a 24/7 autonomous agent driven
entirely by Claude Code — no external orchestrator needed.

**Why it matters:** Using the full Claude Code agentic loop on a schedule beats a
rigid automation for volatile or judgment-heavy work: each run reasons through the
task fresh instead of executing fixed steps. You manage everything from the
desktop app's routines/calendar view.

**The moves:**
1. Build the project first (instructions file, memory files, skills/commands).
2. In the desktop app, create a routine with a cron schedule and the prompt that
   run should execute.
3. Give different runs different jobs (research vs. execute vs. review) and
   restrict days to when they're needed (e.g., weekdays only).
4. Always "run now" a new routine several times to confirm it behaves before
   trusting the schedule.

**Watch out for:** Each run wakes essentially stateless (see the file-memory card).
Multiple daily runs consume subscription usage — watch it, but note this is far
cheaper than the equivalent via raw API calls.

**Original example to invent:** Source scheduled a trading agent. Writers must use
a non-financial recurring agent (e.g., a daily competitive-news digest).
