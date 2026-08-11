---
id: kc-0844
type: how-to
track: "Track 8 — Applied Automations"
topics: [social-posting, blotato, n8n, publishing, automation]
source_video: jBanaNBY-sM
source_channel: "@nateherk"
source_views: "197K"
confidence: high
---
# Publishing media to social platforms programmatically

**What:** A posting capability where an agent uploads a stored media file to a posting
service and publishes it to a target platform (e.g., X, TikTok, Instagram) with a caption —
implemented as near-identical per-platform sub-workflows that differ only in which platform
they target.

**Why it matters:** It closes the loop from "create media" to "it's live," letting one
agent generate an asset and post it hands-free. Building one flow and duplicating it per
platform keeps the system easy to extend and customize.

**The moves:**
1. Capture the file ID of the media to post and the caption text.
2. Ensure the file is shared publicly, since the posting service needs a public file to
   fetch.
3. Upload the file to the posting service and trigger the post to the chosen platform.
4. Duplicate the sub-workflow per platform, changing only the platform setting in the post
   node.

**Watch out for:** Posting fails if the file isn't public first. Prompt the agent about
signature/sign-off text or it may post placeholder text. The posting service is typically a
paid subscription.

**Original example to invent:** Source posted a generated ad to one platform with a short
caption. Writers should show a different asset and platform.
