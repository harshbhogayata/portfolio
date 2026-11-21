"""Build index.html, the one-screen home page, from home.html, home.css and home.js. The 3D scene is scene3d.bundle.js.

The facts on the rail come from PROJECTS in assemble-articles.py, so a case study and its link never disagree.
"""
import html
import runpy
from pathlib import Path

root = Path(__file__).resolve().parent
read = lambda name: (root / name).read_text(encoding="utf-8")
PROJECTS = {p["slug"]: p for p in runpy.run_path(str(root / "assemble-articles.py"), run_name="projects")["PROJECTS"]}
SITE = "https://harshbhogayata.vercel.app"
TITLE = "Harsh Bhogayata — Software Engineer & Founder"
DESCRIPTION = ("Harsh Bhogayata, software engineer and founder of The Curator Group: full-stack products across web, mobile, TV and backend, "
               "with case studies of Curator, Morrow, Bokuka and Flood Archive.")


def study(slug, kind, **more):
    """A link to a case study, with the card's words taken from the study itself."""
    p = PROJECTS[slug]
    return {"name": p["name"], "kind": kind, "href": f"work/{slug}.html", "meta": f'{p["type"]} · {p["byline"][2]}', "dek": p["dek"],
            "img": p["cover"][0], "go": "Read the case study", **more}


RAIL = [
    ("Products", [
        study("curator", "Reading and saved stories"),
        {"name": "Curator Teams", "kind": "Morning briefs for teams", "href": "work/curator.html", "meta": "B2B workspace · Part of Curator",
         "dek": "A separate product inside Curator: morning briefs written for investment teams.",
         "img": "assets/work/curator-brief-to-reader.poster.webp", "go": "Read the Curator case study"},
        study("morrow", "Film and series for TV"),
        study("flood", "Vadodara flood history"),
    ]),
    ("Experiments & writing", [
        study("bokuka", "Generative ink and music"),
        study("evolution", "Three versions in a year"),
        {"name": "Post-quantum series", "kind": "Four parts on Medium", "href": "https://medium.com/@harshmbhogayata", "meta": "Writing · January 2026",
         "dek": "A four-part series on post-quantum cryptography and what the move to it asks of engineers.", "go": "Read on Medium", "out": True},
        {"name": "From Data to Mind", "kind": "Journal article, 2026", "href": "https://www.researchgate.net/profile/Harsh-Bhogayata", "meta": "Research · IJAIML 2026",
         "dek": "A critical evaluation of AGI and machine consciousness, published in IJAIML.", "go": "Open on ResearchGate", "out": True},
    ]),
]


def rail():
    esc = lambda s: html.escape(s, quote=True)
    out = []
    for label, items in RAIL:
        rows = []
        for it in items:
            attrs = f'href="{esc(it["href"])}" data-name="{esc(it["name"])}" data-meta="{esc(it["meta"])}" data-dek="{esc(it["dek"])}" data-go="{esc(it["go"])}"'
            if it.get("img"): attrs += f' data-img="{esc(it["img"])}"'
            if it.get("out"): attrs += ' target="_blank" rel="noopener noreferrer"'
            rows.append(f'<li><a {attrs}><strong>{esc(it["name"])}</strong><small>{esc(it["kind"])}</small></a></li>')
        out.append(f'    <section class="group"><h2>{esc(label)}</h2><ul>{"".join(rows)}</ul></section>')
    return "\n".join(out)


body = read("home.html").replace("<!-- RAIL -->", rail())
esc = lambda t: t.replace("&", "&amp;").replace('"', "&quot;")
head = (
    '<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
    '<meta name="theme-color" content="#0a1226">'
    f'<meta name="description" content="{esc(DESCRIPTION)}"><link rel="canonical" href="{SITE}/">'
    f'<meta property="og:type" content="website"><meta property="og:site_name" content="Harsh Bhogayata"><meta property="og:title" content="{esc(TITLE)}">'
    f'<meta property="og:description" content="{esc(DESCRIPTION)}"><meta property="og:url" content="{SITE}/">'
    f'<meta property="og:image" content="{SITE}/assets/share/home.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">'
    f'<meta property="og:image:alt" content="{esc(TITLE)}"><meta name="twitter:card" content="summary_large_image">'
    '<link rel="icon" type="image/svg+xml" href="assets/hb-favicon.svg"><link rel="apple-touch-icon" href="assets/hb-favicon.svg">'
    f"<title>{TITLE}</title><style>" + read("portfolio-font.css") + read("scene-font.css") + read("home.css") + "</style></head><body>"
)
# The scene is one bundled script (npm run scene); it stays a separate file so the page itself arrives quickly.
page = head + body + '<script src="scene3d.bundle.js"></script><script>' + read("home.js") + "</script></body></html>\n"
(root / "index.html").write_text(page, encoding="utf-8", newline="\n")   # the same bytes on any machine
print(f"Built index.html ({len(page) // 1024} KB)")
