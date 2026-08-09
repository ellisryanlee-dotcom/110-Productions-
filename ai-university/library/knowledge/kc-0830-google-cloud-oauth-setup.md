---
id: kc-0830
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [oauth, google-cloud, authentication, credentials, setup]
source_video: Wu67lLD8bB0
source_channel: "@nateherk"
source_views: "205K"
confidence: high
---
# Setting up OAuth for a Google Cloud CLI

**What:** The manual path to authenticate a tool against your Google account: create a
Cloud project, configure the OAuth consent screen, generate a desktop-app client ID,
place the credential where the tool expects it, run the auth login, and enable the APIs
you need.

**Why it matters:** Most "it didn't work" moments with Google-connected tools come from
skipped auth steps. Doing the consent screen, client ID, and per-service API enablement
correctly is what unlocks each capability.

**The moves:**
1. Create a new Google Cloud project and select it.
2. Under APIs & Services, configure the OAuth consent screen (name, audience — internal
   for your own org, or external with test users added).
3. Create credentials → OAuth client ID → choose the desktop-app type; download the
   client secret JSON.
4. Save that JSON to the path the tool expects (ask the agent for the full path if
   unsure).
5. Run the tool's auth login, pick the account, and approve the requested scopes.
6. Enable each Google API (Drive, Gmail, Calendar, Docs, Sheets, Slides, etc.) you want
   to use.

**Watch out for:** Auth can succeed while calls still fail because the specific APIs
aren't enabled on the project — enable them one by one. If a browser tab doesn't open
automatically, have the tool print the auth URL. Reuse a project that already has the
APIs enabled to skip repetition.

**Original example to invent:** Walk through the OAuth setup for a differently named
project and a different subset of enabled APIs.
