---
id: kc-0434
type: how-to
track: "Track 2 — AI Agents Core"
topics: [agents, system-prompt, prompting, markdown]
source_video: 6DLZK7XDOGo
source_channel: "@nateherk"
source_views: "388K"
confidence: high
---
# Draft agent system prompts with a language model

**What:** Rather than writing an agent's system message from scratch, describe the agent's job to a language model and have it generate a well-structured system prompt — typically in markdown with clear sections (overview, context, instructions, tools, examples, procedure, notes).

**Why it matters:** A structured, sectioned prompt is easier for both you and the agent to read, and letting a model draft it speeds up building and produces more complete instructions than a hasty hand-written one.

**The moves:**
1. Describe the agent's purpose and its available tools to a language model.
2. Have it output the system prompt in markdown with distinct sections.
3. Paste the generated prompt into the agent's system message.
4. When you add a new tool later, ask the model to revise the existing prompt to include it rather than rewriting from zero.

**Watch out for:** Generated prompts still need review — verify the tool descriptions and rules match your actual setup, and refine details like sign-offs or edge-case behavior.

**Original example to invent:** Source uses a helper prompt-writer to spec an email agent. Writers should show generating a structured prompt for a different agent and then extending it for an added tool.
