---
id: kc-0614
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [security, self-hosting, vps, exposed-servers, agents]
source_video: CBNbcbMs_Lc
source_channel: "@nateherk"
source_views: "251K"
confidence: high
---
# Self-hosted agents get exposed when default test settings ship to production

**What:** Always-on agent frameworks that you host yourself concentrate keys and
control over many services in one place, and are often put on public-facing servers.
A default setting meant for local testing does not stay safe once the software is
online — hundreds of such deployments were found wide open on the internet, with no
authentication, leaking API keys and private chat history. Anyone who reaches an
unprotected instance can take everything it can access.

**Why it matters:** These tools are explicitly designed for full system access, so a
breach is maximally damaging. The blast radius is your keys, your connected accounts,
and your history — not one folder. The creator himself has said most non-technical
users should not install it; it's early and has sharp edges.

**The moves:**
1. Never expose a locally-defaulted agent to the internet without adding authentication.
2. Put access control (a login) in front of any dashboard or chat interface.
3. Understand exactly what the agent can reach before you deploy it anywhere public.
4. Keep it experimental — don't embed an immature, high-access tool into real business
   processes unless you understand the security implications.

**Watch out for:** "Works on my machine" defaults are the trap — the setting that's
fine locally is precisely what leaves the door open online. Hype hides the risk;
demos rarely show the exposed-server failure mode.

**Original example to invent:** Source cited real reports of exposed instances.
Writers should describe the class of failure abstractly and invent a scenario
showing a misconfigured deployment being discovered, without reusing specific quoted
figures as if verified.
