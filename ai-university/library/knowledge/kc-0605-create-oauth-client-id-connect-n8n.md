---
id: kc-0605
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, google, oauth, client-id, redirect-uri, credentials]
source_video: 3Ai1EPznlAc
source_channel: "@nateherk"
source_views: "257K"
confidence: high
---
# Create an OAuth client ID and connect it to n8n

**What:** With the consent screen in place, you create an OAuth client ID of type
"web application" in Google Cloud, register n8n's redirect URI on it, then copy the
resulting client ID and secret back into n8n's Google credential and sign in.

**Why it matters:** The client ID + secret + registered redirect URI are what let
n8n complete the OAuth handshake with Google. The redirect URI must match exactly or
the sign-in loop fails.

**The moves:**
1. In n8n, start a new Google credential and copy the OAuth redirect URL it shows.
2. In Google Cloud → APIs & Services → Credentials, create credentials → OAuth
   client ID → Web application.
3. Paste n8n's redirect URL into the authorized redirect URIs, then create.
4. Copy the generated client ID and client secret into the matching fields in n8n.
5. Click sign in with Google, choose the account you added as a test user, and grant
   the requested access; the credential turns green when connected.

**Watch out for:** The redirect URI has to be the exact one n8n gives you. You can
reopen the client in Google Cloud anytime to re-copy the ID and secret if you need
them for another credential. Don't paste secrets anywhere public.

**Original example to invent:** Source connected Google Drive first. Writers should
demo the handshake on a different first service and call out the redirect-URI
mismatch as the classic failure.
