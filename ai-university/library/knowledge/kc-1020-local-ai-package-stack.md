---
id: kc-1020
type: tool
track: "Track 1 — Automation Foundations (n8n)"
topics: [local-ai, self-hosting, docker-compose, n8n, supabase, infrastructure]
source_video: [mNcXue7X8H0, V_0dNE-H2gw]
source_channel: "@ColeMedin"
source_views: "590K"
confidence: high
---
# Self-hosted local-AI stacks: everything an agent needs in one Docker package

**What:** Building a private AI agent takes more than a model — you also need a database, a UI, web search, and often monitoring. A curated self-hosted "package" bundles these as Docker containers that run together: workflow automation (n8n), a database (Supabase/Postgres), a model runner (Ollama), a chat UI (Open WebUI), a vector database, private search (SearXNG), a reverse proxy, and observability. An earlier, simpler version of this idea (the n8n self-hosted starter kit) bundles n8n, Ollama, Postgres, and a vector DB.

**Why it matters:** Assembling and wiring these services by hand is the barrier that stops people from doing local AI. A single stack you clone, configure, and start gives you the whole private infrastructure at once, with data persisted so you can tear down and rebuild containers without losing anything.

**The moves:**
1. Install the prerequisites: Docker/Docker Desktop, Git, and Python (for the start script).
2. Clone the repo and configure the `.env` — this is the longest step: encryption keys and JWT secrets (generate random strings), database passwords, and service keys.
3. Start the stack with the command matching your hardware (GPU profile, CPU, or none if running Ollama separately).
4. Trim what you don't need by removing services from the docker-compose file (each idle service still costs RAM).
5. Persist data via volumes so upgrades (tear down, pull latest, restart) keep your workflows and database intact.

**Watch out for:** Set every environment variable before the first start — services that generate default keys on first run won't match values you change later (n8n's encryption key is a classic case). Budget ~8 GB RAM for the full stack. On the starter kit specifically, you must expose the Postgres port and add an embeddings model, which the default config omits.

**Original example to invent:** Walk a newcomer through standing up a trimmed-down stack (say, just n8n + Ollama + database) and confirm each service loads — your own configuration, not the source's exact values.
