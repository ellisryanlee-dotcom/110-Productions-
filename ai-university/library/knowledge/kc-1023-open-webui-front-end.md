---
id: kc-1023
type: how-to
track: "Track 6 — Interfaces: Voice & Chat"
topics: [open-webui, chat-interface, local-ai, n8n, webhook, front-end]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: high
---
# Open WebUI as a chat front end for local models and custom agents

**What:** Open WebUI is a self-hosted, ChatGPT-like interface. Out of the box it lets you chat with any local model you've pulled (with conversation history, titles, tags). Its "functions" feature also lets you plug in a custom agent — for example an n8n workflow or a Python API — so you get a polished chat UI for an agent you built yourself.

**Why it matters:** It gives your local stack a real interface for free, and it's how you test agents as you build them without writing a front end. Connecting a custom agent means users chat in a familiar UI while your workflow does the work behind it.

**The moves:**
1. Point Open WebUI at your model runner (use the correct container hostname, not localhost) and refresh so models load.
2. To connect a custom agent, import the connector "function" and set its values: your agent's URL (by container service name/port), a bearer token, and the input/output field names.
3. In the agent, expose a webhook endpoint (POST, with a custom path) and protect it with header auth matching that bearer token; return the reply via a respond-to-webhook node.
4. Handle the fact that the UI calls your agent multiple times per message — once for the real answer, plus extra calls to generate the conversation title and tags.
5. Detect those extra calls (the UI prefixes their prompt with a marker) and route them to a tiny/cheap model instead of your main agent.

**Watch out for:** The input/output field names in the connector must exactly match what your agent expects and returns. After changing the model URL, do a full page refresh or model calls error. The workflow must be active for its production webhook URL to work.

**Original example to invent:** Connect a simple custom agent to Open WebUI and show a message flowing through, plus the separate title/tag calls being routed to a smaller model — your own agent.
