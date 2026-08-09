---
id: kc-0431
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, agents, email, no-code, credentials]
source_video: 6DLZK7XDOGo
source_channel: "@nateherk"
source_views: "388K"
confidence: high
---
# Build a no-code email agent in n8n

**What:** A step-by-step assembly of a working email-sending agent in a no-code automation platform: a chat trigger for input, an agent node, a language-model brain, memory, and an email tool — configured so you can chat with it and have it send emails on your behalf.

**Why it matters:** It's a fast, concrete first build that makes the abstract agent components tangible and shows how quickly a useful agent can be spun up.

**The moves:**
1. Add an agent node; connect a chat trigger so you can type messages to it.
2. Add a language-model node as the brain and connect a model provider credential (an API key); ensure the provider account has funds or you'll get an insufficient-funds error.
3. Add a memory component and confirm recall with a quick multi-turn test.
4. Add an email tool, connect the mail-provider credential, and set the email body type appropriately.
5. Write a system message defining the agent's role and when to use the email tool.
6. Test by asking it to send an email and verify it arrives.

**Watch out for:** Missing or unfunded provider credentials are the most common blocker; the default sign-off/footer behavior may need to be turned off or specified in the system prompt.

**Original example to invent:** Source builds an email agent that messages a specific address. Writers should build a different no-code agent (e.g., one that logs a request to a spreadsheet) using the same component sequence.
