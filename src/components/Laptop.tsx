import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Laptop() {
  const { scene } = useGLTF("/models/laptop.glb");
  const ref = useRef<any>();
  const mouseRef = useRef({ x: 0, y: 0 });

  const defaultRot = { x: -0.5, y: 0.3 };
  const screenTexture = useTexture("/images/screen.jpg");
  screenTexture.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    let monitorMesh: THREE.Mesh | null = null;
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mat = child.material as THREE.MeshStandardMaterial;
        const gradientMap = createGradientTexture();

        switch (mat.name) {
          case "Material.001": // body
            child.material = new THREE.MeshToonMaterial({
              color: new THREE.Color("#18182a"),
              gradientMap,
            });
            break;
          case "Material.005": // layar
            child.material = new THREE.MeshToonMaterial({
              color: new THREE.Color("#0a0a0f"),
              emissive: new THREE.Color("#4f8ef7"),
            });
            break;
          case "Cel Shading": // logo/aksen
            child.material = new THREE.MeshToonMaterial({
              color: new THREE.Color("#18182a"),
              gradientMap,
            });
            break;
          case "Material.004": // detail kecil
            child.material = new THREE.MeshToonMaterial({
              color: new THREE.Color("#7c6af5"),
              gradientMap,
            });
            break;
          case "Monitor_mat":
            monitorMesh = child;
            child.material = new THREE.MeshBasicMaterial({
              map: screenTexture,
            });
            break;
        }
      }
    });
    if (monitorMesh) {
      const uv = monitorMesh.geometry.attributes.uv;
      if (uv) {
        // cari range UV
        let uMin = Infinity,
          uMax = -Infinity;
        let vMin = Infinity,
          vMax = -Infinity;
        for (let i = 0; i < uv.count; i++) {
          uMin = Math.min(uMin, uv.getX(i));
          uMax = Math.max(uMax, uv.getX(i));
          vMin = Math.min(vMin, uv.getY(i));
          vMax = Math.max(vMax, uv.getY(i));
        }
        // remap ke 0-1
        const uRange = uMax - uMin || 1;
        const vRange = vMax - vMin || 1;
        for (let i = 0; i < uv.count; i++) {
          uv.setXY(i, (uv.getX(i) - uMin) / uRange, (uv.getY(i) - vMin) / vRange);
        }
        uv.needsUpdate = true;
      }
    }
  }, [scene, screenTexture]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame(() => {
    if (ref.current) {
      const targetY = defaultRot.y + mouseRef.current.x * 0.3;
      const targetX = defaultRot.x + mouseRef.current.y * 0.15;
      ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={ref} position={[0, -1, 0]} scale={1}>
      <primitive object={scene} />
    </group>
  );
}

function createGradientTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 4;
  canvas.height = 1;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createLinearGradient(0, 0, 4, 0);
  gradient.addColorStop(0.0, "#ffffff");
  gradient.addColorStop(0.5, "#b0b0c0");
  gradient.addColorStop(0.8, "#606070");
  gradient.addColorStop(1.0, "#202030");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 4, 1);

  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}
