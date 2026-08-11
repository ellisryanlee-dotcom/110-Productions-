---
id: kc-0521
type: concept
track: "Track 1 — Automation Foundations (n8n)"
topics: [http, integrations, nodes, api]
source_video: Fqeo8q8-nJg
source_channel: "@nateherk"
source_views: "293K"
confidence: medium
---
# Native integrations are just pre-packaged HTTP requests

**What:** The built-in integration nodes an automation platform ships (for email, chat, CRMs, search, etc.) are, under the hood, pre-built HTTP requests wrapped in a friendlier UI. The platform packaged the endpoints, authentication, and fields nicely — but it's the same API call you could make yourself.

**Why it matters:** This realization is the unlock that removes your dependence on whatever integrations exist out of the box. Once you see native nodes as convenience wrappers, you know you can reach *any* service — even unsupported ones — by reading its API docs and making the request directly.

**The moves:**
1. Treat the presence of a native node as a nicety, not a requirement.
2. When a tool isn't supported natively, open its API documentation, find the endpoints, and build the request with a generic HTTP node.
3. Handle authentication/headers the request needs (the same things the native node was doing invisibly).
4. Lean on an LLM with the docs pasted in to scaffold the request quickly.

**Watch out for:** If you only ever use native nodes you'll wrongly believe a platform "can't" do something it absolutely can via a raw request. The gap is knowledge of APIs, not a platform limitation.

**Original example to invent:** The source lists several supported tools as examples. Writers should invent a case where someone integrates an unsupported niche service by hand via its documented endpoints.
