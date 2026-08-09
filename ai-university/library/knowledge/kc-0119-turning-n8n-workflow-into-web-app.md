---
id: kc-0119
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [n8n, claude-code, front-end, mcp, webhook]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Converting an existing n8n workflow into a web app

**What:** A method for converting an existing n8n backend automation into a web app with a real front end: give Claude Code access to an n8n-specific MCP server (so it can read/edit workflows in the connected n8n instance) and a GitHub MCP server, have it first *audit and modify the n8n workflow itself* so its trigger and input/output shape are appropriate for a web front end (e.g., swapping a chat-trigger for a webhook, converting an image input to the base64 format a webhook will actually receive, restructuring the response so a front end can parse success/error and any returned media URL), and only after that backend adjustment build the actual front-end interface (using a front-end-design skill) that calls the now-web-ready webhook.

**Why it matters:** Naively wiring a front end straight to an n8n workflow built for a different trigger type produces broken data shapes and unusable error handling; having the agent adjust the backend workflow first — informed by understanding both n8n's node model and typical web request/response formats — avoids most of the friction that would otherwise show up as confusing front-end bugs.

**The moves:**
1. Connect an n8n MCP server plus n8n-specific reference skills to the project so the agent can read and modify the target n8n instance's workflows and understands n8n's node-based patterns.
2. Point the agent at a specific existing workflow and ask it to prepare that workflow to be called from a custom front end, rather than jumping straight to building the front end.
3. Review what it changes about the workflow (trigger type, input encoding, output/error shape) — this step alone is often more involved than it first appears and is worth reading through.
4. Only after the workflow is web-ready, describe the desired front-end experience and let it build, test locally, and iterate on the UI, using a front-end-design skill for visual quality.
5. Push the front-end code to GitHub and deploy it via the standard GitHub-to-hosting-platform pipeline; store the n8n webhook URL as an environment variable rather than hardcoding it if the repository will be public.
6. Run a security review before considering it done, specifically checking whether the webhook URL is exposed anywhere public and unauthenticated.

**Watch out for:** An unauthenticated webhook URL exposed in public front-end code (or a public repo) can be called by anyone, which is a real cost/abuse risk if the workflow behind it consumes paid API credits — add authentication or keep it as a protected environment variable rather than hardcoding it in shipped code for anything beyond a quick demo.

**Original example to invent:** The source converted a UGC-ad-generation workflow and a simple chat-based fitness-coach workflow this way. Writers should invent a different existing n8n automation (e.g., an order-status-lookup workflow) to convert using the same audit-then-build-front-end sequence.
