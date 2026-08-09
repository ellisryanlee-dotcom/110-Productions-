---
id: kc-0115
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [prompting, system-prompt, structure, context, markdown]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# The anatomy of an effective system prompt

**What:** A strong agent system prompt is organized into clear sections (markdown headers help readability): a background/role, the context it receives each run, a tools section, rules/constraints, examples, and a final-notes section. A content-only agent may swap the tools section for an output-format section.

**Why it matters:** A system prompt is like onboarding an intern in plain language — the quality and consistency of an agent trace directly to it (often described as most of the work). Missing a section causes predictable failures: no role → generic output; no context definition → confusion about the input; no tools section → wrong tool use; no rules → hallucination.

**The moves:**
1. Role/background: state who the agent is and its goal ("you are X designed to do Y; your goal is Z").
2. Context: define what it will receive each run and why, since inputs vary while the prompt stays fixed.
3. Tools: list each tool, when to use it, and any ordering dependency (e.g., look up a contact before emailing).
4. Rules: conditional guidance ("if X, do Y") — never a fixed step order, or you should be using a workflow instead.
5. Examples: reserve for correcting observed failures (hard-prompting), not obvious cases.
6. Final notes: current date/time, format reminders, "say you don't know" fallbacks. Placement matters — moving a note can change whether the model applies it.

**Watch out for:** Cut filler words; the model needs meaning, not verbosity. Feed the agent the three context sources it needs — preloaded knowledge (prompt), user-specific memory, and real-time retrieval (RAG/APIs) — because garbage in means garbage out.

**Original example to invent:** The source shows templates for a travel/legal/task assistant. Write section examples for a different role (e.g., a returns-processing agent) so the wording is original.
