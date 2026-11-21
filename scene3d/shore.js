// The lake's edge and the life on it: the walk and its rail, ghats down to the water, lamp posts, benches, trees,
// food carts with their bulbs, people, autos, strings of lights, the road behind, and the landing stages.
import * as THREE from 'three';
import { Builder, painted, lit, box, slab, drum, ball, cone, rod, plain, ring, curtain, stripes, rng, at, R, DEG, WARM, LAMP, COOL, RED, TEAL, ROSE } from './kit.js';

// Ground already spoken for: nothing ordinary is built or planted there.
const plots = [];
export const claim = (x, z, hw, hd) => plots.push({ x, z, hw, hd });
export const free = (x, z, margin = 0) => plots.every(p => Math.abs(x - p.x) > p.hw + margin || Math.abs(z - p.z) > p.hd + margin);
const south = deg => { const a = ((deg % 360) + 360) % 360; return a > 204 && a < 336; };          // the bank the camera looks in over: kept low

function lampPost() {
  const b = new Builder(), iron = painted({ tint: 0x30323a });
  b.put(iron, drum(0.34, 0.7, 0, 0, 0, 8, null, 0.2), rod([0, 0.7, 0], [0, 5.6, 0], 0.09, 6), rod([-0.95, 5.3, 0], [0.95, 5.3, 0], 0.05, 4), slab(0.2, 0.3, 0.2, 0, 5.6, 0), cone(0.16, 0.5, 0, 5.9, 0, 6));
  for (const s of [-1, 1]) { b.put(iron, rod([s * 0.95, 5.3, 0], [s * 0.95, 4.95, 0], 0.03, 4)); b.put(lit(1.9, 1.5, 0.9), ball(0.3, s * 0.95, 4.7, 0, 8)); }
  b.light(0, 4.9, 0, LAMP, 0.95, 6.2).spark(-0.95, 4.7, 0, LAMP, 4.2).spark(0.95, 4.7, 0, LAMP, 4.2);
  return b;
}
function bench() { const b = new Builder(), wood = painted({ tint: 0x7a5c40 }), iron = painted({ tint: 0x30323a }); b.put(wood, slab(2.2, 0.1, 0.6, 0, 0.5, 0), slab(2.2, 0.5, 0.08, 0, 0.72, -0.3)); for (const s of [-0.95, 0.95]) b.put(iron, slab(0.08, 0.5, 0.6, s, 0, 0)); return b; }
function tree(seed, tall = 1) {
  const b = new Builder(), r = rng(seed), bark = painted({ tint: 0x5c4a3a }), leaves = [painted({ tint: 0x1d4630 }), painted({ tint: 0x2a5a3a }), painted({ tint: 0x234f3a })];
  const h = (4 + r() * 3) * tall; b.put(bark, rod([0, 0, 0], [r() * 0.6 - 0.3, h, r() * 0.6 - 0.3], 0.3 * tall, 6));
  for (let i = 0; i < 4 + (r() * 3 | 0); i++) { const s = (2 + r() * 2.2) * tall; b.put(leaves[i % 3], plain(new THREE.IcosahedronGeometry(s, 1)).scale(1, 0.78 + r() * 0.3, 1).translate((r() - 0.5) * 3.4 * tall, h + r() * 2.6 * tall, (r() - 0.5) * 3.4 * tall)); }
  return b;
}
function palm(seed) {
  const b = new Builder(), r = rng(seed), bark = painted({ tint: 0x6f5a44 }), leaf = painted({ tint: 0x25553a }), h = 8 + r() * 4, lean = (r() - 0.5) * 1.6;
  b.put(bark, rod([0, 0, 0], [lean * 0.4, h * 0.5, 0], 0.26, 6), rod([lean * 0.4, h * 0.5, 0], [lean, h, 0], 0.2, 6)); b.put(leaf, ball(0.6, lean, h, 0, 6));
  for (let i = 0; i < 9; i++) { const a = i / 9 * 6.28 + r(), d = 3 + r() * 1.2; b.put(leaf, rod([lean, h, 0], [lean + Math.cos(a) * d * 0.6, h + 0.5, Math.sin(a) * d * 0.6], 0.16, 4), rod([lean + Math.cos(a) * d * 0.6, h + 0.5, Math.sin(a) * d * 0.6], [lean + Math.cos(a) * d, h - 1 - r(), Math.sin(a) * d], 0.11, 4)); }
  return b;
}
function person(seed) {
  const r = rng(seed), b = new Builder(), cloth = painted({ tint: [0x7c2f3a, 0x2f4d7c, 0xb7a47a, 0x2f6a55, 0x8a8f9c, 0xb4642e, 0x5a3a6a][(r() * 7) | 0] }), skin = painted({ tint: 0x9a6a4c }), legs = painted({ tint: 0x2a2c36 });
  const sari = r() < 0.4; b.put(legs, sari ? cone(0.34, 0.95, 0, 0, 0, 7) : [slab(0.16, 0.85, 0.2, -0.11, 0, 0), slab(0.16, 0.85, 0.2, 0.11, 0, 0)]);
  b.put(cloth, drum(0.2, 0.62, 0, 0.85, 0, 7, null, 0.24), rod([-0.27, 1.4, 0], [-0.31, 0.86, 0.06], 0.065, 4), rod([0.27, 1.4, 0], [0.31, 0.86, 0.06], 0.065, 4)); b.put(skin, ball(0.14, 0, 1.63, 0, 7));
  return b;
}
function cart(seed) {                                       // a larri: a hand cart under an awning, a bulb hanging over the pans
  const r = rng(seed), b = new Builder(), wood = painted({ tint: 0x6b4c34 }), steel = painted({ tint: 0xa9adb6 }), iron = painted({ tint: 0x30323a });
  const awn = painted({ map: stripes(['#b33a2e', '#1f6f6a', '#c98a1e', '#2e4f9a'][seed % 4], '#efe6d2', 8), key: 'awning' + seed % 4, side: THREE.DoubleSide });
  b.put(wood, slab(2.6, 0.16, 1.4, 0, 0.9, 0), slab(2.6, 0.5, 0.06, 0, 0.42, 0.7)); for (const [x, z] of [[-1, 0.72], [1, 0.72], [-1, -0.72], [1, -0.72]]) b.put(iron, plain(new THREE.CylinderGeometry(0.34, 0.34, 0.06, 10)).rotateX(Math.PI / 2).translate(x, 0.34, z));
  for (const [x, z] of [[-1.25, 0.66], [1.25, 0.66], [-1.25, -0.66], [1.25, -0.66]]) b.put(iron, rod([x, 1, z], [x, 2.7, z], 0.03, 4));
  const top = new THREE.PlaneGeometry(3.1, 1.2); top.rotateX(-Math.PI / 2 + 0.28).translate(0, 2.78, 0.42); const back = new THREE.PlaneGeometry(3.1, 1.2); back.rotateX(-Math.PI / 2 - 0.28).translate(0, 2.78, -0.42); b.put(awn, top, back);
  for (let i = 0; i < 5; i++) b.put(steel, drum(0.16 + r() * 0.1, 0.16 + r() * 0.2, -1 + i * 0.5, 1.06, (r() - 0.5) * 0.7, 8)); b.put(steel, drum(0.3, 0.1, 0.9, 1.06, 0.2, 10));
  b.put(lit(2.2, 1.7, 0.9), ball(0.11, 0, 2.3, 0.2, 6)); b.light(0, 2.3, 0.2, WARM, 1.1, 3.4, 2.6);
  return b;
}
function auto() {                                           // the three-wheeler: green below, yellow above
  const b = new Builder(), green = painted({ tint: 0x2f7a4a }), yellow = painted({ tint: 0xe2b23a }), black = painted({ tint: 0x1c1d22 });
  b.put(green, slab(1.3, 0.75, 2.2, 0, 0.3, 0)); b.put(yellow, slab(1.3, 0.12, 2.3, 0, 1.75, -0.05), slab(1.2, 0.7, 0.08, 0, 1.05, -1.1)); b.put(black, slab(1.22, 0.7, 1.2, 0, 1.05, -0.45), slab(0.5, 0.5, 0.5, 0, 0.5, 1.2));
  for (const [x, z] of [[0, 1.35], [-0.62, -0.75], [0.62, -0.75]]) b.put(black, plain(new THREE.CylinderGeometry(0.26, 0.26, 0.14, 10)).rotateZ(Math.PI / 2).translate(x, 0.26, z));
  for (const x of [-0.6, 0.6]) b.put(black, rod([x, 1.05, 0.2], [x, 1.75, 0.5], 0.03, 4)); b.put(lit(2, 1.8, 1.3), ball(0.09, 0, 0.9, 1.46, 6));
  return b;
}
function stagePart() {                                      // a landing stage: planks on posts, a rope rail, two lamps at the end, a few crates
  const b = new Builder(), wood = painted({ map: stripes('#8a6a4c', '#73573d', 10), key: 'planks' }), post = painted({ tint: 0x4a4038 }), rope = painted({ tint: 0xb9a57c });
  const deck = new THREE.BoxGeometry(5.4, 0.36, 21); const uv = deck.attributes.uv, p = deck.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getZ(i) / 3.2, p.getX(i) / 5.4); b.put(wood, deck.translate(0, 1.22, 10.5));
  for (let z = 1.5; z <= 20; z += 3.7) for (const x of [-2.5, 2.5]) { b.put(post, drum(0.22, 3.6, x, -1.4, z, 6)); if (z > 2) b.put(rope, rod([x, 2.1, z - 3.7], [x, 2.1, z], 0.035, 3)); }
  for (const x of [-2.5, 2.5]) { b.put(post, rod([x, 1.4, 20.2], [x, 5.2, 20.2], 0.07, 5)); b.put(lit(1.9, 1.45, 0.85), ball(0.3, x, 5.4, 20.2, 8)); b.light(x, 5.4, 20.2, LAMP, 0.85, 5.6, 3.6); }
  b.put(post, slab(1, 0.8, 1, 1.4, 1.4, 3), slab(0.8, 0.7, 0.8, 1.6, 1.4, 4.2), slab(0.7, 0.6, 0.7, 1.5, 2.2, 3.1)); b.put(rope, plain(new THREE.TorusGeometry(0.45, 0.12, 5, 10)).rotateX(Math.PI / 2).translate(-1.6, 1.52, 5));
  return b;
}

export function shore(stageAngles) {
  const w = new Builder(), r = rng(21);
  const walk = painted({ tint: 0x8d8478 }), kerb = painted({ tint: 0xb3a892 }), dark = painted({ tint: 0x55504a, side: THREE.DoubleSide }), iron = painted({ tint: 0x30323a }), asphalt = painted({ tint: 0x33343c }), green = painted({ tint: 0x1c3324 }), step = painted({ tint: 0x9d9382, side: THREE.DoubleSide });
  w.put(walk, ring(R + 0.6, R + 16, 1.7, 0, 360, 240)); w.put(kerb, ring(R - 0.6, R + 0.6, 1.96, 0, 360, 240), ring(R + 15.6, R + 16.4, 1.86, 0, 360, 240)); w.put(dark, curtain(R - 0.6, -1.2, 3.2, 0, 360, 240));
  w.put(asphalt, ring(R + 16.4, R + 27, 1.6, 0, 360, 240)); w.put(kerb, ring(R + 27, R + 28, 1.78, 0, 360, 240)); w.put(green, ring(R + 28, 960, 1.5, 0, 360, 96));
  // the rail along the water, two bars on posts
  for (let a = 0; a < 360; a += 2) { const p = at(a, R + 0.2); w.put(iron, slab(0.13, 1.15, 0.13, p.x, 1.96, p.z)); }
  for (const y of [2.55, 3.05]) w.put(iron, plain(new THREE.TorusGeometry(R + 0.2, 0.045, 4, 360)).rotateX(Math.PI / 2).translate(0, y, 0));
  // the children's train has its track at the back of the walk, all the way round the lake
  const sleeper = painted({ tint: 0x4a3a2c }); for (let i = 0; i < 660; i++) { const a = i / 660 * 360, p = at(a, R + 14.9); w.put(sleeper, plain(new THREE.BoxGeometry(0.3, 0.1, 1.5)).rotateY(a * DEG).translate(p.x, 1.74, p.z)); }
  for (const d of [14.4, 15.4]) w.put(iron, plain(new THREE.TorusGeometry(R + d, 0.05, 4, 360)).rotateX(Math.PI / 2).translate(0, 1.84, 0));
  // ghats: broad steps down into the water, between the landing stages
  for (const a of [114, 66, 41, -27, 144, 180, 222, 318, 250, 292]) for (let k = 0; k < 7; k++) { w.put(step, ring(R - 0.6 - (k + 1) * 1.05, R - 0.6 - k * 1.05, 1.7 - (k + 1) * 0.32, a - 4.2, 8.4, 240), curtain(R - 0.6 - (k + 1) * 1.05, 1.7 - (k + 2) * 0.32, 0.32, a - 4.2, 8.4, 240)); }
  // lamp posts and benches all the way round; taller plain lamps along the road
  const post = lampPost(), seat = bench(), toCentre = a => Math.atan2(-Math.cos(a * DEG), Math.sin(a * DEG));
  for (let a = 3; a < 360; a += 7.5) { const p = at(a, R + 3.2); w.stamp(post, p.x, p.z, toCentre(a) + Math.PI / 2, 1, 1.7); const q = at(a + 3.75, R + 2.6); w.stamp(seat, q.x, q.z, toCentre(a + 3.75), 1, 1.7); }
  for (let a = 0; a < 360; a += 10) { const p = at(a, R + 27.6), q = at(a, R + 25.2); w.put(iron, rod([p.x, 1.7, p.z], [p.x, 8.2, p.z], 0.1, 5), rod([p.x, 8.2, p.z], [q.x, 8.5, q.z], 0.07, 4)); w.put(lit(1.5, 1.7, 1.9), ball(0.26, q.x, 8.4, q.z, 6)); w.light(q.x, 8.3, q.z, COOL, 0.75, 8.5, 4.4); }
  // trees: a row at the back of the walk, groves beyond the road, palms by the ghats; low and sparse along the south
  const kinds = [tree(1), tree(2), tree(3), tree(4, 1.35)], palms = [palm(1), palm(2), palm(3)];
  for (let a = 1.5; a < 360; a += 5) { if (south(a) && r() < 0.6) continue; const p = at(a + r() * 2, R + 12.2 + r() * 1.2); w.stamp(kinds[(r() * 3) | 0], p.x, p.z, r() * 6.28, south(a) ? 0.62 : 0.8 + r() * 0.3, 1.7); }
  for (let i = 0; i < 520; i++) { const a = r() * 360, d = R + 32 + r() * r() * 300, p = at(a, d); if (south(a) || !free(p.x, p.z, 8)) continue; w.stamp(kinds[(r() * 4) | 0], p.x, p.z, r() * 6.28, 0.9 + r() * 0.7, 1.5); }
  for (const a of [118, 110, 70, 62, 45, 37, -23, -31, 148, 140, 184, 176]) { const p = at(a, R + 8 + r() * 4); w.stamp(palms[(r() * 3) | 0], p.x, p.z, r() * 6.28, 1, 1.7); }
  // the evening on the walk: food carts in clusters with people round them, autos at the kerb, strings of bulbs overhead
  const carts = [0, 1, 2, 3, 4, 5].map(cart), folk = Array.from({ length: 14 }, (_, i) => person(i + 1)), rick = auto();
  const crowd = (deg, d, n, spread) => { for (let i = 0; i < n; i++) { const a = deg + (r() - 0.5) * spread, p = at(a, d + (r() - 0.5) * 5); w.stamp(folk[(r() * 14) | 0], p.x, p.z, r() * 6.28, 0.92 + r() * 0.2, 1.7); } };
  for (const [from, to, gap] of [[212, 332, 9.5], [-12, 34, 11], [136, 196, 12], [50, 130, 13]]) for (let a = from; a <= to; a += gap) {
    const p = at(a + r() * 2, R + 11.5); w.stamp(carts[(r() * 6) | 0], p.x, p.z, toCentre(a), 1.15, 1.7); crowd(a, R + 8.6, 4 + (r() * 4 | 0), 3.4);
    if (r() < 0.7) { const q = at(a + 3.5, R + 18.2); w.stamp(rick, q.x, q.z, toCentre(a) + Math.PI / 2, 1.2, 1.6); }
  }
  for (let a = 0; a < 360; a += 3.1) if (r() < 0.75) crowd(a, R + 5 + r() * 6, 1 + (r() * 2 | 0), 2);                          // people strolling
  for (const [from, to] of [[214, 330], [-10, 32], [140, 192]]) for (let a = from; a < to; a += 7.5) {                           // bulbs strung from post to post
    for (let i = 1; i < 12; i++) { const t = i / 12, p = at(a + 3 + t * 7.5, R + 3.2), sag = Math.sin(t * Math.PI) * 1.1; w.spark(p.x, 7.2 - sag, p.z, [WARM, WARM, ROSE, TEAL, LAMP][i % 5], 1.5, 1); }
  }
  // the landing stages
  const st = stagePart(); for (const a of stageAngles) { const p = at(a, R + 0.6); w.stamp(st, p.x, p.z, toCentre(a), 1, 0); }
  return w;
}
