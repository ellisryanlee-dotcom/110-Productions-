# 110 video engine routing — operating policy (v1)

The governing principle, in priority order:

> **BEST FINISHED VIDEO, AT THE LOWEST COST THAT DOES NOT SACRIFICE QUALITY.**
> The goal is not cheapest generation. The finished image wins.

Wan is the workhorse. Seedance is available when quality requires it. Never
sacrifice episode quality merely to prove Wan works — and never generate a
whole episode on a frontier model merely because it is currently strongest.

## Engine roster and execution surfaces

Two surfaces exist, verified 2026-08:

| Surface | Engines | Who presses the button |
|---|---|---|
| **Rig** — ComfyUI on the production GPU machine | **Wan 2.2** (T2V/I2V/FLF) — the default workhorse | Human (or rig API later). Cloud sessions have no GPU and Higgsfield's hosted catalog carries **no Wan** — session agents PREPARE Wan shots, the rig runs them. |
| **Session** — Higgsfield MCP | **Seedance 2.5 / 2.0** (premium escalation), Kling 3.0 (multi-shot/audio/motion-transfer), Veo 3 (reliable cinematic), MiniMax H3 (2K, first+last frame), FLUX 3 Video (start+end frame, audio, continuation) | Agents, in-session, cost-preflighted (`get_cost:true`) |

Keyframe/reference IMAGE work (the reference-first stage) is fully in-session:
Nano Banana Pro, Seedream 4.5/5, Cinema Studio Image via `generate_image`,
with **Elements** (`show_reference_elements`) as the identity-lock mechanism —
one element id per character/wardrobe/environment, embedded `<<<element_id>>>`
in every prompt that must stay consistent.

## Premium routing triggers

Route a shot to Seedance (or the best-fit frontier alternate) when it
materially outperforms Wan for that shot — especially:

- photorealistic human hero shots
- difficult body movement
- facial performance
- complex camera movement
- any shot where Wan fails the realism/continuity standard

Alternates within the session surface: defined endpoints → MiniMax H3 or
FLUX 3 Video (native first+last frame); multi-shot continuity or motion
transfer → Kling 3.0; reliable cinematic b-roll → Veo 3.

## Reference-first workflow (mandatory, before any video generation)

1. Design the shot.
2. Create the **final-quality keyframe/reference image**.
3. Lock character identity (Element id).
4. Lock wardrobe (in the Element / keyframe).
5. Lock environment (Element or keyframe).
6. Lock lighting.
7. Lock composition / lens language.
8. Only then animate the approved visual — image-to-video / reference-to-video.

Shots with defined beginnings AND endings use first-frame/last-frame
workflows when the engine supports them (Wan 2.2 FLF on rig; MiniMax H3 /
FLUX 3 in session).

## The routing loop

```
DESIGN SHOT → CREATE KEYFRAME → ATTEMPT WAN 2.2 → QUALITY CHECK
                                        │
        PASS ──────────────────────────► USE IT. Log engine + cost.
                                        │
        FAIL → determine WHY it failed (log fail_reason), then ONE of:
          a. keyframe/prompt deficiency → revise keyframe, retry Wan
          b. wrong engine class for the motion → route to best-fit alternate
          c. quality class beyond Wan     → escalate to Seedance
```

Attempt discipline — no endless regeneration:
- Max **2** Wan attempts on the same keyframe+prompt.
- Max **1** further Wan attempt after a keyframe/prompt revision.
- Then the shot MUST route (b) or escalate (c). Hard cap **4** total video
  generations per shot across all engines without a human check-in.
- Every attempt — pass or fail — is logged before the next is made.

## Tracking (non-negotiable)

Every attempt and every accepted shot is recorded in the episode's shot
ledger (`production/episodes/ep-NNN/shots.json`, schema in
`production/shots.schema.json`): engine, model id, attempt count, credits,
fail reasons, and which engine produced the FINAL accepted take. The
Episode 1 ledger doubles as the discovery dataset for the real 110
production stack; the post-episode report (`episode-report-template.md`)
is computed from it — routing rules for Episode 2 come from that data,
not from vibes.

## Episode 1 status

Pre-production. Upstream of any shot: house voice guide → script through
the librarian/editor gate (see `library/`). Keyframe development and
Element creation may begin as soon as the script's shot list exists.
