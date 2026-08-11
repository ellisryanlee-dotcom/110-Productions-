---
id: kc-0849
type: how-to
track: "Track 7 — Data In: Scraping & Research"
topics: [web-scraping, sitemap, robots-txt, ethics, url-discovery]
source_video: JWfNLF_g_V0
source_video: c5dw_jsGNBk
source_channel: "@ColeMedin"
source_views: "450K"
confidence: high
---
# Discover every page of a site with sitemap.xml (and scrape ethically)

**What:** To scrape a whole website into a knowledge base, you first need every page URL.
Most sites expose a sitemap at `/sitemap.xml` that lists their pages, and this is a fast,
scalable way to enumerate URLs instead of hand-copying links. Before scraping, check the
site's `/robots.txt` and terms of use to confirm scraping is allowed.

**Why it matters:** Manually maintaining a URL list is brittle and doesn't scale as a
site grows. Sitemaps exist on most documentation sites and e-commerce stores (often for
SEO). Respecting robots.txt keeps scraping ethical and avoids blocked or prohibited pages.

**The moves:**
1. Append `/sitemap.xml` to the site's root and fetch the XML.
2. Parse the XML to extract the list of page URLs.
3. Check `/robots.txt` (and terms) — some sites disallow scraping or require contacting
   them first; honor those rules.
4. Feed the allowed URLs into your crawler/extraction pipeline.

**Watch out for:** Not every site has a sitemap, and some list URLs you shouldn't crawl.
robots.txt rules vary — some allow all agents, some disallow specific paths, some ask you
to request permission.

**Original example to invent:** Sources used a Python-framework docs sitemap. Writers
should enumerate a different site type and describe the ethics check generically.
