---
id: kc-0106
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [polling, async, wait-loops, apis, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Polling: waiting for long-running API jobs to finish

**What:** Many APIs (media generation, large scrapes) don't return results immediately — they accept your request, hand back a job ID, and finish later. Polling is the pattern of periodically checking that job's status until it reports complete, then continuing.

**Why it matters:** If you try to grab results the instant you start a slow job, you get an empty response. Polling makes a workflow robust against variable completion times without hard-coding a single guess at how long to wait.

**The moves:**
1. Fire the start request; capture the returned job ID.
2. Add a status-check request that sends that ID back.
3. Add a conditional: is the job still running / is the result empty?
4. If not done, wait a fixed interval, then loop back to the status check.
5. When status flips to complete/succeeded, branch out and use the result.
6. Tune the initial wait to the job's typical duration (learn it from past runs) so you don't check dozens of times unnecessarily.

**Watch out for:** The data field can change shape between states (an empty array while pending, an object when done) — a filter written for one type errors on the other, so handle both or use an error-output branch. Match your completion check exactly to the status string the API actually returns.

**Original example to invent:** The source polls a video-generation job every few seconds. Demonstrate the same wait-check-loop against a different async API (e.g., a bulk data export) so the timing and status strings differ.
