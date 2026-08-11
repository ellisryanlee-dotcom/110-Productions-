---
id: kc-1008
type: how-to
track: "Track 7 — Data In: Scraping & Research"
topics: [web-scraping, sitemap, robots-txt, ethics, url-discovery]
source_video: [JWfNLF_g_V0, c5dw_jsGNBk]
source_channel: "@ColeMedin"
source_views: "450K"
confidence: high
---
# Discovering every page of a site (sitemap.xml) and scraping it ethically (robots.txt)

**What:** Two standard URLs let you crawl a whole site cleanly. Appending `/sitemap.xml` to most domains returns an XML listing of every page, so you can pull the full set of URLs programmatically instead of copy-pasting them. Appending `/robots.txt` returns the site's rules for what crawlers may access.

**Why it matters:** Manually maintaining a list of pages doesn't scale and goes stale as pages are added; a sitemap gives you the current structure automatically. And checking robots.txt first is how you scrape ethically — some sites allow crawling broadly (they want the reach), others disallow it or ask you to contact them, and honoring that keeps you out of trouble.

**The moves:**
1. Fetch `/sitemap.xml` for the target site and parse the XML to extract all page URLs.
2. Before crawling, fetch `/robots.txt` and read which paths are allowed or disallowed; respect it (also check terms of use).
3. Feed the allowed URLs into your crawler.
4. Re-fetch the sitemap on future runs so newly added pages are picked up without manual edits.

**Watch out for:** Most documentation sites and e-commerce stores (Shopify, WordPress) expose a sitemap because they *want* to be crawled for SEO, but not all sites do. Some robots.txt files disallow scraping entirely or require you to ask permission first — treat those as hard rules, not suggestions.

**Original example to invent:** Walk through pulling a sitemap and reading a robots.txt on a site that clearly permits crawling, and show a contrasting site that restricts it — different examples than the source's.
