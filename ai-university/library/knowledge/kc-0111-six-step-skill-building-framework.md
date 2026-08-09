---
id: kc-0111
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [skill-building, claude-skills, evals, debugging, iteration]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Six-step skill-building framework, plus a symptom-to-fix table

**What:** A repeatable process for creating a new skill: (1) name it and define its natural-language trigger, (2) state its one-sentence goal/output, (3) write the step-by-step process a person would follow to do it manually, (4) identify what reference material or context it needs (style guides, brand assets, current project data), (5) add rules/guardrails for likely failure modes, and (6) close the loop by watching the first several runs and folding corrections back into the skill file. A companion symptom-to-fix table helps diagnose an underperforming skill: wrong step order → edit the instructions; missing tone/context → add a reference file; the same mistake recurring → add an explicit rule; struggling with a tool/API → add a reference doc for it; generally mediocre but not broken → keep iterating with real feedback; not triggering → tighten the YAML description; triggering too often → restrict how it can be invoked.

**Why it matters:** Skills are rarely right on the first attempt, and without a structured way to diagnose *why* an attempt fell short, iteration becomes guesswork. This framework turns "the skill isn't working" into a specific, actionable fix category.

**The moves:**
1. Walk through the six-step build with the agent conversationally — for a new skill, let it interview you (goal, trigger phrase, process, needed references, guardrails) rather than writing the file by hand.
2. Run the new skill once on a real (not hypothetical) input and actually inspect the output rather than assuming it worked.
3. Classify what's wrong using the symptom table above, and make exactly that category of fix instead of a broad rewrite.
4. Re-run and repeat; expect a skill to need several iterations before it's consistently good.
5. For a mature project with many skills, consider running a structured evaluation — feeding known-good example outputs and comparing the skill's outputs against them — to catch regressions after a model update or to formally tune trigger accuracy.

**Watch out for:** The first output from a brand-new skill often looks generic; that's a normal starting point, not a signal the approach failed. Skipping step 4 (reference material) is the most common cause of technically-correct-but-generic first outputs.

**Original example to invent:** The source live-built an infographic-generation skill and a YouTube-performance-report skill using this process. Writers should invent a different skill build (e.g., a customer-email-triage skill) and walk the same six steps.
