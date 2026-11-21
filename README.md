# Harsh Bhogayata — Portfolio

Version four of my portfolio. Plain HTML, CSS and JavaScript, assembled by one short script. No framework, no runtime dependencies, no tracking.

Every project carries its core rule as a small working model: Curator's three-outlet threshold, Morrow's ordered keys, Bokuka's wash painter and the Flood Archive's ledger.

## Run it

```
node build.mjs --serve
```

Builds into `dist/`, serves it on http://localhost:4173 and rebuilds when anything in `src/` or `public/` changes. Node 20 or newer; nothing to install.

```
node build.mjs                    build once (what the host runs)
node build.mjs --base=relative    relative links and .html addresses, so dist/ opens straight from disk
```

Vercel runs `node build.mjs` and serves `dist/` (see `vercel.json`). `dist/` is not committed.

## Where things are

| Path | What it holds |
| --- | --- |
| `src/data.mjs` | Everything the pages say: projects, experience, the stack table, writing. Start here to change content. |
| `src/articles/` | The case studies, one HTML fragment each. `{A}` is the site root; `{MINI}` places the project's working model. |
| `src/templates.mjs` | The pages: home, case study, 404, and the shared frame. |
| `src/css/` | Styles, joined in the order listed in `build.mjs`. `tokens.css` holds the colours and type. |
| `src/js/` | Behaviour, joined the same way. `minis.js` is the four working models; `ink.js` is the wash painter. |
| `public/` | Copied as it is: pictures, video, fonts, the résumé, the Curator demo, robots.txt, llms.txt. |
| `scripts/share.mjs` | Redraws the link-preview pictures in `public/assets/share/` (needs Playwright). |
| `resume/` | The résumé's source and its builder. The PDF it makes is copied to `public/resume/`. |

## Adding a project

1. Add an entry to `projects` in `src/data.mjs` (copy an existing one; `palette` is the room's colours).
2. Write `src/articles/<slug>.html`.
3. Put its pictures in `public/assets/work/`.
4. Run `node scripts/share.mjs` for its link-preview picture.

## Earlier versions

- Version three, the lines, is the commit before this rebuild on `master` (`ba835c8`).
- Version two, the changelog portfolio, lives on the `legacy/v2-changelog` branch and the `v2-changelog` tag.
- Version one is at [harshbhogayata.github.io](https://harshbhogayata.github.io/).

## Credits

Set in Fraunces, Instrument Sans and Geist Mono, all under the SIL Open Font License (`public/assets/fonts/LICENSE.txt`).
