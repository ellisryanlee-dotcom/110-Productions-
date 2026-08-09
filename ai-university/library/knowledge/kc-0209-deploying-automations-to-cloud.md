---
id: kc-0209
type: how-to
track: "Track 8 — Applied Automations"
topics: [deployment, modal, cron, webhooks, production]
source_video: [saggDHHnmtQ, bCljOfCH8Ms]
source_channel: "@nateherk"
source_views: ["410K", "395K"]
confidence: high
---
# Deploying an automation so it runs without you

**What:** Taking a workflow you built and tested locally and pushing it to cloud
infrastructure so it runs on a trigger — a schedule (cron) or an incoming webhook —
while your machine is off. One option shown is a usage-billed compute platform that
only charges when a job actually executes.

**Why it matters:** A workflow that only runs when you're watching isn't an
automation. Deployment turns it into a background system: a scheduled report every
Monday, or a webhook that fires whenever an external event arrives (e.g., a form
submission).

**The moves:**
1. Get the automation working locally first, then ask the agent to package it for
   the host.
2. Have it create the deployment file and schedule (cron) or webhook endpoint.
3. Move secrets into the host's secret store rather than committing them.
4. Do a manual test run in the host dashboard and read the logs.
5. When a scheduled run fails, copy the log/error back to the agent to diagnose.

**Watch out for:** You deploy the workflow + tools, not the interactive agent — so a
deployed workflow won't self-improve on its own; to fix it you edit locally and
re-push. Aggressive testing can blow through free API quotas (real runs on a normal
schedule usually won't). Webhook automations that depend on local browser cookies
won't work remotely — use an endpoint that accepts token/header auth.

**Original example to invent:** Source deployed a niche-analytics report on a weekly
cron and a lead-notification on a webhook. Writers should deploy a different pair of
automations to show the schedule-vs-webhook distinction.
