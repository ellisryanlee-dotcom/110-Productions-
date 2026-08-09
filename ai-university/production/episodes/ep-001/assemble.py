#!/usr/bin/env python3
"""EP-001 assembly: pieces -> segments -> episode MP4 with captions and mix.

Re-runnable; pass --vo-s4 <wav> to swap the S4 voice (e.g. after the Raina
segment is generated) and rebuild in one go.
"""
import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

FF = "/usr/bin/ffmpeg"
HERE = Path(__file__).parent
A = HERE / "assets"
W = HERE / "build"
W.mkdir(exist_ok=True)

p = argparse.ArgumentParser()
p.add_argument("--vo-s4", default=str(A / "vo_s4.wav"), help="S4 voice wav (default: temp Dylan)")
p.add_argument("--s4-temp", action="store_true", default=None,
               help="mark S4 with TEMP VO tag (auto: on when default temp wav used)")
p.add_argument("--out", default=str(HERE / "ep001.mp4"))
args = p.parse_args()
S4_TEMP = args.s4_temp if args.s4_temp is not None else (Path(args.vo_s4).name == "vo_s4.wav")


def dur(path):
    out = subprocess.run([FF, "-i", str(path)], capture_output=True, text=True).stderr
    m = re.search(r"Duration: (\d+):(\d+):([\d.]+)", out)
    return int(m.group(1)) * 3600 + int(m.group(2)) * 60 + float(m.group(3))


def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print(r.stderr[-1600:], file=sys.stderr)
        sys.exit(f"FFMPEG FAILED: {' '.join(map(str, cmd))[:200]}")


# ---- VO durations drive the segment lengths -------------------------------
VO = {"S1": A / "ra_s1.wav", "S3": A / "ra_s3.wav", "S4": Path(args.vo_s4),
      "S5": A / "ra_s5.wav", "S6": A / "ra_s6.wav", "S7": A / "ra_s7.wav",
      "S8": A / "ra_s8.wav"}
VD = {k: dur(v) for k, v in VO.items()}
TITLE = 4.0
seg_len = {"S1": VD["S1"], "S2": TITLE, "S3": VD["S3"], "S4": VD["S4"],
           "S5": VD["S5"], "S6": VD["S6"], "S7": VD["S7"], "S8": VD["S8"] + 1.2}

# ---- piece plans: (kind, source, weight) — weights scale to fill segment --
# kind: vid (gen video, slow-stretched), still (ken burns), card (brand zoom), term (screen capture)
PLAN = {
    "S1": [("vid", "s01.mp4", 6.3), ("still", "k02.png", 8), ("still", "k05.png", 8), ("vidtail", "s05.mp4", 8)],
    "S2": [("card", "brand_title.png", TITLE)],
    "S3": [("vid", "s03.mp4", 6.3), ("card", "brand_closed_open.png", 16), ("card", "brand_gap_chart.png", 16),
           ("still", "k00_b.png", 12), ("still", "k02.png", 13)],
    "S4": [("vid", "s04a.mp4", 6.3), ("term", "terminal_ollama.webm", 12.3), ("card", "brand_gate_card.png", 13),
           ("still", "k03.png", 12), ("still", "k02.png", 8), ("vidtail", "s04a.mp4", 10)],
    "S5": [("vid", "s05.mp4", 6.3), ("still", "k04.png", 12), ("term", "terminal_ctx.webm", 12.3),
           ("still", "k02.png", 10), ("vidtail", "s03.mp4", 12)],
    "S6": [("vid", "s06.mp4", 6.3), ("term", "terminal_settings.webm", 18.8), ("card", "brand_logs_card.png", 14),
           ("still", "k05.png", 12), ("vidtail", "s06.mp4", 7)],
    "S7": [("card", "brand_triage.png", 24), ("still", "k03.png", 12), ("still", "k04.png", 12)],
    "S8": [("vid", "s08.mp4", 6.3), ("card", "brand_end_slate.png", 20)],
}

pieces = []           # (ts_path, seconds)
kb_flip = 0
for seg, plan in PLAN.items():
    total_w = sum(w for _, _, w in plan)
    remaining = seg_len[seg]
    for i, (kind, src, w) in enumerate(plan):
        secs = round(seg_len[seg] * w / total_w, 3) if i < len(plan) - 1 else round(remaining, 3)
        remaining -= secs
        out = W / f"{seg}_{i:02d}.ts"
        pieces.append((out, secs, seg))
        if out.exists() and abs(dur(out) - secs) < 0.35:
            continue
        src_p = A / src
        common = ["-r", "24", "-an", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18",
                  "-pix_fmt", "yuv420p", "-f", "mpegts", str(out)]
        if kind in ("vid", "vidtail"):
            d = dur(src_p)
            stretch = secs / min(d, secs / 1.0) if False else max(1.0, secs / d)
            # slow the clip just enough to cover secs (cap 1.45x slow)
            stretch = min(secs / d, 1.45)
            if kind == "vidtail":
                start = max(0.0, d - secs / stretch)
                pre = ["-ss", f"{start:.3f}"]
            else:
                pre = []
            vf = f"setpts={stretch:.4f}*PTS,scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=24"
            run([FF, "-y", "-v", "error", *pre, "-i", str(src_p), "-vf", vf, "-t", f"{secs:.3f}", *common])
        elif kind == "term":
            d = dur(src_p)
            stretch = min(max(1.0, secs / d), 1.5)
            vf = f"setpts={stretch:.4f}*PTS,scale=1920:1080,fps=24"
            run([FF, "-y", "-v", "error", "-i", str(src_p), "-vf", vf, "-t", f"{secs:.3f}", *common])
        else:  # still / card ken burns
            frames = int(secs * 24) + 1
            if kind == "card":
                z = f"zoompan=z='1+0.04*on/{frames}':d={frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=24"
            else:
                kb_flip += 1
                if kb_flip % 2:
                    z = f"zoompan=z='1.10-0.08*on/{frames}':d={frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=24"
                else:
                    z = f"zoompan=z='1.02+0.08*on/{frames}':d={frames}:x='iw/2-(iw/zoom/2)':y='ih/3-(ih/zoom/3)':s=1920x1080:fps=24"
            vf = f"scale=2400:1350:force_original_aspect_ratio=increase,crop=2400:1350,{z}"
            run([FF, "-y", "-v", "error", "-loop", "1", "-i", str(src_p), "-vf", vf,
                 "-t", f"{secs:.3f}", *common])
        print(f"  piece {out.name} {secs:.2f}s")

# ---- concat video (filter graph — the static build's concat demuxer segfaults)
video_all = W / "video_all.mp4"
if not video_all.exists():
    ins = []
    for p, _, _ in pieces:
        ins += ["-i", str(p)]
    norm = ";".join(f"[{i}:v]scale=1920:1080,setsar=1,fps=24,format=yuv420p[n{i}]"
                    for i in range(len(pieces)))
    labels = "".join(f"[n{i}]" for i in range(len(pieces)))
    fc = f"{norm};{labels}concat=n={len(pieces)}:v=1:a=0[out]"
    run([FF, "-y", "-v", "error", *ins, "-filter_complex", fc, "-map", "[out]",
         "-r", "24", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18",
         "-pix_fmt", "yuv420p", str(video_all)])
V_TOTAL = dur(video_all)

# ---- segment start times ---------------------------------------------------
starts, t = {}, 0.0
for seg in PLAN:
    starts[seg] = t
    t += seg_len[seg]
print("segment starts:", {k: round(v, 2) for k, v in starts.items()}, "total", round(t, 2))

# ---- audio mix -------------------------------------------------------------
mix = W / "mix.wav"
ins, filts, amix = [], [], []
for i, (seg, wav) in enumerate(VO.items()):
    ins += ["-i", str(wav)]
    filts.append(f"[{i}:a]aresample=48000,adelay={int(starts[seg]*1000)}|{int(starts[seg]*1000)}[v{i}]")
    amix.append(f"[v{i}]")
n = len(VO)
ins += ["-i", str(A / "ambient_bed.wav")]
filts.append(f"[{n}:a]atrim=0:{V_TOTAL:.3f},volume=0.16,afade=t=out:st={V_TOTAL-4:.3f}:d=4[bed]")
amix.append("[bed]")
fc = ";".join(filts) + f";{''.join(amix)}amix=inputs={n+1}:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=11[out]"
run([FF, "-y", "-v", "error", *ins, "-filter_complex", fc, "-map", "[out]",
     "-ar", "48000", "-c:a", "pcm_s16le", str(mix)])

# ---- captions (.ass) -------------------------------------------------------
SCRIPT = (HERE / "script.md").read_text()
def seg_text(seg):
    m = re.search(rf"## {seg} —.*?VO:\n(.*?)(?=\n## |\n---)", SCRIPT, re.S)
    return re.sub(r"\s+", " ", m.group(1)).strip() if m else ""

def ass_time(s):
    h = int(s // 3600); m = int(s % 3600 // 60); sec = s % 60
    return f"{h}:{m:02d}:{sec:05.2f}"

events = []
for seg in VO:
    text = seg_text(seg)
    sentences = [x.strip() for x in re.split(r"(?<=[.?!])\s+", text) if x.strip()]
    # pair short sentences to reduce caption churn
    lines, buf = [], ""
    for s in sentences:
        if len(buf) + len(s) < 90:
            buf = (buf + " " + s).strip()
        else:
            if buf: lines.append(buf)
            buf = s
    if buf: lines.append(buf)
    total_chars = sum(len(x) for x in lines)
    t0 = starts[seg]
    for line in lines:
        d = VD[seg] * len(line) / total_chars
        events.append((t0, min(t0 + d, starts[seg] + VD[seg]), line))
        t0 += d
ass = W / "captions.ass"
hdr = """[Script Info]
PlayResX: 1920
PlayResY: 1080
[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Liberation Sans,46,&H00FAF7F5,&H00FAF7F5,&H00140E0B,&H96140E0B,-1,0,0,0,100,100,0,0,1,2.4,1.2,2,120,120,54,1
Style: Temp,Liberation Sans,30,&H0000B3FF,&H0000B3FF,&H00140E0B,&H00140E0B,-1,0,0,0,100,100,0,0,1,2,0,9,40,40,36,1
[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
lines_out = [hdr]
for a, b, txt in events:
    txt = txt.replace("{", "(").replace("}", ")")
    lines_out.append(f"Dialogue: 0,{ass_time(a)},{ass_time(b)},Cap,,0,0,0,,{txt}\n")
if S4_TEMP:
    lines_out.append(f"Dialogue: 1,{ass_time(starts['S4'])},{ass_time(starts['S4']+VD['S4'])},Temp,,0,0,0,,TEMP VO\n")
ass.write_text("".join(lines_out))

# ---- final mux -------------------------------------------------------------
run([FF, "-y", "-v", "error", "-i", str(video_all), "-i", str(mix),
     "-vf", f"ass={ass}", "-c:v", "libx264", "-preset", "medium", "-crf", "19",
     "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart",
     "-shortest", args.out])
print(f"DONE {args.out} {dur(args.out):.1f}s")
