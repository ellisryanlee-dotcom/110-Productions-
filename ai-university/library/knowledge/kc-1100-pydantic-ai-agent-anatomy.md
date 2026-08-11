---
id: kc-1100
type: framework
track: "Track 2 — AI Agents Core"
topics: [pydantic-ai, agent-anatomy, tools, dependencies, python]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K"
confidence: high
---
# The three parts of a code-defined agent (Pydantic AI)

**What:** In a Python agent framework like Pydantic AI, any agent decomposes into three pieces. (1) Dependencies — the external resources the agent needs to act, such as API keys, an LLM client, or a database connection. (2) The agent definition — the model choice plus the system prompt that sets behavior. (3) Tools — the functions the agent can call to do work on your behalf (query a DB, send email, fetch data). Tools usually make up most of the code.

**Why it matters:** This mental model is framework-agnostic. Once you can name which of the three parts you're editing, building and debugging an agent becomes a matter of filling in slots rather than staring at a wall of code. It also clarifies where a change belongs (behavior → system prompt; new capability → tool; new credential → dependency).

**The moves:**
1. Declare dependencies as a small typed container the framework injects into tool calls.
2. Define the agent with a model and a system prompt.
3. Register each capability as a decorated function; a tool's docstring tells the agent when and how to use it.
4. Keep short-term memory (conversation history) as a separate concern from tools.

**Watch out for:** A vague system prompt produces hallucinated setups (missing env vars, undefined model). Tool docstrings are load-bearing — they are how the agent decides to call the function, not just comments.

**Original example to invent:** The source builds a documentation-answering agent for one framework. Pick a different domain (e.g., an agent with three tools over a ticketing system) and show the same three-part split.
