---
id: kc-2109
type: how-to
track: "Track 8 — Applied Automations"
topics: [chatbot, no-code, vector-database, api, deployment]
source_video: [KxXUtKejeGY, jCoH82LPgdk]
source_channel: "@LiamOttley"
source_views: ["424K", "645K"]
confidence: high
---
# Building a knowledge chatbot with a no-code builder plus a vector DB

**What:** How to assemble a production-ish knowledge chatbot using a node-based no-code bot builder for the conversation logic and UI, backed by an external vector-database QA service for the hard questions.

**Why it matters:** This is the concrete delivery stack behind the custom-knowledge-chatbot offer, buildable without writing much code, and repeatable across clients.

**The moves:**
1. Build the conversation flow and UI in a node-based bot builder; use variables to capture each user input.
2. Use code blocks to branch on captured variables (e.g. a switch/case) and set personalized response text.
3. Add a native knowledge base for fast, simple answers.
4. For harder questions, call an external vector-DB QA app over its API, passing the user's question and returning the generated answer into a variable.
5. Push captured lead data to a spreadsheet/CRM via a webhook automation.
6. Publish and embed the bot as a web widget (script tag) on the client's site.

**Watch out for:** Add error handling for failed API calls (don't dead-end the user); some builders need code payloads simplified/escaped before an external call works; the native knowledge base is fast but shallow — layer a stronger source behind it.

**Original example to invent:** The source builds a martial-arts lead/booking bot. Build a different flow that captures intent and answers from a knowledge base.
