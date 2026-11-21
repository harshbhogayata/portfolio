# Harsh Bhogayata — Portfolio

The fourth version of my portfolio: one screen, with Vadodara's skyline drawn in characters under the sky over the city at this minute. It is a static site, assembled from a few fragments by short Python scripts, with no framework.

- `index.html` is the home page.
- `work/` holds the case studies (Curator, Morrow, Bokuka, Flood Archive, Portfolio Evolution).

## Build

Edit the sources, never the built pages, then run:

```
python assemble-site.py
```

It writes `index.html` and `work/*.html`.

| To change | Edit |
|---|---|
| The home page's words, layout and behaviour | `home.html`, `home.css`, `home.js` |
| The links on the rail and their cards | `RAIL` in `assemble-home.py` (case-study facts come from `PROJECTS` in `assemble-articles.py`) |
| The skyline's drawings | `scene/*.txt`, plain text: a day drawing, a night drawing and a mask for each size |
| How the scene is drawn, the sky and its colours | `scene.js` |
| The case studies | `articles/` and the `site-*` fragments |

The résumé PDF in `assets/` is built from `resume/resume.html`. The home page's link preview is built by `node share/build_home_share.cjs`; the case studies' by `node share/build_share.cjs`.

## The scene

- The sky follows the sun and moon over Vadodara. Add `?t=18:30` to the address to see any time of day, or press the clock on the page.
- It draws on a plain 2D canvas, about ten frames a second, and only the cells that changed. It stops when the tab is hidden and holds one still frame for visitors who ask for reduced motion.
- The drawings were converted from photographs on Wikimedia Commons. Their authors and the licence that follows from that are in `scene/CREDITS.md`.

## Earlier versions

- Version three, the lines portfolio, is the site as of commit `ba835c8`.
- Version two, the changelog portfolio, lives on the `legacy/v2-changelog` branch and the `v2-changelog` tag.
- Version one is at [harshbhogayata.github.io](https://harshbhogayata.github.io/).
