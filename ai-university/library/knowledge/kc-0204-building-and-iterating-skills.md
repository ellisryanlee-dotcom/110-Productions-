---
id: kc-0204
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [skills, skill-building, iteration, debugging]
source_video: bCljOfCH8Ms
source_channel: "@nateherk"
source_views: "395K"
confidence: high
---
# Building and iterating a skill from scratch

**What:** A repeatable method for authoring a skill and improving it until it is
reliable, using a six-part build framework and a feedback loop.

**Why it matters:** No skill is good on the first try. The value compounds only if
you watch the agent run it, spot waste (repeated searches, wrong ordering), and
patch the skill so each run gets better and cheaper. This is how a "90% good" skill
becomes production-grade.

**The moves (six-step build framework):**
1. Name + trigger — what it's called and the natural language that fires it.
2. Goal — one sentence describing the output.
3. Step-by-step process — exactly what you'd do manually, in order, with decisions.
4. Reference files — the context it needs (style guides, brand assets, data).
5. Rules — guardrails for what could go wrong.
6. Self-improvement loop — how it gets updated after real use.

**Then iterate by symptom → fix:**
- Wrong steps/order → edit the instructions.
- Missing tone/context → add reference files (pointed to correctly).
- Same mistake repeats → add a rule.
- Keeps re-searching a tool/API → give it a reference doc of the answers.
- Good-but-improvable → brute-force run it repeatedly and nitpick.
- Not triggering → make the front matter more specific.
- Triggering too often → restrict invocation in front matter.

**Watch out for:** The best way to build a skill is to first do the task *with* the
agent, then ask it to capture the finished process as a skill and interview you for
gaps. Hardcode stable values (like fixed IDs) into the skill so it stops rediscovering
them each run — a common hidden token drain.

**Original example to invent:** Source live-built a branded-infographic skill via an
image API. Writers should build a different skill end-to-end (e.g., a changelog
generator) so the process transfers, not the demo.
