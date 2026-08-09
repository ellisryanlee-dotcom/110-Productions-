---
id: kc-2008
type: concept
track: "Track 2 — AI Agents Core"
topics: [api, http, get, post, json, integrations]
source_video: [w0H1-b044KY, 5TxSqvPbnWw, Hh2zqaf0Fvg, SeybVD0NMQI]
source_channel: "@LiamOttley"
source_views: "3.6M / 976K / 1M / 663K"
confidence: medium
---
# APIs: how agents and apps talk over the web

**What:** An API (Application Programming Interface) is the mechanism by which software sends a request and gets a response over the internet. Nearly everything you do online is a request/response cycle. Agents interact with services the same way, by calling APIs instead of clicking buttons. The main request types are GET (retrieve data) and POST (send/create data); others include PUT (replace), PATCH (partially update), and DELETE. Beginners mostly need GET and POST.

**Why it matters:** Every agent tool, every no-code integration, and every connection between apps is ultimately an API call. Even "no-code" builders are making these calls under the hood. Understanding the anatomy lets you connect tools that lack native integrations and debug when a call fails.

**The moves (anatomy of a call):**
1. Base URL + endpoint: the address of the specific function you're calling.
2. Method: GET, POST, etc.
3. Headers: metadata — usually authentication (an API key, often sent as an `Authorization: Bearer <key>` header) and content type (e.g., `application/json`).
4. Parameters / body: inputs; POST requests typically carry a JSON body (key–value pairs in braces, keys and string values quoted, comma-separated).
5. Authentication: most APIs require an API key or token; paid ones also need billing/credits on file.
6. Response + status codes: data comes back (often JSON); 200 = success, 404 = not found, 400 = bad request.

**Watch out for:** JSON is strict — a stray line break or missing quote breaks the request (a common bug when piping LLM output into a body; strip newlines or demand clean JSON). Keys/tokens are often shown only once at creation. Malformed or missing auth headers are the most frequent failure.

**Original example to invent:** The source explains APIs with a restaurant waiter / food-ordering analogy. Writers must use a different analogy and their own worked request.
