// Mandvi Gate. Built facing south at the origin; main.js sets it down on its bank and turns it to the lake.
import * as THREE from 'three';
import { Builder, painted, lit, wall, box, slab, drum, dome, chhatri, arch, ball, cone, rod, plain, shade, shadeMat, ribbed, turned, pitched, hipped, fromPhoto, rng, WARM, LAMP, COOL } from './kit.js';
import { masonry, rooftiles, glazing, timber, lattice, fine, clad, shadeBy, outline, pierced, pane, surround, rect, ngon, band, eave, cornice, row, around, corbel, column, balustrade, railing, kalash, petals, turnedSolid, squared, jharokha, Parts, face, walls, spaced } from './mason.js';

const gold = () => lit(1.9, 1.35, 0.42), globe = () => lit(1.8, 1.4, 0.8);

/* Mandvi Gate: the pavilion at the middle of the old city, where its four streets meet. A square white block pierced by three pointed arches
   on each side, a round tower at one corner, and above it three storeys of screened galleries, each smaller than the last, under wide eaves,
   with the clock at the top. Its measure and its surfaces are taken from a photograph. */
export function mandvi() {
  const BASE = fromPhoto('mandvi_base', 0.9), T1 = fromPhoto('mandvi_t1', 0.8), T2 = fromPhoto('mandvi_t2', 0.8), T3 = fromPhoto('mandvi_t3', 0), TOWER = fromPhoto('mandvi_tower', 0.6);
  const D = painted({ tint: 0xeeebe2 }), W = painted({ tint: 0x7a5a48 }), iron = painted({ tint: 0x33353d }), b = new Builder(), cz = -13;
  b.put(BASE, wall(26, 12.5, 26, 0, 0, cz, { u: 26, v: 12.5, same: true })); b.put(D, box(27.2, 0.5, 27.2, 0, 9.3, cz), box(27.6, 0.7, 27.6, 0, 12.5, cz));
  for (let x = -13; x <= 13; x += 1.3) b.put(D, slab(0.5, 0.6, 0.4, x, 13.2, 0.1));                                             // the parapet's battlements
  b.put(TOWER, drum(2.3, 14, 13.4, 0, 0.4, 14, { u: 2 * Math.PI * 2.3, v: 14 })); b.put(D, drum(2.8, 0.5, 13.4, 11.2, 0.4, 14), drum(2.9, 0.5, 13.4, 14, 0.4, 14));   // the round tower at the corner, and the lantern on it
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; b.put(iron, rod([13.4 + Math.cos(a) * 1.9, 14.5, 0.4 + Math.sin(a) * 1.9], [13.4 + Math.cos(a) * 1.9, 17, 0.4 + Math.sin(a) * 1.9], 0.09, 5)); }
  b.put(D, drum(2.4, 0.3, 13.4, 17, 0.4, 12)); b.put(W, dome(2.1, 2, 13.4, 17.3, 0.4, { seg: 12, swell: 0.02, finial: 0.5 }));
  // the galleries: each a screened storey behind a rail, under a wide eave
  const storey = (mat, w, h, y, eave) => { b.put(mat, wall(w, h, w, 0, y, cz, { u: w, v: h, same: true })); b.put(D, box(w + eave, 0.28, w + eave, 0, y + h, cz), box(w + eave - 0.9, 0.22, w + eave - 0.9, 0, y + h + 0.28, cz));
    for (let px = -w / 2 - 1; px <= w / 2 + 1; px += 1.1) for (const s of [-1, 1]) b.put(iron, slab(0.07, 0.9, 0.07, px, y, cz + s * (w / 2 + 1)), slab(0.07, 0.9, 0.07, s * (w / 2 + 1), y, cz + px));
    for (const s of [-1, 1]) b.put(iron, slab(w + 2.1, 0.07, 0.07, 0, y + 0.9, cz + s * (w / 2 + 1)), slab(0.07, 0.07, w + 2.1, s * (w / 2 + 1), y + 0.9, cz)); };
  storey(T1, 13.4, 3.7, 12.9, 3.2); storey(T2, 8.1, 3.1, 17.1, 2.6); storey(T3, 4.8, 2.2, 20.7, 1.6);
  b.put(D, slab(2.9, 2, 2.9, 0, 23.4, cz), box(3.9, 0.25, 3.9, 0, 25.4, cz)); for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.put(D, slab(0.2, 2, 0.2, sx * 1.3, 23.4, cz + sz * 1.3));
  b.put(D, dome(1.5, 1.3, 0, 25.65, cz, { seg: 10, swell: 0, finial: 0.7 })); b.put(gold(), ball(0.26, 0, 28, cz, 8));
  for (const sx of [-1.6, 1.6]) { b.put(iron, rod([sx, 23, cz + 2.5], [sx, 26.2, cz + 2.5], 0.04)); b.put(lit(1.5, 0.3, 0.2), slab(1.1, 0.7, 0.04, sx + 0.6, 25.5, cz + 2.5)); }   // the red flags
  for (const x of [-9, 0, 9]) b.light(x, 0.6, 12, LAMP, 0.36, 13); b.light(0, 5, 2, WARM, 0.8, 8).light(0, 15, 4, LAMP, 0.5, 9).light(0, 20, 0, LAMP, 0.4, 7).light(16, 4, 4, LAMP, 0.4, 9).light(-16, 4, -13, LAMP, 0.3, 10);
  b.put(shadeMat(), shade(19, 19, 0, 0, cz));
  return b;
}
