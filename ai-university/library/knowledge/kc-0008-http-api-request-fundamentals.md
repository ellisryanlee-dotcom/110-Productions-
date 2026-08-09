---
id: kc-0008
type: concept
track: "Track 1 — Automation Foundations (n8n)"
topics: [http-requests, apis, authentication, curl, status-codes, credentials]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# HTTP request and API fundamentals for no-code workflows

**What:** Any service without a pre-built native integration can still be reached with a generic HTTP request node, which needs the same five things every time: a method (GET to just fetch data, POST to send data and get a result back), an endpoint URL, and up to three kinds of parameters described in that service's documentation — query parameters (URL filters), header parameters (usually authentication), and body parameters (the main payload). A "native integration" in a no-code tool like n8n is nothing more than one of these generic requests pre-wrapped in a friendlier settings form.

**Why it matters:** Once this pattern clicks, literally any documented API becomes usable inside the workflow tool, which removes the platform's built-in integration list as a ceiling on what can be automated.

**The moves:**
1. Find the target API's documentation and, if it provides one, copy its example curl command and use the workflow tool's "import curl" feature to auto-populate the method, URL, headers, and body — this avoids manually re-typing parameter names.
2. Identify the authentication parameter (almost always a header, commonly named "Authorization" with a bearer-token value) and save it once as a reusable generic credential rather than pasting the raw key into every node that needs it.
3. Distinguish required body/query parameters (must be filled to get a valid response) from optional ones (documented defaults, allowed ranges/enums) — start with only the required fields, confirm a working call, then layer in optional tuning parameters one at a time.
4. Swap any hard-coded value in the body/query for a variable pulled from an earlier node once the static call works, so the same request adapts to whatever data is currently flowing through the workflow.
5. Read the response status code to triage failures fast: 2xx means success even without visible confirmation text; 4xx (400/401/403/404) means the request itself was malformed, unauthorized, forbidden, or pointed at a non-existent resource — fixable on your end; 5xx means the failure is on the server's side.

**Watch out for:** A 400 error is very often just malformed JSON in the body (an extra quote, a stray comma) — pasting the exact body and error text into a chat model to ask what's wrong with the JSON is a fast fix. Some endpoints require an extra header beyond authorization (e.g., an API-version header) that isn't part of the curl example's body and will silently cause failures if omitted.

**Original example to invent:** Source walked through a weather API and a web-search API side by side to show a native integration and a raw HTTP request are the same underlying call. Writers should introduce the method/endpoint/params/status-code vocabulary through a different pair of services.
