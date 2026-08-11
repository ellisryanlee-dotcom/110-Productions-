---
id: kc-0104
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [apis, http-request, curl, json, credentials, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Setting up API calls with the HTTP request node

**What:** An API is how two systems exchange data. When a service has no native integration in your automation tool, you reach it with a raw HTTP request. Any request is defined by five things: the method (usually GET to retrieve, POST to send data), the endpoint URL, and three parameter groups — query, header, and body.

**Why it matters:** Native integrations are just pre-wrapped HTTP requests. The moment you understand how to build a request yourself, you can connect an agent to virtually anything that publishes API docs, which removes the ceiling on what your automations can do.

**The moves:**
1. Check whether a native integration exists; if not, use the HTTP request node.
2. In the service's API reference, copy the cURL example and import it — this auto-fills method, endpoint, headers, and body.
3. Set authentication: most APIs use a header with an authorization key (commonly a bearer token). Save it as a reusable credential so you don't paste the key each time.
4. Fill body/query parameters as needed; these are the "filters and levers" that shape what you get back.
5. Make values dynamic by replacing hard-coded text with variables (or the model-filled placeholder for agent tools).
6. Read JSON in and out — it's just key/value pairs.

**Watch out for:** Keep API keys secret (a leaked key spends your credits). Copy cURL, not the Python snippet. Query params filter a request, headers authorize it, body sends data — mixing these up is the classic beginner error.

**Original example to invent:** The source wires up a weather API (native vs. HTTP side by side) and a search API. Use a different public API (e.g., a currency or public-holiday API) to show the same GET/POST and cURL-import flow.
