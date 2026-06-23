import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Laptop from "../Laptop";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col sm:flex-row items-center px-12 lg:px-24 max-w-full">
      <div className="border border-amber-400 flex flex-col gap-2 w-xl  ">
        <div className="flex items-center gap-3 w-fit">
          <div className="w-10 h-px bg-[#4f8ef7]"></div>
          <p
            className="
              text 
              font-mono 
              text-[#4f8ef7]
              "
          >
            Software Engineer
          </p>
        </div>
        <div className="text-white text-mono ">
          <h1
            className="
                font-['Space_Mono',monospace]
                text-[clamp(3rem,7vw,6rem)]
                font-bold
                leading-[1.05]
                tracking-[-0.02em]
                "
          >
            RIZALDI IBNU <br />
            <span
              className="
                text-transparent
                [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]
                "
            >
              MOHAMAD
            </span>
          </h1>
        </div>
        <div className="text-mono text-[#6b6b88] text-xl">Software Engineer focused on building reliable applications, scalable systems, and clean user experiences.</div>
      </div>
      <div className="w-full sm:flex-1 h-[50vh] sm:h-[70vh]">
        <Canvas
          className="w-full h-full flex-1 border border-amber-200"
          dpr={[1, 1.5]}
          orthographic
          camera={{
            position: [4, 3, 5],
            zoom: 80,
            near: 0.1,
            far: 100,
          }}
        >
          <ambientLight intensity={1} />

          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Suspense fallback={null}>
            <Laptop />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
