import $ from 'jquery';
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroSection } from './sections/Hero';
import { TechStackSection } from './sections/TechStack';

function App() {
  

  return (
    <div className={"font-mono"}>
      <NavBar />
      {/* HERO Section */}
      <section id="hero" className="bg-[url('./assets/hero-bg.png')]">
        <div className="section-content">
          <HeroSection />
        </div>
      </section>
      {/* TECH STACK Section */}
      <section id="tech-stack">
        <div className="section-content">
          <TechStackSection/>
        </div>
      </section>
      {/* PROJECTS Section */}
      <section id="projects">
        <div className='section-content'></div>
      </section>
      {/* CONTACT Section */}
      <section id="contact">
        <div className='section-content'></div>
      </section>
    </div>
  );
}

$('#tech-stack .tech-stack-item').css("background-color", "yellow");

export default App
