"""Build the site: the one-screen home page, then the case studies in work/.

The case studies share the two style blocks below; assemble-articles.py reads them from this file.
"""
from pathlib import Path

root = Path(__file__).resolve().parent

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

import runpy

for builder in ("assemble-home.py", "assemble-articles.py"):
    runpy.run_path(str(root / builder), run_name="__main__")
