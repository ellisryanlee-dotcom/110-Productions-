---
id: kc-0309
type: how-to
track: "Track 8 — Applied Automations"
topics: [image-generation, image-editing, http-request, n8n, openai-images]
source_video: ldETapkr8Hg
source_channel: "@nateherk"
source_views: "898K"
confidence: high
---
# Generating and editing images via an image API inside n8n

**What:** A two-step pattern for programmatic images. To create: a prompt-writer
agent expands the user request into a rich, structured image prompt, then an HTTP
request hits the image-generation endpoint. To edit: you send the original image
plus an edit instruction to the edit endpoint, which returns a modified version
that stays visually consistent with the source.

**Why it matters:** This is the backbone of any automated design/asset pipeline —
flyers, social graphics, product mockups — with no human in the loop.

**The moves:**
1. Feed the user's request to a prompt agent whose job is to output a descriptive
   prompt (main subject, background, style, extra details).
2. POST that prompt to the generation endpoint; the response is a large base64
   JSON string, not a file.
3. Convert that base64 field to binary with a convert-to-file node so it becomes an
   actual image.
4. To edit, retrieve the original image (as binary) and POST it with an edit
   instruction to the edit endpoint; convert the returned base64 again.
5. Branch the binary: send it to the user and also persist it (see the asset-log
   card).

**Watch out for:** The API returns base64, so the convert-to-file step is
mandatory. Editing requires sending the source image in, which is what keeps the
edit consistent with the original.

**Original example to invent:** Source made a cat-food flyer and edited it to look
more realistic. Writers must invent an unrelated create-then-edit demo.
