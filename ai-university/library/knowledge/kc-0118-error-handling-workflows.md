---
id: kc-0118
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [error-handling, monitoring, error-trigger, logging, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Error-logging workflows: catch and get notified of failures

**What:** A single dedicated error workflow can capture failures from all your active workflows. It starts with an error trigger and, when any linked workflow fails, receives details (execution ID, workflow name/URL, the node that failed, the error message), then logs them to a sheet and/or sends a notification.

**Why it matters:** Production automations fail silently unless you watch them. One reusable error handler gives you a running log and instant alerts, so you learn about breakages immediately with enough context to debug.

**The moves:**
1. Create a new workflow whose first node is the error trigger (no config needed).
2. In each active workflow's settings, set its "error workflow" to that handler — this links them.
3. In the handler, append a row to a log (timestamp via a now expression, plus workflow name, URL, failed node, message).
4. Add a notification node (e.g., Slack/email) with a readable summary and a link to the failed execution.
5. Trigger a deliberate failure to confirm the row and alert appear.

**Watch out for:** A workflow going red (execution stops) is different from a tool quietly failing while nodes stay green — only the former fires the error trigger, so green is not proof of success. The handler itself should stay simple (just mapping variables) so it doesn't error too.

**Original example to invent:** The source breaks an assistant by removing its model/memory to trigger logs. Demonstrate the handler catching a different failure (e.g., an expired credential) and routing the alert to your own channel.
