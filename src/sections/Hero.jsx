import { HeroTag } from "../components/HeroTag";
import { motion } from "motion/react";
import { useTypewriter } from "../components/useTypewriter";
import TextRotate from "../components/TextRotate";

export const HeroSection = () => {
  const displayText = useTypewriter(
    "I'm a full-stack software engineer passionate about creating responsive, user-friendly web experiences with 2 years of experience in modern technologies.",
    70
  );

  return (
    <div className="mt-4 flex flex-col justify-center items-center gap-7 w-full mx-auto relative text-center px-7">
      <div className="tag">
        <p>Hi there</p>
        <img src="/software-engineer-portfolio/assets/tag-icons/shake-hand.png" />
      </div>
      {/* <TextRotate/> */}
      <div className="gradient-text">
        <h2 className="text-xl">I'm Marcus,</h2>
        <h1 className="section-title text-4xl leading-relaxed">
          Software Engineer
        </h1>
      </div>
      <p className="section-desc inline-block typewriter-effect">
        {displayText}
        <span className="w-3 h-3 inline-block border-b-2 animate-blinking-caret"></span>
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glowing-btn block"
      >
        <div className="inner">
          Download CV
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 12.75V14.625C1.5 15.1223 1.69754 15.5992 2.04917 15.9508C2.40081 16.3025 2.87772 16.5 3.375 16.5H14.625C15.1223 16.5 15.5992 16.3025 15.9508 15.9508C16.3025 15.5992 16.5 15.1223 16.5 14.625V12.75M12.75 9L9 12.75M9 12.75L5.25 9M9 12.75V1.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.button>
      <HeroTag
        number={"05+"}
        desc={"Technologies<br>mastered"}
        moreClass="top-6 left-10"
      />
      <HeroTag
        number={"2+"}
        desc={"Years of<br>experiences"}
        moreClass="bottom-5 right-3"
      />
    </div>
  );
}