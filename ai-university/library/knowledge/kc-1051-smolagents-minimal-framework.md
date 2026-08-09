---
id: kc-1051
type: tool
track: "Track 2 — AI Agents Core"
topics: [smolagents, hugging-face, agent-framework, tools, code-agents]
source_video: uWDocIoiaXE
source_channel: "@ColeMedin"
source_views: "122K views"
confidence: high
---
# smolagents: a minimal agent framework from Hugging Face

**What:** A lightweight agent library that lets you stand up an agent, attach tools, and get a chat UI with very little code. It runs against any model you can reach through a hosted inference API or a local server, and its base agent executes its actions by writing and running code.

**Why it matters:** For learning or prototyping agentic flows, a minimal framework keeps the moving parts visible. It bootstraps an agent, custom tools, and a front end quickly so you can focus on the design of the flow rather than framework boilerplate.

**The moves:**
1. Install the library and pick a model source (hosted inference API or a local OpenAI-compatible server).
2. Define tools as functions; use the framework's tool decorator and a docstring that tells the model when and how to call each tool, including its arguments.
3. Create an agent, pass it the tool list, and set a maximum number of internal reasoning/action steps.
4. Launch the built-in UI integration with a single call to get an interactive chat front end.

**Watch out for:** The code-execution paradigm isn't always desirable — you may not want every action run as code. The framework can also mishandle a reasoning model's internal "thinking" tokens, surfacing parse errors that are cosmetic and can be ignored. Consider a more robust framework for production.

**Original example to invent:** Source built a competitor-analysis RAG agent. Writers should use a different task and toolset.
