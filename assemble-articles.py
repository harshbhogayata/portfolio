"""Build the case-study pages in work/ from articles/<slug>.html.

Each article shares the site's header, menu, footer and styles (assemble-site.py runs this after the main pages).
In the prose, {A} is the path back to the site root.
"""
import html
import re
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parent
assemble = (root / "assemble-site.py").read_text(encoding="utf-8")
base = re.search(r'base = """(.*?)"""', assemble, re.S).group(1)
page_shell = re.search(r'page_shell = """(.*?)"""', assemble, re.S).group(1)


def read(path):
    return Path(path).read_text(encoding="utf-8")


def page(title, content, prefix, home):
    out = (
        '<!doctype html>\n<html lang="en" class="main-site"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
        '<meta name="theme-color" content="#f7f8fa"><link rel="icon" type="image/svg+xml" href="assets/hb-favicon.svg">'
        f"<title>{title}</title><style>" + read(root / "portfolio-font.css") + base + read(root / "site-main.css") + page_shell
        + read(root / "site-writing.css") + read(root / "site-articles.css") + "</style></head><body id=\"top\">"
        + read(root / "site-main-header.html") + read(root / "site-menu.html") + content + read(root / "site-main.html")
        + "<script>" + read(root / "site-writing.js") + read(root / "site-main.js") + read(root / "site-articles.js") + "</script></body></html>"
    )
    # Shared assets live at the site root; home anchors from an article go back to the home page.
    out = re.sub(r'(src|href)="(assets/|stories\.html)', rf'\1="{prefix}\2', out)
    out = out.replace("url(assets/", f"url({prefix}assets/").replace("url('assets/", f"url('{prefix}assets/").replace('url("assets/', f'url("{prefix}assets/')
    out = out.replace('href="portfolio-site.html#', f'href="{home}#').replace("'portfolio-site.html#'", f"'{home}#'")
    out = re.sub(r'href="#(about|skills|experience|work|contact|top)"', rf'href="{home}#\1"', out)
    out = out.replace("url:'work/", "url:'")
    out = out.replace("'portfolio-site.html#portfolio'", "'../portfolio-site.html#portfolio'")
    return out


# Projects in the order the home page shows them. Facts come from each repository and its existing story.
PROJECTS = [
    {"slug": "curator", "type": "News app", "count": ("Commits", "114"), "name": "Curator", "tone": "curator",
     "cover": ("assets/work/curator-phones.webp", "Curator on a phone: the brief, and an article with its sources"),
     "caption": "The phone app: the brief, and an article with its sources under the headline.",
     "standfirst": "A news app that turns many reports of the same story into one calm, sourced article, and never lets the sources fall away.",
     "byline": ["Harsh Bhogayata", "Apr 2026 — now", "Preparing for launch"],
     "dek": "A news app that keeps every source attached to the story.",
     "stack": [("React Native", "react"), ("Expo", "../expo-logo-type-a"), ("React Router", "reactrouter"), ("Django", "django"),
               ("PostgreSQL", "postgresql"), ("Redis", "redis"), ("Docker", "docker"), ("GitHub Actions", "githubactions")],
     "links": [("thecuratorgroup.org", "https://thecuratorgroup.org/")]},
    {"slug": "morrow", "type": "Film and series app", "count": ("Commits", "151"), "name": "Morrow", "tone": "morrow",
     "cover": ("assets/work/morrow-home.webp", "Morrow’s home screen: a featured film with the navigation pill above it"),
     "caption": "Home: the artwork brings the colour, the interface stays out of the way.",
     "standfirst": "A film and series app for one family’s evenings: Apple TV’s calm on an ordinary television, with every copy at home and in the cloud behind one Play button.",
     "byline": ["Harsh Bhogayata", "Sep 2026 — now", "In development"],
     "dek": "Apple TV’s calm on an ordinary television, with one Play button for every copy.",
     "stack": [("React", "react"), ("TypeScript", "typescript"), ("Vite", "vite"), ("React Router", "reactrouter"), ("Node.js", "nodedotjs"), ("Vercel", "vercel")],
     "links": []},
    {"slug": "bokuka", "type": "Generative installation", "count": ("Commits", "4"), "name": "Bokuka", "tone": "bokuka",
     "cover": ("assets/work/bokuka-home-1920x1200.webp", "Bokuka: ink blossoms and gold leaf on washi paper"),
     "caption": "墨花, ink flower: a painting that keeps composing itself.",
     "standfirst": "A living ink painting: washes, blossoms and gold leaf laid down stroke by stroke in the browser, with a score that shifts with the scene.",
     "byline": ["Harsh Bhogayata", "Aug 2026", "Experiment"],
     "dek": "Ink, blossoms and live music, generated in the browser as you watch.",
     "stack": [("JavaScript", None), ("Canvas", None), ("Web Audio", None), ("Node.js", "nodedotjs")],
     "links": [("Source on GitHub", "https://github.com/harshbhogayata/Gokuka")]},
    {"slug": "flood", "type": "Offline-first map", "count": ("Commits", "55"), "name": "Flood Archive", "tone": "flood",
     "cover": ("assets/flood-live-social-preview.webp", "Flood Archive’s map with locations along the Vishwamitri river, risk levels and the simulator"),
     "caption": "The live archive: fifty-plus places along the Vishwamitri, shaded by what has happened there.",
     "standfirst": "Every monsoon people ask whether their area is safe. No app can promise that. This one shows what actually happened, place by place.",
     "byline": ["Harsh Bhogayata", "Jan 2026 — now", "Live"],
     "dek": "A place-based record of a city’s flood history that works without a signal.",
     "stack": [("Leaflet", None), ("JavaScript", None), ("Capacitor", "capacitor"), ("Android", "android"), ("Vercel", "vercel")],
     "links": [("Open the archive", "https://vadodara-flood-archive-relief.vercel.app")]},
    {"slug": "evolution", "type": "Personal site", "count": ("Versions", "3"), "name": "Portfolio Evolution", "tone": "evolution",
     "cover": ("assets/work/portfolio-evolution.webp", "The three versions of the portfolio, side by side"),
     "caption": "The terminal, the changelog, and this site.",
     "standfirst": "Three portfolios in a year, and what each one said about how I wanted to be understood.",
     "byline": ["Harsh Bhogayata", "Nov 2025 — now", "Version three, live"],
     "dek": "Three portfolios, three ways of being understood.",
     "stack": [("Tailwind CSS", "tailwindcss"), ("Next.js", "nextdotjs"), ("Python", "python"), ("Vercel", "vercel")],
     "links": [("Version one", "https://harshbhogayata.github.io/"), ("Version two", "https://harshbhogayata.vercel.app/")]},
]




def tool(name, file, prefix):
    if not file:
        return f'<li class="text">{name}</li>'
    return f'<li><img src="{prefix}assets/stack-logos/{file}.svg" alt="{name}" title="{name}" decoding="async"></li>'


def stations(prose):
    """Number every section heading so it can hang off the wire, and size each release rule to its stops."""
    count = iter(range(1, 100))
    prose = re.sub(r"<h2>", lambda _: (lambda n: f'<h2 id="s{n}" data-n="{n:02d}">')(next(count)), prose)
    return re.sub(r'<ul class="art-timeline">(.*?)</ul>', lambda m: f'<ul class="art-timeline" style="--n:{m.group(1).count("<li>")}">{m.group(1)}</ul>', prose, flags=re.S)


def article(i, p):
    prefix = "../"
    nxt = PROJECTS[(i + 1) % len(PROJECTS)]
    prev = PROJECTS[i - 1]
    prose = read(root / "articles" / f"{p['slug']}.html").replace("{A}", prefix)
    words = len(re.sub(r"<[^>]+>", " ", prose).split())
    prose = stations(prose)
    toc = "".join(f'<li><a href="#s{n}"><i aria-hidden="true"></i><b>{int(n):02d}</b>{title}</a></li>' for n, title in re.findall(r'<h2 id="s(\d+)" data-n="\d+">(.*?)</h2>', prose))
    stack = "".join(tool(n, f, prefix) for n, f in p["stack"])
    cover_src, cover_alt = p["cover"]
    links = "".join(f'<a href="{u}" target="_blank" rel="noopener noreferrer">{t} <b aria-hidden="true">↗</b></a>' for t, u in p["links"]) or "<span>Private build</span>"
    label, count = p["count"]
    spec = (f'<div><dt>Type</dt><dd>{p["type"]}</dd></div><div><dt>Timeline</dt><dd>{p["byline"][1]}</dd></div>'
            f'<div><dt>Status</dt><dd>{p["byline"][2]}</dd></div><div><dt>{label} · Read</dt><dd>{count} · {max(1, round(words / 230))} min</dd></div>'
            f'<div class="art-stack-cell"><dt>Built with</dt><dd><ul>{stack}</ul></dd></div>'
            f'<div class="art-go">{links}</div>')
    ar = "{:.4f}".format(Image.open(root / cover_src).width / Image.open(root / cover_src).height)
    figure = (f'<figure class="art-figure art-figure--{p['tone']}" style="--ar:{ar}" data-ar="{ar}"><img src="{prefix}{cover_src}" alt="{html.escape(cover_alt)}" style="view-transition-name:work-{p['slug']}"></figure>')
    content = f"""
<main class="art" id="writing" data-slug="{p['slug']}">
  <article>
    <header class="art-open">
      {figure}
      <nav class="art-toc" aria-label="In this case study"><ol>{toc}</ol></nav>
      <div class="art-title">
        <p class="art-crumb"><a href="../portfolio-site.html#work">Selected work</a><i aria-hidden="true"></i><span>{i + 1:02d} / {len(PROJECTS):02d}</span><a class="art-step" href="{prev['slug']}.html" aria-label="Previous: {prev['name']}">‹</a><a class="art-step" href="{nxt['slug']}.html" aria-label="Next: {nxt['name']}">›</a></p>
        <h1>{p['name']}<span>.</span></h1>
      </div>
    </header>
    <dl class="art-spec">{spec}</dl>
    <div class="art-route">
      <div class="art-prose">
        <i class="art-wire" aria-hidden="true"><b></b><i></i></i>
{prose}
      </div>
      <nav class="art-end" aria-label="Next case study">
        <i class="art-turn" aria-hidden="true"></i>
        <a class="art-next art-next--{nxt['tone']}" href="{nxt['slug']}.html">
          <span><span class="art-next-label">Next · {(i + 1) % len(PROJECTS) + 1:02d} / {len(PROJECTS):02d}</span><strong>{nxt['name']}</strong>
          <span class="art-next-dek">{nxt['dek']}</span><span class="art-next-go">Read the case study <b aria-hidden="true">↗</b></span></span>
          <span class="art-next-figure"><img src="{prefix}{nxt['cover'][0]}" alt=""></span>
        </a>
      </nav>
    </div>
  </article>
</main>
"""
    (root / "work" / f"{p['slug']}.html").write_text(page(f"{p['name']} — Harsh Bhogayata", content, prefix, "../portfolio-site.html"), encoding="utf-8")
    print(f"Built work/{p['slug']}.html ({words} words)")



(root / "work").mkdir(exist_ok=True)
for i, p in enumerate(PROJECTS):
    article(i, p)
