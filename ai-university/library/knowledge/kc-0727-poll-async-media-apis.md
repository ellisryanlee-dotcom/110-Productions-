---
id: kc-0727
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, async-apis, polling, task-id, http, media-generation]
source_video: Gc03J27xmBc
source_channel: "@nateherk"
source_views: "227K"
confidence: high
---
# Poll async media-generation APIs (submit → task ID → wait → GET)

**What:** The pattern for calling generation APIs that don't return the result
immediately. You POST the job and get back a task ID (one per item) with a
"pending" status. You wait a fixed buffer, then send a GET to the same endpoint
with the task ID appended to retrieve the finished asset's URL. Each task ID maps
to one unique output, so you can track which result belongs to which input.

**Why it matters:** Image, video, and audio models take seconds to minutes, so a
single synchronous call won't have the result. Submit-then-poll is the reliable
shape for chaining these services inside a workflow.

**The moves:**
1. POST the generation request; store the returned task ID(s).
2. Add a wait node sized to the service's typical processing time (with margin).
3. GET the same endpoint with the task ID appended (mind the slash, no trailing
   space) to fetch the completed asset URL.
4. Use the task ID to associate each output with its originating input.

**Watch out for:** Set the wait long enough to be safe (undershooting returns
"pending"); each service has different render times and costs; construct the GET
URL carefully (correct slash, no stray spaces). Rate limits can slow a busy
provider — a faster provider may be worth switching to.

**Original example to invent:** Describe the submit/poll steps for a different
async API, including how you'd size the wait and build the status-check URL.
