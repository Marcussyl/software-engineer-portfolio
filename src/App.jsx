import $ from 'jquery';
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroSection } from './sections/Hero';
import { TechStackSection } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { Milestone } from './sections/Milestone';
import { Contacts } from './sections/Contacts';
import { LampContainer } from './components/Lamp';
import { LampDemo } from './components/Lamp';
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  // useEffect(() => {
  //   const heroSectionDesc = "I'm a full-stack software engineer pashionate about creating responsive, user-friendly web experiences with 2 years of experiences in modern technologies."
  //   // let i = 0;
  //   // const speed = 50;
  //   console.log("hihi");

  //   $("#hero .section-desc").html("");

  //   (function typeWriter() {
  //     // if (i < heroSectionDesc.length) {
  //     //   // console.log($("#hero .section-desc").html());
  //     //   $("#hero .section-desc").html($("#hero .section-desc").html() + heroSectionDesc.charAt(i));
  //     //   i++;
  //     //   setTimeout(typeWriter, speed);
  //     // }
  //     for(let i = 0; i < heroSectionDesc.length; i++) {
  //       $("#hero .section-desc").html(
  //         $("#hero .section-desc").html() + heroSectionDesc.charAt(i)
  //       );
  //     }
  //   })();
  // }, []);

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
          <TechStackSection />
        </div>
      </section>
      {/* PROJECTS Section */}
      <section
        id="projects"
        style={{
          background: "url('/assets/grid-bg.png'), url('/assets/light-bg.png')",
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
        style={{ background: "url('/assets/fancy-bg.svg') no-repeat" }}
      >
        <div className="section-content">
          <Milestone />
        </div>
      </section>
      {/* CONTACT Section */}
      <section
        id="contact"
        className="relative overflow-hidden"
        // className="relative after:content-[''] after:absolute after:top-0 after:left-[25%] after:w-[50%] after:h-2 after:bg-main-purple after:drop-shadow-xl after:shadow-[0_20px_45px_#5f3aa6]"
      >
        <div className="absolute z-50 h-[1px] w-3/5 left-1/5 top-0 bg-purple-400"></div>
        <div className="absolute z-50 h-30 w-3/5 left-1/5 -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        {/* <div className="absolute inset-auto z-30 h-18 w-3/5 left-1/5 -translate-y-[3rem] rounded-full bg-purple-400 blur-2xl"></div> */}
        <div className="section-content">
          <Contacts />
        </div>
      </section>
    </div>
  );
}

// $(window).on('load',() => {
//   const baseFontSize = 15;
//   const val = $('#tech-stack .tech-stack-item').each((idx, el) => {
//     const adjustedFontSize = (($(el).data('value') / 100 + 1) * baseFontSize).toFixed(1);
//     console.log(adjustedFontSize);
//     $(el).css("font-size", `${adjustedFontSize}px`);
//   });
//   console.log("value: "+val);
// })

export default App
