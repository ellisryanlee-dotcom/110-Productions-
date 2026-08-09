---
id: kc-1021
type: pitfall
track: "Track 1 — Automation Foundations (n8n)"
topics: [docker, networking, localhost, host-docker-internal, self-hosting]
source_video: [mNcXue7X8H0, V_0dNE-H2gw]
source_channel: "@ColeMedin"
source_views: "590K"
confidence: high
---
# The localhost trap: addressing services inside a Docker stack

**What:** When services run in containers, how one reaches another depends on where each lives — and "localhost" almost never means what beginners expect. Inside a container, localhost refers to that container itself, not your machine and not a sibling container. This is the single most common configuration mistake in self-hosted AI stacks.

**Why it matters:** Get the hostname wrong and connections silently fail — an agent can't reach the model, the UI can't reach the database. Knowing the three cases makes every credential setup (in n8n, in code, in the UI) straightforward.

**The moves (which hostname to use):**
1. Container reaching another container in the same stack: use the *service name* from the docker-compose file (e.g., the Ollama service is reached as `ollama`, the search service by its service name), because they share a Docker network.
2. Container reaching a program running on your host machine (outside containers): use `host.docker.internal`.
3. A program on your host reaching a container: use `localhost` (or `127.0.0.1`) plus the container's exposed port.
4. Apply the same logic to every service — database, model runner, search — by looking up its service name and port in the compose file.

**Watch out for:** Defaults often assume localhost and are wrong once you're containerized (e.g., a chat UI defaulting its model URL to localhost when it needs the service name or `host.docker.internal`). A service must also expose its port in the compose file to be reachable at all — the starter kit famously ships with Postgres's port unexposed.

**Original example to invent:** Diagram a two-container setup and label which hostname each side uses to reach the other, plus the host-to-container case — your own diagram.
