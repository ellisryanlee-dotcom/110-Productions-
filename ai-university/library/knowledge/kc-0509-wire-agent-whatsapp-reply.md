---
id: kc-0509
type: how-to
track: "Track 6 — Interfaces: Voice & Chat"
topics: [whatsapp, n8n, ai-agent, message-routing]
source_video: A0OwvNOLNlw
source_channel: "@nateherk"
source_views: "342K"
confidence: high
---
# Wiring an AI agent to read and reply inside a WhatsApp chat

**What:** Once both WhatsApp credentials exist, you connect a trigger → AI agent → send-message chain in n8n so that an incoming WhatsApp message is fed to an agent and the agent's response is sent back to the same number, producing a real back-and-forth conversation.

**Why it matters:** The credentials only establish the pipe; the actual value is an agent that reads user input and returns a useful reply (answering questions, booking meetings, etc.). The two data-mapping steps below are what make the conversation actually work rather than echoing a placeholder.

**The moves:**
1. After the WhatsApp trigger, add an AI agent node and give it a chat model (any provider via a router/model node) as its "brain."
2. Map the **input**: set the agent's user message to "define below" and drag in the incoming message text field (the body of the trigger payload) so the agent sees what the user actually sent.
3. Add a WhatsApp send-message node after the agent. Initially you can hardcode a test string to confirm delivery.
4. Map the **output**: replace the hardcoded text with the agent's response output so whatever the agent generates gets sent back to the user.
5. Test end to end: while the workflow is inactive you must run/execute it so the trigger is actively listening, then message the number and confirm the reply returns.
6. Extend from here by attaching memory, tools, or a CRM to the agent.

**Watch out for:** An inactive workflow only listens while you manually execute it; in production (active) you don't re-trigger each time. Forgetting to map the body field means the agent never sees the user's message; forgetting to map the output means users only ever get your test string.

**Original example to invent:** The source ends by having the agent tell a joke. Writers should invent a purposeful reply flow (e.g., an agent that answers store-hours questions and offers to book an appointment).
