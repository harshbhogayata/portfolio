// Mandvi Gate. Built facing south at the origin; main.js sets it down on its bank and turns it to the lake.
import * as THREE from 'three';
import { Builder, painted, lit, slab, drum, dome, ball, rod, plain, shade, shadeMat, WARM, LAMP } from './kit.js';
import { masonry, timber, lattice, fine, pane, surround, rect, band, eave, cornice, around, corbel, column, turnedSolid, Parts, face } from './mason.js';

const gold = () => lit(1.9, 1.35, 0.42);

/* Mandvi Gate: the pavilion at the middle of the old city, where its four streets meet. A square white block that the streets pass through:
   three pointed arches on every side, piers and cross arches within, a bracketed cornice and a panelled parapet. A round tower stands at one
   corner with a wooden kiosk on it. Above, two storeys of galleries behind brown screens, each smaller than the last under a wide flat eave
   with an iron rail round it; then the clock, and a small cupola. All of it is built: you can see through the gate from any side. */
export function mandvi() {
  const PLASTER = masonry('mandvi', { stone: [188, 186, 178], course: 0.6, block: 2.4, rows: 8, cols: 2, joint: 0.955, vary: 0.04, grime: 0.1 }), T = PLASTER.userData.tile;
  const mats = { stone: PLASTER, trim: painted({ tint: 0xbcbab2 }), fine: fine(0xbcbab2), brown: painted({ tint: 0x7a5a48 }), brownfine: fine(0x7a5a48), iron: fine(0x2c2e36), dark: painted({ tint: 0x16130f }), pave: painted({ tint: 0x4a4640 }),
    jali: lattice('mandvi', [132, 88, 62], 0.36), white: lattice('mandvi-white', [196, 194, 186], 0.46), wood: timber('mandvi', [112, 70, 46]), glow: lit(0.36, 0.21, 0.08), dial: lit(1.5, 1.42, 1.15), lamp: lit(2, 1.5, 0.8), flag: lit(1.5, 0.3, 0.2), gold: gold() };
  const b = new Builder(), P = new Parts(), S = 26, cz = -13, H = 10.6, t = 2.2, body = rect(S, S, 0, cz), turnTo = k => k * Math.PI / 2;
  // the gate itself: a wall of three arches on each side and two more each way within, every wall with a face on both sides, so the nine bays stand open
  const arches = [[-8.2, 5.1, 8.4], [0, 6, 8.7], [8.2, 5.1, 8.4]].map(([x, w, h]) => ({ x, y: 0, w, h, kind: 'pointed', sharp: 0.2, seg: 14, fill: 'open' }));
  const arcade = () => new Parts().take(face(S, H, t / 2, T, arches).move(0, 0, t / 2)).take(face(S, H, t / 2, T, arches).move(0, 0, -t / 2, Math.PI));
  for (const [x, z, turn] of [[0, -t / 2, 0], [0, -S + t / 2, 0], [S / 2 - t / 2, cz, 1], [-S / 2 + t / 2, cz, 1], [0, cz + 4.35, 0], [0, cz - 4.35, 0], [4.35, cz, 1], [-4.35, cz, 1]]) P.take(arcade().move(x, 0, z, turnTo(turn)));
  P.add('pave', slab(S + 3, 0.12, S + 3, 0, 0, cz)); P.add('trim', slab(S - 0.2, 0.4, S - 0.2, 0, H - 0.4, cz));                                    // the street runs through under a plain ceiling
  // each arch in its moulding, and small cusped niches one over another on the piers between
  for (let k = 0; k < 4; k++) { const side = new Parts();
    for (const o of arches) side.add('fine', surround('pointed', o.w, o.h, o.x, 0.02, 0, { band: 0.2, proud: 0.07, sharp: 0.2, seg: 14 }));
    for (const x of [-4.35, 4.35]) for (const y of [2.6, 5.0, 7.2]) side.add('fine', surround('cusped', 0.85, 1.35, x, y, 0, { band: 0.1, proud: 0.05, lobes: 5, cusp: 0.11, sharp: 0.3 }));
    P.take(side.move(0, 0, S / 2).move(0, 0, cz, turnTo(k))); }
  // the cornice on its brackets, edged in brown; the parapet in panels, with its coping; the terrace behind it
  P.add('trim', cornice(body, 9.72, 0.78, 0.88), cornice(body, 12.9, 0.2, 0.3), slab(S - 1, 0.3, S - 1, 0, H + 0.1, cz)); P.add('brown', band([[0.76, -0.16], [0.83, -0.16], [0.83, 0.03], [0.76, 0.03]], body, H));
  P.add('stone', band([[0, 0], [0, 2.3], [-0.55, 2.3], [-0.55, 0.4]], body, H, { tile: T }));
  P.add('fine', around(body, 0.72, () => corbel(0.55, 0.6, 0.24, 9.76), { inset: 0.4 }), around(body, 3.25, () => surround('flat', 2.3, 1.25, 0, 11.2, 0, { band: 0.12, proud: 0.05 }), { ends: false }));
  // the round tower at the corner: slit windows in pairs, its own cornice flaring out, a drum of parapet, and on it a wooden kiosk under a dome
  const tx = 13.4, tz = 0.4, on = (g, a, r) => g.translate(0, 0, r).rotateY(a).translate(tx, 0, tz), ky = 13.4;
  P.add('stone', drum(2.3, 9.7, tx, 0, tz, 18, T), drum(2.75, 2.5, tx, H, tz, 18, T));
  P.add('trim', turnedSolid([[2.3, 0], [2.48, 0.14], [2.6, 0.2], [2.98, 0.8], [3.06, 0.86], [3.06, 1.1], [2.75, 1.1]], { seg: 18 }).translate(tx, 9.5, tz), turnedSolid([[2.75, 0], [2.92, 0.05], [2.92, 0.25], [2.5, 0.3], [0.001, 0.3]], { seg: 18 }).translate(tx, 13.1, tz), drum(2.5, 0.5, tx, 0, tz, 18));
  P.add('brown', turnedSolid([[3.06, 0], [3.12, 0], [3.12, 0.18], [3.06, 0.18]], { seg: 18 }).translate(tx, 10.44, tz));
  for (let i = 0; i < 18; i++) P.add('fine', on(corbel(0.5, 0.6, 0.22, 10.22), i / 18 * Math.PI * 2, 2.34));
  for (const a of [0.42, 0.42 + Math.PI / 2, 0.42 - Math.PI / 2 + 0.5]) for (const y of [3.4, 6.7]) for (const da of [-0.09, 0.09]) P.add('dark', on(slab(0.17, 1.45, 0.08, 0, y, 0), a + da, 2.27));
  P.add('brown', drum(1.95, 0.24, tx, ky, tz, 12), turnedSolid([[1.72, 0], [1.72, 0.3], [2.3, 0.42], [2.3, 0.54], [1.62, 0.72]], { seg: 12 }).translate(tx, ky + 2.74, tz), dome(1.62, 1.7, tx, ky + 3.44, tz, { seg: 12, swell: 0.05, finial: 0.55 }));
  for (let i = 0; i < 8; i++) { const a = (i + 0.5) / 8 * Math.PI * 2, x = tx + Math.cos(a) * 1.58, z = tz + Math.sin(a) * 1.58; P.add('brownfine', column(0.1, 2.5, x, ky + 0.24, z, { sides: 6 }), on(slab(1.0, 0.34, 0.08, 0, ky + 2.4, 0), i / 8 * Math.PI * 2, 1.46)); }
  b.put(mats.gold, ball(0.2, tx, ky + 6.2, tz, 6)); b.put(mats.lamp, ball(0.22, tx, ky + 2.2, tz, 6)); b.light(tx, ky + 2.2, tz, WARM, 0.3, 3.4, 2);
  // a gallery: posts and beams, a band of brown screen under the eave with a dim light behind it, the flat eave edged in brown, and the iron rail that stands on it.
  // The lower gallery is walled below the screen, with white pierced panels and a shuttered window; the upper is open above a white screen.
  const rail = (w, y) => { const plan = rect(w, w, 0, cz); P.add('iron', around(plan, 1.1, () => slab(0.06, 0.95, 0.06, 0, y, 0)), band([[0, 0.9], [0.05, 0.9], [0.05, 0.95], [0, 0.95]], plan, y), band([[0, 0.45], [0.04, 0.45], [0.04, 0.49], [0, 0.49]], plan, y)); };
  const gallery = (w, y0, y1, bays, out, top, walled) => { const post = 0.44, pitch = (w - post) / bays, plan = rect(w + 0.2, w + 0.2, 0, cz), mid = y1 - 0.44 - top;
    for (let k = 0; k < 4; k++) { const side = new Parts().add('trim', slab(w, 0.3, post, 0, y1 - 0.3, -post / 2), slab(w, 0.14, 0.24, 0, mid, -0.2)).add('glow', pane('flat', w - 0.3, y1 - y0, 0, y0, -0.55, { uv: 'plain', on: 1 }));
      for (let i = 0; i <= bays; i++) side.add('trim', slab(post, y1 - y0, post, -w / 2 + post / 2 + i * pitch, y0, -post / 2));
      for (let i = 0; i < bays; i++) { const x = -w / 2 + post / 2 + (i + 0.5) * pitch, bw = pitch - post, centre = i === (bays - 1) / 2; side.add('jali', pane('flat', bw, top, x, y1 - 0.3 - top, -0.14, { uv: 1, shade: 1 }));
        if (walled) { side.add('trim', slab(bw, mid - y0, 0.1, x, y0, -0.21));
          if (centre) side.add('wood', pane('flat', 1.15, 1.25, x, y0 + 2.75, -0.13, { uv: 'whole', shade: 0.9 })).add('fine', slab(1.45, 0.12, 0.16, x, y0 + 2.63, -0.1), slab(1.45, 0.12, 0.16, x, y0 + 4.0, -0.1));
          else side.add('dark', pane('flat', bw - 0.5, 1.0, x, y0 + 2.9, -0.14, { uv: 'plain' })).add('white', pane('flat', bw - 0.5, 1.0, x, y0 + 2.9, -0.11, { uv: 0.7, shade: 1 })); }
        else side.add('dark', pane('flat', bw, 0.95, x, y0, -0.2, { uv: 'plain' })).add('white', pane('flat', bw, 0.95, x, y0, -0.16, { uv: 0.85, shade: 1 })).add('fine', slab(bw, 0.1, 0.14, x, y0 + 0.95, -0.16)); }
      P.take(side.move(0, 0, w / 2).move(0, 0, cz, turnTo(k))); }
    P.add('trim', band([[0, 0], [out, 0.42], [out, 0.58], [0, 0.58]], plan, y1), slab(w + 0.2, 0.16, w + 0.2, 0, y1 + 0.42, cz)); P.add('brown', band([[out, 0.38], [out + 0.07, 0.38], [out + 0.07, 0.6], [out, 0.6]], plan, y1)); };
  gallery(13.3, H + 0.4, 16.8, 5, 1.35, 1.25, true); rail(12.7, 17.38);
  gallery(8.3, 17.38, 20.5, 3, 1.05, 1.0, false); rail(7.7, 21.08);
  // the clock storey: a white block with a lit dial on each side under a sloping canopy; over it a rail, and the cupola with its pole
  const cy = 21.08, ct = 23.5, cw = 4.3;
  P.add('stone', band([[0, 0], [0, ct - cy]], rect(cw, cw, 0, cz), cy, { tile: T })); P.add('trim', eave(rect(cw, cw, 0, cz), ct, 0.9, 0.42, 0.1), slab(cw, 0.14, cw, 0, ct + 0.4, cz), cornice(rect(cw, cw, 0, cz), cy, 0.1, 0.2));
  for (let k = 0; k < 4; k++) { const side = new Parts().add('dial', plain(new THREE.CircleGeometry(0.95, 24)).translate(0, cy + 1.25, 0.04)).add('brownfine', plain(new THREE.TorusGeometry(1.0, 0.08, 5, 24)).translate(0, cy + 1.25, 0.05),
      slab(0.08, 0.74, 0.03, 0, cy + 1.25, 0.07), plain(new THREE.BoxGeometry(0.52, 0.08, 0.03)).translate(0.25, cy + 1.25, 0.07)); P.take(side.move(0, 0, cw / 2).move(0, 0, cz, turnTo(k))); }
  rail(3.7, ct + 0.54);
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) P.add('fine', slab(0.14, 1.5, 0.14, sx * 0.62, ct + 0.54, cz + sz * 0.62));
  P.add('trim', slab(1.6, 0.9, 1.6, 0, ct + 0.54, cz), slab(2.3, 0.16, 2.3, 0, ct + 2.04, cz)); P.add('brown', band([[0, 0], [-1.15, 0.75]], rect(2.3, 2.3, 0, cz), ct + 2.2));
  P.add('iron', rod([0, ct + 2.9, cz], [0, 28.6, cz], 0.045, 4)); b.put(mats.gold, ball(0.16, 0, ct + 3.0, cz, 6));
  for (const sx of [-1, 1]) { P.add('iron', rod([sx * 3.6, 21.08, cz + 3.7], [sx * 3.6, 24.4, cz + 3.7], 0.04, 4)); P.add('flag', slab(1.1, 0.7, 0.04, sx * 3.6 + 0.6, 23.6, cz + 3.7)); }
  P.into(b, mats);
  // lamps hang in the bays, and the whole is lit gently from the street
  for (const [x, z] of [[0, 0], [-8.2, 0], [8.2, 0], [0, -8.2], [0, 8.2]]) { b.put(mats.iron, rod([x, H - 0.4, cz + z], [x, 7.9, cz + z], 0.03, 4)); b.put(mats.lamp, ball(0.3, x, 7.7, cz + z, 8)); b.light(x, 7.2, cz + z, WARM, 0.85, 7.5, 2.6); }
  for (let x = -13; x <= 13; x += 6.5) b.light(x, 0.6, 12, LAMP, 0.14, 13).light(x, 0.6, -38, LAMP, 0.09, 13);
  for (const s of [-1, 1]) for (const z of [-4, -13, -22]) b.light(s * 25, 0.6, z, LAMP, 0.11, 13);
  b.light(0, 17, 6, LAMP, 0.2, 9).light(0, 22, 2, LAMP, 0.16, 7).light(-19, 17, -13, LAMP, 0.14, 9).light(19, 17, -13, LAMP, 0.14, 9).light(0, 18, -32, LAMP, 0.12, 9).light(19, 5, 6, LAMP, 0.14, 8);
  b.put(shadeMat(), shade(19, 19, 0, 0, cz));
  return b;
}
