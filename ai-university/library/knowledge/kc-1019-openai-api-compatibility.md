---
id: kc-1019
type: concept
track: "Elective — Model & Tool Literacy"
topics: [openai-compatibility, chat-completions, base-url, providers, ollama]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: high
---
# OpenAI API compatibility: swap LLM providers by changing one setting

**What:** OpenAI's chat-completions API has become a de-facto standard for talking to language models. Many providers — Ollama (locally), and various cloud services — implement the same endpoints and response shape. Because of that, you can point the same client code at a different provider just by changing the base URL (and API key), and everything else stays identical.

**Why it matters:** It means turning an existing cloud agent into a fully local one is nearly free — no rewrite. The same standard also lets you move between cloud providers freely. This is what makes "take your current agent and make it private/offline" a realistic, low-effort change.

**The moves:**
1. Build against an OpenAI-style client (directly, or via a framework that supports OpenAI compatibility).
2. To target a local model, change the base URL to your local Ollama endpoint and set the model to one you've pulled.
3. Set the API key to any placeholder for local use — Ollama needs no real auth unless you configure it.
4. Call the same chat-completions method and read the response the same way (content, token usage) regardless of provider.
5. Swap providers later by editing only the base URL / key / model.

**Watch out for:** Some providers want a slight path difference (e.g., a version suffix on the base URL). Inside containers, use the correct hostname for the endpoint, not localhost (see container-networking card). The endpoint and response format are the same; only configuration changes.

**Original example to invent:** Show one script running against a cloud model and then a local model with only config changed, emphasizing the code stayed the same — using your own prompt.
