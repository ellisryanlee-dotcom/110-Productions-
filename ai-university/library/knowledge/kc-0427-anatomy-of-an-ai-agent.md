---
id: kc-0427
type: concept
track: "Track 2 — AI Agents Core"
topics: [agents, llm, memory, tools, architecture]
source_video: 6DLZK7XDOGo
source_channel: "@nateherk"
source_views: "388K"
confidence: high
---
# The anatomy of an AI agent

**What:** An AI agent is best understood as an entity you talk to that has a few core parts: a brain (a large language model), memory (context of the ongoing conversation), instructions (a system prompt defining its role and how it acts), an input (the user's message), tools (which let it take action), and an output it returns. A plain chatbot is this minus tools; adding tools is what turns it into an agent that can act.

**Why it matters:** This mental model demystifies agents and gives beginners a checklist of components to assemble, and a vocabulary for reasoning about why an agent behaves as it does.

**The moves:**
1. Give the agent a brain — a language model that understands instructions and produces responses.
2. Give it memory so it has running context and feels conversational instead of resetting each turn.
3. Give it instructions (system prompt) defining role, behavior, and how/when to use tools.
4. Give it one or more tools so it can take real action, not just chat.
5. Understand the flow: input arrives, the brain plus instructions decide what to do (and which tool), the tool acts, and an output returns.

**Watch out for:** Without tools you have a chatbot, not an agent; without memory the agent forgets everything between turns; without clear instructions it falls back to generic behavior.

**Original example to invent:** Source uses a simple diagram and an email-sending agent. Writers should map the same components onto a different first agent (e.g., a calendar-scheduling agent).
