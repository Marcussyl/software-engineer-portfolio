import { useContext } from "react";
import { HeaderContext } from "@/lib/HeaderContext.js";

export const NavBar = () => {
  const {handleHeaderLinkClick, activeHeaderLink} = useContext(HeaderContext);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-5 w-4/5 bg-[#160c2a]/70 backdrop-blur-sm border-[#2c1854] border-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] z-50 px-7 rounded-full mx-auto max-w-[1300px]">
      <div className="flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
          <img src="/software-engineer-portfolio/assets/globe.svg" alt="" />
          <p className="font-black text-sharp-purple font-pacifico text-xl">
            Mars
          </p>
        </div>

        {/* Right side - Navigation Links */}
        <div className="flex items-center space-x-8">
          <a
            href="#about"
            className={`section-linker ${activeHeaderLink === '#about' ? 'text-sharp-purple' : ''}`}
            onClick={(e) => handleHeaderLinkClick(e, "#about")}
          >
            About
          </a>
          <a href="#tech-stack" className={`section-linker ${activeHeaderLink === '#tech-stack' ? 'text-sharp-purple' : ''}`} onClick={(e) => handleHeaderLinkClick(e, "#tech-stack")}>
            Technologies
          </a>
          <a href="#projects" className={`section-linker ${activeHeaderLink === '#projects' ? 'text-sharp-purple' : ''}`} onClick={(e) => handleHeaderLinkClick(e, "#projects")}>
            Projects
          </a>
          <a href="#contact" className={`section-linker ${activeHeaderLink === '#contact' ? 'text-sharp-purple' : ''}`} onClick={(e) => handleHeaderLinkClick(e, "#contact")}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};