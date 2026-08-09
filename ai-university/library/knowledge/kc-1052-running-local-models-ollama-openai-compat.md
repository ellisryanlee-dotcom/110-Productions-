---
id: kc-1052
type: how-to
track: "Elective — Model & Tool Literacy"
topics: [local-llms, ollama, openai-compatible, deepseek-r1, distillation]
source_video: uWDocIoiaXE
source_channel: "@ColeMedin"
source_views: "122K views"
confidence: high
---
# Running local models via Ollama's OpenAI-compatible endpoint

**What:** Any framework that speaks the OpenAI API can point at a locally running model server instead of a cloud provider, because the local runtime exposes an OpenAI-compatible endpoint. Swap the base URL to the local host and supply a throwaway API key.

**Why it matters:** This lets you run entirely offline and free, with your data never leaving your machine, while reusing code written for cloud APIs. It's also how you can run small distilled versions of large reasoning models that would otherwise be far too big for consumer hardware.

**The moves:**
1. Install the local model runtime and pull the model you want (including small distilled variants of larger models).
2. In code, branch on a config flag: cloud path uses the hosted API; local path constructs the same client but overrides the base URL to the local server.
3. Set the API key to any placeholder value for the local path — it isn't checked.
4. Run the same agent logic against either backend unchanged.

**Watch out for:** Distilled small models are far weaker than the full model they imitate; results vary a lot by model size. Local runtimes also cap context length low by default (see the Modelfile context-limit fix), which causes hallucination until raised.

**Original example to invent:** Source ran a distilled reasoning model plus a small instruct model locally. Writers should pick a different local model pairing.
