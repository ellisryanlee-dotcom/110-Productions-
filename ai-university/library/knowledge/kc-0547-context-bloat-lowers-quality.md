---
id: kc-0547
type: concept
track: "Track 9 — Reliability & Craft"
topics: [context-window, quality, lost-in-the-middle, attention]
source_video: 49V-5Ock8LU
source_channel: "@nateherk"
source_views: "268K"
confidence: medium
---
# Context bloat lowers quality, not just cost (the lost-in-the-middle effect)

**What:** A bloated context window doesn't only cost more tokens — it produces worse output. Models tend to attend most to the beginning and end of a session and pay less attention to material buried in the middle, a phenomenon often called "lost in the middle." So an overstuffed window means you pay more and get less.

**Why it matters:** It reframes context hygiene as a *quality* practice, not merely a cost one. Keeping sessions lean isn't penny-pinching — it keeps the model's attention on what matters and prevents important details from being effectively ignored.

**The moves:**
1. Keep working context tight so key information sits where the model attends (beginning/end), not lost in a long middle.
2. Compact or clear before context balloons, so critical facts don't get buried.
3. Put the most important instructions/context at the edges of the window rather than mid-stream.
4. Treat trimming context as improving answers, not just saving money.

**Watch out for:** A model can silently ignore something that's technically "in context" if it's buried in a long middle section. More context is not automatically better — past a point it degrades both cost and quality.

**Original example to invent:** The source describes the attention dip abstractly. Writers should invent a concrete case where a key instruction buried mid-session gets missed, and how moving it fixes the output.
