---
id: kc-0011
type: how-to
track: "Track 8 — Applied Automations"
topics: [image-generation, video-generation, content-pipeline, base64, api-chaining]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Chained AI image-and-video generation pipeline

**What:** A pattern for turning a short brief into finished visual marketing assets by chaining three API calls: an image-generation model (OpenAI's image API, from a text prompt, or a text prompt plus a reference photo for an "edit" call) returns image data as a base64 string that must be converted to binary before it's a usable file; that binary is then uploaded to a public image-hosting endpoint (e.g., ImgBB) to obtain a plain HTTPS URL, since the next API needs a fetchable link, not raw binary; that URL is finally handed to an image-to-video generation API (e.g., Runway) along with a motion/style prompt, itself a slow job requiring the start/poll pattern before the finished video URL is available.

**Why it matters:** Each provider expects a different input shape (prompt-only, prompt-plus-binary, or prompt-plus-public-URL), so the "upload to get a public link" hop is a non-obvious but necessary bridge — without it, a locally-generated image can never be handed to a service that only accepts URLs.

**The moves:**
1. Call the image model with a clear visual-description prompt (built by an earlier drafting step if the goal is to visualize a piece of written content); for an edit/reference variant, send the source image as multipart/binary form data alongside the prompt rather than as JSON.
2. Convert the returned base64 image data to a binary file using a base64-to-file conversion step before trying to preview, attach, or forward it anywhere.
3. If a downstream API needs a fetchable link rather than raw bytes, upload the binary to a public image-hosting endpoint and capture the returned URL.
4. Pass that URL plus a short motion/style prompt to the video-generation endpoint, then apply the start/poll pattern until its status reports complete.
5. Deliver the final assets (image URL and/or video URL) via whatever channel fits — email, a chat message, or writing them back to a record — rather than assuming any generation step returns something immediately embeddable.

**Watch out for:** Base64 image/video payloads are large and can make a node's output panel feel frozen while it renders — this is usually just payload size, not a failure. Both generation calls are metered per token/second and billed even on failed or unwanted outputs, so testing prompts sparingly and checking current per-image/per-second pricing before batch-running a pipeline avoids surprise cost.

**Original example to invent:** Source built a LinkedIn statistic-graphic generator and a product-photo-to-360-spin-video generator. Writers should chain the same image-then-hosting-then-video pattern around a different asset type, such as an event promo graphic turned into a short teaser clip.
