---
id: kc-0108
type: tool
track: "Track 7 — Data In: Scraping & Research"
topics: [scraping, firecrawl, apify, lead-generation, extract]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Scraping the web: Firecrawl and Apify

**What:** Two complementary scraping services. Firecrawl turns web pages into LLM-ready data with four modes: scrape (one page to clean markdown), crawl (follow a site), map (list URLs), and extract (pull structured fields from one page or a whole domain via a wildcard). Apify is a marketplace of thousands of pre-built "actors" — ready-made scrapers for specific sources (maps listings, social platforms, job boards, lead databases).

**Why it matters:** Raw pages come back as messy HTML; these tools return clean, structured output you can feed straight into an agent or database. Extraction with a schema means you get exactly the fields you asked for (e.g., name + author, or business name + phone + website) across many pages at once.

**The moves:**
1. For Firecrawl extract: give a URL (append a wildcard to crawl the whole domain), a natural-language prompt, and a JSON schema of fields to pull.
2. Import the endpoint's cURL, save the key as a header credential, and (for the async extract) poll the returned ID until data is ready.
3. For Apify: configure an actor in its console (natural-language filters), then use a two-step call — start the actor (POST), then fetch the last run's dataset items.
4. Add a wait or polling step between start and fetch, sized to the actor's typical runtime.
5. Loop a sheet of many URLs through extraction to research lists at scale.

**Watch out for:** Extract is beta-ish and can return inconsistent counts; a wildcard vs. a single URL changes results dramatically. Apify's synchronous run can come back empty — the reliable pattern is start-then-fetch with a wait.

**Original example to invent:** The source scrapes a demo quotes site and pulls maps leads. Choose a different structured source (e.g., a directory of clinics) and define your own extraction schema.
