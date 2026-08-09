---
id: kc-0238
type: concept
track: "Track 1 — Automation Foundations (n8n)"
topics: [api, http-request, webhooks, endpoints, integrations]
source_video: ZHH3sr234zY
source_channel: "@nateherk"
source_views: "523K"
confidence: high
---
# APIs and HTTP requests (and webhooks) in n8n

**What:** An API (application programming interface) is the bridge that lets two
software systems talk. An endpoint is the specific URL/address for a given service or
data. An API call is the request you make; an HTTP request is the mechanism that
carries it over the internet — GET to ask for data, POST to send data. n8n's prebuilt
integration nodes are essentially HTTP requests with the technical work done for you;
you only need the raw HTTP request node when there's no built-in integration.

**Why it matters:** Understanding this lets you connect to almost anything, even
services n8n doesn't natively support. It also demystifies what the nice prebuilt nodes
are doing under the hood, and sets up webhooks — the trigger that lets external events
(a form submission, another app) start your workflow.

**The moves:**
1. For a GET, point the HTTP node at the endpoint and pass parameters (plus any auth
   key), then test to see the returned data.
2. For a POST, send a body (JSON) with the data to create/update; check the response.
3. Read the target service's documentation for endpoints and required parameters/auth.
4. Prefer a built-in integration node when one exists — it's simpler than raw HTTP.
5. To let external events trigger you, use a webhook node with its URL and method.

**Watch out for:** You mostly only need raw HTTP when no integration exists — don't
over-complicate. Scraping a search results page returns messy HTML you must then parse.
Reading docs is unavoidable for custom connections. The source uses a restaurant
analogy (API/endpoint/call/HTTP) — restate abstractly if you reuse it.

**Original example to invent:** Source demoed a weather GET, a search-scrape GET, and a
calendar POST. Writers should use different endpoints to show GET vs. POST vs. webhook.
