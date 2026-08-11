---
id: kc-0948
type: concept
track: "Track 2 — AI Agents Core"
topics: [agent-frameworks, abstractions, control, framework-selection]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K views"
confidence: medium
---
# Low-level vs. high-level agent frameworks: control vs. convenience

**What:** Agent frameworks sit on a spectrum. High-level frameworks do a lot for you, so you write less code, but you eventually hit a wall where you lack the control to make fine-grained changes to how your agents behave. Low-level frameworks expose more of the machinery, so you write more code up front but retain the customizability needed for intricate agent behavior. The source prefers low-level tools for both the agent layer and the orchestration layer for exactly this reason.

**Why it matters:** Framework choice is a long-term commitment. Picking a convenience-first library can feel fast early and then block you when a real project needs custom control over tool-calling, chat history, or workflow branching. Choosing for control trades some initial verbosity for headroom.

**The moves:**
1. Estimate how custom your agent's behavior needs to be.
2. For simple, standard flows, a higher-level framework's convenience may be fine.
3. For anything requiring precise control over prompting, tools, or routing, prefer lower-level abstractions.
4. Learn principles (dependencies, prompts, tools, state) rather than binding yourself to one framework.

**Watch out for:** "Less code" marketing hides the ceiling you may hit later; migrating off a high-abstraction framework mid-project is costly.

**Original example to invent:** The source contrasted a high-abstraction crew-style framework against lower-level tools. Writers should invent a scenario where a team outgrows a convenience framework and needs custom routing, without reusing the source's framework names as the punchline.
