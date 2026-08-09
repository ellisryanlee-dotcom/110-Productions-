---
id: kc-0131
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [prompting, plan-mode, voice-to-text, claude-code, communication]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Prompting an agentic coding tool

**What:** The quality of output tracks the clarity of your prompt and context — vague in, vague out. The skill shift is away from writing code and toward communicating precisely: describe the outcome, constraints, and definition of "done," and let the agent (via plan mode) interrogate you until it's confident.

**Why it matters:** Agents run autonomously, so you can't nudge them mid-run like a chat. Getting the request right up front is what produces good results the first time and avoids rounds of correction.

**The moves:**
1. Give a rough goal, then instruct the agent to ask clarifying questions until it's ~95% confident (invoke its question tool).
2. Treat it like a capable new contractor who's never seen your project — supply context, constraints, and expected outcomes.
3. Prefer posing problems over dictating commands ("how should we handle X?") so it reasons and you can inspect its assumptions.
4. Define what "done" looks like (exact counts, fields, stop conditions) so it doesn't over-build or loop.
5. Use voice-to-text to brain-dump faster and more naturally than typing.

**Watch out for:** Under-specified goals ("build me a lead scraper") give random results; the agent needs the industry, role, and format. Not defining a finish line lets it over-complicate or keep researching.

**Original example to invent:** The source contrasts a weak website prompt with a detailed one and role-plays the agent as an expert asking questions. Write your own weak-vs-strong prompt pair for a different deliverable.
