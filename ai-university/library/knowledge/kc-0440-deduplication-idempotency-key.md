---
id: kc-0440
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [automation, deduplication, idempotency, state]
source_video: ZeJXI2MAhj0
source_channel: "@nateherk"
source_views: "387K"
confidence: high
---
# Deduplicate work with an idempotency key

**What:** To stop a recurring automation from processing the same item twice, tag each item with a stable unique identifier (an idempotency key). When a run encounters an item whose key was already handled, it skips it instead of reprocessing.

**Why it matters:** Recurring jobs (checking a feed on a schedule) will re-encounter the same items; without dedup they redo work, waste resources, and produce duplicate outputs. An idempotency key makes reruns safe.

**The moves:**
1. Pick a stable unique identifier for each item (e.g., a content ID).
2. Use it as the idempotency key when processing.
3. On each run, if an incoming item's key was already processed, skip it.
4. In a hand-built version you'd replicate this with a stored list of processed IDs and a filter before the work step; an agentic build can handle the same logic for you.

**Watch out for:** The key must be genuinely stable and unique per item; a shifting or non-unique key breaks dedup. Building this by hand means also managing the storage that records processed keys.

**Original example to invent:** Source dedups YouTube videos by video ID on a scheduled check. Writers should invent a different recurring source and choose an appropriate stable key.
