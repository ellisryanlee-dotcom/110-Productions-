---
id: kc-0851
type: how-to
track: "Track 7 — Data In: Scraping & Research"
topics: [crawl4ai, parallelism, performance, scraping, batching]
source_video: JWfNLF_g_V0
source_channel: "@ColeMedin"
source_views: "450K"
confidence: high
---
# Crawl many pages efficiently: shared browser session + parallel batches

**What:** When scraping a whole site, don't spin up a fresh browser per URL. Reuse a
single browser across pages, and go further by opening multiple concurrent sessions to
fetch several pages at once in batches, then combine the results.

**Why it matters:** A naive loop that launches a new browser for each page is slow and
wasteful. Session reuse cuts overhead; parallel batches multiply throughput. This matters
a lot when a knowledge base has hundreds or thousands of pages.

**The moves:**
1. Sequential-but-efficient: crawl all URLs using one shared browser session rather than
   restarting the browser each time.
2. Parallel: create several concurrent sessions under one browser and process URLs in
   fixed-size batches (e.g., N pages at a time), then move to the next batch.
3. Collect each page's markdown into one combined list for downstream chunking/embedding.

**Watch out for:** Higher batch sizes use more CPU and memory (a browser is running) — set
the batch size to what your host can handle. The framework provides these patterns; report
per-page success/length rather than dumping full content to the console.

**Original example to invent:** Source measured peak RAM while batching a docs site.
Writers should describe the parallelism abstractly on a different corpus.
