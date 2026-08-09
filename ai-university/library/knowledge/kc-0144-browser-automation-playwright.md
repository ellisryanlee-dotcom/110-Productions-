---
id: kc-0144
type: how-to
track: "Track 7 — Data In: Scraping & Research"
topics: [browser-automation, playwright, qa-testing, scraping, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Browser automation with a CLI (Playwright)

**What:** Giving an agentic coding tool control of a real browser (via Playwright CLI) lets it click, fill forms, screenshot, and navigate — so it can QA a web app, scrape data from sites without APIs, and even operate pages you're logged into. It writes browser scripts that improve each run and can operate headed (visible) or headless.

**Why it matters:** It automates things that otherwise need a human or a missing API: end-to-end QA that finds and fixes bugs, lead collection from search results, and repetitive actions on platforms with no automation support. Pairing a browser script with a skill makes the process repeatable.

**The moves:**
1. In plan mode, ask the agent to install the browser CLI and confirm it can open and screenshot a page.
2. QA loop: have it spin up a server, drive the app in a headed browser, note bugs from screenshots, fix the site, and re-run until it passes.
3. Scraping: ask it to search and collect fields (e.g., business phone numbers); let it self-correct when a source blocks automation (e.g., switch search engines).
4. Logged-in sessions: use a persistent browser profile — log in once manually, then it reuses the session.
5. Turn a working script into a skill so you can invoke the whole process later.

**Watch out for:** First runs are rough — expect several iterations; steer it. Prefer Playwright CLI over a browser-tools MCP when tokens matter (the MCP's many tool descriptions bloat context). Respect that logged-in automation on strict platforms is fragile and needs feedback to stabilize.

**Original example to invent:** The source QAs a multi-page form, scrapes dentists, and likes community posts. Invent a different browser task (e.g., checking stock on a retailer) using the same install-drive-iterate-skill flow.
