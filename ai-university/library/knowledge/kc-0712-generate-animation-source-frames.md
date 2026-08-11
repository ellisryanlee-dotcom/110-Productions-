---
id: kc-0712
type: how-to
track: "Elective — Model & Tool Literacy"
topics: [nano-banana, kling, image-to-video, image-models, prompting]
source_video: q0TgUtj6vIs
source_channel: "@nateherk"
source_views: "231K"
confidence: high
---
# Generate the source animation: start/end frames plus image-to-video

**What:** How to create the short clip that becomes a scroll animation. Use a
current image model (the demo used Nano Banana 2, accessed via an aggregator for
speed/cost) to make a clean *start frame* and *end frame* of the product — e.g.,
a studio-grade shot on a plain black background, no shadows/hands/reflections —
by generating the first image, then feeding it back as input with a modified
prompt for the second. Then use an image-to-video model (the demo used Kling)
with both frames and a motion prompt to animate between them. You can have an LLM
write the video prompt from the two frames.

**Why it matters:** Clean, consistent start/end frames on a neutral background are
what let the later frame-on-scroll effect blend into a dark webpage. Getting the
inputs right up front avoids messy animation output.

**The moves:**
1. Generate a start frame with a precise studio-style prompt and neutral
   background.
2. Feed that image back in with a tweaked prompt to get a matching end frame.
3. Give both frames to an image-to-video model with a motion description.
4. Optionally have an LLM draft the motion prompt from the two frames.
5. Reverse start/end to get the opposite motion (e.g., closing instead of
   opening).

**Watch out for:** AI video results are inconsistent — expect to regenerate;
specify constraints (no hands/shadows/reflections) to keep frames clean; pick the
image-to-video model by quality/speed for your case.

**Original example to invent:** Choose a different product and write the exact
start-frame and end-frame prompts plus the motion prompt you'd use.
