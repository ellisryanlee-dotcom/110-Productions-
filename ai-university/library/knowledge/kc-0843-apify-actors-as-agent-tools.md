---
id: kc-0843
type: how-to
track: "Track 7 — Data In: Scraping & Research"
topics: [scraping, apify, actors, social-media, agent-tools, n8n]
source_video: jBanaNBY-sM
source_channel: "@nateherk"
source_views: "197K"
confidence: high
---
# Scraping social platforms with Apify actors as agent tools

**What:** Wiring pre-built scrapers ("actors") from a scraping marketplace into an agent so
it can pull posts/videos from multiple social platforms, with the agent supplying the
search term and how many results to return.

**Why it matters:** It gives an agent a research capability across platforms without writing
custom scrapers — pick an actor per platform, feed it a query, and get structured results
(URLs, creators, captions, stats) back for analysis or compiling.

**The moves:**
1. Choose the actor for each platform you want to scrape from the marketplace.
2. Create an API token and add it once as a predefined credential type in the automation
   tool.
3. Configure a request per actor; let the agent fill in the search term and result count.
4. Run the platform scrapes (they can run in parallel) and collect the structured output.
5. Swap actors freely to change platforms or scrape targets.

**Watch out for:** Different actors accept inputs slightly differently, so each request is
configured per actor even though the idea (query + count) is the same. Scraping incurs
per-run cost on the marketplace — factor it in.

**Original example to invent:** Source scraped top-performing videos about a niche across
three platforms. Writers should pick a different topic and platform mix.
