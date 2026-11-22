// The mason's kit: what a real building is made of. Walls with openings cut through them, arches of several kinds, columns, mouldings
// carried round a plan, eaves on brackets, balustrades, screens; and stone, brick and tile drawn in code and laid in metres,
// so that courses run true round every corner. Nothing here is a photograph: every face of a building is modelled.
import * as THREE from 'three';
import { painted, unmirrored, plain, slab, drum, dome, rng } from './kit.js';

const V2 = (x, y) => new THREE.Vector2(x, y), UP = new THREE.Vector3(0, 1, 0);
const canvas = (w, h = w) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; };
const tex = (c, repeat = true) => { const t = new THREE.CanvasTexture(c); if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; };
const rgb = (c, k = 1) => 'rgb(' + c.map(v => Math.max(0, Math.min(255, v * k)) | 0).join(',') + ')';
const kept = new Map();
// how much of the light reaches a surface: the back of a window's reveal gets less than the face of the wall
export const shadeBy = (g, v) => { g.setAttribute('ao', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count).fill(v), 1)); return g; };

// Trim too small to show in the lake: balusters, brackets, glazing bars. Drawn once, not twice.
export const fine = tint => unmirrored(painted({ tint, key: 'fine' + tint }));

/* ---------- surfaces ---------- */
// Coursed stone or brick. One picture holds rows courses of cols blocks; the material remembers how many metres that is.
// bands: a colour for each course that is not the wall's own, as in the striped brick of Nyay Mandir.
export function masonry(key, { stone = [214, 192, 154], course = 0.42, block = 0.96, rows = 8, cols = 4, joint = 0.7, vary = 0.1, bands = null, grime = 0.2 } = {}) {
  const id = 'masonry-' + key; if (kept.has(id)) return kept.get(id);
  const S = 512, [c, g] = canvas(S), q = rng(key.length * 97 + stone[0] * 3 + rows), ch = S / rows, cw = S / cols, j = Math.max(1, Math.round(ch * 0.055));
  for (let r = 0; r < rows; r++) { const tone = (bands && bands[r]) || stone, off = (r % 2) * cw / 2;
    for (let i = 0; i < cols; i++) { const k = 1 - vary / 2 + q() * vary; g.fillStyle = rgb(tone, k); for (const x of [i * cw + off, i * cw + off - S]) g.fillRect(x, r * ch, cw + 1, ch + 1); } }
  for (let i = 0; i < 5200; i++) { g.fillStyle = q() < 0.5 ? 'rgba(0,0,0,.045)' : 'rgba(255,250,235,.05)'; g.fillRect(q() * S, q() * S, 1 + q() * 4, 1 + q() * 2); }          // the grain of the stone
  for (let i = 0; i < 24; i++) { const x = q() * (S - 20), w = 3 + q() * 14, k = g.createLinearGradient(x, 0, x + w, 0), a = (grime * (0.2 + q() * 0.5)).toFixed(3);       // where rain has run down it
    k.addColorStop(0, 'rgba(40,30,20,0)'); k.addColorStop(0.5, 'rgba(40,30,20,' + a + ')'); k.addColorStop(1, 'rgba(40,30,20,0)'); g.fillStyle = k; g.fillRect(x, 0, w, S); }
  for (let r = 0; r < rows; r++) { const off = (r % 2) * cw / 2, tone = (bands && bands[r]) || stone; g.fillStyle = rgb(tone, joint); g.fillRect(0, r * ch, S, j);
    if (joint < 1) { g.fillStyle = 'rgba(255,255,255,.1)'; g.fillRect(0, r * ch + j, S, 1); }
    g.fillStyle = rgb(tone, (1 + joint) / 2); for (let i = 0; i < cols; i++) g.fillRect((i * cw + off) % S, r * ch + j, Math.max(1, j - 1), ch - j); }   // the upright joints are closer and show less
  const m = painted({ map: tex(c), key: id }); m.userData.tile = { u: cols * block, v: rows * course }; kept.set(id, m); return m;
}
// Clay tiles on a roof: rows of half-round tiles, each row lapping the one below.
export function rooftiles(key, clay = [156, 84, 60]) {
  const id = 'tiles-' + key; if (kept.has(id)) return kept.get(id);
  const S = 256, [c, g] = canvas(S), q = rng(key.length * 53 + clay[0]), rows = 8, cols = 12, ch = S / rows, cw = S / cols;
  for (let r = 0; r < rows; r++) for (let i = 0; i < cols; i++) { const x = i * cw, y = r * ch, k = g.createLinearGradient(x, 0, x + cw, 0), t = 0.86 + q() * 0.28;
    k.addColorStop(0, rgb(clay, 0.55 * t)); k.addColorStop(0.5, rgb(clay, 1.12 * t)); k.addColorStop(1, rgb(clay, 0.55 * t)); g.fillStyle = k; g.fillRect(x, y, cw + 1, ch);
    g.fillStyle = 'rgba(0,0,0,.42)'; g.fillRect(x, y, cw + 1, 3); g.fillStyle = 'rgba(255,230,200,.16)'; g.fillRect(x, y + 3, cw + 1, 2); }
  const m = painted({ map: tex(c), key: id }); m.userData.tile = { u: cols * 0.34, v: rows * 0.46 }; kept.set(id, m); return m;
}
// Glass, by night. Eight panes in one picture: four dark, four lit from within, with their glazing bars. Each window takes one.
export function glazing() {
  if (kept.has('glazing')) return kept.get('glazing');
  const CW = 96, CH = 144, [a, g] = canvas(CW * 4, CH * 2), [b, e] = canvas(CW * 4, CH * 2);
  e.fillStyle = '#000'; e.fillRect(0, 0, b.width, b.height);
  for (let row = 0; row < 2; row++) for (let i = 0; i < 4; i++) {
    const x = i * CW, y = row * CH, sky = g.createLinearGradient(0, y, 0, y + CH); sky.addColorStop(0, '#39445f'); sky.addColorStop(1, '#161c2c'); g.fillStyle = sky; g.fillRect(x, y, CW, CH);
    if (row) { const warm = [['#ffd68a', '#a8641f'], ['#ffc46a', '#8a4a16'], ['#ffe4b0', '#b07a34'], ['#f6b25a', '#6a3610']][i], k = e.createLinearGradient(0, y, 0, y + CH);
      k.addColorStop(0, warm[0]); k.addColorStop(1, warm[1]); e.fillStyle = k; e.fillRect(x, y, CW, CH); e.fillStyle = 'rgba(0,0,0,.4)'; if (i % 2) e.fillRect(x, y, CW * 0.24, CH); else e.fillRect(x, y + CH * 0.72, CW, CH * 0.28);   // a curtain, or the room's dado
      g.fillStyle = '#3a2c1c'; g.fillRect(x, y, CW, CH); }
    else if (i === 3) { g.fillStyle = '#4a3a2a'; g.fillRect(x, y, CW, CH); g.fillStyle = '#2c2218'; for (let k = 6; k < CH; k += 7) g.fillRect(x + 6, y + k, CW - 12, 3); }       // shutters closed
    const [nx, ny] = [[2, 3], [3, 4], [2, 4], [2, 2]][i];
    for (const [k, col] of [[g, '#6a5238'], [e, '#000']]) { k.fillStyle = col; k.fillRect(x, y, CW, 5); k.fillRect(x, y + CH - 5, CW, 5); k.fillRect(x, y, 5, CH); k.fillRect(x + CW - 5, y, 5, CH);
      for (let n = 1; n < nx; n++) k.fillRect(x + n * CW / nx - 2, y, 4, CH); for (let n = 1; n < ny; n++) k.fillRect(x, y + n * CH / ny - 1.5, CW, 3); }
  }
  const m = painted({ map: tex(a, false), emissiveMap: tex(b, false), glow: 1.25, key: 'glazing' }); kept.set('glazing', m); return m;
}
// A door of two leaves in panelled teak, studded with brass.
export function timber(key = 'door', wood = [128, 72, 40]) {
  const id = 'timber-' + key; if (kept.has(id)) return kept.get(id);
  const [c, g] = canvas(128, 256), q = rng(key.length * 7 + wood[0]); g.fillStyle = rgb(wood, 0.8); g.fillRect(0, 0, 128, 256);
  for (let i = 0; i < 260; i++) { g.fillStyle = rgb(wood, 0.66 + q() * 0.4); g.fillRect(q() * 128, q() * 256, 1 + q() * 2, 6 + q() * 26); }
  for (let leaf = 0; leaf < 2; leaf++) for (let r = 0; r < 5; r++) for (let k = 0; k < 2; k++) { const x = leaf * 64 + 5 + k * 28, y = 6 + r * 50;
    g.fillStyle = rgb(wood, 0.5); g.fillRect(x, y, 26, 44); g.fillStyle = rgb(wood, 1.12); g.fillRect(x + 2, y + 2, 22, 40); g.fillStyle = rgb(wood, 0.86); g.fillRect(x + 5, y + 5, 16, 34);
    g.fillStyle = '#d8b060'; g.beginPath(); g.arc(x + 13, y + 22, 2.4, 0, 7); g.fill(); }
  g.fillStyle = rgb(wood, 0.36); g.fillRect(62, 0, 4, 256);
  const m = painted({ map: tex(c, false), key: id }); kept.set(id, m); return m;
}
// A pierced screen, jali: a lattice with the dark showing through. One picture is four cells each way.
export function lattice(key, colour = [150, 92, 60], bar = 0.3, diamond = false) {
  const id = 'jali-' + key; if (kept.has(id)) return kept.get(id);
  const S = 128, [c, g] = canvas(S), cell = S / 4, w = cell * bar;
  g.strokeStyle = rgb(colour); g.lineWidth = w; g.lineCap = 'square';
  if (diamond) for (let i = -4; i <= 8; i++) { g.beginPath(); g.moveTo(i * cell, 0); g.lineTo(i * cell + S, S); g.stroke(); g.beginPath(); g.moveTo(i * cell, 0); g.lineTo(i * cell - S, S); g.stroke(); }
  else for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * cell, 0); g.lineTo(i * cell, S); g.stroke(); g.beginPath(); g.moveTo(0, i * cell); g.lineTo(S, i * cell); g.stroke(); }
  g.globalCompositeOperation = 'source-atop'; g.fillStyle = 'rgba(255,255,255,.14)'; for (let i = 0; i <= 4; i++) g.fillRect(0, i * cell - w / 2, S, 1.5);
  const m = painted({ map: tex(c), key: id, cut: true }); kept.set(id, m); return m;
}

// Lay a surface on a solid in metres: along each face and up it, whichever way the face looks. A sloping roof is laid up its slope.
export function clad(g, tile, ox = 0, oy = 0) {
  if (g.index) g = g.toNonIndexed();
  const p = g.attributes.position, uv = new Float32Array(p.count * 2), a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), n = new THREE.Vector3(), t = new THREE.Vector3(), s = new THREE.Vector3();
  for (let i = 0; i < p.count; i += 3) {
    a.fromBufferAttribute(p, i); b.fromBufferAttribute(p, i + 1); c.fromBufferAttribute(p, i + 2); n.subVectors(b, a).cross(s.subVectors(c, a)).normalize();
    if (Math.abs(n.y) > 0.96) { t.set(1, 0, 0); s.set(0, 0, -1); } else { t.crossVectors(UP, n).normalize(); s.crossVectors(n, t); }
    for (const [k, v] of [[i, a], [i + 1, b], [i + 2, c]]) { uv[k * 2] = (v.dot(t) + ox) / tile.u; uv[k * 2 + 1] = (v.dot(s) + oy) / tile.v; }
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); return g;
}
// Keep only the triangles that pass: a wall's back is never seen, nor the underside of what stands on the ground.
function only(g, pass) {
  const p = g.attributes.position, n = g.attributes.normal, u = g.attributes.uv, P = [], N = [], U = [];
  for (let i = 0; i < p.count; i += 3) { if (!pass(i, p, n)) continue; for (let k = i; k < i + 3; k++) { P.push(p.getX(k), p.getY(k), p.getZ(k)); N.push(n.getX(k), n.getY(k), n.getZ(k)); U.push(u.getX(k), u.getY(k)); } }
  const o = new THREE.BufferGeometry(); o.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); o.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); o.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2)); return o;
}

/* ---------- openings ---------- */
// The outline of an opening, anticlockwise from the left foot of its sill: w wide, h high to the crown.
// flat, round, segment (a shallow arc), pointed, cusped (the scalloped arch of Mughal and Maratha building), circle.
export function outline(kind, w, h, { sharp = 0.5, lobes = 7, cusp = 0.09, seg = 12 } = {}) {
  const r = w / 2, P = [], head = [];
  if (kind === 'flat') return [[-r, 0], [r, 0], [r, h], [-r, h]];
  if (kind === 'circle') { for (let i = 0; i < seg * 2; i++) { const a = i / (seg * 2) * Math.PI * 2; P.push([Math.cos(a) * r, r + Math.sin(a) * r]); } return P; }
  if (kind === 'round') for (let i = 0; i <= seg; i++) { const a = i / seg * Math.PI; head.push([Math.cos(a) * r, Math.sin(a) * r]); }
  else if (kind === 'segment') { const s = r * 0.42, R = (r * r + s * s) / (2 * s), a0 = Math.asin(r / R); for (let i = 0; i <= seg; i++) { const a = -a0 + i / seg * 2 * a0; head.push([-Math.sin(a) * R, Math.cos(a) * R - (R - s)]); } }
  else { const c = sharp * r, R = r + c, top = Math.acos(c / R), n = kind === 'cusped' ? lobes * 6 : seg;          // two arcs that meet in a point; the cusps are pulled in from them
    for (let i = 0; i <= n; i++) { const t = i / n, right = t <= 0.5, a = right ? t * 2 * top : Math.PI - (1 - t) * 2 * top, k = kind === 'cusped' ? cusp * w * (1 - Math.abs(Math.sin(Math.PI * lobes * t))) : 0;
      head.push([(right ? -c : c) + Math.cos(a) * (R - k), Math.sin(a) * (R - k)]); } }
  const rise = Math.max(...head.map(p => p[1])), k = rise > h * 0.94 ? h * 0.94 / rise : 1, spring = h - rise * k;
  P.push([-r, 0], [r, 0]); if (kind === 'cusped') P.push([r, spring - 0.001]);
  for (const [x, y] of head) { const l = P[P.length - 1]; if (Math.hypot(l[0] - x, l[1] - spring - y * k) > 1e-4) P.push([x, spring + y * k]); }
  if (kind === 'cusped') P.push([-r, spring - 0.001]);
  return P;
}
// A wall standing on y = 0, its face at z = 0 and its thickness behind, with openings cut through it: each { x, y, w, h, kind }.
// The reveals of the openings are real, and darker toward the back.
export function pierced(w, h, t, holes = [], tile = null, y0 = 0) {
  const s = new THREE.Shape([V2(-w / 2, 0), V2(w / 2, 0), V2(w / 2, h), V2(-w / 2, h)]);
  for (const o of holes) s.holes.push(new THREE.Path(outline(o.kind || 'round', o.w, o.h, o).map(p => V2(o.x + p[0], Math.max(0.02, o.y) + p[1]))));
  const e = new THREE.ExtrudeGeometry(s, { depth: t, bevelEnabled: false, curveSegments: 1 }).translate(0, 0, -t), q = e.index ? e.toNonIndexed() : e;
  const g = only(q, (i, p, n) => n.getZ(i) > -0.9 && !(n.getY(i) < -0.9 && p.getY(i) < 1e-3)), p = g.attributes.position, n = g.attributes.normal, ao = new Float32Array(p.count).fill(1), E = 1e-3;
  for (let i = 0; i < p.count; i += 3) { if (Math.abs(n.getZ(i)) > 0.5) continue; let inside = true;
    for (let k = i; k < i + 3; k++) if (Math.abs(p.getX(k)) > w / 2 - E || p.getY(k) < E || p.getY(k) > h - E) inside = false;
    if (inside) for (let k = i; k < i + 3; k++) ao[k] = p.getZ(k) > -E ? 0.92 : 0.4; }
  g.setAttribute('ao', new THREE.BufferAttribute(ao, 1));
  return tile ? clad(g, tile, 0, y0) : plain(g);
}
// What fills an opening, set back in the wall: glass (a pane from the glazing picture, lit or dark), a door, a screen.
// uv: 'atlas' takes one of the eight panes; 'whole' spreads one picture over it; a number lays a repeating picture that many metres to the repeat.
export function pane(kind, w, h, x, y, z, { uv = 'atlas', on = 0, style = 0, shade = 0.62, ...o } = {}) {
  const g = new THREE.ShapeGeometry(new THREE.Shape(outline(kind, w, h, o).map(p => V2(p[0], p[1])))), U = g.attributes.uv, p = g.attributes.position;
  for (let i = 0; i < U.count; i++) { const u = p.getX(i) / w + 0.5, v = p.getY(i) / h;
    if (uv === 'atlas') U.setXY(i, (style % 4 + 0.03 + 0.94 * u) / 4, (on ? 0 : 0.5) + (0.02 + 0.96 * v) / 2); else if (uv === 'whole') U.setXY(i, u, v); else if (uv === 'plain') U.setXY(i, 0.004, 0.004); else U.setXY(i, p.getX(i) / uv, p.getY(i) / uv); }
  return shadeBy(g, on ? 1 : shade).translate(x, y, z);
}
// The moulding round an opening, standing proud of the wall. outer may be flat: an arch set in a square frame.
export function surround(kind, w, h, x, y, z, { band = 0.22, proud = 0.1, outer = kind, ...o } = {}) {
  const I = outline(kind, w, h, o); let s;
  if (kind === 'circle') { s = new THREE.Shape(outline('circle', w + band * 2, 0, o).map(p => V2(p[0], p[1] - band))); s.holes.push(new THREE.Path(I.map(p => V2(p[0], p[1])))); }
  else { const O = outer === 'flat' ? [[-w / 2 - band, 0], [w / 2 + band, 0], [w / 2 + band, h + band], [-w / 2 - band, h + band]] : outline(outer, w + band * 2, h + band, o);
    s = new THREE.Shape([...O.slice(1), O[0], I[0], ...I.slice(2).reverse(), I[1]].map(p => V2(p[0], p[1]))); }
  const e = new THREE.ExtrudeGeometry(s, { depth: proud, bevelEnabled: false, curveSegments: 1 });
  return plain(only(e.index ? e.toNonIndexed() : e, (i, p, n) => n.getZ(i) > -0.9)).translate(x, y, z);
}

/* ---------- plans, and what is carried round them ---------- */
// A plan is the outline of something on the ground, its corners in order with the outside on the right hand.
export const rect = (w, d, x = 0, z = 0) => [[x - w / 2, z + d / 2], [x + w / 2, z + d / 2], [x + w / 2, z - d / 2], [x - w / 2, z - d / 2]];
export const ngon = (r, n = 8, x = 0, z = 0, phase = 0.5) => Array.from({ length: n }, (_, i) => { const a = (i + phase) / n * Math.PI * 2; return [x + Math.cos(a) * r, z - Math.sin(a) * r]; });
// A moulding, a wall or a roof: the profile, as [out, up] pairs from the bottom, is carried round the plan and mitred at each corner.
// A profile that ends drawn in to a point makes a roof of as many slopes as the plan has sides.
export function band(profile, plan, y = 0, { cap = false, tile = null } = {}) {
  const n = plan.length, N = [], M = [], P = [], out = (i, o) => [plan[i][0] + M[i][0] * o, plan[i][1] + M[i][1] * o];
  for (let i = 0; i < n; i++) { const a = plan[i], b = plan[(i + 1) % n], dx = b[0] - a[0], dz = b[1] - a[1], l = Math.hypot(dx, dz) || 1; N.push([-dz / l, dx / l]); }
  for (let i = 0; i < n; i++) { const p = N[(i + n - 1) % n], q = N[i], k = 1 + p[0] * q[0] + p[1] * q[1]; M.push([(p[0] + q[0]) / k, (p[1] + q[1]) / k]); }
  for (let k = 0; k < profile.length - 1; k++) { const [o0, y0] = profile[k], [o1, y1] = profile[k + 1];
    for (let i = 0; i < n; i++) { const j = (i + 1) % n, A0 = out(i, o0), B0 = out(j, o0), A1 = out(i, o1), B1 = out(j, o1);
      P.push(A0[0], y + y0, A0[1], B0[0], y + y0, B0[1], B1[0], y + y1, B1[1], A0[0], y + y0, A0[1], B1[0], y + y1, B1[1], A1[0], y + y1, A1[1]); } }
  if (cap) { const [o, yy] = profile[profile.length - 1], c = plan.map((_, i) => out(i, o)); for (let i = 1; i < n - 1; i++) P.push(c[0][0], y + yy, c[0][1], c[i][0], y + yy, c[i][1], c[i + 1][0], y + yy, c[i + 1][1]); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.computeVertexNormals(); g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(P.length / 3 * 2).fill(0.004), 2));
  return tile ? clad(g, tile) : g;
}
// An eave, chhajja: a thin slope of stone thrown out from the wall to shade it.
export const eave = (plan, y, out = 1.1, drop = 0.35, thick = 0.12) => band([[0, drop], [out, 0], [out, thick], [0, drop + thick]], plan, y);
// A cornice of three members, each standing out further than the one below.
export const cornice = (plan, y, out = 0.5, h = 0.6) => band([[0, 0], [out * 0.3, 0], [out * 0.3, h * 0.3], [out * 0.65, h * 0.38], [out * 0.65, h * 0.66], [out, h * 0.74], [out, h], [0, h]], plan, y);
// The same small thing set out along a line and facing outward from it: brackets under an eave, dentils, finials along a parapet.
// make(i) builds one at the origin, facing +z.
export function row(a, b, step, make, { inset = 0, ends = true } = {}) {
  const dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz), n = Math.max(1, Math.round((L - inset * 2) / step)), th = Math.atan2(-dz, dx), out = [], m = new THREE.Matrix4();
  for (let i = ends ? 0 : 1; i <= (ends ? n : n - 1); i++) { const t = (inset + i * (L - inset * 2) / n) / L; m.makeRotationY(th).setPosition(a[0] + dx * t, 0, a[1] + dz * t); out.push(...[make(i)].flat(3).map(g => g.applyMatrix4(m))); }
  return out;
}
export const around = (plan, step, make, o) => plan.flatMap((p, i) => row(p, plan[(i + 1) % plan.length], step, make, o));
// A bracket: what holds a balcony or an eave out from the wall. Its top is at y, its back against the wall.
export function corbel(out = 0.7, drop = 0.6, w = 0.18, y = 0) {
  const s = new THREE.Shape([V2(0, 0), V2(0, -drop), V2(out * 0.3, -drop * 0.78), V2(out * 0.72, -drop * 0.3), V2(out, 0)]);
  return plain(new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false })).rotateY(-Math.PI / 2).translate(w / 2, y, 0);
}

/* ---------- members ---------- */
// A column: a square plinth, a moulded base, a shaft that narrows, a capital that spreads, an abacus.
export function column(r, h, x, y, z, { sides = 8, taper = 0.84, base = 0.5, cap = 0.5 } = {}) {
  const b = base * r * 2, c = cap * r * 2;
  return [slab(r * 2.7, b * 0.45, r * 2.7, x, y, z), drum(r * 1.3, b * 0.55, x, y + b * 0.45, z, sides, null, r * 1.02), drum(r, h - b - c, x, y + b, z, sides, null, r * taper),
    drum(r * taper, c * 0.6, x, y + h - c, z, sides, null, r * 1.42), slab(r * 3, c * 0.4, r * 3, x, y + h - c * 0.4, z)];
}
// A balustrade from one point on the plan to another: turned balusters between a plinth and a rail.
export function balustrade(a, b, y, { h = 0.95, step = 0.36, r = 0.07, rail = 0.13, base = 0.1 } = {}) {
  const dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz), n = Math.max(1, Math.round(L / step)), out = [], m = new THREE.Matrix4().makeRotationY(Math.atan2(-dz, dx)).setPosition(a[0], y, a[1]);
  for (let i = 0; i < n; i++) out.push(plain(new THREE.CylinderGeometry(r * 0.6, r, h - rail - base, 4, 1, true)).translate((i + 0.5) * L / n, base + (h - rail - base) / 2, 0));
  out.push(slab(L, rail, rail * 1.5, L / 2, h - rail, 0), slab(L, base, rail * 1.3, L / 2, 0, 0));
  return out.map(g => g.applyMatrix4(m));
}
export const railing = (plan, y, o) => plan.flatMap((p, i) => balustrade(p, plan[(i + 1) % plan.length], y, o));
// The pot-and-bud finial that crowns an Indian dome, kalash.
export function kalash(s, x, y, z) {
  return plain(new THREE.LatheGeometry([[0.5, 0], [0.62, 0.12], [0.3, 0.3], [0.2, 0.42], [0.55, 0.7], [0.6, 0.95], [0.36, 1.2], [0.16, 1.34], [0.24, 1.5], [0.1, 1.72], [0.06, 2.2], [0.001, 2.6]].map(p => V2(p[0] * s, p[1] * s)), 8)).translate(x, y, z);
}
// A ring of lotus petals, as round the foot of a dome.
export function petals(r, n, size, x, y, z, tilt = 0.55) {
  return Array.from({ length: n }, (_, i) => plain(new THREE.ConeGeometry(size * 0.42, size, 4)).rotateX(tilt).translate(0, size * 0.4, r).rotateY(i / n * Math.PI * 2).translate(x, y, z));
}

// A shape turned about its axis whose section need not be a circle: squared for a temple spire, starred for a ribbed dome.
// pts are [radius, height] from the foot; section(a) scales the radius round the turn; the stone is laid round it in metres.
export function turnedSolid(pts, { seg = 32, section = null, tile = null } = {}) {
  const g = new THREE.LatheGeometry(pts.map(p => V2(Math.max(0.001, p[0]), p[1])), seg), p = g.attributes.position, uv = g.attributes.uv, girth = 2 * Math.PI * pts[0][0];
  for (let i = 0; i < p.count; i++) { const k = section ? section(Math.atan2(p.getX(i), p.getZ(i))) : 1; p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k);
    if (tile) uv.setXY(i, uv.getX(i) * girth / tile.u, p.getY(i) / tile.v); else uv.setXY(i, 0.004, 0.004); }
  g.computeVertexNormals(); return g;
}
export const squared = (p = 4) => a => 1 / Math.pow(Math.pow(Math.abs(Math.cos(a)), p) + Math.pow(Math.abs(Math.sin(a)), p), 1 / p);
// A balcony window, jharokha: a floor carried out on corbels, a parapet, two slender columns, an eave, and a dome or a crest over it.
// It stands against a wall at z = 0, centred on x, with its floor at y; h is from the floor to the eave.
export function jharokha(w, h, out, x, y, { roof = 'dome', drop = 1.0, r = 0.13 } = {}) {
  const P = new Parts(), z = out / 2;
  P.add('trim', slab(w, 0.24, out, x, y - 0.24, z), slab(w * 0.8, drop * 0.4, out * 0.72, x, y - 0.24 - drop * 0.4, out * 0.36), slab(w * 0.56, drop * 0.36, out * 0.46, x, y - 0.24 - drop * 0.76, out * 0.23), slab(w * 0.3, drop * 0.24, out * 0.24, x, y - 0.24 - drop, out * 0.12));
  P.add('trim', slab(w, 0.82, 0.1, x, y, out - 0.05), slab(0.1, 0.82, out, x - w / 2 + 0.05, y, z), slab(0.1, 0.82, out, x + w / 2 - 0.05, y, z), slab(w + 0.12, 0.1, out + 0.06, x, y + 0.82, z + 0.03));
  for (const s of [-1, 1]) P.add('trim', column(r, h - 0.92, x + s * (w / 2 - r * 1.5), y + 0.92, out - r * 1.5, { sides: 6 }));
  P.add('trim', slab(w + 0.16, 0.24, out + 0.08, x, y + h, z + 0.04), eave(rect(w + 0.16, out + 0.08, x, z + 0.04), y + h + 0.24, 0.7, 0.3, 0.1));
  if (roof === 'dome') P.add('trim', dome(Math.min(w, out * 2) * 0.46, w * 0.42, x, y + h + 0.6, out * 0.42, { seg: 10, finial: 0.5 }));
  if (roof === 'crest') { P.add('trim', slab(w * 0.94, 0.5, out * 0.8, x, y + h + 0.6, out * 0.42)); for (let i = -2; i <= 2; i++) P.add('fine', slab(w * 0.1, 0.24, 0.12, x + i * w * 0.2, y + h + 1.1, out * 0.78)); }
  if (roof === 'slope') P.add('trim', band([[0, 0], [-Math.min(w, out) * 0.48, 0.7]], rect(w, out, x, z), y + h + 0.6));
  return P;
}

/* ---------- putting a building together ---------- */
// The pieces of a building sorted by what they are made of, so that a face can be built once, turned and set in its place.
export class Parts {
  constructor() { this.g = {}; }
  add(role, ...solids) { (this.g[role] || (this.g[role] = [])).push(...solids.flat(3)); return this; }
  take(other) { for (const k in other.g) this.add(k, other.g[k]); return this; }
  move(x = 0, y = 0, z = 0, turn = 0) { const m = new THREE.Matrix4().makeRotationY(turn).setPosition(x, y, z); for (const k in this.g) for (const s of this.g[k]) s.applyMatrix4(m); return this; }
  into(b, mats) { for (const k in this.g) { if (!mats[k]) throw new Error('nothing to make ' + k + ' of'); b.put(mats[k], this.g[k]); } return b; }
}
// One face of a building: a wall with its openings, and for each what fills it and what dresses it.
// An opening: { x, y, w, h, kind, fill: glass | door | dark | glow | jali | open, on, frame, outer, sill, rail, depth }.
export function face(w, h, t, tile, openings = [], y = 0, q = null) {
  const P = new Parts().add('stone', pierced(w, h, t, openings, tile, y).translate(0, y, 0));
  for (const o of openings) { const kind = o.kind || 'round', d = o.depth === undefined ? Math.min(t * 0.75, 0.45) : o.depth, fill = o.fill || 'glass', oy = y + Math.max(0.02, o.y);
    if (fill === 'glass') P.add('glass', pane(kind, o.w, o.h, o.x, oy, -d, { ...o, on: o.on === undefined ? (q ? q() < (o.chance === undefined ? 0.42 : o.chance) : 0) : o.on, style: o.style === undefined ? (q ? (q() * 4) | 0 : 0) : o.style }));
    else if (fill === 'door') P.add('wood', pane(kind, o.w, o.h, o.x, oy, -d, { ...o, uv: 'whole', shade: 0.8 }));
    else if (fill === 'jali') P.add('jali', pane(kind, o.w, o.h, o.x, oy, -d * 0.5, { ...o, uv: o.cell || 1, shade: 0.9 })).add('dark', pane(kind, o.w, o.h, o.x, oy, -d, { ...o, uv: 'plain', shade: 0.5 }));
    else if (fill !== 'open') P.add(fill, pane(kind, o.w, o.h, o.x, oy, -d, { ...o, uv: 'plain', on: fill === 'glow' ? 1 : 0 }));
    if (o.frame) P.add('trim', surround(kind, o.w, o.h, o.x, oy, 0, { ...o, band: o.frame, proud: o.proud === undefined ? 0.09 : o.proud, outer: o.outer || kind }));
    if (o.sill) P.add('trim', slab(o.w + (o.frame || 0) * 2 + 0.3, 0.16, 0.34, o.x, oy - 0.16, 0.05));
    if (o.rail) P.add('fine', balustrade([o.x - o.w / 2, -0.14], [o.x + o.w / 2, -0.14], oy, { h: o.rail === true ? 0.9 : o.rail })); }
  return P;
}
// Four faces round a rectangle, the front one at z = 0: each a list of openings measured from the middle of its own face.
export function walls(W, D, H, t, tile, { front = [], back = [], left = [], right = [] } = {}, y = 0, q = null) {
  return new Parts().take(face(W, H, t, tile, front, y, q)).take(face(W, H, t, tile, back, y, q).move(0, 0, -D, Math.PI))
    .take(face(D, H, t, tile, right, y, q).move(W / 2, 0, -D / 2, Math.PI / 2)).take(face(D, H, t, tile, left, y, q).move(-W / 2, 0, -D / 2, -Math.PI / 2));
}
// n openings alike, set out evenly either side of the middle.
export const spaced = (n, pitch, spec, x0 = 0) => Array.from({ length: n }, (_, i) => ({ ...spec, x: x0 + (i - (n - 1) / 2) * pitch }));
