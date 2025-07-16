export const NavBar = () => {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-5 w-4/5 bg-[#160c2a]/70 backdrop-blur-sm border-[#2c1854] border-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] z-50 px-7 py-4 rounded-full mx-auto max-w-[1300px]">
      <div className="flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
          <p className={"font-bold"}>Marcus</p>
        </div>

        {/* Right side - Navigation Links */}
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="section-linker"
          >
            About
          </a>
          <a
            href="#tech-stack"
            className="section-linker"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="section-linker"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="section-linker"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};