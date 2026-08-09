---
id: kc-0723
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [skills, evals, benchmarks, trigger-tuning, regression, skill-creator]
source_video: RAZVk5NPNtE
source_channel: "@nateherk"
source_views: "227K"
confidence: high
---
# Measure and refine skills with the skill-creator: evals, benchmarks, trigger tuning

**What:** An official Anthropic "skill-creator" skill that builds, modifies,
measures, and improves other skills. It offers three quality tools: *evals* (feed
examples of good output; it tests prompts, compares outputs, and optimizes the
skill), *benchmarks* (run the task with and without the skill loaded to see
pass rate, time, and token usage side by side), and *trigger tuning* (it tests
the prompts that should invoke a skill and rewrites the skill's description so it
fires accurately).

**Why it matters:** It shortcuts the "use it a lot and give feedback" loop into a
measurable process. Evals serve two opposite purposes: catching *regressions* (a
model update makes the skill perform worse — an early signal to revise it) and
spotting *growth* (the model now does better without the skill — a signal to
archive it). Trigger tuning fixes false triggers and misfires once a project has
many skills.

**The moves:**
1. Install the skill-creator skill.
2. Provide example inputs/outputs of "good" and run an eval to optimize the skill.
3. Benchmark with vs without the skill to quantify the uplift (pass rate, time,
   tokens).
4. Re-run evals/benchmarks whenever the model updates or you change the skill.
5. Use trigger tuning to correct which prompts call which skill.

**Watch out for:** Results aren't perfect even after tuning — trigger accuracy
improves but isn't 100%. Evals require you to supply representative "good"
examples. Watch for both regression and growth as models evolve.

**Original example to invent:** Describe an eval you'd design for a specific skill
— what "good" examples you'd supply and what a benchmark result would tell you.
