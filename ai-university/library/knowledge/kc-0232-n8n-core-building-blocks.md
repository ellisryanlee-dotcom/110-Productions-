---
id: kc-0232
type: concept
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, workflows, nodes, executions, node-types]
source_video: ZHH3sr234zY
source_channel: "@nateherk"
source_views: "523K"
confidence: high
---
# n8n's core building blocks and node types

**What:** n8n is a low-code/no-code automation tool where you drag and drop nodes on a
canvas to build workflows. Three foundational concepts: a workflow is the overall set
of instructions; a node is a single step/action within it; an execution is one run of
the workflow. Nodes come in four main types: trigger (starts the workflow), action
(does a specific task like send email or make an API request), data transformation
(edit/set/aggregate/merge data), and logic (if/switch/wait to control the path).

**Why it matters:** These are the primitives every n8n build rests on. Understanding
that a workflow is a sequence of typed nodes, run per execution, is what lets a
beginner reason about any automation. Low barrier to entry means non-programmers can
build real automations in minutes, while advanced users can still add custom code.

**The moves:**
1. Start every workflow with a trigger node (manual, schedule, on-app-event, chat, or
   called-by-another-workflow).
2. Add action nodes for the actual tasks.
3. Insert data-transformation nodes to shape data between steps.
4. Use logic nodes (if/switch/wait) to branch or pause.
5. Connect nodes so data flows; test each step individually and inspect input/output.

**Watch out for:** A node only runs if it's wired to receive input — an unconnected
node produces nothing. Test steps individually rather than only running the whole
workflow, so you can isolate where data breaks. The source uses a recipe/restaurant
analogy for workflow/node/execution — invent your own if you need one.

**Original example to invent:** Source's canvas demo used generic edit-fields nodes.
Writers should illustrate the four node types on a different small workflow.
