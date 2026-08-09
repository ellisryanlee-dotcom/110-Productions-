---
id: kc-0117
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [video-to-website, scroll-animation, frame-extraction, product-page, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Video-to-website scroll animation technique

**What:** A technique for building a "3D-feeling" scroll-driven animated product page from a single short AI-generated product video: generate a start-state and end-state product image with an image model, animate the transition between them with a video-generation model, hand the resulting clip to Claude Code with a skill built for this purpose, and let the agent extract the video into a large sequence of individual frames (using a frame-extraction tool), then build a page that swaps between frames based on scroll position — creating the illusion of controlling a 3D animation by scrolling, without any actual 3D model.

**Why it matters:** This produces the kind of premium, motion-heavy landing page normally associated with expensive agency work, from assets that can be generated cheaply and quickly, using a skill that encodes the whole frame-extraction-to-scroll-mapping technique so it doesn't need to be re-derived each time.

**The moves:**
1. Generate a clean start-frame product image (specific background/lighting constraints help consistency) and a corresponding end-frame image with an image model.
2. Feed both frames to a video-generation model with a prompt describing the desired transition to produce a short animated clip.
3. Hand the clip to Claude Code along with the relevant skill and describe the page's purpose, tone, and layout preferences (e.g., which side of the page the animation should occupy).
4. Let the agent extract the clip into frames and build the scroll-to-frame mapping and supporting page copy/sections; test locally and give specific feedback on any section whose reveal timing feels off.
5. Before deploying, confirm the extracted frame files themselves are included in whatever gets pushed to version control/hosting — the animation logic alone is useless without the actual frame images being deployed alongside it.

**Watch out for:** It's easy for a frames folder to get excluded from a deploy (via a default ignore rule or similar) while the code that references those frames deploys fine — the result is a live site with all the scroll logic working but no visible animation, which is confusing to debug if you don't know to check for missing frame assets first.

**Original example to invent:** The source built this technique around a rotating camera and a blender/juice product. Writers should invent a different product/video pairing (e.g., a watch opening to reveal its mechanism) to illustrate the same generate-frames-map-to-scroll technique.
