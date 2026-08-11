---
id: kc-0827
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [observability, debugging, sub-executions, logging, n8n]
source_video: [KUvSzvFeZls, jBanaNBY-sM]
source_channel: "@nateherk"
source_views: "208K / 197K"
confidence: high
---
# Inspecting and logging agent runs for observability

**What:** Two complementary ways to see what a multi-agent system actually did:
drilling into a specific run's sub-executions to trace what each sub-agent chose and
which tool it called, and logging every run (including errors) to a persistent record
such as a spreadsheet.

**Why it matters:** When a manager delegates to specialists, the interesting behavior
happens inside the sub-agents. Being able to open a sub-execution and read the exact
query, decision, and tool call is how you verify correctness and debug. Logging every
run — with inputs, outputs, actions, and token counts — gives ongoing visibility and
a basis for optimization.

**The moves:**
1. From a run, open the sub-execution of a called agent to see its incoming query and
   the tool it used.
2. Copy a run to a full-screen editor view to read the whole chain clearly.
3. Enable returning the agent's intermediate steps so the actions array is available
   to log.
4. Split the workflow into a success branch and an error branch (set the agent to
   continue on error) so failures are logged instead of silently killing the run.
5. Write timestamp, input, output, actions, and tokens to a tracker for every run.

**Watch out for:** Without a continue-on-error branch, one failure stops the whole
flow and you get no log or notification. Detailed intermediate-step logging costs some
extra output, so log what you'll actually review.

**Original example to invent:** Source logged a butler assistant and a media team.
Writers should show observability for a different agent system.
