
export default function NavBar() {
  return (
   <div className="fixed z-100 top-0 left-0 w-full backdrop-blur-[14px] bg-[rgba(10,10,15,0.75)] flex justify-between items-center py-6 px-10 text-sans
         border border-b-[rgba(255,255,255,0.07)]">
           <div id="logo" className='text-white'>Rizaldi</div>
           <div className='flex gap-3 items-center'>
             <button className='text-[#6b6b88] hover:text-[#e8e8f0]'>About Me</button>
             <button className='text-[#6b6b88] hover:text-[#e8e8f0]'>Projects</button>
             <button className='text-[#6b6b88] hover:text-[#e8e8f0]'>Experiences</button>
             <button className='text-[#6b6b88] hover:text-[#e8e8f0]'>Contact</button>
           </div>
         </div>
  )
}
