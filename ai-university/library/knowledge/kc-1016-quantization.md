---
id: kc-1016
type: concept
track: "Elective — Model & Tool Literacy"
topics: [quantization, local-llm, vram, precision, ollama]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: medium
---
# Quantization: shrinking models to fit your GPU

**What:** Quantization lowers the numeric precision of a model's parameters — from the full 16 bits each down to 8, 4, or 2 bits — making the model much smaller in memory while keeping most of its capability. The parameter count stays the same; each number just carries less precision.

**Why it matters:** Full-precision models are far too large for consumer hardware. Quantization is what makes running a capable model at home possible: a 4-bit version of a large model still outperforms a full-precision small model, because you lose little quality relative to the size saved. It's the single biggest lever for fitting a good model on your GPU.

**The moves:**
1. Understand the levels: FP16 (full size, best quality, slowest); Q8 (half size, near-identical quality); Q4 (quarter size, fast, still strong); Q2 (smallest/fastest but quality drops noticeably).
2. Default to Q4 — the general best balance, and what tools like Ollama pick automatically.
3. Rule of thumb: run the largest model that fits your hardware at Q4, rather than a smaller model at full precision.
4. If you want to experiment, tools let you pick a specific quantization variant by its identifier.

**Watch out for:** Quality loss is gradual until Q2, where it usually falls off. The naming has suffixes (KS/KM/KL) grouping how parameters are handled — mostly ignorable; the number (Q4, Q8) is what matters. Effects vary by model and hardware, so treat the tiers as guidance, not guarantees.

**Original example to invent:** Explain quantization to a newcomer with your own analogy for reduced precision (do not reuse the source's image-compression comparison), then show picking a Q4 model.
