
// Concept: work as articles. The wire beside the prose fills to the reading line (40% down the screen); the
// sections it has passed light up, and once it reaches the end it carries on round the corner to the next project.
(() => {
  const art = document.querySelector('.art');
  const prose = art?.querySelector('.art-prose');
  const wire = prose?.querySelector('.art-wire');
  if (!wire) return;
  const stations = [...prose.querySelectorAll(':scope > h2')];
  let frame = 0;

  function update() {
    frame = 0;
    const box = prose.getBoundingClientRect();
    const fill = Math.min(box.height, Math.max(0, innerHeight * .4 - box.top));
    wire.style.setProperty('--fill', `${fill}px`);
    wire.style.setProperty('--head', fill > 0 && fill < box.height ? 1 : 0);
    for (const h of stations) h.classList.toggle('is-past', h.offsetTop <= fill + 8);
    art.classList.toggle('is-done', fill >= box.height - 1);
  }

  addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
  addEventListener('resize', update);
  update();
})();

// Recordings with sound: nothing plays until asked; the progress line is the wire, and it can be scrubbed.
for (const player of document.querySelectorAll('.art-player')) {
  const video = player.querySelector('video');
  const track = player.querySelector('.art-player-track');
  const time = player.querySelector('.art-player-time');
  const toggle = player.querySelector('.art-player-toggle');
  const clock = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  const sync = () => {
    const total = video.duration || 0;
    player.style.setProperty('--played', total ? (video.currentTime / total).toFixed(4) : 0);
    time.textContent = `${clock(video.currentTime)} / ${clock(total)}`;
  };
  const flip = () => {
    if (video.paused) { video.muted = false; video.play(); } else { video.pause(); }
  };
  video.addEventListener('play', () => { player.classList.add('is-playing', 'is-started'); toggle.setAttribute('aria-label', 'Pause'); });
  video.addEventListener('pause', () => { player.classList.remove('is-playing'); toggle.setAttribute('aria-label', 'Play'); });
  video.addEventListener('ended', () => { player.classList.remove('is-started'); video.currentTime = 0; sync(); });
  video.addEventListener('timeupdate', sync);
  video.addEventListener('loadedmetadata', sync);
  player.querySelector('.art-player-big').addEventListener('click', flip);
  video.addEventListener('click', flip);
  toggle.addEventListener('click', flip);
  track.addEventListener('click', (event) => {
    const box = track.getBoundingClientRect();
    if (video.duration) video.currentTime = video.duration * Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
  });
}

// Contents: shown in the paper left of the picture when it fits there, above the title tab.
function contents(open, fig, H, tabH, roomy) {
  const toc = open.querySelector('.art-toc');
  if (!toc) return;
  const left = parseFloat(getComputedStyle(toc).left) || 40;
  const width = fig.left - left - 40;
  // From the picture's top edge down to a little above the title tab, so the line spans the whole free column.
  const top = Math.max(26, fig.top + 6), bottom = H - tabH - 30;
  open.style.setProperty('--cw', `${width}px`);
  open.style.setProperty('--ct', `${top}px`);
  const rows = toc.querySelectorAll('li').length;
  open.style.setProperty('--chh', `${Math.max(0, Math.min(bottom - top, rows * 78))}px`);
  const fits = roomy && width >= 200 && bottom - top >= rows * 30;
  open.style.setProperty('--cd', fits ? 'block' : 'none');
}

// Place the cover as large as it can be, whole, a little right of centre, without the title tab covering any of it.
// Two fits are tried: beside the tab (the picture can use the full height) or above it (the full width); the larger wins.
for (const open of document.querySelectorAll('.art-open')) {
  const figure = open.querySelector('.art-figure');
  const tab = open.querySelector('.art-title');
  const ar = parseFloat(figure.dataset.ar) || 1.6;
  const fit = () => {
    if (matchMedia('(max-width: 1000px)').matches) {
      for (const k of ['--fx', '--fy', '--fw', '--fh']) open.style.removeProperty(k);
      return;
    }
    const W = open.clientWidth, H = open.clientHeight, pad = 14, gutter = 24;
    const tabW = tab.offsetWidth, tabH = tab.offsetHeight;
    const place = (w, h, minLeft, top) => {
      const centre = W * .6;
      const left = Math.min(Math.max(centre - w / 2, minLeft), W - gutter - w);
      return { w, h, left, top, area: w * h };
    };
    // Beside the tab: full height, kept clear of the tab's right edge.
    // The section line keeps a column of its own on the left (about a quarter of the width, never under 300px).
    const reserve = Math.max(tabW + 24, Math.min(W * .27, 420), 300);
    let h1 = H - pad * 2, w1 = Math.min(h1 * ar, W - gutter - reserve);
    h1 = w1 / ar;
    const beside = place(w1, h1, reserve, (H - h1) / 2);
    // Above the tab: clear of its top edge, free to use the width.
    let h2 = H - tabH - pad * 2, w2 = Math.min(h2 * ar, W - gutter * 2);
    h2 = w2 / ar;
    const above = place(w2, h2, gutter, pad);
    // Keep the section line unless the picture would be far bigger above the tab.
    const best = beside.area * 1.35 >= above.area ? beside : above;
    contents(open, best, H, tabH, best === beside);
    open.style.setProperty('--fx', `${best.left}px`);
    open.style.setProperty('--fy', `${best.top}px`);
    open.style.setProperty('--fw', `${best.w}px`);
    open.style.setProperty('--fh', `${best.h}px`);
  };
  new ResizeObserver(fit).observe(open);
  fit();
}

// Contents links scroll smoothly and stop with the section heading just below the sticky header.
for (const link of document.querySelectorAll('.art-toc a')) {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    const header = document.querySelector('.site-header, header[class*="masthead"], .main-header') || document.querySelector('body > header');
    const offset = (header ? header.getBoundingClientRect().height : 90) + 28;
    window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - offset, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    history.replaceState(null, '', link.getAttribute('href'));
  });
}

// The lime dot on the contents line travels from the first section to the last, pauses, and goes again; choosing a
// section stops it and glides it to that section's node, where it rests.
for (const toc of document.querySelectorAll('.art-toc')) {
  const list = toc.querySelector('ol');
  const nodes = [...toc.querySelectorAll('a i')];
  if (!nodes.length) continue;
  const dot = document.createElement('span');
  dot.className = 'art-toc-dot';
  dot.setAttribute('aria-hidden', 'true');
  list.appendChild(dot);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = 'cubic-bezier(.45,0,.2,1)';
  const y = (node) => node.getBoundingClientRect().top - list.getBoundingClientRect().top;
  const x = () => nodes[0].getBoundingClientRect().left - list.getBoundingClientRect().left;
  const at = (top) => `translate(${x()}px, ${top}px)`;
  let travel = null, rest = null;

  function run() {
    if (rest !== null || reduce) return;
    const first = y(nodes[0]), last = y(nodes[nodes.length - 1]);
    travel = dot.animate([{ transform: at(first), opacity: 0 }, { transform: at(first), opacity: 1, offset: .06 },
      { transform: at(last), opacity: 1, offset: .82 }, { transform: at(last), opacity: 0 }],
      { duration: 900 * nodes.length, easing: 'linear', iterations: Infinity, delay: 300 });
  }

  function settle(index, animate) {
    rest = index;
    travel?.cancel();
    const target = at(y(nodes[index]));
    const from = getComputedStyle(dot).transform;
    dot.style.transform = target;
    dot.style.opacity = 1;
    if (animate && !reduce) dot.animate([{ transform: from === 'none' ? target : from }, { transform: target }], { duration: 520, easing: ease });
    toc.querySelectorAll('li').forEach((li, i) => li.classList.toggle('is-here', i === index));
  }

  toc.querySelectorAll('a').forEach((link, i) => link.addEventListener('click', () => settle(i, true)));
  // Keep the dot on its node when the layout changes; restart the run if nothing is chosen yet.
  new ResizeObserver(() => { if (rest !== null) settle(rest, false); else { travel?.cancel(); run(); } }).observe(list);
  if (reduce) settle(0, false);
}
