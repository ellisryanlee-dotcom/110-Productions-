---
id: kc-0946
type: concept
track: "Track 2 — AI Agents Core"
topics: [pydantic-ai, agent-architecture, tools, system-prompt, dependencies]
source_video: [U6LbW2IFUQw, _R-ff4ZMLC8]
source_channel: "@ColeMedin"
source_views: ["172K views", "133K views"]
confidence: high
---
# The three-part anatomy of a code-defined AI agent

**What:** Any agent built with a Python agent framework (the source uses Pydantic AI) breaks into three reusable parts. (1) Dependencies — the external things the agent needs to act, such as API keys, an LLM client, or database connections. (2) The agent definition itself — the model choice plus the system prompt that sets its role and rules. (3) Tools — the functions that let the agent do things on your behalf (query a database, call an API, send an email). The tool functions usually make up most of the code.

**Why it matters:** This decomposition is framework-agnostic — the same three-part mental model applies to almost any agent library. Separating dependencies, definition, and tools keeps agents testable, makes it obvious where to inject secrets, and lets you reason about behavior (prompt) separately from capability (tools).

**The moves:**
1. Enumerate dependencies first: which clients, keys, and connections the tools will call.
2. Define the agent: pick the model, write the system prompt that establishes role, goals, and guardrails.
3. Write each capability as a tool function; keep tools focused and single-purpose.
4. Wire dependencies into the tools so they can reach the outside world at call time.

**Watch out for:** The system prompt is where behavior lives, so vague prompts produce unreliable agents. Tools are the largest surface area — most bugs and most maintenance land here.

**Original example to invent:** The source demonstrated a documentation-question agent and a weather agent. Writers should pick a different domain (e.g., a gym-class booking assistant) and label its dependencies, agent definition, and two or three tools.
