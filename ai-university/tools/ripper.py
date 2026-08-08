#!/usr/bin/env python3
"""Transcript ripper — catalogs a YouTube channel and rips video transcripts.

Stdlib only; no pip installs needed. Two subcommands:

  python3 ripper.py catalog --channel @nateherk --out channels/nateherk
      Resolves the handle, walks the full uploads playlist via the InnerTube
      API (youtubei.googleapis.com) and writes catalog.json. Works even on
      restricted networks where www.youtube.com is blocked.

  python3 ripper.py transcripts --channel-dir channels/nateherk [--limit N]
                                [--min-views N] [--min-seconds N] [--ids a,b]
      For each catalog entry without a transcript file yet, scrapes the watch
      page for caption tracks and saves transcripts/<id>.md. Needs direct
      access to www.youtube.com (run locally, or in an environment whose
      network policy allows it). Auto-captions are used when no manual track
      exists. Throttled politely; safe to re-run — already-ripped videos are
      skipped, failures are recorded in transcripts/_failed.json and retried
      on the next run.

  python3 ripper.py top --channel-dir channels/nateherk [-n 25]
      Prints the top videos by views (long-form first) — the priority queue
      for the librarian.
"""

import argparse
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from innertube import InnerTube, USER_AGENT  # noqa: E402


# ---------------------------------------------------------------- catalog ---

def cmd_catalog(args):
    it = InnerTube()
    channel_id, title = it.resolve_handle(args.channel)
    print(f"channel: {title} ({channel_id})")
    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)
    videos, seen = [], set()
    for v in it.channel_uploads(channel_id):
        if v["id"] in seen:
            continue
        seen.add(v["id"])
        videos.append(v)
        if len(videos) % 100 == 0:
            print(f"  ...{len(videos)} videos")
    catalog = {
        "channel_handle": args.channel,
        "channel_id": channel_id,
        "channel_title": title,
        "ripped_at": time.strftime("%Y-%m-%d"),
        "video_count": len(videos),
        "videos": videos,
    }
    path = out_dir / "catalog.json"
    path.write_text(json.dumps(catalog, indent=1, ensure_ascii=False))
    long_form = [v for v in videos if length_seconds(v["length"]) >= 120]
    print(f"wrote {path}: {len(videos)} videos ({len(long_form)} long-form)")


def length_seconds(text):
    if not text or ":" not in text:
        return 0
    parts = [int(p) for p in text.split(":") if p.strip().isdigit()]
    sec = 0
    for p in parts:
        sec = sec * 60 + p
    return sec


# ------------------------------------------------------------ transcripts ---

WATCH_HEADERS = {
    "User-Agent": USER_AGENT,
    "Accept-Language": "en-US,en;q=0.9",
}


def fetch_player_response(video_id):
    url = f"https://www.youtube.com/watch?v={video_id}&hl=en"
    req = urllib.request.Request(url, headers=WATCH_HEADERS)
    with urllib.request.urlopen(req, timeout=60) as r:
        html = r.read().decode("utf-8", "replace")
    m = re.search(r"ytInitialPlayerResponse\s*=\s*(\{.+?\})\s*;\s*(?:var\s|</script>)", html)
    if not m:
        raise RuntimeError("ytInitialPlayerResponse not found (blocked or consent page?)")
    return json.loads(m.group(1))


def pick_caption_track(player):
    tracks = (
        player.get("captions", {})
        .get("playerCaptionsTracklistRenderer", {})
        .get("captionTracks", [])
    )
    if not tracks:
        return None
    def score(t):
        lang = t.get("languageCode", "")
        manual = t.get("kind") != "asr"
        return (lang.startswith("en"), manual)
    return sorted(tracks, key=score, reverse=True)[0]


def fetch_transcript(video_id):
    """-> (segments [(start_seconds, text)], track_kind) or raises."""
    player = fetch_player_response(video_id)
    track = pick_caption_track(player)
    if track is None:
        raise RuntimeError("no caption tracks")
    url = track["baseUrl"]
    url += ("&" if "?" in url else "?") + "fmt=json3"
    req = urllib.request.Request(url, headers=WATCH_HEADERS)
    with urllib.request.urlopen(req, timeout=60) as r:
        data = json.loads(r.read().decode("utf-8", "replace"))
    segments = []
    for ev in data.get("events", []):
        text = "".join(seg.get("utf8", "") for seg in ev.get("segs", []) or [])
        text = text.replace("\n", " ").strip()
        if text:
            segments.append((ev.get("tStart", ev.get("t", 0)) / 1000.0, text))
    if not segments:
        raise RuntimeError("empty transcript")
    kind = "auto" if track.get("kind") == "asr" else "manual"
    return segments, kind


def transcript_markdown(video, segments, kind):
    lines = [
        "---",
        f"video_id: {video['id']}",
        f"title: {json.dumps(video['title'])}",
        f"url: {video['url']}",
        f"length: {video.get('length', '')}",
        f"views_text: {video.get('views_text', '')}",
        f"published_text: {video.get('published_text', '')}",
        f"captions: {kind}",
        "---",
        "",
        f"# {video['title']}",
        "",
    ]
    # Paragraphs of ~60s of speech with a timestamp marker each.
    para, para_start = [], None
    for start, text in segments:
        if para_start is None:
            para_start = start
        para.append(text)
        if start - para_start >= 60:
            lines.append(f"`[{fmt_ts(para_start)}]` " + " ".join(para))
            lines.append("")
            para, para_start = [], None
    if para:
        lines.append(f"`[{fmt_ts(para_start)}]` " + " ".join(para))
        lines.append("")
    return "\n".join(lines)


def fmt_ts(seconds):
    s = int(seconds)
    return f"{s // 60}:{s % 60:02d}"


def cmd_transcripts(args):
    channel_dir = Path(args.channel_dir)
    catalog = json.loads((channel_dir / "catalog.json").read_text())
    tdir = channel_dir / "transcripts"
    tdir.mkdir(exist_ok=True)
    failed_path = tdir / "_failed.json"
    failures = {}

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

    done = ripped = 0
    for v in videos:
        out = tdir / f"{v['id']}.md"
        if out.exists():
            done += 1
            continue
        try:
            segments, kind = fetch_transcript(v["id"])
            out.write_text(transcript_markdown(v, segments, kind))
            ripped += 1
            print(f"  ripped {v['id']} ({kind}, {len(segments)} segs) {v['title'][:60]}")
        except Exception as e:  # noqa: BLE001 — record and continue
            failures[v["id"]] = str(e)
            print(f"  FAILED {v['id']}: {e}", file=sys.stderr)
        time.sleep(args.sleep)
    if failures:
        failed_path.write_text(json.dumps(failures, indent=1))
    print(f"{ripped} ripped, {done} already present, {len(failures)} failed "
          f"(of {len(videos)} selected)")


# ------------------------------------------------------------------ enrich ---

CHAPTER_RE = re.compile(r"^\s*[\(\[]?((?:\d+:)?\d{1,2}:\d{2})[\)\]]?\s*[-–—:|]?\s*(\S.*)$")


def parse_chapters(description):
    chapters = []
    for line in description.splitlines():
        m = CHAPTER_RE.match(line.strip())
        if m and m.group(2):
            chapters.append({"t": m.group(1), "title": m.group(2).strip()})
    return chapters if len(chapters) >= 2 else []


def _first(node, key):
    if isinstance(node, dict):
        if key in node:
            return node[key]
        for v in node.values():
            f = _first(v, key)
            if f is not None:
                return f
    elif isinstance(node, list):
        for v in node:
            f = _first(v, key)
            if f is not None:
                return f
    return None


def cmd_enrich(args):
    from innertube import InnerTube
    channel_dir = Path(args.channel_dir)
    catalog = json.loads((channel_dir / "catalog.json").read_text())
    details_path = channel_dir / "details.json"
    details = json.loads(details_path.read_text()) if details_path.exists() else {}
    videos = [v for v in catalog["videos"] if v.get("kind") != "short"]
    if args.limit:
        videos = sorted(videos, key=lambda v: v.get("views") or 0, reverse=True)[: args.limit]
    it = InnerTube()
    new = 0
    for i, v in enumerate(videos):
        if v["id"] in details:
            continue
        try:
            r = it.post("next", {"videoId": v["id"]})
            desc_node = _first(r, "attributedDescription")
            description = desc_node.get("content", "") if desc_node else ""
            vc = _first(r, "videoViewCountRenderer") or {}
            views_exact = vc.get("viewCount", {}).get("simpleText", "")
            pi = _first(r, "videoPrimaryInfoRenderer") or {}
            date_text = pi.get("dateText", {}).get("simpleText", "")
            details[v["id"]] = {
                "description": description,
                "chapters": parse_chapters(description),
                "views_exact": views_exact,
                "date_text": date_text,
            }
            new += 1
        except Exception as e:  # noqa: BLE001
            print(f"  FAILED {v['id']}: {e}", file=sys.stderr)
        if new and new % 25 == 0:
            details_path.write_text(json.dumps(details, ensure_ascii=False))
            print(f"  ...{new} enriched ({i + 1}/{len(videos)} scanned)")
        time.sleep(args.sleep)
    details_path.write_text(json.dumps(details, ensure_ascii=False))
    with_ch = sum(1 for d in details.values() if d.get("chapters"))
    print(f"details.json: {len(details)} videos ({new} new), {with_ch} with chapters")


# -------------------------------------------------------------------- top ---

def cmd_top(args):
    channel_dir = Path(args.channel_dir)
    catalog = json.loads((channel_dir / "catalog.json").read_text())
    vids = sorted(catalog["videos"], key=lambda v: v.get("views") or 0, reverse=True)
    if args.long_form:
        vids = [v for v in vids if length_seconds(v.get("length", "")) >= 120]
    for v in vids[: args.n]:
        have = "✓" if (channel_dir / "transcripts" / f"{v['id']}.md").exists() else " "
        print(f"{have} {v.get('views_text', '?'):>14}  {v.get('length', '?'):>7}  "
              f"{v['id']}  {v['title'][:70]}")


def main():
    p = argparse.ArgumentParser(description=__doc__)
    sub = p.add_subparsers(dest="cmd", required=True)

    c = sub.add_parser("catalog")
    c.add_argument("--channel", required=True, help="@handle or channel URL")
    c.add_argument("--out", required=True)
    c.set_defaults(func=cmd_catalog)

    t = sub.add_parser("transcripts")
    t.add_argument("--channel-dir", required=True)
    t.add_argument("--limit", type=int)
    t.add_argument("--min-views", type=int)
    t.add_argument("--min-seconds", type=int, default=0)
    t.add_argument("--ids", help="comma-separated video ids")
    t.add_argument("--sleep", type=float, default=1.5, help="seconds between videos")
    t.set_defaults(func=cmd_transcripts)

    e = sub.add_parser("enrich")
    e.add_argument("--channel-dir", required=True)
    e.add_argument("--limit", type=int, help="only the top-N by views")
    e.add_argument("--sleep", type=float, default=0.3)
    e.set_defaults(func=cmd_enrich)

    top = sub.add_parser("top")
    top.add_argument("--channel-dir", required=True)
    top.add_argument("-n", type=int, default=25)
    top.add_argument("--long-form", action="store_true", default=True)
    top.set_defaults(func=cmd_top)

    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
