import {useEffect, useRef, useState } from 'react'

export default function Cursor() {
    const {dot, ring, hovered} = useCursor();

  return (
    <>
     <div style={{
        position: 'fixed',
        left: dot.x,
        top: dot.y,
        width: 6,
        height: 6,
        background: 'var(--accent)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 100,
        transform: 'translate(-50%, -50%)',
      }} />
 
      {/* cursor-ring */}
      <div style={{
        position: 'fixed',
        left: ring.x,
        top: ring.y,
        width: hovered ? 56 : 32,
        height: hovered ? 56 : 32,
        border: `1px solid ${hovered ? 'rgba(79,142,247,0.7)' : 'rgba(79,142,247,0.4)'}`,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
      }} />
    </>
  )
}

function useCursor(){
    const rx = useRef(0);
    const ry = useRef(0);

    const targetX = useRef(0);
    const targetY = useRef(0);

    const [dot, setDot] = useState({x:0,y:0})
    const [ring, setRing] = useState({x:0,y:0})
    const [hovered,setHovered] = useState(false);


    useEffect(()=>{
        
        const onMouseMove = (e:MouseEvent)=>{
            targetX.current = e.clientX;
            targetY.current = e.clientY;
            setDot({x:e.clientX, y:e.clientY})
            const el = document.elementFromPoint(e.clientX, e.clientY)
            const isHovered = !!el?.closest('a, button, .project-card, .tech-badge')
            setHovered(isHovered)
        }
        document.addEventListener('mousemove',onMouseMove);

        let rafId: number;
        const loop = () =>{
            rx.current += (targetX.current - rx.current) * 0.075
            ry.current += (targetY.current - ry.current) * 0.075

            setRing({x:rx.current,y:ry.current});
            rafId = requestAnimationFrame(loop);
        }

        rafId = requestAnimationFrame(loop);

        const targets = document.querySelectorAll('a, button, .project-card, .tech-badge')
            const onEnter = () => setHovered(true)
            const onLeave = () => setHovered(false)
            targets.forEach(el => {
            el.addEventListener('mouseenter', onEnter)
            el.addEventListener('mouseleave', onLeave)
        })

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(rafId)
            targets.forEach(el => {
                el.removeEventListener('mouseenter', onEnter)
                el.removeEventListener('mouseleave', onLeave)
            })
        }
    },[]);
    return {dot, ring, hovered};
}
