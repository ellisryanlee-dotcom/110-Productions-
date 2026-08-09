---
id: kc-0101
type: framework
track: "Track 2 — AI Agents Core"
topics: [ai-agents, agent-anatomy, tools, memory, system-prompt, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# The anatomy of an AI agent (and building your first one)

**What:** An agent has five parts: an input (the incoming message/trigger), a brain (a chosen language model), memory (conversation history), instructions (a system prompt), and tools (integrations it can act through). In a visual builder these map one-to-one onto configurable slots, so you can assemble a working agent by filling each slot.

**Why it matters:** Once you see an agent as these five interchangeable pieces, building one stops being mysterious — you attach a model, give it memory, write instructions, and plug in tools. A simple personal assistant (look up a contact, send an email, create a calendar event) can be assembled in well under an hour.

**The moves:**
1. Add a trigger (e.g., a chat input) so you can talk to the agent.
2. Attach a model as the brain; a multi-model gateway lets you swap models freely.
3. Add memory so it remembers the running conversation.
4. Add tools one at a time; give each an intuitive name and let its description auto-generate.
5. Test with no system prompt first to see how much the model handles unaided, then add instructions to fix what's wrong.
6. Note that each tool call returns the agent to its brain to decide the next move — the loop of think → act → observe repeats until the goal is met.

**Watch out for:** Without instructions the agent may hallucinate data (e.g., inventing an email address) or use the wrong date. Fixes: tell it to look up real data before acting, and inject the current date/time so relative times ("tomorrow") resolve correctly.

**Original example to invent:** The source builds a contacts + email + calendar assistant using fictional celebrity contacts. Build a differently themed assistant (e.g., a study-group coordinator) with your own tool set and sample data.
