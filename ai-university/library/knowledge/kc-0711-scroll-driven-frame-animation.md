---
id: kc-0711
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [animation, scroll, ffmpeg, frames, web-craft]
source_video: q0TgUtj6vIs
source_channel: "@nateherk"
source_views: "231K"
confidence: high
---
# How scroll-driven web animation works: frames mapped to scroll position

**What:** The mechanism behind "3D" scroll animations on premium sites. There is
no real-time 3D engine — a video is split into many still frames (e.g., 100+ WebP
images), and each frame is tied to a scroll position. Scrolling down advances
through the frames like stop-motion; scrolling up reverses. The illusion of a
product rotating, opening, or going to x-ray is just sequential images swapped by
scroll.

**Why it matters:** Once you understand it's frames-on-scroll, the technique
generalizes far beyond product spins — it can reveal text, show walking, or any
motion you can capture as a video. It also explains the build's dependencies and
failure modes (frame extraction, hosting the frames).

**The moves:**
1. Produce a short source video of the motion you want.
2. Extract it into a sequence of image frames (FFmpeg does this).
3. Bind the frame index to scroll position so scrolling scrubs the sequence.
4. Store the frames with the site so they render in production.

**Watch out for:** The frames are assets that must ship with the deploy; if a
build tool ignores them, the animation silently disappears. More frames = smoother
motion but heavier payload.

**Original example to invent:** Describe a non-product use of the technique (e.g.,
a process or a character motion) and how you'd capture the source video for it.
