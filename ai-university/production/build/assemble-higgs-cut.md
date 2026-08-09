# EP1 — Higgsfield asset assembly cut (OPE-175)

Pieced together from already-generated (already-paid) Higgsfield video assets
found in the connected workspace `6b5d83ef` (ultimate plan). **Zero new spend** —
download + local ffmpeg concat/crossfade only. Ryan's directive 2026-08-09:
"look through higgs ... a bunch of stuff was made then stopped piece it together."

Output: `production/animatic/ai-university-ep1-assembly.mp4`
- 1280x720, 24fps, 67.5s, music bed placeholder (agent-town bgm @ 0.16, fades).
- Shareable copy uploaded to Higgsfield storage:
  https://d2ol7oe51mr4n9.cloudfront.net/user_37fUD9dU1JkMPzD8ShF8ur2RLka/ced85c46-0cbe-4dad-b98d-f729ed90ed94.mp4

## Sequence (crossfade 0.5s throughout)
Title card → then two finished Higgsfield sequences:

### I. The Campus — first-person journey (Aug 8, seedance_2_0, 6.04s ea)
1. fdd7f63e — approach lit entry portal across water
2. 2c29a489 — into the atrium garden (trees, mirror water)
3. 78ba7907 — into the great library (cathedral archive tiers)
4. 9417c164 — into NASA-style mission-control hall
5. 9fd5c990 — into operators' studio (five workstations)
6. 7b959c57 — into the observatory (star-map, open to space)

### II. The Knowledge Cartridge (Aug 9, seedance_2_5 / kling3_0_turbo, 5.04s ea)
7.  da9baec1 — dolly down the library aisle of glowing cartridges
8.  c0013243 — she pulls a cartridge from the shelf
9.  31065c35 — examines it at the desk
10. a4839c70 — cartridge slides into console, core ignites
11. a6ba6bff — cartridge lattice dissolves into embers (the "crash")
12. de93ee7c — lamp off, walks out, room settles
→ End card.

All source .mp4s: CloudFront `d8j0ntlcm91z4.cloudfront.net/user_37fUD9dU1JkMPzD8ShF8ur2RLka/`.

## Rebuild
Download the 12 rawUrls, normalize each to 1280x720/24fps, xfade-chain with
0.5s fades (title + 12 + end), overlay music bed at 0.16 with in/out fades.
Full offsets computed as: off_k = sum(dur[0..k-1]) - k*0.5.
