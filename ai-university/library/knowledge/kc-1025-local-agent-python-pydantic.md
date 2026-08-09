---
id: kc-1025
type: how-to
track: "Track 2 — AI Agents Core"
topics: [python, pydantic-ai, fastapi, agent, local-ai, api-endpoint]
source_video: [mNcXue7X8H0, fg0_0M8kZ8g, JWfNLF_g_V0]
source_channel: "@ColeMedin"
source_views: "256K"
confidence: high
---
# Building the same agent in code with Pydantic AI

**What:** The code counterpart to a no-code agent: a Python agent built with the Pydantic AI framework, wrapped in a FastAPI endpoint so it can be called like any API. It connects to the same local services (model runner, database, search) and, thanks to OpenAI compatibility, can also target cloud models by changing configuration.

**Why it matters:** Code gives you full control and mirrors the no-code build one-to-one, so you can pick whichever fits a project. Pydantic AI makes defining an agent, its tools, and typed inputs/outputs straightforward, and FastAPI turns it into a deployable service.

**The moves:**
1. Configure a model via an OpenAI-style model object, overriding base URL/key so it points at the local runner (or a cloud provider).
2. Define the agent with a system prompt and dependencies (e.g., an HTTP client and the search service's URL for tools).
3. Register tools with a decorator; the tool function's docstring becomes the description the agent uses to decide when to call it.
4. Expose a FastAPI endpoint that accepts the chat input and session id, verifies a bearer token, fetches/stores conversation history in the database, runs the agent, and returns the typed output.
5. Optionally add a second lightweight agent to handle side tasks (like generating a conversation title/tags).

**Watch out for:** Give the agent a retry count so transient errors self-recover. Match the endpoint's input/output field names to whatever front end will call it. Running directly with Python means using localhost for services; containerizing the agent (next card) lets it use service names on the shared network instead.

**Original example to invent:** Write a small Pydantic AI agent with one tool exposed over FastAPI and call it, in your own words and with your own tool — not the source's web-search demo verbatim.
