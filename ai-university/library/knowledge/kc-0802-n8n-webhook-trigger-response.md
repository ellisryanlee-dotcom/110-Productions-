---
id: kc-0802
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, webhook, http, post, respond-to-webhook]
source_video: kUpTUEwKnrk
source_channel: "@nateherk"
source_views: "217K"
confidence: high
---
# Receiving and responding to POST data with an n8n webhook

**What:** Using a webhook node as a workflow's entry point so an external system
can send it data, and using a dedicated response node so the workflow returns a
result to that same caller instead of replying instantly.

**Why it matters:** This is the fundamental request/response bridge that lets any
outside app (a web form, a voice agent, another service) trigger and receive
output from an automation.

**The moves:**
1. Add a webhook trigger and set its method to POST so it can accept a request
   body.
2. Copy the webhook URL and give it to whatever will call it.
3. Read incoming fields from the request body inside the workflow.
4. In the webhook node's response setting, switch from "respond immediately" to
   responding via a dedicated response node.
5. Place that response node at the end and have it return the item/field you want
   (e.g., an agent's output) back to the caller.

**Watch out for:** If the response mode is left on immediate, the caller gets a
reply before your logic finishes running. A production-active workflow uses a
different URL than the test one (see the test-vs-production pitfall).

**Original example to invent:** Source captured a "problem" field and returned an
"output" field. Writers should route a different field name and payload shape.
