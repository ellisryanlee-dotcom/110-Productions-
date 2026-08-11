---
id: kc-1106
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [local-llm, ollama, openrouter, provider-config, base-url, embeddings]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K"
confidence: high
---
# Provider-agnostic LLM config via an OpenAI-compatible base URL

**What:** Many providers (a hosted API, a local model server, an aggregator/router) expose the same OpenAI-compatible request format. By overriding just the base URL and API key, you can point the same agent code at any of them — a cloud model, a locally hosted model, or a routed model — without rewriting the agent.

**Why it matters:** It makes your stack portable and lets you mix providers by cost and privacy. You can run reasoning/coding entirely on local models for free, or swap to a hosted model per environment, changing only configuration.

**The moves:**
1. Read provider, base URL, API key, and model from environment variables.
2. Instantiate an OpenAI-style client but override the base URL to the chosen provider.
3. Detect the local case (e.g., a localhost base URL) and skip the API key.
4. Allow the LLM provider and the embeddings provider to be configured separately.

**Watch out for:** Not every provider offers embeddings — you may need one provider for chat and a different one for embeddings. Some local servers don't support token streaming, so you may have to wait for the full output instead of streaming it. If you change the embedding model, its vector dimensions change — update the DB schema to match.

**Original example to invent:** Source demos swapping between a hosted model and a local one. Show the same swap for a different task and a different provider trio, without copying the source's model names.
