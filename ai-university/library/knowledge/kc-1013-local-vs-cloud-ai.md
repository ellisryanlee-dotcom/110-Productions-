---
id: kc-1013
type: concept
track: "Elective — Model & Tool Literacy"
topics: [local-ai, cloud-ai, privacy, cost, tradeoffs]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: medium
---
# Local AI vs. cloud AI: what each is good for

**What:** "Local AI" means running your own open-source language models and supporting infrastructure (database, UI, search) on hardware you control, fully offline. "Cloud AI" means paying providers to host the model and services for you via APIs. This card frames when to choose which.

**Why it matters:** The choice is mostly driven by privacy and security requirements. Many businesses in regulated fields (health, finance, real estate) or working with intellectual property will not send sensitive prompts to an outside provider — for them local AI is the only option, and being able to serve those use cases opens real opportunity.

**The moves (advantages of local AI):**
1. Privacy/security — data never leaves your hardware.
2. Fine-tuning — you can further train an open model on your own data to make it a domain expert.
3. Cost — no per-service subscriptions or API bills; you pay for hardware/electricity or one server.
4. Speed — agents can run on the same machine as the infrastructure, avoiding network round-trips.

**Advantages of cloud AI:**
1. Easier setup and less maintenance (no hardware, patches, uptime to manage).
2. Access to the most capable frontier models, which still outperform any model you can self-host.
3. Some features out of the box (built-in memory, web search) you'd otherwise implement yourself.

**Watch out for:** The capability gap between the best cloud and best local models is real but shrinking. Local AI's setup/maintenance disadvantages are the price for its privacy and cost advantages — weigh them against your use case rather than treating one as universally better.

**Original example to invent:** Take two concrete projects — one handling regulated data, one a throwaway prototype — and reason out which belongs local and which belongs cloud, with your own justification.
