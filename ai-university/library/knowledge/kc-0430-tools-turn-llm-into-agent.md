---
id: kc-0430
type: concept
track: "Track 2 — AI Agents Core"
topics: [agents, tools, tool-selection, actions]
source_video: 6DLZK7XDOGo
source_channel: "@nateherk"
source_views: "388K"
confidence: high
---
# Tools are what let an agent take action

**What:** Tools are the capabilities that let a language model do things in the world (send an email, look up data) rather than just talk. With multiple tools available, the agent uses its brain together with its instructions to decide which tool fits the incoming request and how to use it.

**Why it matters:** This is the dividing line between a chatbot and an agent. Adding tools and letting the model choose among them is what produces autonomous, useful behavior.

**The moves:**
1. Give the agent tools mapped to the actions you want it to be able to take.
2. Name each tool clearly and describe what it does so the agent can pick correctly.
3. Let the brain plus instructions interpret the user message and select the right tool for the job.
4. Add more tools over time; a well-instructed agent routes requests to the appropriate one.

**Watch out for:** If tools aren't clearly named and described, the agent can't reliably decide when to use each; ambiguous tools lead to wrong or skipped actions.

**Original example to invent:** Source uses a single email tool expanding to a contact-lookup tool. Writers should invent a different multi-tool agent and show how it routes between tools.
