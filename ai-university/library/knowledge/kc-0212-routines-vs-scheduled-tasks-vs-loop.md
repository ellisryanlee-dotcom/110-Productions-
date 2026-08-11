---
id: kc-0212
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [routines, scheduled-tasks, loop, cadence, cloud-execution]
source_video: bCljOfCH8Ms
source_channel: "@nateherk"
source_views: "395K"
confidence: high
---
# Cloud routines vs. local scheduled tasks vs. loop

**What:** Three ways to run a coding agent on a cadence, with different tradeoffs.
Cloud routines run on the provider's web infrastructure off a synced GitHub repo, so
your machine can be off. Local scheduled tasks run on your machine and need the app
open. Loop is a session-bound recurring prompt that runs inside one open session.

**Why it matters:** Choosing wrong wastes resources or silently fails. The key
question is simply: do you need help *right now / for this project today* (loop), or
something *every day/week indefinitely* (scheduled task), and does it need to run
while your computer is off (cloud routine)?

**The moves / comparison:**
1. Cloud routine: machine can be off; reads a cloned repo (no local files); triggers
   by schedule, API call, or repo event; fully autonomous; ~1-hour minimum interval;
   secrets supplied as environment variables in the run environment.
2. Local scheduled task: machine must be on; has local file access; catches up on
   missed runs; long-lived; configurable permissions.
3. Loop: one session only; no local persistence; auto-expires after ~3 days; no
   catch-up; great for short monitoring sprints (e.g., check a deploy every hour).
4. All three keep the full agentic loop, unlike a bare deployed script.

**Watch out for:** Cloud routines can't touch local files or local browser cookies —
only what's in the repo or reachable by API. Because a routine clones your repo,
avoid pushing a huge context-heavy repo (it drains the same session limits and cloud
resources). Prompts must be one-shot and specific since no one is watching. There are
daily run caps per plan tier.

**Original example to invent:** Source used a routine for a scheduled community post
and a loop to watch a deploy. Writers should map different jobs onto each mechanism.
