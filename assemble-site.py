"""Build the current portfolio shell from its editable source fragments."""
from pathlib import Path

root = Path(__file__).resolve().parent


def read(name):
    return (root / name).read_text(encoding="utf-8")


menu_markup = read("site-menu.html")
base = """
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:0}
body{margin:0;background:#ffffff;color:#242720;font-family:Geist,Arial,sans-serif;font-size:16px;line-height:1.5;-webkit-font-smoothing:antialiased}
button,input,textarea{font:inherit}a{color:inherit}img{max-width:100%;display:block}button,a{-webkit-tap-highlight-color:transparent}
:focus-visible{outline:2px solid #2445f1;outline-offset:5px}::selection{background:#2445f1;color:#fff}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}
"""
page_shell = """
html.main-site{scrollbar-width:none;scroll-padding-top:0}
html.main-site::-webkit-scrollbar{display:none}
.main-site body{min-height:100svh;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;background:#f7f8fa}
"""

SITE = "https://harshbhogayata.vercel.app"


def share_tags(title, description, path, image, kind="website"):
    """Description, canonical address and the tags link previews read (LinkedIn, WhatsApp, X, Slack)."""
    esc = lambda text: text.replace("&", "&amp;").replace('"', "&quot;")
    t, d, url, img = esc(title), esc(description), f"{SITE}/{path}", f"{SITE}/assets/share/{image}.jpg"
    return (f'<meta name="description" content="{d}"><link rel="canonical" href="{url}">'
            f'<meta property="og:type" content="{kind}"><meta property="og:site_name" content="Harsh Bhogayata">'
            f'<meta property="og:title" content="{t}"><meta property="og:description" content="{d}"><meta property="og:url" content="{url}">'
            f'<meta property="og:image" content="{img}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">'
            f'<meta property="og:image:alt" content="{t}"><meta name="twitter:card" content="summary_large_image">')


def build_page(title, description, content_fragment):
    content = read(content_fragment).replace("<!-- INLINE_HERO_HB_SVG -->", read("assets/hero-workflow.svg"))
    return """<!doctype html>
<html lang="en" class="main-site"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#f7f8fa">""" + share_tags(title, description, "portfolio-site.html", "home") + """
<link rel="icon" type="image/svg+xml" href="assets/hb-favicon.svg"><link rel="apple-touch-icon" href="assets/hb-favicon.svg">
<title>""" + title + """</title>
<style>""" + read("portfolio-font.css") + base + read("site-main.css") + page_shell + read("site-writing.css") + read("site-articles.css") + "</style></head><body id=\"top\">" + read("site-main-header.html") + menu_markup + content + read("site-main.html") + "<script>" + read("site-writing.js") + read("site-main.js") + read("site-articles.js") + "</script></body></html>"


(root / "portfolio-site.html").write_text(build_page(
    "Harsh Bhogayata — Portfolio",
    "Harsh Bhogayata, software engineer: full-stack products across web, mobile, TV and backend, with case studies of Curator, Morrow, Bokuka and Flood Archive.",
    "site-writing.html",
), encoding="utf-8")

# Remove the obsolete standalone footer preview if it has survived locally.
old_preview = root / "footer.html"
if old_preview.exists():
    old_preview.unlink()

print("Built portfolio-site.html from the shared site sources.")

# The case studies in work/ share the same shell; their builder lives beside this file.
import runpy
runpy.run_path(str(root / "assemble-articles.py"), run_name="__main__")
