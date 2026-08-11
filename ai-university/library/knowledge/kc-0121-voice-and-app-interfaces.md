---
id: kc-0121
type: how-to
track: "Track 6 — Interfaces: Voice & Chat"
topics: [voice-agents, elevenlabs, lovable, webhooks, frontends]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Front ends for agents: voice (ElevenLabs) and no-code apps (Lovable)

**What:** The same backend agent can be driven by different interfaces by swapping only its input/output. Two examples: a conversational voice agent (built on a voice platform like ElevenLabs) that sends the caller's request to your workflow via webhook and speaks the reply, and a no-code web app (built with a tool like Lovable) whose form posts user input to your webhook and displays the returned result.

**Why it matters:** The agent logic (tools, prompt, brain) stays the same; only the input source changes. That means one backend can power chat, voice, email, or a custom app — dramatically widening how users reach it, with no traditional coding.

**The moves:**
1. Build the agent workflow with a webhook trigger as its input and a respond-to-webhook as its output.
2. For voice: in the voice platform, configure the agent's first message, system prompt, a model, and a tool pointing at your webhook URL; define body parameters (e.g., recipient, content) it should extract from the conversation.
3. For an app: describe the UI in natural language to the app builder, then tell it to POST the form data to your webhook and wait for/display the response field.
4. Use the test URL while building (keep the workflow listening), switch to the production URL when live.
5. Iterate the UI/prompt conversationally as you would instruct a developer.

**Watch out for:** While testing you must keep the webhook listening or requests fail. The voice model may refuse inappropriate content. Trim the app's displayed output to just the needed field rather than raw JSON.

**Original example to invent:** The source builds an email-sending voice assistant and an excuse-generator web app. Invent a different voice use case and a different mini-app on the same webhook-backend pattern.
