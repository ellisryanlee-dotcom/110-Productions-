---
id: kc-1010
type: how-to
track: "Track 7 — Data In: Scraping & Research"
topics: [crawl4ai, docker, api, async-jobs, polling, n8n]
source_video: c5dw_jsGNBk
source_channel: "@ColeMedin"
source_views: "173K"
confidence: high
---
# Running Crawl4AI as a Docker API and polling its async task queue

**What:** To use Crawl4AI from a no-code tool like n8n, you can't pip-install a library — you run it as a Docker container that exposes an HTTP API, then call that API from your workflow. The crawl endpoint doesn't return the page immediately; it returns a task id, and you poll a status endpoint until the task completes and the markdown is ready.

**Why it matters:** No-code platforms have no place to import a Python package, so an API endpoint is the bridge. And because scraping a page can take longer than a normal request, the service queues the work and hands back a task id — a standard async pattern you must handle rather than expecting an instant result.

**The moves:**
1. Deploy the Crawl4AI Docker image — locally, alongside your n8n instance, or on a cloud host (an app-platform or droplet) that gives an HTTPS endpoint.
2. Protect the endpoint with a bearer token set via an environment variable.
3. From your workflow, POST a URL to the crawl endpoint; capture the returned task id.
4. Wait a few seconds, then GET the task-status endpoint with that id.
5. If the status isn't "completed," loop back, wait, and poll again; once complete, take the returned markdown and insert it into your knowledge base.

**Watch out for:** The container runs a full headless browser and is a CPU/RAM hog — host it separately from n8n so a heavy crawl doesn't slow your automations, and give it enough RAM (multiple GB for heavy crawling). When self-hosting alongside n8n, reference it by localhost and the container's port instead of a public URL. The crawl payload takes one URL at a time in practice.

**Original example to invent:** Build a workflow that submits a URL, polls until done, and stores the result, and show the status flipping from processing to completed — using a different crawl target.
