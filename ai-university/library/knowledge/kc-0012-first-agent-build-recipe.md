---
id: kc-0012
type: how-to
track: "Track 2 — AI Agents Core"
topics: [ai-agent-basics, system-prompt, tool-calling, memory, first-build]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# First agent build: brain, memory, tools, and reactive fixes

**What:** The minimum recipe for a working tool-using n8n agent: a chat-triggered agent node connected to a chat model (its "brain"), a short-term memory module keyed to the conversation, and one or more tools wired to outside systems (a lookup source, a send-action, a create-action), with the model allowed to auto-fill each tool's parameters from the conversation. The system prompt can start completely empty ("you are a helpful assistant") and still produce correct tool calls for simple requests; specific fixes get added only once a specific wrong behavior is observed.

**Why it matters:** Seeing how much correct behavior an agent gets right with zero prompting demonstrates that tool naming and description quality does most of the initial work, and that system-prompt writing is best treated as a small number of targeted patches rather than an exhaustive spec written in advance.

**The moves:**
1. Connect a chat trigger to an agent node, give it a chat model, and add a basic short-term memory module before adding any tools — confirm the agent can hold a simple back-and-forth first.
2. Add one tool at a time (e.g., a lookup source, then a send-action, then a create-action), each with an intuitive name and either an auto-generated or one-line manual description, and test a request that should use only that tool before adding the next.
3. When a tool call is filled in wrong (invented contact info, a stale or wrong date, an incorrect sign-off), add exactly one short corrective line to the system prompt addressing that specific failure — such as an instruction to always look up a real identifier in a lookup tool before using it downstream, or to reference the current date/time via a live expression rather than letting the model guess a date.
4. Chain multi-step requests (look someone up, then act on their info) only after each individual tool works alone — multi-tool requests test whether the model sequences correctly once every piece already works.
5. Reset/clear the conversation memory when testing a fresh scenario so earlier turns don't leak unrelated context into the next test.

**Watch out for:** Without an explicit instruction never to fabricate a missing identifier (like an email address or contact ID), the model will often invent a plausible-looking one rather than admitting it doesn't have the data — this is one of the most common first fixes needed. Forgetting to hand the model the current date/time as a live expression causes any relative date request ("tonight," "tomorrow") to resolve to a stale or arbitrary date.

**Original example to invent:** Source built a personal assistant with a contacts-lookup tool, an email-send tool, and a calendar-create tool, using fictional contacts. Writers should build the same brain-memory-tools recipe around a different small agent, such as an internal IT-ticket assistant with a knowledge lookup and a ticket-creation tool.
