import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="fixed z-100 top-0 left-0 w-full backdrop-blur-[14px] bg-[rgba(10,10,15,0.75)] flex justify-between items-center py-6 px-10 text-sans
         border border-b-[rgba(255,255,255,0.07)]"
    >
      <div
        id="logo"
        className="
          font-mono
          flex
          items-center
          gap-2
        "
      >
        <span className="text-[#4f8ef7]">$</span>

        <span className="text-white">rizaldi</span>

        <span className="w-2 h-4 bg-[#4f8ef7] animate-pulse"></span>
      </div>
      <button onClick={handleOpenMenu} id="menu" className="sm:hidden">
        <span
          className="material-symbols-outlined 
          text-(--text)
          hover:text-(--accent)
          active:text-(--accent)
          "
        >
          {isOpen ? "close" : "menu"}
        </span>
      </button>
      <div
        className={`
          fixed
          left-0
          top-19
          w-full
          py-10
          flex
          flex-col
          gap-12
          items-center
          backdrop-blur-[14px]
          bg-[rgba(10,10,15,0.75)]

          transition-transform
          duration-200

          ${isOpen ? "translate-x-0" : "translate-x-full"}

          sm:static
          sm:translate-x-0
          sm:w-auto
          sm:py-0
          sm:flex-row
          sm:gap-6
          sm:bg-transparent
        `}
      >
        <a
          href="/docs/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--accent) hover:text-(--text) font-mono text-sm
              border border-(--accent) rounded-sm px-3 py-1
              transition-colors"
        >
          CV
        </a>
        <a href="#about" className="text-[#6b6b88] hover:text-[#e8e8f0] active:text-[#e8e8f0]">
          About Me
        </a>
        <a href="#project" className="text-[#6b6b88] hover:text-[#e8e8f0] active:text-[#e8e8f0]">
          Projects
        </a>
        <a href="#experience" className="text-[#6b6b88] hover:text-[#e8e8f0] active:text-[#e8e8f0]">
          Experiences
        </a>
        <a href="#contact" className="text-[#6b6b88] hover:text-[#e8e8f0] active:text-[#e8e8f0]">
          Contact
        </a>
      </div>
    </div>
  );
}
