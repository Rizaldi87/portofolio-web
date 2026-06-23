

export default function HeroSection() {
  return (
     <section className='min-h-screen flex items-center px-12 lg:px-24 max-w-full'>
        <div className="flex flex-col gap-2 w-xl ">
          <div className="flex items-center gap-3 w-fit">  
            <div className="w-10 h-px bg-[#4f8ef7]"></div>
            <p className="
              text 
              font-mono 
              text-[#4f8ef7]
              ">
              Software Engineer
            </p>
          </div>
          <div className='text-white text-mono '>
            <h1 className="
                font-['Space_Mono',monospace]
                text-[clamp(3rem,7vw,6rem)]
                font-bold
                leading-[1.05]
                tracking-[-0.02em]
                ">
              RIZALDI IBNU <br /> 
              <span className="
                text-transparent
                [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]
                ">
                MOHAMAD
              </span>
            </h1>
          </div>
          <div className='text-mono text-[#6b6b88] text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, temporibus.</div>

        </div>
      </section>
  )
}
