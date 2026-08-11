---
id: kc-0457
type: how-to
track: "Track 8 — Applied Automations"
topics: [n8n, file-hosting, permissions, google-drive, public-url]
source_video: BcfjIBd49C8
source_channel: "@nateherk"
source_views: "350K"
confidence: high
---
# Make generated files publicly accessible for downstream tools

**What:** When a later service (like a render service) must fetch a file by URL, a generated asset has to be publicly reachable. The pattern: upload the file to storage, capture its ID, then set a permission making it readable by anyone, yielding a public URL the next tool can access.

**Why it matters:** Rendering and publishing services often can't reach files sitting privately in your pipeline; without a public URL the downstream step fails.

**The moves:**
1. Upload the generated file (e.g., an audio clip) to cloud storage, setting a filename.
2. Capture the returned file ID.
3. Add a permission using that ID so anyone can read the file.
4. Pass the resulting public URL to the downstream service.

**Watch out for:** Public-read means anyone with the link can access the file — fine for disposable render inputs, but don't do this with sensitive assets. Forgetting the permission step is a common cause of downstream fetch failures.

**Original example to invent:** Source uploads generated audio to Drive and shares it. Writers should invent a different asset type and downstream consumer that needs a public URL.
