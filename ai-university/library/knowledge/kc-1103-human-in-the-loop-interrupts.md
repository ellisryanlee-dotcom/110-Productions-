---
id: kc-1103
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [human-in-the-loop, interrupts, workflow, approval, langgraph]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K"
confidence: high
---
# Human-in-the-loop via workflow interrupts

**What:** An interrupt pauses a running workflow at a node, hands control back to the interface to collect input from the person, then resumes execution from that exact point with the value they supplied. It's the orchestrator's built-in mechanism for approval and feedback loops.

**Why it matters:** LLMs hallucinate, so almost any real agent benefits from a checkpoint where a human approves an action or gives feedback before the flow continues. Interrupts let you build that pause without ending and re-entering the whole workflow.

**The moves:**
1. At the point you need input, emit an interrupt; optionally pass data to display in the UI.
2. The UI shows the prompt and captures the user's response.
3. Resume the graph, feeding the captured value back into state.
4. Route on that value (e.g., a router node decides "iterate again" vs "finish").

**Watch out for:** An alternative is to simply end the run and fully re-enter on the next message — interrupts are a convenience, not the only way. Make sure the value passed on resume lands in the state field your downstream nodes read.

**Original example to invent:** Source uses feedback on generated agent code. Invent a different approval gate (e.g., pause before sending an outbound email) to demonstrate the pattern.
