(() => {
  'use strict';

  const setPressed = (buttons, active) => {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button === active)));
  };

  const engineerHero = document.querySelector('.engineer-hero');
  if (engineerHero) {
    const header = document.querySelector('.footer-identity');
    const artwork = engineerHero.querySelector('.engineer-art-svg');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover:hover) and (pointer:fine)');
    const signals = [...engineerHero.querySelectorAll('.wf-signal')].map(element => {
      const path = artwork?.querySelector('#' + element.dataset.route);
      return path ? { element, path, length: path.getTotalLength(), duration: Number(element.dataset.duration) || 18, phase: Number(element.dataset.phase) || 0 } : null;
    }).filter(Boolean);
    let heroVisible = !('IntersectionObserver' in window);
    let motionFrame = 0, pointerFrame = 0, lastTick = null, elapsed = 0;
    const motionAllowed = () => heroVisible && !document.hidden && !motionPreference.matches;
    const resetParallax = () => {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      artwork?.style.removeProperty('--wf-pointer-x');
      artwork?.style.removeProperty('--wf-pointer-y');
    };
    const placeSignals = seconds => {
      for (const signal of signals) {
        const progress = (seconds / signal.duration + signal.phase) % 1;
        const point = signal.path.getPointAtLength(progress * signal.length);
        signal.element.setAttribute('transform', 'translate(' + point.x.toFixed(2) + ' ' + point.y.toFixed(2) + ')');
        // Fade at open path ends so a signal can restart without a visible jump.
        signal.element.style.opacity = String(Math.min(1, progress / .055, (1 - progress) / .055));
      }
    };
    const animateSignals = timestamp => {
      motionFrame = 0;
      if (!motionAllowed()) { lastTick = null; return; }
      if (lastTick !== null) elapsed += Math.min(timestamp - lastTick, 64) / 1000;
      lastTick = timestamp;
      placeSignals(elapsed);
      motionFrame = requestAnimationFrame(animateSignals);
    };
    const syncMotion = () => {
      const active = motionAllowed();
      engineerHero.classList.toggle('is-animating', active);
      if (active && !motionFrame && signals.length) motionFrame = requestAnimationFrame(animateSignals);
      if (!active) {
        cancelAnimationFrame(motionFrame);
        motionFrame = 0;
        lastTick = null;
        resetParallax();
      }
      if (motionPreference.matches) {
        engineerHero.classList.remove('hero-is-loading');
        placeSignals(0);
      }
    };
    const fitHero = () => {
      if (header) engineerHero.style.setProperty('--engineer-header-height', header.getBoundingClientRect().height + 'px');
    };
    fitHero();
    // Fade the masthead over the first 160px instead of covering the art at a hard threshold.
    let mastheadFrame = 0, lastMastheadFade = '';
    const syncMasthead = () => {
      mastheadFrame = 0;
      if (!header) return;
      const progress = Math.max(0, Math.min(1, window.scrollY / 160));
      const fade = progress * progress * (3 - 2 * progress);
      const opacity = (fade * .96).toFixed(4);
      if (opacity === lastMastheadFade) return;
      lastMastheadFade = opacity;
      header.style.setProperty('--hero-header-opacity', opacity);
      header.style.setProperty('--hero-header-blur', (fade * 16).toFixed(2) + 'px');
    };
    syncMasthead();
    window.addEventListener('scroll', () => {
      if (!mastheadFrame) mastheadFrame = requestAnimationFrame(syncMasthead);
    }, { passive: true });
    window.addEventListener('pageshow', syncMasthead);
    if ('ResizeObserver' in window) {
      const sizingObserver = new ResizeObserver(fitHero);
      if (header) sizingObserver.observe(header);
    } else window.addEventListener('resize', fitHero, { passive: true });
    document.fonts?.ready.then(fitHero);
    placeSignals(0);
    if (!motionPreference.matches) {
      engineerHero.classList.add('hero-is-loading');
      requestAnimationFrame(() => requestAnimationFrame(() => engineerHero.classList.remove('hero-is-loading')));
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        heroVisible = entries.some(entry => entry.isIntersecting);
        syncMotion();
      }, { threshold: 0 }).observe(engineerHero);
    }
    document.addEventListener('visibilitychange', syncMotion);
    window.addEventListener('pagehide', () => {
      cancelAnimationFrame(mastheadFrame);
      mastheadFrame = 0;
      cancelAnimationFrame(motionFrame);
      motionFrame = 0;
      lastTick = null;
      resetParallax();
    });
    window.addEventListener('pageshow', syncMotion);
    if (motionPreference.addEventListener) motionPreference.addEventListener('change', syncMotion);
    else motionPreference.addListener(syncMotion);
    syncMotion();

    const resetAccent = () => { delete engineerHero.dataset.accentTarget; };
    for (const [selector, target] of [['.engineer-work', 'work'], ['.engineer-resume', 'resume']]) {
      const link = engineerHero.querySelector(selector);
      link?.addEventListener('pointerenter', () => { engineerHero.dataset.accentTarget = target; });
      link?.addEventListener('focus', () => { engineerHero.dataset.accentTarget = target; });
      link?.addEventListener('pointerleave', resetAccent);
      link?.addEventListener('blur', resetAccent);
    }
    engineerHero.addEventListener('pointermove', event => {
      if (!artwork || event.pointerType !== 'mouse' || !finePointer.matches || !motionAllowed()) return;
      cancelAnimationFrame(pointerFrame);
      const box = engineerHero.getBoundingClientRect();
      const x = Math.max(-.5, Math.min(.5, (event.clientX - box.left) / box.width - .5));
      const y = Math.max(-.5, Math.min(.5, (event.clientY - box.top) / box.height - .5));
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        if (!motionAllowed()) return;
        artwork.style.setProperty('--wf-pointer-x', (x * 3).toFixed(2) + 'px');
        artwork.style.setProperty('--wf-pointer-y', (y * 2).toFixed(2) + 'px');
      });
    }, { passive: true });
    engineerHero.addEventListener('pointerleave', () => { resetParallax(); resetAccent(); });
  }



  const floodPlaces = {
    vadsar: {
      name: 'Casa Residency, Vadsar',
      years: {'2019': 'Waist deep', '2024': 'First floor (12 ft)', '2025': 'Marooned in September'},
      source: 'https://timesofindia.indiatimes.com/city/vadodara/rising-vishwamitri-puts-barodians-on-edge-again/articleshow/123751219.cms'
    },
    sayajigunj: {
      name: 'Parshuram Bhatta, Sayajigunj',
      years: {'2019': 'Submerged', '2024': 'Submerged', '2025': 'Alert level'},
      source: 'https://deshgujarat.com/2025/09/06/live-vishwamitri-river-and-ajwa-sarovar-water-levels-update-via-vmc/'
    },
    harni: {
      name: 'Motnath Mahadev, Harni',
      years: {'2019': 'Knee deep', '2024': 'Chest deep', '2025': 'Waterlogged'},
      source: 'https://deshgujarat.com/2025/09/06/live-vishwamitri-river-and-ajwa-sarovar-water-levels-update-via-vmc/'
    }
  };
  const floodButtons = [...document.querySelectorAll('.flood-places [data-place]')];
  const floodName = document.getElementById('flood-place-name');
  const floodSource = document.getElementById('flood-source');
  const floodYears = [...document.querySelectorAll('[data-flood-year]')];
  floodButtons.forEach(button => button.addEventListener('click', () => {
    const record = floodPlaces[button.dataset.place];
    if (!record || !floodName || !floodSource) return;
    floodName.textContent = record.name;
    floodYears.forEach(year => { year.textContent = record.years[year.dataset.floodYear]; });
    floodSource.href = record.source;
    setPressed(floodButtons, button);
  }));

  const kalakariStage = document.querySelector('.kalakari-stage');
  const kalakariButtons = [...document.querySelectorAll('.kalakari-switch [data-side]')];
  const kalakariViews = [...document.querySelectorAll('.kalakari-voice[data-view]')];
  const kalakariImages = [...document.querySelectorAll('.kalakari-image img[data-image]')];
  kalakariButtons.forEach(button => button.addEventListener('click', () => {
    const side = button.dataset.side;
    if (!kalakariStage || !kalakariViews.some(view => view.dataset.view === side) || !kalakariImages.some(image => image.dataset.image === side)) return;
    kalakariStage.dataset.side = side;
    kalakariViews.forEach(view => { view.hidden = view.dataset.view !== side; });
    kalakariImages.forEach(image => { image.hidden = image.dataset.image !== side; });
    setPressed(kalakariButtons, button);
  }));

  // Stack routing: a tool is only proof if it shipped somewhere. Picking a tool draws one wire, in the
  // footer's lane style, from the tool into the "from idea to production" line. The wire's head rounds
  // every turn at one radius and flows into the line's own rule, which extends as the head passes; the
  // line then names where the tool shipped. Same slot, same type, so the intro never grows.
  // Limits (D6): the wire draws only where the intro sits beside the tools (over 1000px wide); narrower
  // screens keep the line's answer alone. Reduced motion: wire, rule and answer appear at once.
  const stack = document.querySelector('.technology-stack');
  const stackTools = [...document.querySelectorAll('.stack-tool[data-routes]')];
  const stackRoute = document.getElementById('stack-route');
  if (stack && stackTools.length && stackRoute) {
    const PROJECTS = {
      curator: ['Curator', 'work/curator.html'],
      kalakari: ['Kalakari', 'stories.html#kalakari-story'],
      flood: ['Flood Archive', 'work/flood.html'],
      scaledown: ['ScaleDown', 'stories.html#scaledown-story'],
      morrow: ['Morrow'],
      eventsorted: ['EventSorted'],
      ida: ['IDA GCC Desk'],
      tally: ['Tally connector']
    };
    const RADIUS = 10;
    const resting = [...stackRoute.childNodes].map(node => node.cloneNode(true));
    const storyBase = document.querySelector('a[href*="stories.html#"]')?.getAttribute('href').split('stories.html')[0] || '';
    const reducedStack = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wide = window.matchMedia('(min-width: 1001px)');
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'stack-wiring');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    const wire = document.createElementNS(ns, 'path');
    wire.setAttribute('class', 'stack-wire');
    const head = document.createElementNS(ns, 'circle');
    head.setAttribute('class', 'stack-packet');
    head.setAttribute('r', '3');
    svg.append(wire, head);
    stack.append(svg);
    let current = null, frame = 0, geometry = null;

    // The line keeps its own shape: the tool, its rule, and the answer underneath.
    const renderLine = tool => {
      if (!tool) {
        stackRoute.replaceChildren(...resting.map(node => node.cloneNode(true)));
        delete stackRoute.dataset.state;
        return;
      }
      const keys = tool.dataset.routes.split(' ').filter(Boolean);
      const name = document.createElement('span');
      name.className = 'stack-route-tool';
      name.textContent = tool.dataset.tool;
      const rule = document.createElement('i');
      rule.setAttribute('aria-hidden', 'true');
      const answer = document.createElement('span');
      answer.className = 'stack-route-answer';
      answer.append(...keys.flatMap((key, index) => {
        const [label, href] = PROJECTS[key];
        const node = href ? Object.assign(document.createElement('a'), { href: storyBase + href, textContent: label }) : document.createTextNode(label);
        return index ? [document.createTextNode(', '), node] : [node];
      }));
      if (!keys.length) answer.textContent = 'Not yet in a featured project';
      stackRoute.replaceChildren(name, rule, answer);
      stackRoute.dataset.state = keys.length ? 'routed' : 'unrouted';
    };

    // One radius everywhere: a drop from the tool, a turn onto the rail under the last row, a run left,
    // a turn up beside the line, and a turn into the line's rule, joining it at its right end.
    const measure = () => {
      if (!wide.matches || !current) return null;
      const rule = stackRoute.querySelector('i');
      rule.style.transform = 'none';
      // Measure from the drawing layer itself (inside the section's border), so the wire meets the rule
      // on the exact pixel instead of a border-width off.
      svg.style.display = '';
      const box = svg.getBoundingClientRect();
      const tile = current.getBoundingClientRect();
      const ruleBox = rule.getBoundingClientRect();
      const lowest = Math.max(...stackTools.map(tool => tool.getBoundingClientRect().bottom));
      const R = RADIUS;
      const x = tile.left + tile.width / 2 - box.left, y = tile.bottom - box.top + 2;
      const xE = ruleBox.right - box.left, yT = ruleBox.top + ruleBox.height / 2 - box.top;
      const xC = xE + 18;
      const yR = Math.max(Math.min(box.height - 9, lowest - box.top + 11), yT + 2 * R, y + 2 * R);
      svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
      wire.setAttribute('d', `M${x} ${y} V${yR - R} Q${x} ${yR} ${x - R} ${yR} H${xC + R} Q${xC} ${yR} ${xC} ${yR - R} V${yT + R} Q${xC} ${yT} ${xC - R} ${yT} H${xE}`);
      return { rule, wireLength: wire.getTotalLength(), ruleLength: ruleBox.width, xE, yT };
    };

    const settle = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      head.style.opacity = '0';
      wire.style.strokeDasharray = '';
      wire.style.strokeDashoffset = '';
      stackRoute.style.removeProperty('--answer');
      geometry?.rule && (geometry.rule.style.transform = '');
    };
    const draw = animate => {
      settle();
      svg.style.display = wide.matches && current ? '' : 'none';
      geometry = measure();
      if (!geometry) return;
      if (!animate || reducedStack.matches) return;
      const { rule, wireLength, ruleLength, xE, yT } = geometry;
      const total = wireLength + ruleLength;
      const duration = Math.max(460, Math.min(860, total * .8));
      const start = performance.now();
      wire.style.strokeDasharray = `${wireLength} ${wireLength}`;
      rule.style.transform = 'scaleX(0)';
      stackRoute.style.setProperty('--answer', '0');
      const step = now => {
        const t = Math.min(1, (now - start) / duration);
        const at = (1 - Math.pow(1 - t, 2.2)) * total;
        let hx, hy;
        if (at <= wireLength) {
          wire.style.strokeDashoffset = String(wireLength - at);
          const p = wire.getPointAtLength(at); hx = p.x; hy = p.y;
        } else {
          wire.style.strokeDashoffset = '0';
          const along = Math.min(ruleLength, at - wireLength);
          rule.style.transform = `scaleX(${(along / ruleLength).toFixed(4)})`;
          hx = xE - along; hy = yT;
          if (along / ruleLength > .55) stackRoute.style.setProperty('--answer', '1');
        }
        head.setAttribute('cx', hx.toFixed(2)); head.setAttribute('cy', hy.toFixed(2));
        head.style.opacity = String(Math.min(1, t / .06, (1 - t) / .12));
        if (t < 1) frame = requestAnimationFrame(step);
        else settle();
      };
      frame = requestAnimationFrame(step);
    };

    const pick = tool => {
      current = tool === current ? null : tool;
      stackTools.forEach(item => item.setAttribute('aria-pressed', String(item === current)));
      renderLine(current);
      stack.dataset.routed = current ? stackRoute.dataset.state : '';
      draw(Boolean(current));
    };
    stackTools.forEach(tool => tool.addEventListener('click', () => pick(tool)));
    stack.addEventListener('keydown', event => { if (event.key === 'Escape' && current) pick(current); });
    // Re-measure on layout changes without replaying the draw.
    if ('ResizeObserver' in window) new ResizeObserver(() => { if (!frame) draw(false); }).observe(stack);
    wide.addEventListener('change', () => draw(false));
    document.fonts?.ready.then(() => draw(false));
    draw(false);
  }

  const curatorSurface = document.querySelector('.curator-surface');
  const curatorButtons = [...document.querySelectorAll('.curator-switch [data-mode]')];
  const curatorViews = [...document.querySelectorAll('[data-curator-view]')];
  curatorButtons.forEach(button => button.addEventListener('click', () => {
    const mode = button.dataset.mode;
    if (!curatorSurface || !curatorViews.some(view => view.dataset.curatorView === mode)) return;
    curatorSurface.dataset.mode = mode;
    curatorViews.forEach(view => { view.hidden = view.dataset.curatorView !== mode; });
    setPressed(curatorButtons, button);
  }));

})();

// Experience concept 2: one sentence, rewritten as you move along the rule. Words shared by two moments stay and
// glide to their new place; only the words that changed roll out and in. "_" marks the time, "*" the thing made.
(() => {
  const section = document.querySelector('.xs-scrub');
  if (!section) return;
  const sentence = section.querySelector('.xs-sentence');
  const rule = section.querySelector('.xs-rule');
  const track = section.querySelector('.xs-track');
  const stops = [...section.querySelectorAll('.xs-stops li')];
  const spans = section.querySelector('.xs-spans');
  const facts = [...spans.querySelectorAll('.xs-span')];
  const proof = section.querySelector('.xs-proof');
  const count = section.querySelector('.xs-count b');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Where each moment sits on the rule; the gap before "now" holds the July 2026 switch from study to work.
  const AT = [0, .2, .4, .6, 1];
  const now = new Date();
  const dayAt = String(Math.round((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(2026, 6, 1)) / 864e5) + 1);
  const tool = (name, file) => ({ name, file });
  const NEXT = 'Next <span>/</span> Selected work';
  const STEPS = [
    { text: '_In _July _2024, I started my master’s in how software gets built.', when: 'July 2024', fact: 'study',
      label: 'PROGRAMME', chips: ['Computer applications', 'Software systems'], stats: [['Length', '2 years'], ['Shipped during it', '3 projects']], href: '#work', link: NEXT },
    { text: '_By _October _2025, I was shipping *Kalakari, a marketplace for artisans.', when: 'October 2025', fact: 'study',
      label: 'SHIPPED WITH', tools: [tool('React', 'react'), tool('TypeScript', 'typescript'), tool('Tailwind CSS', 'tailwindcss'), tool('Node.js', 'nodedotjs'), tool('MongoDB', 'mongodb'), tool('Vercel', 'vercel')],
      stats: [['Commits', '14'], ['Status', 'Live']], href: 'stories.html#kalakari-story', link: 'The Kalakari story' },
    { text: '_In _January _2026, I was shipping *Flood *Archive, a map that works offline.', when: 'January 2026', fact: 'study',
      label: 'SHIPPED WITH', tools: [tool('Capacitor', 'capacitor'), tool('Android', 'android'), tool('Vercel', 'vercel')],
      stats: [['Commits', '55'], ['Works', 'Offline']], href: 'work/flood.html', link: 'The Flood Archive story' },
    { text: '_In _April _2026, I started *Curator, a reading app for iOS and Android.', when: 'April 2026', fact: 'study',
      label: 'SHIPPED WITH', tools: [tool('React Native', 'react'), tool('Expo', '../expo-logo-type-a'), tool('Django', 'django'), tool('PostgreSQL', 'postgresql'), tool('Redis', 'redis'), tool('Docker', 'docker')],
      stats: [['Commits', '114'], ['Status', 'Pre-launch']], href: 'work/curator.html', link: 'The Curator story' },
    { text: '_Since _July _2026, I build full-stack products at *Quantaura.', when: 'July 2026 to now', fact: 'work',
      label: 'PRACTICE', chips: ['Product', 'Web + mobile', 'Backend', 'Delivery'], stats: [['Day', dayAt], ['Since', 'Jul 2026']], href: '#work', link: NEXT },
  ];
  // The concept page is built two folders down; reuse whatever prefix the build gave the page's own links and images.
  const storyBase = (document.querySelector('a[href*="stories.html"]')?.getAttribute('href') || 'stories.html').split('stories.html')[0];
  const assetBase = (document.querySelector('img[src*="assets/"]')?.getAttribute('src') || 'assets/').split('assets/')[0];
  const last = STEPS.length - 1;
  let step = last, autoplay = 0, touched = false;

  function fill(data) {
    const kit = data.tools
      ? data.tools.map((t, k) => `<li class="xs-tool" style="--k:${k}"><img src="${assetBase}assets/stack-logos/${t.file}.svg" alt="" decoding="async"><span>${t.name}</span></li>`).join('')
      : data.chips.map((c) => `<li class="xs-chip">${c}</li>`).join('');
    const stats = data.stats.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    proof.innerHTML = `<p class="xs-proof-label" style="--n:0">${data.label}</p><ul class="xs-proof-kit" style="--n:1">${kit}</ul>`
      + `<dl class="xs-proof-stats" style="--n:2">${stats}</dl>`
      + (data.href ? `<a class="xs-proof-link" style="--n:3" href="${data.href.startsWith('#') ? '' : storyBase}${data.href}">${data.link} <b aria-hidden="true">↗</b></a>` : '');
  }

  const words = (text) => text.split(' ').map((raw) => ({
    text: raw.replace(/^[_*]/, ''), kind: raw[0] === '_' ? 'xs-when' : raw[0] === '*' ? 'xs-mark' : '',
  }));
  const same = (a, b) => a.text === b.text && a.kind === b.kind;

  // Longest common subsequence: the words that can stay on screen between two sentences.
  function keep(a, b) {
    const table = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i -= 1) for (let j = b.length - 1; j >= 0; j -= 1)
      table[i][j] = same(a[i], b[j]) ? table[i + 1][j + 1] + 1 : Math.max(table[i + 1][j], table[i][j + 1]);
    const pairs = new Map();
    for (let i = 0, j = 0; i < a.length && j < b.length;) {
      if (same(a[i], b[j])) { pairs.set(j, i); i += 1; j += 1; } else if (table[i + 1][j] >= table[i][j + 1]) i += 1; else j += 1;
    }
    return pairs;
  }

  function write(next, animate) {
    const before = [...sentence.querySelectorAll('.xs-word')];
    const box = sentence.getBoundingClientRect();
    const old = before.map((node) => ({ text: node.textContent, kind: node.classList.contains('xs-when') ? 'xs-when' : node.classList.contains('xs-mark') ? 'xs-mark' : '',
      rect: node.getBoundingClientRect() }));
    const fresh = words(STEPS[next].text);
    const pairs = keep(old, fresh);
    sentence.textContent = '';
    const nodes = fresh.map((word, i) => {
      if (i) sentence.append(' ');
      const node = document.createElement('span');
      node.className = `xs-word ${word.kind}`.trim();
      node.textContent = word.text;
      sentence.append(node);
      return node;
    });
    if (!animate) return;
    const ease = 'cubic-bezier(.16,1,.3,1)';
    let entering = 0;
    nodes.forEach((node, j) => {
      if (pairs.has(j)) {
        const from = old[pairs.get(j)].rect, to = node.getBoundingClientRect();
        const dx = from.left - to.left, dy = from.top - to.top;
        if (dx || dy) node.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 640, easing: ease });
      } else {
        node.animate([{ opacity: 0, transform: 'translateY(.32em)', filter: 'blur(4px)' }, { opacity: 1, transform: 'none', filter: 'none' }],
          { duration: 560, delay: 140 + entering * 34, easing: ease, fill: 'backwards' });
        entering += 1;
      }
    });
    const used = new Set(pairs.values());
    old.forEach((word, i) => {
      if (used.has(i)) return;
      const ghost = document.createElement('span');
      ghost.className = `xs-word xs-ghost ${word.kind}`.trim();
      ghost.setAttribute('aria-hidden', 'true');
      ghost.textContent = word.text;
      Object.assign(ghost.style, { left: `${word.rect.left - box.left}px`, top: `${word.rect.top - box.top}px` });
      sentence.append(ghost);
      ghost.animate([{ opacity: 1, transform: 'none', filter: 'none' }, { opacity: 0, transform: 'translateY(-.26em)', filter: 'blur(4px)' }],
        { duration: 300, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' }).finished.then(() => ghost.remove());
    });
  }

  function go(next, { animate = !reduce, p = AT[next] } = {}) {
    rule.style.setProperty('--p', p);
    if (next === step) return;
    step = next;
    write(next, animate);
    const data = STEPS[next];
    fill(data);
    stops.forEach((stop, i) => { stop.classList.toggle('is-on', i === next); stop.classList.toggle('is-past', i <= next); });
    spans.dataset.on = data.fact;
    for (const fact of facts) fact.classList.toggle('is-on', fact.dataset.fact === data.fact);
    count.textContent = String(next + 1).padStart(2, '0');
    rule.setAttribute('aria-valuenow', next);
    rule.setAttribute('aria-valuetext', data.when);
  }

  const nearest = (p) => AT.reduce((best, at, i) => (Math.abs(at - p) < Math.abs(AT[best] - p) ? i : best), 0);

  function take() {
    if (touched) return;
    touched = true;
    clearTimeout(autoplay);
    sentence.setAttribute('aria-live', 'polite');
  }

  stops.forEach((stop, i) => { stop.style.setProperty('--at', AT[i]); stop.classList.add('is-past'); });
  section.querySelector('[data-day]').textContent = dayAt;
  stops[last].classList.add('is-on');
  sentence.setAttribute('aria-live', 'off');

  const at = (event) => {
    const rect = track.getBoundingClientRect();
    return Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  };
  rule.addEventListener('pointerdown', (event) => {
    take();
    rule.setPointerCapture(event.pointerId);
    rule.classList.add('is-dragging');
    const p = at(event);
    go(nearest(p), { p });
  });
  rule.addEventListener('pointermove', (event) => {
    if (!rule.classList.contains('is-dragging')) return;
    const p = at(event);
    go(nearest(p), { p });
  });
  const release = () => {
    if (!rule.classList.contains('is-dragging')) return;
    rule.classList.remove('is-dragging');
    rule.style.setProperty('--p', AT[step]);
  };
  rule.addEventListener('pointerup', release);
  rule.addEventListener('pointercancel', release);
  rule.addEventListener('keydown', (event) => {
    const moves = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1 };
    let next = step;
    if (event.key in moves) next = step + moves[event.key];
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = last;
    else return;
    event.preventDefault();
    take();
    go(Math.min(last, Math.max(0, next)));
  });

  if (reduce) return;
  // Once, on arrival: start at the beginning and let the sentence walk itself to today. Any touch hands over control.
  go(0, { animate: false });
  const walk = () => {
    if (touched || step >= last) return;
    go(step + 1);
    autoplay = setTimeout(walk, 2300);
  };
  new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    autoplay = setTimeout(walk, 1400);
  }, { threshold: .55 }).observe(section);
})();

// Selected work, concept 2: the wire under the strip fills to the frame in view; arrows and the project stops
// move the strip one frame at a time.
(() => {
  const section = document.querySelector('.wf');
  if (!section) return;
  const track = section.querySelector('.wf-track');
  const frames = [...track.children];
  const stops = [...section.querySelectorAll('.wf-stops button')];
  const prev = section.querySelector('.wf-prev'), next = section.querySelector('.wf-next');
  const rail = section.querySelector('.wf-rail');
  const smooth = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  let index = 0;

  const go = (i) => {
    i = Math.max(0, Math.min(frames.length - 1, i));
    track.scrollTo({ left: frames[i].offsetLeft - track.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft), behavior: smooth });
  };
  function sync() {
    const max = track.scrollWidth - track.clientWidth;
    const p = max > 0 ? track.scrollLeft / max : 0;
    rail.style.setProperty('--p', p.toFixed(4));
    // The current frame is the one whose left edge is nearest the strip's start (the last one once scrolled to the end).
    const start = track.getBoundingClientRect().left + parseFloat(getComputedStyle(track).paddingLeft);
    index = p > .995 ? frames.length - 1 : frames.reduce((best, f, i) => Math.abs(f.getBoundingClientRect().left - start) < Math.abs(frames[best].getBoundingClientRect().left - start) ? i : best, 0);
    stops.forEach((s, i) => { s.classList.toggle('is-on', i === index); s.classList.toggle('is-past', i < index); });
    prev.disabled = track.scrollLeft < 4;
    next.disabled = track.scrollLeft > max - 4;
  }
  // Every picture gets the same height (the strip's height less the caption under it) and its own width from its
  // shape, so each one is shown whole.
  const dek = () => {
    const mobile = matchMedia('(max-width: 1000px)').matches;
    const caption = 92;
    const ph = mobile ? null : Math.max(160, track.clientHeight - caption);
    frames.forEach((f) => {
      const ar = parseFloat(getComputedStyle(f).getPropertyValue('--ar')) || 1.6;
      const w = mobile ? Math.min(innerWidth * .84, 520) : Math.min(ph * ar, track.clientWidth * .78);
      f.style.setProperty('--fw', `${w}px`);
      f.style.setProperty('--ph', `${w / ar}px`);
    });
  };

  prev.addEventListener('click', () => go(index - 1));
  next.addEventListener('click', () => go(index + 1));
  stops.forEach((s, i) => s.addEventListener('click', () => go(i)));
  track.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  });
  new ResizeObserver(() => { dek(); sync(); }).observe(track);
  dek(); sync();
})();
