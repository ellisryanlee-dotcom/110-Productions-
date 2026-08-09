---
id: kc-0728
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, http-request, header-auth, credentials, curl-import]
source_video: Gc03J27xmBc
source_channel: "@nateherk"
source_views: "227K"
confidence: high
---
# Reusable header-auth credentials and building HTTP nodes from cURL in n8n

**What:** Two practices that speed up connecting any API in n8n. First, instead of
pasting an API key as a raw header on each request, store it once as a *Header
Auth* generic credential (header name like `x-api-key` plus the key value), name
it, and reuse it across workflows. Second, when API docs provide a cURL example,
copy it and use "import cURL" in the HTTP Request node to auto-populate method,
endpoint, headers, and body — then just swap in your saved credential and adjust
parameters.

**Why it matters:** Saved credentials mean you set up a service's auth once and
reach for it forever; cURL import removes manual field-by-field setup and reduces
errors. Together they make wiring a new API fast and repeatable.

**The moves:**
1. Create a Header Auth generic credential with the required header name and your
   key; name it after the service.
2. In new HTTP nodes, select that saved credential instead of hardcoding the key.
3. When docs show cURL, copy it and use import cURL to fill the node.
4. Replace the auto-added raw key with your saved header credential and set
   remaining body/query parameters.

**Watch out for:** For bearer-style auth, keep the required space between the
scheme word and the key or the request fails. Some required headers must be an
exact fixed value (e.g., a version header). The import-cURL button can be buggy on
some app versions.

**Original example to invent:** Take a cURL snippet for a different API and
describe how you'd convert it into an HTTP node with a saved header credential.
