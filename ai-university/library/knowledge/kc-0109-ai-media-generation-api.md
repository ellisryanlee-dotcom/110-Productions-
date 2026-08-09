---
id: kc-0109
type: how-to
track: "Track 8 — Applied Automations"
topics: [image-generation, video-generation, apis, base64, marketing-automation]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Generating images and video inside a workflow via API

**What:** Modern image APIs (e.g., OpenAI's image model) and video APIs (e.g., Runway's image-to-video) can be called from an automation to produce graphics and clips on demand. A common pipeline: research a topic → write a post → generate a prompt → create an image → optionally animate it → deliver it.

**Why it matters:** This collapses tasks that used to take a designer 20+ minutes into a minute of automation, and because the visuals are generated from researched content they carry real substance (accurate numbers, readable text) rather than filler.

**The moves:**
1. Have an agent turn finished copy into a detailed image prompt.
2. Call the image API (POST); to edit an existing photo, send it as form-data binary plus the prompt and model name.
3. The API returns a base64 string — convert it to binary (a file) so you can attach or post it.
4. To animate: host the image to get a public URL (image APIs that need HTTPS input can't read local binary), then POST it to the video API with a motion prompt, duration, and ratio.
5. Poll the video job until complete, then deliver via email/social.

**Watch out for:** Some providers require account/org verification and billing before the image endpoint works. Watch per-image token cost and rate limits during heavy testing. A required version header or correct parameter types (e.g., integer vs. string) can make or break the call.

**Original example to invent:** The source builds LinkedIn stat-graphics and a spinning product video for cologne/toothpaste. Invent a different applied pipeline (e.g., event-flyer generation) with its own prompt chain and delivery channel.
