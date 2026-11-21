// Search and commands. Ctrl or ⌘ with K, or the slash key, from anywhere.
const { $, $$ } = S;

const dialog = $('[data-palette]');
if (dialog && dialog.showModal) {
  const input = $('[data-palette-input]', dialog), list = $('[data-palette-list]', dialog);
  const items = JSON.parse($('[data-palette-data]', dialog).textContent);
  let shown = [], at = 0;

  const score = (item, words) => {
    const hay = `${item.label} ${item.hint} ${item.keys} ${item.group}`.toLowerCase();
    let total = 0;
    for (const word of words) {
      const i = hay.indexOf(word);
      if (i < 0) return -1;
      total += item.label.toLowerCase().startsWith(word) ? 3 : i < item.label.length ? 2 : 1;
    }
    return total;
  };

  const render = () => {
    const words = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    shown = words.length
      ? items.map((item) => [score(item, words), item]).filter(([s]) => s >= 0).sort((a, b) => b[0] - a[0]).map(([, item]) => item)
      : items;
    at = Math.min(at, Math.max(0, shown.length - 1));
    if (!shown.length) { list.innerHTML = '<li class="palette-empty" role="presentation">Nothing by that name. Try a project, a tool or “email”.</li>'; return; }
    let group = '';
    list.innerHTML = shown.map((item, i) => {
      const head = !words.length && item.group !== group ? `<li class="palette-group" role="presentation">${(group = item.group)}</li>` : '';
      return `${head}<li class="palette-item" role="option" id="palette-${i}" data-i="${i}" aria-selected="${i === at}"><span>${item.label}</span><span>${item.hint}</span></li>`;
    }).join('');
    input.setAttribute('aria-activedescendant', `palette-${at}`);
  };
  const move = (to) => {
    if (!shown.length) return;
    at = (to + shown.length) % shown.length;
    for (const el of $$('.palette-item', list)) el.setAttribute('aria-selected', String(Number(el.dataset.i) === at));
    input.setAttribute('aria-activedescendant', `palette-${at}`);
    $(`#palette-${at}`, list)?.scrollIntoView({ block: 'nearest' });
  };
  const run = (item) => {
    if (!item) return;
    dialog.close();
    if (item.action === 'copy') return S.copy(item.value);
    if (item.action === 'theme') return S.toggleTheme();
    if (item.external) return window.open(item.href, '_blank', 'noopener');
    location.href = item.href;
  };
  const open = () => { if (dialog.open) return; input.value = ''; at = 0; render(); dialog.showModal(); input.focus(); };

  for (const button of $$('[data-palette-open]')) button.addEventListener('click', open);
  addEventListener('keydown', (event) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
    if ((event.key === 'k' || event.key === 'K') && (event.metaKey || event.ctrlKey)) { event.preventDefault(); dialog.open ? dialog.close() : open(); }
    else if (event.key === '/' && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) { event.preventDefault(); open(); }
  });
  input.addEventListener('input', () => { at = 0; render(); });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') { event.preventDefault(); move(at + 1); }
    else if (event.key === 'ArrowUp') { event.preventDefault(); move(at - 1); }
    else if (event.key === 'Enter') { event.preventDefault(); run(shown[at]); }
  });
  list.addEventListener('click', (event) => { const el = event.target.closest('.palette-item'); if (el) run(shown[Number(el.dataset.i)]); });
  list.addEventListener('pointermove', (event) => { const el = event.target.closest('.palette-item'); if (el && Number(el.dataset.i) !== at) move(Number(el.dataset.i)); });
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
}
