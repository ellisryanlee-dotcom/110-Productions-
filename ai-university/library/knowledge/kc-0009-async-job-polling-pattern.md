---
id: kc-0009
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [async-jobs, polling, error-handling, rate-limits, api-integration]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Polling pattern for slow or asynchronous external jobs

**What:** A technique for calling external services that don't return their result synchronously (long-running scrapes, image/video generation, batch extraction jobs): fire the "start job" request, which returns only a job ID; then enter a check-loop that requests the job's status by ID, and if the status is still pending/running, wait a fixed number of seconds and check again, repeating until the status flips to done — only then continue the workflow with the real result.

**Why it matters:** Calling a synchronous-style request against a job that actually takes seconds to minutes to complete returns nothing useful; the polling loop is what makes those slow jobs usable inside an otherwise fast, linear automation, and it generalizes across unrelated services (scraping, media generation, batch data extraction) because the shape of the problem is identical.

**The moves:**
1. Send the "start" request and capture the returned job/task ID from the response — don't try to read a final result from this call.
2. Add a status-check request that takes that ID and returns a status field (pending/running/succeeded/failed) plus the real result only once finished.
3. Add a conditional check on the status field, and on the "still running" branch, add a wait step followed by a loop back into the status-check request; tune the wait duration using the service's typical/observed completion time so the loop doesn't hammer the API needlessly.
4. Handle the shape-change between "not ready yet" and "ready" responses explicitly — a still-pending response is often an empty list while a completed response is a populated object, so a filter built for one shape can error against the other; route that error down a fallback branch instead of letting it stop the workflow.
5. Only proceed to the next real step (send, publish, update a record) once the loop's exit condition is met, so nothing downstream ever operates on a half-finished job result.

**Watch out for:** A wait time set too short just means more loop iterations, not incorrect behavior, but a status check built to only recognize one specific "done" value (e.g., checking for "not running" instead of explicitly "succeeded") can prematurely continue on a job that actually failed — make the success check specific, not just the inverse of the pending check.

**Original example to invent:** Source demonstrated this exact loop against a content-extraction job, a scraping-actor job, and a video-generation job. Writers should build the same start/poll/continue pattern around a different slow external process, such as a bulk-export job or a long-running transcription job.
