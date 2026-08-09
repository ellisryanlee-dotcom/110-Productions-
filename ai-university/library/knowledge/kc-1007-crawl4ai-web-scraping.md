---
id: kc-1007
type: tool
track: "Track 7 — Data In: Scraping & Research"
topics: [web-scraping, crawl4ai, markdown, rag, playwright]
source_video: [JWfNLF_g_V0, c5dw_jsGNBk]
source_channel: "@ColeMedin"
source_views: "450K"
confidence: high
---
# Crawl4AI: turning web pages into clean markdown for LLMs

**What:** Crawl4AI is a free, open-source web-crawling framework built to scrape sites and output them in a format a language model can actually use. Instead of the raw, tag-heavy HTML you'd normally get, it returns clean markdown — stripping scripts, redundant nav, and irrelevant content — so pages are ready to drop into a knowledge base or a prompt.

**Why it matters:** Raw HTML is a mess for both humans and models; pasting it into a prompt invites hallucination. A general rule of thumb: if it's hard for a human to parse, it's hard for the model too. Crawl4AI is fast, memory-efficient, and handles the hard parts (headless browser, proxies, session management) that you can't easily reproduce just by pulling HTML with an HTTP request.

**The moves:**
1. Install the Python package and run its setup, which installs a headless browser engine under the hood.
2. Point it at a URL and run a crawl; it returns markdown, links, and images for the page.
3. Feed that markdown into your RAG pipeline (chunk, embed, store).
4. To scale beyond one page, collect many URLs (see sitemap approach) and crawl them together.
5. If you need it available to no-code tools, run it as a Docker container exposing an API endpoint instead of importing the library.

**Watch out for:** It runs a full browser, so it's CPU- and RAM-hungry; size hardware and batch sizes accordingly. It's the right tool for website data specifically — for local files (PDF, Word, audio) reach for a document parser instead. Scrape ethically (check robots.txt / terms).

**Original example to invent:** Crawl a documentation site you have the right to scrape, show the ugly HTML vs. the clean markdown, and note the memory footprint — on a different site than the source used.
