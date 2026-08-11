---
id: kc-0951
type: how-to
track: "Track 2 — AI Agents Core"
topics: [langgraph, state-management, message-history, concurrency, agent-workflows]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K views"
confidence: high
---
# Managing shared global state across a graph workflow

**What:** A graph workflow keeps a global state object holding everything the whole run cares about — the message history, any scope document a planning step produced, the latest user message, and so on. Each node reads from this state and, at the end, returns an object mapping the state keys it wants to change to their new values. The framework merges that update, so the value persists for later nodes unless another node overwrites it.

**Why it matters:** Nodes run at different points in the flow but must share context (e.g., every node may need the conversation history). A single, explicitly-defined state is far cleaner than threading values manually between steps, and it enables safe concurrency.

**The moves:**
1. Define the state schema up front: list every field the workflow must track.
2. In each node, read needed fields from state.
3. Return only the keys you changed; unset fields keep their prior values.
4. Pass entry data (like the first user message) into the graph when you invoke it from the UI.
5. Give each concurrent run a distinct conversation/thread ID so the framework isolates its state.

**Watch out for:** In-memory state is lost on restart — use a persistent store (SQLite/Postgres checkpointer) for durability. The stored message format may differ from what the agent framework expects, so convert on read and write.

**Original example to invent:** The source tracked messages, a scope doc, and the latest user message. Writers should define a different state schema (e.g., an order workflow tracking cart, customer, and approval status) and show one node updating one field.
