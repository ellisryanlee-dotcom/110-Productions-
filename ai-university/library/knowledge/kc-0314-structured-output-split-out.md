---
id: kc-0314
type: how-to
track: "Track 2 — AI Agents Core"
topics: [structured-output, output-parser, n8n, fan-out, agent-design]
source_video: ldETapkr8Hg
source_channel: "@nateherk"
source_views: "898K"
confidence: high
---
# Forcing structured output, then splitting it into parallel items

**What:** When you need an agent to return several discrete pieces (four scene
prompts, a title-and-body pair), turn on the require-specific-output-format option
and define the schema (e.g., part1..part4, or {title, prompt}). The agent then
returns clean fields instead of freeform prose. To process each piece
independently, run the multi-part single item through a split-out node so it
becomes N separate items.

**Why it matters:** Structured output makes downstream mapping deterministic — you
reference named fields instead of parsing text. Splitting converts one bundled
result into a fan-out you can loop over (generate an asset per part).

**The moves:**
1. Enable the structured-output/parser toggle on the agent.
2. Define the exact fields you expect (named parts, or typed key/value pairs).
3. Read those fields directly downstream (e.g., a title field to name a file, a
   prompt field to feed a generator).
4. When one item contains a list, use split-out to explode it into per-item rows
   for independent processing.

**Watch out for:** Even four defined parts arrive as one item until you split;
forgetting the split means you only ever process the first. Match downstream field
references to the schema names exactly.

**Original example to invent:** Source used it for four video scenes and for a
title+prompt pair. Writers should apply structured output to a different fan-out
(e.g., splitting a research summary into per-source cards).
