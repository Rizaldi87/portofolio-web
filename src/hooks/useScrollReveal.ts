import { animate } from "animejs";
import { useEffect, useRef } from "react";

type UseScrollRevealOptions={
    threshold?: number;
    fromOpacity?: number;
    fromTranslateY?: number;
    duration?: number;
    delay?: number;
    ease?: unknown;
    once?:boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
    threshold = 0.15,
    fromOpacity = 0,
    fromTranslateY = 40,
    duration = 800,
    delay = 0,
    ease = "outCubic",
    once = true,
}: UseScrollRevealOptions={}) {
  const ref = useRef<T>(null);

  useEffect(()=>{
    const el = ref.current;
    if(!el) return;

    const observer = new IntersectionObserver(
        ([entry])=>{
            if(!entry.isIntersecting) return;
            animate(el,{
                opacity:[fromOpacity,1],
                translateY:[fromTranslateY,0],
                duration,
                delay,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ease: ease as any,
            });
            if(once) observer.unobserve(el);
        },
        {threshold},
    );
    observer.observe(el);
    return ()=>observer.disconnect();
  },[threshold, fromOpacity, fromTranslateY, duration, delay, ease, once])

  return ref;
}
