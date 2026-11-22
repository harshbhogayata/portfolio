// The Arts Faculty of the university. Built facing south at the origin; main.js sets it down on its bank and turns it to the lake.
import * as THREE from 'three';
import { Builder, painted, lit, slab, drum, dome, ball, plain, shade, shadeMat, rng, WARM } from './kit.js';
import { masonry, glazing, fine, clad, shadeBy, outline, surround, rect, ngon, band, eave, cornice, around, corbel, column, balustrade, kalash, turnedSolid, jharokha, Parts, face, walls, spaced } from './mason.js';

const gold = () => lit(1.9, 1.35, 0.42);

// The stones of an arch picked out one in two, as the banded arches of this building are: each lies on the arch's dressing, between the opening and its back.
function voussoirs(kind, w, h, x, y, z, { band: bw = 0.8, seg = 24, ...o } = {}) {
  const I = outline(kind, w, h, { ...o, seg }), O = outline(kind, w + bw * 2, h + bw, { ...o, seg }), P = [];
  for (let i = 2; i < Math.min(I.length, O.length) - 1; i += 2) for (const k of [I[i], O[i], O[i + 1], I[i], O[i + 1], I[i + 1]]) P.push(k[0], k[1], 0);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.computeVertexNormals(); g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(P.length / 3 * 2).fill(0.004), 2));
  return g.translate(x, y, z);
}
// A round window in its rosette, set on a dome and leaning back with it: the frame, the petals of the rosette, and what shows through.
function oculus(P, r, lean, rad, y, turn, cx, cz, glow) {
  const set = g => g.rotateX(-lean).translate(0, y, rad).rotateY(turn).translate(cx, 0, cz);
  P.add('trim', set(plain(new THREE.TorusGeometry(r, r * 0.2, 5, 14)).translate(0, 0, 0.05))); P.add(glow ? 'glow' : 'dark', set(plain(new THREE.CircleGeometry(r, 14)).translate(0, 0, 0.06)));
  if (r > 0.7) { P.add('fine', set(plain(new THREE.TorusGeometry(r * 0.42, r * 0.09, 4, 10)).translate(0, 0, 0.12))); for (let i = 0; i < 8; i++) P.add('fine', set(plain(new THREE.BoxGeometry(r * 0.1, r * 0.56, 0.08)).translate(0, r * 0.7, 0.1).rotateZ(i * Math.PI / 4))); }
}
// An open kiosk on a roof: slender columns round a ring, an eave, a dome and its finial.
function kiosk(P, r, x, y, z, n = 8, foot = 0) {
  if (foot) P.add('trim', band([[0, -foot], [0, 0]], ngon(r * 0.98, n, x, z), y, { cap: true }));
  for (let i = 0; i < n; i++) { const a = (i + 0.5) / n * Math.PI * 2; const cx = x + Math.cos(a) * r * 0.78, cz = z + Math.sin(a) * r * 0.78; P.add('fine', drum(r * 0.09, r * 1.13, cx, y, cz, 5, null, r * 0.07), slab(r * 0.26, r * 0.12, r * 0.26, cx, y + r * 1.13, cz)); }
  P.add('trim', band([[0, 0], [0, r * 0.2]], ngon(r * 0.95, n, x, z), y + r * 1.25, { cap: true }), eave(ngon(r * 0.98, n, x, z), y + r * 1.4, r * 0.42, r * 0.16, 0.07), dome(r * 0.92, r * 1.05, x, y + r * 1.6, z, { seg: 12, swell: 0.06, finial: 0 }), kalash(r * 0.26, x, y + r * 2.62, z));
}

/* The Arts Faculty of the university, Robert Chisholm's Baroda College of 1881: red brick banded with pale stone. Three tall arches with
   striped stones stand on stout columns before a deep porch; over the hall behind them rises one of the largest masonry domes in India,
   after the Gol Gumbaz of Bijapur, ringed with round windows, with a smaller dome at each corner of its foot and an octagonal tower at each
   corner of the block. Two-storey wings run out to either side and end in a pavilion with a balcony, a great arch and its own dome. */
export function artsDome() {
  const BRICK = masonry('msu-brick', { stone: [146, 74, 56], course: 0.17, block: 0.5, rows: 16, cols: 8, joint: 1.12, vary: 0.18, grime: 0.16, bands: Object.assign([], { 0: [172, 160, 130] }) }), T = BRICK.userData.tile;
  const SHELL = masonry('msu-dome', { stone: [178, 170, 152], course: 0.9, block: 2.4, rows: 4, cols: 2, joint: 0.93, vary: 0.05, grime: 0.7 }), TS = SHELL.userData.tile;
  const D = painted({ tint: 0xb8a988 }), mats = { stone: BRICK, trim: D, fine: fine(0xb8a988), glass: glazing(), dark: painted({ tint: 0x17120f }), glow: lit(0.82, 0.5, 0.2), shell: SHELL, stripe: painted({ tint: 0x7a3c2e }), roof: painted({ tint: 0x6a6158 }) };
  const b = new Builder(), q = rng(133), P = new Parts(), CZ = -15, Y0 = 1, H = 18, top = Y0 + H;
  const win = { kind: 'pointed', sharp: 0.4, frame: 0.2, sill: true }, low = { ...win, y: 0.9, w: 2.2, h: 3.9 }, high = { ...win, y: 6.3, w: 2, h: 3.4, chance: 0.5 }, small = { ...win, w: 1.5, h: 3.1, sill: false };
  // the plinth under each part, and the steps before the porch
  for (const [w, d, x, z] of [[31, 31, 0, CZ], [24.8, 20.8, -27, -12], [24.8, 20.8, 27, -12], [9.8, 8.8, -33, -2], [9.8, 8.8, 33, -2]]) P.add('trim', band([[0.3, 0], [0.3, 0.6], [0, Y0]], rect(w, d, x, z), 0, { cap: true }));
  for (let i = 0; i < 5; i++) P.add('trim', slab(23 - i * 0.4, Y0 - i * 0.2, 0.6, 0, 0, 0.8 + i * 0.6));

  // the middle: the three arches of the porch in the front wall, small windows high up along the sides, windows in two rows behind
  const sides = s => [...spaced(6, 4.5, { ...small, y: 12.2, h: 2.9 }), { ...low, x: s * 11 }, { ...high, x: s * 11 }];
  P.take(walls(30, 30, H, 1.2, T, { front: spaced(3, 7.4, { y: 0, w: 6, h: 13.4, kind: 'cusped', sharp: 0.5, lobes: 11, cusp: 0.035, fill: 'open' }), right: sides(1), left: sides(-1),
    back: [...spaced(5, 5.4, { ...low, w: 2.6, h: 4.6 }), ...spaced(5, 5.4, { ...high, y: 7.2, w: 2.4, h: 4.2 }), ...spaced(6, 4.5, { ...small, y: 12.2, h: 2.9 })] }, Y0, q));
  for (const x of [-7.4, 0, 7.4]) { P.add('trim', surround('cusped', 6, 13.4, x, Y0 + 0.02, 0, { band: 0.85, proud: 0.22, outer: 'pointed', sharp: 0.5, lobes: 11, cusp: 0.035 })); P.add('stripe', voussoirs('pointed', 6, 13.4, x, Y0 + 0.02, 0.26, { band: 0.85, sharp: 0.5 })); }
  for (const x of [-11.1, -3.7, 3.7, 11.1]) { P.add('trim', slab(1.5, 1.7, 1.5, x, Y0, 0.5), column(0.52, 6.6, x, Y0 + 1.7, 0.5, { sides: 10, cap: 0.7 }), slab(1.7, 0.5, 1.6, x, Y0 + 8.3, 0.45)); P.add('fine', kalash(0.3, x, top + 1.5, 0.2)); }
  // the porch behind the arches: its back wall with three tall windows, its ends, its ceiling; a lamp inside
  const porch = new Parts().take(face(21.6, 14, 0.6, T, spaced(3, 7.4, { ...win, y: 0.5, w: 3.6, h: 9.6, on: 1, style: 1 }), Y0).move(0, 0, -5.2));
  for (const s of [-1, 1]) porch.add('stone', clad(slab(0.6, 14, 4.4, s * 10.9, Y0, -3.2), T)); porch.add('trim', slab(22.4, 0.5, 4.6, 0, Y0 + 13.9, -3.1));
  for (const k of ['stone', 'trim']) for (const g of porch.g[k]) shadeBy(g, 0.6); P.take(porch); b.light(-7.4, 4, -2, WARM, 0.22, 6).light(0, 4, -2, WARM, 0.22, 6).light(7.4, 4, -2, WARM, 0.22, 6);
  // its string courses, cornice and parapet
  const body = rect(30, 30, 0, CZ); P.add('trim', cornice(body, Y0 + 15.3, 0.25, 0.4), cornice(body, top - 0.5, 0.5, 0.7), band([[0, 0], [0, 1], [-0.4, 1]], rect(30.6, 30.6, 0, CZ), top + 0.2)); P.add('roof', slab(30, 0.3, 30, 0, top, CZ));
  P.add('fine', around(rect(30.6, 30.6, 0, CZ), 1.3, () => slab(0.62, 0.5, 0.36, 0, top + 1.2, -0.2), { inset: 0.6 }), around(body, 0.9, () => slab(0.3, 0.3, 0.2, 0, top - 0.82, 0.12), { inset: 0.5 }));
  // an octagonal tower at each corner, banded, with an open kiosk on it
  for (const [sx, sz] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) { const x = sx * 14.7, z = CZ + sz * 14.7, plan = ngon(1.8, 8, x, z);
    P.add('stone', band([[0, 0], [0, 19.6]], plan, Y0, { tile: T })); for (const y of [6.4, 12.4]) P.add('trim', cornice(plan, Y0 + y, 0.14, 0.28)); P.add('trim', cornice(plan, Y0 + 19.6, 0.36, 0.55), band([[0.36, 0], [0.36, 0.2]], plan, Y0 + 20.15, { cap: true })); kiosk(P, 1.9, x, Y0 + 20.35, z); }

  // the dome: an eight-sided base, the banded drum, the shell with its two rings of round windows, the lotus and finial at its crown
  const DY = 28, DR = 12, DH = 13.4, shell = [[DR - 0.5, -0.6]]; for (let i = 0; i <= 22; i++) { const a = i / 22 * Math.PI / 2; shell.push([Math.max(0.01, DR * Math.cos(a)), DH * Math.sin(a)]); }
  P.add('stone', band([[0, 0], [0, 2], [-1, 2]], ngon(14.2, 8, 0, CZ, 0), top + 0.3, { tile: T }), drum(DR, 5.4, 0, top + 2.3, CZ, 32, T)); P.add('trim', cornice(ngon(14.2, 8, 0, CZ, 0), top + 2.1, 0.25, 0.35), drum(DR + 0.3, 0.35, 0, top + 4.6, CZ, 32), drum(DR + 0.7, 0.4, 0, DY - 1, CZ, 32, null, DR + 0.3), drum(DR + 0.3, 0.3, 0, DY - 0.6, CZ, 32));
  P.add('shell', turnedSolid(shell, { seg: 48, tile: TS }).translate(0, DY, CZ));
  for (let i = 0; i < 16; i++) { const t = (i + 0.5) / 16 * Math.PI * 2; for (const [a, r, glow] of [[0.2, 1.05, i % 2 === 0], [0.74, 0.5, false]]) oculus(P, r, Math.atan2(DR * Math.sin(a), DH * Math.cos(a)), DR * Math.cos(a), DY + DH * Math.sin(a), t, 0, CZ, glow); }
  P.add('trim', turnedSolid([[2.9, 0], [3.1, 0.3], [2.2, 0.7], [0.8, 0.95], [0.4, 1.5], [0.6, 1.9], [0.25, 2.3], [0.1, 3.1]], { seg: 16 }).translate(0, DY + DH - 0.3, CZ));
  b.put(gold(), ball(0.42, 0, DY + DH + 3, CZ, 8), plain(new THREE.TorusGeometry(0.5, 0.07, 5, 12)).translate(0, DY + DH + 4, CZ), plain(new THREE.CylinderGeometry(0.05, 0.05, 1.4, 5)).translate(0, DY + DH + 3.7, CZ));
  // a smaller dome at each corner of its foot, half hidden against the drum
  for (const [sx, sz] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) { const x = sx * 10.3, z = CZ + sz * 10.3, half = [[4.1, -0.3]]; for (let i = 0; i <= 10; i++) { const a = i / 10 * Math.PI / 2; half.push([Math.max(0.01, 4.3 * Math.cos(a)), 4.7 * Math.sin(a)]); }
    P.add('stone', band([[0, 0], [0, 2.2]], ngon(4.7, 8, x, z), top + 0.3, { tile: T })); P.add('trim', cornice(ngon(4.7, 8, x, z), top + 2.3, 0.2, 0.3)); P.add('shell', turnedSolid(half, { seg: 20, tile: TS }).translate(x, top + 2.9, z)); P.add('fine', kalash(0.5, x, top + 7.5, z)); }

  // the wings: two floors of pointed windows in stone frames, a balconied window next the middle, a parapet with kiosks along it
  for (const sx of [-1, 1]) {
    const wx = sx * 27, wing = rect(24, 20, wx, -12), wy = Y0 + 11, bays = [-10, -5.6, -1.2].map(x => sx * x), rows = (n, p) => [...spaced(n, p, low), ...spaced(n, p, high)];
    P.take(walls(24, 20, 11, 0.7, T, { front: bays.flatMap(x => [{ ...low, x }, { ...high, x }]), back: rows(5, 4.5), [sx > 0 ? 'right' : 'left']: rows(4, 4.5) }, Y0, q).move(wx, 0, -2));
    P.take(jharokha(3.2, 3.9, 1.1, wx + bays[1], Y0 + 6.2, { roof: 'dome', drop: 1.1 }).move(0, 0, -2));
    P.add('trim', cornice(wing, Y0 + 5.5, 0.2, 0.32), cornice(wing, wy - 0.4, 0.4, 0.55), band([[0, 0], [0, 0.9], [-0.35, 0.9]], rect(24.4, 20.4, wx, -12), wy + 0.15)); P.add('roof', slab(24, 0.3, 20, wx, wy - 0.1, -12));
    P.add('fine', around(rect(24.4, 20.4, wx, -12), 1.3, () => slab(0.6, 0.42, 0.32, 0, wy + 1.05, -0.18), { inset: 0.6 }), around(wing, 0.9, () => slab(0.26, 0.26, 0.18, 0, wy - 0.66, 0.1), { inset: 0.5 }));
    for (const x of [17.6, 22, 26.4]) kiosk(P, 1.5, sx * x, wy + 1.05, -3.2, 6, 0.9);
    // the pavilion at its end: three small arches below, a balcony, then the great striped arch; a ribbed dome on an eight-sided drum behind the parapet
    const px = sx * 33, pav = rect(9, 8, px, -2), ph = 14.5, py = Y0 + ph, side = [...spaced(2, 3.4, { ...low, w: 1.7, h: 3.6 }), ...spaced(2, 3.4, { ...high, w: 1.6, h: 3.2 }), { ...small, x: 0, y: 10.6, w: 2.4, h: 3 }];
    P.take(walls(9, 8, ph, 0.7, T, { front: [...spaced(3, 2.6, { y: 0.3, w: 1.9, h: 4, kind: 'cusped', sharp: 0.4, lobes: 5, cusp: 0.07, frame: 0.16, depth: 0.55, chance: 0.3 }), ...spaced(3, 2.6, { ...small, y: 6.2, h: 3, chance: 0.6 }), { x: 0, y: 10.2, w: 5.2, h: 3.7, kind: 'pointed', sharp: 0.3, frame: 0.55, proud: 0.14, on: 1, style: 1 }],
      right: side, left: side, back: [{ ...small, x: 0, y: 11 }] }, Y0, q).move(px, 0, 2));
    P.add('stripe', voussoirs('pointed', 5.2, 3.7, px, Y0 + 10.22, 2.18, { band: 0.55, sharp: 0.3, seg: 20 }));
    P.add('trim', slab(8.8, 0.24, 1.3, px, Y0 + 5.8, 2.65), cornice(pav, Y0 + 5.2, 0.16, 0.3), cornice(pav, Y0 + 9.7, 0.16, 0.3), cornice(pav, py - 0.4, 0.4, 0.55), band([[0, 0], [0, 0.9], [-0.35, 0.9]], rect(9.4, 8.4, px, -2), py + 0.15)); P.add('roof', slab(9, 0.3, 8, px, py - 0.1, -2));
    P.add('fine', [-3.6, -1.2, 1.2, 3.6].map(x => corbel(1.2, 0.8, 0.2, Y0 + 5.8).translate(px + x, 0, 2)), balustrade([px - 4.3, 3.2], [px + 4.3, 3.2], Y0 + 6.04, { h: 0.9 }), balustrade([px - 4.3, 2.1], [px - 4.3, 3.2], Y0 + 6.04, { h: 0.9 }), balustrade([px + 4.3, 3.2], [px + 4.3, 2.1], Y0 + 6.04, { h: 0.9 }));
    P.add('fine', around(rect(9.4, 8.4, px, -2), 1.3, () => slab(0.6, 0.42, 0.32, 0, py + 1.05, -0.18), { inset: 0.6 }));
    const ribs = [[3.2, -0.2]]; for (let i = 0; i <= 10; i++) { const a = i / 10 * Math.PI / 2; ribs.push([Math.max(0.01, 3.4 * Math.cos(a)), 4 * Math.sin(a)]); }
    P.add('stone', band([[0, 0], [0, 1.9]], ngon(3.8, 8, px, -2), py + 0.2, { tile: T })); P.add('trim', cornice(ngon(3.8, 8, px, -2), py + 2, 0.2, 0.3)); P.add('shell', turnedSolid(ribs, { seg: 32, section: a => 1 - 0.05 * (Math.cos(a * 16) > 0 ? 1 : 0), tile: TS }).translate(px, py + 2.6, -2)); P.add('fine', kalash(0.46, px, py + 6.5, -2));
    // a slim turret at each of its front corners
    for (const tx of [px - 4.6, px + 4.6]) { const plan = ngon(0.95, 8, tx, 2.1); P.add('stone', band([[0, 0], [0, ph + 1.4]], plan, Y0, { tile: T })); P.add('trim', cornice(plan, py + 1.4, 0.2, 0.35), dome(1.05, 1.5, tx, py + 1.75, 2.1, { seg: 10, finial: 0.5 })); }
  }

  P.into(b, mats);
  // its floodlights: a row in the grass before the front, a few round the sides and behind, and others set high for the dome
  for (let x = -36; x <= 36; x += 9) b.light(x, 0.6, 16, WARM, 0.2, 15);
  for (const s of [-1, 1]) b.light(s * 50, 0.8, -12, WARM, 0.16, 14).light(s * 24, 0.8, -36, WARM, 0.12, 14).light(s * 33, 12, 12, WARM, 0.14, 9);
  b.light(0, 0.8, -44, WARM, 0.12, 14).light(0, 26, 14, WARM, 0.3, 15).light(0, 38, 8, WARM, 0.24, 13).light(-26, 34, CZ, WARM, 0.22, 14).light(26, 34, CZ, WARM, 0.22, 14).light(0, 34, -42, WARM, 0.18, 14).light(-16, 24, 4, WARM, 0.14, 8).light(16, 24, 4, WARM, 0.14, 8);
  b.put(shadeMat(), shade(46, 22, 0, 0, -13));
  return b;
}
