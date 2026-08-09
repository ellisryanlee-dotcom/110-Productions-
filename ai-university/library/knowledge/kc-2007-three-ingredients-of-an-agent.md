---
id: kc-2007
type: framework
track: "Track 2 — AI Agents Core"
topics: [agent-architecture, prompt, knowledge, tools, memory]
source_video: [w0H1-b044KY, Hh2zqaf0Fvg]
source_channel: "@LiamOttley"
source_views: "3.6M / 1M"
confidence: medium
---
# The building blocks of an agent: prompt, knowledge, tools

**What:** An agent can be described by five parts — a model ("brain"), a prompt, memory, optional external knowledge, and tools — but the builder really only controls three of them: (1) prompting (natural-language instructions that define behavior), (2) knowledge (documents/data added so the agent can answer beyond the model's training cut-off), and (3) tools/actions (functions that let it take actions in the world). The model is easily swapped and top models are broadly comparable; short-term memory is handled automatically by most platforms.

**Why it matters:** Reducing an agent to three controllable ingredients makes it buildable by non-coders and gives a checklist for design: decide the behavior (prompt), what private/current data it needs (knowledge), and what actions it must perform (tools). Different mixes of these three produce every kind of agent.

**The moves:**
1. Write the prompt: define the agent's role, task, constraints, tone, and when to use each tool.
2. Add knowledge only if the agent must reference private, domain-specific, or post-cutoff information (upload documents/text; numeric/spreadsheet data is handled poorly — prefer text).
3. Attach tools for any action or live data lookup the task requires.
4. Pick a model balancing capability, speed, and cost; rely on default memory for conversational context.

**Watch out for:** Only the prompt is strictly required — knowledge and tools are optional and add cost/latency, so include them only when they earn their place. Knowledge bases of purely numeric data perform poorly. Vague prompts are the most common failure point.

**Original example to invent:** The source uses a cooking/"ingredients" analogy. Writers should convey the "three controllable parts" idea with a different framing and a fresh sample agent.
