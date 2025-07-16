import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Milestone = () => {
  return (
    <motion.div className="flex flex-col justify-center items-center gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
      <div className="tag">
        <p>Milestones</p>
        <img src="/software-engineer-portfolio/assets/tag-icons/achievement.png" alt="milestone" />
      </div>
      <h1 className="section-title gradient-text">Milestone</h1>
      <p className="section-desc">
        A showcase of certifications, awards, and achievements highlighting
        expertise, innovation, and dedication to front-end development.
      </p>
      <div className="accordion" data-active-accordion="aws-practitioner">
        <div className="thumbnails">
          {/* <img
            src="/software-engineer-portfolio/assets/proj-thumbs/image.png"
            alt="aws practitioner"
            data-achievement="aws-practitioner"
          />
          <img
            src="/software-engineer-portfolio/assets/proj-thumbs/image-1.png"
            alt="hackathon"
            data-achievement="hackathon"
          />
          <img
            src="/software-engineer-portfolio/assets/proj-thumbs/image-2.png"
            alt="java competition"
            data-achievement="java-competition"
          /> */}
          <Swiper
            // navigation={true}
            autoplay={true}
            loop={true}
            slidesPerView={1}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            pagination={{
              el: ".swiper-pagination", // Use a valid DOM element here
              type: "bullets",
              clickable: true,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper w-[90%] rounded-lg"
          >
            <SwiperSlide className="!w-full flex justify-center">
              <img
                src="/software-engineer-portfolio/assets/proj-thumbs/image.png"
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
            <div className="swiper-pagination"></div>
            {/* <div className="absolute bottom-0 left-0 w-full">
          </div> */}
          </Swiper>
        </div>
        <div className="details">
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="aws-practitioner"
            >
              <h2>Lorem ipsum dolor sit amet.</h2>
              <img
                src="/software-engineer-portfolio/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div
              className="accordion-content"
              data-achievement="aws-practitioner"
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
            >
              <h2>Lorem ipsum dolor sit amet.</h2>
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
            >
              <h2>Lorem ipsum dolor sit amet.</h2>
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
