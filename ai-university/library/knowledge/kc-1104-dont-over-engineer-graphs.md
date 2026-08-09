---
id: kc-1104
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [over-engineering, workflow, agents, scoping, simplicity]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K"
confidence: medium
---
# Don't force every agent into a graph

**What:** Graph-based agentic workflows are powerful but are not the right tool for every job. Reaching for a multi-node, multi-agent workflow when a single agent would do is over-engineering that adds cost and complexity for no benefit.

**Why it matters:** Beginners often assume "more agents / more structure = better." In reality, the added machinery only pays off for genuinely complex, non-deterministic problems with several agents reasoning together. Simple tasks stay simpler (and cheaper, and more reliable) as one agent.

**The moves:**
1. Start with the simplest thing that could work — a single agent with a few tools.
2. Only graduate to a workflow graph when you see concrete shortcomings (poor results, need for iteration/branching, multiple cooperating specialists).
3. Before adding structure, ask whether a better system prompt or better tools would fix the problem instead.

**Watch out for:** Even the source admits the framework's own docs warn against this. The teaching example is deliberately more elaborate than necessary — replicate the lesson, not the overkill.

**Original example to invent:** Describe a task that clearly doesn't need a graph (single lookup) beside one that does (multi-source research with retries), in a domain other than the source's.
