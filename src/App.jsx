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
  //   const handleClick = function () {
  //     const accordionItem = $(this).closest(".accordion-item");
  //     const selAccordionId = $(this).data('achievement');
  //     const selContent = accordionItem.find(".accordion-content");
  //     // const selImg = $('.accordion .thumbnails').find(`img[data-achievement="${selAccordionId}"]`);
  //     // console.log(JSON.stringify(selImg));

  //     const accordion = $(this).closest('.accordion');
  //     accordion.attr("data-active-accordion", selAccordionId);

  //     if (selContent.is(":visible")) {
  //       return; // Do nothing if already opened
  //     }

  //     // selImg.fadeIn(200, "linear");
  //     // $(".accordion img").not(selImg).fadeOut(100, "linear");

  //     accordionItem
  //       .find(".accordion-content")
  //       .slideDown(200, "linear");
  //     $("#milestone .accordion-content").not(selContent).slideUp(200, "linear");
  //   };

  //   $(".accordion .accordion-title").on("click", handleClick);

  //   return () => {
  //     $(".accordion .accordion-title").off("click", handleClick);
  //   };
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
        // className="relative after:content-[''] after:absolute after:top-0 after:left-[25%] after:w-[50%] after:h-2 after:bg-main-purple after:drop-shadow-xl after:shadow-[0_20px_45px_#5f3aa6]"
      >
        <div className="section-content">
          <Contacts />
        </div>
      </section>
      <section>
        {/* <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Build lamps <br /> the right way
          </motion.h1>
        </LampContainer> */}
        <LampDemo/>
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
