---
id: kc-0010
type: tool
track: "Track 7 — Data In: Scraping & Research"
topics: [web-search, web-scraping, perplexity, firecrawl, apify, data-extraction]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Web research and scraping API tools: Perplexity, Firecrawl, Apify

**What:** Three distinct external services commonly wired into n8n agents to pull outside-the-model information. Perplexity is a search-focused API that answers a query with a sourced, synthesized response, useful for grounding an agent in current information. Firecrawl turns websites into structured data with separate scrape (one page to clean text/markdown), crawl, and prompt-driven extract (page(s) plus a described schema to structured JSON) modes, including a wildcard option to sweep an entire site rather than one URL. Apify is an actor marketplace where thousands of pre-built scraping scripts ("actors") can be parameterized and run against specific platforms (maps, social platforms, job boards) without writing scraper code.

**Why it matters:** These cover the three shapes "getting outside data" usually takes — ask-and-synthesize, structure-one-known-page, and run-a-purpose-built-scraper-at-scale — so recognizing which shape a research task needs determines which tool, and how much setup, it actually requires.

**The moves:**
1. For "answer this question using current information," call Perplexity with a system message controlling tone/precision and a user query; expose it to an agent as a tool with a placeholder the model fills in dynamically, so the agent decides what to search for based on the conversation.
2. For "get this one page as clean text," use Firecrawl's scrape endpoint; for "get this same structured data across many pages on a site," use its extract endpoint with a described output schema and a wildcard after the domain so the crawl isn't limited to a single page.
3. For a specific platform's data at scale (listings, posts, leads), search Apify's actor marketplace for a matching pre-built actor, configure its inputs like filters on a shopping site, then start it and separately pull its results — this two-step start/fetch shape is the same polling pattern used for any slow job.
4. Every one of these needs its own API key from the provider's dashboard, saved as a reusable credential; check whether authentication is a header (bearer token) or a query-string key, since the two are configured differently.
5. When a wildcard/wide extract call returns fewer results than expected, first check whether the target URL actually included the wildcard/crawl flag — omitting it silently limits the pull to a single page's worth of data.

**Watch out for:** Extract-style endpoints that use AI to interpret a schema are inherently less deterministic than a plain scrape — result counts can vary run to run, and the vendor may label the feature as beta. Apify's actor-based scraping costs scale with result count and run time, so testing with a small limit before scaling a scrape up is worth doing.

**Original example to invent:** Source scraped a public quotes website with Firecrawl and pulled local-business listings with an Apify actor. Writers should demonstrate the same scrape/extract/actor distinctions using a different target, such as a public event-listings page or a job board.
