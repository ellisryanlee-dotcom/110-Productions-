---
id: kc-0458
type: how-to
track: "Track 8 — Applied Automations"
topics: [n8n, rendering, creatomate, templates, video-assembly]
source_video: BcfjIBd49C8
source_channel: "@nateherk"
source_views: "350K"
confidence: high
---
# Assemble a final video from a template service

**What:** A rendering service lets you define a reusable video template (fixed duration with slots for a set number of video and audio tracks) and then, via API, fill those slots with your generated media to produce one combined video. You send the template ID plus the media URLs and it renders the finished file.

**Why it matters:** It cleanly separates layout (the template) from content (the media), so the automation just supplies assets each run and gets back a consistently structured video — no manual editing.

**The moves:**
1. Build a template with slots for the expected number of video and audio tracks.
2. Aggregate your per-item media so each slot has a corresponding URL.
3. Call the render API with your template ID and API key, mapping media URLs into the slots.
4. Because rendering is async, poll for completion, then download the finished video by its URL.

**Watch out for:** The number and order of media must match the template's slots. Rendering takes time, so use the polling pattern rather than fetching immediately. Some services meter by render credits — factor that into cost.

**Original example to invent:** Source renders four 5-second clips plus four audio tracks into a 20-second video. Writers should invent a different template structure and media mapping.
