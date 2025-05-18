import { HeroTag } from "../components/HeroTag";

export const HeroSection = () => {
  return (
    <div
      className="mt-4 flex flex-col justify-center items-center gap-7 w-[80%] mx-auto relative text-center px-7 py-10"
    >
      <div className="tag flex">
        Hi there
        {/*<img src="./shake-hand.svg" alt="hand shaking"/>*/}
      </div>
      <div className="gradient-text">
        <h2 className="text-xl">I'm Marcus,</h2>
        <h1 className="text-4xl leading-relaxed">
          Full-Stack Software Engineer
        </h1>
      </div>
      <p className="description text-[#a29daa] text-balance">
        I'm a full-stack software engineer pashionate about creating responsive,
        user-friendly web experiences with 2 years of experiences in modern
        technologies.
      </p>
      <a
        href=""
        className="bg-gradient-to-b from-[#3d2769] via-[#7d64b1] to-[#854ef2] px-0.5 drop-shadow-2xl relative"
      >
        <div className="bg-[#382167] p-2 text-white border-b-[#854ef2] border-b-2 text-sm flex gap-2 items-center drop-shadow-xl drop-shadow-indigo-500">
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </a>
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