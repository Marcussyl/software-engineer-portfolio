import $ from 'jquery';
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroSection } from './sections/Hero';
import { TechStackSection } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { Milestone } from './sections/Milestone';
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
      <section id="contact">
        <div className="section-content"></div>
      </section>
      {/* <section>
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next", // Use a valid DOM element here
            prevEl: ".swiper-button-prev", // Use a valid DOM element here
          }}
          pagination={{
            el: ".swiper-pagination", // Use a valid DOM element here
            type: "bullets",
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper w-[50%] border-3 border-red-300 rounded-lg relative"
        >
          <SwiperSlide className="w-fit border-2 border-orange-300 flex justify-center bg-white">
            <img
              src="/assets/proj-thumbs/image.png"
              alt="aws practitioner"
              className="mx-auto block pb-8"
              data-achievement="aws-practitioner"
            />
          </SwiperSlide>
          <SwiperSlide className="w-fit border-2 border-orange-300 flex justify-center bg-white">
            <img
              src="/assets/proj-thumbs/image.png"
              alt="aws practitioner"
              className="mx-auto block pb-8"
              data-achievement="aws-practitioner"
            />
          </SwiperSlide>
          <SwiperSlide className="w-fit border-2 border-orange-300 flex justify-center bg-white">
            <img
              src="/assets/proj-thumbs/image.png"
              alt="aws practitioner"
              className="mx-auto block pb-8"
              data-achievement="aws-practitioner"
            />
          </SwiperSlide>
          <div className="swiper-button-next absolute bottom-0 left-[50%]"></div>
          <div className="swiper-button-prev absolute bottom-0 right-[50%]"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </section> */}
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
