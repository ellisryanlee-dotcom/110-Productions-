---
id: kc-1012
type: tool
track: "Track 7 — Data In: Scraping & Research"
topics: [web-search, searxng, local-ai, agent-tools, privacy]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: high
---
# SearXNG: private, self-hosted web search as an agent tool

**What:** SearXNG is a free, open-source metasearch engine you host yourself, giving a local agent the ability to search the web without relying on a paid API or leaking queries to a third party. It exposes a search endpoint your agent calls, returning a list of result URLs.

**Why it matters:** Local models (and locally hosted agents) don't come with web search built in the way some cloud assistants do. SearXNG fills that gap while keeping the whole stack private — useful when the point of going local is to avoid sending data outside your own infrastructure.

**The moves:**
1. Run SearXNG (it's included in self-hosted local-AI stacks) and note its service name/port.
2. Give the agent a web-search tool whose description tells it what it returns.
3. On a query, the tool hits the SearXNG search endpoint and gets back candidate result URLs.
4. Narrow to one (or a few) results, fetch the page over HTTP, and strip it to the body content to drop headers/footers/junk.
5. Return that cleaned content to the agent so it can answer from real, current information.

**Watch out for:** Search alone returns links, not answers — you still fetch and clean the target page to give the model usable content. Limiting how many pages you pull keeps the prompt small, which matters on weaker local models. Reference it by its container service name when calling from within the same Docker network.

**Original example to invent:** Wire a local agent to answer a "what's the latest on X" question by searching, fetching one result, and summarizing it — using a different query than the source.
