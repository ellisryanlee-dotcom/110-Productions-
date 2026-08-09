---
id: kc-1024
type: how-to
track: "Track 2 — AI Agents Core"
topics: [n8n, local-ai, ollama, postgres-memory, agent-tools, no-code]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: high
---
# Building a fully local AI agent in n8n

**What:** A no-code agent that runs entirely on your own infrastructure: n8n orchestrates it, a local model (via Ollama) is the brain, Postgres/Supabase stores conversation memory, and a self-hosted search service acts as a tool. Nothing leaves your machine.

**Why it matters:** It shows that "local" doesn't mean "no tools or memory" — you can assemble a capable agent from self-hosted parts. The key skill is knowing how to connect each local service, which generalizes to adding any other service (vector DB, knowledge graph) the same way.

**The moves:**
1. Start with a chat trigger and an agent node.
2. Attach a local chat model: create Ollama credentials using the right hostname (the `ollama` service name inside the stack, or `host.docker.internal` if running it on the host) and its default port; select a pulled model.
3. Attach memory: Postgres credentials pointing at the database service (host = the DB service name, default port, database/user, and your configured password); n8n auto-creates the memory table.
4. Add tools — e.g., a web-search tool that calls your self-hosted search service and returns cleaned page content.
5. Test in the chat widget, then optionally expose it via webhook to connect to a UI.

**Watch out for:** The Postgres credential is the fiddliest — use the database service name as host and the transaction-pooler/default port, and get the password from your env. Small local models handle simple chat but need ~14B+ to use tools reliably. Every service is reachable by its compose service name because they share a network.

**Original example to invent:** Build a local n8n agent with memory and one tool and show a multi-turn conversation that uses the tool — your own tool and prompts.
