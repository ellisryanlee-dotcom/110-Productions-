---
id: kc-0604
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, google, oauth, credentials, setup]
source_video: 3Ai1EPznlAc
source_channel: "@nateherk"
source_views: "257K"
confidence: high
---
# Set up a Google Cloud project and OAuth consent screen for n8n

**What:** Before n8n can talk to any Google app, you create a Google Cloud project
and configure an OAuth consent screen — the permission layer that tells Google your
automation is allowed to access your Google data. During testing you add yourself as
an authorized test user rather than publishing the app.

**Why it matters:** This is the one-time foundation that every Google node
(Drive, Gmail, Docs, Sheets, Slides) depends on. Get it right once and connecting
each additional Google service later becomes trivial.

**The moves:**
1. In the Google Cloud console, create a new project and select it (confirm the
   correct project is active in the top bar).
2. Open APIs & Services → OAuth consent screen and create it; give it a name and a
   support email.
3. You can leave scopes at their defaults for a basic setup and continue.
4. Add your own Google account as a test user so it's allowed through, then save.

**Watch out for:** If the active project in the top bar is wrong, you'll configure
the wrong environment. If you don't add yourself as a test user (and haven't
published the app), sign-in will be blocked. Scopes and extra consent-screen detail
aren't required for a first working connection.

**Original example to invent:** Source named its project/consent screen "demo."
Writers should walk a differently named project and note where a beginner typically
gets stuck (the active-project selector).
