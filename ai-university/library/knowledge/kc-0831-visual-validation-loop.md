---
id: kc-0831
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [visual-validation, screenshots, devtools, self-correction, slides]
source_video: Wu67lLD8bB0
source_channel: "@nateherk"
source_views: "205K"
confidence: high
---
# Visual validation loop for blind programmatic output

**What:** A technique for improving artifacts an agent builds programmatically but
cannot see (like slides or documents): give it browser dev tools / screenshot ability so
it can open the result, capture it, evaluate it, and fix problems itself.

**Why it matters:** When an agent constructs output by code alone, it's effectively
building blind — it doesn't know that spacing is off or an image is misplaced. Adding a
way to actually view the rendered result turns a one-shot guess into a see-and-correct
loop, dramatically improving visual quality.

**The moves:**
1. Recognize that programmatic builders produce output the agent can't perceive.
2. Grant it screenshot/dev-tools access to open and capture the rendered artifact.
3. Have it inspect each screenshot, identify layout/spacing/asset issues, and plan
   fixes.
4. Let it update the underlying skill/process so the fixes persist for future runs.
5. Prefer higher-quality captures (e.g., full-size/presentation view) for better
   feedback.

**Watch out for:** Screenshot quality affects the audit — a small window yields worse
captures and worse fixes. The loop improves things but rarely reaches pixel-perfection
in a couple passes; iterate.

**Original example to invent:** Source added visual validation to a Google Slides
generator. Writers should apply the loop to a different generated artifact.
