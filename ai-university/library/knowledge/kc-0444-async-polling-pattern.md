---
id: kc-0444
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [automation, polling, async, media-generation, api]
source_video: [ZeJXI2MAhj0, BcfjIBd49C8]
source_channel: "@nateherk"
source_views: ["387K", "350K"]
confidence: high
---
# The async polling pattern for long-running jobs

**What:** Many services (especially image and video generation) don't return a result immediately. You submit a request, get back a job ID, wait, then repeatedly check the job's status until it's complete, then fetch the result. This create-wait-poll-retrieve loop is polling.

**Why it matters:** Async jobs finish at unpredictable times; naively fetching too early returns nothing. Polling makes automations robust to variable completion times, and it's a concept that trips up many beginners.

**The moves:**
1. Submit the job and capture the returned request/job ID.
2. Wait an initial interval sized to the job's typical duration.
3. Check status using the ID; if not done, wait again and re-check in a loop.
4. When status is complete, fetch the result with the ID.
5. When processing several items at once, verify all of them are complete before moving on, looping back for any still pending.
6. Tune the interval — polling too frequently wastes calls; a coding agent can set this up and you can ask it to lengthen the gap between checks.

**Watch out for:** Set a sensible initial wait and back off between checks; too-tight polling hammers the API. With batches, don't advance until every item is confirmed done, or you'll act on incomplete results.

**Original example to invent:** Sources poll image/video generation jobs. Writers should invent a different long-running async job (e.g., a document-conversion service) and show the poll loop and interval choice.
