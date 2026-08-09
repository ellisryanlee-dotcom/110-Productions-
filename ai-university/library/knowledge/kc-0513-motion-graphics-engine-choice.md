---
id: kc-0513
type: tool
track: "Track 8 — Applied Automations"
topics: [motion-graphics, video-editing, html-rendering, tool-choice]
source_video: Aw3BkmhYu4I
source_channel: "@nateherk"
source_views: "314K"
confidence: high
---
# Choosing a motion-graphics engine for AI video edits

**What:** For adding animated motion graphics to AI-edited video there are competing approaches. One family renders graphics programmatically from code (a React/component-style renderer); another renders from HTML compositions and offers a visual timeline editor. Both perform the "animate" and "render" steps of the pipeline, but they work differently under the hood and produce a different aesthetic.

**Why it matters:** The trim step is largely equivalent across tools, so the graphics engine is where the visible quality difference lives. Picking the one whose look and editing ergonomics you prefer materially changes the final video and how fast you can iterate.

**The moves:**
1. Understand you can run everything through a single pipeline tool's built-in graphics engine, or hand the trimmed clip to a separate graphics tool.
2. Compare on aesthetic: run the same raw clip through each and judge which style you like (e.g., glassy card UI vs. a face-in-corner layout with incoming graphics).
3. Compare on ergonomics: an engine with a visual timeline lets you drag, delete, and re-time individual graphic elements; edits made there reflect back into the underlying code so the agent stays in sync.
4. Choose per project — one engine may suit lessons, another may suit shorts.

**Watch out for:** The two engines are not identical under the hood, so outputs and editing behavior differ; don't assume one prompt produces the same result in both. Timeline edits and agent edits must stay reconciled so a manual re-time isn't overwritten.

**Original example to invent:** The source compares two named engines on its own footage. Writers should describe the *capability* difference abstractly (code-rendered vs. HTML-with-timeline) and invent their own side-by-side comparison scenario rather than reusing the source's clips.
