---
id: kc-0228
type: how-to
track: "Track 2 — AI Agents Core"
topics: [vps, hosting, docker, deployment, always-on]
source_video: gb5TlGw6Uks
source_channel: "@nateherk"
source_views: "336K"
confidence: high
---
# Running an always-on agent on a VPS

**What:** How to host a personal agent on a virtual private server (a rented cloud
computer you SSH into) so it runs 24/7 independent of your laptop. Two install styles:
directly on the server's root, or inside a Docker container (often a one-click
install). The source uses a hosting provider with a one-click deploy.

**Why it matters:** A personal on-the-go agent needs to be awake when your laptop is
closed. A VPS provides that, and the container approach lets you run several isolated
agents on one server, each with its own memory, tools, and keys.

**The moves:**
1. Choose a VPS plan (CPU/RAM/bandwidth); you can scale up later.
2. Pick an OS image and either root-install or use a one-click Docker deploy.
3. Set an admin username/password and save them somewhere safe (see the manage-agents
   card).
4. Open the agent and run onboarding: pick an inference provider, choose a model, and
   connect a messaging channel (e.g., create a bot token and allow your user ID).
5. Set API keys via the env inside the correct location (root vs. container).

**Watch out for:** Root vs. container matters — files, env, and secrets live in
different places, so know which one your agent runs in before editing config. Lock the
server down (firewall, restricted ports/IP). Running many agents needs enough RAM/CPU.
Keep secrets in the env, not in chat.

**Original example to invent:** Source deployed Hermes via a one-click Docker install
on a hosting provider. Writers should show a VPS deployment of a different agent and a
different channel.
