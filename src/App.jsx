import $ from 'jquery';
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroSection } from './sections/Hero';
import { TechStackSection } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { Milestone } from './sections/Milestone';

function App() {

  return (
    <div className={"font-mono"}>
      <NavBar />
      {/* HERO Section */}
      <section id="hero" className="bg-[url('./assets/hero-bg.png')] bg-center">
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
      <section id="projects" style={{background: "url('/assets/grid-bg.png'), url('/assets/light-bg.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className='section-content'>
          <Projects/>
        </div>
      </section>
      {/* Milestone Section */}
      <section id="milestone" style={{background: "url('/assets/fancy-bg.svg')"}}>
        <div className='section-content'>
          <Milestone/>
        </div>
      </section>
      {/* CONTACT Section */}
      <section id="contact">
        <div className='section-content'></div>
      </section>
    </div>
  );
}

$(window).on('load',() => {
  const baseFontSize = 15;
  const val = $('#tech-stack .tech-stack-item').each((idx, el) => {
    const adjustedFontSize = (($(el).data('value') / 100 + 1) * baseFontSize).toFixed(1);
    console.log(adjustedFontSize);
    $(el).css("font-size", `${adjustedFontSize}px`);
  });
  console.log("value: "+val);
})

export default App
