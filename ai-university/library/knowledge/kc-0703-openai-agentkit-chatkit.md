---
id: kc-0703
type: tool
track: "Elective — Model & Tool Literacy"
topics: [agentkit, chatkit, openai, agent-builder, evals]
source_video: XeIx4S6YvGo
source_channel: "@nateherk"
source_views: "238K"
confidence: high
---
# OpenAI AgentKit (Agent Builder) and ChatKit

**What:** AgentKit is OpenAI's visual, drag-and-drop agent builder, available to
anyone with an OpenAI API account. You place a start/trigger node, an agent node
(name, instructions, model, reasoning effort, output format), plus a small set of
logic/data operations (if/else, while, human approval, transform, set state) and
tools (web search, file search, guardrails, MCP servers, client tools).
ChatKit is its companion for embedding polished, branded chat widgets and
dynamic output "widgets" into your own site with little front-end work.

**Why it matters:** It is the low-friction option for teams already inside the
OpenAI ecosystem: web search and a chat model work with no extra API keys, and
ChatKit removes weeks of front-end effort. Knowing its shape tells you when it is
the right pick versus a general automation platform.

**The moves:**
1. Reach for it when you want rapid deployment, a clean chat/widget UI, and
   built-in evaluation, and your data already lives in OpenAI's ecosystem.
2. Use MCP servers to connect external tools (mail, calendar, drive, or a
   custom workflow), since native non-MCP integrations are limited.
3. Use its eval features (datasets, trace grading, prompt optimization) to test
   and tune agents.

**Watch out for:** No native scheduled/app-event triggers (chat-first; API
firing is possible but not intuitive); OpenAI-only models; cloud-hosted with
OpenAI controlling data location; harder to trace how data moves node-to-node;
pricing not finalized (you pay model usage). It was newly released, so community
resources are thin.

**Original example to invent:** Build a small AgentKit agent for a scenario the
source did not use and narrate the exact friction points (triggers, model choice,
tracing) in your own words.
