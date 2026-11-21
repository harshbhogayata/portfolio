// Shared pieces: theme, navigation, clock, arrivals, copy, video, dialogs.
// `S` is the one object the files of this script share (see build.mjs).
const root = document.documentElement;
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
Object.assign(S, { $, $$, root, reduced, clamp: (n, a, b) => Math.min(b, Math.max(a, n)) });

// Toast -----------------------------------------------------------------------------------------------------------
const toast = $('[data-toast]');
let toastTimer;
S.toast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('on'), 2200);
};

// Theme -----------------------------------------------------------------------------------------------------------
const themeMeta = $('meta[name="theme-color"]');
const paintMeta = () => themeMeta?.setAttribute('content', getComputedStyle(root).getPropertyValue('--paper').trim());
function setTheme(theme) {
  root.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch { /* private mode: the choice lasts for this page */ }
  paintMeta();
  for (const button of $$('[data-theme-toggle]')) button.setAttribute('aria-label', `Switch to the ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
}
S.toggleTheme = (origin) => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  if (!document.startViewTransition || reduced.matches) return setTheme(next);
  // Draw the new theme outward from wherever the switch was pressed.
  const box = origin?.getBoundingClientRect();
  const x = box ? box.left + box.width / 2 : innerWidth / 2;
  const y = box ? box.top + box.height / 2 : 0;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  root.classList.add('theme-wipe');
  const transition = document.startViewTransition(() => setTheme(next));
  transition.ready.then(() => root.animate(
    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
    { duration: 700, easing: 'cubic-bezier(.3,.7,.1,1)', pseudoElement: '::view-transition-new(root)' },
  )).catch(() => {});
  transition.finished.finally(() => root.classList.remove('theme-wipe'));
};
for (const button of $$('[data-theme-toggle]')) button.addEventListener('click', () => S.toggleTheme(button));
paintMeta();
// Follow the system until a choice has been made here.
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  let saved; try { saved = localStorage.getItem('theme'); } catch { /* ignore */ }
  if (!saved) { root.dataset.theme = event.matches ? 'dark' : 'light'; paintMeta(); document.dispatchEvent(new CustomEvent('themechange')); }
});

// Navigation ------------------------------------------------------------------------------------------------------
const nav = $('[data-nav]');
if (nav) {
  let last = scrollY;
  addEventListener('scroll', () => {
    const y = scrollY;
    if (Math.abs(y - last) < 8) return;
    const away = y > last && y > 320 && !nav.contains(document.activeElement);
    nav.toggleAttribute('data-away', away);
    last = y;
  }, { passive: true });

  // Mark the section being read.
  const links = new Map($$('[data-nav-link]', nav).map((a) => [a.dataset.navLink, a]));
  const sections = [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  if (sections.length > 1) {
    const seen = new Set();
    const mark = () => {
      const current = sections.filter((s) => seen.has(s)).pop();
      for (const [id, a] of links) a.toggleAttribute('aria-current', false), current?.id === id && a.setAttribute('aria-current', 'true');
    };
    const watch = new IntersectionObserver((entries) => {
      for (const e of entries) e.isIntersecting ? seen.add(e.target) : seen.delete(e.target);
      mark();
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => watch.observe(s));
  }
}

// Shortcut hint: ⌘K on Apple keyboards, Ctrl K elsewhere.
const apple = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
for (const kbd of $$('[data-kbd]')) kbd.textContent = apple ? '⌘K' : 'Ctrl K';

// The time in Vadodara -------------------------------------------------------------------------------------------
const clocks = $$('[data-clock]');
if (clocks.length) {
  const format = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
  const tick = () => { const now = format.format(new Date()); for (const c of clocks) c.textContent = `${now} IST`; };
  tick();
  setInterval(tick, 15000);
}
for (const year of $$('[data-year]')) year.textContent = new Date().getFullYear();

// The name at the foot of the page is set to the width of the page, whatever that is.
for (const line of $$('[data-fit]')) {
  const holder = line.parentElement;
  const fit = () => {
    holder.style.removeProperty('--fit');
    const size = parseFloat(getComputedStyle(holder).fontSize);
    const gutter = parseFloat(getComputedStyle($('.wrap')).paddingLeft) || 0;
    if (line.offsetWidth) holder.style.setProperty('--fit', `${(size * (holder.clientWidth - gutter * 2) / line.offsetWidth).toFixed(2)}px`);
  };
  document.fonts.ready.then(fit);
  addEventListener('resize', fit);
}

// Arrivals --------------------------------------------------------------------------------------------------------
const arriving = $$('[data-r]');
if (reduced.matches || !('IntersectionObserver' in window)) {
  arriving.forEach((el) => el.classList.add('in'));
} else {
  const arrive = new IntersectionObserver((entries) => {
    let step = 0;
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.style.setProperty('--d', step++);
      entry.target.classList.add('in');
      arrive.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -7% 0px', threshold: 0.08 });
  arriving.forEach((el) => arrive.observe(el));
}

// Copy ------------------------------------------------------------------------------------------------------------
S.copy = async (text, done = 'Email address copied') => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const field = Object.assign(document.createElement('textarea'), { value: text });
    field.style.cssText = 'position:fixed;opacity:0';
    document.body.append(field); field.select();
    try { document.execCommand('copy'); } finally { field.remove(); }
  }
  S.toast(done);
};
for (const button of $$('[data-copy]')) {
  button.addEventListener('click', async () => {
    await S.copy(button.dataset.copy);
    const label = $('[data-copy-label]', button);
    if (!label) return;
    const was = label.textContent;
    label.textContent = 'Copied';
    setTimeout(() => { label.textContent = was; }, 1800);
  });
}

// Video plays only while it is on screen, and not at all if motion is unwelcome or data is being saved. ---------------
const films = $$('video[data-autoplay]');
const saving = navigator.connection?.saveData;
S.autoplay = 'IntersectionObserver' in window && !reduced.matches && !saving;
if (films.length && S.autoplay) {
  const screen = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      if (isIntersecting) target.play().catch(() => {}); else target.pause();
    }
  }, { threshold: 0.3 });
  // The films ship with controls, for when nothing else can start them. Here they start themselves.
  films.forEach((film) => { film.controls = false; screen.observe(film); });
}
// A film's still frame is fetched when the film is nearly on screen, not with the page.
const stills = $$('video[data-poster]');
const still = (film) => { film.poster = film.dataset.poster; film.removeAttribute('data-poster'); };
if ('IntersectionObserver' in window) {
  const near = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) if (isIntersecting) { still(target); near.unobserve(target); }
  }, { rootMargin: '900px 0px' });
  stills.forEach((film) => near.observe(film));
} else {
  stills.forEach(still);
}

// The live Curator app, loaded only when asked for. -----------------------------------------------------------------
const demo = $('[data-demo-dialog]');
if (demo) {
  const frame = $('[data-demo-frame]', demo);
  for (const button of $$('[data-demo]')) {
    button.addEventListener('click', () => {
      if (!frame.src) frame.src = button.dataset.demo;
      demo.showModal();
    });
  }
  $('[data-demo-close]', demo).addEventListener('click', () => demo.close());
  demo.addEventListener('click', (event) => { if (event.target === demo) demo.close(); });
}
