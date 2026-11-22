// Kirti Mandir. Built facing south at the origin; main.js sets it down on its bank and turns it to the lake.
import * as THREE from 'three';
import { Builder, painted, lit, wall, box, slab, drum, dome, chhatri, arch, ball, cone, rod, plain, shade, shadeMat, ribbed, turned, pitched, hipped, fromPhoto, rng, WARM, LAMP, COOL } from './kit.js';
import { masonry, rooftiles, glazing, timber, lattice, fine, clad, shadeBy, outline, pierced, pane, surround, rect, ngon, band, eave, cornice, row, around, corbel, column, balustrade, railing, kalash, petals, turnedSolid, squared, jharokha, Parts, face, walls, spaced } from './mason.js';

const gold = () => lit(1.9, 1.35, 0.42), globe = () => lit(1.8, 1.4, 0.8);

/* Kirti Mandir: the Gaekwads' memorial, in pale stone. A square block on a high plinth: the great door in its carved frame under a cusped
   arch, a balconied window above another to either side, a deep eave on brackets. On the terrace an open pavilion at each corner, and
   between them the storey that carries the curved spire, crowned with the sun, the moon and the earth. Every face of it is built. */
export function kirtiMandir() {
  const STONE = masonry('kirti', { stone: [178, 168, 146], course: 0.5, block: 1.3, joint: 0.72, vary: 0.12 }), T = STONE.userData.tile, D = painted({ tint: 0xb9ae96 }), F = fine(0xb9ae96);
  const mats = { stone: STONE, trim: D, fine: F, glass: glazing(), wood: timber(), jali: lattice('teak', [124, 78, 46], 0.3), red: lattice('red', [170, 80, 58], 0.36, true), dark: painted({ tint: 0x1c1612 }), gold: gold() };
  const b = new Builder(), q = rng(36), P = new Parts(), W = 33, DP = 24, P0 = 2, H = 15.6, top = P0 + H, roofY = top + 0.9, body = rect(W, DP, 0, -DP / 2);
  // the plinth, moulded, and the steps up to the door between their cheek walls
  P.add('stone', band([[0.9, 0], [0.9, 0.5], [0.5, 0.85], [0.5, 1.5], [0.2, 1.8], [0.2, P0], [0, P0]], body, 0, { cap: true, tile: T }));
  P.add('trim', slab(10.4, P0, 1.5, 0, 0, 1.65)); for (let i = 1; i <= 7; i++) P.add('trim', slab(8.6, P0 - i * 0.25, 0.5, 0, 0, 2.4 + (i - 0.5) * 0.5));
  for (const s of [-1, 1]) { P.add('stone', clad(slab(0.9, P0 + 0.9, 1.5, s * 4.75, 0, 1.65), T), clad(slab(0.9, 1.5, 3.6, s * 4.75, 0, 4.2), T)); P.add('trim', slab(1.1, 0.2, 1.7, s * 4.75, P0 + 0.9, 1.65), slab(1.1, 0.2, 3.8, s * 4.75, 1.5, 4.2));
    for (const [z, y] of [[2.2, P0 + 1.1], [5.7, 1.7]]) { P.add('fine', column(0.14, 1.9, s * 4.75, y, z, { sides: 6 })); b.put(globe(), ball(0.3, s * 4.75, y + 2.15, z, 8)); b.light(s * 4.75, y + 2.2, z, LAMP, 0.25, 4, 2.2); } }
  // the walls: the door's opening in the middle of the front, two windows one over the other to either side; arcaded sides; a plain back
  const win = { w: 1.9, kind: 'flat', frame: 0.2, sill: true }, arc = { w: 3.3, kind: 'cusped', sharp: 0.35, frame: 0.3, outer: 'flat', depth: 0.8 };
  const sides = [...spaced(3, 7.4, { ...arc, y: 0.9, h: 5.6, fill: 'glass', chance: 0.3 }), ...spaced(3, 7.4, { ...arc, y: 8.5, h: 5.4, fill: 'glass', chance: 0.6 })];
  P.take(walls(W, DP, H, 0.9, T, {
    front: [{ x: 0, y: 0, w: 6.4, h: 13, kind: 'cusped', sharp: 0.32, lobes: 9, cusp: 0.06, fill: 'jali', cell: 2.2, depth: 0.86 }, ...[-11.6, 11.6].flatMap(x => [{ ...win, x, y: 2.5, h: 3.9 }, { ...win, x, y: 9.4, h: 3.8 }])],
    left: sides, right: sides, back: [...spaced(5, 6, { ...win, y: 2.2, h: 3.6 }), ...spaced(5, 6, { ...win, y: 9.2, h: 3.6 })] }, P0, q));
  for (const s of [-1, 1]) for (const x of [-7.4, 0, 7.4]) { const g = pane('flat', 3.3, 1.15, 0, 0, 0, { uv: 0.9, shade: 1 }).rotateY(s * Math.PI / 2).translate(s * (W / 2 - 0.2), P0 + 8.5, -DP / 2 + x); P.add('red', g); }   // red stone screens across the upper arches
  // the door: teak leaves, a screen to either side, a beam over, and the wooden grid that fills the arch above; round it the carved frame
  P.add('wood', pane('flat', 4.2, 7.1, 0, P0, -0.5, { uv: 'whole', shade: 0.85 })); P.add('trim', slab(6.6, 0.55, 0.3, 0, P0 + 7.1, -0.62), slab(0.26, 7.1, 0.3, -2.23, P0, -0.62), slab(0.26, 7.1, 0.3, 2.23, P0, -0.62));
  for (const s of [-1, 1]) P.add('red', pane('flat', 0.84, 7.1, s * 2.78, P0, -0.52, { uv: 0.8, shade: 0.9 }));
  P.add('trim', surround('cusped', 6.4, 13, 0, P0, 0, { band: 1.65, proud: 0.16, outer: 'flat', sharp: 0.32, lobes: 9, cusp: 0.06 }), surround('flat', 9.2, 14.2, 0, P0, 0.16, { band: 0.28, proud: 0.12 }), surround('flat', 6.9, 13.4, 0, P0, 0.16, { band: 0.16, proud: 0.08 }));
  for (const s of [-1, 1]) P.add('fine', plain(new THREE.CylinderGeometry(0.42, 0.42, 0.14, 12)).rotateX(Math.PI / 2).translate(s * 2.9, P0 + 13.5, 0.2), column(0.2, 6.6, s * 3.6, P0, 0.4, { sides: 8 }));
  // the balconied windows, the upper under a crest, the lower on a basket of corbels
  for (const x of [-11.6, 11.6]) { P.take(jharokha(3.4, 4.2, 1.3, x, P0 + 9.3, { roof: 'crest' })); P.take(jharokha(3.0, 4.2, 1.1, x, P0 + 2.4, { roof: 'none', drop: 1.3 })); }
  // a string course half way up, the eave on its brackets, and the parapet of the terrace
  P.add('trim', cornice(body, P0 + 7.5, 0.22, 0.34), cornice(body, top - 1.0, 0.3, 0.4), eave(body, top - 0.2, 1.9, 0.75, 0.16), band([[0, 0], [0.35, 0], [0.35, 0.35], [0, 0.35]], body, top + 0.55));
  P.add('fine', around(body, 1.42, () => corbel(1.25, 0.95, 0.2, top + 0.3), { inset: 0.3 }), around(body, 0.5, () => slab(0.2, 0.2, 0.16, 0, top - 1.22, 0.14), { inset: 0.4 }));
  P.add('trim', slab(W, 0.3, DP, 0, roofY - 0.3, -DP / 2)); P.add('fine', balustrade([-7, -0.25], [7, -0.25], roofY, { h: 1.25, step: 0.5, r: 0.11 }), balustrade([-7, -DP + 0.25], [7, -DP + 0.25], roofY, { h: 1.25, step: 0.5, r: 0.11 }));
  for (const s of [-1, 1]) P.add('fine', balustrade([s * (W / 2 - 0.25), -9.6], [s * (W / 2 - 0.25), -14.4], roofY, { h: 1.25, step: 0.5, r: 0.11 }));
  // the four open pavilions: a parapet, twelve columns in pairs at the corners, a wide eave, a low dome with a small one at each corner
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const x = sx * 11.7, z = sz > 0 ? -4.8 : -DP + 4.8, base = rect(9.4, 9.4, x, z), y1 = roofY + 1.9, y2 = y1 + 0.3 + 3.9;
    P.add('stone', band([[0, 0], [0, 1.9]], base, roofY, { cap: true, tile: T })); P.add('trim', cornice(base, y1, 0.22, 0.3), band([[0, 0], [0, 0.55], [-0.3, 0.55]], rect(8.6, 8.6, x, z), y2), slab(8.6, 0.12, 8.6, x, y2 + 0.43, z), eave(rect(8.8, 8.8, x, z), y2 + 0.55, 1.75, 0.6, 0.15));
    for (const [cx, cz] of [[1, 1], [0.62, 1], [1, 0.62]]) for (const a of [-1, 1]) for (const c of [-1, 1]) P.add(cx === 1 && cz === 1 ? 'trim' : 'fine', column(0.3, 3.9, x + a * cx * 3.95, y1 + 0.3, z + c * cz * 3.95, { sides: 8 }));
    P.add('fine', around(rect(8.8, 8.8, x, z), 1.3, () => corbel(1.1, 0.7, 0.16, y2 + 0.95), { inset: 0.5 }));
    P.add('trim', band([[0, 0], [0, 0.5], [-0.5, 0.75]], ngon(4.9, 8, x, z), y2 + 1.3, { cap: true }), turnedSolid([[4.0, 0], [3.9, 0.5], [3.5, 1.1], [2.7, 1.8], [1.6, 2.4], [0.7, 2.75], [0.3, 2.9], [0.001, 3.0]], { seg: 16 }).translate(x, y2 + 2.05, z), kalash(0.62, x, y2 + 4.95, z));
    for (const a of [-1, 1]) for (const c of [-1, 1]) P.add('fine', dome(0.72, 0.9, x + a * 3.7, y2 + 1.3, z + c * 3.7, { seg: 8, finial: 0.5 }));
    b.put(mats.dark, slab(8.2, 0.05, 8.2, x, y1 + 0.3, z)); b.light(x, y1 + 2.4, z, WARM, 0.4, 5); }
  // the storey under the spire: an arched window between pilasters on each face
  const cz = -DP / 2, up = { x: 0, y: 0.7, w: 2.8, h: 3.7, kind: 'round', frame: 0.26, fill: 'glass', on: 1, style: 1 }, sy = roofY + 5.3;
  P.take(walls(13, 13, 5.3, 0.7, T, { front: [up], back: [up], left: [up], right: [up] }, roofY, q).move(0, 0, cz + 6.5));
  for (const [fx, fz] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) for (const s of [-1, 1]) P.add('fine', column(0.24, 4.6, fx * 6.6 + (fx ? 0 : s * 2.2), roofY, cz + fz * 6.6 + (fz ? 0 : s * 2.2), { sides: 6 }));
  P.add('trim', eave(rect(13, 13, 0, cz), sy - 0.15, 1.1, 0.4, 0.14), band([[0, 0], [0.5, 0], [0.5, 0.3], [0.2, 0.5], [0.2, 0.9], [-0.2, 0.9]], rect(13, 13, 0, cz), sy + 0.35, { cap: true }));
  // the spire: square in plan with its corners eased, swelling a little before it draws in; strings of stone beads climb each face in three pointed arches
  const SH = 13.6, rad = t => 1.75 + 4.75 * (1 - Math.pow(t, 1.8)), sq = squared(4), y0 = sy + 1.25, pts = []; for (let i = 0; i <= 22; i++) pts.push([rad(i / 22), SH * i / 22]);
  P.add('stone', turnedSolid(pts, { seg: 40, section: sq, tile: { u: T.u, v: T.v } }).translate(0, y0, cz));
  const onFace = (x, t) => Math.pow(Math.max(0, Math.pow(rad(t), 4) - Math.pow(x, 4)), 0.25), bead = () => plain(new THREE.OctahedronGeometry(0.3)).scale(1, 0.72, 1);
  for (let f = 0; f < 4; f++) { const face = new Parts();
    for (const [w0, tt] of [[5.2, 0.97], [3.5, 0.7], [1.9, 0.44]]) { const n = Math.round(tt * 34);
      for (let i = 0; i <= n; i++) { const t = tt * i / n, x = w0 * (1 - Math.pow(t / tt, 1.7)) * rad(t) / rad(0); for (const s of i === n ? [1] : [-1, 1]) face.add('fine', bead().translate(s * x, t * SH, onFace(x, t) + 0.12)); }
      if (tt < 0.9) face.add('fine', kalash(0.3, 0, tt * SH - 0.1, onFace(0, tt) + 0.2), slab(1.5, 0.16, 0.5, 0, tt * SH - 0.3, onFace(0, tt) + 0.1)); }
    face.take(jharokha(1.9, 2.5, 0.8, 0, 1.3, { roof: 'dome', drop: 0.7, r: 0.1 }).move(0, 0, onFace(0, 0.08) - 0.05)); face.add('dark', pane('flat', 1.2, 2.2, 0, 1.4, onFace(0, 0.1) + 0.03, { uv: 'plain' }));
    P.take(face.move(0, y0, cz, f * Math.PI / 2)); }
  // its crown: a ribbed stone, a neck, then the earth, the moon and the sun in gilt
  const cy = y0 + SH; P.add('trim', turnedSolid([[1.75, 0], [2.2, 0.12], [2.35, 0.4], [2.2, 0.7], [1.5, 0.82], [1.2, 1.0], [1.5, 1.2], [1.35, 1.45], [0.5, 1.6], [0.36, 2.0]], { seg: 24, section: a => 1 - 0.07 * (Math.cos(a * 12) > 0 ? 1 : 0) }).translate(0, cy, cz));
  b.put(mats.gold, ball(0.72, 0, cy + 2.6, cz, 12), plain(new THREE.TorusGeometry(0.62, 0.11, 6, 14, Math.PI)).rotateZ(Math.PI).translate(0, cy + 4.15, cz), plain(new THREE.TorusGeometry(0.5, 0.09, 6, 16)).translate(0, cy + 5.0, cz), plain(new THREE.CylinderGeometry(0.06, 0.06, 1.4, 5)).translate(0, cy + 3.7, cz));
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; b.put(mats.gold, plain(new THREE.ConeGeometry(0.07, 0.34, 4)).translate(0, 0.76, 0).rotateZ(a).translate(0, cy + 5.0, cz)); }
  P.into(b, mats);
  // its floodlights: a row in the grass before the front, fewer along the sides and behind, and some set higher for the spire
  for (let x = -13; x <= 13; x += 6.5) b.light(x, 0.6, 14, LAMP, 0.2, 13);
  for (const s of [-1, 1]) for (const z of [-4, -12, -20]) b.light(s * 29, 0.8, z, LAMP, 0.13, 12);
  b.light(0, 25, 8, LAMP, 0.3, 12).light(0, 34, 5, LAMP, 0.26, 10).light(-11.3, 21, 5, LAMP, 0.14, 7).light(11.3, 21, 5, LAMP, 0.14, 7).light(0, 6, 4, WARM, 0.22, 5).light(0, 28, -32, LAMP, 0.16, 12).light(-24, 30, -12, LAMP, 0.16, 10).light(24, 30, -12, LAMP, 0.16, 10);
  b.put(shadeMat(), shade(24, 18, 0, 0, -11));
  return b;
}
