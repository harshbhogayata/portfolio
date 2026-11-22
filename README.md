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
| The 3D scene | `scene3d/*.js` (`main.js` assembles it; `palace.js`, `places.js`, `more.js`, `shore.js`, `town.js`, `lake.js` build the parts; `kit.js` is the toolkit), then `npm run scene` |
| The case studies | `articles/` and the `site-*` fragments |

The scene is the only part that needs Node. `npm install` once, then `npm run scene` bundles it with three.js into `scene3d.bundle.js`, which is committed, so the Python build and the deploy need nothing else.

The résumé PDF in `assets/` is built from `resume/resume.html`. The home page's link preview is built by `node share/build_home_share.cjs`; the case studies' by `node share/build_share.cjs`.

## The scene

- The lake is Sursagar, with the Sarveshwar Mahadev statue on its island and Nandi sitting before it. Round its banks stand Laxmi Vilas Palace, Kirti Mandir, the Arts Faculty of MS University behind Sayaji Baug, the Baroda Museum, Nyay Mandir, Mandvi Gate, Kala Ghoda and a banyan. Each landmark is modelled in code to the real building's measure, and its walls, towers and domes wear stone cut from a photograph of it (`scene3d/tiles-data.js`, made by a script; sources in `scene3d/CREDITS.md`). The layout is not the real map: the places are gathered round the lake.
- Between the palace and Kirti Mandir is a garba ground: a mast with strings of bulbs, and the dancers going round the lamp in rings. On the near bank are the roofs of the old city. Pavagadh stands on the horizon to the north-east, with the lights of the climb.
- Round the water: the walk with its rail, ghats, lamp posts, benches, food carts, people, autos, strings of bulbs, neem, peepal, ashoka, gulmohar and amaltas, a children's train, a road with traffic; on it, lamps afloat, lotus, a fountain, pedal boats. Now and then, fireworks behind the palace.
- The lake is free to roam. The boat is driven like a boat: Up or W ahead, Down or S astern, Left and Right (or A and D) turn it; on a touch screen a stick does the same. A click on the water sends it there, and a click on a landmark across the water sends it to that landmark's landing. The plan of the lake and the Sail on button send it to a place.
- Its places are Sursagar, the museum, the university, Kirti Mandir, the garba ground, the statue, the palace, Nyay Mandir and Mandvi Gate. Coming near one, however the boat got there, counts as arriving: the panel at the top right names the place and gives a line of its history (the list is in `home.js`). Until someone takes the helm the boat makes the round by itself; after that it stays where it is left.
- The camera stands behind the boat and turns as it turns; dragging looks round, and lets go after a moment. It keeps over the water, except on the south side, where it may stand off over the old city's low roofs. When the page opens it comes down and forward from high up. The statue is a relief and keeps its face to the camera.
- The work is the page's own: the numbered list along the foot. Pointing at a piece shows its card; choosing it opens its case study.
- Light is worked out once, when the page loads, and painted onto the buildings, so the scene costs little to draw. It stops when the tab is hidden.
- Small things and the near bank are left out of the lake's mirror, so they are drawn once and not twice. On a machine that cannot keep up, the scene drops to fewer pixels, mirrors the lake every other frame, then gives up its bloom, rather than slowing down.
- Where WebGL is missing a still of the scene stands in (`assets/scene/`); for visitors who ask for reduced motion the scene holds still and the boat is simply at the stage they choose.
- Sources and licence: `scene3d/CREDITS.md`.

## Earlier versions

- Version three, the lines portfolio, is the site as of commit `ba835c8`.
- Version two, the changelog portfolio, lives on the `legacy/v2-changelog` branch and the `v2-changelog` tag.
- Version one is at [harshbhogayata.github.io](https://harshbhogayata.github.io/).
