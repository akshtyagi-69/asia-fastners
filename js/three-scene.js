/**
 * ASIA FASTNERS PVT LTD - THREE.JS 3D FASTENER SCENE (three-scene.js)
 * Manages WebGL procedural geometry, PBR metallic lighting, scroll-choreographed
 * disassembly, interactive lab controls, and responsive camera framing.
 */

(function () {
  const cv = $("#c");
  if (!cv) return;

  let R;
  try {
    R = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
  } catch (e) {}

  if (!R || typeof THREE === "undefined") {
    document.body.classList.add("no3d");
    const heroEl = $("#hero");
    if (heroEl) heroEl.classList.add("show");
    return;
  }

  const mobile = window.innerWidth < 820;
  R.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));

  const sc = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(35, 1, .1, 100);

  sc.add(new THREE.HemisphereLight(0xcfd8e6, 0x15191f, .9));

  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(5, 6, 6);
  sc.add(key);

  const rim = new THREE.DirectionalLight(0x2457A7, 2.2);
  rim.position.set(-6, 2, -5);
  sc.add(rim);

  const spot = new THREE.PointLight(0xF47735, .8, 20);
  spot.position.set(-3, -2, 4);
  sc.add(spot);

  const mat = new THREE.MeshStandardMaterial({ color: 0xb4bcc8, metalness: .85, roughness: .32 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x8d96a3, metalness: .9, roughness: .4 });

  const G = new THREE.Group();
  sc.add(G);

  const P = .25; // Thread pitch

  // Bolt assembly (axis = Y)
  const bolt = new THREE.Group();
  const head = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, .6, 6), mat);
  head.position.y = -1.55;
  bolt.add(head);

  const fl = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.2, .14, 48), mat);
  fl.position.y = -1.2;
  bolt.add(fl);

  const sh = new THREE.Mesh(new THREE.CylinderGeometry(.5, .5, 3.2, 40), dark);
  sh.position.y = .43;
  bolt.add(sh);

  class Helix extends THREE.Curve {
    getPoint(t, o = new THREE.Vector3()) {
      const a = t * ((3.1 - .0) / P) * Math.PI * 2;
      return o.set(.5 * Math.cos(a), -1.1 + t * 3.1, .5 * Math.sin(a));
    }
  }

  const th = new THREE.Mesh(new THREE.TubeGeometry(new Helix(), mobile ? 260 : 480, .055, 6, false), mat);
  bolt.add(th);
  G.add(bolt);

  // Hex nut
  const hexShape = r => {
    const s = new THREE.Shape();
    for (let i = 0; i < 6; i++) {
      const a = i * Math.PI / 3;
      i ? s.lineTo(r * Math.cos(a), r * Math.sin(a)) : s.moveTo(r * Math.cos(a), r * Math.sin(a));
    }
    return s;
  };

  const ring = (s, r) => {
    const h = new THREE.Path();
    h.absarc(0, 0, r, 0, Math.PI * 2, true);
    s.holes.push(h);
    return s;
  };

  const ng = new THREE.ExtrudeGeometry(ring(hexShape(.95), .53), { depth: .8, bevelEnabled: false });
  ng.translate(0, 0, -.4);
  ng.rotateX(-Math.PI / 2);
  const nut = new THREE.Mesh(ng, mat);
  G.add(nut);

  // Flat washer
  const ws = new THREE.Shape();
  ws.absarc(0, 0, 1.15, 0, Math.PI * 2, false);
  const wg = new THREE.ExtrudeGeometry(ring(ws, .55), { depth: .12, bevelEnabled: false, curveSegments: 48 });
  wg.translate(0, 0, -.06);
  wg.rotateX(-Math.PI / 2);
  const wash = new THREE.Mesh(wg, mat);
  G.add(wash);

  G.rotation.z = .35;

  const WY = -1.05, NY = -.59;
  let eW = 1, eN = 1, tW = 1, tN = 1, az = 0, dist = 15, tD = 15, hgt = 1, tH = 1, tAz = 0, mx = 0, my = 0, userAz = 0, drag = false, lx = 0, tL = null, auto = true, intro = !RM, t0 = performance.now();

  window.trigger3DFastener = function (fasten) {
    if (RM) return;
    if (fasten) {
      tW = 0; tN = 0; tAz += Math.PI * 5; tD = 8.2; tH = 0.5;
    } else {
      tD = 9.5; tH = 1; tAz += Math.PI * 2;
    }
  };

  const sm = x => x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x);

  function pose() {
    wash.position.y = WY + eW * 2.4;
    nut.position.y = NY + eN * 4.6;
    nut.rotation.y = -eN * 4.6 / P * Math.PI * 2;
  }

  const heroEl = $("#hero");
  function endIntro() {
    intro = false;
    if (heroEl) heroEl.classList.add("show");
    tD = 9.5;
  }

  if (RM) {
    eW = eN = 0; tW = tN = 0; dist = tD = 9.5;
    if (heroEl) heroEl.classList.add("show");
  }

  const story = $("#story");
  const chs = [...document.querySelectorAll(".ch")];
  const pg = $("#pg");
  const lab = $("#lab");
  let labOn = false;

  if (lab) {
    new IntersectionObserver(e => {
      labOn = e[0].isIntersecting;
    }, { threshold: .35 }).observe(lab);

    const lxBtn = $("#lx");
    if (lxBtn) lxBtn.onclick = () => { tL = 1; };
    const laBtn = $("#la");
    if (laBtn) laBtn.onclick = () => { tL = 0; };
    const lrBtn = $("#lr");
    if (lrBtn) {
      lrBtn.onclick = function () {
        auto = !auto;
        this.textContent = "Auto-rotate: " + (auto ? "on" : "off");
        this.setAttribute("aria-pressed", auto);
      };
    }

    lab.addEventListener("pointerdown", e => {
      if (e.target.closest("button")) return;
      drag = true;
      lx = e.clientX;
    });

    window.addEventListener("pointerup", () => drag = false);
    window.addEventListener("pointermove", e => {
      if (drag) {
        userAz += (e.clientX - lx) * .01;
        lx = e.clientX;
      }
      if (e.pointerType === "mouse") {
        mx = e.clientX / window.innerWidth - .5;
        my = e.clientY / window.innerHeight - .5;
      }
    });
  }

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    R.setSize(w, h, false);
    const aspect = w / h;
    cam.aspect = aspect;
    if (aspect < 1) {
      const hFov = 35 * Math.PI / 180;
      const vFov = 2 * Math.atan(Math.tan(hFov / 2) / (aspect * 1.28)) * (180 / Math.PI);
      cam.fov = Math.min(54, Math.max(35, vFov));
    } else {
      cam.fov = 35;
    }
    cam.updateProjectionMatrix();
  }

  window.addEventListener("resize", resize);
  resize();

  function frame() {
    requestAnimationFrame(frame);
    const now = performance.now(), t = (now - t0) / 1000;
    let inStory = false;
    let sp = 0;
    let sr = null;

    if (story) {
      sr = story.getBoundingClientRect();
      sp = Math.max(0, Math.min(1, -sr.top / (sr.height - window.innerHeight)));
      inStory = sr.top <= 100 && sr.bottom >= 100;
    }

    let op = 1;

    if (intro && window.scrollY < 50) {
      tW = 1 - sm((t - 1) / 2.2);
      tN = 1 - sm((t - 3) / 3.2);
      tD = 15 - 5.5 * sm(t / 6);
      tAz = t * .25;
      if (t > 5.8) endIntro();
    } else if (intro) {
      endIntro();
      tW = tN = 0;
    }

    if (!intro) {
      if (inStory) {
        tW = 1 - sm((sp - .2) / .2);
        tN = 1 - sm((sp - .5) / .3);
        tD = sp < .35 ? 9.5 : sp < .75 ? 5.2 : 12;
        tH = sp < .75 ? .6 : 2;
        tAz = sp * Math.PI * 1.6;
        const ci = Math.min(4, Math.floor(sp * 5));
        chs.forEach((c, i) => c.classList.toggle("on", i === ci));
        if (pg) pg.style.width = sp * 100 + "%";
      } else if (labOn) {
        if (tL !== null) { tW = tN = tL; }
        tD = 10;
        tH = 1;
        if (auto) tAz += .006;
      } else {
        tW = tN = 0;
        tD = (sr && sr.bottom < 0) ? 11 : 9.5;
        tAz += .002;
        if (sr && sr.bottom < 0) {
          op = Math.max(.15, 1 - (-sr.bottom) / (window.innerHeight * 1.5));
        }
      }
    }

    if (!inStory) chs.forEach(c => c.classList.remove("on"));

    const k = .07;
    eW += (tW - eW) * k;
    eN += (tN - eN) * k;
    dist += (tD - dist) * .05;
    hgt += (tH - hgt) * .05;
    az += (tAz - az) * .06;

    pose();

    const isMob = window.innerWidth < 820;
    let targetGx = 0;
    let targetY = 0.4;

    if (!isMob) {
      if (!inStory && !labOn && sr && sr.top >= 0) targetGx = -1.45;
    } else {
      if (!inStory && !labOn && sr && sr.top >= 0) targetY = -0.32;
      else if (inStory) targetY = 0.18;
    }

    G.position.x += (targetGx - G.position.x) * .06;
    G.rotation.y = az + userAz + (RM ? 0 : mx * .5);
    G.rotation.x = RM ? 0 : my * .25;

    cam.position.set(0, hgt + 1, dist);
    cam.lookAt(0, targetY, 0);

    key.position.x = 5 + mx * 4;
    cv.style.opacity = op;

    R.render(sc, cam);
  }

  frame();
})();
