import type { CSSProperties } from "react";

type props = {
    techName : String,
    dotColor: CSSProperties["color"];
    toolTip?: String
}
export default function TechBadge({techName, dotColor, toolTip} : props) {
  return (
    <div className="
    tech-badge
    relative
    group
    flex
    items-center
    gap-[0.45rem]
    px-[0.85rem]
    py-[0.4rem]
    border
    border-(--border)
    rounded-md
    bg-(--card-bg)
    text-(--text)
    text-[0.8rem]
    font-['Space_Mono',monospace]
    tracking-[0.04em]
    transition-all
    duration-200
    cursor-default
    
    hover:border-[rgba(79,142,247,0.4)]
    hover:bg-[rgba(79,142,247,0.06)]
    hover:-translate-y-0.5

    active:border-[rgba(79,142,247,0.4)]
    active:bg-[rgba(79,142,247,0.06)]
    active:-translate-y-0.5
    ">
        <div style={{backgroundColor: dotColor}} className={`w-1.5 h-1.5 rounded-[50%] shrink-0`}></div>
        <div>{techName}</div>

        <div
            className="
                absolute
                bottom-[calc(100%+10px)]
                left-1/2
                -translate-x-1/2
                translate-y-1.5

                bg-[#1a1a2e]
                border
                border-[rgba(79,142,247,0.25)]
                rounded-lg

                px-[0.9rem]
                py-[0.55rem]

                text-[0.72rem]
                font-['Inter',sans-serif]
                text-(--muted)
                whitespace-nowrap

                pointer-events-none
                opacity-0

                transition-[opacity,transform]
                duration-500
                ease-in-out

                z-200

                tracking-normal
                leading-1.5

                shadow-[0_8px_24px_rgba(0,0,0,0.4)]

                group-hover:opacity-100
                group-hover:translate-y-0
                
                group-active:opacity-100
                group-active:translate-y-0
                
                after:content-['']
                after:absolute
                after:top-full
                after:left-1/2
                after:-translate-x-1/2

                after:border-[5px]
                after:border-transparent
                after:border-t-[rgba(79,142,247,0.25)]
            "
            >
            {toolTip}
        </div>
    </div>
  )
}
