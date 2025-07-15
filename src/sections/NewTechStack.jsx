import TechStackGrid from "../components/TechStackGrid";

export const NewTechStackSection = () => {
  return (
    <div className="flex gap-10 px-5 py-7 justify-center">
      <TechStackGrid />
      <div className="inline-flex flex-col gap-5 items-start w-1/2">
        <div className="tag">
          <p className="whitespace-nowrap">Tech Stack</p>
          <img src="/software-engineer-portfolio/assets/tag-icons/tech-stack.png" alt="icon" className="" />
        </div>
        <h2 className="gradient-text section-title">Technologies I Used</h2>
        <p className="section-desc text-left">
          I've worked with a variety of technologies and frameworks over the
          years, and I'm always eager to learn new ones. Here are some of the
          technologies I've used:
        </p>
      </div>
    </div>
  );
};
