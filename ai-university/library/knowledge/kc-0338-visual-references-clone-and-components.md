---
id: kc-0338
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, web-design, cloning, components, inspiration]
source_video: 86HM0RUWhCk
source_channel: "@nateherk"
source_views: "528K"
confidence: high
---
# Building from visual references: full-page clones and single components

**What:** Two ways to borrow design quality. Full-page clone: capture a
full-length screenshot of a reference site plus its copied style/CSS, hand both to
the agent, and have it rebuild a close match you then rebrand. Component-level:
grab an individual element (a background, a button, a hero effect) from a component
library and paste its snippet, asking the agent to work just that piece into your
existing page.

**Why it matters:** Cloning gets you a strong starting layout fast; component
swaps let you elevate specific pieces to feel unique without redoing the whole
site. Together they move you from generic to polished-and-branded quickly.

**The moves:**
1. For a clone: take a full-page screenshot (browser dev-tools capture-full-size),
   copy the style/CSS from the element panel, give both to the agent, and ask for
   a clone; then feed brand assets to reskin it.
2. For a component: browse a component library, copy the element's provided
   snippet, and tell the agent where to integrate it.
3. Iterate with plain-language feedback (contrast, colors, "make this cleaner").

**Watch out for:** Dynamic background images and animations won't clone exactly —
you'll refine those separately, and may want to disable the screenshot loop for
animated pieces (see kc-0337). Cloning gives a starting point, not a
pixel-perfect copy; plan to iterate.

**Original example to invent:** Source cloned a reference site and added a library
background component. Writers must use entirely different reference material.
