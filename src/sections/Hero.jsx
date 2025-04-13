export const HeroSection = () => {
  return (
    <div
      id="hero"
      className="mt-7 flex flex-col justify-center items-center gap-1 backgr"
    >
      <div className="tag flex">
        Hi there
        <img src="../assets/shake-hand.svg" alt="hand shaking icon" />
      </div>
      <h2>I'm Marcus,</h2>
      <h1>Full-Stack Software Engineer</h1>
      <p className="description text-center">
        I'm a full-stack software engineer pashionate about creating responsive,
        user-friendly web experiences with 2 years of experiences in modern
        technologies.
      </p>
      <a href="" className="primary-button">
        <div className="inner">Download CV</div>
      </a>
      <div className="floating-tag">
        <p>05+</p>
        <p>Technologies mastered</p>
      </div>
      <div className="floating-tag">
        <p>02+</p>
        <p>Years of experiences</p>
      </div>
    </div>
  );
}