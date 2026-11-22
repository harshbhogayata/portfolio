// The other places gathered on the banks. Each is built facing south at the origin; main.js sets it down and turns it.
import * as THREE from 'three';
import { Builder, painted, lit, wall, box, slab, drum, dome, chhatri, arch, ball, cone, rod, plain, facade, leafy, clump, shade, shadeMat, sprays, crown, ribbed, turned, pitched, hipped, fromPhoto, rng, WARM, LAMP, COOL } from './kit.js';

const gold = () => lit(1.9, 1.35, 0.42), globe = () => lit(1.8, 1.4, 0.8);

/* The clock tower at Raopura, in brick, over a low arcaded market. */
export function clockTower() {
  const tile = facade({ cols: 6, rows: 1, lit: 0.5, seed: 31, stone: [170, 96, 74], shadow: [34, 22, 18], opening: 0.56 }), T = { u: 6 * 3, v: 6 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.5, key: 'clock' }), D = painted({ tint: 0xe2d2b4 }), brick = painted({ tint: 0xb06a52 }), roof = painted({ tint: 0x6f4a40 }), b = new Builder();
  b.put(S, wall(34, 6, 14, 0, 0, -7, T)); b.put(D, box(35, 0.5, 15, 0, 6, -7)); b.put(roof, slab(33, 1.6, 13, 0, 6.5, -7));
  let y = 0; for (const [w, h] of [[8, 16], [7.2, 8], [6.4, 6]]) { b.put(brick, box(w, h, w, 0, y, -7)); b.put(D, box(w + 1.4, 0.6, w + 1.4, 0, y + h, -7)); for (const s of [-1, 1]) b.put(D, slab(0.5, h, 0.5, s * (w / 2 - 0.1), y, -7 + w / 2 - 0.1)); y += h + 0.6; }
  for (const [nx, nz, turn] of [[0, 1, 0], [1, 0, Math.PI / 2], [-1, 0, -Math.PI / 2]]) {                                     // a lit clock on three sides
    const face = plain(new THREE.CircleGeometry(2.1, 24)).rotateY(turn).translate(nx * 3.25, 27.8, -7 + nz * 3.25); b.put(lit(1.7, 1.5, 1.1), face);
    b.put(roof, slab(0.14, 1.5, 0.14, nx * 3.3, 27.8, -7 + nz * 3.3), plain(new THREE.BoxGeometry(1.1, 0.14, 0.14)).rotateY(turn).translate(nx * 3.3 + (nz ? 0.45 : 0), 27.9, -7 + nz * 3.3 + (nx ? -nx * 0.45 : 0)));
  }
  b.put(roof, cone(5, 6.4, 0, y, -7, 4)); b.put(gold(), ball(0.4, 0, y + 6.7, -7, 8)); b.put(D, rod([0, y + 6.6, -7], [0, y + 9.4, -7], 0.06));
  for (const x of [-12, 0, 12]) b.light(x, 0.6, 9, LAMP, 0.34, 11);
  b.light(0, 14, 6, WARM, 0.5, 11).light(0, 26, 5, LAMP, 0.5, 8).light(0, 3, 1.5, LAMP, 0.6, 7, 2.2);
  return b;
}

/* EME Temple: an aluminium geodesic dome over a low hall, lit cool where everything else is warm. */
export function emeTemple() {
  const D = painted({ tint: 0xd5dae2 }), metal = painted({ tint: 0xb9c6d6 }), b = new Builder();
  b.put(D, box(30, 1.2, 30, 0, 0, -15), box(24, 5.4, 24, 0, 1.2, -15), box(26, 0.5, 26, 0, 6.6, -15));
  const g = new THREE.IcosahedronGeometry(10, 2), p = g.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) < 0) p.setY(i, 0); g.computeVertexNormals(); plain(g);   // half a faceted sphere
  const flat = g.toNonIndexed(); flat.computeVertexNormals(); b.put(metal, flat.scale(1, 0.92, 1).translate(0, 7.1, -15)); b.put(gold(), ball(0.55, 0, 16.9, -15, 8), cone(0.3, 1.6, 0, 16.9, -15, 6));
  for (let i = 0; i < 4; i++) b.put(D, slab(8 - i * 0.4, 0.3, 1, 0, 0.9 - i * 0.3, 0.6 + i)); b.put(lit(0.9, 1.1, 1.4), arch(3.2, 4.4, 0, 1.2, -2.94));
  for (const [x, z] of [[-13, -2], [13, -2], [-13, -28], [13, -28]]) { b.put(D, drum(0.25, 4.6, x, 1.2, z, 6)); b.put(lit(1.2, 1.5, 1.9), ball(0.4, x, 6.2, z, 8)); b.light(x, 6.2, z, COOL, 0.9, 6, 2.6); }
  for (const x of [-9, 0, 9]) b.light(x, 0.8, 4, COOL, 0.5, 12);
  b.light(0, 12, 2, COOL, 0.8, 11).light(-12, 9, -15, COOL, 0.4, 9).light(12, 9, -15, COOL, 0.4, 9);
  return b;
}

/* Kala Ghoda, the black horse: Sayajirao on horseback, on a tall plinth, with a rail and lamps round it. */
export function kalaGhoda() {
  const stone = painted({ tint: 0xb7a78c }), bronze = painted({ tint: 0x33312e }), iron = painted({ tint: 0x33353d }), b = new Builder();
  b.put(stone, box(7, 0.6, 10, 0, 0, 0), slab(3.6, 5, 6.6, 0, 0.6, 0), slab(4.4, 0.5, 7.4, 0, 5.6, 0), slab(3.2, 0.5, 6, 0, 6.1, 0));
  const y = 6.6, part = g => b.put(bronze, g);
  part(plain(new THREE.SphereGeometry(1, 12, 10)).scale(0.95, 1.05, 2.3).translate(0, y + 3.2, 0));                          // the horse: body, neck, head, legs, tail
  part(rod([0, y + 3.7, 1.7], [0, y + 5.5, 2.8], 0.55, 8)); part(plain(new THREE.SphereGeometry(0.5, 8, 6)).scale(0.8, 0.85, 1.5).translate(0, y + 5.7, 3.4));
  for (const [x, z, lift] of [[-0.55, 1.5, 0.7], [0.55, 1.5, 0], [-0.55, -1.6, 0], [0.55, -1.6, 0]]) { part(rod([x, y + 2.6, z], [x, y + 1.3 + lift, z + (lift ? 0.7 : 0.1)], 0.24, 6)); part(rod([x, y + 1.3 + lift, z + (lift ? 0.7 : 0.1)], [x, y + lift * 1.2, z + (lift ? 0.3 : 0)], 0.19, 6)); }
  part(rod([0, y + 3.6, -2.1], [0, y + 1.9, -2.9], 0.2, 6));
  part(rod([0, y + 4, 0.1], [0, y + 5.9, 0], 0.5, 8)); part(ball(0.42, 0, y + 6.5, 0.05, 8)); part(plain(new THREE.SphereGeometry(0.5, 8, 6)).scale(1, 0.5, 1).translate(0, y + 6.85, 0));   // the rider, and his turban
  part(rod([-0.5, y + 5.5, 0.1], [-0.6, y + 4.4, 1.2], 0.15, 5)); part(rod([0.5, y + 5.5, 0.1], [0.6, y + 4.4, 1.2], 0.15, 5));
  for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8, x = Math.cos(a) * 6.4, z = Math.sin(a) * 6.4; b.put(iron, slab(0.12, 1.1, 0.12, x, 0.6, z)); }
  b.put(iron, plain(new THREE.TorusGeometry(6.4, 0.05, 4, 32)).rotateX(Math.PI / 2).translate(0, 1.7, 0));
  for (const [x, z] of [[-4.6, 6], [4.6, 6], [-4.6, -6], [4.6, -6]]) { b.put(iron, slab(0.14, 3.4, 0.14, x, 0.6, z)); b.put(globe(), ball(0.3, x, 4.2, z, 8)); b.light(x, 4.2, z, LAMP, 0.7, 5, 2); }
  b.light(0, 2, 8, WARM, 0.7, 8).light(0, 2, -8, WARM, 0.4, 8);
  return b;
}

/* A banyan, the tree the city is named for: many trunks, roots hanging from the boughs, a stone seat round the foot, lanterns in the branches. */
export function banyan(seed = 4) {
  const bark = painted({ tint: 0x6a5846 }), leaf = leafy([30, 70, 46], 'in'), leaf2 = leaf, stone = painted({ tint: 0xa09684 }), b = new Builder(), r = rng(seed);
  b.put(stone, drum(8.5, 1.1, 0, 0, 0, 20), drum(9.3, 0.3, 0, 1.1, 0, 20));
  for (let i = 0; i < 7; i++) { const a = r() * 6.28, d = i ? 1.2 + r() * 3 : 0, x = Math.cos(a) * d, z = Math.sin(a) * d; b.put(bark, rod([x, 1.2, z], [x * 1.9 + (r() - 0.5) * 2, 11 + r() * 3, z * 1.9 + (r() - 0.5) * 2], i ? 0.5 + r() * 0.5 : 1.3, 7)); }
  for (let i = 0; i < 9; i++) { const a = i / 9 * 6.28 + r(), d = 9 + r() * 9; b.put(bark, rod([Math.cos(a) * 2, 10, Math.sin(a) * 2], [Math.cos(a) * d, 11.5 + r() * 3, Math.sin(a) * d], 0.34, 5)); }      // boughs
  for (let i = 0; i < 9; i++) { const a = r() * 6.28, d = 3 + r() * 11; b.put(leaf, clump(4.6 + r() * 2, Math.cos(a) * d, 14.5 + r() * 3, Math.sin(a) * d, i, 0.6, 3.4)); }   // the dark inside the head
  b.put(sprays([44, 100, 62], 'a'), crown(0, 16.6, 0, 20, 6.4, 20, 130, seed, 4.6)); b.put(sprays([58, 116, 70], 'b'), crown(0, 17.6, 0, 15, 5.4, 15, 60, seed + 3, 4.2)); b.put(shadeMat(), shade(24, 24, 0, 0, 0));
  for (let i = 0; i < 46; i++) { const a = r() * 6.28, d = 5 + r() * 13, x = Math.cos(a) * d, z = Math.sin(a) * d, top = 11 + r() * 2; b.put(bark, rod([x, top, z], [x + (r() - 0.5) * 0.6, d > 9.5 ? 0 : 1.3 + r() * 5, z + (r() - 0.5) * 0.6], 0.05 + r() * 0.07, 4)); }   // roots hanging down
  for (let i = 0; i < 16; i++) { const a = r() * 6.28, d = 3 + r() * 13, x = Math.cos(a) * d, z = Math.sin(a) * d, y = 6.5 + r() * 3.5; b.put(bark, rod([x, y, z], [x, 11.5, z], 0.03, 3)); b.put(lit(2.0, 1.3, 0.5), ball(0.24, x, y, z, 6)); b.light(x, y, z, WARM, 0.5, 4.2, 1.9); }   // lanterns
  b.light(0, 2.4, 7, WARM, 0.5, 8).light(0, 2.4, -7, WARM, 0.4, 8);
  return b;
}

/* Sayaji Baug: the city's garden. A bandstand, the floral clock, and the track of the children's train that runs round it. */
export function sayajiBaug() {
  const lawn = painted({ tint: 0x2c5a3a }), path = painted({ tint: 0xb7a78c }), D = painted({ tint: 0xe2d8c2 }), iron = painted({ tint: 0x30323a }), sleeper = painted({ tint: 0x4a3a2c }), flower = [lit(1.6, 0.5, 0.6), lit(1.7, 1.3, 0.3), lit(1.0, 0.5, 1.5)], b = new Builder();
  b.put(lawn, drum(34, 0.3, 0, 0, 0, 40)); b.put(path, drum(27.2, 0.36, 0, 0, 0, 40)); b.put(lawn, drum(24.8, 0.42, 0, 0, 0, 40));
  for (let i = 0; i < 72; i++) { const a = i / 72 * 6.283; b.put(sleeper, plain(new THREE.BoxGeometry(2, 0.12, 0.34)).rotateY(-a).translate(Math.cos(a) * 26, 0.42, Math.sin(a) * 26)); }
  for (const rr of [25.4, 26.6]) b.put(iron, plain(new THREE.TorusGeometry(rr, 0.06, 4, 96)).rotateX(Math.PI / 2).translate(0, 0.52, 0));
  // the bandstand: eight posts, a rail, a domed roof
  b.put(D, drum(6.4, 1.1, 0, 0.4, 0, 8), drum(7.4, 0.4, 0, 6.2, 0, 8), dome(6.6, 3.4, 0, 6.6, 0, { seg: 16, swell: 0.02 })); b.put(lit(1.9, 1.35, 0.42), ball(0.34, 0, 11.4, 0, 8));
  for (let i = 0; i < 8; i++) { const a = (i + 0.5) * Math.PI / 4; b.put(D, drum(0.24, 4.7, Math.cos(a) * 5.6, 1.5, Math.sin(a) * 5.6, 8)); b.put(lit(1.8, 1.4, 0.8), ball(0.22, Math.cos(a) * 5.6, 5.6, Math.sin(a) * 5.6, 6)); }
  b.light(0, 5, 0, WARM, 1.1, 8, 3).light(0, 3, 9, WARM, 0.5, 8);
  // the floral clock: a bank of flowers with a dial laid out on it
  b.put(lawn, plain(new THREE.CylinderGeometry(6, 6, 0.5, 28)).rotateX(0.5).translate(0, 1.5, 15.5)); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; b.put(flower[i % 3], ball(0.34, Math.sin(a) * 4.8, 1.75 + Math.cos(a) * 2.3, 15.9 - Math.cos(a) * 4.2 + 4.1, 6)); }
  b.put(D, plain(new THREE.BoxGeometry(0.2, 0.1, 3.4)).rotateX(0.5).translate(0, 2.4, 14.4), plain(new THREE.BoxGeometry(2.4, 0.1, 0.2)).rotateX(0.5).translate(1.2, 1.8, 15.6)); b.light(0, 5, 20, LAMP, 0.9, 8, 3);
  for (let i = 0; i < 16; i++) { const a = i / 16 * 6.283, x = Math.cos(a) * 31, z = Math.sin(a) * 31; b.put(iron, rod([x, 0.3, z], [x, 4.6, z], 0.07, 4)); b.put(lit(1.8, 1.4, 0.8), ball(0.26, x, 4.8, z, 6)); b.light(x, 4.8, z, LAMP, 0.7, 5.5, 3.2); }
  return b;
}
// The train itself: an engine and three open coaches, strung with bulbs.
export function toyTrain() {
  const g = new THREE.Group(), cars = [];
  [[0xc0392b, 1], [0x2e7d5b, 0], [0xd9a021, 0], [0x2f5fa8, 0]].forEach(([colour, engine], i) => {
    const c = new THREE.Group(), body = new THREE.MeshBasicMaterial({ color: new THREE.Color(colour).multiplyScalar(0.7) }), roof = new THREE.MeshBasicMaterial({ color: 0xe8dcc0 }), black = new THREE.MeshBasicMaterial({ color: 0x15161a });
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.6, engine ? 1.5 : 0.9, 3.2), body); base.position.y = engine ? 1.25 : 0.95; c.add(base);
    if (engine) { const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 1.8, 10).rotateX(Math.PI / 2), body); boiler.position.set(0, 1.5, 1.9); c.add(boiler); const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.16, 0.9, 8), black); stack.position.set(0, 2.5, 2.3); c.add(stack);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2.6, 1.8) })); lamp.position.set(0, 1.6, 2.9); c.add(lamp); }
    else { const top = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.12, 3.3), roof); top.position.y = 2.6; c.add(top); for (const [x, z] of [[-0.75, -1.5], [0.75, -1.5], [-0.75, 1.5], [0.75, 1.5]]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.3, 0.08), roof); p.position.set(x, 2, z); c.add(p); }
      const glow = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 3), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.7, 0.8) })); glow.position.y = 2.5; c.add(glow); }
    for (const z of [-1, 1]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 1.8, 10).rotateZ(Math.PI / 2), black); w.position.set(0, 0.5, z); c.add(w); }
    g.add(c); cars.push(c);
  });
  return { g, cars };
}
