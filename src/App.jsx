import $ from 'jquery';
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroSection } from './sections/Hero';
import { TechStackSection } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { Milestone } from './sections/Milestone';
import { Contacts } from './sections/Contacts';
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

  useEffect(() => {
    const expandableCards = $(".expandable-card");
    const prevState = {};
    const maxT = 50;
    
    expandableCards.each(function() {
      const $card = $(this);

      $card.on('mouseenter', function() {
        const rect = this.getBoundingClientRect();
        if(prevState.time && (Date.now() - prevState.time) <= maxT) {
          console.log('transition start...');
          $card.find("span").css({
            opacity: "50",
            translate: `100px 100px 0`,
            "transition": "opacity 300ms ease-out 50ms, translate 300ms ease-out",
            transform: `translate3d(${rect.left-prevState.left}, ${rect.top-prevState.top}, 0)`,
          });
        } else {
          $card.find("span").css({
            opacity: "50",
            // "transition-delay": "50ms",
          });
        }
      })

      $card.on("mouseleave", function () {
        const rect = this.getBoundingClientRect();
        Object.assign(prevState, {
          time: Date.now(),
          el: $(this),
          left: rect.left,
          top: rect.top
        })
        // console.log(prevState);
        
        // console.log(rect);
        $card.find("span").css({
          opacity: "0",
          translate: `0 0 0`,
          transition: "opacity 300ms ease-out 50ms, translate 300ms ease-out",
          // "transform": `translate3d(${prevState.left}, ${prevState.top}, 0)`
        });
      });
    })
  }, [])

  useEffect(() => {
    const cardBg = "<span class='card-bg'></span>"
    let prevState = null;

    $(".card").each(function () {
      const $card = $(this);
      const $cardBg = $card.find(".card-bg"); // assuming this is the background element

      $card.on("mouseenter", function () {
        console.log("mouseenter: "+$cardBg.data('count'));
        const rect = this.getBoundingClientRect();

        if (prevState) {
          const xChange = rect.left - prevState.left;
          const yChange = rect.top - prevState.top;
          // console.log(`translate(${xChange}px, ${yChange}px)`);
          // console.log(prevState.el.data("count"));

          prevState.el.css({
            transform: `translate(${xChange}px, ${yChange}px)`,
            transition: "transform 300ms ease-out",
          });
        }

        $cardBg.css({
          opacity: "1",
          transition: "opacity 300ms ease-out 300ms",
        });
      });

      $card.on("mouseleave", function () {
        console.log("mouseleave: "+$cardBg.data("count"));
        // Store current state before leaving
        prevState = {
          left: this.getBoundingClientRect().left,
          top: this.getBoundingClientRect().top,
          el: $cardBg,
        };

        console.log(prevState.el.data('count'));

        // console.log($cardBg.data("count"));

        $cardBg.css({
          opacity: "0",
          transition: "opacity 300ms ease-out 300ms",
        });
      });
    });
  }, [])

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
        className="relative overflow-hidden pb-14"
        // className="relative after:content-[''] after:absolute after:top-0 after:left-[25%] after:w-[50%] after:h-2 after:bg-main-purple after:drop-shadow-xl after:shadow-[0_20px_45px_#5f3aa6]"
      >
        <div className="absolute z-50 h-[1px] w-3/5 left-1/5 top-0 bg-main-purple"></div>
        <div className="absolute z-50 h-30 w-3/5 left-1/5 -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        {/* <div className="absolute inset-auto z-30 h-18 w-3/5 left-1/5 -translate-y-[3rem] rounded-full bg-purple-400 blur-2xl"></div> */}
        <div className="section-content">
          <Contacts />
        </div>
        <div className="namecard-container absolute bottom-5 right-5">
          <p className='gradient-text text-xl'>Get my namecard <span>(<img src="/assets/namecard.png" alt="namecard"/>)</span> here</p>
        </div>
        <div className="name-card">

        </div>
      </section>
      <section>
        <div className='cards-container'>
          <div className="card">
          1
          </div>
          <div className="card">
          2
          </div>
          <div className="card">
          3
          </div>
          <div className="card">
          4
          </div>
          <div className="card">
          5
          </div>
          <div className="card">
          6
          </div>
          <div className="card">
          7
          </div>
          <div className="card">
          8
          </div>
        </div>
      </section>
    </div>
  );
}

// $(window).on('load',() => {
//   const expandableCards = $('.expandable-cards');
//   console.log(expandableCards.length);
// })

// const expandableCards = $(".expandable-cards");
// console.log(expandableCards.length);

export default App
