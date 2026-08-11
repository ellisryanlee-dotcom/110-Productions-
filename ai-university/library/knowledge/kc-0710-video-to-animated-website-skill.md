---
id: kc-0710
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, skills, web-design, animation, landing-pages]
source_video: q0TgUtj6vIs
source_channel: "@nateherk"
source_views: "231K"
confidence: high
---
# Turn a product video into a scroll-driven animated website with Claude Code

**What:** A workflow for generating a premium, single-page product landing site
from one short product video, using Claude Code plus two custom skills: a
front-end design skill (best practices for fonts, colors, layouts so output
doesn't look generic) and a video-to-website skill (turns a video into a
scroll-driven animated page). You drop a video into the project and ask for a
landing page; the agent extracts frames, builds the HTML/CSS/JS sections, and
tests locally.

**Why it matters:** It produces professional, animated sites in roughly half an
hour with no design or coding background, because the skills carry the craft the
base model lacks. The site can be built even without supplied copy, colors, or
product info — the agent invents branding you then refine.

**The moves:**
1. In Claude Code, create a project with a `.claude/skills` folder holding the
   two skill markdown files.
2. Drop the product video into the project.
3. In plan mode, ask for a one-page landing site (state tone: modern, dark
   background, smooth animations, readable text) and answer the agent's
   questions (product name, sections).
4. Accept the plan; the agent extracts frames (needs FFmpeg — it will install it),
   builds HTML/CSS/JS, and serves it on localhost to test.
5. Iterate in plan mode with specific feedback (alignment, timing of a section)
   and re-test.
6. After each build, tell the agent to fold what you liked/disliked back into the
   skill so it improves each time.

**Watch out for:** Requires a paid Claude plan; manage context (clear it around
half-full to avoid degradation); iterate in plan mode so fixes are planned, not
improvised.

**Original example to invent:** Build a landing page for a different product
category and describe the sections and animation choices you'd prompt for.
