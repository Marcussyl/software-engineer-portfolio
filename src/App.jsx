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
