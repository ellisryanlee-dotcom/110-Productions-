---
id: kc-0606
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, google, apis, enable-api, credentials, reuse]
source_video: 3Ai1EPznlAc
source_channel: "@nateherk"
source_views: "257K"
confidence: high
---
# Enable each Google API you use, and reuse one client for all of them

**What:** Connecting the credential is not enough — for each Google service you want
to touch, you must also enable that specific API in the Cloud project's "Enabled APIs
& Services" library (Drive API, Gmail API, Docs API, Sheets API, etc.). The same
OAuth client ID and secret can be reused across every Google node; new services just
need their API switched on and a sign-in.

**Why it matters:** A green, connected credential that returns no data is almost
always a not-enabled API. Understanding that credentials (one client) and enabled
APIs (per service) are two separate switches saves hours of confusion.

**The moves:**
1. After connecting a service, go to Enabled APIs & Services → search for that API
   (e.g., "Google Drive API") → Enable.
2. Return to n8n and refresh; data should now flow.
3. For each additional Google service, create a new credential in n8n, reuse the same
   client ID/secret (or just sign in), then enable that service's API in the console.
4. Repeat the enable step for every new Google node type you add.

**Watch out for:** The most common beginner failure is a connected credential with
no results because the API for that service was never enabled. Each service is its
own enable toggle even though they share one OAuth client.

**Original example to invent:** Source enabled Drive, then Gmail, then Docs. Writers
should demonstrate with a different mix of services and explicitly show the
"connected but empty" symptom resolving after enabling the API.
