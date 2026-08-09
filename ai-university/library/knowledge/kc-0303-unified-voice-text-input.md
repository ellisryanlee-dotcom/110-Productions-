---
id: kc-0303
type: how-to
track: "Track 6 — Interfaces: Voice & Chat"
topics: [telegram, voice, transcription, input-normalization, n8n]
source_video: [9FuNtfsnRNo, ldETapkr8Hg]
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Normalizing voice and text into one agent input

**What:** A chat front end (e.g., Telegram) can deliver either a typed message or a
voice note. You branch on which arrived, transcribe the voice path to text, and
then funnel both paths into a single field the agent always reads — so the agent
never has to care whether the user typed or spoke.

**Why it matters:** Voice is the lowest-friction way to talk to an assistant, but
agents want text. Collapsing both modes into one canonical field means you write
the agent once and it works for either input.

**The moves:**
1. Use the chat trigger to receive the incoming message.
2. Add a switch that checks whether a voice-file field exists; if so, route down
   the audio branch, download the file, and run it through a transcription node.
3. On the text branch, read the typed message field directly.
4. Map both branches' output into one shared field (e.g., `text`) so the agent's
   input is always the same reference.
5. Reply back into the same chat by reusing the chat ID captured from the trigger.

**Watch out for:** Keep the merge field name consistent everywhere the agent reads
it; a mismatch means the agent sees empty input on one of the two paths.

**Original example to invent:** Source used Telegram. Writers should demo the same
normalization on a different channel (e.g., WhatsApp or a web widget).
