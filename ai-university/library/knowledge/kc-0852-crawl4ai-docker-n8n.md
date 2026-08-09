---
id: kc-0852
type: how-to
track: "Track 7 — Data In: Scraping & Research"
topics: [crawl4ai, docker, n8n, api, async, no-code]
source_video: c5dw_jsGNBk
source_channel: "@ColeMedin"
source_views: "173K"
confidence: high
---
# Deploy Crawl4AI as an API with Docker and call it from n8n

**What:** No-code tools can't install a Python library, so to use Crawl4AI from n8n you
run its Docker container as an HTTP API endpoint and call it with HTTP request nodes. The
crawl endpoint is asynchronous: it returns a task ID, and you poll a status endpoint until
the task completes and returns the markdown.

**Why it matters:** This bridges a powerful Python scraper into a no-code workflow. The
async task model exists because a scrape can take longer than a normal HTTP request would
allow, so the API queues the job and lets you check on it.

**The moves:**
1. Host the container — locally, on the same box as n8n, or (recommended) on a separate
   cloud instance because the crawler is resource-heavy. A managed container platform can
   give you an SSL-protected URL automatically.
2. Protect the endpoint with a bearer-token environment variable; in n8n set a header-auth
   credential named `Authorization` with value `Bearer <token>`.
3. POST a URL to the crawl endpoint → receive a task ID.
4. Wait, then GET the task endpoint with that ID; branch on status: if not "completed",
   loop back and poll again after a short delay; when "completed", take the returned
   markdown.
5. Chunk and insert the markdown into your vector store.

**Watch out for:** Point the API URL correctly (a hosted URL vs `localhost:11235` for a
local container). A single crawl call takes one URL, not a comma-separated list. Size the
host for the headless browser's CPU/RAM.

**Original example to invent:** Source deployed on a cloud droplet and scraped docs.
Writers should use a different host/site and describe the poll loop generically.
