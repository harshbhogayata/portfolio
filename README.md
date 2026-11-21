# Harsh Bhogayata — Portfolio

The fourth version of my portfolio: Sursagar lake in Vadodara at night, in 3D, with a boat that goes round it. Each part of the portfolio is a landing stage on the shore. The rest is a static site, assembled from a few fragments by short Python scripts, with no framework.

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
| The 3D scene | `scene3d/*.js` (`main.js` assembles it; `palace.js`, `places.js`, `shore.js`, `town.js`, `lake.js` build the parts; `kit.js` is the toolkit), then `npm run scene` |
| The case studies | `articles/` and the `site-*` fragments |

The scene is the only part that needs Node. `npm install` once, then `npm run scene` bundles it with three.js into `scene3d.bundle.js`, which is committed, so the Python build and the deploy need nothing else.

The résumé PDF in `assets/` is built from `resume/resume.html`. The home page's link preview is built by `node share/build_home_share.cjs`; the case studies' by `node share/build_share.cjs`.

## The scene

- The lake is Sursagar, with the Sarveshwar Mahadev statue on its island. Gathered on its banks are Laxmi Vilas Palace, Kirti Mandir, Mandvi Gate, Nyay Mandir, the Arts Faculty dome, the Raopura clock tower, EME Temple, Kala Ghoda and a banyan. Only Nyay Mandir stands by the real lake; the rest are brought together here.
- Round the water: the walk with its rail, ghats, lamp posts, benches, food carts, people, autos, strings of bulbs, a road with traffic; on it, lamps afloat, a fountain, pedal boats.
- The boat tours the landing stages by itself. Arrow keys steer it, pressing the water sends it there, and choosing a link on the rail sends it to that stage. Arriving opens that part's card.
- The camera always looks north and follows the boat.
- Light is worked out once, when the page loads, and painted onto the buildings, so the scene costs little to draw. It stops when the tab is hidden.
- Where WebGL is missing a still of the scene stands in (`assets/scene/`); for visitors who ask for reduced motion the scene holds still and the boat is simply at the stage they choose.
- Sources and licence: `scene3d/CREDITS.md`.

## Earlier versions

- Version three, the lines portfolio, is the site as of commit `ba835c8`.
- Version two, the changelog portfolio, lives on the `legacy/v2-changelog` branch and the `v2-changelog` tag.
- Version one is at [harshbhogayata.github.io](https://harshbhogayata.github.io/).
