---
id: kc-0120
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [webhooks, triggers, respond-to-webhook, integrations, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Webhooks: letting other apps trigger your workflow

**What:** A webhook is the flip side of an API call — instead of your workflow sending a request out, it sits and listens at a URL for another system to send data in. It always appears as a trigger. You can then process that data and send a reply back to the caller with a respond-to-webhook step.

**Why it matters:** Webhooks are how external front ends and services (a form, a voice platform, a custom app) hand data to your automation and receive results. Conceptually you become the API server rather than the client.

**The moves:**
1. Add a webhook trigger; note its URL and set the method (usually POST, to match the sender).
2. To develop, click listen-for-test-event and send a sample request (a testing tool or the external app) — an inactive workflow won't catch data otherwise.
3. Read the incoming body (key/value fields) and route it into your logic.
4. To return a result, set the webhook's response mode to "respond to webhook node," then place that node after your processing.
5. When going live, activate the workflow and switch the sender to the production URL (the test URL only works while manually listening).

**Watch out for:** A 404 "webhook not registered" means it isn't listening — activate or hit listen-for-test. Test vs. production URLs are distinct; mixing them means nothing arrives. Sender and receiver methods must match.

**Original example to invent:** The source catches requests from a testing tool and from external apps. Show a webhook receiving data from a different source (e.g., a form service) and returning a processed reply.
