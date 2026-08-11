# KEYFRAMES — HOOK proof-of-look (S001–S004)

**Purpose.** This folder is the **proof-of-look** slice for *AI University · Crash Test #1
(Episode 1)*. It builds the four HOOK shots (S001–S004) as static, standalone
**1920×1080 (16:9)** HTML/CSS/SVG keyframes so the *look* — the "engineering red-alert
instrument panel" of the locked brand bible — can be greenlit **before** we scale to the
remaining 45 Tier-0 shots (49 deterministic shots total in the screenplay).

**Tier-0 deterministic.** Pure HTML/CSS/SVG. No images generated, no paid APIs, no paid
fonts. Fonts load from Google Fonts (Archivo / JetBrains Mono / Inter — all OFL 1.1);
for fully offline/deterministic renders, self-host the woff2 files and drop the `<link>`
(bible §9). Every file has system-font fallbacks in `tokens.css`.

## Files

| File | Shot | What it shows |
|---|---|---|
| `tokens.css` | — | Single source of truth. `--ct-*` tokens authored verbatim from brand-bible §2.1 + shared `.stage`, grid, badge, wordmark helpers, and the global **`.ct-killcounter`** HUD (Option A). |
| `s001.html` | S001 | Calm, trustworthy **Sift** inbox-triage dashboard. Emails auto-labeled Sales / Support / Billing, green ✓ per row, "all systems nominal". |
| `s002.html` | S002 | Same dashboard **glitching** — one corrupted email card, four stacked duplicate "sent" cards, red **API error** banner, spinning duplicate-send counter, RGB-split header. |
| `s003.html` | S003 | **Title card (money-shot).** CRASH TEST AGENTS wordmark + break→fix spine over a blurred/desaturated freeze of S002. Tagline "We break AI agents so yours don't." + promise line "25 ways to kill an agent → 25 fixes." |
| `s004.html` | S004 | **Agenda panel.** Five failure-round rows (bad inputs / dead APIs / lying model / runaway loop / leaky secrets) with minimal SVG icons, a green "Final safety net" row, and a highlighted accent-cyan **Free: Agent Pre-Launch Checklist** download row. |

## Kill-Counter HUD (Option A — global overlay)

Ryan ratified **Option A ("honor the count")** on 2026-08-09: the title promises *25*, so a
persistent **`BREAKS NN / 25`** instrument (`.ct-killcounter`, defined in `tokens.css`) is docked
**top-right from the hook onward** and ticks once per break beat. The 25 `[COUNTER: Break NN / 25]`
cues in the approved script are the source of truth for *when* it increments; the break→round-section
mapping lives in the screenplay Format spec. In this HOOK slice all four shots rest at **`00 / 25`
(`data-state="armed"`)** — the instrument is present but hasn't ticked yet. Downstream shots set
`data-state` to `ticking` / `locked` (25/25) / `fixed` (green survivor count on the clean rerun).
The HUD is a layered overlay, **not** a separate shot — the 52-shot count and AI-GEN gating are unchanged.

## How these render

Each file is a fixed `1920×1080` `.stage`. Open in a browser (centered) or capture headless
at 1920×1080 to get an edge-to-edge frame. **These are static "rested" keyframes** — the
final on-screen state of each shot, not the animation. Motion (label snaps, counter spin,
glitch cut, wordmark snap-in, row cascade) is specified in the screenplay/bible §6 and is
layered at the animation stage; the keyframes prove the *look*, not the *timing*.

## Brand fidelity

Built against the **LOCKED** bible `production/branding/crash-test-brand-bible.md` (@ b8bd4f3):
red = broke (`--ct-break #FF3B30`), green = fixed (`--ct-fixed #2BD576`), amber = VERIFY
(`--ct-warn #FFB020`, reserved — never decorative), cyan = "needs AI"/interactive
(`--ct-accent #38BDF8`). Wordmark + spine per §4.1; title card per §7.1; state badges per §6.1.

### Known brand-bible gaps hit while building (for BRANDING to close before scale-out)

1. **Two competing token files exist.** `production/build/components/tokens.css` (from an
   earlier `brand-system.md`) uses a *different, superseded* system: `--cta-*` names,
   **Hazard-Yellow `#FFD21E`**, and **Space Grotesk** display. The **locked bible** instead
   mandates `--ct-*`, no yellow, and **Archivo Expanded** display. This slice follows the
   locked bible and ships its own `tokens.css`. **These two files must be reconciled** (delete/rewrite
   the old one) or downstream shots will drift.
2. **No category-label palette.** The bible reserves red/green/amber/cyan for *semantics* and
   forbids decorative amber, but S001 needs distinct Sales/Support/Billing label colors. I used
   cyan (Sales) + two disciplined desaturated cool tints (Support/Billing) that stay clear of the
   reserved semantics. A formal category-label token set should be added to §2.
3. **Archivo Expanded width.** The bible says "Archivo *Expanded* Black". Google Fonts serves the
   Expanded width via the variable-font width axis; we request `Archivo` weights + `font-stretch:125%`.
   Self-hosting the true "Archivo Expanded" static family at build time is recommended for exact match.
