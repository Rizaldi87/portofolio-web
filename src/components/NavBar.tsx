import { useState } from "react";
import { themeVars, useTheme } from "../context/ThemeContext";
import { animate } from "animejs";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = (e: React.MouseEvent<HTMLButtonElement>)=>{
   const rect = e.currentTarget.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  
  const maxR = Math.hypot(
    Math.max(cx, window.innerWidth - cx),
    Math.max(cy, window.innerHeight - cy)
  );

  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 100;
    pointer-events: none;
    background: ${themeVars[theme]["--bg"]};
    clip-path: circle(${maxR}px at ${cx}px ${cy}px);
  `;
  document.body.appendChild(overlay);

  toggleTheme();

  animate(overlay, {
    clipPath: [`circle(${maxR}px at ${cx}px ${cy}px)`, `circle(0px at ${cx}px ${cy}px)`],
    duration: 300,
    ease: "inOutQuad",
  }).then(() => overlay.remove());

  }

  return (
    <div
      className="fixed z-100 top-0 left-0 w-full backdrop-blur-[14px] bg-(--navbar-bg) flex justify-between items-center py-6 px-10 text-sans border-b
         border-b-(--border)"
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
        <span className="text-(--accent)">$</span>
        <span className="text-(--text)">rizaldi</span>
        <span className="w-2 h-4 bg-(--accent) animate-pulse"></span>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} id="menu" className="sm:hidden">
          <span className="material-symbols-outlined text-(--text) hover:text-(--accent) active:text-(--accent)">
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
            bg-(--navbar-bg)

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
            sm:backdrop-blur-none
          `}
        >
          <button
            onClick={handleToggleTheme}
            className="text-(--muted) hover:text-(--text) active:text-(--text) transition-colors flex items-center"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

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
          <a href="#about" className="text-(--muted) hover:text-(--text) active:text-(--text) transition-colors">
            About Me
          </a>
          <a href="#project" className="text-(--muted) hover:text-(--text) active:text-(--text) transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-(--muted) hover:text-(--text) active:text-(--text) transition-colors">
            Experiences
          </a>
          <a href="#contact" className="text-(--muted) hover:text-(--text) active:text-(--text) transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
