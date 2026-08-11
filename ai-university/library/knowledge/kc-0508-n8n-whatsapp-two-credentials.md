---
id: kc-0508
type: how-to
track: "Track 6 — Interfaces: Voice & Chat"
topics: [whatsapp, n8n, credentials, meta-api]
source_video: A0OwvNOLNlw
source_channel: "@nateherk"
source_views: "342K"
confidence: high
---
# Connecting n8n to WhatsApp: the two different credential types

**What:** Building a WhatsApp agent in n8n requires two separate credentials created through Meta's developer/business platform, because the *trigger* node (receiving messages) and the *send-message* node (replying) authenticate differently. The trigger needs an app **client ID + client secret**; the send node needs an **access token + business account ID**.

**Why it matters:** This is the single most confusing part of the setup — beginners assume one credential covers the whole flow and get stuck when the send node shows no valid credential. Knowing there are two credential shapes up front prevents that dead end.

**The moves:**
1. In the Meta business/developer console, create a business-type app (choose the app type carefully — it can't be changed after creation) under the correct business portfolio. You may need to verify your account (add a phone/card) before you can create an app.
2. For the **trigger** credential: open the app's basic settings, copy the App ID into the node's client ID field and the App Secret into the client secret field, then save and confirm the connection tests green.
3. For the **send-message** credential: go to the WhatsApp API setup section, pick the provided test number (or connect a real business number), add a recipient number, and generate an access token.
4. Copy the generated access token and the WhatsApp business account ID into the send node's credential, save, and confirm it tests green.

**Watch out for:** App type is permanent — pick business so WhatsApp is available. The trigger and send credentials are not interchangeable. During generation you grant the app permission to manage/access WhatsApp accounts and conversations.

**Original example to invent:** The source configures this for a detailing-business account. Writers should frame the same two-credential setup around a different small business (e.g., a dental office booking assistant).
