/* ------------------------------------------------------------------ */
/* Hero mascot — WebGL                                                 */
/* ------------------------------------------------------------------ */
/* The Iris assistant robot, retinted to this site's copper and mint    */
/* and reframed to sit in the small box above the profile card rather   */
/* than a full-bleed hero. script.js imports this lazily, so three.js   */
/* and the geometry never compete with first paint.                     */
/*                                                                      */
/* Two things this file owns that the original did not:                 */
/*  - motion is binary here. prefers-reduced-motion or the page's own   */
/*    motion switch freeze the robot into a single rendered pose and    */
/*    cancel the loop entirely; a damped loop is still a loop.          */
/*  - the canvas is transparent, so the page grain textures the robot   */
/*    and there is no rectangle of mismatched background behind it.     */
/* ------------------------------------------------------------------ */

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";

const HEAD_GLB = "assets/mascot/head.glb";
const ARM_GLB = "assets/mascot/arm.glb";

/* Site tokens, as scene colours. --copper #e0a678, --copper-soft #efd0b3,
   --mint #a9c9b6, --ink #f3efe7, --bg #0b0b0c. */
const C = {
  copper: 0xe0a678,
  copperSoft: 0xefd0b3,
  copperMid: 0xb9743f,
  copperDeep: 0x8a5227,
  ember: 0xc98b5e,
  mint: 0xa9c9b6,
  mintGlow: 0x7fae95,
  ink: 0xf3efe7,
  shell: 0x4a4238,
  shellDark: 0x241f19,
  pupil: 0x120c07,
  bezel: 0x100e0a,
};

const host = document.querySelector("[data-mascot]");
const canvas = host && host.querySelector(".mascot__stage");
const hero = host && host.closest(".hero");

if (!canvas || !hero) {
  throw new Error("mascot: no canvas in [data-mascot]");
}

/* three r163+ is WebGL2-only, so probe before spending 1.2 MB on geometry. */
function hasWebGL2() {
  try {
    const probe = document.createElement("canvas");
    return Boolean(window.WebGL2RenderingContext && probe.getContext("webgl2"));
  } catch {
    return false;
  }
}

if (!hasWebGL2()) {
  host.classList.add("mascot--failed");
  throw new Error("mascot: WebGL2 unavailable");
}

const root = document.documentElement;
const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionOff = () => reduceQuery.matches || root.dataset.motion === "off";

const clamp = THREE.MathUtils.clamp;

/* ------------------------------------------------------------------ */
/* Renderer, scene, camera                                             */
/* ------------------------------------------------------------------ */

let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
} catch (error) {
  host.classList.add("mascot--failed");
  throw error;
}

const smallScreen = window.matchMedia("(max-width: 900px)");
const pixelRatio = () => Math.min(window.devicePixelRatio || 1, smallScreen.matches ? 1.5 : 2);

renderer.setPixelRatio(pixelRatio());
renderer.setClearColor(0x000000, 0);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();

const FOV = 28;
const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

/* ------------------------------------------------------------------ */
/* Textures                                                            */
/* ------------------------------------------------------------------ */

function radialTexture(stops, size = 256) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [offset, color] of stops) g.addColorStop(offset, color);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const glowTex = radialTexture([
  [0, "rgba(255,222,190,1)"],
  [0.25, "rgba(224,166,120,.55)"],
  [0.6, "rgba(185,116,63,.12)"],
  [1, "rgba(138,82,39,0)"],
]);

/* ------------------------------------------------------------------ */
/* Environment: dark studio, warm key with a cool mint kicker          */
/* ------------------------------------------------------------------ */

const envScene = new THREE.Scene();
envScene.background = new THREE.Color("#030303");

function softbox(w, h, x, y, z, color, intensity) {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 16),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity) })
  );
  m.scale.set(w, h, 0.3);
  m.position.set(x, y, z);
  m.lookAt(0, 0, 0);
  envScene.add(m);
}

softbox(5, 3.2, -3, 4.5, 4, 0xffffff, 3.2);
softbox(1.2, 6, 6, 0.5, 2, 0xffffff, 1.1);
softbox(3, 1, 1.5, 5, -1, 0xffffff, 0.8);
softbox(4, 5, -5, 0, -4, C.copper, 1.15);
softbox(4, 5, 5, 0, -4, C.mint, 0.7);
softbox(6, 3, 0, -5, 1, C.ember, 0.3);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(envScene, 0.02).texture;
scene.environmentIntensity = 1.0;
pmrem.dispose();

scene.add(new THREE.HemisphereLight(C.ink, 0x2a1c12, 2.5));
const keyLight = new THREE.DirectionalLight(0xfff6ed, 1.15);
keyLight.position.set(-3, 4, 5);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(C.copper, 1.45);
rimLight.position.set(3, -2, -2);
scene.add(rimLight);

const fillLight = new THREE.DirectionalLight(C.mint, 0.45);
fillLight.position.set(-3, -2, 2);
scene.add(fillLight);

/* No bloom pass. UnrealBloomPass writes luminance into pixels whose alpha
   is zero, and a premultiplied canvas composites that RGB anyway, so the
   glow showed up as a hard-edged wash filling the whole box. The additive
   halo sprites below give the eyes and antenna their glow for free. */

/* ------------------------------------------------------------------ */
/* Fresnel rim shells                                                  */
/* ------------------------------------------------------------------ */

function rimMaterial(color, power, strength) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uPower: { value: power },
      uStrength: { value: strength },
    },
    vertexShader: `
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uPower;
      uniform float uStrength;
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec3 N = normalize(vN);
        vec3 V = normalize(vV);
        float f = pow(1.0 - max(dot(N, V), 0.0), uPower);
        gl_FragColor = vec4(uColor * f * uStrength, f);
      }
    `,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
  });
}

function addRimShell(mesh, color, power, strength) {
  const shell = new THREE.Mesh(mesh.geometry, rimMaterial(color, power, strength));
  shell.renderOrder = 2;
  shell.userData.rimShell = true;
  mesh.add(shell);
  return shell;
}

/* ------------------------------------------------------------------ */
/* Rig                                                                 */
/* ------------------------------------------------------------------ */

const rig = new THREE.Group();
const robot = new THREE.Group();
const body = new THREE.Group();
const head = new THREE.Group();
body.add(head);
robot.add(body);
rig.add(robot);
scene.add(rig);

const haze = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: glowTex,
    color: C.copper,
    opacity: 0.22,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
    depthWrite: false,
    transparent: true,
  })
);
/* The halo has to stay inside the camera frame: a sprite wider than the
   frustum clips at the canvas edge and reads as a hard rectangle. */
haze.scale.set(3.6, 3.6, 1);
haze.position.set(0, 0, -2.2);
scene.add(haze);

/* ------------------------------------------------------------------ */
/* State                                                               */
/* ------------------------------------------------------------------ */

const look = { x: 0, y: 0 };
const target = { x: 0, y: 0 };
const glance = { x: 0, y: 0, until: -1 };

let elapsed = 0;
let lastMoveT = -10;
let heroVisible = true;
let ready = false;
let running = false;
let rafId = 0;
let intro = -1;
let nextBlink = 2.5 + Math.random() * 3.5;
let blinkT = -1;

const eyes = [];
const arms = [];
const antennaGlows = [];

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

let W = 0;
let H = 0;
let ratio = 0;

function layout() {
  const w = host.clientWidth;
  const h = host.clientHeight;
  if (!w || !h) {
    W = 0;
    H = 0;
    return false;
  }
  /* Assigning canvas.width reallocates the drawing buffer even when the
     value is unchanged, so only touch the renderer on a real change. */
  const next = pixelRatio();
  if (w === W && h === H && next === ratio) return true;
  W = w;
  H = h;
  ratio = next;

  renderer.setPixelRatio(ratio);
  renderer.setSize(W, H, false);
  camera.aspect = W / H;
  frameModel();
  return true;
}

/* Measured once, before anything animates: the bounds have to come from
   an unrotated, unscaled robot or the head's live tracking would inflate
   them every time the camera was reframed. */
const modelSize = new THREE.Vector3(1, 1, 1);

function measureModel() {
  rig.position.set(0, 0, 0);
  robot.scale.setScalar(1);
  robot.position.set(0, 0, 0);
  head.rotation.set(0, 0, 0);
  body.rotation.set(0, 0, 0);
  for (const { wrap, def } of arms) {
    wrap.position.set(def.x, def.y, def.z);
    wrap.rotation.set(0, 0, def.rz);
  }
  robot.updateMatrixWorld(true);

  const bounds = new THREE.Box3().setFromObject(robot);
  if (bounds.isEmpty()) return;

  bounds.getSize(modelSize);
  rig.position.copy(bounds.getCenter(new THREE.Vector3())).multiplyScalar(-1);
  robot.updateMatrixWorld(true);
}

function frameModel() {
  const padding = 1.04;
  const halfV = Math.tan(THREE.MathUtils.degToRad(FOV) / 2);
  const halfH = halfV * Math.max(camera.aspect, 0.001);
  const distV = (modelSize.y * padding) / 2 / halfV;
  const distH = (modelSize.x * padding) / 2 / Math.max(halfH, 1e-4);
  camera.position.set(0, 0, Math.max(distV, distH, 0.1));
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();
}

/* ------------------------------------------------------------------ */
/* Pointer — measured against the hero, not the 262px box, or the      */
/* clamp saturates before the cursor has crossed a third of the page.  */
/* ------------------------------------------------------------------ */

function onPointer(event) {
  if (event.clientX === undefined) return;
  const rect = hero.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const rx = Math.max(rect.width * 0.55, 460);
  const ry = Math.max(rect.height * 0.5, 320);
  target.x = clamp((event.clientX - (rect.left + rect.width / 2)) / rx, -1.2, 1.2);
  target.y = clamp((event.clientY - (rect.top + rect.height / 2)) / ry, -1.2, 1.2);
  lastMoveT = elapsed;
  glance.until = -1;
}

window.addEventListener("pointermove", onPointer, { passive: true });
window.addEventListener("pointerdown", onPointer, { passive: true });

/* ------------------------------------------------------------------ */
/* Model prep                                                          */
/* ------------------------------------------------------------------ */

function prepareModel(object, opts) {
  const { glossy = false, rim = null, tint = "#ffffff", smooth = false } = opts;
  const meshes = [];
  object.traverse((o) => {
    if (o.isMesh) meshes.push(o);
  });
  for (const mesh of meshes) {
    if (smooth) {
      let g = mesh.geometry.clone();
      g.deleteAttribute("normal");
      g.deleteAttribute("uv");
      g.deleteAttribute("uv1");
      g.deleteAttribute("tangent");
      g.deleteAttribute("color");
      g = mergeVertices(g, 1e-3);
      g.computeVertexNormals();
      mesh.geometry = g;
    }
    const params = { color: tint };
    if (glossy) {
      Object.assign(params, {
        metalness: 0.1,
        roughness: 0.3,
        clearcoat: 1.0,
        clearcoatRoughness: 0.16,
        envMapIntensity: 0.9,
      });
    } else {
      Object.assign(params, {
        metalness: 0,
        roughness: 0.48,
        clearcoat: 0.3,
        clearcoatRoughness: 0.4,
        envMapIntensity: 0.55,
      });
    }
    mesh.material = new THREE.MeshPhysicalMaterial(params);
    if (rim) addRimShell(mesh, rim.color, rim.power, rim.strength);
  }
}

function normaliseHead(object) {
  object.updateMatrixWorld(true);
  let box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  object.scale.multiplyScalar(2 / size.z);
  object.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(object);
  const centre = box.getCenter(new THREE.Vector3());
  object.position.set(-centre.x, -(box.min.y + 1), -centre.z);
  object.updateMatrixWorld(true);
}

/* ------------------------------------------------------------------ */
/* Visor                                                               */
/* ------------------------------------------------------------------ */

function roundedRectShape(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(-x - r, y);
  s.quadraticCurveTo(-x, y, -x, y + r);
  s.lineTo(-x, -y - r);
  s.quadraticCurveTo(-x, -y, -x - r, -y);
  s.lineTo(x + r, -y);
  s.quadraticCurveTo(x, -y, x, -y - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function subdivide4(geo) {
  const pos = geo.attributes.position;
  const verts = [];
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 3) {
    a.fromBufferAttribute(pos, i);
    b.fromBufferAttribute(pos, i + 1);
    c.fromBufferAttribute(pos, i + 2);
    const ab = a.clone().add(b).multiplyScalar(0.5);
    const bc = b.clone().add(c).multiplyScalar(0.5);
    const ca = c.clone().add(a).multiplyScalar(0.5);
    verts.push(
      a.x, a.y, a.z, ab.x, ab.y, ab.z, ca.x, ca.y, ca.z,
      ab.x, ab.y, ab.z, b.x, b.y, b.z, bc.x, bc.y, bc.z,
      ca.x, ca.y, ca.z, bc.x, bc.y, bc.z, c.x, c.y, c.z,
      ab.x, ab.y, ab.z, bc.x, bc.y, bc.z, ca.x, ca.y, ca.z
    );
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  return g;
}

function visorGeometry(w, h, corner, centerY, radius) {
  let g = new THREE.ShapeGeometry(roundedRectShape(w, h, corner), 48).toNonIndexed();
  for (let i = 0; i < 3; i++) g = subdivide4(g);
  const p = g.attributes.position;
  const normals = new Float32Array(p.count * 3);
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const y = p.getY(i) + centerY;
    const z = Math.sqrt(Math.max(radius * radius - x * x - y * y, 0));
    p.setXYZ(i, x, y, z);
    v.set(x, y, z).normalize();
    normals[i * 3] = v.x;
    normals[i * 3 + 1] = v.y;
    normals[i * 3 + 2] = v.z;
  }
  g.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
  g.computeBoundingSphere();
  return g;
}

function addVisor(R) {
  const bezel = new THREE.Mesh(
    visorGeometry(1.86, 1.12, 0.46, -0.07, R * 1.03),
    new THREE.MeshPhysicalMaterial({
      color: C.bezel,
      roughness: 0.3,
      metalness: 0.3,
      clearcoat: 0.8,
      polygonOffset: true,
      polygonOffsetFactor: -6,
      polygonOffsetUnits: -6,
    })
  );
  bezel.renderOrder = 3;

  const glass = new THREE.Mesh(
    visorGeometry(1.74, 1.0, 0.4, -0.07, R * 1.036),
    new THREE.MeshPhysicalMaterial({
      color: 0x000000,
      roughness: 0.12,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      envMapIntensity: 0.9,
      polygonOffset: true,
      polygonOffsetFactor: -8,
      polygonOffsetUnits: -8,
    })
  );
  glass.renderOrder = 4;

  head.add(bezel, glass);
}

/* ------------------------------------------------------------------ */
/* Eyes                                                                */
/* ------------------------------------------------------------------ */

const irisTex = radialTexture([
  [0, "#ffe6cd"],
  [0.45, "#e0a678"],
  [0.8, "#b9743f"],
  [1, "#8a5227"],
]);

function buildEye(side, R) {
  const x = 0.43 * side;
  const y = -0.08;
  const r = R * 1.055;
  const z = Math.sqrt(Math.max(r * r - x * x - y * y, 0));
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), g.position.clone().normalize());

  const eyeMat = (extra) =>
    new THREE.MeshBasicMaterial(
      Object.assign({ transparent: true, toneMapped: false, depthWrite: false, depthTest: false }, extra)
    );

  const halo = new THREE.Mesh(
    new THREE.CircleGeometry(0.42),
    eyeMat({ map: glowTex, color: C.copper, opacity: 0.34, blending: THREE.AdditiveBlending })
  );
  halo.position.z = -0.004;
  halo.renderOrder = 9;

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.168, 0.212, 64),
    eyeMat({ color: new THREE.Color(1.35, 1.05, 0.82) })
  );
  ring.renderOrder = 10;

  const iris = new THREE.Mesh(
    new THREE.CircleGeometry(0.17),
    eyeMat({ map: irisTex, color: new THREE.Color(1.15, 1.0, 0.88) })
  );
  iris.position.z = 0.001;
  iris.renderOrder = 11;

  const pupilWrap = new THREE.Group();
  const pupil = new THREE.Mesh(new THREE.CircleGeometry(0.083), eyeMat({ color: C.pupil }));
  pupil.position.z = 0.003;
  pupil.renderOrder = 12;
  const glint = new THREE.Mesh(new THREE.CircleGeometry(0.022), eyeMat({ color: 0xfff4e8 }));
  glint.position.set(0.032, 0.034, 0.005);
  glint.renderOrder = 13;
  pupilWrap.add(pupil, glint);

  g.add(halo, ring, iris, pupilWrap);
  head.add(g);
  /* Every part is transparent with depth testing off, so the only thing
     standing between "pupil on iris" and "iris on pupil" is draw order.
     Distinct renderOrders make the stack deterministic; equal ones left
     it to a depth tie that flipped as the head turned. */
  return { group: g, pupilWrap, qSurface: g.quaternion.clone() };
}

/* ------------------------------------------------------------------ */
/* Antenna tips                                                        */
/* ------------------------------------------------------------------ */

function addAntennaBalls(meshes) {
  const sides = { left: [], right: [] };
  const v = new THREE.Vector3();
  for (const mesh of meshes) {
    const pos = mesh.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
      if (v.y > 0.75 && Math.abs(v.x) > 0.15) (v.x < 0 ? sides.left : sides.right).push(v.clone());
    }
  }
  for (const key of ["left", "right"]) {
    const pts = sides[key];
    if (!pts.length) continue;
    let top = pts[0];
    for (const p of pts) if (p.y > top.y) top = p;
    const near = pts.filter((p) => p.distanceTo(top) <= 0.2 && p.y >= top.y - 0.1);
    const c = near.reduce((acc, p) => acc.add(p), new THREE.Vector3()).divideScalar(Math.max(near.length, 1));
    c.y = Math.max(c.y, top.y - 0.1);

    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.118, 32, 16),
      new THREE.MeshPhysicalMaterial({
        color: C.mint,
        emissive: C.mintGlow,
        emissiveIntensity: 1.6,
        roughness: 0.22,
        clearcoat: 1,
        clearcoatRoughness: 0.14,
      })
    );
    ball.position.copy(c);
    head.add(ball);

    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        color: C.mint,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
        depthWrite: false,
        transparent: true,
      })
    );
    glow.scale.set(0.62, 0.62, 1);
    glow.position.copy(c);
    head.add(glow);
    antennaGlows.push(glow);
  }
}

function mountHead(headRoot, detectAntennas) {
  head.add(headRoot);
  head.updateMatrixWorld(true);

  const meshes = [];
  headRoot.traverse((o) => {
    if (o.isMesh && !o.userData.rimShell) meshes.push(o);
  });

  const ray = new THREE.Raycaster(new THREE.Vector3(0, 0, 5), new THREE.Vector3(0, 0, -1));
  const hits = ray.intersectObjects(meshes, false);
  let R = 1;
  if (hits.length) R = clamp(hits[0].point.length(), 0.85, 1.1);

  /* Snap the normals of vertices that sit on the sphere to true radial,
     otherwise the clearcoat reflection breaks up across panel seams. */
  const v = new THREE.Vector3();
  const n = new THREE.Vector3();
  for (const mesh of meshes) {
    const pos = mesh.geometry.attributes.position;
    const nor = mesh.geometry.attributes.normal;
    if (!nor) continue;
    const nInv = new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld).invert();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
      const d = v.length();
      if (Math.abs(d - R) <= R * 0.07) {
        n.copy(v).normalize().applyMatrix3(nInv).normalize();
        nor.setXYZ(i, n.x, n.y, n.z);
      }
    }
    nor.needsUpdate = true;
  }

  addVisor(R);
  eyes.push(buildEye(-1, R), buildEye(1, R));
  if (detectAntennas) addAntennaBalls(meshes);
}

/* ------------------------------------------------------------------ */
/* Arms                                                                */
/* ------------------------------------------------------------------ */

const ARM_REST = [
  { x: -1.32, y: -0.72, z: 0.15, rz: -0.62, phase: 0 },
  { x: 1.32, y: -0.72, z: 0.15, rz: 0.62, phase: Math.PI * 0.85 },
];

function normaliseArm(object) {
  object.updateMatrixWorld(true);
  let box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  object.scale.multiplyScalar(0.78 / size.y);
  object.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(object);
  const c = box.getCenter(new THREE.Vector3());
  object.position.set(-c.x, -c.y, -c.z);
  const wrap = new THREE.Group();
  wrap.add(object);
  return wrap;
}

function mountArms(armTpl) {
  const copies = [armTpl, armTpl.clone(true)];
  copies.forEach((object, i) => {
    const wrap = normaliseArm(object);
    const def = ARM_REST[i];
    wrap.position.set(def.x, def.y, def.z);
    wrap.rotation.z = def.rz;
    body.add(wrap);
    arms.push({ wrap, def });
  });
}

/* ------------------------------------------------------------------ */
/* Procedural fallbacks — used only if a GLB fails to arrive           */
/* ------------------------------------------------------------------ */

function buildFallbackHead() {
  const g = new THREE.Group();
  const mat = new THREE.MeshPhysicalMaterial({ color: 0x332c24, roughness: 0.26, clearcoat: 1 });
  g.add(new THREE.Mesh(new THREE.SphereGeometry(1, 64, 32), mat));
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.2, 32), mat);
    ear.rotation.z = Math.PI / 2;
    ear.position.x = s * 1.0;
    g.add(ear);
  }
  for (const s of [-1, 1]) {
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.55, 16), mat);
    rod.position.set(s * 0.42, 1.25, 0);
    g.add(rod);
    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 24, 12),
      new THREE.MeshPhysicalMaterial({
        color: C.mint,
        emissive: C.mintGlow,
        emissiveIntensity: 1.6,
        roughness: 0.22,
        clearcoat: 1,
        clearcoatRoughness: 0.14,
      })
    );
    ball.position.set(s * 0.42, 1.55, 0);
    g.add(ball);
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        color: C.mint,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
        depthWrite: false,
        transparent: true,
      })
    );
    glow.scale.set(0.62, 0.62, 1);
    glow.position.copy(ball.position);
    g.add(glow);
    antennaGlows.push(glow);
  }
  const meshes = [];
  g.traverse((o) => {
    if (o.isMesh) meshes.push(o);
  });
  for (const m of meshes) addRimShell(m, C.copper, 4.5, 0.32);
  return g;
}

function buildFallbackArm() {
  const mat = new THREE.MeshPhysicalMaterial({
    color: C.shellDark,
    metalness: 0,
    roughness: 0.48,
    clearcoat: 0.3,
    clearcoatRoughness: 0.4,
    envMapIntensity: 0.55,
  });
  const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.42, 12, 32), mat);
  const g = new THREE.Group();
  g.add(mesh);
  addRimShell(mesh, C.copper, 2.6, 1.05);
  return g;
}

/* ------------------------------------------------------------------ */
/* Load                                                                */
/* ------------------------------------------------------------------ */

const gltfLoader = new GLTFLoader();
const loadGLB = (url) => new Promise((resolve, reject) => gltfLoader.load(url, resolve, undefined, reject));

async function init() {
  const [headRes, armRes] = await Promise.allSettled([loadGLB(HEAD_GLB), loadGLB(ARM_GLB)]);

  let headRoot;
  if (headRes.status === "fulfilled") {
    headRoot = headRes.value.scene;
    prepareModel(headRoot, {
      glossy: true,
      tint: "#4a4238",
      rim: { color: C.copper, power: 4.5, strength: 0.34 },
    });
  } else {
    headRoot = buildFallbackHead();
  }
  normaliseHead(headRoot);

  let armTpl;
  if (armRes.status === "fulfilled") {
    armTpl = armRes.value.scene;
    prepareModel(armTpl, {
      glossy: false,
      smooth: true,
      tint: "#241f19",
      rim: { color: C.copper, power: 2.6, strength: 1.05 },
    });
  } else {
    armTpl = buildFallbackArm();
  }

  mountHead(headRoot, headRes.status === "fulfilled");
  mountArms(armTpl);

  measureModel();
  if (!layout()) return;
  ready = true;

  if (motionOff()) {
    staticPose();
  } else {
    intro = 0;
    robot.scale.setScalar(0.001);
    start();
  }
}

/* ------------------------------------------------------------------ */
/* Poses and loop                                                      */
/* ------------------------------------------------------------------ */

function render() {
  renderer.render(scene, camera);
}

/* Flat decals tangent to a sphere go edge-on as the head turns, so at yaw
   the far eye collapsed to a sliver while the near one still read fine and
   the pair looked unrelated. Blending each eye part-way toward facing the
   camera keeps both legible without detaching them from the face. */
const EYE_BILLBOARD = 0.55;
const _camLocal = new THREE.Vector3();
const _eyeDir = new THREE.Vector3();
const _qBill = new THREE.Quaternion();
const _Z = new THREE.Vector3(0, 0, 1);

function orientEyes() {
  head.updateMatrixWorld(true);
  _camLocal.copy(camera.position);
  head.worldToLocal(_camLocal);
  for (const eye of eyes) {
    _eyeDir.copy(_camLocal).sub(eye.group.position).normalize();
    _qBill.setFromUnitVectors(_Z, _eyeDir);
    eye.group.quaternion.copy(eye.qSurface).slerp(_qBill, EYE_BILLBOARD);
  }
}

function staticPose() {
  intro = 1;
  blinkT = -1;
  look.x = look.y = 0;
  target.x = target.y = 0;
  glance.until = -1;
  robot.scale.setScalar(1);
  robot.position.y = 0;
  /* A small fixed turn toward the hero copy reads as attention rather
     than a dead-front mannequin, and it never moves. */
  head.rotation.set(-0.05, -0.14, 0.02);
  body.rotation.set(0, -0.07, 0);
  orientEyes();
  for (const { wrap, def } of arms) {
    wrap.position.set(def.x, def.y, def.z);
    wrap.rotation.set(0, 0, def.rz);
  }
  for (const eye of eyes) {
    eye.group.scale.y = 1;
    eye.pupilWrap.position.set(0, 0, 0);
  }
  for (const g of antennaGlows) g.material.opacity = 0.85;
  render();
}

const clock = new THREE.Clock();

function tick() {
  rafId = requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);
  elapsed += dt;
  const t = elapsed;

  if (t - lastMoveT > 3.5 && t > glance.until) {
    target.x = Math.sin(t * 0.45) * 0.45;
    target.y = Math.sin(t * 0.31 + 1.2) * 0.2;
  }

  const s = 1 - Math.pow(0.0025, dt);
  const gx = t < glance.until ? glance.x : target.x;
  const gy = t < glance.until ? glance.y : target.y;
  look.x += (gx - look.x) * s;
  look.y += (gy - look.y) * s;

  if (intro >= 0 && intro < 1) intro = Math.min(1, intro + dt * 1.4);
  if (intro >= 0) {
    const k = intro;
    robot.scale.setScalar(Math.max(1 + 2.4 * Math.pow(k - 1, 3) + 1.4 * Math.pow(k - 1, 2), 0.001));
  }

  robot.position.y = Math.sin(t * 1.6) * 0.09;
  const bob = robot.position.y;

  head.rotation.y = look.x * 0.5;
  head.rotation.x = look.y * 0.42;
  head.rotation.z = -look.x * 0.06 + Math.sin(t * 1.1) * 0.015;

  body.rotation.y = look.x * 0.28;
  body.rotation.x = look.y * 0.12;

  orientEyes();

  for (const { wrap, def } of arms) {
    const w = Math.sin(t * 2.0 + def.phase);
    const sign = Math.sign(def.x);
    wrap.position.y = def.y + w * 0.13 - bob * 0.35;
    wrap.position.x = def.x + sign * look.x * -0.04;
    wrap.rotation.z = def.rz + w * 0.12 * sign;
    wrap.rotation.x = Math.sin(t * 1.3 + def.phase) * 0.08;
  }

  const px = clamp(look.x * 0.075, -0.07, 0.07);
  const py = clamp(-look.y * 0.06, -0.06, 0.06);
  for (const eye of eyes) eye.pupilWrap.position.set(px, py, 0);

  if (blinkT < 0 && t >= nextBlink) {
    blinkT = 0;
    nextBlink = t + 2.5 + Math.random() * 3.5;
  }
  if (blinkT >= 0) {
    blinkT += dt;
    const p = blinkT / 0.32;
    if (p >= 1) {
      blinkT = -1;
      for (const e of eyes) e.group.scale.y = 1;
    } else {
      const sc = 0.08 + 0.92 * Math.abs(Math.cos(Math.PI * p));
      for (const e of eyes) e.group.scale.y = sc;
    }
  }

  const ag = 0.75 * (0.85 + Math.sin(t * 1.8) * 0.15) + 0.2;
  const antScale = 0.62 + Math.sin(t * 2.2) * 0.06;
  for (const g of antennaGlows) {
    g.material.opacity = ag;
    g.scale.set(antScale, antScale, 1);
  }
  haze.material.opacity = 0.18 + Math.sin(t * 1.2) * 0.05;

  render();
}

function start() {
  if (running || !ready) return;
  running = true;
  clock.getDelta();
  rafId = requestAnimationFrame(tick);
}

function stop() {
  if (!running) return;
  running = false;
  cancelAnimationFrame(rafId);
}

function sync() {
  if (!ready) return;
  if (motionOff() || document.hidden || !heroVisible || !layout()) {
    stop();
    if (motionOff() && W && H) staticPose();
    return;
  }
  start();
}

/* ------------------------------------------------------------------ */
/* Lifecycle                                                           */
/* ------------------------------------------------------------------ */

new IntersectionObserver(
  (entries) => {
    heroVisible = entries[0].isIntersecting;
    sync();
  },
  { threshold: 0 }
).observe(hero);

new ResizeObserver(() => {
  if (!ready) return;
  if (!layout()) {
    stop();
    return;
  }
  if (motionOff()) {
    stop();
    staticPose();
    return;
  }
  sync();
}).observe(host);

document.addEventListener("visibilitychange", sync);
reduceQuery.addEventListener("change", sync);
new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ["data-motion"] });

canvas.addEventListener("webglcontextlost", (event) => {
  event.preventDefault();
  stop();
  ready = false;
  host.classList.add("mascot--failed");
});

/* The robot looks at the command palette when it opens. */
window.__mascotGlance = () => {
  if (!ready || motionOff()) return;
  const dlg = document.getElementById("palette");
  if (dlg) {
    const r = dlg.getBoundingClientRect();
    const hr = hero.getBoundingClientRect();
    if (r.width && hr.width) {
      glance.x = clamp((r.left + r.width / 2 - (hr.left + hr.width / 2)) / Math.max(hr.width * 0.55, 460), -1.2, 1.2);
      glance.y = clamp((r.top + r.height / 2 - (hr.top + hr.height / 2)) / Math.max(hr.height * 0.5, 320), -1.2, 1.2);
    }
  }
  glance.until = elapsed + 1.6;
  if (!running) start();
};

smallScreen.addEventListener("change", () => {
  if (!ready) return;
  layout();
  sync();
});

init().catch((error) => {
  ready = false;
  stop();
  host.classList.add("mascot--failed");
  console.warn("mascot: could not start", error);
});
