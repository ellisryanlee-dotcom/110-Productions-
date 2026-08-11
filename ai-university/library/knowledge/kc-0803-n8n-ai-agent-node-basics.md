---
id: kc-0803
type: how-to
track: "Track 2 — AI Agents Core"
topics: [n8n, ai-agent, system-prompt, chat-model, credentials]
source_video: kUpTUEwKnrk
source_channel: "@nateherk"
source_views: "217K"
confidence: high
---
# Configuring a basic AI Agent node in n8n

**What:** Setting up an AI agent step inside a workflow so it reads a specific
input, follows a role you define, and produces a response using a connected chat
model.

**Why it matters:** The agent node is where raw input becomes intelligent output.
Getting its three inputs right — the user prompt source, the system message, and
the model brain — is the minimum to make any agent-driven automation work.

**The moves:**
1. For the user prompt, switch the source from a connected chat trigger to
   "define below," since the trigger here is a webhook, not a chat node.
2. Map the exact field you want the agent to read (e.g., the body value) into the
   prompt, optionally labeling it so the agent knows what it's looking at.
3. Add a system message that states the agent's role and constraints (what to do,
   what format to return, tone rules).
4. Connect a chat model under the agent and attach an API-key credential.
5. Run the step in isolation to confirm the output before wiring the rest.

**Watch out for:** By default the agent looks for input from a chat trigger it
doesn't have; you must redirect it to your real input source or it fails. Keep the
system message specific about output format so downstream nodes get clean data.

**Original example to invent:** Source prompted a humorous "excuse generator."
Writers must define a different agent role and system message.
