import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { animate } from "animejs";
import "animejs/adapters/three";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

type Theme = "light" | "dark";

const materialColors: Record<Theme, { body: string; screenBorder: string; logo: string; detail: string, outline:string }> = {
  dark: {
    body: "#18182a",
    screenBorder: "#0a0a0f",
    logo: "#18182a",
    detail: "#7c6af5",
    outline:"#4f8ef7",
  },
   light: {
    body: "#889cb7",
    screenBorder: "#667b99",
    logo: "#47566b",
    detail: "#667b99",
    outline: "#cbd5e1"
  },
};

export default function Laptop() {
  const { scene } = useGLTF("/models/laptop.glb");
  const { theme } = useTheme();
  const ref = useRef<THREE.Group | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { size } = useThree();
  const scale = size.width < 640 ? 0.75 : size.width < 1024 ? 1.5 : 1.75;

  const defaultRot = { x: 0, y: 0.3 };
  const videoTex = useVideoTexture("/videos/hacker.mp4", {
    loop: true,
    autoplay: true,
    muted: true,
  });
  const videoTexRef = useRef<typeof videoTex>(null);
  const pos: THREE.Vector3Tuple = size.width < 640 ? [0, -0.5, 0] : [0, -1.75, 0];

  const isInteracting = useRef(false);
  const lastInteractTime = useRef(0);
  const AUTO_ROTATE_DELAY = 1000;

  const bodyRef = useRef<THREE.Mesh | null>(null);
  const screenBorderRef = useRef<THREE.Mesh | null>(null);
  const logoRef = useRef<THREE.Mesh | null>(null);
  const detailRef = useRef<THREE.Mesh | null>(null);
  const screenRef = useRef<THREE.Mesh | null>(null);

  // First render: traverse & setup materials
  useEffect(() => {
    videoTexRef.current = videoTex;
    const videoImage = videoTexRef.current?.image;
    if (videoImage instanceof HTMLVideoElement) {
      videoImage.playbackRate = 0.25;
    }

    const cols = materialColors[theme];

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mat = child.material as THREE.MeshStandardMaterial;
        const gradientMap = createGradientTexture();

        switch (mat.name) {
          case "Material.001": {
            const mesh = child as THREE.Mesh;
            mesh.material = new THREE.MeshToonMaterial({
              color: new THREE.Color(cols.body),
              gradientMap,
            });
            bodyRef.current = mesh;
            break;
          }
          case "Material.005": {
            const mesh = child as THREE.Mesh;
            mesh.material = new THREE.MeshToonMaterial({
              color: new THREE.Color(cols.screenBorder),
              emissive: new THREE.Color("#4f8ef7"),
            });
            screenBorderRef.current = mesh;
            break;
          }
          case "Cel Shading": {
            const mesh = child as THREE.Mesh;
            mesh.material = new THREE.MeshToonMaterial({
              color: new THREE.Color(cols.logo),
              gradientMap,
            });
            logoRef.current = mesh;
            break;
          }
          case "Material.004": {
            const mesh = child as THREE.Mesh;
            mesh.material = new THREE.MeshToonMaterial({
              color: new THREE.Color(cols.detail),
              gradientMap,
            });
            detailRef.current = mesh;
            break;
          }
          case "Monitor_mat": {
            const mesh = child as THREE.Mesh;
            mesh.material = new THREE.MeshStandardMaterial({
              map: videoTex,
              color: new THREE.Color("#7c6af5"),
              emissive: new THREE.Color("#7c6af5"),
              emissiveIntensity: 0.4,
              emissiveMap: videoTex,
              side: THREE.DoubleSide,
            });
            screenRef.current = mesh;

            const uv = child.geometry.attributes.uv;
            if (uv) {
              let uMin = Infinity, uMax = -Infinity;
              let vMin = Infinity, vMax = -Infinity;
              for (let i = 0; i < uv.count; i++) {
                uMin = Math.min(uMin, uv.getX(i));
                uMax = Math.max(uMax, uv.getX(i));
                vMin = Math.min(vMin, uv.getY(i));
                vMax = Math.max(vMax, uv.getY(i));
              }
              const uRange = uMax - uMin || 1;
              const vRange = vMax - vMin || 1;
              for (let i = 0; i < uv.count; i++) {
                uv.setXY(i, (uv.getX(i) - uMin) / uRange, (uv.getY(i) - vMin) / vRange);
              }
              uv.needsUpdate = true;
            }
            break;
          }
        }
      }
    });

    // Glow pulse
    let glowAnim: ReturnType<typeof animate> | null = null;
    if (screenRef.current) {
      glowAnim = animate(screenRef.current.material, {
        emissiveIntensity: [10, 40],
        duration: 500,
        alternate: true,
        loop: true,
        ease: "inOutSine",
      });
    }

    return () => {
      if (glowAnim && typeof glowAnim.revert === "function") glowAnim.revert();
    };
  }, [scene, videoTex, theme]);

  // Theme change: animate material colors
  useEffect(() => {
    const cols = materialColors[theme];

    const updates: { ref: React.RefObject<THREE.Mesh | null>; color: string }[] = [
      { ref: bodyRef, color: cols.body },
      { ref: screenBorderRef, color: cols.screenBorder },
      { ref: logoRef, color: cols.logo },
      { ref: detailRef, color: cols.detail },
    ];

    for (const { ref: meshRef, color } of updates) {
      if (!meshRef.current) continue;
      animate(meshRef.current, {
        color,
        duration: 600,
        ease: "inOutQuad",
      });
    }
  }, [theme]);

  const handlePointerEnter = () => {
    isInteracting.current = true;
  };
  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    mouseRef.current.x = e.pointer.x;
    mouseRef.current.y = e.pointer.y;
    lastInteractTime.current = Date.now();
  };
  const handlePointerDown = () => {
    isInteracting.current = true;
    lastInteractTime.current = Date.now();
  };
  const handlePointerUp = () => {
    isInteracting.current = false;
    lastInteractTime.current = Date.now();
  };
  const handlePointerLeave = () => {
    isInteracting.current = false;
    lastInteractTime.current = Date.now();
  };

  useFrame(() => {
    if (!ref.current) return;
    const now = Date.now();

    if (isInteracting.current || now - lastInteractTime.current < AUTO_ROTATE_DELAY) {
      const targetY = defaultRot.y + mouseRef.current.x * 0.3;
      const targetX = defaultRot.x - mouseRef.current.y * 0.15;
      ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    } else {
      ref.current.rotation.y += (defaultRot.y - ref.current.rotation.y) * 0.02;
      ref.current.rotation.x += (defaultRot.x - ref.current.rotation.x) * 0.02;
    }
  });

  return (
    <group ref={ref} position={pos} scale={scale} onPointerEnter={handlePointerEnter} onPointerMove={handlePointerMove} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerLeave={handlePointerLeave}>
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