import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { cubicBezier, spring} from "animejs";

const LaptopScene = lazy(() => import("../Laptop"));
export default function HeroSection() {
  
  const heroRef = useScrollReveal({ fromTranslateY: 50, delay: 300, once:false, ease:cubicBezier(0, 0, 0.58, 1) })
  const laptopRef = useScrollReveal({ fromTranslateY: 100, delay: 300, once:false, ease:spring({bounce:.5}) })
  
  return (
    <section className="min-h-screen mt-10 sm:mt-0 flex flex-col sm:flex-row items-center gap-6 sm:gap-0 px-6 sm:px-12 lg:px-24 pt-24 max-w-full">
      <div ref={heroRef} className="flex flex-col gap-2 w-full lg:max-w-md xl:max-w-xl">
        <div className="flex items-center gap-3 w-fit">
          <div className="w-10 h-px bg-(--accent)"></div>
          <p
            className="
              text 
              font-mono 
              text-(--accent)
              "
          >
            Software Engineer
          </p>
        </div>
        <div className="text-(--text) text-mono ">
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
                [-webkit-text-stroke:1px_var(--text-stroke)]
                "
            >
              MOHAMAD
            </span>
          </h1>
        </div>
        <div className="text-mono text-(--muted) text-sm sm:text-base lg:text-xl">Software Engineer focused on building reliable applications, scalable systems, and clean user experiences.</div>
        <a
          href="/docs/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md
              bg-(--accent) text-(--text) font-mono text-sm
              hover:brightness-110 transition-all mt-4 w-fit"
        >
          <span className="material-symbols-outlined text-base">download</span>
          Download CV
        </a>
      </div>
      <div ref={laptopRef} className="w-full sm:flex-1 h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Canvas
          className="w-full h-full flex-1 "
          dpr={[1, 1.5]}
          orthographic
          camera={{
            position: [4, 3, 5],
            zoom: 80,
            near: 0.1,
            far: 100,
          }}
        >
          <ambientLight intensity={3} />

          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Suspense fallback={null}>
            <LaptopScene />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
