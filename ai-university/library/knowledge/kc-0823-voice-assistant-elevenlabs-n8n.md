---
id: kc-0823
type: how-to
track: "Track 6 — Interfaces: Voice & Chat"
topics: [voice-agent, elevenlabs, n8n, webhook, lovable]
source_video: KUvSzvFeZls
source_channel: "@nateherk"
source_views: "208K"
confidence: high
---
# Voice assistant architecture with ElevenLabs and n8n

**What:** A no-code voice assistant built from three layers: a web interface that
embeds a conversational-voice widget, a voice agent that handles speech and
personality, and an automation backend that does the actual work. The voice agent is
given exactly one custom tool — a webhook to the backend — and the backend routes
each request to the right action.

**Why it matters:** Keeping the voice layer thin (one tool, one job: turn intent into
a single backend call) makes the system reliable and easy to extend. All capability
lives in the backend, so adding skills doesn't complicate the voice agent.

**The moves:**
1. Build a web interface (via a no-code app builder) and embed the voice widget into
   it.
2. In the voice platform, create the conversational agent and give it one custom tool
   pointing at the backend webhook (POST).
3. In the backend, use a webhook trigger to receive the request and a response node
   to send the result back so the voice can speak it.
4. Have the backend's main agent decide which downstream action/tool to use per
   request.

**Watch out for:** The response must come back via a proper response node, not
immediately, or the voice replies before the work is done. Use the production webhook
URL (and an active workflow) when going live, not the test URL.

**Original example to invent:** Source themed the assistant as a witty fictional
butler. Writers must invent a different persona and use case.
