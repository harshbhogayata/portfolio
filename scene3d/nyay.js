// Nyay Mandir. Built facing south at the origin; main.js sets it down on its bank and turns it to the lake.
import * as THREE from 'three';
import { Builder, painted, lit, wall, box, slab, drum, dome, chhatri, arch, ball, cone, rod, plain, shade, shadeMat, ribbed, turned, pitched, hipped, fromPhoto, rng, WARM, LAMP, COOL } from './kit.js';
import { masonry, rooftiles, glazing, timber, lattice, fine, clad, shadeBy, outline, pierced, pane, surround, rect, ngon, band, eave, cornice, row, around, corbel, column, balustrade, railing, kalash, petals, turnedSolid, squared, jharokha, Parts, face, walls, spaced } from './mason.js';

const gold = () => lit(1.9, 1.35, 0.42), globe = () => lit(1.8, 1.4, 0.8);

/* Nyay Mandir, the Temple of Justice: banded stone, a tall middle with a great arched door and a turret at either shoulder, a gabled
   pavilion to each side, and long two-storey wings under tiled roofs. Its measure and its surfaces are taken from a photograph. */
export function nyayMandir() {
  const CENTRE = fromPhoto('nyay_centre'), GABLE = fromPhoto('nyay_gable', 0), PAV = fromPhoto('nyay_pav'), WING = fromPhoto('nyay_wing'), TUR = fromPhoto('nyay_turret', 0);
  const D = painted({ tint: 0xe3d2ac }), roof = painted({ tint: 0x8b4f3c }), b = new Builder();
  b.put(D, box(96, 0.9, 26, 0, 0, -11));
  b.put(CENTRE, wall(27, 21.5, 24, 0, 0, -8, { u: 27, v: 21.5 })); b.put(D, box(28.2, 0.7, 25.2, 0, 21.5, -8));                 // the middle, standing forward
  b.put(GABLE, wall(10, 6.2, 5, 0, 22.2, 1.4, { u: 10, v: 6.2, same: true })); b.put(D, box(11, 0.4, 5.6, 0, 28.4, 1.4)); for (const sx of [-4.4, 0, 4.4]) b.put(D, dome(0.7, 1.3, sx, 28.8, 1.4, { seg: 8, finial: 0.6 }));
  b.put(D, slab(11.4, 0.5, 2.2, 0, 8.3, 5.1)); for (let x = -5.2; x <= 5.2; x += 0.8) b.put(D, slab(0.16, 0.9, 0.16, x, 8.8, 6.1));   // the balcony over the door
  for (const sx of [-1, 1]) {                                                                                                // the two turrets: an eight-sided shaft, an open lantern, a little dome
    const x = sx * 10.2, z = 2.2; b.put(TUR, drum(2.2, 9.5, x, 21.5, z, 8, { u: 2 * Math.PI * 2.2 / 2, v: 9.5 })); b.put(D, drum(2.9, 0.4, x, 26, z, 8), drum(2.8, 0.4, x, 31, z, 8));
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; b.put(D, drum(0.22, 2.8, x + Math.cos(a) * 1.9, 31.4, z + Math.sin(a) * 1.9, 6)); }
    b.put(D, drum(2.6, 0.4, x, 34.2, z, 8), dome(2.1, 2.4, x, 34.6, z, { seg: 12, swell: 0.05, finial: 0.6 })); b.put(gold(), ball(0.3, x, 38.7, z, 8)); b.light(x, 32.6, z, WARM, 0.6, 4.5, 2.2);
  }
  for (const sx of [-1, 1]) {                                                                                                // a gabled pavilion, then a long wing, on each side
    const px = sx * 20.2; b.put(PAV, wall(13.4, 15.4, 20, px, 0, -10, { u: 13.4, v: 15.4 })); b.put(D, box(14.4, 0.6, 21, px, 15.4, -10)); b.put(roof, hipped(7.2, 10.6, 4.6, px, 16, -10));
    b.put(D, slab(4.6, 3.4, 0.5, px, 16, 0.3), dome(0.9, 1.4, px, 19.4, 0.3, { seg: 8, finial: 0.6 }));
    const wx = sx * 37.2; b.put(WING, wall(20.6, 12, 16, wx, 0, -9, { u: 20.6, v: 12 }, sx < 0 ? 0 : 0.5)); b.put(D, box(21.6, 0.6, 17, wx, 12, -9)); b.put(roof, pitched(21.8, 17.4, wx, 12.6, -9, 0.5));
    for (let x = -9.4; x <= 9.4; x += 1.34) b.put(D, slab(0.3, 0.6, 0.3, wx + x, 12.6, -0.7));
    const ex = sx * 46.8; b.put(D, drum(1.2, 3, ex, 12.6, -1.4, 8), chhatri(2.4, 2.3, ex, 15.6, -1.4)); b.put(gold(), ball(0.24, ex, 20.3, -1.4, 6));
  }
  for (let i = 0; i < 5; i++) b.put(D, slab(13 - i * 0.6, 0.24, 1, 0, 0.8 - i * 0.2, 4.6 + i));
  for (let x = -40; x <= 40; x += 8) b.light(x, 0.6, 15, LAMP, 0.36, 14);
  b.light(0, 24, 10, LAMP, 0.55, 11).light(-20, 17, 8, LAMP, 0.3, 8).light(20, 17, 8, LAMP, 0.3, 8).light(0, 6, 8, WARM, 0.7, 7);
  b.put(shadeMat(), shade(56, 12, 0, 0, -6));
  return b;
}
