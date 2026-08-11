---
id: kc-1228
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, output-tokens, chunking, generation-limits, diagrams]
source_video: m3fqyXZ4k4I
source_channel: "@ColeMedin"
source_views: "103K"
confidence: medium
---
# Generating large artifacts section-by-section to dodge output token limits

**What:** Coding agents cap how many tokens they can emit in one turn (on the order of tens of thousands). Large structured outputs — a detailed diagram's JSON, a long file — can exceed that. The workaround is to first assess the artifact's size/depth, and for big ones build it in sections rather than all at once.

**Why it matters:** Hitting the output ceiling mid-generation produces truncated, broken artifacts. Deciding up front whether to build in one shot or in chunks is what makes large generations succeed reliably.

**The moves:**
1. Before generating, assess depth: is this simple enough for one pass, or large enough to exceed the output limit?
2. For large artifacts, split into sections and generate each in its own turn, assembling as you go.
3. Then run the artifact through the normal validation/iteration loop.

**Watch out for:** Rich artifacts consume many tokens and take a while to generate; section-building is slower but avoids the hard truncation failure. Detect the case early rather than after a failed one-shot attempt.

**Original example to invent:** Show a large output built in parts versus a failed single-pass attempt, for an invented artifact.
