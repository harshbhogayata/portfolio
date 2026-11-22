// Sursagar at night, and a boat to go round it.
// The lake lies in the middle with the Sarveshwar Mahadev statue at its centre; the city's landmarks are gathered on its banks;
// each part of the portfolio is a landing stage on the shore. The camera always looks north and follows the boat.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Water } from 'three/addons/objects/Water.js';
import { Builder, paint, glowing, SPARKS, spot, words, rng, at, R, DEG } from './kit.js';
import { palace } from './palace.js';
import { kirtiMandir } from './kirti.js';
import { nyayMandir } from './nyay.js';
import { mandvi } from './mandvi.js';
import { artsDome } from './arts.js';
import { museum } from './museum.js';
import { kalaGhoda, banyan, sayajiBaug, toyTrain } from './places.js';
import { shore, claim } from './shore.js';
import { town } from './town.js';
import { island, afloat, pedalBoats, boat } from './lake.js';
import { statue } from './statue.js';
import { oldCity, garba, lotus } from './more.js';

const NIGHT = { zenith: 0x04060c, mid: 0x0a1226, horizon: 0x1b2a4e, fog: 0x121c38, water: 0x040a16 };

// stops: the places the boat calls at, in the order of its round. Each has a name and a line for its board, and either the angle of its
// landing stage on the bank (deg) or island: true for the steps of the island. The one marked home is where the boat lies at first.
export function start(canvas, stops, hooks = {}) {
  const ANGLES = stops.map(s => s.deg), BANK = ANGLES.filter(a => a !== undefined), HOME = Math.max(0, stops.findIndex(s => s.home)), TOUR = stops.map((_, i) => (HOME + i) % stops.length);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.12; renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(NIGHT.fog, 0.0008); scene.background = new THREE.Color(NIGHT.mid);
  const camera = new THREE.PerspectiveCamera(38, 1, 2, 4200);
  const still = matchMedia('(prefers-reduced-motion: reduce)'), r = rng(11);

  /* ----- the sky: a deep vault, lighter and a little warm where it meets the town; stars; the moon; thin cloud ----- */
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(3600, 32, 16), new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { zenith: { value: new THREE.Color(NIGHT.zenith) }, mid: { value: new THREE.Color(NIGHT.mid) }, horizon: { value: new THREE.Color(NIGHT.horizon) } },
    vertexShader: 'varying vec3 d; void main(){ d = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform vec3 zenith; uniform vec3 mid; uniform vec3 horizon; varying vec3 d;
      void main(){ float y = max(d.y, 0.0); vec3 c = mix(horizon, mid, smoothstep(0.0, 0.22, y)); c = mix(c, zenith, smoothstep(0.18, 0.8, y)); c += vec3(0.16, 0.09, 0.05) * exp(-y * 18.0) * 0.3; gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }` })));
  const sp = [], ss = [], sph = []; for (let i = 0; i < 3200; i++) { const u = r() * 2 - 1, a = r() * Math.PI * 2, y = Math.abs(u) * 0.96 + 0.035, q = Math.sqrt(1 - y * y); sp.push(Math.cos(a) * q * 3300, y * 3300, Math.sin(a) * q * 3300); const m = r(); ss.push(m < 0.03 ? 3.6 : m < 0.2 ? 2.3 : 1.35); sph.push(r() * 6.28); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3)); sg.setAttribute('size', new THREE.Float32BufferAttribute(ss, 1)); sg.setAttribute('phase', new THREE.Float32BufferAttribute(sph, 1));
  const stars = new THREE.Points(sg, new THREE.ShaderMaterial({ transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, uniforms: { time: { value: 0 }, dpr: { value: 1 } },
    vertexShader: 'attribute float size; attribute float phase; uniform float time; uniform float dpr; varying float tw; void main(){ tw = 0.72 + 0.28 * sin(time * (0.6 + phase * 0.25) + phase * 9.0); gl_PointSize = size * dpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'varying float tw; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d) * tw; gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * a * 1.5, a); }' })); scene.add(stars);
  const moonC = document.createElement('canvas'); moonC.width = moonC.height = 256; { const k = moonC.getContext('2d'); k.fillStyle = '#fff6e0'; k.beginPath(); k.arc(128, 128, 96, 0, 7); k.fill(); k.fillStyle = 'rgba(190,180,160,.5)'; for (const [x, y, s] of [[150, 100, 16], [176, 150, 11], [130, 170, 9], [190, 110, 7]]) { k.beginPath(); k.arc(x, y, s, 0, 7); k.fill(); } k.globalCompositeOperation = 'destination-out'; k.beginPath(); k.arc(72, 116, 92, 0, 7); k.fill(); }
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(moonC), color: new THREE.Color(2.4, 2.3, 2.0), fog: false, depthWrite: false })); moon.scale.set(150, 150, 1); moon.position.set(230, 520, -2900); scene.add(moon);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: spot(256), color: 0x6f8fd8, fog: false, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.32 })); halo.scale.set(1500, 1500, 1); halo.position.copy(moon.position); scene.add(halo);
  const cloudC = document.createElement('canvas'); cloudC.width = cloudC.height = 256; { const k = cloudC.getContext('2d'), im = k.createImageData(256, 256), q = rng(19), w = []; for (let i = 0; i < 22; i++) w.push([1 + ((q() * 5) | 0), 1 + ((q() * 5) | 0), q() * 6.28, q()]);
    for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++) { let s = 0; for (const [fx, fy, ph, am] of w) s += Math.sin((x * fx + y * fy) / 256 * 6.2832 + ph) * am / (fx + fy); const v = Math.max(0, Math.min(1, s * 0.9 - 0.12)), i = (y * 256 + x) * 4; im.data[i] = 150; im.data[i + 1] = 170; im.data[i + 2] = 215; im.data[i + 3] = v * v * 255; } k.putImageData(im, 0, 0); }
  const cloudT = new THREE.CanvasTexture(cloudC); cloudT.wrapS = cloudT.wrapT = THREE.RepeatWrapping; cloudT.repeat.set(3, 3);
  const clouds = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ map: cloudT, transparent: true, opacity: 0.2, depthWrite: false, fog: false })); clouds.position.y = 620; clouds.layers.set(1); scene.add(clouds);

  // Pavagadh, the hill that stands on the city's horizon; the climb to the temple on its top is lit all night. Here it rises behind the statue.
  { const s = new THREE.Shape(), prof = [[-290, 0], [-215, 14], [-165, 24], [-125, 44], [-85, 58], [-55, 80], [-30, 92], [-10, 104], [9, 108], [30, 98], [55, 92], [85, 64], [130, 42], [170, 26], [225, 12], [300, 0]]; s.moveTo(-290, -700); for (const [x, y] of prof) s.lineTo(x, y); s.lineTo(300, -700);
    const hill = new THREE.Mesh(new THREE.ShapeGeometry(s), new THREE.MeshBasicMaterial({ color: 0x101a36, fog: false })), p = at(91.5, 3350); hill.position.set(p.x, 0, p.z); hill.lookAt(0, 0, 0); scene.add(hill); hill.userData.at = p; scene.userData.hill = hill; }

  /* ----- the water ----- */
  const nc = document.createElement('canvas'); nc.width = nc.height = 256; { const k = nc.getContext('2d'), im = k.createImageData(256, 256), q = rng(3), w = []; for (let i = 0; i < 30; i++) w.push([3 + ((q() * 14) | 0), 3 + ((q() * 14) | 0), q() * 6.28, 0.4 + q()]);
    const hgt = (x, y) => { let s = 0; for (const [fx, fy, ph, am] of w) s += Math.sin((x * fx + y * fy) / 256 * 6.2832 + ph) * am / (fx + fy); return s; };
    for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++) { const dx = hgt(x + 1, y) - hgt(x - 1, y), dy = hgt(x, y + 1) - hgt(x, y - 1), l = Math.hypot(dx * 4, dy * 4, 1), i = (y * 256 + x) * 4; im.data[i] = (-dx * 4 / l * 0.5 + 0.5) * 255; im.data[i + 1] = (-dy * 4 / l * 0.5 + 0.5) * 255; im.data[i + 2] = (1 / l * 0.5 + 0.5) * 255; im.data[i + 3] = 255; } k.putImageData(im, 0, 0); }
  const normals = new THREE.CanvasTexture(nc); normals.wrapS = normals.wrapT = THREE.RepeatWrapping;
  const water = new Water(new THREE.CircleGeometry(R + 1, 96), { textureWidth: innerWidth < 700 ? 512 : 1024, textureHeight: innerWidth < 700 ? 512 : 1024, waterNormals: normals, sunDirection: new THREE.Vector3(0.3, 0.34, -0.9).normalize(), sunColor: 0x2a3760, waterColor: NIGHT.water, distortionScale: 2.4, fog: true });
  water.rotation.x = -Math.PI / 2; water.material.uniforms.size.value = 0.95; water.material.fragmentShader = water.material.fragmentShader.replace('vec3( 0.1 )', 'vec3( 0.006, 0.01, 0.022 )'); scene.add(water);
  // a machine that is struggling mirrors the lake every other frame; and what has a plainer cast for the mirror shows that there instead of itself
  const mirror = water.onBeforeRender, casts = { fine: [], plain: [] }; let turns = 0;
  water.onBeforeRender = function (...a) { if (tier >= 1 && (turns++ & 1)) return; for (const m of casts.fine) m.visible = false; for (const m of casts.plain) m.visible = true; mirror.apply(this, a); for (const m of casts.fine) m.visible = true; for (const m of casts.plain) m.visible = false; };

  /* ----- the city: each place is built facing south, then set on its bank and turned to face the lake ----- */
  const world = new Builder(), turn = deg => { const p = at(deg, 1); return Math.atan2(-p.x, -p.z); };   // each place faces the lake
  const set = (make, deg, dist, plot, facing = turn(deg)) => { const p = at(deg, dist), c = at(deg, dist + plot[2]); claim(c.x, c.z, plot[0], plot[1]); world.stamp(make(), p.x, p.z, facing, 1, 1.5); return p; };
  // The banks are laid out for the first view: the statue stands clear against the dark, the garba ground's lights at its feet,
  // Kirti Mandir to its left and the palace to its right.
  const PAL = at(60, R + 70), palTurn = turn(60), palAt = (lx, lz) => new THREE.Vector3(lx, 0, lz).applyAxisAngle(new THREE.Vector3(0, 1, 0), palTurn).add(PAL);
  for (const t of [-58, 0, 58]) { const c = palAt(t, 4); claim(c.x, c.z, 40, 50); } world.stamp(palace(), PAL.x, PAL.z, palTurn, 1, 0.3);
  set(kirtiMandir, 110, R + 44, [30, 30, 14]); set(artsDome, 133, R + 118, [48, 42, 15]); set(museum, 162, R + 50, [27, 18, 6]); set(nyayMandir, 20, R + 50, [44, 36, 14]); set(mandvi, -8, R + 44, [26, 26, 17]);
  set(() => banyan(4), 149, R + 47, [21, 21, 0], 0); set(() => banyan(9), 86, R + 150, [21, 21, 0], 0);
  set(sayajiBaug, 131, R + 72, [36, 36, 0], 0);                                                      // the garden lies before the university, with Kala Ghoda at its gate, as in the real city
  { const p = at(132, R + 8); claim(p.x, p.z, 7, 7); world.stamp(kalaGhoda(), p.x, p.z, Math.atan2(-p.x, -p.z), 1, 1.7); }
  const dance = garba(), dp = at(96, R + 52), dturn = Math.atan2(-dp.x, -dp.z); claim(dp.x, dp.z, 28, 28); world.stamp(dance.b, dp.x, dp.z, dturn, 1, 1.5);
  world.stamp(island()); world.stamp(afloat(BANK)); world.stamp(lotus()); world.stamp(shore(BANK, [60, 110, 162, 20, -8])); world.stamp(town());
  // the old city lies on the near bank, behind the camera's shoulder: nothing of it is ever mirrored in the lake, so the mirror is spared drawing it
  const near = new Builder(); near.stamp(oldCity());
  const built = world.build(), nearBuilt = near.build(); nearBuilt.traverse(o => o.layers.set(1)); camera.layers.enable(1); scene.add(built, nearBuilt);
  const rings = dance.rings.map(({ rad, q }) => { const g = q.build(); g.position.set(dp.x, 1.66, dp.z); g.userData.rad = rad; g.traverse(o => o.layers.set(1)); scene.add(g); return g; });
  paint(built); paint(nearBuilt); rings.forEach(paint);
  const centre = new THREE.Group(); scene.add(centre); statue(centre).then(c => { casts.fine.push(...c.fine); casts.plain.push(...c.plain); if (still.matches) go(); });   // the statue takes a moment to cast; the scene opens without waiting for it
  { const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: spot(128, 0, 1.3), color: 0xffa84a, transparent: true, opacity: 0.14, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })); aura.scale.set(44, 62, 1); aura.position.set(0.3, 33, 0); aura.layers.set(1); scene.add(aura);
    const spray = new THREE.Sprite(new THREE.SpriteMaterial({ map: spot(128, 0, 1.5), color: 0x9fc4ff, transparent: true, opacity: 0.13, depthWrite: false, blending: THREE.AdditiveBlending })); spray.scale.set(20, 17, 1); spray.position.set(-78, 6.5, -46); spray.layers.set(1); scene.add(spray); }

  // every point of light: lamp globes, bulbs on strings, lamps afloat, the fountain, the red lights on the masts
  const sparkMat = () => new THREE.ShaderMaterial({ transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, uniforms: { map: { value: spot(64) }, time: { value: 0 }, scale: { value: 800 } },
    vertexShader: `attribute vec3 tint; attribute float size; attribute float phase; attribute float mode; uniform float time; uniform float scale; varying vec3 vC;
      void main(){ vec3 p = position; float k = 1.0;
        if (mode > 2.5) { p.x += sin(time * 0.11 + phase * 6.0) * 2.4; p.z += cos(time * 0.09 + phase * 4.0) * 2.4; k = 0.72 + 0.28 * sin(time * 7.0 + phase * 30.0); }
        else if (mode > 1.5) { k = step(0.5, fract(time * 0.7 + phase)); }
        else if (mode > 0.5) { k = 0.72 + 0.28 * sin(time * 9.0 + phase * 40.0) * sin(time * 5.3 + phase * 17.0); }
        vC = tint * k; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = min(size * scale / -mv.z, 96.0); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: 'uniform sampler2D map; varying vec3 vC; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vC * a, a); }' });
  const points = list => { const n = list.length, g = new THREE.BufferGeometry(), P = new Float32Array(n * 3), C = new Float32Array(n * 3), S = new Float32Array(n), F = new Float32Array(n), M = new Float32Array(n);
    list.forEach((k, i) => { P.set([k.x, k.y, k.z], i * 3); C.set([k.colour.r, k.colour.g, k.colour.b], i * 3); S[i] = k.size; F[i] = r(); M[i] = k.flicker || 0; });
    g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('tint', new THREE.BufferAttribute(C, 3)); g.setAttribute('size', new THREE.BufferAttribute(S, 1)); g.setAttribute('phase', new THREE.BufferAttribute(F, 1)); g.setAttribute('mode', new THREE.BufferAttribute(M, 1));
    const m = new THREE.Points(g, sparkMat()); m.frustumCulled = false; scene.add(m); return m; };
  const sparks = points(SPARKS);
  { const h = scene.userData.hill, climb = []; for (let i = 0; i < 13; i++) { const t = i / 12, v = new THREE.Vector3(-120 + t * 128 + Math.sin(t * 9) * 16, 20 + t * 86, 4).applyMatrix4(h.matrixWorld.identity().compose(h.position, h.quaternion, h.scale)); climb.push({ x: v.x, y: v.y, z: v.z, colour: new THREE.Color(1, 0.74, 0.4), size: i === 12 ? 15 : 6, flicker: 1 }); } points(climb); }
  // traffic on the road round the lake: white lamps in front, red behind
  const WHITE = new THREE.Color(1.0, 0.95, 0.85), REDL = new THREE.Color(1.0, 0.16, 0.1), cars = []; for (let i = 0; i < 26; i++) cars.push({ a: r() * 360, v: (i % 2 ? 1 : -1) * (5 + r() * 5), d: i % 2 ? R + 19.4 : R + 24 });
  const traffic = points(cars.flatMap(() => [{ x: 0, y: 2.3, z: 0, colour: WHITE, size: 3.2 }, { x: 0, y: 2.3, z: 0, colour: REDL, size: 2.4 }]));
  // shafts of light standing over the lit places
  const shaftC = document.createElement('canvas'); shaftC.width = 4; shaftC.height = 128; { const k = shaftC.getContext('2d'), gr = k.createLinearGradient(0, 128, 0, 0); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.3, 'rgba(255,255,255,.4)'); gr.addColorStop(0.7, 'rgba(255,255,255,.08)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); k.fillStyle = gr; k.fillRect(0, 0, 4, 128); }
  const shaftT = new THREE.CanvasTexture(shaftC), shaft = (x, z, h, spread, colour = 0xffc27a, o = 0.042) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(spread, 1.2, h, 20, 1, true), new THREE.MeshBasicMaterial({ map: shaftT, color: colour, transparent: true, opacity: o, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false })); m.position.set(x, h / 2 + 1, z); m.layers.set(1); scene.add(m); return m; };
  for (const [x, z, h, s] of [[-19.5, 6, 74, 9], [12.5, 8, 62, 12], [-46, 8, 44, 8], [58, 8, 40, 8]]) { const p = palAt(x, z); shaft(p.x, p.z, h, s); }
  { const k = at(110, R + 46), a = at(133, R + 120), n = at(20, R + 52); shaft(k.x, k.z, 60, 9); shaft(a.x, a.z, 58, 14); shaft(n.x, n.z, 46, 12); }

  // mist lying on the water, far side
  const mistT = spot(256, 0, 1.6), mists = []; for (let i = 0; i < 10; i++) { const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: mistT, color: 0x33487a, transparent: true, opacity: 0.07, depthWrite: false, blending: THREE.AdditiveBlending })); const p = at(10 + i * 17 + r() * 10, R - 14 - r() * 22, 5); m.position.copy(p); m.scale.set(190 + r() * 110, 26 + r() * 10, 1); m.userData.a = r() * 6.28; m.layers.set(1); mists.push(m); scene.add(m); }
  // the board at each landing stage: on the near bank it stands beside the stage, so it never comes between the camera and the boat
  stops.forEach((s, i) => { if (s.deg === undefined) return; const deg = ANGLES[i], near = Math.sin(deg * DEG) < -0.3, bp = at(near ? deg + 10 : deg + (s.shift || 0), R + 9, near ? 6.4 : 8.6);
    const t = words([{ text: (s.line || '').toUpperCase(), y: 84, size: 44, colour: '#f2c66a', font: '"Geist Mono", ui-monospace, monospace', weight: 500 }, { text: s.name, y: 206, size: 132, colour: '#fff6e2' }]);
    const th = Math.atan2(-bp.x, -bp.z), rx = Math.cos(th), rz = -Math.sin(th), fx = Math.sin(th), fz = Math.cos(th);            // it faces the lake, wherever on the bank it stands
    const board = new THREE.Mesh(new THREE.PlaneGeometry(15, 4.7), new THREE.MeshBasicMaterial({ map: t, color: new THREE.Color(1.35, 1.35, 1.35) })); board.position.copy(bp); board.rotation.y = th; board.layers.set(1); scene.add(board);
    const backing = new THREE.Mesh(new THREE.PlaneGeometry(15, 4.7), new THREE.MeshBasicMaterial({ color: 0x0b1020 })); backing.position.set(bp.x - fx * 0.06, bp.y, bp.z - fz * 0.06); backing.rotation.y = th + Math.PI; backing.layers.set(1); scene.add(backing);
    for (const x of [-6.7, 6.7]) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, bp.y - 1.4), new THREE.MeshBasicMaterial({ color: 0x1a1d2a })); leg.position.set(bp.x + rx * x - fx * 0.1, (bp.y + 1.4) / 2 - 1.4, bp.z + rz * x - fz * 0.1); leg.layers.set(1); scene.add(leg); }
    for (const x of [-5.4, 0, 5.4]) { const lampOver = new THREE.Mesh(new THREE.BoxGeometry(1, 0.18, 0.45), new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 1.6, 0.9) })); lampOver.position.set(bp.x + rx * x + fx * 0.8, bp.y + 2.7, bp.z + rz * x + fz * 0.8); lampOver.rotation.y = th; lampOver.layers.set(1); scene.add(lampOver); } });

  const others = pedalBoats(scene), vessel = boat(); scene.add(vessel);
  const train = toyTrain(); scene.add(train.g);
  const wake = []; for (let i = 0; i < 30; i++) { const m = new THREE.Mesh(new THREE.RingGeometry(0.82, 1, 28).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x9db9ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); m.position.y = 0.07; m.userData.age = 9; wake.push(m); scene.add(m); }
  // a shooting star, now and then
  const streak = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: spot(64, 0, 0.6), color: 0xdfe8ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, side: THREE.DoubleSide })); streak.scale.set(260, 5, 1); scene.add(streak); let fall = 9 + r() * 6, falling = -1;

  // fireworks behind the palace, a few now and then: each burst is seventy sparks flung out, slowing, sinking, fading
  const FN = 70, shells = [0, 1, 2].map(() => ({ t: -1, o: new THREE.Vector3(), c: [1, 1, 1] })), flung = []; for (let i = 0; i < 3 * FN; i++) { const u = r() * 2 - 1, a = r() * 6.283, q = Math.sqrt(1 - u * u), v = 0.55 + r() * 0.45; flung.push(Math.cos(a) * q * v, u * v, Math.sin(a) * q * v); }
  const fire = points(flung.map((_, i) => i % 3 ? null : { x: 0, y: -80, z: 0, colour: new THREE.Color(0, 0, 0), size: 6.5 }).filter(Boolean)); let nextShell = 7;
  function fireworks(dt) {
    nextShell -= dt; if (nextShell <= 0) { const b = shells.find(x => x.t < 0); if (b) { b.t = 0; b.o.set(PAL.x + (r() - 0.5) * 260, 120 + r() * 80, PAL.z - 80 - r() * 120); b.c = [[1, 0.7, 0.3], [1, 0.35, 0.3], [0.5, 0.9, 1], [1, 0.5, 0.9], [0.7, 1, 0.5], [1, 0.95, 0.8]][(r() * 6) | 0]; } nextShell = r() < 0.55 ? 0.5 + r() * 0.9 : 10 + r() * 14; }
    const P = fire.geometry.attributes.position, C = fire.geometry.attributes.tint; let any = false;
    shells.forEach((b, i) => { if (b.t < 0) return; b.t += dt; any = true; const k = b.t / 2.4, out = 66 * (1 - Math.exp(-b.t * 2.6)), fade = k >= 1 ? 0 : Math.pow(1 - k, 1.4) * 2.2;
      for (let j = 0; j < FN; j++) { const n = (i * FN + j) * 3; P.setXYZ(i * FN + j, b.o.x + flung[n] * out, b.o.y + flung[n + 1] * out - 7 * b.t * b.t, b.o.z + flung[n + 2] * out); C.setXYZ(i * FN + j, b.c[0] * fade, b.c[1] * fade, b.c[2] * fade); }
      if (k >= 1) b.t = -1; });
    if (any) { P.needsUpdate = true; C.needsUpdate = true; }
  }

  // bloom over everything bright, then the screen
  const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.34, 0.55, 1.0); composer.addPass(bloom); composer.addPass(new OutputPass());

  /* ----- the boat's handling ----- */
  const berth = i => { if (stops[i].deg === undefined) return new THREE.Vector2(0, 40); const p = at(ANGLES[i], R - 27); return new THREE.Vector2(p.x, p.z); };   // the island's stop is off its steps
  const pos = berth(HOME).clone(), vel = new THREE.Vector2(), keys = new Set();
  let heading = Math.PI, goal = null, docked = HOME, leg = 0, hold = 3.5, lastTouch = -99, clock = 0, wakeT = 0, running = true;
  const sail = i => { goal = { i, p: berth(i) }; hooks.toward && hooks.toward(i); };
  // which way the boat lies at a stop: bows to the landing and what stands behind it; at the home jetty and off the island, north across the lake
  const facing = i => stops[i].deg === undefined || stops[i].home ? Math.PI : (b => Math.atan2(b.x, b.y))(berth(i));
  let speed = 0, mine = false; const stick = { x: 0, y: 0 };   // mine: someone has taken the helm, so the boat no longer makes its round by itself
  function steer(dt) {
    let turn = 0, drive = 0, want = null;
    if (keys.has('ArrowUp') || keys.has('w')) drive += 1; if (keys.has('ArrowDown') || keys.has('s')) drive -= 1; if (keys.has('ArrowLeft') || keys.has('a')) turn += 1; if (keys.has('ArrowRight') || keys.has('d')) turn -= 1;
    turn -= stick.x; drive += stick.y;
    if (turn || drive) { mine = true; goal = null; lastTouch = clock; }
    else if (goal) {                                                                                 // the helm is held for it: towards the place asked for, round the island if that lies in the way
      const to = goal.p.clone().sub(pos), dist = to.length();
      if (dist < 3 && Math.abs(speed) < 4.5) { speed = 0; if (goal.i !== undefined && docked !== goal.i) { docked = goal.i; hold = 6.5; hooks.arrive && hooks.arrive(docked); } goal = null; }
      else {
        const dir = to.clone().normalize(), along = -pos.dot(dir);
        if (along > 0 && along < dist) { const near = pos.clone().addScaledVector(dir, along); if (near.length() < 62) { const side = near.lengthSq() > 1 ? near.clone().normalize() : new THREE.Vector2(-dir.y, dir.x); dir.addScaledVector(side, 1.5 * (1 - near.length() / 62) + 0.35).normalize(); } }
        let da = Math.atan2(dir.x, dir.y) - heading; da = Math.atan2(Math.sin(da), Math.cos(da));
        turn = Math.max(-1, Math.min(1, da * 2.4)); want = Math.min(20, dist * 0.85 + 0.8) * (Math.abs(da) > 1.0 ? 0.3 : 1);
      }
    } else if (docked >= 0 && Math.abs(speed) < 0.8) { let da = facing(docked) - heading; da = Math.atan2(Math.sin(da), Math.cos(da)); heading += da * Math.min(1, dt * 1.1); }   // lying at a place, it swings its bows to it
    if (!turn && !drive && !goal && !mine && !still.matches) {                                        // nobody has taken the helm: it goes on with its round
      hold -= dt; if (hold <= 0 && clock - lastTouch > 9) { leg = docked >= 0 ? (TOUR.indexOf(docked) + 1) % TOUR.length : leg; if (docked >= 0) hooks.leave && hooks.leave(); sail(TOUR[leg]); }
    }
    turn = Math.max(-1, Math.min(1, turn)); drive = Math.max(-1, Math.min(1, drive)); if (want === null) want = drive >= 0 ? drive * 20 : drive * 8;   // twenty metres a second ahead, eight astern
    speed += (want - speed) * Math.min(1, dt * (Math.abs(want) < Math.abs(speed) ? 2.4 : 1.2));
    heading += turn * dt * 0.9 * Math.min(1, 0.4 + Math.abs(speed) / 9) * (speed < -0.5 ? -1 : 1);
    vel.set(Math.sin(heading) * speed, Math.cos(heading) * speed); pos.addScaledVector(vel, dt);
    const d = pos.length(); if (d > R - 12) { pos.multiplyScalar((R - 12) / d); if (vel.dot(pos) > 0) speed *= Math.max(0, 1 - dt * 3.5); }                              // the bank
    const e = Math.hypot(pos.x / 44, pos.y / 26); if (e < 1) { if (vel.dot(pos) < 0) speed *= Math.max(0, 1 - dt * 3.5); pos.set(pos.x / Math.max(e, 0.01), pos.y / Math.max(e, 0.01)); }   // the island
    if (docked >= 0) { if (berth(docked).distanceTo(pos) > 26) { docked = -1; if (!goal || goal.i === undefined) hooks.leave && hooks.leave(); } }   // gone off from the place it lay at
    else if (!goal || goal.i === undefined) for (let i = 0; i < stops.length; i++) if (berth(i).distanceTo(pos) < 15) { docked = i; hold = 6.5; hooks.arrive && hooks.arrive(i); break; }   // coming near a place is arriving at it
    const sp = Math.abs(speed);
    vessel.position.set(pos.x, Math.sin(clock * 1.7) * 0.06 - 0.12, pos.y); vessel.rotation.set(Math.sin(clock * 1.3) * 0.02 - Math.min(0.06, sp * 0.003), heading, Math.sin(clock * 1.1) * 0.03 - turn * sp * 0.004);
    vessel.userData.flag.rotation.y = Math.sin(clock * 6) * 0.3; for (const h of vessel.userData.lights) h.material.opacity = 0.52 + Math.sin(clock * 11 + h.position.z) * 0.07;
    wakeT -= dt; if (sp > 2 && wakeT <= 0) { wakeT = 0.16; const w = wake.reduce((a, b) => a.userData.age > b.userData.age ? a : b); w.userData.age = 0; w.position.set(pos.x - Math.sin(heading) * 7, 0.07, pos.y - Math.cos(heading) * 7); w.userData.s = Math.min(1, sp / 16); }
    for (const w of wake) { w.userData.age += dt; const a = w.userData.age, k = Math.min(1, a / 3.2); w.scale.setScalar(1.6 + k * 11); w.material.opacity = a < 3.2 ? (1 - k) * 0.3 * (w.userData.s || 0) : 0; }
  }
  // everything else that moves
  const tmp = new THREE.Vector3();
  function live(dt) {
    water.material.uniforms.time.value = clock * 0.42; stars.material.uniforms.time.value = clock; sparks.material.uniforms.time.value = clock; cloudT.offset.x = clock * 0.0016;
    for (const m of glowing) m.uniforms.glow.value = m.userData.glow * (0.94 + Math.sin(clock * 0.7 + m.id) * 0.08);
    for (const m of mists) m.position.x += Math.sin(clock * 0.05 + m.userData.a) * dt * 1.2;
    const tp = traffic.geometry.attributes.position; cars.forEach((c, i) => { c.a += c.v / c.d / DEG * dt; const lead = c.v > 0 ? 0.55 : -0.55, f = at(c.a + lead, c.d), b = at(c.a - lead, c.d); tp.setXYZ(i * 2, f.x, 2.3, f.z); tp.setXYZ(i * 2 + 1, b.x, 2.3, b.z); }); tp.needsUpdate = true;
    for (const o of others) { const a = clock * o.speed + o.phase; o.g.position.set(o.cx + Math.cos(a) * o.rx, Math.sin(clock * 1.5 + o.phase) * 0.05, o.cz + Math.sin(a) * o.rz); o.g.rotation.y = Math.atan2(-Math.sin(a) * o.rx * Math.sign(o.speed), Math.cos(a) * o.rz * Math.sign(o.speed)); }
    if (!still.matches) fireworks(dt);
    rings.forEach((g, i) => { g.rotation.y = clock * 1.15 / g.userData.rad; g.scale.setScalar(1 + Math.sin(clock * 2.6 + i * 0.6) * 0.016); });   // garba: round the lamp, a step in and a step out
    train.cars.forEach((c, i) => { const a = 2.2 + clock * 0.05 - i * 0.0245; c.position.set(Math.cos(a) * (R + 14.9), 1.42, Math.sin(a) * (R + 14.9)); c.rotation.y = -a; });   // the children's train goes round the lake
    fall -= dt; if (fall <= 0 && falling < 0) { falling = 0; fall = 14 + r() * 16; streak.userData = { x: (r() - 0.5) * 2400, y: 1500 + r() * 500, vx: (r() < 0.5 ? -1 : 1) * (700 + r() * 500) }; streak.rotation.z = streak.userData.vx > 0 ? -0.32 : 0.32; }
    if (falling >= 0) { falling += dt; const u = streak.userData; streak.position.set(u.x + u.vx * falling, u.y - 380 * falling, -3000); streak.material.opacity = Math.max(0, Math.sin(Math.min(1, falling / 0.9) * Math.PI)) * 0.9; if (falling > 0.9) falling = -1; }
  }

  /* ----- the camera: behind the boat, turning as it turns; a drag looks round; it stays over the water and clear of the island ----- */
  const cam = new THREE.Vector3(); let back = 84, up = 15, aim = 0.16, camYaw = Math.PI, lookYaw = 0, lookTilt = 0, looked = -99, dragging = false, sharp = 1.6, slow = 0, tier = 0;
  function frame() {
    const w = canvas.clientWidth, h = canvas.clientHeight, tall = h > w;
    camera.aspect = w / h; camera.fov = tall ? 50 : w / h < 1.5 ? 44 : 38; back = tall ? 104 : 84; up = tall ? 17 : 15;
    // the boat is kept low in the open part of the page, between the words above and the list below; the camera's tilt follows from that
    const band = hooks.band && hooks.band(), top = band ? band[0] : h * 0.3, bottom = band ? band[1] : h * 0.86;
    aim = Math.atan(((bottom - 0.14 * (bottom - top)) / h - 0.5) * 2 * Math.tan(camera.fov * DEG / 2));
    camera.updateProjectionMatrix();
    const dpr = Math.min(devicePixelRatio || 1, tall ? sharp + 0.4 : sharp); renderer.setPixelRatio(dpr); renderer.setSize(w, h, false); composer.setPixelRatio(dpr); composer.setSize(w, h); stars.material.uniforms.dpr.value = dpr;
    const scale = h * dpr / (2 * Math.tan(camera.fov * DEG / 2)); sparks.material.uniforms.scale.value = scale; traffic.material.uniforms.scale.value = scale; fire.material.uniforms.scale.value = scale;
  }
  let spy = null, intro = still.matches ? 0 : 1;             // intro: the way in, from high and far back, as the page opens                                            // a fixed viewpoint, for looking the scene over while it is being built
  function follow(dt, snap) {
    if (spy) { camera.position.set(...spy.from); camera.lookAt(...spy.to); return; }
    const k = snap ? 1 : 1 - Math.exp(-dt * 2.4), kp = snap ? 1 : 1 - Math.exp(-dt * 5);
    let d = heading - camYaw; d = Math.atan2(Math.sin(d), Math.cos(d)); camYaw += d * k;                                   // it swings round behind the boat
    if (!dragging && clock - looked > 2.2) { const ease = Math.exp(-dt * 1.4); lookYaw *= ease; lookTilt *= ease; }          // a look round is let go of after a moment
    const yaw = camYaw + lookYaw, fx = Math.sin(yaw), fz = Math.cos(yaw); let cx = pos.x - fx * back, cz = pos.y - fz * back;
    // it keeps over the water, and never goes back among the buildings: only on the south side, where the old city's roofs are low, may it stand off over them
    const r = Math.hypot(cx, cz) || 1, s = Math.min(1, Math.max(0, (cz / r - 0.5) / 0.22)), lim = R + 6 + 84 * s * s * (3 - 2 * s); if (r > lim) { cx *= lim / r; cz *= lim / r; }
    const isle = Math.hypot(cx / 54, cz / 36); if (isle < 1) { cx /= Math.max(isle, 0.05); cz /= Math.max(isle, 0.05); }       // and out of the island
    cam.x += (cx - cam.x) * kp; cam.z += (cz - cam.z) * kp;
    const near = Math.min(1, Math.max(0.56, Math.hypot(pos.x - cam.x, pos.y - cam.z) / back)); cam.y += (up * near + Math.sin(clock * 0.31) * 0.4 - cam.y) * kp;   // held in close, it comes down
    if (intro > 0 && !snap) intro = Math.max(0, intro - dt / 3.6); const e = intro * intro * (3 - 2 * intro), px = cam.x - fx * e * 170, py = cam.y + e * 58, pz = cam.z - fz * e * 170;
    const tx = pos.x + fx * 30 - px, tz = pos.y + fz * 30 - pz, tl = Math.hypot(tx, tz) || 1, pitch = Math.max(-0.5, aim - Math.atan2(py - 1, Math.hypot(pos.x - px, pos.y - pz))) + lookTilt;
    camera.position.set(px, py, pz); camera.lookAt(px + tx / tl * Math.cos(pitch) * 100, py + Math.sin(pitch) * 100, pz + tz / tl * Math.cos(pitch) * 100);
  }



  /* ----- running ----- */
  let last = performance.now(), raf = 0;
  function tick(now) {
    raf = requestAnimationFrame(tick);
    const dt = Math.min(0.05, (now - last) / 1000); last = now; clock += dt;
    steer(dt); follow(dt); live(dt); composer.render();
    // a machine that cannot keep up gets a softer picture rather than a slow one: fewer pixels first, then no bloom
    if (clock > 4) { slow = dt > 0.034 ? slow + dt : Math.max(0, slow - dt * 0.5); if (slow > 2.5 && tier < 3) { tier++; slow = 0; sharp = [1.6, 1.25, 1, 1][tier]; if (tier === 3) bloom.enabled = false; frame(); } }
  }
  const go = () => { cancelAnimationFrame(raf); last = performance.now(); if (running && !document.hidden) { if (still.matches) { steer(0.016); follow(0, true); live(0); composer.render(); } else raf = requestAnimationFrame(tick); } };
  const fit = () => { frame(); if (still.matches) go(); };
  addEventListener('resize', fit); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);   // the words settle once their type has loaded, and the band with them
  document.addEventListener('visibilitychange', go); still.addEventListener('change', go);
  addEventListener('keydown', e => { const k = e.key.length === 1 ? e.key.toLowerCase() : e.key; if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(k) && !e.metaKey && !e.ctrlKey && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) { keys.add(k); if (k.startsWith('Arrow')) e.preventDefault(); } });
  addEventListener('keyup', e => keys.delete(e.key.length === 1 ? e.key.toLowerCase() : e.key)); addEventListener('blur', () => keys.clear());
  // press on the water and the boat goes there
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit = new THREE.Vector3();
  function press(e) { const b = canvas.getBoundingClientRect(); ndc.set((e.clientX - b.left) / b.width * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); ray.setFromCamera(ndc, camera);
    const o = ray.ray.origin, dir = ray.ray.direction; if (dir.y > 0.2) return;                                                                                        // the sky is not somewhere to go
    let p = ray.ray.intersectPlane(plane, hit) && Math.hypot(hit.x, hit.z) < R - 14 ? new THREE.Vector2(hit.x, hit.z) : null, reach = 22;
    if (!p) { const dx = dir.x, dz = dir.z, l = Math.hypot(dx, dz) || 1, ux = dx / l, uz = dz / l, bq = o.x * ux + o.z * uz, cq = o.x * o.x + o.z * o.z - (R - 14) * (R - 14), disc = bq * bq - cq; if (disc < 0) return;   // a press on the bank or on what stands there: the water's edge on the way to it
      const t = -bq + Math.sqrt(disc); if (t < 0) return; p = new THREE.Vector2(o.x + ux * t, o.z + uz * t); reach = 34; }
    if (Math.hypot(p.x / 48, p.y / 30) < 1) p.multiplyScalar(1 / Math.max(0.05, Math.hypot(p.x / 48, p.y / 30)));
    let best = -1, bd = reach; stops.forEach((s, i) => { const q = berth(i).distanceTo(p); if (q < bd) { bd = q; best = i; } });                                         // near a landing stage means that stage
    mine = true; lastTouch = clock; if (best >= 0) { if (best !== docked) sail(best); } else goal = { p }; }
  let held = null;
  canvas.addEventListener('pointerdown', e => { held = { x: e.clientX, y: e.clientY, yaw: lookYaw, tilt: lookTilt, id: e.pointerId, moved: false }; try { canvas.setPointerCapture(e.pointerId); } catch (err) {} });
  canvas.addEventListener('pointermove', e => { if (!held || e.pointerId !== held.id) return; const dx = e.clientX - held.x, dy = e.clientY - held.y; if (!held.moved && Math.hypot(dx, dy) < 7) return;
    held.moved = dragging = true; mine = true; looked = clock; lookYaw = held.yaw + dx / canvas.clientWidth * 3.4; lookTilt = Math.max(-0.2, Math.min(0.3, held.tilt + dy / canvas.clientHeight * 0.9)); if (still.matches) go(); });
  const release = e => { if (!held || e.pointerId !== held.id) return; const was = held; held = null; dragging = false; looked = clock; if (!was.moved && e.type === 'pointerup') press(e); };
  canvas.addEventListener('pointerup', release); canvas.addEventListener('pointercancel', release);

  const stepOnce = dt => { clock += dt; steer(dt); follow(dt); live(dt); composer.render(); };
  const api = { look(from, to, fov) { spy = from ? { from, to } : null; frame(); if (spy && fov) { camera.fov = fov; camera.updateProjectionMatrix(); } },
    step(dt) { running = false; cancelAnimationFrame(raf); stepOnce(dt); },
    skip(seconds) { for (let t = 0; t < seconds; t += 1 / 30) { clock += 1 / 30; steer(1 / 30); follow(1 / 30); } live(1 / 30); composer.render(); },   // run time forward without drawing it: for tests and stills
    drive(x, y) { stick.x = x; stick.y = y; if (still.matches) go(); },                             // a stick on the page, for hands without keys
    sail(i) { mine = true; lastTouch = clock; if (docked === i && !goal) return;
      if (still.matches) { api.jump(i); hooks.arrive && hooks.arrive(i); live(0); composer.render(); } else sail(i); },   // with motion turned down the boat is simply there
    stop() { running = false; go(); }, resume() { running = true; go(); }, where: () => ({ x: pos.x, z: pos.y, docked, heading, toward: goal && goal.i !== undefined ? goal.i : -1 }),
    jump(i) { const p = berth(i); pos.copy(p); vel.set(0, 0); speed = 0; heading = camYaw = facing(i); lookYaw = lookTilt = 0; goal = null; docked = i; hold = 1e9; intro = 0; follow(0, true); hooks.arrive && hooks.arrive(i); }, renderer, scene, camera };
  frame(); follow(0, true); go();
  return api;
}
window.Scene3D = { start };
