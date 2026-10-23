(() => {
  'use strict';
  const menu = document.getElementById('site-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = [...document.querySelectorAll('[data-menu-close]')];
  let menuReturnFocus = null;
  let menuCloseTimer = 0;
  const menuFocusable = () => menu ? [...menu.querySelectorAll('a[href],button:not([disabled])')].filter(element => !element.closest('[hidden]')) : [];
  function setMenu(open) {
    if (!menu || !menuToggle) return;
    window.clearTimeout(menuCloseTimer);
    if (open) {
      menuReturnFocus = document.activeElement;
      menu.hidden = false;
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Close portfolio menu');
      document.documentElement.classList.add('menu-open');
      document.body.classList.add('menu-open');
      requestAnimationFrame(() => menu.classList.add('is-open'));
      requestAnimationFrame(() => menuFocusable()[0]?.focus());
      return;
    }
    menu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open portfolio menu');
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    menuCloseTimer = window.setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 260);
    menuReturnFocus?.focus?.();
    menuReturnFocus = null;
  }
  menuToggle?.addEventListener('click', () => setMenu(menu.hidden));
  menuClose.forEach(element => element.addEventListener('click', () => setMenu(false)));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  if (menu && !document.getElementById('about')) {
    menu.querySelectorAll('a[href^="#"]').forEach(link => {
      const target = link.getAttribute('href').slice(1);
      if (!document.getElementById(target)) link.href = 'portfolio-site.html#' + target;
    });
  }
  menu?.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); setMenu(false); return; }
    if (event.key !== 'Tab') return;
    const focusable = menuFocusable();
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu && !menu.hidden) setMenu(false);
  });
  const root = document.querySelector('.connection-footer');
  if (!root) return;
  const masthead = document.querySelector('.footer-identity');
  if (masthead) {
    const syncFooterViewportHeight = () => {
      const mastheadHeight = `${masthead.getBoundingClientRect().height}px`;
      root.style.setProperty('--footer-viewport-offset', mastheadHeight);
      document.documentElement.style.setProperty('--masthead-height', mastheadHeight);
    };
    syncFooterViewportHeight();
    if ('ResizeObserver' in window) {
      const mastheadResizeObserver = new ResizeObserver(syncFooterViewportHeight);
      mastheadResizeObserver.observe(masthead);
    } else {
      window.addEventListener('resize', syncFooterViewportHeight, {passive:true});
    }
  }
  const $ = selector => root.querySelector(selector);
  const buttons = [...root.querySelectorAll('[data-key]')];
  const wires = [...root.querySelectorAll('[data-wire]')];
  const sockets = [...root.querySelectorAll('[data-socket]')];
  const packets = [...root.querySelectorAll('[data-packet]')];
  const packetGroups = new Map(buttons.map(button => [button.dataset.key, packets.filter(packet => packet.dataset.packet === button.dataset.key)]));
  const routeGeometry = [];
  let motionFrame = 0;
  const email = 'work.harsh.bhogayata@gmail.com';
  const projects = {
    curator:{name:'Curator',description:'A reading app with source context and a library of saved stories.',label:'Explore Curator',url:'https://thecuratorgroup.org/',accent:'#3158ff',signal:'read with more care'},
    talent:{name:'Morrow',description:'A film and series app for one family’s evenings, with every copy behind one Play button.',label:'Read the Morrow case study',url:'work/morrow.html',accent:'#7358d7',signal:'press play, nothing else'},
    kalakari:{name:'Bokuka',description:'A living ink painting, drawn stroke by stroke in the browser and scored live with Web Audio.',label:'Read the Bokuka case study',url:'work/bokuka.html',accent:'#bd6845',signal:'let the ink find its line'},
    flood:{name:'Flood Archive',description:'Historical flood reports from Vadodara, organized by location on a map.',label:'Explore the Flood Archive',url:'https://vadodara-flood-archive-relief.vercel.app',accent:'#167f8b',signal:'remember where water went'},
    portfolio:{name:'Portfolio Evolution',description:'Three versions of the same practice: from a security portfolio, to shipped products, to a system for showing the work.',label:'See how it evolved',url:'#portfolio',accent:'#a87827',signal:'follow the work taking shape'}
  };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 600px)');
  const clock = document.getElementById('clock');
  let selected = 'curator', visible = false;
  const arrivals = new Map();
  function positionArrival(key = selected) {
    const arrival = arrivals.get(key);
    if (arrival !== undefined) $('.contact').style.setProperty('--arrival', arrival + 'px');
  }
  function setSignal(key) {
    const project = projects[key];
    if (!project) return;
    const index = buttons.findIndex(button => button.dataset.key === key) + 1;
    $('#closure-index').textContent = String(index).padStart(2, '0') + ' / ' + String(buttons.length).padStart(2, '0');
    $('#closure-copy').textContent = project.signal;
    root.style.setProperty('--active-accent', project.accent);
  }
  function applyProjectAccents() {
    for (const element of [...buttons, ...wires, ...sockets, ...packets]) {
      const key = element.dataset.key || element.dataset.wire || element.dataset.socket || element.dataset.packet;
      const project = projects[key];
      if (project) element.style.setProperty('--project-accent', project.accent);
    }
  }
  applyProjectAccents();
  let revealAnimations = [];
  function motionState() {
    root.dataset.motion = reduced.matches ? 'off' : 'on';
    root.dataset.flow = visible && !document.hidden && !reduced.matches ? 'running' : 'paused';
    root.dataset.visible = visible ? 'true' : 'false';
    const svg = $('.wiring');
    if (root.dataset.flow === 'running') svg.unpauseAnimations?.();
    else svg.pauseAnimations?.();
    syncCurveMotion();
  }
  function preview(key) {
    if (key) root.dataset.hover = key;
    else delete root.dataset.hover;
    for (const path of [...wires, ...sockets, ...packets]) {
      const ownKey = path.dataset.wire || path.dataset.socket || path.dataset.packet;
      path.classList.toggle('preview', ownKey === key);
    }
    setSignal(key || selected);
    positionArrival(key || selected);
  }
  function select(key, animate = true) {
    const project = projects[key];
    if (!project) return;
    const changed = selected !== key;
    selected = key;
    setSignal(key);
    root.style.setProperty('--selected-accent', project.accent);
    positionArrival();
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.key === key)));
    for (const path of [...wires, ...sockets, ...packets]) {
      path.classList.toggle('active', (path.dataset.wire || path.dataset.socket || path.dataset.packet) === key);
    }
    $('#detail-name').textContent = project.name;
    $('#detail-title').textContent = project.description;
    $('#detail-label').textContent = project.label;
    $('#detail-link').href = project.url === '#portfolio' && !document.getElementById('portfolio') ? 'portfolio-site.html#portfolio' : project.url;
    const subject = 'About ' + project.name;
    const href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);
    $('#project-email').textContent = 'Ask about ' + project.name;
    $('#project-email').href = href;
    $('.send').href = href;
    $('.send').setAttribute('aria-label', 'Email Harsh about ' + project.name);
    preview(null);
    revealAnimations.forEach(animation => animation.cancel());
    revealAnimations = [];
    if (changed && animate && !reduced.matches && $('#detail-name').animate) {
      for (const [index, selector] of ['#detail-name', '#detail-title', '#detail-link'].entries()) {
        revealAnimations.push($(selector).animate([{opacity:0,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,delay:index*28,fill:'backwards',easing:'cubic-bezier(.16,1,.3,1)'}));
      }
    }
  }
  buttons.forEach((button, index) => {
    const project = projects[button.dataset.key];
    button.addEventListener('click', () => select(button.dataset.key));
    button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') preview(button.dataset.key); });
    button.addEventListener('pointerleave', () => preview(null));
    button.addEventListener('focus', () => preview(button.dataset.key));
    button.addEventListener('blur', () => preview(null));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + buttons.length - 1) % buttons.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = buttons.length - 1;
      if (next !== undefined) { event.preventDefault(); buttons[next].focus(); select(buttons[next].dataset.key); }
    });
  });
  // Every connection keeps its own lane: a vertical drop, a rounded elbow,
  // a short horizontal run, then a second rounded elbow into the panel.
  function routeCurve({x, y, end, height, index, gap: laneGap}, drift = 0) {
    if (index === 4) return `M${x} ${y} V${height}`;
    // Match vertical lane spacing to the horizontal terminal spacing.
    // On a short viewport, compress only as much as needed to keep all five lanes inside the field.
    const gap = Math.min(laneGap || 12, Math.max(8, (height - 28) / 4));
    const firstRail = Math.min(height * .4, height - gap * 4 - 8);
    const railY = firstRail + index * gap;
    const direction = 1;
    const radius = Math.max(5, Math.min(10, gap * .8, (railY - y) * .35, (height - railY) * .35, (end - x) * .25));
    const rail = railY;
    const start = x + direction * radius;
    const finish = end - direction * radius;
    return `M${x} ${y} V${rail-radius} Q${x} ${rail} ${start} ${rail} H${finish} Q${end} ${rail} ${end} ${rail+radius} V${height}`;
  }
  function drawCurves(drift) {
    routeGeometry.forEach(route => {
      const d = routeCurve(route, drift);
      route.wire.setAttribute('d', d);
    });
  }
  function syncCurveMotion() {
    cancelAnimationFrame(motionFrame);
    motionFrame = 0;
    if (routeGeometry.length) drawCurves(0);
  }
  // Measure on layout changes only; animation never reads layout or path lengths.
  function layoutRoutes() {
    const network = $('.network'), box = network.getBoundingClientRect();
    if (!box.width || !box.height) return;
    const drawing = $('.wiring').getBoundingClientRect();
    const height = mobile.matches ? box.height : drawing.height;
    if (!height) return;
    routeGeometry.length = 0;
    const contactBox = $('.contact').getBoundingClientRect();
    const lastButtonBox = buttons[buttons.length - 1].getBoundingClientRect();
    const lastX = lastButtonBox.left - box.left + lastButtonBox.width / 2;
    const terminalGap = Math.min(18, Math.max(12, box.width * .012));
    $('.wiring').setAttribute('viewBox', `0 0 ${box.width} ${height}`);
    wires.forEach((wire, index) => {
      const key = wire.dataset.wire;
      const buttonBox = buttons[index].getBoundingClientRect();
      let d, x = buttonBox.left - box.left + buttonBox.width / 2, y = 6;
      if (mobile.matches) {
        x = 7; y = buttonBox.top - box.top + buttonBox.height / 2;
        const bottom = box.height - 23, end = box.width * .8;
        d = `M${x} ${y} V${bottom - 17} Q${x} ${bottom} ${x + 17} ${bottom} H${end - 17} Q${end} ${bottom} ${end} ${bottom + 17} V${box.height}`;
      } else {
        // Keep every route moving in the same direction, like a compact
        // harness, before the final grouped drop into the email panel.
        // Finish as a compact, evenly spaced fan just beyond the last socket.
        // This keeps the terminal drops legible instead of stretching to the edge.
        const end = Math.min(box.width - 4, lastX + (buttons.length - 1 - index) * terminalGap);
        const route = {x, y, end, height, index, gap:terminalGap, wire};
        routeGeometry.push(route);
        d = routeCurve(route);
        arrivals.set(key, box.left + (index === 4 ? x : end) - contactBox.left);
      }
      wire.setAttribute('d', d);
      sockets[index].setAttribute('cx', x); sockets[index].setAttribute('cy', y);
      const length = wire.getTotalLength();
      const duration = Math.max(3.5, Math.min(10, length / 145));
      packetGroups.get(key).forEach(packet => {
        const motion = packet.querySelector('animateMotion');
        if (motion) motion.setAttribute('dur', duration + 's');
      });
    });
    positionArrival();
    syncCurveMotion();
  }
  let layoutFrame;
  function scheduleLayout(){ cancelAnimationFrame(layoutFrame); layoutFrame = requestAnimationFrame(layoutRoutes); }
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(scheduleLayout);
    observer.observe($('.network'));
    observer.observe($('.contact'));
  }
  else window.addEventListener('resize', scheduleLayout);
  mobile.addEventListener('change', scheduleLayout);
  document.fonts?.ready.then(scheduleLayout);
  scheduleLayout();
  reduced.addEventListener('change', () => { motionState(); if(reduced.matches) revealAnimations.forEach(animation => animation.cancel()); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; motionState(); },{rootMargin:'80px'}).observe(root);
  } else visible = true;
  motionState(); select(selected, false);
  $('#note-toggle').addEventListener('click', () => {
    const open = $('#footnote').hidden;
    $('#footnote').hidden = !open;
    $('#note-toggle').setAttribute('aria-expanded', String(open));
  });
  const formatter = new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false});
  function tick(){ const now = new Date(); if (clock) clock.textContent = formatter.format(now)+' IST'; const year = $('#year'); if (year) year.textContent = now.getFullYear(); }
  tick(); let clockTimer = setInterval(tick,30000);
  document.addEventListener('visibilitychange',()=>{motionState();clearInterval(clockTimer);if(!document.hidden){tick();clockTimer=setInterval(tick,30000);}});
  const result = $('#toast'), copy = $('#copy');
  let reset, copying = false;
  copy.addEventListener('click', async () => {
    if (copying) return;
    copying = true; clearTimeout(reset);
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      copy.textContent = 'Copied'; result.textContent = 'Email address copied.';
    } catch {
      // Select one uninterrupted address; visual line wrapping must not add whitespace.
      const range = document.createRange(); range.selectNodeContents($('.email-link'));
      const selection = window.getSelection();
      if (selection) { selection.removeAllRanges(); selection.addRange(range); }
      result.textContent = 'Copy this address: ' + email;
    } finally {
      copying = false; result.classList.add('show');
      reset = setTimeout(()=>{copy.textContent='Copy email';result.classList.remove('show');result.textContent='';},4500);
    }
  });
})();
