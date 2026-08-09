---
id: kc-2108
type: concept
track: "Track 8 — Applied Automations"
topics: [chatbot, knowledge-base, rag, deployment, service-offer]
source_video: [jCoH82LPgdk, KxXUtKejeGY, Uk5f3ajkfSs, wrmp5onIeV8]
source_channel: "@LiamOttley"
source_views: ["645K", "424K", "436K", "268K"]
confidence: high
---
# The custom-knowledge chatbot as a repeatable offer

**What:** A chatbot grounded in one business's own documents (FAQs, policies, training material, product info). You ingest those documents into a knowledge base, connect a language model to answer from them, and deploy the bot as an embeddable web widget or on a messaging channel. The same build pattern reskins across clients and use cases.

**Why it matters:** It's the workhorse AI-agency deliverable: one architecture serves customer support, staff training, sales enablement, lead generation, and guest support. Because it's a value-adding assistant grounded in real business data (not a generic prompt anyone could copy), clients will pay for it.

**The moves:**
1. Collect the client's documents.
2. Ingest them into a knowledge base / vector store.
3. Configure retrieval plus an answer prompt that grounds responses in the retrieved content.
4. Deploy — web chat bubble, or WhatsApp/Telegram/other channel.
5. Optionally capture leads and route them to a sheet or CRM.
6. Reskin the same build for the next client in a chosen niche.

**Watch out for:** Retrieval quality determines answer quality; keep the use case tight per client; a prompt-only assistant (no knowledge base) is easy to replicate and therefore low-value.

**Original example to invent:** Sources build martial-arts, solar sales-training, and property-support bots. Pick a different domain and show grounded Q&A.
