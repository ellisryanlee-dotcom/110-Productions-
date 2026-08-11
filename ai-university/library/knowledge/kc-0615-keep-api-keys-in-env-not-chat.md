---
id: kc-0615
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [security, api-keys, secrets, env, agents]
source_video: [CBNbcbMs_Lc, HJ-dwefABss]
source_channel: "@nateherk"
source_views: ["251K", "244K"]
confidence: high
---
# Put secrets in environment/secret stores, never in chat or repos

**What:** API keys and other secrets should be supplied through environment files or
a dedicated secrets store, not typed into the agent's chat. Pasting a key into
conversation saves it in the chat history, where it can later be exposed. Likewise,
never push secrets to a repository or leave them in files that go online. Some
agent-orchestration tools have a built-in secrets mechanism even when there's no
obvious UI field for it.

**Why it matters:** Secrets in chat logs or committed to code are one of the most
common ways credentials leak. Keeping them in env/secret stores means the agent can
use them without them living in retrievable history or public code.

**The moves:**
1. Store keys in an env file or the tool's secrets store; reference them from there.
2. Never paste a key directly into the agent chat.
3. Before committing, have the agent scan the diff to confirm no secret is exposed.
4. If a tool seems to lack a secrets field, check its docs/repo — a secrets facility
   may exist and the agent can tell each sub-agent where the values live.

**Watch out for:** Chat history is durable — a key pasted once can resurface later.
Convenience ("just paste it") is exactly the habit that causes leaks.

**Original example to invent:** Sources reference generic env setup and a built-in
secrets store. Writers should demo a concrete secret being wired via env and show the
pre-commit scan catching an accidental paste.
