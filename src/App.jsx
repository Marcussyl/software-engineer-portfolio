import $ from 'jquery';
import './App.css'
import { Navigations } from './sections/Navigation';
import { HeroSection } from './sections/Hero';
import TechStackSection from './sections/TechStack';
import { Projects } from './sections/Projects';
import { Milestone } from './sections/Milestone';
import { Contacts } from './sections/Contacts';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleClick = function () {
      const accordionItem = $(this).closest(".accordion-item");
      const selAccordionId = $(this).data("achievement");
      const accordion = $(this).closest(".accordion");
      const selContent = accordionItem.find(".accordion-content");

      accordion.attr("data-active-accordion", selAccordionId);

      if (selContent.is(":visible")) {
        return; // Do nothing if already opened
      }

      accordionItem.find(".accordion-content").slideDown(200, "linear");
      $("#milestone .accordion-content").not(selContent).slideUp(200, "linear");
    };

    $(".accordion .accordion-title").on("click", handleClick);

    return () => {
      $(".accordion .accordion-title").off("click", handleClick);
    };
  }, []);

  return (
    <div className={"font-mono"}>
      <section id="navigation">
        <Navigations />
      </section>
      {/* HERO Section */}
      <section
        id="hero"
        className="bg-[url('/software-engineer-portfolio/assets/hero-bg.png')] bg-center py-0 h-[100vh] flex items-center"
      >
        <div className="section-content">
          <HeroSection />
        </div>
      </section>
      {/* TECH STACK Section */}
      <section id="tech-stack">
        <div className="section-content">
          {/* <TechStackSection /> */}
          <TechStackSection />
        </div>
      </section>
      {/* PROJECTS Section */}
      <section
        id="projects"
        style={{
          background:
            "url('/software-engineer-portfolio/assets/grid-bg.png') no-repeat, url('/software-engineer-portfolio/assets/light-bg.png') no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="section-content">
          <Projects />
        </div>
      </section>
      {/* Milestone Section */}
      <section
        id="milestone"
        style={{
          background:
            "url('/software-engineer-portfolio/assets/fancy-bg.svg') no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="section-content">
          <Milestone />
        </div>
      </section>
      {/* CONTACT Section */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute z-50 h-30 w-3/5 left-1/5 -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        <div className="section-content">
          <Contacts />
        </div>
      </section>
    </div>
  );
}

export default App
