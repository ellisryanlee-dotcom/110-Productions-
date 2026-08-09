---
id: kc-0842
type: how-to
track: "Track 8 — Applied Automations"
topics: [n8n, image-generation, video-generation, polling, media, fal]
source_video: jBanaNBY-sM
source_channel: "@nateherk"
source_views: "197K"
confidence: high
---
# Building a media-generation tool chain in n8n

**What:** A set of automation tools that generate and transform media on request: create
an image from a prompt, edit an existing image, turn an image into a video, or create a
video from text — each hitting a generation API, then delivering the file to the user and
saving it to storage. Video generation uses a polling loop to wait for the render.

**Why it matters:** It lets an agent produce finished creative assets (ads, B-roll, edited
images) end to end. The polling pattern is the key reliability piece: video renders aren't
instant, so the workflow must repeatedly check status until done before proceeding.

**The moves:**
1. For image creation: send the prompt to an image model, convert the returned URL to a
   binary file, then send it to the user and save it to a storage folder.
2. For image editing: first download the source image by ID, then pass it plus the edit
   prompt to the image model.
3. For video: pass the prompt (and, for image-to-video, the downloaded source) to a video
   model, then poll for completion, download, deliver, and store.
4. Let the calling agent supply the creative prompt; keep the file plumbing in the
   sub-workflow.

**Watch out for:** Video pricing differs for text-to-video vs image-to-video and for
audio on vs off, and is often billed per second — budget accordingly. Faster/cheaper video
tiers trade some quality. Without a polling loop the workflow proceeds before the render
finishes.

**Original example to invent:** Source made a speaker advertisement. Writers should design
a different media-generation use case.
