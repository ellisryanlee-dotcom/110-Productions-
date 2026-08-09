---
id: kc-0115
type: tool
track: "Track 4 — Claude Code & Dev Agents"
topics: [browser-automation, playwright, qa-testing, web-scraping, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Browser automation with Playwright CLI: self-QA, scraping, logged-in sessions

**What:** Connecting a browser-automation CLI (Playwright) to Claude Code lets the agent open a real browser, navigate, click, fill forms, and take screenshots — enabling three practical use cases: automated QA (the agent builds something, then tests its own build by clicking through it, logs what broke, and fixes the underlying code, repeating until a test run passes cleanly), general web automation/scraping tasks where no API exists, and automation of logged-in sessions (using a persistent browser profile so a one-time manual login is reused on later runs rather than re-authenticating every time).

**Why it matters:** Many real workflows involve sites with no usable API, or need to interact with a logged-in account (an internal community platform, an admin panel); browser automation extends what Claude Code can act on beyond APIs and MCP servers. Pairing it with the self-testing loop also turns "build it, hope it works" into "build it, watch it test itself, fix what it finds" without manual QA.

**The moves:**
1. Have the agent research and install the automation tool via plan mode rather than installing it manually first.
2. For self-QA: after a build, explicitly ask the agent to run it in a visible ("headed") browser, fill in fields, click through, and log any bugs or dead ends found, then fix the underlying code and re-test until a full pass completes cleanly.
3. For scraping/data collection: describe the target and desired output format, and expect the first script attempt to need one or two rounds of "it failed, try a different approach" before it succeeds — this is normal and the agent will usually self-correct with a nudge.
4. For logged-in sites: let the agent choose a persistent-profile approach so a single manual login is remembered on the browser profile for subsequent automated runs.
5. Feed corrective feedback in plain language after watching a run (e.g., "it's toggling the same button on and off instead of just clicking once") — this is often enough for the agent to fix its own script without technical direction.

**Watch out for:** Automating sites not designed for it is inherently less reliable than an API — expect several iterations before a script is dependable, and treat early runs as needing supervision rather than being safe to leave fully unattended. Consider a target site's terms of service before automating interactions with it.

**Original example to invent:** The source demoed self-QA on a multi-step form, lead-scraping via search, and automating an internal community platform. Writers should invent a different browser-automation task (e.g., self-testing a checkout flow) using the same three-part pattern.
