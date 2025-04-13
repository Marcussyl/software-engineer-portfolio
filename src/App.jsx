/** @jsx jsx */
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroSection } from './sections/Hero';

function App() {
  

  return (
    <>
      <NavBar />
      <div className="content-wrapper">
        <h1>Vite + React</h1>
        <HeroSection/>
        <div id="about-me"></div>
        <div id="projects"></div>
        <div id="contact"></div>
      </div>
    </>
  );
}

export default App
