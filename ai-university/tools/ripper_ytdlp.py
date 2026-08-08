#!/usr/bin/env python3
"""Transcript ripper fallback for bot-gated networks (datacenter IPs).

`ripper.py transcripts` scrapes the watch page, which YouTube refuses on
datacenter IPs ("Sign in to confirm you're not a bot" — every InnerTube player
client and the get_transcript endpoint are gated the same way). This fallback
drives yt-dlp with a BotGuard proof-of-origin (PO) token provider, which is the
community-standard way to satisfy that attestation without cookies or login.

One-time setup (needs node >= 20 and pip):

    pip install yt-dlp bgutil-ytdlp-pot-provider
    git clone https://github.com/Brainicism/bgutil-ytdlp-pot-provider.git
    cd bgutil-ytdlp-pot-provider/server
    npm install && npm install axios@latest && npx tsc
    node build/main.js --port 4416 &          # PO-token provider server

Behind an egress proxy, export HTTPS_PROXY for the server process (axios >=
1.16.1 is required for CONNECT-style proxying — hence the axios upgrade above).

Then:

    python3 tools/ripper_ytdlp.py --channel-dir channels/nateherk \
        --min-seconds 120 --limit 50

Output is byte-compatible with ripper.py (same frontmatter + 60s paragraphs);
already-ripped videos are skipped, failures land in transcripts/_failed.json.
"""

import argparse
import html
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from ripper import length_seconds, transcript_markdown  # noqa: E402

SRV1_TEXT_RE = re.compile(r'<text start="([\d.]+)"[^>]*>(.*?)</text>', re.S)


def parse_srv1(path):
    """srv1 XML -> [(start_seconds, text)] (html-unescaped twice: & -> &amp;)."""
    segments = []
    for m in SRV1_TEXT_RE.finditer(path.read_text()):
        text = html.unescape(html.unescape(m.group(2)))
        text = text.replace("\n", " ").strip()
        if text:
            segments.append((float(m.group(1)), text))
    return segments


def run_ytdlp(videos, sub_args, subs_dir, sleep):
    cmd = [
        "yt-dlp", "--skip-download", "--ignore-no-formats-error",
        "--sub-format", "srv1",
        "--extractor-args", "youtube:player_client=web;player_skip=webpage",
        "--sleep-requests", str(sleep),
        "-o", str(subs_dir / "%(id)s"),
        "--no-progress", "--no-warnings",
        *sub_args,
        *[v["url"] for v in videos],
    ]
    subprocess.run(cmd, check=False)


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--channel-dir", required=True)
    p.add_argument("--limit", type=int)
    p.add_argument("--min-views", type=int)
    p.add_argument("--min-seconds", type=int, default=0)
    p.add_argument("--ids", help="comma-separated video ids")
    p.add_argument("--sleep", type=float, default=1.0,
                   help="seconds yt-dlp sleeps between requests")
    p.add_argument("--keep-subs", help="dir to keep raw .srv1 files (default: temp)")
    args = p.parse_args()

    if not shutil.which("yt-dlp"):
        sys.exit("yt-dlp not found — see setup in the module docstring")

    channel_dir = Path(args.channel_dir)
    catalog = json.loads((channel_dir / "catalog.json").read_text())
    tdir = channel_dir / "transcripts"
    tdir.mkdir(exist_ok=True)
    subs_dir = Path(args.keep_subs) if args.keep_subs else Path(tempfile.mkdtemp())
    subs_dir.mkdir(parents=True, exist_ok=True)

    videos = catalog["videos"]
    if args.ids:
        wanted = set(args.ids.split(","))
        videos = [v for v in videos if v["id"] in wanted]
    if args.min_views:
        videos = [v for v in videos if (v.get("views") or 0) >= args.min_views]
    if args.min_seconds:
        videos = [v for v in videos if length_seconds(v.get("length", "")) >= args.min_seconds]
    videos = sorted(videos, key=lambda v: v.get("views") or 0, reverse=True)
    if args.limit:
        videos = videos[: args.limit]

    todo = [v for v in videos if not (tdir / f"{v['id']}.md").exists()]
    done = len(videos) - len(todo)

    # Pass 1: original auto-captions; pass 2: manual subs for the leftovers.
    missing = [v for v in todo if not (subs_dir / f"{v['id']}.en-orig.srv1").exists()]
    if missing:
        run_ytdlp(missing, ["--write-auto-subs", "--sub-langs", "en-orig"],
                  subs_dir, args.sleep)
    still = [v for v in todo if not (subs_dir / f"{v['id']}.en-orig.srv1").exists()]
    if still:
        run_ytdlp(still, ["--write-subs", "--sub-langs", "en.*"],
                  subs_dir, args.sleep)

    ripped, failures = 0, {}
    for v in todo:
        srv, kind = subs_dir / f"{v['id']}.en-orig.srv1", "auto"
        if not srv.exists():
            manual = sorted(subs_dir.glob(f"{v['id']}.en*.srv1"))
            if not manual:
                failures[v["id"]] = "no caption tracks via yt-dlp"
                continue
            srv, kind = manual[0], "manual"
        segments = parse_srv1(srv)
        if not segments:
            failures[v["id"]] = "empty transcript"
            continue
        (tdir / f"{v['id']}.md").write_text(transcript_markdown(v, segments, kind))
        ripped += 1
        print(f"  ripped {v['id']} ({kind}, {len(segments)} segs) {v['title'][:60]}")

    failed_path = tdir / "_failed.json"
    if failures:
        failed_path.write_text(json.dumps(failures, indent=1))
    elif failed_path.exists():
        failed_path.unlink()
    print(f"{ripped} ripped, {done} already present, {len(failures)} failed "
          f"(of {len(videos)} selected)")


if __name__ == "__main__":
    main()
