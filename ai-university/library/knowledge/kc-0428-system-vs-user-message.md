---
id: kc-0428
type: concept
track: "Track 2 — AI Agents Core"
topics: [agents, system-prompt, user-message, prompting]
source_video: 6DLZK7XDOGo
source_channel: "@nateherk"
source_views: "388K"
confidence: high
---
# System message vs. user message

**What:** An agent takes two distinct kinds of input. The system message (instructions) defines the agent's fixed role, behavior, and tool usage and does not change between interactions. The user message is the actual input that changes every turn.

**Why it matters:** Beginners conflate the two and stuff everything into one prompt. Separating durable instructions from per-turn input is what makes an agent behave consistently while still responding to varied requests.

**The moves:**
1. Put stable behavior — role, rules, which tools exist and when to use them — in the system message.
2. Treat the user message as the changing per-interaction input.
3. Keep the system message constant across turns; let only the user message vary.

**Watch out for:** Putting request-specific details in the system message makes behavior rigid; putting role/rules in the user message makes behavior inconsistent turn to turn.

**Original example to invent:** Source shows a "what is my name" user message against a helpful-assistant system prompt. Writers should invent a different pairing that clearly separates fixed role from varying input.
