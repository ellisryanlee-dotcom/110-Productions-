---
id: kc-0323
type: concept
track: "Track 9 — Reliability & Craft"
topics: [context-management, tokens, context-rot, reliability, cost]
source_video: 6MC1XqZSltw
source_channel: "@nateherk"
source_views: "584K"
confidence: medium
---
# Treating context as a budget per run

**What:** Every file you make an agent read spends tokens, so treat context like
money. Even with very large context windows available, you plan each run around a
practical working budget rather than assuming you can dump everything in — because
overstuffed context degrades quality ("context rot"), it doesn't just cost more.

**Why it matters:** Autonomous, repeated runs make token discipline both a cost
issue and a reliability issue. A run that reads system instructions, strategy,
logs, API responses, and research can quietly balloon; keeping it lean keeps the
agent sharp and affordable.

**The moves:**
1. Budget each run: account for system instructions, memory files, logs, tool
   outputs, and fresh research.
2. Don't rely on the full context window — assume effective quality drops as you
   fill it.
3. Keep memory files concise and structured so re-orientation is cheap.
4. Periodically summarize and clear context within a working session, then resume
   from the summary, to keep the window fresh.

**Watch out for:** More context is not more capability past a point; bloated
context can make the agent worse. This is asserted craft guidance, not a measured
threshold — tune to your model and task.

**Original example to invent:** Source discussed this around a trading agent's
runs. Writers should illustrate context budgeting on a different repeated task.
