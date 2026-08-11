---
id: kc-2104
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [prompt-engineering, image-generation, design, two-step-prompting]
source_video: Tw9HButMNu8
source_channel: "@LiamOttley"
source_views: "285K"
confidence: medium
---
# Two-step design-brief prompting for AI image generation

**What:** A prompting pattern for getting far better results from an image-generation model: instead of describing the image directly, first have a text model expand your rough idea into a detailed design brief, then feed that brief to the image model.

**Why it matters:** Image models reward descriptive specificity. A one-line request yields generic output; a rich brief that specifies layout and visual attributes yields something close to what you pictured.

**The moves:**
1. Tell a text model roughly what you want and ask it to write a thorough design brief — the kind you could hand a human designer as the sole reference.
2. Instruct it to include spacing, typography, sizes, color palette, and style.
3. Take the returned brief and pass it to the image-generation model as the prompt.
4. Iterate: the more descriptive the brief, the closer the output.

**Watch out for:** Every generation costs money and time, so front-load detail rather than re-rolling. A vague brief still produces vague images.

**Original example to invent:** Choose a different asset (e.g. an event poster or product mockup) and show the rough-idea → generated-brief → final-image chain.
