---
id: kc-0140
type: how-to
track: "Track 8 — Applied Automations"
topics: [web-apps, n8n, webhooks, front-end, claude-code, mcp]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Turning automation workflows into web apps

**What:** An agentic coding tool can take an existing automation workflow (e.g., an n8n flow), audit and optimize its backend for a front end, then build and deploy that front end. Given access to the automation platform's MCP server and skills, the agent inspects the workflow, converts triggers/inputs/outputs for app use, builds the UI, and deploys via GitHub to a host.

**Why it matters:** It bridges backend automations and real user-facing apps without hand-coding — the agent even rewrites node-by-node data handling (e.g., swapping a chat/form trigger for a webhook, handling a base64 image, adding memory, formatting the response for display).

**The moves:**
1. Give CLAUDE.md the plan: audit the workflow for app-readiness, build/test the front end locally, then push to GitHub → host.
2. Connect the automation platform's MCP server + skills and a GitHub token so the agent can read/edit workflows and push code.
3. In plan mode, point it at the target workflow; it optimizes the backend (webhook trigger, correct input/output, memory) and republishes.
4. Build the front end (using a front-end skill); iterate on display issues (e.g., show only the output field, not raw JSON) with natural-language feedback.
5. Deploy: push code to GitHub, connect the repo to the host; add the webhook as an env var (or hard-code for a simple demo).

**Watch out for:** Raw workflow responses return full JSON — tell it to display just the needed field. Secrets in an MCP config file are local-only but still sensitive; use env vars and gitignore. An unauthenticated webhook can be spammed at your cost — add auth for real use.

**Original example to invent:** The source turns a UGC-ad flow and a fitness-coach chat into apps. Convert a different workflow (e.g., a quote generator) into a web app with the same audit-build-deploy path.
