---
id: kc-1131
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [prp, context-engineering, validation-gates, specifications, claude-code]
source_video: amEUIuBKwvg
source_channel: "@ColeMedin"
source_views: "149K"
confidence: high
---
# The PRP context-engineering framework

**What:** A three-step process for giving a coding agent everything it needs to build production-ready code. (1) Write an initial file describing the feature/project, with examples and documentation references. (2) Generate a "product requirement prompt" (PRP) — a long, comprehensive document assembled from a base template plus your initial file, including step-by-step tasks, validation loops/gates, a final checklist, and anti-patterns. (3) Execute the PRP to produce the code. Steps 2 and 3 are slash commands.

**Why it matters:** The PRP front-loads context so the agent can build a feature end-to-end in roughly one shot, with the quality of a spec you'd hand another engineer. Validation gates tell the agent how to check its own output. It's context engineering made repeatable.

**The moves:**
1. Author the initial file: feature description, example files to imitate, doc pages to read, gotchas to avoid.
2. Run the generate command to produce the PRP; validate it before executing.
3. Clear context, then run the execute command against the PRP.
4. Review and iterate on the generated code.

**Watch out for:** Always validate the PRP before executing — if it's wrong, the build inherits the error. Clear context between generate and execute so the executor starts fresh.

**Original example to invent:** Source builds a research agent via a PRP. Show the three-step flow for a different feature, writing your own initial file and validation gates.
