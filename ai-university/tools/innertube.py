"""Minimal stdlib-only InnerTube (YouTube internal API) client.

Talks to youtubei.googleapis.com, which is reachable even on networks where
www.youtube.com is blocked. Handles channel resolution and full uploads
listing. Transcript fetching lives in ripper.py because it needs
www.youtube.com access (see notes there).
"""

import json
import os
import ssl
import urllib.error
import urllib.request

# Public InnerTube web client key — ships embedded in every YouTube page.
PUBLIC_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"
CLIENT_VERSION = "2.20250101.00.00"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"


class InnerTube:
    def __init__(self, host="https://youtubei.googleapis.com"):
        self.base = f"{host}/youtubei/v1"
        handlers = []
        proxy = os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy")
        if proxy:
            handlers.append(urllib.request.ProxyHandler({"https": proxy, "http": proxy}))
        ca = os.environ.get("SSL_CERT_FILE") or os.environ.get("REQUESTS_CA_BUNDLE")
        ctx = ssl.create_default_context(cafile=ca) if ca else ssl.create_default_context()
        handlers.append(urllib.request.HTTPSHandler(context=ctx))
        self.opener = urllib.request.build_opener(*handlers)

    def post(self, endpoint, body):
        payload = {
            "context": {
                "client": {
                    "clientName": "WEB",
                    "clientVersion": CLIENT_VERSION,
                    "hl": "en",
                    "gl": "US",
                }
            },
            **body,
        }
        req = urllib.request.Request(
            f"{self.base}/{endpoint}?key={PUBLIC_KEY}&prettyPrint=false",
            data=json.dumps(payload).encode(),
            headers={"Content-Type": "application/json", "User-Agent": USER_AGENT},
        )
        with self.opener.open(req, timeout=60) as r:
            return json.loads(r.read())

    def resolve_handle(self, handle):
        """@handle or channel URL -> (channel_id, channel_title)."""
        handle = handle.strip()
        if handle.startswith("http"):
            url = handle
        else:
            url = f"https://www.youtube.com/{handle if handle.startswith('@') else '@' + handle}"
        r = self.post("navigation/resolve_url", {"url": url})
        browse_id = r.get("endpoint", {}).get("browseEndpoint", {}).get("browseId", "")
        if not browse_id.startswith("UC"):
            raise ValueError(f"could not resolve {handle!r} to a channel id (got {browse_id!r})")
        meta = self.post("browse", {"browseId": browse_id})
        title = meta.get("metadata", {}).get("channelMetadataRenderer", {}).get("title", "")
        return browse_id, title

    # Tab params for channel browse (base64 protobuf, stable public values).
    VIDEOS_TAB = "EgZ2aWRlb3PyBgQKAjoA"
    SHORTS_TAB = "EgZzaG9ydHPyBgUKA5oBAA%3D%3D"

    def channel_tab(self, channel_id, params):
        """Yield videos (newest first) from a channel tab, following the
        grid's infinite-scroll continuations. The uploads-playlist route
        silently stops at 200 items; this one doesn't."""
        resp = self.post("browse", {"browseId": channel_id, "params": params})
        while True:
            found = False
            for item in _find_all(resp, "lockupViewModel"):
                video = _parse_lockup(item)
                if video:
                    found = True
                    yield video
            for item in _find_all(resp, "shortsLockupViewModel"):
                video = _parse_shorts_lockup(item)
                if video:
                    found = True
                    yield video
            tokens = [
                cir.get("continuationEndpoint", {})
                .get("continuationCommand", {})
                .get("token")
                for cir in _find_all(resp, "continuationItemRenderer")
            ]
            tokens = [t for t in tokens if t]
            if not tokens or not found:
                return
            resp = self.post("browse", {"continuation": tokens[0]})

    def channel_uploads(self, channel_id, include_shorts=True):
        """Yield long-form videos, then shorts (each newest first)."""
        for v in self.channel_tab(channel_id, self.VIDEOS_TAB):
            v["kind"] = "video"
            yield v
        if include_shorts:
            try:
                for v in self.channel_tab(channel_id, self.SHORTS_TAB):
                    v["kind"] = "short"
                    yield v
            except Exception:  # noqa: BLE001 — shorts tab is best-effort
                pass


def _find_all(node, key, out=None):
    if out is None:
        out = []
    if isinstance(node, dict):
        if key in node:
            out.append(node[key])
        for v in node.values():
            _find_all(v, key, out)
    elif isinstance(node, list):
        for v in node:
            _find_all(v, key, out)
    return out


def _texts_in(node):
    """All 'content' string values inside metadata view-models."""
    out = []
    if isinstance(node, dict):
        for k, v in node.items():
            if k == "content" and isinstance(v, str):
                out.append(v)
            else:
                out.extend(_texts_in(v))
    elif isinstance(node, list):
        for v in node:
            out.extend(_texts_in(v))
    return out


def parse_views(text):
    """'1,234,567 views' / '1.2M views' -> int or None."""
    t = text.lower().replace("views", "").replace("view", "").strip()
    mult = 1
    if t.endswith("k"):
        mult, t = 1_000, t[:-1]
    elif t.endswith("m"):
        mult, t = 1_000_000, t[:-1]
    elif t.endswith("b"):
        mult, t = 1_000_000_000, t[:-1]
    t = t.replace(",", "")
    try:
        return int(float(t) * mult)
    except ValueError:
        return None


def _parse_lockup(lockup):
    vid = lockup.get("contentId")
    if not vid:
        return None
    title = ""
    md = _find_all(lockup, "lockupMetadataViewModel")
    if md:
        title = md[0].get("title", {}).get("content", "")
    length = ""
    for badge in _find_all(lockup, "thumbnailBadgeViewModel"):
        t = badge.get("text", "")
        if ":" in t:
            length = t
            break
    views_text, published_text = "", ""
    for row in _find_all(lockup, "contentMetadataViewModel"):
        for t in _texts_in(row.get("metadataRows", [])):
            low = t.lower()
            if "view" in low and not views_text:
                views_text = t
            elif ("ago" in low or "streamed" in low) and not published_text:
                published_text = t
    return {
        "id": vid,
        "title": title,
        "length": length,
        "views_text": views_text,
        "views": parse_views(views_text) if views_text else None,
        "published_text": published_text,
        "url": f"https://www.youtube.com/watch?v={vid}",
    }


def _parse_shorts_lockup(lockup):
    vid = None
    for ep in _find_all(lockup, "reelWatchEndpoint"):
        vid = ep.get("videoId")
        if vid:
            break
    if not vid:
        vid = lockup.get("entityId", "").split("-")[-1] or None
    if not vid:
        return None
    overlay = lockup.get("overlayMetadata", {})
    title = overlay.get("primaryText", {}).get("content", "")
    views_text = overlay.get("secondaryText", {}).get("content", "")
    return {
        "id": vid,
        "title": title,
        "length": "",
        "views_text": views_text,
        "views": parse_views(views_text) if views_text else None,
        "published_text": "",
        "url": f"https://www.youtube.com/shorts/{vid}",
    }
