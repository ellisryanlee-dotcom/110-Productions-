---
id: kc-0310
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [async, polling, timeouts, n8n, reliability, http-request]
source_video: ldETapkr8Hg
source_channel: "@nateherk"
source_views: "898K"
confidence: high
---
# Handling slow async media jobs: waits, polling, and the timeout escape hatch

**What:** Media generation (images, video, renders) is slow and asynchronous: you
submit a job, get back an ID with a "pending" status, and must wait, then query a
status endpoint for the result. Two failure modes bite here — fixed waits that
guess wrong, and agent-level timeouts on long sub-flows.

**Why it matters:** Getting async orchestration wrong drops assets silently (you
move on before a job finishes) or crashes the calling agent. Reliable creative
pipelines depend on doing this correctly.

**The moves:**
1. Submit the job, capture the returned ID, then wait before checking status.
2. Prefer true polling over a single fixed wait: check status, and if not done,
   loop back, wait, and check again until complete — so you never advance with
   missing outputs.
3. For sub-flows whose total time exceeds the calling agent's tolerance, don't try
   to return the asset up through the agent. Instead let the tool-workflow itself
   deliver the final result to the user and log it, accepting that the agent node
   may time out.
4. When building HTTP-request bodies, replace double quotes with single quotes
   (via a replace function) so the JSON payload doesn't break.

**Watch out for:** A fixed 90-second wait can pass through a job that isn't done,
losing one of several parallel assets. The agent-level timeout on long renders is
a known limitation — design the delivery to happen at the tool level.

**Original example to invent:** Source hit this on a multi-clip video render.
Writers should illustrate with a different long-running job (e.g., a batch PDF
render).
