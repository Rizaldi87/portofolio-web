import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from 'three';

function Particles () {
    
    const meshRef = useRef<THREE.Mesh>(null);
    const mouse = useRef({x:0, y:0});

    useEffect(()=>{
        const onMove = (e:MouseEvent)=>{
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
        }
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    },[])

    const positions = useMemo(()=>{
        const count = 900;
        const arr = new Float32Array(count * 3);
        for(let i=0; i<count; i++){
            arr[i*3] = (Math.random() - 0.5) * 200
            arr[i*3+1] = (Math.random() - 0.5) * 200
            arr[i*3+2] = (Math.random() - 0.5) * 100
        }
        return arr;
    },[]);
    
    useFrame((_,delta)=>{
        if(!meshRef.current) return
        
        meshRef.current.rotation.y +=mouse.current.x * delta * 0.05;
        meshRef.current.rotation.x = mouse.current.y * 0.015;

    })

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions,3]}
                >
                </bufferAttribute>
            </bufferGeometry>

            <pointsMaterial
                color={0x4f8ef7}
                size={0.28}
                transparent
                opacity={0.55}
                sizeAttenuation
            />
        </points>
    )
}

export default function ParticleField() {
  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, zIndex:0, pointerEvents:'none', backgroundColor:'#0a0a0f'}}
      camera={{ fov: 60, near: 0.1, far: 1000, position: [0, 0, 50] }}
      gl={{ alpha: true, antialias: false }}
      dpr={Math.min(devicePixelRatio, 1.5)}
    >
      <Particles />
    </Canvas>
  )
}