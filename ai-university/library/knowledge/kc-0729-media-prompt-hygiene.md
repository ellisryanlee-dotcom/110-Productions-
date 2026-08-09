---
id: kc-0729
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [prompting, json, media-generation, guardrails, reactive-prompting]
source_video: Gc03J27xmBc
source_channel: "@nateherk"
source_views: "227K"
confidence: high
---
# Prompt hygiene for media generation

**What:** A set of defensive practices when an LLM generates prompts that feed
into downstream API calls. Strip newlines and quotation marks from generated
prompts, because they can break the JSON body of the next request. Constrain
content to be safe for the generator (e.g., family-friendly; avoid terms the video
model will reject) so generations don't fail. And practice *reactive prompting*:
add rules to the system prompt after you discover a failure, rather than trying to
anticipate every rule up front.

**Why it matters:** Media pipelines fail silently or mid-run when a stray newline
malforms a request or a generator refuses disallowed content. Cleaning outputs and
adding guardrails as you learn keeps long automated runs from breaking.

**The moves:**
1. In the prompt-writing agent's system message, forbid newlines and quotation
   marks in output.
2. Add a code/cleanup step that trims trailing newlines as a backstop (some models
   emit them regardless).
3. State content constraints (safe/allowed subjects) so the generator doesn't
   reject the request.
4. When a run fails, add the specific rule that would have prevented it and keep
   it for future runs.
5. Also cap prompt length to the downstream model's limit.

**Watch out for:** Different chat models behave differently — some emit newlines
where others don't, so keep the cleanup step even if your current model behaves.
Anticipating every rule is impossible; expect to learn constraints reactively.

**Original example to invent:** Write a short system-prompt guardrail block for a
media generator, including one rule you'd add reactively after a hypothetical
failure.
