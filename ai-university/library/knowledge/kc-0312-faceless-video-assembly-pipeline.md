---
id: kc-0312
type: framework
track: "Track 8 — Applied Automations"
topics: [video-generation, image-to-video, text-to-speech, rendering, n8n]
source_video: ldETapkr8Hg
source_channel: "@nateherk"
source_views: "898K"
confidence: high
---
# Assembling a short faceless video from a single topic

**What:** A pipeline that turns one topic string into a finished narrated clip by
decomposing it into scenes and building each modality in parallel: a story agent
splits the topic into N coherent parts; each part becomes an image; each image
becomes a short video clip; each scene gets a matching sound-effect track; then a
render service stitches clips plus audio into one video.

**Why it matters:** It shows the general shape of any multi-stage generative
media build — decompose, fan out per scene, generate each layer, then merge — which
generalizes far beyond video.

**The moves:**
1. A structuring agent takes the topic and outputs N ordered scene descriptions,
   using a structured-output parser to force the parts.
2. Split the single multi-part item into N separate items so each scene processes
   independently.
3. Generate an image per scene (a cheaper image model is fine here).
4. Convert each image to a short video clip via an image-to-video model, reusing
   the scene prompt for motion guidance.
5. Generate a per-scene sound effect via a text-to-audio service.
6. Merge video+audio per scene, then send all layers to a render/templating
   service that composites the final clip; download and deliver it.

**Watch out for:** Each generation step is async — apply the wait/polling discipline
(kc-0310). Character/subject consistency across clips is imperfect and needs
prompt tuning. Costs stack across image, video, audio, and render stages.

**Original example to invent:** Source made a beaver-building-a-house clip. Writers
must invent an entirely different multi-scene subject.
