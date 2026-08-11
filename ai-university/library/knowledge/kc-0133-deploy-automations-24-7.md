---
id: kc-0133
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [deployment, modal, trigger-dev, scheduled-tasks, loop, cron]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Running automations 24/7: cloud deploy vs. native scheduling

**What:** To make an agent-built workflow run unattended, you deploy its code and tools (not the agent) to cloud infrastructure, or use the tool's own scheduling. Cloud options: Modal (pay-per-run, scheduled or webhook-triggered) and trigger.dev (scheduled runs, retries, queuing, orchestration, GitHub sync). Native options inside the coding tool: scheduled tasks (cron-based, currently desktop-app, each run a fresh stateless session) and loop (an in-session recurring prompt, up to a few days, plus one-time reminders).

**Why it matters:** It's how a workflow becomes a standing employee. Understanding what's deployed (deterministic code, no self-healing) vs. a native scheduled agent (a full agent run that can self-heal) helps you choose control vs. autonomy.

**The moves:**
1. Cloud deploy: connect the project to GitHub, sync GitHub to Modal/trigger.dev, and set a cron or webhook trigger. Store secrets as platform secrets/env vars, not in the repo.
2. Run a security review before deploying anything public (no exposed keys/webhooks).
3. Test in a dev environment, then push to production (GitHub push auto-deploys).
4. Native scheduled task: create it in the desktop app with a prompt, model, mode, and schedule; run it once manually to confirm it doesn't stall on permissions.
5. Loop: say "every N minutes, do X" in one session for short-lived monitoring or reminders.

**Watch out for:** Deployed code can't self-heal — edit and re-deploy to improve it. Scheduled tasks need the machine/app on and won't run if it can't get permissions; loops expire after a few days and vanish if the session closes.

**Original example to invent:** The source deploys a newsletter on a schedule and a lead webhook. Invent a different deployed automation and note whether a cron or webhook trigger fits.
