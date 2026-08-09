---
id: kc-0824
type: how-to
track: "Track 6 — Interfaces: Voice & Chat"
topics: [elevenlabs, voice-cloning, system-prompt, custom-tool, widget]
source_video: KUvSzvFeZls
source_channel: "@nateherk"
source_views: "208K"
confidence: high
---
# Configuring an ElevenLabs conversational agent

**What:** The specific settings that make a conversational-voice agent behave: a
first message, a system prompt defining persona and behavior, a custom tool that
POSTs a single LLM-extracted parameter to your backend, an optional cloned voice, and
an embeddable widget.

**Why it matters:** A voice agent lives or dies on prompt tuning. Getting the persona,
the tool-calling instructions, and the body parameter right is what makes it call the
backend promptly and speak naturally instead of stalling or going silent.

**The moves:**
1. Set a first message so the agent opens the call, then waits for the user.
2. Write a system prompt covering persona, the primary function (understand intent →
   call the backend tool), behavioral rules, error handling, and a couple example
   interactions.
3. Add a custom tool (POST) with the backend webhook URL; define one body parameter
   whose value the LLM extracts from the conversation (the user's query).
4. Instruct it to send the request immediately and keep talking, never announcing that
   it's waiting on the tool.
5. Optionally clone a voice from a short audio sample, then select it.
6. Copy the embed/widget code and place it in your web app; customize label and
   appearance.

**Watch out for:** Agents sometimes don't call the tool right away — be explicit in
the prompt about when to call it and what to send. Hardcode fixes for recurring
misfires (e.g., a specific request that failed to trigger the right call). Temperature
controls response randomness/personality.

**Original example to invent:** Source cloned a movie-character voice and persona.
Writers should specify a different voice and prompt.
