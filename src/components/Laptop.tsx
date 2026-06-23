import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect} from "react";
import * as THREE from "three";

export default function Laptop() {
  const { scene } = useGLTF("/models/laptop.glb");
  const ref = useRef<any>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { size } = useThree();
  const scale =
    size.width < 640
      ? 0.75
      : size.width < 1024
      ? 1.5
      : 1.75;

  const defaultRot = { x: 0, y: 0.3 };
  const videoTex = useVideoTexture("/videos/hacker.mp4", {
    loop: true,
    autoplay: true,
    muted: true,
  });
  const pos:THREE.Vector3Tuple = size.width < 640
      ? [0,-.5,0]
      : [0,-1.75,0];

  const isInteracting = useRef(false);
  const lastInteractTime = useRef(0);
  const AUTO_ROTATE_DELAY = 1000; 

  let monitorMesh: THREE.Mesh | null = null;
  useEffect(() => {

    if(videoTex?.image){
      videoTex.image.playbackRate = .25;
    }

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
            child.material = new THREE.MeshStandardMaterial({
              map: videoTex,
              color:new THREE.Color("#7c6af5"),
              emissive: new THREE.Color("#7c6af5"),
              emissiveIntensity: 0.4,
              emissiveMap: videoTex,
              side: THREE.DoubleSide,
            });
            break;
        }
      }
    });
    if (monitorMesh) {
      const uv = (monitorMesh.geometry as THREE.BufferGeometry).attributes.uv;
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
  }, [scene, videoTex]);
  const handlePointerEnter = () => {
    isInteracting.current = true;
  };
  const handlePointerMove = (e:any) =>{
    mouseRef.current.x = e.pointer.x;
    mouseRef.current.y = e.pointer.y;

    lastInteractTime.current = Date.now();
  }

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

    if (isInteracting.current || (now - lastInteractTime.current) < AUTO_ROTATE_DELAY) {
      
      const targetY = defaultRot.y + mouseRef.current.x * 0.3;
      const targetX = defaultRot.x + mouseRef.current.y * 0.15;
      ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    } else {
      
      ref.current.rotation.y += (defaultRot.y - ref.current.rotation.y) * 0.02;
      ref.current.rotation.x += (defaultRot.x - ref.current.rotation.x) * 0.02;
    }
  });

  return (
    <group ref={ref} position={pos} scale={scale} 
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}>
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


