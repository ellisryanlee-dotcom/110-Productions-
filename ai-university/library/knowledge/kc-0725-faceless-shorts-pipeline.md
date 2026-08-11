---
id: kc-0725
type: how-to
track: "Track 8 — Applied Automations"
topics: [n8n, faceless-video, shorts, content-automation, media-pipeline]
source_video: Gc03J27xmBc
source_channel: "@nateherk"
source_views: "227K"
confidence: high
---
# Faceless AI shorts factory in n8n: end-to-end pipeline

**What:** A full n8n workflow that generates and publishes faceless AI short-form
videos on autopilot. A Google Sheet of ideas drives it; each run produces one
finished short and uploads it. The stages: read one idea row → generate image
prompts (via an agent so models are swappable) → text-to-image → image-to-video →
generate a sound-effect track → upload/share the audio → merge assets → render a
video template → upload to YouTube → update the sheet → email a notification.

**Why it matters:** It turns a content channel into a background system: with a
schedule trigger you can produce multiple shorts per day without being present.
It's a template for chaining several media-generation APIs into one reliable
render-and-publish flow.

**The moves:**
1. Trigger from a Sheet (manual for testing, schedule for autopilot).
2. Pull one idea and expand its subject list into per-item image prompts.
3. Generate images, then animate each image into a short clip.
4. Generate a matching audio track from the style and make it publicly reachable.
5. Merge everything and POST to a video-template render service.
6. Poll for the finished render, upload it to YouTube (vertical aspect = a Short),
   then mark the row done and notify yourself by email.

**Watch out for:** Async media APIs need wait/poll steps (they aren't instant);
per-run cost adds up across image, video, audio, and render services; different
image-to-video providers trade quality vs speed and can hit rate limits. Save the
workflow frequently while building.

**Original example to invent:** Design a faceless-shorts pipeline for a different
content niche (not the source's), listing each stage and which service you'd pick.
