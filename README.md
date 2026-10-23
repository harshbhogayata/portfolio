# Harsh Bhogayata — Portfolio

The third version of my portfolio: a static site, assembled from a few fragments by a short Python script, with no framework.

- `portfolio-site.html` is the home page; `index.html` redirects to it.
- `work/` holds the case studies (Curator, Morrow, Bokuka, Flood Archive, Portfolio Evolution).
- `stories.html` holds the earlier project stories, research and writing.

## Build

Edit the `site-*` fragments and `articles/`, never the built pages, then run:

```
python assemble-site.py
```

It writes `portfolio-site.html`, `stories.html` and `work/*.html`. The résumé PDF in `assets/` is built from `resume/resume.html`.

## Earlier versions

- Version two, the changelog portfolio, lives on the `legacy/v2-changelog` branch and the `v2-changelog` tag.
- Version one is at [harshbhogayata.github.io](https://harshbhogayata.github.io/).
