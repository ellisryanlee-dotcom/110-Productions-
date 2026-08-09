---
id: kc-0954
type: how-to
track: "Track 2 — AI Agents Core"
topics: [pydantic-ai, system-prompt, dependencies, context-injection]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K views"
confidence: high
---
# Injecting dynamic values into an agent's system prompt

**What:** Beyond a fixed system prompt, agent frameworks let you add dynamically computed text to the system prompt at call time. In Pydantic AI you register a function (decorated so it augments the system prompt) that receives the run context and returns a string; whatever it returns is appended to the base system prompt. To feed it runtime data, pass that data in as an agent dependency so the function can read it from context.

**Why it matters:** Some context — like a planning/scope document produced earlier in a workflow — belongs in the system prompt (it defines overarching behavior and rules) rather than buried in the conversation history. Dynamic system prompts let each run adapt its rules to fresh inputs without rewriting the base prompt.

**The moves:**
1. Add the runtime value (e.g., the scope document) as a dependency of the agent.
2. Write a dynamic-system-prompt function that reads that value from the run context.
3. Return the text you want appended; the framework concatenates it onto the base system prompt.
4. Reserve the system prompt for durable rules/goals; keep turn-specific data in messages.

**Watch out for:** Anything you inject consumes context budget every call — keep it lean. Decide deliberately whether a piece of context is "behavior" (system prompt) or "conversation" (message history).

**Original example to invent:** The source injected a reasoner-produced scope into a coder agent's prompt. Writers should show a different dynamic injection (e.g., inserting the current user's account tier into a support agent's rules) with their own dependency.
