---
id: kc-0809
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [claude-code, skills, iteration, debugging, sub-agents, tokens]
source_video: zKBPwDpBfhs
source_channel: "@nateherk"
source_views: "215K"
confidence: high
---
# Iterating and optimizing skills over time

**What:** The practice of running a skill, watching the agent work, and repeatedly
refining the skill file so it gets faster, cheaper, and more accurate each cycle.

**Why it matters:** Skills start mediocre and get good through use. Watching early
runs reveals wasted work — repeated lookups, unnecessary searches — that you can
eliminate to save time and tokens, which is the difference between a skill you
babysit and one you fire and forget.

**The moves:**
1. Run the skill and actually watch the first several runs rather than walking
   away.
2. Give feedback; let it edit its own instructions between runs (the feedback
   cycle).
3. When you see it recompute something that never changes (e.g., resolving the
   same IDs every time), hardcode that stable value into the skill.
4. When a step does heavy searching, delegate it to a specialized sub-agent so the
   main run doesn't blow its context window.
5. Prefer reading a local markdown reference over repeatedly web-searching or
   crawling the same docs.
6. Map symptoms to fixes: wrong steps → edit instructions; missing tone/context →
   add a reference file; same mistake repeating → add a rule; struggling with a
   tool → give it a reference doc; not triggering → tighten the description;
   triggering too often → restrict how it can be invoked.

**Watch out for:** "Good but could be better" only improves by brute-force repeated
runs and nitpicking. Processing markdown is far cheaper than live API/HTTP calls,
so favor cached references.

**Original example to invent:** Source hardcoded list IDs and used a search
sub-agent. Writers should show a different repeated-lookup being optimized away.
