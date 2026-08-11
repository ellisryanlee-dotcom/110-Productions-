---
title: "Crash Test Agents — Brand & Design System v1"
stage: branding
channel: "Crash Test Agents (110 Productions)"
tagline: "We break AI agents so yours don't."
consumes: production/screenplay/crash-test-001-screenplay.md
status: draft-for-ryan
purpose: >
  Code-ready design tokens for the DETERMINISTIC (HTML/CSS/SVG) mass-render of
  every reusable component in Episode 1: Sift dashboard, Harbor inbox, round
  slates, token/cost meter, system-prompt builder, pipeline node canvas,
  Rolodash/permissions UIs, HTTP status chart, checklist. Resolves every
  [BRAND palette] / [BRAND accent] / [BRAND logo] slot in the screenplay.
---

# Crash Test Agents — Brand & Design System v1

**Personality:** technical, honest, a little irreverent. A crash-lab for AI agents —
we mount an agent on the rack, break it on camera, then bolt a floor under every
failure. The look is **diagnostic dark UI + hazard/impact chrome**: screencast
software that feels real, framed by a crash-test identity (crosshair reticle,
hazard chevrons, impact red).

**Locked defaults (so production is NOT blocked):**
- **Brand primary (identity / crash-test signature):** `Hazard Yellow #FFD21E`
  — logo, wordmark accent, slate frames, CTA. *Chrome only — never a UI state color.*
- **Brand accent (AI / brand-highlight / "needs AI" glow):** `Signal Cyan #45C8FF`
  — the accent every `[BRAND accent]` slot resolves to; interactive/highlight/data emphasis.
- **Fonts:** `Space Grotesk` (display/slates) · `Inter` (UI + body) · `JetBrains Mono` (code + all UI mono). All SIL OFL, free.

Four things are genuinely Ryan's taste call — see **§7 Open Choices**. Everything
else below is a default you can build against today.

> **Usage rule for the two brand colors (important for renderers):**
> Hazard Yellow is a *brand-chrome* color (logo, slate borders, CTA, crash-rig).
> Inside simulated app UIs (Sift dashboard, prompt builder, etc.) the emphasis
> color is **Signal Cyan**, and yellow-family meaning is carried by the semantic
> **`warning`** token (amber), never by hazard yellow. This keeps "brand" and
> "a caution state" from ever being confused on screen.

---

## 1. DESIGN TOKENS

Dark is the **default** (all screencast UIs render dark). Light variants are for
the checklist one-pager (S050), any light diagram exports, and print/thumbnail
overlays. Contrast notes are against the relevant surface; all body text and
state colors meet **WCAG 2.1 AA** (≥4.5:1 text, ≥3:1 UI/large).

### 1a. CSS custom properties (exportable — drop into `tokens.css`)

```css
/* ============================================================
   CRASH TEST AGENTS — design tokens (v1)
   Default theme = DARK. Wrap light overrides in [data-theme="light"].
   ============================================================ */
:root, [data-theme="dark"] {
  /* --- Brand --- */
  --cta-primary:            #FFD21E;  /* Hazard Yellow — identity/chrome */
  --cta-primary-ink:        #0B0E14;  /* text/icon ON yellow (17:1) */
  --cta-primary-dim:        #C7A413;  /* pressed/secondary yellow */
  --cta-accent:             #45C8FF;  /* Signal Cyan — AI / highlight / "needs AI" */
  --cta-accent-strong:      #12A5EE;  /* accent on light fills / borders */
  --cta-accent-ink:         #041017;  /* text ON cyan fill */
  --cta-accent-glow:        color-mix(in srgb, var(--cta-accent) 55%, transparent);

  /* --- Backgrounds & surfaces (dark) --- */
  --bg:                     #0B0E14;  /* app/stage background (near-black, cool) */
  --bg-deep:                #070910;  /* letterbox / slate void / vignette base */
  --surface:                #12161F;  /* cards, panels */
  --surface-2:              #1A1F2B;  /* raised: rows, inputs, chips */
  --surface-3:              #232A38;  /* hover / active row */
  --border:                 #2A303C;  /* hairline dividers, panel edges */
  --border-strong:          #3A4354;  /* focused input, emphasized edge */
  --overlay-scrim:          rgba(7,9,16,0.66); /* behind slates/modals */

  /* --- Text (dark) --- */
  --text:                   #E6E9EF;  /* primary (≈15:1 on --bg) */
  --text-muted:             #9AA4B2;  /* secondary (≈7.4:1 on --bg) AA */
  --text-subtle:            #6B7480;  /* tertiary / the GRAY "rule" tag (UI/large only) */
  --text-inverse:           #0B0E14;  /* on light/brand fills */

  /* --- Semantic state (dark) --- */
  --success:                #3FB950;  /* green check fill / node pass */
  --success-text:           #56D364;  /* green text/icon on dark (≈8:1) */
  --success-bg:             #0E2A15;  /* subtle green surface */
  --error:                  #F85149;  /* red error fill / 4xx-5xx / "invented" stamp */
  --error-text:             #FF7B72;  /* red text/icon on dark (≈6:1) */
  --error-bg:               #2C0F0E;  /* subtle red surface */
  --warning:                #E3B341;  /* amber: "expired" key, caution, plaintext-key warn */
  --warning-text:           #E9C46A;  /* amber text on dark (≈9:1) */
  --warning-bg:             #2A2109;  /* subtle amber surface */
  --ai:                     var(--cta-accent);       /* alias: "needs AI" = brand accent */
  --ai-bg:                  #08222E;                 /* subtle cyan surface behind AI chunk */
  --neutral:               var(--text-subtle);       /* alias: "rule" = gray/neutral */
  --neutral-bg:            var(--surface-2);

  /* --- Category label pills (Sift triage: Sales/Support/Billing/Spam/Urgent) --- */
  /* Chosen to be distinct from each other AND from success/error/warning. */
  --label-sales:            #7C9CFF;  /* indigo-blue */
  --label-support:          #4FD1C5;  /* teal */
  --label-billing:          #C792EA;  /* violet */
  --label-spam:             #6B7480;  /* gray (deprioritized) */
  --label-urgent:           #FF7B72;  /* red-adjacent (shares error family, intentional) */

  /* --- Data-viz / meters --- */
  --meter-track:            #1A1F2B;
  --meter-fill:             var(--cta-accent);       /* tokens meter fill */
  --meter-fill-spike:       var(--error);            /* cost blowup state */
  --meter-fill-ok:          var(--success);          /* lean/hardened state */
  --cost-figure:            var(--warning-text);     /* the running "$" (illustrative) */

  /* --- Elevation (dark = glow-forward, low shadow) --- */
  --shadow-1:               0 1px 2px rgba(0,0,0,0.40);
  --shadow-2:               0 4px 16px rgba(0,0,0,0.45);
  --shadow-pop:             0 8px 40px rgba(0,0,0,0.55);
  --focus-ring:             0 0 0 2px var(--bg), 0 0 0 4px var(--cta-accent);
  --ai-glow:                0 0 0 1px var(--cta-accent), 0 0 24px var(--cta-accent-glow);

  /* --- Radius --- */
  --r-xs: 4px; --r-sm: 6px; --r-md: 10px; --r-lg: 14px; --r-xl: 20px; --r-pill: 999px;

  /* --- Spacing scale (4px base) --- */
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px;
  --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;

  /* --- Hazard motif (logo/slate/CTA chrome only) --- */
  --hazard-a:               #FFD21E;  /* stripe 1 */
  --hazard-b:               #0B0E14;  /* stripe 2 (near-black) */
  --hazard-stripes:         repeating-linear-gradient(45deg,
                              var(--hazard-a) 0 18px, var(--hazard-b) 18px 36px);
}

/* ---- LIGHT theme (checklist one-pager, light diagrams, print) ---- */
[data-theme="light"] {
  --cta-primary:            #F5C400;  --cta-primary-ink: #0B0E14;  --cta-primary-dim: #C79A00;
  --cta-accent:             #0E86C7;  --cta-accent-strong: #0A6A9E; --cta-accent-ink: #FFFFFF;
  --cta-accent-glow:        color-mix(in srgb, var(--cta-accent) 30%, transparent);

  --bg:        #F6F7F9;  --bg-deep: #E9ECF1;  --surface: #FFFFFF;
  --surface-2: #F1F3F6;  --surface-3: #E6E9EF;
  --border:    #D8DCE3;  --border-strong: #B7BEC9;  --overlay-scrim: rgba(11,14,20,0.45);

  --text:        #0B0E14;  /* ≈16:1 on --bg */
  --text-muted:  #55606E;  /* ≈6.7:1 AA */
  --text-subtle: #6B7480;  /* rule-gray, UI/large */
  --text-inverse:#FFFFFF;

  --success: #1A7F37;  --success-text: #116329;  --success-bg: #E6F4EA;
  --error:   #CF222E;  --error-text:   #A40E26;  --error-bg:   #FBE9E9;
  --warning: #9A6700;  --warning-text: #7A5200;  --warning-bg: #FFF6E0;
  --ai: var(--cta-accent);  --ai-bg: #E3F2FB;  --neutral: var(--text-subtle);  --neutral-bg: var(--surface-2);

  --label-sales:#3457D5; --label-support:#0E8A7D; --label-billing:#8E44C7; --label-spam:#6B7480; --label-urgent:#CF222E;
  --meter-track:#E6E9EF;
  --shadow-1: 0 1px 2px rgba(11,14,20,0.10);
  --shadow-2: 0 4px 16px rgba(11,14,20,0.12);
  --shadow-pop:0 8px 40px rgba(11,14,20,0.18);
  --ai-glow: 0 0 0 1px var(--cta-accent), 0 0 18px var(--cta-accent-glow);
}
```

### 1b. JSON tokens (exportable — `tokens.json`, for JS/SVG generators)

```json
{
  "$meta": { "name": "crash-test-agents", "version": "1.0.0", "defaultTheme": "dark" },
  "brand": {
    "primary":       "#FFD21E",
    "primaryInk":    "#0B0E14",
    "accent":        "#45C8FF",
    "accentStrong":  "#12A5EE",
    "accentInk":     "#041017",
    "tagline":       "We break AI agents so yours don't."
  },
  "dark": {
    "bg": "#0B0E14", "bgDeep": "#070910",
    "surface": "#12161F", "surface2": "#1A1F2B", "surface3": "#232A38",
    "border": "#2A303C", "borderStrong": "#3A4354", "overlayScrim": "rgba(7,9,16,0.66)",
    "text": "#E6E9EF", "textMuted": "#9AA4B2", "textSubtle": "#6B7480", "textInverse": "#0B0E14",
    "success": "#3FB950", "successText": "#56D364", "successBg": "#0E2A15",
    "error": "#F85149", "errorText": "#FF7B72", "errorBg": "#2C0F0E",
    "warning": "#E3B341", "warningText": "#E9C46A", "warningBg": "#2A2109",
    "ai": "#45C8FF", "aiBg": "#08222E", "neutral": "#6B7480", "neutralBg": "#1A1F2B",
    "label": { "sales": "#7C9CFF", "support": "#4FD1C5", "billing": "#C792EA", "spam": "#6B7480", "urgent": "#FF7B72" },
    "meter": { "track": "#1A1F2B", "fill": "#45C8FF", "spike": "#F85149", "ok": "#3FB950", "costFigure": "#E9C46A" }
  },
  "light": {
    "bg": "#F6F7F9", "bgDeep": "#E9ECF1",
    "surface": "#FFFFFF", "surface2": "#F1F3F6", "surface3": "#E6E9EF",
    "border": "#D8DCE3", "borderStrong": "#B7BEC9", "overlayScrim": "rgba(11,14,20,0.45)",
    "text": "#0B0E14", "textMuted": "#55606E", "textSubtle": "#6B7480", "textInverse": "#FFFFFF",
    "success": "#1A7F37", "successText": "#116329", "successBg": "#E6F4EA",
    "error": "#CF222E", "errorText": "#A40E26", "errorBg": "#FBE9E9",
    "warning": "#9A6700", "warningText": "#7A5200", "warningBg": "#FFF6E0",
    "ai": "#0E86C7", "aiBg": "#E3F2FB", "neutral": "#6B7480", "neutralBg": "#F1F3F6",
    "label": { "sales": "#3457D5", "support": "#0E8A7D", "billing": "#8E44C7", "spam": "#6B7480", "urgent": "#CF222E" },
    "meter": { "track": "#E6E9EF", "fill": "#0E86C7", "spike": "#CF222E", "ok": "#1A7F37", "costFigure": "#7A5200" }
  },
  "radius": { "xs": 4, "sm": 6, "md": 10, "lg": 14, "xl": 20, "pill": 999 },
  "space":  { "1": 4, "2": 8, "3": 12, "4": 16, "5": 24, "6": 32, "7": 48, "8": 64, "9": 96 },
  "hazard": { "a": "#FFD21E", "b": "#0B0E14", "angleDeg": 45, "stripePx": 18 }
}
```

### 1c. Semantic mapping to the screenplay (so renderers don't guess)

| Screenplay slot | Token |
|---|---|
| `[BRAND palette]` (general) | dark backgrounds/surfaces/text set above |
| `[BRAND accent]` — the "needs AI" glow (S011, S016, S017…) | `--ai` / `--cta-accent` `#45C8FF` + `--ai-glow` |
| gray "rule" tag (S011) | `--neutral` `#6B7480` on `--neutral-bg` |
| green ✓ checks (S001, S015, S022, S048) | `--success` / `--success-text` |
| red errors, "400", "invented" stamp (S002, S019, S031) | `--error` / `--error-text` |
| amber "expired" key, plaintext-key warning (S023, S040, S042) | `--warning` / `--warning-text` |
| Sales/Support/Billing label pills (S001) | `--label-sales/support/billing` |
| token meter + running "$" (S006, S037, S038) | `--meter-*`, `--cost-figure` |
| `[BRAND logo]` (S051, S052) | see §3 SVG |
| "200/400/401/403/404/500" status chart (S021) | 2xx→`success`, 4xx→`warning`(400/401/403/404 rows) with 400 highlighted in `error`, 5xx→`error` |

**WCAG-AA spot-checks (dark, on stated surface):** text `#E6E9EF`/`--bg` ≈15:1 ·
muted `#9AA4B2`/`--bg` ≈7.4:1 · `--success-text` on `--surface` ≈8:1 ·
`--error-text` on `--surface` ≈6:1 · `--warning-text` on `--surface` ≈9:1 ·
`--cta-accent` on `--surface` ≈9:1 · `--cta-primary` ink `#0B0E14` on yellow ≈17:1.
All pass AA (≥4.5:1 text / ≥3:1 UI). `--text-subtle` (rule-gray) is AA for
UI/large text only — never use it for small body copy.

---

## 2. TYPOGRAPHY

All three are free (SIL Open Font License), self-hostable, and render identically
across the deterministic pipeline. Ship the `.woff2` in the render bundle — do not
rely on a CDN at render time.

| Role | Family | Why | Weights to bundle |
|---|---|---|---|
| **Display** (slates, title cards, big numbers, thumbnail text) | **Space Grotesk** | technical, slightly mechanical, distinctive at huge sizes — reads "engineering/crash-lab" | 500, 700 |
| **UI + body** (all app chrome, captions, lower-thirds, labels) | **Inter** | the neutral SaaS workhorse; makes Sift/Rolodash look like real software | 400, 500, 600, 700 |
| **Mono** (code, prompts, `.env`, keys, status codes, tokens, terminal) | **JetBrains Mono** | high legibility for code + tabular figures; ligatures off for honesty | 400, 500, 700 |

```css
:root {
  --font-display: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-sans:    "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  --font-feature-mono: "calt" 0, "liga" 0, "tnum" 1; /* no code ligatures; tabular nums */
}
```

**Type scale.** Two contexts share one ~1.25 (major-third) scale. `ui-*` sizes are
for *simulated app UIs* recorded at 1:1 on a 1920×1080 canvas (crisp when
screen-captured). `bcast-*` sizes are for *motion-graphic / broadcast* text
(slates, title cards, lower-thirds) meant to be legible on a phone.

```css
:root {
  /* App-UI scale (screencast) */
  --ui-xs: 12px;  --ui-sm: 14px;  --ui-md: 16px;  --ui-lg: 20px;
  --ui-xl: 24px;  --ui-2xl: 30px; --ui-3xl: 38px;
  --lh-tight: 1.15; --lh-ui: 1.45; --lh-body: 1.6;
  --tracking-tight: -0.02em; --tracking-caps: 0.08em;

  /* Broadcast / motion-graphic scale (1920×1080) */
  --bcast-kicker: 28px;   /* eyebrow / round label, UPPERCASE, tracked */
  --bcast-lower3-sub: 34px;
  --bcast-lower3-title: 52px;
  --bcast-caption: 44px;  /* on-screen caption lines */
  --bcast-h2: 84px;       /* slate secondary line */
  --bcast-h1: 120px;      /* slate primary line */
  --bcast-hero: 168px;    /* full-frame title / big number */
}
```

**Rules of thumb.** Display = `--font-display` 700, `--tracking-tight`, line-height
`--lh-tight`. Kickers/round labels = `--font-sans` 600 UPPERCASE `--tracking-caps`.
Body/UI ≥ `--ui-sm`. All code, keys, HTTP codes, `$`/token figures, order numbers,
version tags (`v1→v3`) = `--font-mono` with `tnum`. Minimum on-screen text for
mobile legibility: **≥28px** at 1080p (never render a broadcast caption below
`--bcast-kicker`).

> Swap candidate (if Ryan wants a more "IBM-honest" feel): **IBM Plex Sans** +
> **IBM Plex Mono** as a matched pair, keeping Space Grotesk for display. Noted in §7.

---

## 3. LOGO / WORDMARK

**Concept — "The Reticle."** A crash-test *crosshair/target reticle* (the mark
painted on crash dummies and impact zones) with one deliberate **fracture** across
it — the moment of impact, the "break." Simple, iconic, and 100% renderable in
SVG/CSS at any size. It doubles as the on-screen "crash-rig" motif (S051) and the
thumbnail stamp.

- **Mark:** a ringed crosshair reticle + center dot, with a single angled fracture
  line crossing the lower-right — "target acquired, then broken."
- **Wordmark:** `CRASH TEST` / `AGENTS` set in **Space Grotesk 700**, uppercase,
  tight tracking. Two-line lockup (mark left, text right) for cards; stacked for
  square/avatar; mark-only for watermark/favicon.
- **Monogram fallback:** `CTA` (Crash Test Agents — and yes, the CTA pun is on
  brand) inside the reticle for the tiniest sizes / channel avatar.
- **Color:** default = `--cta-accent` reticle + `--error` fracture on `--bg`
  (dark). Mono knockout: single `--text` on dark, or `--text-inverse` on yellow.
  Hazard-stripe underline (`--hazard-stripes`) is an optional lockup accent on
  CTA/end cards only.

### First-pass mark — actual SVG (renders as-is)

```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crash Test Agents">
  <!-- outer reticle ring -->
  <circle cx="32" cy="32" r="22" stroke="#45C8FF" stroke-width="3"/>
  <!-- crosshair ticks (gap at center) -->
  <g stroke="#45C8FF" stroke-width="3" stroke-linecap="round">
    <line x1="32" y1="4"  x2="32" y2="16"/>
    <line x1="32" y1="48" x2="32" y2="60"/>
    <line x1="4"  y1="32" x2="16" y2="32"/>
    <line x1="48" y1="32" x2="60" y2="32"/>
  </g>
  <!-- center dot -->
  <circle cx="32" cy="32" r="3.5" fill="#45C8FF"/>
  <!-- impact fracture: a single break crossing the reticle -->
  <path d="M20 20 L34 33 L29 37 L44 46" stroke="#F85149" stroke-width="3"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### Full lockup (mark + wordmark), scalable

```svg
<svg width="420" height="80" viewBox="0 0 420 80" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crash Test Agents">
  <g transform="translate(8,8)">
    <circle cx="32" cy="32" r="22" stroke="#45C8FF" stroke-width="3"/>
    <g stroke="#45C8FF" stroke-width="3" stroke-linecap="round">
      <line x1="32" y1="4" x2="32" y2="16"/><line x1="32" y1="48" x2="32" y2="60"/>
      <line x1="4" y1="32" x2="16" y2="32"/><line x1="48" y1="32" x2="60" y2="32"/>
    </g>
    <circle cx="32" cy="32" r="3.5" fill="#45C8FF"/>
    <path d="M20 20 L34 33 L29 37 L44 46" stroke="#F85149" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="92" y="36" font-family="Space Grotesk, Inter, sans-serif" font-size="30" font-weight="700"
        letter-spacing="1.5" fill="#E6E9EF">CRASH TEST</text>
  <text x="92" y="66" font-family="Space Grotesk, Inter, sans-serif" font-size="30" font-weight="700"
        letter-spacing="6.5" fill="#FFD21E">AGENTS</text>
</svg>
```

*Clear space* = the reticle's radius on all sides. *Min mark size* = 24px (favicon)
/ 48px on video. Never recolor the fracture to anything but `--error` (or mono).

---

## 4. MOTION / TRANSITION TOKENS

Consistent, physical, honest — snappy but never bouncy-cute. Use for CSS keyframes
and GSAP alike. Everything ties to real render frames at **30fps** (durations are
frame-clean: 100ms=3f, 200ms=6f, etc.).

```css
:root {
  /* Durations */
  --dur-instant: 80ms;   /* label snap, tick, checkbox */
  --dur-fast:    160ms;  /* hover, chip in, small state flip */
  --dur-base:    240ms;  /* card in, panel reveal, node connect */
  --dur-slow:    400ms;  /* slate content settle, meter fill leg */
  --dur-deliberate: 640ms; /* full slate transition, montage beat */
  --dur-scan:    1200ms; /* counter roll, meter sweep, push-in */

  /* Easings */
  --ease-standard:  cubic-bezier(0.2, 0, 0, 1);      /* default in/out */
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);   /* decelerate — reveals */
  --ease-in:        cubic-bezier(0.7, 0, 0.84, 0);   /* accelerate — exits */
  --ease-snap:      cubic-bezier(0.34, 1.35, 0.5, 1);/* slight overshoot — slate slam, label snap */
  --ease-mech:      steps(6, end);                   /* mechanical: counters, typewriter, meter segments */
  --ease-linear:    linear;                          /* meter fills, marquee feeds */
}
```

**Named recipes (map to specific screenplay beats):**

| Beat | Recipe |
|---|---|
| Email feed tick / new card (S001, S008) | translateY(16px)+fade in, `--dur-base` `--ease-out`, stagger 90ms |
| Label pill snap ("Sales/Support/Billing") (S001) | scale 0.8→1 + fade, `--dur-instant` `--ease-snap` |
| Green ✓ / checklist tick (S015, S022, S048) | draw-in stroke + pop, `--dur-fast` `--ease-snap` |
| Counter roll (send-count, `$`, tokens) (S002, S006, S034, S037) | `--ease-mech`, `--dur-scan`; digits `tnum` mono |
| Meter fill leg (S006, S038) | width transition `--dur-slow` `--ease-standard`; spike uses `--dur-fast` `--ease-in` to `--meter-fill-spike` |
| Typewriter (prompt builder, drafts) (S015, S030) | per-char `--ease-mech`; caret blink 1000ms steps(2) |
| Slate slam-in (round slates, title card) (S003, S012…) | scale 1.06→1 + fade + scrim, `--dur-deliberate` `--ease-snap` |
| Glitch cut (S002→S003, failure states) | 2–3 frame RGB-split + 1 frame black, then hard cut; keep <120ms |
| Node connect / pipeline draw (S009, S046) | stroke-dashoffset draw `--dur-base` `--ease-out`, sequential |
| "needs AI" glow pulse (S011) | box-shadow `--ai-glow` pulsing, 1600ms ease-in-out infinite (2 cycles then hold) |
| Desaturate to gray ("most of this isn't AI") (S010) | filter saturate(1)→saturate(0.15) `--dur-slow` |
| 400→200 flip (S022) | flip Y `--dur-base` `--ease-snap`, color error→success |

Respect `prefers-reduced-motion` in any interactive export (montage renders ignore it).

---

## 5. TITLE-CARD, ROUND-SLATE & LOWER-THIRD TEMPLATES

Canvas: **1920×1080**, 30fps. Two safe frames on every broadcast asset:

- **Action-safe:** 3.5% inset → margin **67px** → inner **1786×1006**.
- **Title-safe:** 5% inset → margin **96px** → inner **1728×972**. **All text lives inside title-safe.**
- Keep critical text clear of the **bottom 130px** (YouTube control bar / caption band) except deliberate lower-thirds.
- End-screen safe zones (S052): keep the right-side + bottom-right clear for YouTube end-screen cards — reserve a **426×240** slot bottom-right and a **300×300** subscribe slot; put the disclosure line above the bottom action-safe edge.

### 5a. Round slate (S003, S012, S023, S030, S032, S034, S035, S039, S047)
Full-frame, `--bg-deep` with a faint reticle watermark (accent @ 6% opacity)
centered, and a **hazard-stripe rule** (`--hazard-stripes`, 12px tall) top and bottom
inside title-safe.

- **Kicker** (top-left, at title-safe corner): `ROUND 0X` — `--font-sans` 600, `--bcast-kicker`, UPPERCASE, `--cta-accent`, tracking `--tracking-caps`.
- **Primary line** (centered, optical center ~46% height): round name — `--font-display` 700, `--bcast-h1` (120px), `--text`.
- **Optional sub** (below primary): `--bcast-h2`, `--text-muted`.
- **Concept slates** ("failure = data", "guardrails", "human-in-the-loop"): single centered line at `--bcast-hero` (168px) `--font-display` 700, with the key noun in `--cta-accent` (or `--error` for failure). Mark bottom-right inside title-safe.
- Transition: slam-in recipe (§4).

### 5b. Full-frame title card (S003 — the channel promise)
- Blurred/desaturated dashboard frame behind + `--overlay-scrim`.
- Line 1 `CRASH TEST AGENTS` — `--font-display` 700, `--bcast-hero`, `--text`, "AGENTS" or the whole in `--cta-primary` on the hero title only (this is the one place hazard yellow appears as headline color).
- Line 2 (tagline) `We break AI agents so yours don't.` — `--font-display` 500, `--bcast-h2`, `--text-muted`.
- Line 3 (promise, resolves after) `25 ways to kill an agent → 25 fixes.` — `--font-mono` 500, `--bcast-caption`, `--cta-accent` on the arrow/numbers.
- Logo lockup bottom-left inside title-safe.

### 5c. Lower-third (name/label bar — Rolodash contacts, node labels, "Day 2", captions)
- Position: **x=96px, baseline y≈880px** (bottom band, above the 130px control-clear zone), left-aligned.
- Structure: a `--surface` bar (radius `--r-md`, `--shadow-2`) with a **6px `--cta-accent` left spine**.
  - Title: `--font-sans` 700, `--bcast-lower3-title` (52px), `--text`.
  - Sub: `--font-sans` 500, `--bcast-lower3-sub` (34px), `--text-muted`.
- Enter: slide-in from left translateX(-32px)+fade, `--dur-base` `--ease-out`; spine wipes first.
- Caption variant (center-lower, for VO emphasis lines like "Boring is reliable."): centered, `--bcast-caption`, `--font-display` 500, on a `--overlay-scrim` pill; key word in `--cta-accent`.

### 5d. CTA / end card (S051, S052)
- `--bg-deep`, reticle "crash-rig" graphic (accent) center-left, hazard-stripe rule.
- Headline `--bcast-h1`, logo lockup, `Subscribe` chip in `--cta-primary` (ink `--cta-primary-ink`).
- **Synthetic-media disclosure line** — *permanent template element*: `--font-sans` 500,
  `--ui-xl` (24px min), `--text-muted`, positioned just inside bottom title-safe, left-aligned:
  `Contains realistic AI-generated media.` (Do not let any layout omit it — S051/S052 ⚠️VERIFY.)
- End-card leaves the reserved end-screen slots (§5) empty.

---

## 6. THUMBNAIL DIRECTION

A repeatable **"break stamp"** formula — instantly recognizable as the channel,
never a copy of any reference. Canvas **1280×720**, but design every element inside
**title-safe 1160×640** (thumbnails get cropped in some surfaces).

**The formula (3 fixed zones):**
1. **Left 55% — the verdict.** 2–4 words, ALL CAPS, `--font-display` 700, huge
   (`120–200px`), `--text`, with the payoff word in `--cta-accent` or `--error`.
   Examples of the *pattern* (not fixed copy): `IT LIED.` / `$0 → $2,300` /
   `4 EMAILS. SAME GUY.` / `KEY. IN. THE. PROMPT.`
2. **Right 45% — the evidence.** One real, cropped fragment of the episode's UI in
   its failure state (red error banner, spiking token meter, duplicate-send stack,
   plaintext key), on `--bg`, tilted ~3–5°, with a `--error` glow or a red circle-
   scribble marking the break. This is the honesty hook — show the actual broken thing.
3. **Constant furniture:** the **reticle mark** stamped in a corner (target on the
   break); a thin `--hazard-stripes` edge along the bottom (or one corner chevron);
   dark `--bg` background always.

**Rules:** dark background always; exactly **one** accent pop per thumb (cyan *or*
red, not both loud); max 4 words of headline; the reticle + hazard edge appear on
every thumbnail so the grid reads as one channel; never use a face (faceless brand);
text legible as a 168px-wide mobile chip (test at that size).

---

## 7. OPEN CHOICES FOR RYAN (fast picks — everything else is locked)

Pick these 4 and production unblocks fully. Defaults are set; if you say nothing we ship the ★.

**A) AI / brand-accent hue** — the color of the "needs AI" glow, highlights, the reticle. The single most visible brand color inside the UIs.
- ★ **A1 — Signal Cyan `#45C8FF`** (default): clinical, diagnostic, "screen/AI." Complements the hazard yellow.
- **A2 — Aqua Reactor `#2FE6C9`**: greener, fresher, more "energy," slightly softer edge (watch overlap with success-green).
- **A3 — Electric Violet `#A78BFA`**: more premium/"AI-lab," high contrast on dark, zero clash with any state color.

**B) Crash-test signature (identity) color** — logo, slates, CTA chrome.
- ★ **B1 — Hazard Yellow `#FFD21E`** (default): maximum crash-test read, loud, irreverent.
- **B2 — Safety Orange `#FF6A2B`**: warmer, a touch more "industrial/serious," lower yellow-vs-warning confusion risk.

**C) Logo mark direction** — all deterministically SVG-renderable; §3 ships C1.
- ★ **C1 — The Reticle** (default): crosshair target + impact fracture. Abstract, scales tiny, doubles as crash-rig + thumbnail stamp.
- **C2 — Dummy-head roundel**: crash-test-dummy head (circle + the dummy's characteristic asymmetric target eye) — more literal/mascot-y.
- **C3 — Impact burst**: an angular shatter/impact star behind a monospace `CTA` — more "explosion," less "clinical."

**D) Typography personality** — locked default works today; this is only if you want a different feel.
- ★ **D1 — Space Grotesk + Inter + JetBrains Mono** (default): technical, distinctive display.
- **D2 — IBM Plex Sans + IBM Plex Mono (+ Space Grotesk display)**: more uniform "honest engineering" system feel.

*(Everything else — dark-first UI, semantic state colors, meter/label palette, safe
areas, motion tokens, thumbnail formula, disclosure-line requirement — is locked so
the reusable components can be mass-rendered now.)*

---

## Appendix — component quick-map (build once, restyle via tokens)

| Reusable component (screenplay §RECURRING) | Primary tokens |
|---|---|
| Sift dashboard | `--bg`,`--surface`,`--border`; labels `--label-*`; `--success` checks; failure state `--error` rail + counter |
| Harbor inbox | `--surface/-2/-3` rows, `--text-muted` senders, "invented" watermark `--text-subtle` |
| Round slates / title / CTA / end | §5 templates; `--font-display`; hazard rule; disclosure line |
| Token / cost meter | `--meter-*`, `--cost-figure`; states ticking/spiking/dropping; permanent "illustrative" strip `--warning-bg` |
| System-prompt builder | `--font-mono`; section checklist `--success`/`--neutral`; leaked-key `--warning` + blur; per-line→test tethers `--cta-accent` |
| Pipeline node canvas | node `--surface`, edges `--border`→`--cta-accent` on active; rule=`--neutral`, needs-AI=`--ai`+`--ai-glow`; success/error branches |
| Rolodash / permissions | key status `--success`(active)/`--warning`(expired); all-ON toggles `--error`-tinted alarm; scoped = `--success` |
| Checklist sidebar / one-pager | light theme for S050 one-pager; rows tick `--success`; group headers `--cta-accent` |
| HTTP status chart | 2xx `--success`, 4xx `--warning` (400 row highlighted `--error`), 5xx `--error` |
