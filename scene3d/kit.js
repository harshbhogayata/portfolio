// The kit everything in the scene is made with: simple solids, the paint that carries their light, and pictures drawn in code.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const DEG = Math.PI / 180, R = 150;                 // R: the lake's radius in metres
export const at = (deg, r = R, y = 0) => new THREE.Vector3(Math.cos(deg * DEG) * r, y, -Math.sin(deg * DEG) * r);   // 90 is north, away from the camera
export function rng(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
export const WARM = new THREE.Color(1.0, 0.7, 0.36), LAMP = new THREE.Color(1.0, 0.8, 0.52), COOL = new THREE.Color(0.72, 0.84, 1.0), RED = new THREE.Color(1.0, 0.2, 0.12), TEAL = new THREE.Color(0.3, 1.0, 0.85), ROSE = new THREE.Color(1.0, 0.4, 0.6);
const UP = new THREE.Vector3(0, 1, 0);

/* ---------- paint: every solid carries its own light, worked out once when the page loads ---------- */
export const LAMPS = [], SPARKS = [];                      // lamps light the solids near them; sparks are the points of light you see
const white = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1); white.needsUpdate = true; white.colorSpace = THREE.SRGBColorSpace;
const black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); black.needsUpdate = true;
export const glowing = [];                                 // materials whose lit windows breathe a little
const made = new Map();
export function painted({ map = white, emissiveMap = black, glow = 1.5, tint = 0xffffff, side = THREE.FrontSide, key = null } = {}) {
  const id = key || (map === white && emissiveMap === black ? 'plain' + tint + side : null); if (id && made.has(id)) return made.get(id);
  const m = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { map: { value: null }, emissiveMap: { value: null }, glow: { value: glow }, tint: { value: new THREE.Color(tint) } }]),
    vertexShader: `varying vec3 vC; varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() { vC = color; vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,
    fragmentShader: `uniform sampler2D map; uniform sampler2D emissiveMap; uniform float glow; uniform vec3 tint; varying vec3 vC; varying vec2 vUv;
      #include <fog_pars_fragment>
      void main() { gl_FragColor = vec4(texture2D(map, vUv).rgb * tint * vC + texture2D(emissiveMap, vUv).rgb * glow, 1.0);
      #include <fog_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,
    vertexColors: true, fog: true, side,
  });
  m.uniforms.map.value = map; m.uniforms.emissiveMap.value = emissiveMap; m.userData.glow = glow;
  if (emissiveMap !== black) glowing.push(m);
  if (id) made.set(id, m);
  return m;
}
// A flat colour brighter than white reads as a light: lit doorways, lamp globes, signs.
const lights = new Map();
export function lit(r, g, b) { const k = r + ',' + g + ',' + b; if (!lights.has(k)) lights.set(k, new THREE.MeshBasicMaterial({ color: new THREE.Color(r, g, b) })); return lights.get(k); }

// Collects solids by material. Parts made once can be stamped down many times; in the end each material becomes one mesh.
export class Builder {
  constructor() { this.bins = new Map(); this.lights = []; this.sparks = []; }
  put(material, ...solids) { if (!this.bins.has(material)) this.bins.set(material, []); const list = this.bins.get(material); for (const s of solids.flat(3)) list.push(s); return this; }
  light(x, y, z, colour, power, reach, spark = 0) { this.lights.push({ x, y, z, colour, power, reach }); if (spark) this.spark(x, y, z, colour, spark); return this; }
  spark(x, y, z, colour, size, flicker = 0, drift = 0) { this.sparks.push({ x, y, z, colour, size, flicker, drift }); return this; }
  stamp(proto, x = 0, z = 0, turn = 0, s = 1, y = 0) {
    const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(UP, turn), new THREE.Vector3(s, s, s)), v = new THREE.Vector3();
    for (const [mat, list] of proto.bins) this.put(mat, list.map(g => g.clone().applyMatrix4(m)));
    for (const l of proto.lights) { v.set(l.x, l.y, l.z).applyMatrix4(m); this.lights.push({ ...l, x: v.x, y: v.y, z: v.z, reach: l.reach * s }); }
    for (const k of proto.sparks) { v.set(k.x, k.y, k.z).applyMatrix4(m); this.sparks.push({ ...k, x: v.x, y: v.y, z: v.z, size: k.size * s }); }
    return this;
  }
  build() {
    for (const l of this.lights) LAMPS.push({ x: l.x, y: l.y, z: l.z, r: l.colour.r * l.power, g: l.colour.g * l.power, b: l.colour.b * l.power, reach2: l.reach * l.reach, far: l.reach * 6 });
    SPARKS.push(...this.sparks);
    const g = new THREE.Group(); for (const [m, list] of this.bins) if (list.length) g.add(new THREE.Mesh(mergeGeometries(list.map(s => s.index ? s.toNonIndexed() : s), false), m)); return g;
  }
}
// Work out the light on every corner of every solid: a little from the sky and the moon, the rest from the lamps within reach.
export function paint(group) {
  const cell = 48, grid = new Map(), key = (i, j) => i * 4096 + j;
  for (const l of LAMPS) for (let i = Math.floor((l.x - l.far) / cell); i <= Math.floor((l.x + l.far) / cell); i++) for (let j = Math.floor((l.z - l.far) / cell); j <= Math.floor((l.z + l.far) / cell); j++) { const k = key(i + 2048, j + 2048); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(l); }
  group.updateMatrixWorld(true);
  const v = new THREE.Vector3(), n = new THREE.Vector3(), nm = new THREE.Matrix3(), moon = new THREE.Vector3(-0.35, 0.62, 0.7).normalize(), none = [];
  group.traverse(o => {
    if (!o.isMesh || !o.material.vertexColors || o.userData.lit) return;
    const g = o.geometry, p = g.attributes.position, nn = g.attributes.normal, c = new Float32Array(p.count * 3); nm.getNormalMatrix(o.matrixWorld);
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).applyMatrix4(o.matrixWorld); n.fromBufferAttribute(nn, i).applyMatrix3(nm).normalize();
      const sky = 0.55 + 0.45 * n.y, m = Math.max(0, n.dot(moon)) * 0.5;
      let r = 0.030 * sky + 0.050 * m, gg = 0.040 * sky + 0.062 * m, b = 0.075 * sky + 0.10 * m;
      for (const l of grid.get(key(Math.floor(v.x / cell) + 2048, Math.floor(v.z / cell) + 2048)) || none) {
        const dx = l.x - v.x, dy = l.y - v.y, dz = l.z - v.z, d2 = dx * dx + dy * dy + dz * dz; if (d2 > l.far * l.far) continue;
        const d = Math.sqrt(d2) || 1, facing = Math.max(0, ((n.x * dx + n.y * dy + n.z * dz) / d + 0.22) / 1.22), k = facing / (1 + d2 / l.reach2);
        r += l.r * k; gg += l.g * k; b += l.b * k;
      }
      c[i * 3] = r; c[i * 3 + 1] = gg; c[i * 3 + 2] = b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3)); o.userData.lit = true;
  });
}

/* ---------- solids ---------- */
export const plain = g => { const uv = g.attributes.uv; if (uv) for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.004, 0.004); return g; };
// A box standing on y. Its walls take a repeating wall picture: one repeat is tile.u metres wide and tile.v metres high.
// Walls are cut into panels a few metres across, so light painted onto their corners can fall off along them.
export function wall(w, h, d, x, y, z, tile, shift = 0) {
  const g = new THREE.BoxGeometry(w, h, d, Math.max(1, Math.round(w / 5)), Math.max(1, Math.round(h / 3)), Math.max(1, Math.round(d / 6)));
  const uv = g.attributes.uv, n = g.attributes.normal, p = g.attributes.position;
  for (let i = 0; i < uv.count; i++) {
    if (Math.abs(n.getY(i)) > 0.5 || !tile) { uv.setXY(i, 0.004, 0.004); continue; }     // roofs and floors take the plain corner of the picture
    const along = Math.abs(n.getX(i)) > 0.5 ? p.getZ(i) + d / 2 + 7 : p.getX(i) + w / 2;
    uv.setXY(i, along / tile.u + shift, (p.getY(i) + h / 2) / tile.v);
  }
  return g.translate(x, y + h / 2, z);
}
export const box = (w, h, d, x, y, z) => wall(w, h, d, x, y, z, null);
export const slab = (w, h, d, x, y, z) => plain(new THREE.BoxGeometry(w, h, d)).translate(x, y + h / 2, z);        // a box too small to need panels
export function drum(r, h, x, y, z, sides = 8, tile = null, top = r) {
  const g = new THREE.CylinderGeometry(top, r, h, sides, Math.max(1, Math.round(h / 4))), uv = g.attributes.uv, n = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) { if (!tile || Math.abs(n.getY(i)) > 0.9) uv.setXY(i, 0.004, 0.004); else uv.setXY(i, uv.getX(i) * 2 * Math.PI * r / tile.u, uv.getY(i) * h / tile.v); }
  return g.rotateY(Math.PI / sides).translate(x, y + h / 2, z);
}
export const ball = (r, x, y, z, seg = 10) => plain(new THREE.SphereGeometry(r, seg, Math.max(6, seg - 2))).translate(x, y, z);
export const cone = (r, h, x, y, z, sides = 8) => plain(new THREE.ConeGeometry(r, h, sides)).rotateY(Math.PI / sides).translate(x, y + h / 2, z);
// A rod from one point to another.
export function rod(a, b, r = 0.08, sides = 5) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A), g = plain(new THREE.CylinderGeometry(r, r, d.length(), sides));
  return g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, d.clone().normalize())).translate((A.x + B.x) / 2, (A.y + B.y) / 2, (A.z + B.z) / 2);
}
// An onion dome: a slight swell above the neck, drawn to a point, with a finial.
export function dome(r, h, x, y, z, { seg = 20, swell = 0.1, finial = 0.32 } = {}) {
  const pts = []; for (let i = 0; i <= 18; i++) { const t = i / 18; pts.push(new THREE.Vector2(Math.max(0.001, r * Math.sqrt(1 - Math.pow(t, 1.75)) * (0.93 + swell * 2.6 * Math.sin(Math.PI * Math.min(1, t * 1.5)) * (1 - t))), h * t)); }
  const parts = [plain(new THREE.LatheGeometry(pts, seg)).translate(x, y, z)];
  if (finial) { const f = h * finial; parts.push(plain(new THREE.CylinderGeometry(0.02 * r, 0.09 * r, f, 6)).translate(x, y + h + f / 2 - 0.05, z), ball(0.11 * r, x, y + h + f * 0.25, z, 8), ball(0.07 * r, x, y + h + f * 0.62, z, 6)); }
  return parts;
}
// A small open pavilion: four posts, a slab and a dome. Indian roofs are crowned with them.
export function chhatri(s, h, x, y, z) {
  const p = s * 0.42, t = s * 0.1, out = [];
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) out.push(slab(t, h, t, x + sx * p, y, z + sz * p));
  out.push(slab(s * 1.28, s * 0.12, s * 1.28, x, y + h, z), ...dome(s * 0.56, s * 0.72, x, y + h + s * 0.12, z, { seg: 10 }));
  return out;
}
// The outline of an arched opening, as a flat shape facing +z.
export function arch(w, h, x, y, z, pointed = 0) {
  const s = new THREE.Shape(), r = w / 2, spring = h - r * (1 + pointed);
  s.moveTo(-r, 0); s.lineTo(-r, spring);
  if (pointed) { s.quadraticCurveTo(-r, spring + r * 0.9, 0, h); s.quadraticCurveTo(r, spring + r * 0.9, r, spring); } else s.absarc(0, spring, r, Math.PI, 0, true);
  s.lineTo(r, 0); s.lineTo(-r, 0);
  return plain(new THREE.ShapeGeometry(s, 10)).translate(x, y, z);
}
// A flat ring or part of one, lying on the ground.
export const ring = (inner, outer, y, from = 0, sweep = 360, seg = 96) => plain(new THREE.RingGeometry(inner, outer, Math.max(3, Math.round(seg * sweep / 360)), 2, from * DEG, sweep * DEG)).rotateX(-Math.PI / 2).translate(0, y, 0);
// An upright curved wall facing the middle of the lake.
export function curtain(r, y, h, from = 0, sweep = 360, seg = 96) { const g = plain(new THREE.CylinderGeometry(r, r, h, Math.max(3, Math.round(seg * sweep / 360)), 1, true, (from + 90) * DEG, sweep * DEG)).translate(0, y + h / 2, 0); const n = g.attributes.normal.array; for (let i = 0; i < n.length; i++) n[i] = -n[i]; return g; }

/* ---------- pictures drawn in code ---------- */
const tex = (c, repeat = true, aniso = 8) => { const t = new THREE.CanvasTexture(c); if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = aniso; return t; };
// A wall picture made of arched bays: stone, shadowed openings, and a second picture of which openings are lit from inside.
export function facade({ cols = 8, rows = 4, lit = 0.3, seed = 1, stone = [205, 172, 128], shadow = [46, 34, 26], glow = ['#ffd27a', '#ffb65a', '#ffe2a8'], opening = 0.5, pointed = false, jali = 0.25 }) {
  const cw = 64, ch = 96, r = rng(seed), W = cols * cw, H = rows * ch;
  const a = document.createElement('canvas'), b = document.createElement('canvas'); a.width = b.width = W; a.height = b.height = H;
  const g = a.getContext('2d'), e = b.getContext('2d'); e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
  const col = (c, k) => 'rgb(' + c.map(v => Math.max(0, Math.min(255, v * k)) | 0).join(',') + ')';
  g.fillStyle = col(stone, 1); g.fillRect(0, 0, W, H);
  for (let i = 0; i < 3200; i++) { g.fillStyle = col(stone, 0.9 + r() * 0.2); g.fillRect(r() * W, r() * H, 2 + r() * 5, 1 + r() * 2); }      // the stone is not one flat tone
  const shape = (c, x, y, w, h) => { c.beginPath(); c.moveTo(x - w / 2, y); c.lineTo(x - w / 2, y - h + w / 2);
    if (pointed) { c.quadraticCurveTo(x - w / 2, y - h + w * 0.05, x, y - h); c.quadraticCurveTo(x + w / 2, y - h + w * 0.05, x + w / 2, y - h + w / 2); } else c.arc(x, y - h + w / 2, w / 2, Math.PI, 0);
    c.lineTo(x + w / 2, y); c.closePath(); };
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const x = i * cw + cw / 2, y = (j + 1) * ch - 14, w = cw * opening, h = ch * 0.62;
    if (j * cols + i === 0) continue;                                       // the plain corner that roofs use
    g.fillStyle = col(stone, 0.8); shape(g, x, y + 2, w + 12, h + 9); g.fill();   // the shadow under the moulding
    g.fillStyle = col(stone, 1.12); shape(g, x, y, w + 8, h + 5); g.fill();  // the moulding round the opening
    g.fillStyle = col(shadow, 1); shape(g, x, y, w, h); g.fill();
    if (r() < jali) { g.strokeStyle = col(stone, 0.62); g.lineWidth = 1; for (let k = -w / 2 + 4; k < w / 2; k += 5) { g.beginPath(); g.moveTo(x + k, y - 9); g.lineTo(x + k, y - h * 0.62); g.stroke(); } }     // a carved screen
    g.fillStyle = col(stone, 0.78); g.fillRect(x - w / 2 - 2, y - 10, w + 4, 4); g.fillStyle = col(stone, 1.1); g.fillRect(x - w / 2 - 3, y - 12, w + 6, 2);     // a balustrade across its foot
    g.fillStyle = col(stone, 1.16); g.beginPath(); g.arc(x, y - h - 7, 3, 0, 7); g.fill();                                                                       // a boss over the keystone
    if (r() < lit) { const k = e.createLinearGradient(0, y - h, 0, y); const c = glow[(r() * glow.length) | 0]; k.addColorStop(0, c); k.addColorStop(1, '#7a4a1c'); e.fillStyle = k; e.globalAlpha = 0.55 + r() * 0.45; shape(e, x, y - 11, w - 2, h - 12); e.fill(); e.globalAlpha = 1; }
    g.fillStyle = col(stone, 0.84); g.fillRect(i * cw, j * ch, 3, ch); g.fillStyle = col(stone, 1.1); g.fillRect(i * cw + 3, j * ch, 2, ch);                      // a pilaster between bays
  }
  for (let j = 0; j < rows; j++) { g.fillStyle = col(stone, 1.16); g.fillRect(0, j * ch, W, 5); g.fillStyle = col(stone, 0.68); g.fillRect(0, j * ch + 5, W, 2); for (let x = 0; x < W; x += 8) { g.fillStyle = col(stone, 0.8); g.fillRect(x, j * ch + 8, 4, 3); } }   // a cornice with its row of brackets
  return { map: tex(a), emissiveMap: tex(b), cols, rows };
}
// The windows of an ordinary block at night: mostly dark, a few lit, warm or television blue; and the wall itself, with its floors marked.
export function block({ cols = 8, rows = 8, lit = 0.16, seed = 1, wall = [84, 90, 110] }) {
  const cw = 32, ch = 32, r = rng(seed), a = document.createElement('canvas'), b = document.createElement('canvas'); a.width = b.width = cols * cw; a.height = b.height = rows * ch;
  const g = a.getContext('2d'), e = b.getContext('2d'); e.fillStyle = '#000'; e.fillRect(0, 0, b.width, b.height);
  const col = k => 'rgb(' + wall.map(v => (v * k) | 0).join(',') + ')'; g.fillStyle = col(1); g.fillRect(0, 0, a.width, a.height);
  for (let i = 0; i < 900; i++) { g.fillStyle = col(0.86 + r() * 0.26); g.fillRect(r() * a.width, r() * a.height, 3 + r() * 8, 1 + r() * 3); }
  for (let j = 0; j < rows; j++) { g.fillStyle = col(0.7); g.fillRect(0, j * ch, a.width, 2); for (let i = 0; i < cols; i++) { if (i + j === 0) continue;
    const x = i * cw + 8, y = j * ch + 8; g.fillStyle = col(0.36); g.fillRect(x, y, 16, 17); g.fillStyle = col(1.2); g.fillRect(x - 1, y + 17, 18, 2); if (r() < 0.3) { g.fillStyle = col(0.75); g.fillRect(x - 3, y + 19, 22, 3); }       // a sill; now and then a balcony
    if (r() < lit) { e.fillStyle = r() < 0.78 ? ['#ffcf80', '#ffb45c', '#ffe0a6'][(r() * 3) | 0] : '#9fd0ff'; e.globalAlpha = 0.35 + r() * 0.65; e.fillRect(x + 1, y + 1, 14, 15); e.globalAlpha = 1; if (r() < 0.5) { e.fillStyle = '#000'; e.fillRect(x + 7, y + 1, 1, 15); } } } }
  return { map: tex(a, true, 4), emissiveMap: tex(b, true, 4) };
}
// A soft round spot, for lamps, glows and mist.
export function spot(size = 128, inner = 0.0, falloff = 1) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d'), k = g.createRadialGradient(size / 2, size / 2, size * inner, size / 2, size / 2, size / 2);
  k.addColorStop(0, 'rgba(255,255,255,1)'); k.addColorStop(0.25 * falloff, 'rgba(255,255,255,.42)'); k.addColorStop(Math.min(0.99, 0.6 * falloff), 'rgba(255,255,255,.1)'); k.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = k; g.fillRect(0, 0, size, size); return tex(c, false, 1);
}
// Stripes, for awnings and the boat's planks.
export function stripes(a, b, n = 8, across = true) { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? a : b; if (across) g.fillRect(i * 64 / n, 0, 64 / n + 1, 64); else g.fillRect(0, i * 64 / n, 64, 64 / n + 1); } return tex(c); }
// A lit board with words on it.
export function words(lines, { w = 1024, h = 320, ground = '#0d1326', edge = '#f2c66a' } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const k = c.getContext('2d');
  k.fillStyle = ground; k.fillRect(0, 0, w, h); if (edge) { k.strokeStyle = edge; k.lineWidth = 6; k.strokeRect(9, 9, w - 18, h - 18); }
  for (const { text, y, size, colour, font = 'Geist, Arial, sans-serif', weight = 600, fit = w - 108 } of lines) { let s = size; do { k.font = weight + ' ' + s + 'px ' + font; s -= 4; } while (k.measureText(text).width > fit && s > 24); k.fillStyle = colour; k.textBaseline = 'middle'; k.fillText(text, 54, y); }
  return tex(c, false);
}
