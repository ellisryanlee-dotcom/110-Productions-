---
id: kc-1017
type: concept
track: "Elective — Model & Tool Literacy"
topics: [offloading, local-llm, gpu, cpu, vram, performance]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: medium
---
# Offloading: splitting a model between GPU and CPU

**What:** A local model doesn't have to fit entirely in the GPU. Offloading splits its layers so some run on the GPU (stored in VRAM) and some run on the CPU (stored in system RAM). This lets you run a bigger model, or hold a longer conversation, than your VRAM alone allows.

**Why it matters:** It's the escape valve when a model or its growing context won't fit in VRAM. But it comes at a real speed cost — CPU/RAM inference is much slower than GPU — so understanding it explains why responses suddenly bog down.

**The moves:**
1. Prefer to fit everything in the GPU; that's the fast path.
2. If a model is slightly too big, offload a few layers to CPU/RAM to run it at reduced speed.
3. Watch context: prompts and conversation history live in VRAM too, so a long conversation can push a model that just fit into offloading mid-session.
4. Accept the trade-off deliberately — small amounts of offloading hurt performance only a little; large amounts make it painfully slow.

**Watch out for:** When a machine that was fast suddenly slows, offloading (often triggered by a long conversation) is a likely cause. In extreme cases a system can even offload to disk/SSD, which is drastically slower and best avoided.

**Original example to invent:** Describe a scenario where a conversation grows long enough to trigger offloading and the user notices the slowdown — in your own framing, with your own numbers.
