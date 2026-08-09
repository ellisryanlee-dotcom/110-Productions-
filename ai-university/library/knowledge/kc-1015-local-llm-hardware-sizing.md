---
id: kc-1015
type: how-to
track: "Elective — Model & Tool Literacy"
topics: [local-llm, hardware, gpu, vram, parameters]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: medium
---
# Sizing hardware for local LLMs (parameters, VRAM, speed)

**What:** Local models are made of billions of numeric parameters that must be held in memory to run, so the model size you can run is bounded by your GPU's VRAM. This card maps rough parameter sizes to VRAM needs, example GPUs, expected speed, and what each size is actually good for (assuming a Q4 quantization).

**Why it matters:** You can't run any model on any machine. Knowing the size tiers lets you pick a model that fits your hardware, or budget hardware for the capability you need, instead of guessing.

**The moves (rough tiers, Q4):**
1. ~7–8B parameters: ~4–5 GB VRAM; runnable on an 8 GB card; decent for simple chat/summarization but weak at tool-calling.
2. ~14B: ~8–10 GB VRAM; this is roughly where agents start following tool and system-prompt instructions reliably.
3. ~30–34B: ~16–20 GB VRAM (e.g., a 24 GB card, or a Mac with unified memory); the first tier the source found genuinely impressive.
4. ~70B: ~35–40 GB VRAM; usually must be split across two consumer GPUs or run on an enterprise card; closest to matching cloud models.

**Watch out for:** Context (your prompt/conversation) also consumes VRAM, so a long conversation can tip a model that "just fit" into offloading and slow down. Speed depends heavily on the whole machine; expect roughly tens of tokens/sec at smaller sizes down to single digits when splitting a 70B across GPUs. Recommendations date quickly as new models ship — pick the largest that fits at Q4 and test.

**Original example to invent:** Given a specific budget and GPU, reason to a recommended model size and expected experience — your own build, not the source's.
