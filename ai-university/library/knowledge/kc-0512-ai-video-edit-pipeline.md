---
id: kc-0512
type: how-to
track: "Track 8 — Applied Automations"
topics: [video-editing, pipeline, orchestration, motion-graphics]
source_video: Aw3BkmhYu4I
source_channel: "@nateherk"
source_views: "314K"
confidence: high
---
# Building an AI video-editing pipeline: trim → animate → render

**What:** An end-to-end video-editing flow where a coding agent acts as the orchestrator connecting several specialized tools: you drop in a raw recording, one tool transcribes and trims out mistakes/filler/retakes, another adds motion graphics/subtitles synced to the words, and the result is rendered to a final file — all driven by natural-language instructions.

**Why it matters:** It collapses a manual multi-app editing process (import, cut, animate, render in a traditional editor) into a conversational pipeline that even non-editors can run. Because each stage is a swappable tool, you can mix and match (e.g., use one engine for trimming and a different one for graphics).

**The moves:**
1. Set up a fresh project in a coding-agent harness (desktop app or an editor-based one) on a paid plan with agent access.
2. Give the agent the relevant tool repos/skills and tell it your goal: it should accept a raw file, remove filler/silences/retakes, and add motion graphics.
3. Reference the raw file explicitly (e.g., an @-mention of the asset) so the agent knows the target.
4. Run the **trim** step first as its own task; review the edit and get the file path if you can't find the output.
5. Run the **animate** step: describe where and when graphics/subtitles should appear.
6. **Render** to a final file when satisfied.
7. Note that one tool can run the full pipeline on its own (including its own graphics engine), or you can hand off to a preferred graphics tool between steps.

**Watch out for:** The trim must happen before animation, and you need a word-level timestamped transcript in between so graphics land on the exact spoken moment. The pipeline is token-hungry; being vague makes the agent wander and burn budget (one full pass in the demo used roughly 238K tokens).

**Original example to invent:** The source edits a talking-head clip about the tool itself. Writers should invent a different raw-footage scenario (e.g., a product unboxing) run through the same trim→animate→render stages.
