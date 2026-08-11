---
id: kc-0107
type: tool
track: "Track 7 — Data In: Scraping & Research"
topics: [web-search, tavily, perplexity, real-time-data, agents]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Giving agents real-time web search (Tavily, Perplexity)

**What:** A language model only knows its training data, which is stale. To answer with current information you connect a web-search API as a tool. Two common choices: Tavily (a search API built for LLMs, with a free monthly search quota) and Perplexity (a search-and-answer service whose API returns synthesized answers with sources).

**Why it matters:** Search tools are among the most-used agent capabilities — they let an agent research a topic, gather facts, and cite sources before writing. Without one, an agent can't tell you anything that happened after its training cutoff.

**The moves:**
1. Create an account and get an API key (both offer free tiers to start).
2. Add the search as an HTTP-request tool (import the cURL from the docs).
3. Save the key as a reusable authorization header credential.
4. Make the query dynamic with a model-filled placeholder so the agent chooses what to search per request.
5. For Perplexity, pass a system message (how to answer) plus the dynamic user query, and pick a search-capable model; optional levers include result count and time range.
6. Inspect the tool log to see the exact query the agent generated.

**Watch out for:** Free quotas are limited (plan around monthly caps). Results include source URLs — keep them so downstream steps can cite. Over-broad queries waste calls; guide the agent on how to phrase searches.

**Original example to invent:** The source searches celebrity and product topics. Pick a different domain (e.g., local event listings) and show an agent formulating its own query and returning cited results.
