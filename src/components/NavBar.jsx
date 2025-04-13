export const NavBar = () => {
  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-4/5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] z-50 px-7 py-4 rounded-2xl">
      <div className="flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
          {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" /> */}
          <svg
            width="7"
            height="19"
            viewBox="0 0 7 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.76367 5.73561L3.5872 0.858765L0.23426 18.8588L6.76367 5.73561Z"
              fill="url(#paint0_linear_5274_701)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5274_701"
                x1="3.49897"
                y1="0.858765"
                x2="3.49897"
                y2="18.8588"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#854EF3" />
                <stop offset="1" stop-color="#AC9AD0" />
              </linearGradient>
            </defs>
          </svg>
          <p>Marcus</p>
        </div>

        {/* Right side - Navigation Links */}
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About me
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};