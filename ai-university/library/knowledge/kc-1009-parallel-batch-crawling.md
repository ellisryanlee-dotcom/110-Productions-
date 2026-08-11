---
id: kc-1009
type: how-to
track: "Track 7 — Data In: Scraping & Research"
topics: [web-scraping, crawl4ai, parallelism, batching, performance]
source_video: JWfNLF_g_V0
source_channel: "@ColeMedin"
source_views: "450K"
confidence: high
---
# Crawling many pages efficiently: shared sessions and parallel batches

**What:** Crawling a list of URLs one at a time in a loop is slow because each page spins up a fresh browser. Two optimizations fix this: reuse a single browser session across all pages (sequential but far lighter), and go further by running several pages at once in parallel batches while still using one browser.

**Why it matters:** For a large site — hundreds or thousands of pages — sequential, fresh-browser crawling becomes a serious drag. Reusing the browser and batching cuts time dramatically while staying memory-efficient, which matters because a headless browser is resource-hungry.

**The moves:**
1. Collect all target URLs (e.g., from the sitemap).
2. Crawl with one persistent browser session rather than a new browser per URL.
3. For parallelism, create multiple sessions on that one browser and process a batch of URLs simultaneously, then move to the next batch.
4. Choose a batch size (the source used ~10 at a time) sized to your machine's RAM and CPU.
5. Combine the per-page results into one list for downstream ingestion.

**Watch out for:** Bigger batches use more memory; even so the framework stays lean (the source observed peak usage well under ~120 MB while crawling 10 pages at once). Match batch size to hardware and, if hosting the crawler as a shared service, to how much load it can take.

**Original example to invent:** Time a small sequential crawl against a parallel batched crawl over the same page set and report the speedup and peak memory — on your own target site.
