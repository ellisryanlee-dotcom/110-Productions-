---
id: kc-1022
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [deployment, cloud, caddy, reverse-proxy, dns, self-hosting, security]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: high
---
# Deploying a self-hosted AI stack to a private cloud server, securely

**What:** To run your local-AI infrastructure and agents 24/7 (and share them), you deploy the same Docker stack onto a private server you control in the cloud. It's still "local" in spirit — you own the machine — but now it needs domains, HTTPS, and a locked-down firewall. A reverse proxy (Caddy) fronts everything and handles SSL and subdomain routing.

**Why it matters:** A cloud server is reachable from the internet, so security matters in a way it doesn't on your laptop. Routing all traffic through one hardened entry point, with real domains and automatic HTTPS, is how you expose the useful services (workflow UI, chat UI, database dashboard) without leaving the whole stack open.

**The moves:**
1. Provision an Ubuntu server (a GPU instance for local models, or a cheaper CPU instance if you'll use a hosted model for the LLM only). Note its public IP.
2. Open the firewall for HTTP (80) and HTTPS (443) only.
3. Configure the reverse proxy: set the hostname/subdomain for each service you want exposed and an email for SSL; leave internal-only services (model runner, search) unexposed.
4. Add DNS A-records pointing each subdomain to the server's IP — before first start, or the proxy gets confused.
5. Start the stack with the public/production profile, which closes extra ports so every external request must pass through the proxy.

**Watch out for:** Choose a host that gives you the real machine — platforms that only rent you a container can't run Docker-in-Docker and won't work for this. Set DNS before starting. Reuse or regenerate your secrets, but make cloud secrets genuinely strong. Some hosts need Docker Compose installed manually. A wrong file-permission on the search config folder can make that container restart-loop — fix its permissions.

**Original example to invent:** Outline deploying to a cloud provider of your choice, listing the firewall rules, subdomains, and DNS records you'd create — your own domains and host.
