// Page templates. Each returns a full HTML document for one address.
// `c` is the build context: c.href() and c.asset() write addresses that suit the page and the kind of build.

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pad = (n) => String(n).padStart(2, '0');

const ICONS = {
  arrow: '<path d="M3 8h10M9 4l4 4-4 4"/>',
  out: '<path d="M5 11 11 5M6 5h5v5"/>',
  down: '<path d="M8 3v10M4 9l4 4 4-4"/>',
  up: '<path d="M8 13V3M4 7l4-4 4 4"/>',
  copy: '<rect x="5.5" y="5.5" width="8" height="8" rx="1.5"/><path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2"/>',
  search: '<circle cx="7" cy="7" r="4.25"/><path d="m10.2 10.2 3.3 3.3"/>',
  theme: '<circle cx="8" cy="8" r="5.25"/><path d="M8 2.75a5.25 5.25 0 0 1 0 10.5z" fill="currentColor" stroke="none"/>',
  play: '<path d="M5.5 3.5v9l7-4.5z" fill="currentColor" stroke="none"/>',
  close: '<path d="m4 4 8 8M12 4l-8 8"/>',
};
const icon = (name) => `<svg class="i" viewBox="0 0 16 16" aria-hidden="true">${ICONS[name]}</svg>`;

/** Words that rise one after another. Each word keeps its own clip so the line can still wrap. */
function rise(text, start = 0) {
  let i = start;
  const html = text.split(' ').map((word) => `<span class="w" style="--i:${i++}"><span>${word}</span></span>`).join(' ');
  return { html, next: i };
}

const outLink = (label, url, cls = '') => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}${icon('out')}</a>`;

function img(c, src, alt, attrs = '') {
  const size = c.size(src);
  const dims = size ? ` width="${size[0]}" height="${size[1]}"` : '';
  return `<img src="${c.asset(src)}" alt="${esc(alt)}"${dims} decoding="async" ${attrs}>`;
}

function video(c, base, alt, attrs = 'muted loop playsinline controls preload="none" data-autoplay') {
  const size = c.size(`${base}.poster.webp`);
  const dims = size ? ` width="${size[0]}" height="${size[1]}"` : '';
  // The still frame is fetched only when the film is near the screen (see core.js).
  return `<video data-poster="${c.asset(`${base}.poster.webp`)}"${dims} aria-label="${esc(alt)}" ${attrs}><source src="${c.asset(`${base}.webm`)}" type="video/webm"><source src="${c.asset(`${base}.mp4`)}" type="video/mp4"></video>`;
}

const paletteVars = (p) => `--room-bg:${p.palette.bg};--room-ink:${p.palette.ink};--room-soft:${p.palette.soft};--room-line:${p.palette.line};--room-panel:${p.palette.panel};--room-accent:${p.palette.accent}`;

// ---------------------------------------------------------------------------------------------------------------------
// Shared frame

function head(c, d, { title, description, url, image, type = 'website', ld = [] }) {
  const { site } = d;
  const canonical = site.url + url;
  const share = `${site.url}/assets/share/${image}.jpg`;
  const person = {
    '@context': 'https://schema.org', '@type': 'Person', name: site.name, url: site.url, email: `mailto:${site.email}`,
    jobTitle: 'Full Stack Developer', worksFor: { '@type': 'Organization', name: 'Quantaura Design Tech' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Parul University' },
    address: { '@type': 'PostalAddress', addressLocality: 'Vadodara', addressCountry: 'IN' },
    sameAs: site.links.map((l) => l.url),
  };
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="author" content="${esc(site.name)}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#f3f2ee">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${share}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(title)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="${c.asset('/favicon.svg')}">
<link rel="apple-touch-icon" href="${c.asset('/apple-touch-icon.png')}">
<link rel="preload" href="${c.asset('/assets/fonts/fraunces.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${c.asset('/assets/fonts/instrument-sans.woff2')}" as="font" type="font/woff2" crossorigin>
<script>(function(){var d=document.documentElement,t;d.classList.add('js');try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';d.dataset.theme=t})()</script>
<link rel="stylesheet" href="${c.asset('/assets/site.css')}?v=${c.versions.css}">
${[person, ...ld].map((x) => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join('\n')}
</head>`;
}

function nav(c, d, current = '') {
  const links = [['Work', '/#work', 'work'], ['Experience', '/#experience', 'experience'], ['Stack', '/#stack', 'stack'], ['Writing', '/#writing', 'writing'], ['Contact', '/#contact', 'contact']];
  return `<a class="skip" href="#main">Skip to content</a>
<header class="nav" data-nav>
  <a class="nav-pill nav-brand" href="${c.href('/')}" aria-label="${esc(d.site.name)}, home"><span class="nav-mark" aria-hidden="true">HB</span><span class="nav-name">${esc(d.site.name)}</span></a>
  <nav class="nav-pill nav-links" aria-label="Sections">
    ${links.map(([label, to, id]) => `<a href="${c.href(to)}" data-nav-link="${id}"${current === id ? ' aria-current="true"' : ''}>${label}</a>`).join('')}
  </nav>
  <div class="nav-pill nav-tools">
    <button type="button" class="nav-search" data-palette-open aria-haspopup="dialog" aria-label="Search and commands">${icon('search')}<span>Search</span><kbd data-kbd>Ctrl K</kbd></button>
    <button type="button" class="nav-theme" data-theme-toggle aria-label="Switch colour theme">${icon('theme')}</button>
  </div>
</header>`;
}

function contact(c, d) {
  const { site } = d;
  const name = rise('Harsh Bhogayata');
  return `<footer class="contact" id="contact" aria-labelledby="contact-title">
  <div class="wrap">
    <p class="label" data-r>Contact</p>
    <h2 id="contact-title" class="contact-title" data-r>Bring a useful problem.</h2>
    <div class="contact-mail" data-r>
      <a class="contact-email" href="mailto:${site.email}">${site.email.replace('@', '<wbr>@')}</a>
      <button type="button" class="btn" data-copy="${site.email}">${icon('copy')}<span data-copy-label>Copy address</span></button>
    </div>
    <div class="contact-grid">
      <div data-r>
        <p class="label">Elsewhere</p>
        <ul class="contact-links">
          ${site.links.map((l) => `<li>${outLink(l.label, l.url)}</li>`).join('')}
        </ul>
      </div>
      <div data-r>
        <p class="label">Résumé</p>
        <p><a class="contact-resume" href="${c.asset(site.resume)}" target="_blank" rel="noopener">One page, PDF${icon('out')}</a></p>
      </div>
      <div data-r>
        <p class="label">Where and when</p>
        <p>${esc(site.place)}<br><span class="clock"><i class="pulse" aria-hidden="true"></i><time data-clock>UTC +05:30</time></span></p>
      </div>
      <div data-r>
        <p class="label">Colophon</p>
        <p class="contact-colophon">Version four. Plain HTML, CSS and JavaScript, assembled by one short script. No framework, no tracking. Set in Fraunces, Instrument Sans and Geist Mono. <a href="${c.href('/work/evolution')}">How it got here</a>.</p>
      </div>
    </div>
  </div>
  <div class="wrap"><div class="contact-end">
    <span>© <span data-year>2026</span> ${esc(site.name)}</span>
    <a href="#top" class="contact-top">Back to the top${icon('up')}</a>
  </div></div>
  <p class="wordmark" aria-hidden="true" data-r="words"><span data-fit>${name.html}</span></p>
</footer>`;
}

function palette(c, d) {
  const items = [
    ...d.projects.map((p, i) => ({ group: 'Case studies', label: p.name, hint: p.essay ? 'Essay' : p.type, href: c.href(`/work/${p.slug}`), keys: `${p.name} ${p.type} ${p.stack.join(' ')}` })),
    ...[['Selected work', 'work'], ['Experience', 'experience'], ['Stack', 'stack'], ['Writing and research', 'writing'], ['Contact', 'contact']].map(([label, id]) => ({ group: 'On the home page', label, hint: 'Section', href: c.href(`/#${id}`), keys: label })),
    { group: 'Actions', label: 'Copy email address', hint: d.site.email, action: 'copy', value: d.site.email, keys: 'email mail contact copy' },
    { group: 'Actions', label: 'Open the résumé', hint: 'PDF', href: c.asset(d.site.resume), external: true, keys: 'resume cv pdf download' },
    { group: 'Actions', label: 'Switch colour theme', hint: 'Light or dark', action: 'theme', keys: 'theme dark light mode colour color' },
    ...d.site.links.map((l) => ({ group: 'Elsewhere', label: l.label, hint: l.handle, href: l.url, external: true, keys: `${l.label} ${l.handle}` })),
    { group: 'Elsewhere', label: 'Curator', hint: 'thecuratorgroup.org', href: 'https://thecuratorgroup.org/', external: true, keys: 'curator news app site' },
    { group: 'Elsewhere', label: 'Flood Archive, live', hint: 'vadodara-flood-archive-relief.vercel.app', href: 'https://vadodara-flood-archive-relief.vercel.app', external: true, keys: 'flood archive map live vadodara' },
  ];
  return `<dialog class="palette" data-palette aria-label="Search and commands">
  <div class="palette-box">
    <div class="palette-field">${icon('search')}<input type="text" data-palette-input placeholder="Search projects, sections and actions" aria-label="Search projects, sections and actions" autocomplete="off" spellcheck="false" role="combobox" aria-expanded="true" aria-controls="palette-list" aria-autocomplete="list"><kbd>Esc</kbd></div>
    <ul class="palette-list" id="palette-list" role="listbox" data-palette-list></ul>
    <p class="palette-foot"><span><kbd>↑</kbd><kbd>↓</kbd> to move</span><span><kbd>Enter</kbd> to open</span></p>
  </div>
  <script type="application/json" data-palette-data>${JSON.stringify(items).replace(/</g, '\\u003c')}</script>
</dialog>`;
}

function demoDialog() {
  return `<dialog class="demo" data-demo-dialog aria-label="Curator, live in a phone">
  <div class="demo-box">
    <div class="demo-head"><p class="label">Curator, running</p><button type="button" class="btn btn--icon" data-demo-close aria-label="Close">${icon('close')}</button></div>
    <div class="demo-phone"><iframe title="Curator app" data-demo-frame loading="lazy"></iframe></div>
    <p class="demo-note">The app’s own interface with seeded stories, running in your browser. Sample content, not live news.</p>
  </div>
</dialog>`;
}

function page(c, d, meta, body, { current = '', bodyClass = '', demo = false } = {}) {
  return `${head(c, d, meta)}
<body class="${bodyClass}" id="top">
${nav(c, d, current)}
${body}
${contact(c, d)}
${palette(c, d)}
${demo ? demoDialog() : ''}
<div class="toast" role="status" aria-live="polite" data-toast></div>
<script src="${c.asset('/assets/site.js')}?v=${c.versions.js}" defer></script>
</body>
</html>
`;
}

// ---------------------------------------------------------------------------------------------------------------------
// The four working miniatures. Markup here, behaviour in src/js/minis.js.

function mini(c, d, kind) {
  if (kind === 'curator') {
    return `<div class="mini mini--curator" data-mini="curator">
  <div class="mini-bar">
    <div class="seg" role="group" aria-label="How busy the news is">
      <button type="button" data-hour="quiet" aria-pressed="true">Quiet hour</button>
      <button type="button" data-hour="busy" aria-pressed="false">Busy hour</button>
    </div>
    <label class="mini-range"><span>Outlets needed</span><input type="range" min="1" max="6" step="1" value="3" data-min><output data-min-out>3</output></label>
  </div>
  <ol class="clusters" data-clusters aria-live="polite"></ol>
  <p class="mini-read" data-read></p>
  <p class="mini-note">Sample clusters. The threshold and the cap of two items per outlet are Curator’s own.</p>
  <noscript><p class="mini-note">This demonstration needs JavaScript.</p></noscript>
</div>`;
  }
  if (kind === 'morrow') {
    return `<div class="mini mini--morrow" data-mini="morrow">
  <div class="mini-bar mini-bar--grid">
    <div class="mini-field"><span>Watching in</span><div class="seg" role="group" aria-label="Preferred language">
      <button type="button" data-lang="Hindi" aria-pressed="true">Hindi</button><button type="button" data-lang="English" aria-pressed="false">English</button><button type="button" data-lang="Gujarati" aria-pressed="false">Gujarati</button></div></div>
    <div class="mini-field"><span>On</span><div class="seg" role="group" aria-label="Device">
      <button type="button" data-device="tv" aria-pressed="true">Television</button><button type="button" data-device="laptop" aria-pressed="false">Laptop</button></div></div>
    <div class="mini-field"><span>Home server</span><div class="seg" role="group" aria-label="Home server">
      <button type="button" data-home="on" aria-pressed="true">Online</button><button type="button" data-home="off" aria-pressed="false">Offline</button></div></div>
    <div class="mini-field"><span>Ranking</span><div class="seg" role="group" aria-label="Ranking method">
      <button type="button" data-rank="keys" aria-pressed="true">Ordered keys</button><button type="button" data-rank="points" aria-pressed="false">Points, as before</button></div></div>
  </div>
  <ol class="copies" data-copies aria-live="polite"></ol>
  <p class="mini-read" data-read></p>
  <p class="mini-note">A sample library of six copies of one film. The gates and the order of the keys are Morrow’s; the point weights are illustrative.</p>
  <noscript><p class="mini-note">This demonstration needs JavaScript.</p></noscript>
</div>`;
  }
  if (kind === 'bokuka') {
    const moods = [['sakura', 'Sakura'], ['vermilion', 'Vermilion'], ['indigo', 'Indigo'], ['gold', 'Gold leaf'], ['rain', 'Kyoto rain']];
    return `<div class="mini mini--bokuka" data-mini="bokuka">
  <div class="mini-canvas"><canvas data-paper aria-label="A sheet of paper you can paint on. Click to lay a wash, drag to draw a stem."></canvas><p class="mini-hint" data-hint>Click to lay a wash. Drag to draw a stem.</p></div>
  <div class="mini-bar">
    <div class="seg seg--wrap" role="group" aria-label="Mood">
      ${moods.map(([id, label], i) => `<button type="button" data-mood="${id}" aria-pressed="${i === 0}">${label}</button>`).join('')}
    </div>
    <label class="mini-range"><span>Layers</span><input type="range" min="1" max="44" step="1" value="44" data-layers><output data-layers-out>44</output></label>
    <button type="button" class="btn btn--small" data-clear>Fresh sheet</button>
  </div>
  <noscript><p class="mini-note">This demonstration needs JavaScript.</p></noscript>
</div>`;
  }
  if (kind === 'flood') {
    const { places, years } = d.flood;
    const first = places[0];
    return `<div class="mini mini--flood" data-mini="flood">
  <div class="seg seg--wrap" role="group" aria-label="Choose a place">
    ${places.map((p, i) => `<button type="button" data-place="${p.id}" aria-pressed="${i === 0}">${esc(p.area)}</button>`).join('')}
  </div>
  <div class="ledger" aria-live="polite">
    <p class="ledger-place" data-place-name>${esc(first.name)}, ${esc(first.area)}</p>
    <dl class="ledger-years">
      ${years.map((y, i) => `<div><dt>${y}</dt><dd data-record="${i}">${esc(first.records[i])}</dd></div>`).join('')}
    </dl>
    <a class="ledger-source" data-source href="${esc(first.source)}" target="_blank" rel="noopener noreferrer"><span>Read the linked report, <span data-outlet>${esc(first.outlet)}</span></span>${icon('out')}</a>
  </div>
  <p class="mini-note">Three of the archive’s fifty-plus places. A record of what happened, not an official warning.</p>
  <script type="application/json" data-flood>${JSON.stringify(d.flood)}</script>
</div>`;
  }
  return '';
}

// ---------------------------------------------------------------------------------------------------------------------
// Home

function hero(c, d) {
  const chip = (slug, src, label) => `<a class="chip" href="${c.href(`/work/${slug}`)}" aria-label="${label}"><img src="${c.asset(src)}" alt="" width="240" height="150" decoding="async"><span class="chip-tip" aria-hidden="true">${label.replace(', case study', '')}${icon('arrow')}</span></a>`;
  let i = 0;
  const word = (inner, cls = 'w') => `<span class="${cls}" style="--i:${i++}"><span>${inner}</span></span>`;
  const words = (text) => text.split(' ').map((w) => word(w)).join(' ');
  // A picture stays on the same line as the word it illustrates.
  const pair = (picture, text) => `<span class="nb">${word(picture, 'w w--chip')} ${word(text)}</span>`;
  const title = [
    words('Harsh Bhogayata builds full‑stack products for'),
    pair(chip('flood', '/assets/chips/web.webp', 'Flood Archive, case study'), 'web,'),
    pair(chip('curator', '/assets/chips/mobile.webp', 'Curator, case study'), 'mobile'),
    words('and'),
    pair(chip('morrow', '/assets/chips/tv.webp', 'Morrow, case study'), 'TV,'),
    `<em>${words('from the first interaction to the systems behind it.')}</em>`,
  ].join(' ');
  const products = d.projects.filter((p) => !p.essay);
  return `<section class="hero" aria-labelledby="hero-title">
  <canvas class="hero-ink" data-ink aria-hidden="true"></canvas>
  <div class="wrap hero-inner">
    <p class="hero-eyebrow label"><span>${esc(d.site.role)}</span><span>${esc(d.site.place)}</span><span class="clock"><i class="pulse" aria-hidden="true"></i><time data-clock>UTC +05:30</time></span></p>
    <h1 id="hero-title" class="hero-title">${title}</h1>
    <div class="hero-foot">
      <div class="hero-cell">
        <p class="label">Now</p>
        <p>Full Stack Developer at Quantaura Design Tech, since July 2026.</p>
      </div>
      <div class="hero-cell">
        <p class="label">Building</p>
        <p><a class="link" href="${c.href('/work/curator')}">Curator</a>, a news app that keeps its sources attached. Preparing for launch.</p>
      </div>
      <div class="hero-cell">
        <p class="label">Selected work</p>
        <ol class="hero-index">
          ${products.map((p, n) => `<li><a href="#${p.slug}"><span>${pad(n + 1)}</span>${esc(p.name)}</a></li>`).join('')}
        </ol>
      </div>
      <div class="hero-cell">
        <p class="label">Reach</p>
        <p class="hero-reach"><button type="button" class="link" data-copy="${d.site.email}"><span data-copy-label>Copy email</span>${icon('copy')}</button><a class="link" href="${c.asset(d.site.resume)}" target="_blank" rel="noopener">Résumé${icon('out')}</a></p>
      </div>
    </div>
    <p class="hero-ink-note label" data-ink-note hidden>The ink is Bokuka’s wash painter, running. Click the paper to add a stroke.</p>
  </div>
</section>`;
}

function stage(c, p) {
  const items = p.stage.map((s, i) => `<figure class="stage-item" data-stage-item${i ? ' hidden' : ''}>${s.kind === 'video' ? video(c, s.base, s.alt) : img(c, s.src, s.alt, i ? 'loading="lazy"' : 'loading="lazy" fetchpriority="low"')}</figure>`).join('');
  const tabs = p.stage.length > 1 ? `<div class="seg stage-tabs" role="group" aria-label="${esc(p.name)}: choose a view">${p.stage.map((s, i) => `<button type="button" data-stage-tab aria-pressed="${i === 0}">${esc(s.label)}</button>`).join('')}</div>` : '<span></span>';
  const demo = p.demo ? `<button type="button" class="btn btn--solid btn--small" data-demo="${c.asset(p.demo.src)}">${icon('play')}${esc(p.demo.label)}</button>` : '';
  const first = c.size(p.stage[0].kind === 'video' ? `${p.stage[0].base}.poster.webp` : p.stage[0].src);
  const ratio = first ? (first[0] / first[1]).toFixed(4) : '1.6';
  return `<div class="stage" data-stage style="--ar:${ratio};view-transition-name:cover-${p.slug}">
  <div class="stage-view">${items}</div>
  <div class="stage-bar">${tabs}${demo}</div>
</div>`;
}

function room(c, d, p, n, total) {
  const chars = p.name.length;
  return `<article class="room room--${p.theme}" id="${p.slug}" data-room style="${paletteVars(p)}">
  <div class="room-inner">
    <header class="room-top label">
      <span>${pad(n)} / ${pad(total)}</span><span>${esc(p.type)}</span><span>${esc(p.timeline)}</span>
      <span class="status status--${p.tone}"><i aria-hidden="true"></i>${esc(p.status)}</span>
    </header>
    <div class="room-title">
      <h3 class="room-name" style="--chars:${chars};view-transition-name:name-${p.slug}"><a href="${c.href(`/work/${p.slug}`)}">${esc(p.name)}</a>${p.kanji ? `<span class="room-kanji" lang="ja" aria-hidden="true">${p.kanji}</span>` : ''}</h3>
      <div class="room-intro">
        <p class="room-dek">${esc(p.standfirst)}</p>
        <p class="room-actions"><a class="btn btn--solid" href="${c.href(`/work/${p.slug}`)}">Read the case study${icon('arrow')}</a>${p.links.slice(0, 1).map(([label, url]) => outLink(label, url, 'btn')).join('')}</p>
      </div>
    </div>
    <div class="room-grid">
    ${stage(c, p)}
    <dl class="room-facts">
      ${p.facts.map(([figure, unit]) => `<div class="fact"><dt>${esc(unit)}</dt><dd>${esc(figure)}</dd></div>`).join('')}
      <div class="fact fact--text"><dt>Role</dt><dd>${esc(p.role)}</dd></div>
      <div class="fact fact--text"><dt>Built with</dt><dd><ul class="tags">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></dd></div>
    </dl>
    </div>
    <section class="rule" aria-label="${esc(p.name)}: the rule, running">
      <div class="rule-copy">
        <p class="label"><i class="pulse" aria-hidden="true"></i>The rule, running</p>
        <h4 class="rule-title">${esc(p.rule.title)}</h4>
        <p class="rule-body">${esc(p.rule.body)}</p>
        <p class="rule-source"><b>${esc(p.rule.source[0])}</b><span>${esc(p.rule.source[1])}</span></p>
      </div>
      ${mini(c, d, p.rule.mini)}
    </section>
  </div>
</article>`;
}

function home(c, d) {
  const products = d.projects.filter((p) => !p.essay);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const logDate = (iso) => { const [y, m] = iso.split('-'); return `<time datetime="${iso}"><b>${y}</b> ${months[Number(m) - 1]}</time>`; };

  const work = `<section class="work" id="work" aria-labelledby="work-title">
  <header class="wrap section-head section-head--split">
    <div>
    <p class="label" data-r>Selected work <span class="count">(${pad(products.length)})</span></p>
    <h2 id="work-title" class="display" data-r="words">${rise('Four products, built end to end.').html} <em>${rise('Each comes with the rule that makes it work, running.', 6).html}</em></h2>
    </div>
    <p class="lead" data-r>Screens show what a product looks like. The decision underneath shows how it was built, so every project here carries its core rule as a small working model. Change the inputs and see what it does.</p>
  </header>
  <div class="rooms" data-rooms>
    ${products.map((p, i) => room(c, d, p, i + 1, products.length)).join('\n')}
  </div>
  <div class="wrap more">
    <p class="label" data-r>Also</p>
    <ul class="more-list">
      ${d.more.map((m) => {
        const to = m.slug ? `<a class="link" href="${c.href(`/work/${m.slug}`)}">${esc(m.link)}${icon('arrow')}</a>` : m.url ? outLink(m.link, m.url, 'link') : '';
        return `<li data-r><h3>${esc(m.name)}</h3><p class="label">${esc(m.kind)}</p><p>${esc(m.text)}</p>${to}</li>`;
      }).join('')}
    </ul>
  </div>
</section>`;

  const experience = `<section class="experience" id="experience" aria-labelledby="experience-title">
  <div class="wrap">
    <header class="section-head section-head--split">
      <div>
        <p class="label" data-r>Experience</p>
        <h2 id="experience-title" class="display" data-r="words">${rise('Shipping for clients, and building my own.').html}</h2>
      </div>
      <p class="lead" data-r>I am a software engineer in ${esc(d.site.place)}. I work as a Full Stack Developer at Quantaura Design Tech, and I am the founder of The Curator Group, where Curator is being prepared for launch. I care about the whole line: the screen someone touches, the API behind it, and the job that runs at five past every hour.</p>
    </header>
    <ol class="roles">
      ${d.experience.map((r) => `<li class="role" data-r>
        <p class="role-when label">${esc(r.when)}</p>
        <div class="role-what">
          <h3>${esc(r.title)}<span>${esc(r.org)}</span></h3>
          <p class="role-where label">${esc(r.where)}</p>
          ${r.text ? `<p class="role-text">${esc(r.text)}</p>` : ''}
          ${r.links ? `<p class="role-links">${r.links.map(([label, url]) => outLink(label, url, 'link')).join('')}</p>` : ''}
          ${r.shipped ? `<ul class="shipped">${r.shipped.map((s) => `<li><p class="shipped-figure">${esc(s.figure)}<span>${esc(s.unit)}</span></p><h4>${esc(s.name)}</h4><p>${esc(s.text)}</p></li>`).join('')}</ul>` : ''}
        </div>
      </li>`).join('')}
    </ol>
    <div class="log">
      <p class="label" data-r>The log</p>
      <ol class="log-list">
        ${d.log.map((l) => {
          const text = l.slug ? `<a href="${c.href(`/work/${l.slug}`)}">${esc(l.text)}${icon('arrow')}</a>` : l.url ? outLink(l.text, l.url) : `<span>${esc(l.text)}</span>`;
          return `<li data-r>${logDate(l.date)}${text}</li>`;
        }).join('')}
      </ol>
    </div>
  </div>
</section>`;

  const cols = d.stackProjects;
  const stack = `<section class="stack" id="stack" aria-labelledby="stack-title">
  <div class="wrap">
    <header class="section-head section-head--split">
      <div>
        <p class="label" data-r>Stack</p>
        <h2 id="stack-title" class="display" data-r="words">${rise('Tools, and where they shipped.').html}</h2>
      </div>
      <p class="lead" data-r>A tool is only proof if it shipped somewhere. Each mark below is a product that went out with that tool in it. Point at a project to see everything it was built with.</p>
    </header>
    <div class="matrix-scroll" data-r tabindex="0" role="region" aria-label="Tools by project">
      <table class="matrix" data-matrix>
        <thead>
          <tr><th scope="col" class="matrix-corner"><span class="label">Tool</span></th>${cols.map((p, i) => `<th scope="col" data-col="${i}">${p.slug ? `<a href="${c.href(`/work/${p.slug}`)}">${esc(p.name)}</a>` : `<span>${esc(p.name)}</span>`}</th>`).join('')}</tr>
        </thead>
        ${d.stack.map((g) => `<tbody>
          <tr class="matrix-group"><th scope="rowgroup" colspan="${cols.length + 1}"><span class="label">${esc(g.group)}</span></th></tr>
          ${g.tools.map(([name, used]) => `<tr><th scope="row">${esc(name)}</th>${cols.map((p, i) => used.includes(p.id) ? `<td data-col="${i}" class="on"><i aria-hidden="true"></i><span class="vh">Shipped in ${esc(p.name)}</span></td>` : `<td data-col="${i}"></td>`).join('')}</tr>`).join('')}
        </tbody>`).join('')}
      </table>
    </div>
  </div>
</section>`;

  const essays = d.projects.map((p) => ({ title: p.name, sub: p.dek, href: c.href(`/work/${p.slug}`) }));
  const writing = `<section class="writing" id="writing" aria-labelledby="writing-title">
  <div class="wrap">
    <header class="section-head">
      <p class="label" data-r>Writing and research</p>
      <h2 id="writing-title" class="display" data-r="words">${rise('Written down, with sources.').html}</h2>
    </header>
    <div class="writing-grid">
      <div>
        <p class="label writing-kicker" data-r>Papers and series</p>
        <ul class="papers">
          ${d.writing.map((w) => `<li data-r><a href="${esc(w.url)}" target="_blank" rel="noopener noreferrer"><span class="label">${esc(w.year)} · ${esc(w.kind)}</span><h3>${esc(w.title)}</h3><p>${esc(w.where)}</p>${icon('out')}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <p class="label writing-kicker" data-r>Case studies, written out in full</p>
        <ul class="essays">
          ${essays.map((e, i) => `<li data-r><a href="${e.href}"><span class="label">${pad(i + 1)}</span><h3>${esc(e.title)}</h3><p>${esc(e.sub)}</p>${icon('arrow')}</a></li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
</section>`;

  const body = `<main id="main">
${hero(c, d)}
${work}
${experience}
${stack}
${writing}
</main>`;

  const ld = [{ '@context': 'https://schema.org', '@type': 'WebSite', name: d.site.name, url: d.site.url }];
  return page(c, d, { title: `${d.site.name} — Software engineer`, description: d.site.description, url: '/', image: 'home', ld }, body, { bodyClass: 'home', demo: true });
}

// ---------------------------------------------------------------------------------------------------------------------
// Case studies

function prose(c, d, p) {
  let html = c.article(p.slug).replace(/\{A\}/g, c.asset('/'));
  let n = 0;
  const toc = [];
  html = html.replace(/<h2>(.*?)<\/h2>/g, (_, title) => { n += 1; toc.push([n, title]); return `<h2 id="s${n}"><span class="label">${pad(n)}</span>${title}</h2>`; });
  // Reserve the space of every picture so nothing jumps while the page loads.
  html = html.replace(/<img src="([^"]+)"/g, (m, src) => {
    const clean = src.replace(/^(\.\.\/|\.\/|\/)+/, '');
    const size = c.size(clean);
    return size ? `${m} width="${size[0]}" height="${size[1]}" decoding="async"` : m;
  });
  html = html.replace(/<video ([^>]*?)poster="([^"]+)"/g, (m, before, src) => {
    const size = c.size(src.replace(/^(\.\.\/|\.\/|\/)+/, ''));
    return `<video ${before}data-poster="${src}"${size ? ` width="${size[0]}" height="${size[1]}"` : ''}`;
  });
  html = html.replace(/ autoplay muted loop playsinline preload="none">/g, ' muted loop playsinline controls preload="none" data-autoplay>');
  html = html.replace(/\{MINI\}/g, p.rule ? `<figure class="art-fig art-fig--wide art-mini" style="${paletteVars(p)}"><div class="art-mini-room room--${p.theme}">${mini(c, d, p.rule.mini)}</div><figcaption><b>Try it</b>${esc(p.rule.title)}</figcaption></figure>` : '');
  html = html.replace(/<ul class="art-timeline">([\s\S]*?)<\/ul>/g, (m, inner) => `<ul class="art-timeline" style="--n:${(inner.match(/<li>/g) || []).length}">${inner}</ul>`);
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return { html, toc, minutes: Math.max(1, Math.round(words / 230)) };
}

function caseStudy(c, d, p, index) {
  const total = d.projects.length;
  const next = d.projects[(index + 1) % total];
  const { html, toc, minutes } = prose(c, d, p);
  const links = p.links.length ? p.links.map(([label, url]) => outLink(label, url, 'link')).join('') : '<span>Private build</span>';
  const body = `<main id="main" class="case" data-case style="${paletteVars(p)}">
  <article>
    <header class="case-head room--${p.theme}">
      <div class="wrap">
        <p class="case-crumb label"><a href="${c.href('/#work')}">${icon('arrow')}All work</a><span>${pad(index + 1)} / ${pad(total)}</span><span>${esc(p.type)}</span><span class="status status--${p.tone}"><i aria-hidden="true"></i>${esc(p.status)}</span></p>
        <h1 class="case-title" style="--chars:${p.name.length};view-transition-name:name-${p.slug}">${esc(p.name)}${p.kanji ? `<span class="room-kanji" lang="ja" aria-hidden="true">${p.kanji}</span>` : ''}</h1>
        <p class="case-standfirst">${esc(p.standfirst)}</p>
        <dl class="case-spec">
          <div><dt>Timeline</dt><dd>${esc(p.timeline)}</dd></div>
          <div><dt>${esc(p.count[0])}</dt><dd>${esc(p.count[1])}</dd></div>
          <div><dt>Reading time</dt><dd>${minutes} min</dd></div>
          <div class="case-spec-wide"><dt>Built with</dt><dd><ul class="tags">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></dd></div>
          <div><dt>See it</dt><dd class="case-links">${links}</dd></div>
        </dl>
        <figure class="case-cover" style="view-transition-name:cover-${p.slug}">
          ${img(c, p.cover.src, p.cover.alt, 'fetchpriority="high"')}
          <figcaption><b>Fig. 01</b>${esc(p.caption)}</figcaption>
        </figure>
      </div>
    </header>
    <div class="wrap case-body">
      <nav class="case-toc" aria-label="In this case study" data-toc>
        <p class="label">In this case study</p>
        <ol>${toc.map(([n, title]) => `<li><a href="#s${n}"><span>${pad(n)}</span>${title}</a></li>`).join('')}</ol>
        ${p.demo ? `<button type="button" class="btn btn--solid btn--small" data-demo="${c.asset(p.demo.src)}">${icon('play')}${esc(p.demo.label)}</button>` : ''}
      </nav>
      <div class="prose">
${html}
      </div>
    </div>
  </article>
  <nav class="case-next room--${next.theme}" aria-label="Next case study" style="${paletteVars(next)}">
    <a href="${c.href(`/work/${next.slug}`)}" class="wrap">
      <p class="label">Next${next.essay ? ', an essay' : ''} · ${pad(((index + 1) % total) + 1)} / ${pad(total)}</p>
      <p class="case-next-name" style="--chars:${next.name.length}">${esc(next.name)}${icon('arrow')}</p>
      <p class="case-next-dek">${esc(next.dek)}</p>
    </a>
  </nav>
  <div class="progress" data-progress aria-hidden="true"><i></i></div>
</main>`;

  const title = `${p.name} — ${p.essay ? 'Essay' : 'Case study'} — ${d.site.name}`;
  const ld = [{
    '@context': 'https://schema.org', '@type': 'Article', headline: `${p.name}: ${p.dek}`, description: p.standfirst,
    author: { '@type': 'Person', name: d.site.name, url: d.site.url }, image: `${d.site.url}/assets/share/${p.slug}.jpg`,
    mainEntityOfPage: `${d.site.url}/work/${p.slug}`,
  }];
  return page(c, d, { title, description: p.standfirst, url: `/work/${p.slug}`, image: p.slug, type: 'article', ld }, body, { current: 'work', bodyClass: 'case-page', demo: Boolean(p.demo) });
}

function notFound(c, d) {
  const body = `<main id="main" class="lost">
  <div class="wrap">
    <p class="label">404</p>
    <h1 class="display">Nothing lives at this address.</h1>
    <p class="lead">The page may have moved when the site was rebuilt. The work is all still here.</p>
    <p class="room-actions"><a class="btn btn--solid" href="${c.href('/')}">Go to the home page${icon('arrow')}</a><a class="btn" href="${c.href('/#work')}">See the work</a></p>
  </div>
</main>`;
  return page(c, d, { title: `Not found — ${d.site.name}`, description: 'This page does not exist.', url: '/404', image: 'home' }, body, { bodyClass: 'lost-page' });
}

export function pages(d) {
  return [
    { path: 'index.html', url: '/', sitemap: true, render: (c) => home(c, d) },
    ...d.projects.map((p, i) => ({ path: `work/${p.slug}.html`, url: `/work/${p.slug}`, sitemap: true, render: (c) => caseStudy(c, d, p, i) })),
    { path: '404.html', url: '/404', sitemap: false, render: (c) => notFound(c, d) },
  ];
}
