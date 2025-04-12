export const NavBar = () => {
  return (
    <nav className="navBar flex justify-around">
      <div className="left">
        <img src=""/>
        <p>Marcus</p>
      </div>
      <div className="right">
        <ul className="flex gap-2">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="about">About me</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}