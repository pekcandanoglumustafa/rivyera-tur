"use client";
import { useEffect, useRef, useState } from "react";

/**
 * 3D Korsan Gemisi — kodla inşa edilmiş low-poly model.
 * Sürükleyerek 360° döndürülür; boşta kendi kendine döner ve dalgada sallanır.
 * three.js sayfa yüklendikten sonra tembel (lazy) yüklenir → LCP etkilenmez.
 */
export default function PirateShip3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (disposed || !mountRef.current) return;

      const mount = mountRef.current;
      const W = mount.clientWidth;
      const H = mount.clientHeight;

      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x07253a, 14, 30);

      const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
      camera.position.set(0, 3.2, 10);
      camera.lookAt(0, 0.8, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      mount.appendChild(renderer.domElement);

      // Işıklar — gün batımı Akdeniz
      scene.add(new THREE.HemisphereLight(0xbfe8e6, 0x0b3352, 0.9));
      const sun = new THREE.DirectionalLight(0xffd9a0, 1.6);
      sun.position.set(5, 6, 4);
      scene.add(sun);
      const rim = new THREE.DirectionalLight(0x0ea5a4, 0.6);
      rim.position.set(-6, 3, -4);
      scene.add(rim);

      // ====== GEMİ ======
      const ship = new THREE.Group();

      const wood = new THREE.MeshStandardMaterial({ color: 0x7a4a21, roughness: 0.8 });
      const woodDark = new THREE.MeshStandardMaterial({ color: 0x59331a, roughness: 0.85 });
      const sailMat = new THREE.MeshStandardMaterial({ color: 0xf3ead6, roughness: 0.9, side: THREE.DoubleSide });
      const flagMat = new THREE.MeshStandardMaterial({ color: 0x111418, roughness: 0.9, side: THREE.DoubleSide });
      const accent = new THREE.MeshStandardMaterial({ color: 0xff6b1a, roughness: 0.6 });

      // Gövde: 2D profili döşe, genişliğe doğru kalınlaştır
      const hullShape = new THREE.Shape();
      hullShape.moveTo(-3.2, 0.9);
      hullShape.quadraticCurveTo(-3.4, 0.2, -2.6, -0.35);
      hullShape.lineTo(2.4, -0.35);
      hullShape.quadraticCurveTo(3.6, 0.1, 3.9, 1.15);
      hullShape.lineTo(3.1, 1.15);
      hullShape.quadraticCurveTo(2.6, 0.35, 2.2, 0.3);
      hullShape.lineTo(-2.4, 0.3);
      hullShape.quadraticCurveTo(-2.9, 0.35, -3.2, 0.9);
      const hullGeo = new THREE.ExtrudeGeometry(hullShape, { depth: 1.6, bevelEnabled: true, bevelThickness: 0.18, bevelSize: 0.18, bevelSegments: 2 });
      hullGeo.translate(0, 0, -0.8);
      const hull = new THREE.Mesh(hullGeo, wood);
      ship.add(hull);

      // Güverte
      const deck = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.12, 1.7), woodDark);
      deck.position.y = 0.36;
      ship.add(deck);

      // Kıç kasarası (arka yüksek kısım)
      const stern = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.7, 1.5), wood);
      stern.position.set(-2.35, 0.75, 0);
      ship.add(stern);
      const sternRoof = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.1, 1.65), accent);
      sternRoof.position.set(-2.35, 1.15, 0);
      ship.add(sternRoof);

      // Direkler + yelkenler
      const bendSail = (g: InstanceType<typeof THREE.PlaneGeometry>) => {
        const pos = g.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          pos.setZ(i, Math.sin((x + 1) * 1.2) * 0.22);
        }
        g.computeVertexNormals();
        return g;
      };

      const mastData = [
        { x: 0.7, h: 3.4, sw: 2.0, sh: 1.5 },
        { x: -1.1, h: 2.9, sw: 1.7, sh: 1.25 },
      ];
      let flag: InstanceType<typeof THREE.Mesh> | null = null;
      mastData.forEach((m, i) => {
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, m.h, 8), woodDark);
        mast.position.set(m.x, 0.4 + m.h / 2, 0);
        ship.add(mast);
        const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, m.sw + 0.4, 8), woodDark);
        yard.rotation.x = Math.PI / 2;
        yard.position.set(m.x, 0.4 + m.h * 0.82, 0);
        ship.add(yard);
        const sail = new THREE.Mesh(bendSail(new THREE.PlaneGeometry(m.sw, m.sh, 12, 4)), sailMat);
        sail.rotation.y = Math.PI / 2;
        sail.position.set(m.x, 0.4 + m.h * 0.82 - m.sh / 2 - 0.05, 0);
        ship.add(sail);
        if (i === 0) {
          flag = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.4, 10, 3), flagMat);
          flag.position.set(m.x + 0.36, 0.4 + m.h + 0.18, 0);
          ship.add(flag);
        }
      });

      // Cıvadra (öndeki eğik direk)
      const bowsprit = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.6, 8), woodDark);
      bowsprit.rotation.z = -1.15;
      bowsprit.position.set(4.15, 1.45, 0);
      ship.add(bowsprit);

      ship.position.y = 0.15;
      scene.add(ship);

      // ====== SU ======
      const waterGeo = new THREE.PlaneGeometry(60, 60, 48, 48);
      const water = new THREE.Mesh(
        waterGeo,
        new THREE.MeshStandardMaterial({ color: 0x0d7d7c, roughness: 0.35, metalness: 0.1, transparent: true, opacity: 0.95 })
      );
      water.rotation.x = -Math.PI / 2;
      water.position.y = -0.15;
      scene.add(water);
      const wPos = waterGeo.attributes.position;
      const wBase = Float32Array.from(wPos.array);

      // ====== ETKİLEŞİM ======
      let targetRotY = 0.6;
      let velocity = 0;
      let dragging = false;
      let lastX = 0;
      let idleTimer = 0;

      const onDown = (e: PointerEvent) => { dragging = true; lastX = e.clientX; idleTimer = 0; };
      const onMove = (e: PointerEvent) => {
        if (!dragging) return;
        const dx = e.clientX - lastX;
        lastX = e.clientX;
        velocity = dx * 0.006;
        targetRotY += velocity;
      };
      const onUp = () => { dragging = false; };
      renderer.domElement.style.touchAction = "pan-y";
      renderer.domElement.addEventListener("pointerdown", onDown);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);

      const onResize = () => {
        const w = mount.clientWidth, h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      // ====== DÖNGÜ ======
      const clock = new THREE.Clock();
      let raf = 0;
      const loop = () => {
        raf = requestAnimationFrame(loop);
        const t = clock.getElapsedTime();

        // Boştayken kendi kendine dön
        if (!dragging) {
          velocity *= 0.94;
          idleTimer += clock.getDelta();
          targetRotY += velocity + 0.0022;
        }
        ship.rotation.y += (targetRotY - ship.rotation.y) * 0.12;

        // Dalgada sallanma
        ship.position.y = 0.15 + Math.sin(t * 1.1) * 0.09;
        ship.rotation.z = Math.sin(t * 0.9) * 0.035;
        ship.rotation.x = Math.sin(t * 0.7) * 0.02;

        // Su yüzeyi dalgalanması
        for (let i = 0; i < wPos.count; i++) {
          const x = wBase[i * 3], y = wBase[i * 3 + 1];
          wPos.setZ(i, Math.sin(x * 0.5 + t * 1.2) * 0.12 + Math.cos(y * 0.4 + t * 0.9) * 0.12);
        }
        wPos.needsUpdate = true;

        // Bayrak dalgalanması
        if (flag) {
          const fg = (flag as InstanceType<typeof THREE.Mesh>).geometry as InstanceType<typeof THREE.PlaneGeometry>;
          const fp = fg.attributes.position;
          for (let i = 0; i < fp.count; i++) {
            const x = fp.getX(i);
            fp.setZ(i, Math.sin(x * 6 + t * 6) * 0.05 * (x + 0.35));
          }
          fp.needsUpdate = true;
        }

        renderer.render(scene, camera);
      };
      loop();
      setReady(true);

      cleanup = () => {
        cancelAnimationFrame(raf);
        renderer.domElement.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        mount.removeChild(renderer.domElement);
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div className="relative h-[380px] w-full cursor-grab active:cursor-grabbing md:h-[460px]" ref={mountRef}>
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white/60">
          Gemi denize indiriliyor…
        </div>
      )}
    </div>
  );
}
