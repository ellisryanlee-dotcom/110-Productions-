---
id: kc-0520
type: concept
track: "Track 1 — Automation Foundations (n8n)"
topics: [json, apis, http, webhooks, error-handling]
source_video: Fqeo8q8-nJg
source_channel: "@nateherk"
source_views: "293K"
confidence: medium
---
# The core building blocks every workflow rests on

**What:** Four foundational skills that underpin almost everything in automation: (1) **JSON and data types** — the structured key/value language your data travels in; (2) **APIs and HTTP requests** — how data moves between tools; (3) **webhooks** — inbound triggers where another tool reaches out to your workflow on a real-time event; and (4) **logic and error handling** — if-conditions, loops, routing, and what a workflow does when it fails.

**Why it matters:** Everything in an automation platform reduces to data coming in and data going out. Once you can read and navigate JSON, make HTTP requests, receive webhooks, and control flow/errors, the platform stops being intimidating and you can connect to anything — not just the pre-built integrations.

**The moves:**
1. Learn to read JSON as simple key/value pairs so you always know what data you actually have to work with.
2. Learn APIs/HTTP so you can read documentation, hit endpoints, and handle headers/authentication — this is the highest-leverage skill because it removes the ceiling of built-in nodes.
3. Learn webhooks to trigger workflows from real-world events (a new email, a form submission, a chat message).
4. Learn logic and error handling: if-nodes, loops, routing data in different directions, and controlling error behavior so workflows are stable and predictable.
5. Pro tip: hand an LLM the API documentation for any tool and have it help construct the request.

**Watch out for:** Without APIs/HTTP you're permanently limited to whatever integrations exist out of the box. The intimidation is mostly the vocabulary (headers, authentication) — get past that and it clicks.

**Original example to invent:** The source compares JSON to product attributes on a shopping page. Writers should invent a different plain-language JSON analogy and a concrete API/webhook pairing (e.g., a webhook from a booking tool triggering a CRM update via HTTP).
