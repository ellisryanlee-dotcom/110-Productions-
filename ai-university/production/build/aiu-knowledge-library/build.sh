#!/usr/bin/env bash
# Reproducible build for "AI University — Knowledge Library" 30s cut.
# Source = 6 pre-generated Higgsfield clips (workspace 6b5d83ef, rendered 2026-08-09 02:47-02:51 UTC).
# No new generation / $0 — this only downloads existing completed assets and stitches them.
# Requires: ffmpeg, curl. Usage: ./build.sh [OUTDIR]
set -euo pipefail
OUT="${1:-out}"
mkdir -p "$OUT"; cd "$OUT"

CF="https://d8j0ntlcm91z4.cloudfront.net/user_37fUD9dU1JkMPzD8ShF8ur2RLka"
# narrative order: establish -> discover -> examine -> activate -> dissolve -> close
declare -a MAP=(
  "1_aisle|$CF/hf_20260809_024712_da9baec1-ce93-42cd-b995-e3c8bb15ba2e.mp4"      # dolly down the library aisle of glowing cartridges
  "2_pull|$CF/hf_20260809_024712_c0013243-b856-4e53-b67c-762248e43bad.mp4"       # she pulls a cartridge, weighs it in her palm
  "3_desk|$CF/hf_20260809_025114_31065c35-e0e0-44e3-b7a2-0bdc4926fc7e.mp4"       # push-in at the desk, turns cartridge, looks up
  "4_insert|$CF/hf_20260809_024712_a4839c70-b594-4242-910a-61eba2d7a39c.mp4"     # cartridge seats into console, core ignites
  "5_dissolve|$CF/hf_20260809_024712_a6ba6bff-3637-49f2-89c7-63b11e365f1b.mp4"   # amber lattice dissolves into embers
  "6_lightsoff|$CF/hf_20260809_024724_de93ee7c-9553-4893-a723-ef8a6144e096.mp4"  # taps lamp off, walks out, room settles
)
for e in "${MAP[@]}"; do n="${e%%|*}"; u="${e##*|}"; curl -s -o "$n.mp4" "$u"; done

# normalize each to 1280x720 24fps for xfade
for f in 1_aisle 2_pull 3_desk 4_insert 5_dissolve 6_lightsoff; do
  ffmpeg -y -loglevel error -i "$f.mp4" \
    -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,setsar=1,format=yuv420p" \
    -an -c:v libx264 -crf 18 -preset medium "n_$f.mp4"
done

# 0.5s crossfades between shots + fade in/out
ffmpeg -y -loglevel error \
  -i n_1_aisle.mp4 -i n_2_pull.mp4 -i n_3_desk.mp4 -i n_4_insert.mp4 -i n_5_dissolve.mp4 -i n_6_lightsoff.mp4 \
  -filter_complex "\
[0][1]xfade=transition=fade:duration=0.5:offset=4.54[a]; \
[a][2]xfade=transition=fade:duration=0.5:offset=9.08[b]; \
[b][3]xfade=transition=fade:duration=0.5:offset=13.62[c]; \
[c][4]xfade=transition=fade:duration=0.5:offset=18.16[d]; \
[d][5]xfade=transition=fade:duration=0.5:offset=22.70[e]; \
[e]fade=t=in:st=0:d=0.6,fade=t=out:st=27.1:d=0.65,format=yuv420p[v]" \
  -map "[v]" -c:v libx264 -crf 19 -preset medium -movflags +faststart aiu-knowledge-library-30s.mp4

echo "built -> $OUT/aiu-knowledge-library-30s.mp4"
