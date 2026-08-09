---
id: kc-1227
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, skills, self-validation, diagrams, screenshots, iteration]
source_video: m3fqyXZ4k4I
source_channel: "@ColeMedin"
source_views: "103K"
confidence: high
---
# Self-validation loop for hard-to-verify outputs

**What:** Coding agents are weak at visual and other hard-to-inspect outputs because they can't "see" the result. The fix is to build a self-validation loop into the workflow: the agent produces the artifact, renders it, screenshots the render, looks at the image, spots imperfections, and edits the original file — iterating a few times before handing control back. A companion design principle for diagrams: make the *structure* carry the meaning ("argue visually") so the layout itself teaches, not just the labels.

**Why it matters:** Giving an agent the ability to check its own work dramatically improves quality on tasks it otherwise can't evaluate. It won't reach perfection unattended, but it produces a strong starting point that only needs light human iteration — the loop is the difference between blocky, generic output and something usable.

**The moves:**
1. Have the agent generate the artifact (e.g., a diagram file).
2. Render it programmatically (a helper script) to an image.
3. Have the agent view the rendered image and critique it against explicit criteria (visual flow, hierarchy, whether someone could learn from it).
4. Have it edit the existing file directly (not regenerate from scratch) to fix issues.
5. Loop a few times (typically two to four), then return for human refinement.

**Watch out for:** The output is never perfect on the first pass because the model makes an enormous number of micro-decisions (every color, shape, position); expect to iterate a couple of times with direction. For large artifacts, generate section by section to avoid output token limits.

**Original example to invent:** Show a render→critique→edit cycle improving an invented artifact, describing the "structure mirrors the concept" principle abstractly rather than copying the source's diagram.
