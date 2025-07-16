import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Milestone = () => {
  const [openAchievement, setOpenAchievement] = useState("aws-practitioner");

  const handleAccordionClick = (e) => {
    const achievement = e.currentTarget.getAttribute("data-achievement");
    console.log(achievement);
    setOpenAchievement(achievement);
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="tag">
        <p>Milestones</p>
        <img
          src="/software-engineer-portfolio/assets/tag-icons/achievement.png"
          alt="milestone"
        />
      </div>
      <h1 className="section-title gradient-text">Milestone</h1>
      {/* <p className="section-desc">
        A showcase of certifications, awards, and achievements highlighting
        expertise, innovation, and dedication to front-end development.
      </p> */}
      <div className="accordion">
        <div className="thumbnails">
          {openAchievement === "aws-practitioner" && (
            <Swiper
              // navigation={true}
              autoplay={true}
              loop={true}
              slidesPerView={1}
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              pagination={{
                el: ".swiper-pagination-1", // Use a valid DOM element here
                type: "bullets",
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper w-[90%] rounded-lg"
            >
              <SwiperSlide className="!w-full flex justify-center">
                <img
                  src="/software-engineer-portfolio/assets/milestone-thumbs/aws-practitioner/aws-practitioner.png"
                  alt="aws practitioner"
                  className="mx-auto pb-8 object-contain"
                  data-achievement="aws-practitioner"
                />
              </SwiperSlide>
              <div className="swiper-pagination-1 flex justify-center gap-2"></div>
              {/* <div className="absolute bottom-0 left-0 w-full">
          </div> */}
            </Swiper>
          )}
          {openAchievement === "hackathon" && (
            <Swiper
              // navigation={true}
              autoplay={true}
              loop={true}
              slidesPerView={1}
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              pagination={{
                el: ".swiper-pagination-2", // Use a valid DOM element here
                type: "bullets",
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper w-[90%] rounded-lg"
            >
              <SwiperSlide className="!w-full flex justify-center">
                <img
                  src="/software-engineer-portfolio/assets/milestone-thumbs/mastercode/mastercode.png"
                  alt="aws practitioner"
                  className="mx-auto pb-8 object-contain"
                  data-achievement="aws-practitioner"
                />
              </SwiperSlide>
              <div className="swiper-pagination-2 flex justify-center gap-2"></div>
              {/* <div className="absolute bottom-0 left-0 w-full">
          </div> */}
            </Swiper>
          )}
          {openAchievement === "java-competition" && (
            <Swiper
              // navigation={true}
              autoplay={true}
              loop={true}
              slidesPerView={1}
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              pagination={{
                el: ".swiper-pagination-3", // Use a valid DOM element here
                type: "bullets",
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper w-[90%] rounded-lg"
            >
              <SwiperSlide className="!w-full flex justify-center">
              {/* link: https://venturenix.com/2024/03/venturenix-hkstp-mastercode-java-python/ */}
                <img
                  src="/software-engineer-portfolio/assets/milestone-thumbs/mastercode/mastercode.png"
                  alt="aws practitioner"
                  className="mx-auto pb-8 object-contain"
                  data-achievement="aws-practitioner"
                />
              </SwiperSlide>
              <SwiperSlide className="!w-full">
                <img
                  src="/software-engineer-portfolio/assets/proj-thumbs/image.png"
                  alt="aws practitioner"
                  className="mx-auto pb-8 object-contain"
                  data-achievement="aws-practitioner"
                />
              </SwiperSlide>
              <SwiperSlide className="!w-full flex justify-center">
                <img
                  src="/software-engineer-portfolio/assets/proj-thumbs/image.png"
                  alt="aws practitioner"
                  className="mx-auto pb-8 object-contain"
                  data-achievement="aws-practitioner"
                />
              </SwiperSlide>
              <div className="swiper-pagination-3 flex justify-center gap-2"></div>
              {/* <div className="absolute bottom-0 left-0 w-full">
          </div> */}
            </Swiper>
          )}
        </div>
        <div className="details">
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="aws-practitioner"
              onClick={handleAccordionClick}
            >
              <h2>AWS Pactitioner</h2>
              <img
                src="/software-engineer-portfolio/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div
              className="accordion-content"
              data-achievement="aws-practitioner"
              onClick={handleAccordionClick}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              similique ipsam quis quae accusamus rerum, necessitatibus placeat
              molestias debitis quisquam?
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="hackathon"
              onClick={handleAccordionClick}
            >
              <h2>Web3 Hackathon Competition</h2>
              <img
                src="/software-engineer-portfolio/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div className="accordion-content" data-achievement="hackathon">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              similique ipsam quis quae accusamus rerum, necessitatibus placeat
              molestias debitis quisquam?
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="java-competition"
              onClick={handleAccordionClick}
            >
              <h2>Java Competition</h2>
              <img
                src="/software-engineer-portfolio/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div
              className="accordion-content"
              data-achievement="java-competition"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              similique ipsam quis quae accusamus rerum, necessitatibus placeat
              molestias debitis quisquam?
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
