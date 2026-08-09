---
id: kc-0105
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [apis, debugging, http-status-codes, error-handling]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Reading HTTP status codes to debug API calls

**What:** When an API request returns, its status code tells you what happened. 200-range means success (data came back). 400-range means you made a mistake in the request. 500-range means the server itself failed — not your fault.

**Why it matters:** Knowing which side is at fault saves hours. If you assume a 500 is your bug, you'll rewrite a perfectly good request while the real problem is on the provider's end. Reading the actual error message is the fastest path to a fix.

**The moves:**
1. Treat any 200 (or returned data) as success.
2. On a 400 (bad request), suspect malformed JSON — a stray comma or extra quote — or a wrong parameter type; a language model can spot the JSON error if you paste it the payload and message.
3. On a 401 (unauthorized), fix your API key.
4. On a 403 (forbidden), your account likely lacks access to that resource.
5. On a 404 (not found), check the endpoint URL for typos.
6. On a 500, wait or retry — the server is broken, so stop editing your request.

**Watch out for:** A node can turn green while a tool inside it silently failed (e.g., an auth error handled gracefully) — a green run is not proof the action worked. Also watch rate limits: too many requests per minute can fail even a correct call.

**Original example to invent:** The source triggers a 400 by sending doubled quotes to a search API. Construct your own broken-then-fixed request against a different API to demonstrate reading and resolving each status class.
