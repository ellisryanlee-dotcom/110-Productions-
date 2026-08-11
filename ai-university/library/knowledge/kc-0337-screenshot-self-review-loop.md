---
id: kc-0337
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [claude-code, puppeteer, self-review, screenshots, web-design]
source_video: 86HM0RUWhCk
source_channel: "@nateherk"
source_views: "528K"
confidence: high
---
# The screenshot self-review loop

**What:** Give the coding agent eyes: after it builds a page, it starts a local
server, takes screenshots of what it rendered (via a headless browser like
Puppeteer), looks at them, and fixes mismatches — doing multiple review-and-polish
passes on its own. It uses its own visual output as feedback instead of relying on
you to steer every correction.

**Why it matters:** A design skill might get output ~60% of the way; the screenshot
loop lets the agent close much of the remaining gap itself, so you spend far less
time manually pointing out visual problems. When cloning a reference, it can
compare its render against the target and iterate to match.

**The moves:**
1. Have the agent set up a screenshot tool (ask it to install a headless browser
   like Puppeteer — it can do the setup for you).
2. Add a screenshot-workflow section to CLAUDE.md so it screenshots and reviews as
   part of building.
3. Let it start the server, capture the sections, and run at least two
   compare-and-fix passes.
4. For clone tasks, feed a reference image so it compares its render to the target.

**Watch out for:** For animated/dynamic backgrounds the screenshot can't capture
the motion, so the agent may loop forever thinking it failed and over-engineer —
tell it to skip the screenshot step for those. It can get "screenshot-happy" and
clutter a temp folder; specify a naming convention or have it clean up.

**Original example to invent:** Source used it to build and clone landing pages.
Writers should show the loop refining a different UI.
