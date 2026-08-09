---
id: kc-0122
type: concept
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, model-context-protocol, tools, self-hosting, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# MCP servers: what they are and connecting them in n8n

**What:** Model Context Protocol (MCP) puts a standard layer between an agent and the tools it wants to use. Instead of hard-coding one tool per operation (label email, get email, send email — each with its own fixed config), the agent queries an MCP server and gets back a rich description: the available tools, their schemas (what parameters each needs), resources, and prompts. It then picks the right tool and fills the right schema — many tools collapsed into a list-then-execute pair.

**Why it matters:** It makes agents leaner and more scalable: one server can expose more actions than you'd hand-build, and the provider keeps it updated so you don't add tools every time the service grows. It's a universal translator between the model and any connected service.

**The moves:**
1. Self-host your automation platform (community MCP nodes require self-hosting; a one-click host handles setup).
2. Install the community MCP node, and set the environment variable that permits community packages to be used as tools.
3. Add an MCP client set to "list tools," configure the server via its command (typically an npx invocation), arguments, and any environment/API-key variable — no terminal needed.
4. Add a second MCP client set to "execute tool"; make the tool name dynamic with a model-filled placeholder and let the model define the parameters from the returned schema.
5. Give an agent both, so it lists a server's tools then executes the right one.

**Watch out for:** Multi-step schemas (needing an ID fetched first) can trip a lightly-prompted agent — prompt it to list before executing. Some listed servers aren't fully published and will fail to connect regardless of your setup. Self-hosted MCP servers carry security risk — anyone reaching the server could request its resources.

**Original example to invent:** The source connects Airbnb, Brave Search, and Airtable servers. Demonstrate the list-then-execute flow against a different MCP server so the tools and schemas differ.
