import { useContext } from "react";
import { HeaderContext } from "@/lib/HeaderContext.js";
import { motion, AnimatePresence } from "motion/react";

export const NavBar = () => {
  const {handleHeaderLinkClick, activeHeaderLink, mobileNavOpen, setMobileNavOpen} = useContext(HeaderContext);
  return (
    <div>
      <nav className="fixed left-1/2 -translate-x-1/2 top-5 w-9/10 bg-[#160c2a]/70 backdrop-blur-sm border-[#2c1854] border-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] z-50 px-7 rounded-full mx-auto max-w-[1300px]">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => handleHeaderLinkClick(e, "#about")}
          >
            <img
              src="/software-engineer-portfolio/assets/globe.svg"
              alt="globe icon"
            />
            <p className="font-black text-sharp-purple font-pacifico text-xl">
              Mars
            </p>
          </div>
          {/* Right side - Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <div
              className={`text-grayish-white hover:text-light-purple transition-colors text-lg focus:outline-none py-4 font-medium cursor-pointer ${
                activeHeaderLink === "#about" ? "text-sharp-purple" : ""
              }`}
              onClick={(e) => handleHeaderLinkClick(e, "#about")}
            >
              About Me
            </div>
            <div className="h-3 w-[1px] bg-grayish-white/50"></div>
            <div
              className={`text-grayish-white hover:text-light-purple transition-colors text-lg focus:outline-none py-4 font-medium cursor-pointer ${
                activeHeaderLink === "#tech-stack" ? "text-sharp-purple" : ""
              }`}
              onClick={(e) => handleHeaderLinkClick(e, "#tech-stack")}
            >
              Technologies
            </div>
            <div className="h-3 w-[1px] bg-grayish-white/50"></div>
            <div
              className={`text-grayish-white hover:text-light-purple transition-colors text-lg focus:outline-none py-4 font-medium cursor-pointer ${
                activeHeaderLink === "#projects" ? "text-sharp-purple" : ""
              }`}
              onClick={(e) => handleHeaderLinkClick(e, "#projects")}
            >
              Projects
            </div>
            <div className="h-3 w-[1px] bg-grayish-white/50"></div>
            <div
              className={`text-grayish-white hover:text-light-purple transition-colors text-lg focus:outline-none py-4 font-medium cursor-pointer ${
                activeHeaderLink === "#contact" ? "text-sharp-purple" : ""
              }`}
              onClick={(e) => handleHeaderLinkClick(e, "#contact")}
            >
              Contact
            </div>
          </div>
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setMobileNavOpen(true)}
          >
            <div className="py-4 group">
              <img
                src="/software-engineer-portfolio/assets/hamburger.svg"
                alt="hamburger icon"
                className="w-[30px] object-contain group-hover:hidden"
              />
              <img
                src="/software-engineer-portfolio/assets/hamburger-purple.svg"
                alt="hamburger icon"
                className="w-[30px] object-contain hidden group-hover:block"
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            className="fixed right-0 h-screen w-full md:w-1/2 bg-dark-purple z-50 p-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between gap-2 bg-[#160c2a]/70 border-[#2c1854] border-2 px-4 py-4 rounded-lg">
              <div className="flex gap-2">
                <img
                  src="/software-engineer-portfolio/assets/globe.svg"
                  alt=""
                />
                <p className="font-black text-sharp-purple font-pacifico text-xl">
                  Mars
                </p>
              </div>
              <div
                className="cursor-pointer text-grayish-white hover:text-sharp-purple text-2xl z-20 group"
                onClick={() => setMobileNavOpen(false)}
              >
                <img
                  src="/software-engineer-portfolio/assets/icon-close.svg"
                  alt="close icon"
                  className="group-hover:hidden w-6 h-6"
                />
                <img
                  src="/software-engineer-portfolio/assets/icon-close-purple.svg"
                  alt="close icon"
                  className="hidden group-hover:block w-6 h-6"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 mt-5 px-4 border-2 border-[#2c1854] border-dashed">
              <a
                href="#about"
                className={`text-grayish-white hover:text-light-purple transition-colors text-lg focus:outline-none py-4 font-medium cursor-pointer ${
                  activeHeaderLink === "#about" ? "text-sharp-purple" : ""
                }`}
                onClick={(e) => handleHeaderLinkClick(e, "#about")}
              >
                About Me
              </a>
              <a
                href="#tech-stack"
                className={`text-grayish-white hover:text-light-purple transition-colors text-lg focus:outline-none py-4 font-medium cursor-pointer ${
                  activeHeaderLink === "#tech-stack" ? "text-sharp-purple" : ""
                }`}
                onClick={(e) => handleHeaderLinkClick(e, "#tech-stack")}
              >
                Technologies
              </a>
              <a
                href="#projects"
                className={`text-grayish-white hover:text-light-purple transition-colors text-lg focus:outline-none py-4 font-medium cursor-pointer ${
                  activeHeaderLink === "#projects" ? "text-sharp-purple" : ""
                }`}
                onClick={(e) => handleHeaderLinkClick(e, "#projects")}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`text-grayish-white hover:text-light-purple transition-colors text-lg focus:outline-none py-4 font-medium cursor-pointer ${
                  activeHeaderLink === "#contact" ? "text-sharp-purple" : ""
                }`}
                onClick={(e) => handleHeaderLinkClick(e, "#contact")}
              >
                Contact
              </a>
              <div className="h-[1px] w-full bg-[#2c1854]"></div>
              <div className="flex gap-4 items-center justify-center py-4">
                <a
                  href="https://github.com/Marcussyl"
                  target="_blank"
                  className="flex justify-center items-center w-[40px] h-[40px] p-2 border-1 rounded-full border-main-purple"
                >
                  <img
                    src="/software-engineer-portfolio/assets/social-media/github.png"
                    alt="github icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcus-sze-3538ba229/"
                  target="_blank"
                  className="flex justify-center items-center w-[40px] h-[40px] p-2 border-1 rounded-full border-main-purple"
                >
                  <img
                    src="/software-engineer-portfolio/assets/social-media/linkedin.png"
                    alt="linkedin icon"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};