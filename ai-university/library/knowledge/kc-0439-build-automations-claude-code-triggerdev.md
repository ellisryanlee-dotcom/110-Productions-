---
id: kc-0439
type: how-to
track: "Track 8 — Applied Automations"
topics: [claude-code, trigger-dev, agentic-workflows, deployment]
source_video: ZeJXI2MAhj0
source_channel: "@nateherk"
source_views: "387K"
confidence: high
---
# Build code-based automations with a coding agent plus a workflow runtime

**What:** A pattern for building production automations by describing them to a coding agent, which writes the code, paired with a workflow-execution service that runs and visualizes them. You get the speed of natural-language building with a visual runtime that shows each step, like a traditional platform.

**Why it matters:** It combines the fast, describe-it-and-go building of agentic tools with the observability builders love from drag-and-drop platforms — you can watch runs, see tool calls, and inspect timing between steps.

**The moves:**
1. Describe the automation to the coding agent: trigger, data source, processing, and destination.
2. Let it scaffold and build the code, asking you clarifying questions first (use plan mode).
3. Run it in the workflow runtime and watch the steps execute in real time.
4. Iterate by feeding errors back to the agent, which fixes them; test in a development environment before promoting to production.
5. Extend an existing project by describing the next automation — larger projects get easier to add to.

**Watch out for:** Test runs surface real errors (bad fields, auth issues) — expect a fix cycle. Timing details like polling intervals may need tuning (e.g., waiting longer between checks). Only promote to production after a clean test run.

**Original example to invent:** Source builds a scheduled news digest and a task-triggered research agent. Writers should invent a different trigger-to-destination automation and show one test-fail-fix cycle.
