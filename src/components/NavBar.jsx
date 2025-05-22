export const NavBar = () => {
  return (
    <nav className="sticky top-2 w-4/5 bg-[#160c2a] border-[#2c1854] border-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] z-50 px-7 py-4 rounded-xl mx-auto">
      <div className="flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
          <p className={"font-bold"}>Marcus</p>
        </div>

        {/* Right side - Navigation Links */}
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="section-linker active"
          >
            Home
          </a>
          <a
            href="#about"
            className="section-linker"
          >
            About me
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