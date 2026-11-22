// What is on the water: the island with the statue, lamps floating, a fountain, pedal boats, and the boat you sail.
import * as THREE from 'three';
import { Builder, painted, lit, box, slab, drum, ball, cone, rod, plain, spot, stripes, leafy, clump, shade, shadeMat, rng, at, R, WARM, LAMP, COOL, TEAL, ROSE } from './kit.js';
import { masonry, band, rect, cornice } from './mason.js';
import { person } from './shore.js';

export function island() {
  const b = new Builder(), stone = painted({ tint: 0x8c8378 }), red = painted({ tint: 0xb4563e }), redDark = painted({ tint: 0x8e4030 }), post = painted({ tint: 0xc9b9a0 }), iron = painted({ tint: 0x30323a }), G = lit(1.9, 1.4, 0.8), saffron = lit(1.7, 0.7, 0.15);
  b.put(stone, box(58, 1, 22, 0, 3.2, 0), box(62, 0.5, 26, 0, 4.2, 0));
  for (let x = -26; x <= 26; x += 6.5) for (const z of [-9, 9]) b.put(stone, drum(0.55, 3.4, x, -0.2, z, 8));
  for (let i = 0; i < 7; i++) b.put(stone, slab(14 - i * 0.2, 4.8 - i * 0.55, 1.2, 0, -0.6, 11.6 + i * 1.2));                    // steps down to the water
  for (let x = -30.5; x <= 30.5; x += 1.9) for (const z of [-12.6, 12.6]) if (Math.abs(x) > 7.5 || z < 0) b.put(iron, slab(0.12, 1.1, 0.12, x, 4.7, z));   // the rail round the deck
  for (let z = -12.6; z <= 12.6; z += 1.8) for (const x of [-30.5, 30.5]) b.put(iron, slab(0.12, 1.1, 0.12, x, 4.7, z));
  for (const z of [-12.6, 12.6]) b.put(iron, slab(61, 0.07, 0.07, 0, 5.75, z)); for (const x of [-30.5, 30.5]) b.put(iron, slab(0.07, 0.07, 25.2, x, 5.75, 0));
  // the pedestal, in grey granite as it has stood since the statue was gilded: a broad block with a plaque on its face, a narrower one above,
  // each under a moulded cap, and a line of light under the upper cap
  const GR = masonry('granite', { stone: [112, 116, 124], course: 0.9, block: 1.5, rows: 4, cols: 2, joint: 0.78, vary: 0.08, grime: 0.08 }), GT = GR.userData.tile, capM = painted({ tint: 0x7c8088 }), gilt = painted({ tint: 0xc09a44 });
  b.put(GR, band([[0.55, 0], [0.55, 0.5], [0.22, 0.72], [0.22, 0.95], [0, 0.95], [0, 5.3]], rect(11.8, 11.8), 4.7, { tile: GT }), band([[0, 0], [0, 5.0]], rect(9.2, 9.2), 10.9, { tile: GT }));
  b.put(capM, cornice(rect(11.8, 11.8), 10.0, 0.45, 0.6), slab(11.2, 0.3, 11.2, 0, 10.6, 0), cornice(rect(9.2, 9.2), 15.9, 0.55, 0.55), slab(10.3, 0.25, 10.3, 0, 16.45, 0));
  for (const [fx, fz] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) { const t = Math.atan2(fx, fz), at = (g, d) => g.rotateY(t).translate(fx * d, 0, fz * d);
    b.put(capM, at(slab(4.4, 2.7, 0.14, 0, 6.5, 0), 5.9), at(slab(6.4, 3.0, 0.1, 0, 11.8, 0), 4.6)); b.put(gilt, at(slab(3.8, 2.1, 0.06, 0, 6.8, 0), 5.99));       // the plaque, and a sunk panel above it
    b.put(lit(1.9, 1.5, 0.9), at(slab(8.8, 0.1, 0.08, 0, 15.72, 0), 4.66)); }
  b.light(0, 14.6, 7, LAMP, 0.3, 4).light(0, 14.6, -7, LAMP, 0.2, 4).light(7, 14.6, 0, LAMP, 0.2, 4).light(-7, 14.6, 0, LAMP, 0.2, 4);
  for (const [x, z] of [[-24, 8], [24, 8], [-24, -8], [24, -8], [-12, 10.5], [12, 10.5]]) { b.put(post, drum(0.5, 5.2, x, 4.7, z, 8), drum(0.8, 0.3, x, 9.8, z, 8)); b.put(G, ball(0.4, x, 10.5, z, 10)); b.light(x, 10.6, z, LAMP, 0.9, 7, 4.6); }
  for (const x of [-28, 28]) { b.put(iron, rod([x, 4.7, -10], [x, 13.5, -10], 0.07, 4)); b.put(saffron, slab(2.6, 1.5, 0.06, x + 1.35, 11.9, -10)); }
  for (const x of [-52, 52]) for (const z of [26, -22]) {                                                                      // the lamp pillars that stand in the water round it, tier on tier
    for (let i = 0; i < 4; i++) { b.put(post, drum(1.9 - i * 0.3, 0.5, x, 2.2 + i * 2.6, z, 10)); for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3; b.spark(x + Math.cos(a) * (1.9 - i * 0.3), 2.9 + i * 2.6, z + Math.sin(a) * (1.9 - i * 0.3), WARM, 1.3, 1); } }
    b.put(post, drum(0.55, 11, x, 0, z, 8)); b.put(G, ball(0.5, x, 11.5, z, 10)); b.light(x, 11.6, z, LAMP, 0.9, 7, 5);
  }
  b.light(0, 6, 15, WARM, 0.7, 11).light(-11, 5, 12, WARM, 0.5, 8).light(11, 5, 12, WARM, 0.5, 8);
  const cream = painted({ tint: 0xd9c6a2 }), marble = painted({ tint: 0xe8e4da });
  // Nandi, the bull, sits facing the god, as he does before every Shiva
  b.put(cream, slab(2.2, 0.7, 3.4, 0, 4.7, 10)); b.put(marble, plain(new THREE.SphereGeometry(1, 10, 8)).scale(0.72, 0.6, 1.25).translate(0, 6.0, 10.1), ball(0.4, 0, 6.55, 9.75, 8), ball(0.42, 0, 6.5, 8.75, 8), plain(new THREE.SphereGeometry(1, 8, 6)).scale(0.26, 0.24, 0.42).translate(0, 6.3, 8.35), cone(0.07, 0.3, -0.22, 6.82, 8.8, 5), cone(0.07, 0.3, 0.22, 6.82, 8.8, 5));
  for (const [x, z, t] of [[-20, 9.5, 0.9], [20, 9.5, -0.9], [-21, -8, 2.2], [21, -8, -2.2]]) { const m = new THREE.Matrix4().makeRotationY(t).setPosition(x, 0, z), put = (mat, g) => b.put(mat, g.applyMatrix4(m));
    put(cream, slab(2.0, 0.6, 3.1, 0, 4.7, 0)); put(marble, plain(new THREE.SphereGeometry(1, 10, 8)).scale(0.66, 0.55, 1.15).translate(0, 5.85, 0.1)); put(marble, ball(0.38, 0, 6.35, -1.2, 8)); put(marble, plain(new THREE.SphereGeometry(1, 8, 6)).scale(0.24, 0.22, 0.4).translate(0, 6.15, -1.6)); put(marble, ball(0.36, 0, 6.4, -0.3, 8)); }
  b.light(0, 7.4, 11.4, WARM, 0.6, 3.2);
  // two lamp towers on the deck, tier on tier of small flames
  for (const x of [-13.5, 13.5]) { b.put(post, drum(0.7, 0.5, x, 4.7, 9.6, 8), drum(0.42, 7.4, x, 5.2, 9.6, 8, null, 0.26)); b.put(G, ball(0.36, x, 12.9, 9.6, 8)); for (let i = 0; i < 6; i++) { const rr = 0.95 - i * 0.1, y = 6 + i * 1.1; b.put(post, drum(rr, 0.12, x, y, 9.6, 8)); for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3 + i * 0.5; b.spark(x + Math.cos(a) * rr, y + 0.3, 9.6 + Math.sin(a) * rr, WARM, 1.0, 1); } } b.light(x, 9, 9.6, WARM, 0.6, 5); }
  // plants in pots along the rail, people come over to see the statue, and the dark where the plinth meets the deck
  const leaf = leafy([52, 108, 66], 'b'), pot = painted({ tint: 0xa5553a }), folk = Array.from({ length: 8 }, (_, i) => person(i + 51)), q = rng(14);
  for (let x = -27; x <= 27; x += 4.5) for (const z of [-11.4, 11.4]) if (Math.abs(x) > 8 || z < 0) { b.put(pot, drum(0.4, 0.6, x, 4.7, z, 7, null, 0.5)); b.put(leaf, clump(0.62, x, 5.9, z, x, 1)); }
  for (let i = 0; i < 16; i++) { const x = (q() - 0.5) * 54, z = (q() < 0.7 ? 1 : -1) * (9.8 + q() * 1.2); if (Math.abs(x) < 2.6) continue; b.stamp(folk[(q() * 8) | 0], x, z, q() * 6.28, 1, 4.7); }
  b.put(shadeMat(), shade(10.5, 10.5, 0, 4.7, 0));
  return b;
}
// Lamps set afloat, drifting; and the fountain.
export function afloat(stageAngles) {
  const b = new Builder(), r = rng(77), stone = painted({ tint: 0x8c8378 });
  for (let i = 0; i < 150; i++) { const a = r() * 6.28, d = 52 + r() * 80; b.spark(Math.cos(a) * d, 0.35, Math.sin(a) * d, WARM, 1.25, 3); }                         // scattered over the lake
  for (const deg of stageAngles.concat([114, 66, 41, -27, 144, 180])) for (let i = 0; i < 12; i++) { const p = at(deg + (r() - 0.5) * 8, R - 8 - r() * 16); b.spark(p.x, 0.35, p.z, WARM, 1.35, 3); }   // gathered off the steps
  for (let i = 0; i < 46; i++) { const a = r() * 6.28, d = 36 + r() * 12; b.spark(Math.cos(a) * d * 1.3, 0.35, Math.sin(a) * d, WARM, 1.3, 3); }                      // round the island
  const fx = -78, fz = -46; b.put(stone, drum(1.2, 1.4, fx, 0, fz, 10));                                                               // the fountain: a ring of jets and one tall one
  for (let j = 0; j < 10; j++) { const a = j / 10 * 6.28; for (let i = 0; i < 9; i++) { const t = i / 8, d = 6 - t * 5.2; b.spark(fx + Math.cos(a) * d, 0.6 + Math.sin(t * Math.PI * 0.62) * 7.5, fz + Math.sin(a) * d, [COOL, TEAL, ROSE][j % 3], 1.6, 1); } }
  for (let i = 0; i < 16; i++) b.spark(fx + (r() - 0.5) * 0.6, 1.5 + i * 0.95, fz + (r() - 0.5) * 0.6, COOL, 1.9, 1);
  b.light(fx, 2, fz, TEAL, 0.9, 8);
  return b;
}

// Pedal boats out on the lake, each going its slow round.
export function pedalBoats(scene) {
  const out = [], halo = spot(64);
  [[0xd94b3a, 86, 44, 0.05, 0.3], [0x3a8fd9, -64, 78, -0.04, 2.1], [0xe2b23a, 30, -84, 0.045, 4.0], [0x49b07a, -98, -8, -0.05, 5.2], [0xe8e2d2, 100, -52, 0.04, 1.2]].forEach(([colour, cx, cz, speed, phase]) => {
    const g = new THREE.Group(), body = new THREE.MeshBasicMaterial({ color: new THREE.Color(colour).multiplyScalar(0.55) }), roof = new THREE.MeshBasicMaterial({ color: new THREE.Color(colour).multiplyScalar(0.85) });
    const hull = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2).scale(1.3, 0.8, 2.2), body); hull.position.y = 0.7; g.add(hull);
    const top = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.14, 2.8), roof); top.position.y = 2.5; g.add(top); for (const [x, z] of [[-1, -1.2], [1, -1.2], [-1, 1.2], [1, 1.2]]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.8), body); p.position.set(x, 1.6, z); g.add(p); }
    const lamp = new THREE.Sprite(new THREE.SpriteMaterial({ map: halo, color: 0xffc070, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); lamp.scale.set(5, 5, 1); lamp.position.set(0, 2.2, 0); g.add(lamp);
    g.scale.setScalar(1.5); scene.add(g); out.push({ g, cx, cz, speed, phase, rx: 16 + Math.abs(cx) * 0.1, rz: 11 });
  });
  return out;
}

/* The boat you sail: a wooden boat with a striped canopy, a lantern at the bow and another at the stern. */
export function boat() {
  const g = new THREE.Group(), planks = stripes('#1f7480', '#185e68', 12, false), hull = new THREE.MeshBasicMaterial({ map: planks, color: 0xc8c8c8 }), trim = new THREE.MeshBasicMaterial({ color: 0xb98a4e }), dark = new THREE.MeshBasicMaterial({ color: 0x3d2817 });
  const glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.0, 2.0, 0.9) }), cloth = new THREE.MeshBasicMaterial({ map: stripes('#b33a2e', '#efe6d2', 8), color: 0x9c9c9c, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2).scale(1.75, 1.15, 5.4), hull); body.position.y = 1.0; g.add(body);
  const deck = new THREE.Mesh(new THREE.CircleGeometry(1, 24).rotateX(-Math.PI / 2).scale(1.62, 1, 5.2), dark); deck.position.y = 0.86; g.add(deck);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1, 0.07, 6, 40).rotateX(Math.PI / 2).scale(1.75, 1, 5.4), trim); rim.position.y = 1.02; g.add(rim);
  for (const z of [-2.6, -0.6, 1.6, 3.2]) { const seat = new THREE.Mesh(new THREE.BoxGeometry(3.3 - Math.abs(z) * 0.32, 0.14, 0.6), trim); seat.position.set(0, 0.98, z); g.add(seat); }
  const canopy = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 3.6, 14, 1, true, -Math.PI / 2, Math.PI).rotateX(Math.PI / 2).rotateZ(Math.PI / 2), cloth); canopy.position.set(0, 1.5, 0.4); canopy.scale.set(1, 0.9, 1); g.add(canopy);
  for (const [x, z] of [[-1.5, -1.4], [1.5, -1.4], [-1.5, 2.2], [1.5, 2.2]]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.6), trim); p.position.set(x, 1.8, z); g.add(p); }
  for (const s of [-1, 1]) { const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 4.4), trim); oar.position.set(s * 2.6, 1.0, -0.8); oar.rotation.set(0.25, 0, s * 1.15); g.add(oar); const blade = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 1), trim); blade.position.set(s * 4.5, 0.2, -1.3); g.add(blade); }
  const lights = [];
  for (const [z, y, size] of [[5.0, 3.4, 4.2], [-4.8, 4.2, 5]]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, y - 0.9), trim); pole.position.set(0, 0.9 + (y - 0.9) / 2, z); g.add(pole);
    const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.74, 0.56), glow); lantern.position.set(0, y + 0.3, z); g.add(lantern); const cap = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.36, 4).rotateY(Math.PI / 4), dark); cap.position.set(0, y + 0.86, z); g.add(cap);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: spot(), color: 0xffb860, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6 })); halo.scale.set(size, size, 1); halo.position.copy(lantern.position); g.add(halo); lights.push(halo);
  }
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.8), new THREE.MeshBasicMaterial({ color: 0xdeed58, side: THREE.DoubleSide })); flag.position.set(0.8, 5.6, -4.8); g.add(flag); const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.4), trim); staff.position.set(0, 5.4, -4.8); g.add(staff);
  const pool = new THREE.Mesh(new THREE.CircleGeometry(12, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: spot(), color: 0xffa040, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.13, depthWrite: false })); pool.position.set(0, 0.12, 0); g.add(pool);
  g.scale.setScalar(1.7); g.userData = { lights, flag }; return g;
}
