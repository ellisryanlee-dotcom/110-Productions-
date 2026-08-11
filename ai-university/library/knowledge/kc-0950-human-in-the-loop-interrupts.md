---
id: kc-0950
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [human-in-the-loop, interrupts, agent-workflows, guardrails, langgraph]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K views"
confidence: high
---
# Human-in-the-loop with workflow interrupts

**What:** A human-in-the-loop step pauses an agent workflow to get feedback or approval from a person before continuing. In a graph orchestrator this is done with an interrupt: the graph halts at a node, surfaces control back to the interface, waits for the user's input, then resumes the graph exactly where it paused with that input injected as the next value.

**Why it matters:** LLMs hallucinate, so practically any real agent should have a person approve or steer key actions before moving on. Interrupts let you insert those checkpoints anywhere in a flow without ending and rebuilding the whole run.

**The moves:**
1. At the point you want human input, call the framework's interrupt mechanism; optionally pass data to display in the UI (e.g., what feedback is being requested).
2. The interface collects the user's message.
3. Resume the graph, supplying the user's message as the resumed value.
4. Route on that message — e.g., loop back to revise, or advance to finish.
5. Alternatively, end the graph and re-enter on the next message; the interrupt approach just keeps state without a full restart.

**Watch out for:** You must persist workflow state (memory/checkpointing) for interrupt-resume to work across turns. Decide deliberately which actions require approval vs. run autonomously.

**Original example to invent:** The source paused after generating agent code to collect user feedback. Writers should show a different approval gate (e.g., a purchasing agent pausing before it places an order) with their own UI copy.
