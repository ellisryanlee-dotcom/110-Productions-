---
id: kc-0602
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [self-healing, agent-design, error-handling, workflows, iteration]
source_video: tDGiWn0flK8
source_channel: "@nateherk"
source_views: "262K"
confidence: high
---
# Let the agent self-heal and improve its own workflow files

**What:** A coding agent that owns both its instruction files (workflows) and its
executable tools can fix itself. When a tool errors mid-run, the agent reads the
error, edits the offending code, retries, and — crucially — updates the workflow so
that class of error is prevented next time. Feedback you give on outputs ("more
detail here," "the logo isn't showing") also gets folded back into the files.

**Why it matters:** This is the payoff of separating reasoning from code. Instead of
you hunting and patching failures by hand, the system accumulates fixes and gets
more robust with every run. Over time you converge on a battle-tested workflow.

**The moves:**
1. Structure the project so instructions and tool code are editable files, not
   locked internals.
2. On failure, let the agent read the error, research the cause, refactor the tool,
   verify, then amend the workflow to record the fix.
3. Treat the first few runs as discovery — expect to surface holes (encoding bugs,
   rate limits, rendering issues) and let each one become a permanent guardrail.
4. Give plain-language feedback on outputs; the agent should persist that as an
   updated instruction, not just a one-off correction.

**Watch out for:** Self-improvement only happens while the interactive agent is
present. A deployed schedule that ships only the workflow + tools will not self-heal
on its own; you re-open the agent to teach it. Also, running fully unattended
("bypass" mode) lets it change many things without asking — plan first.

**Original example to invent:** Source showed the agent fixing a character-encoding
crash and a white-on-white rendering bug. Writers must invent different failure
modes (e.g., an agent discovering a paginated API and refactoring the tool to loop).
