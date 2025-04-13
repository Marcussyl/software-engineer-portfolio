export const HeroSection = () => {
  return (
    <div
      id="hero"
      className="mt-7 flex flex-col justify-center items-center gap-5 relative text-center py-7"
    >
      <div className="tag flex">
        Hi there
        <img src="../assets/shake-hand.svg" alt="hand shaking icon" />
      </div>
      <h2 className="text-2xl">I'm Marcus,</h2>
      <h1>Full-Stack Software Engineer</h1>
      <p className="description">
        I'm a full-stack software engineer pashionate about creating responsive,
        user-friendly web experiences with 2 years of experiences in modern
        technologies.
      </p>
      <a href="" className="primary-button gradient-button">
        <div className="inner">
          Download CV
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 12.75V14.625C1.5 15.1223 1.69754 15.5992 2.04917 15.9508C2.40081 16.3025 2.87772 16.5 3.375 16.5H14.625C15.1223 16.5 15.5992 16.3025 15.9508 15.9508C16.3025 15.5992 16.5 15.1223 16.5 14.625V12.75M12.75 9L9 12.75M9 12.75L5.25 9M9 12.75V1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </a>
      <div className="floating-tag top-6 left-1 rounded-xl">
        <p>05+</p>
        <p>Technologies<br/>mastered</p>
      </div>
      <div className="floating-tag bottom-1 right-2 rounded-xl">
        <p>02+</p>
        <p>Years of<br/>experiences</p>
      </div>
    </div>
  );
}