---
id: kc-0455
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, batching, fan-out, data-manipulation, arrays]
source_video: BcfjIBd49C8
source_channel: "@nateherk"
source_views: "350K"
confidence: high
---
# Fan out a batch into individual items for parallel processing

**What:** To process several sub-items from one record (e.g., four subjects in one row), you first gather them into an array, then split them back out into individual items so each flows independently through the rest of the workflow — producing, say, four images, four clips, and four audio files.

**Why it matters:** Many services and steps operate per item; splitting a batch into discrete items is what lets the same downstream chain run once per sub-item without custom looping logic.

**The moves:**
1. Collect the sub-items from the source record into a single array.
2. Split that array into individual items.
3. Let each item run through the downstream generation steps independently.
4. Later, aggregate the per-item results back together when a step needs them combined.

**Watch out for:** Some data manipulation is needed to get clean individual items; malformed splitting causes downstream steps to receive the wrong shape of data. Remember to re-aggregate before any step that needs all items at once.

**Original example to invent:** Source splits four brands per category. Writers should invent a different record that fans out into N items for per-item processing.
