---
id: kc-0456
type: concept
track: "Elective — Model & Tool Literacy"
topics: [model-gateway, api, image-models, video-models, llm-routing]
source_video: BcfjIBd49C8
source_channel: "@nateherk"
source_views: "350K"
confidence: high
---
# Model gateway services: many models behind one API

**What:** Gateway services let you access many underlying models through a single account and API. One kind fronts many text/image/video generation models (pick a text-to-image or image-to-video model and call it); another fronts many language models through a single chat endpoint. You authenticate once and swap models by changing a parameter.

**Why it matters:** Gateways simplify credentials and let you switch or upgrade/downgrade models per task for cost or quality, without integrating each provider separately. They also offer playgrounds to test prompts and see per-generation cost before wiring the API.

**The moves:**
1. Create an account and API key with the gateway.
2. Browse its model catalog and pick the right model for the job (text-to-image, image-to-video, or a specific chat model).
3. Test prompts in the playground to preview results and per-call cost.
4. Call the model's endpoint from your automation with your gateway credential.
5. Swap models to trade cost against quality as needs change.

**Watch out for:** Model choice drives both quality and cost — a premium image model may cost several cents per image while a lighter one costs a fraction; pick deliberately per use case.

**Original example to invent:** Source uses one gateway for images/video and another for the chat model. Writers should invent a different task and justify a specific model pick on cost-vs-quality grounds.
