import { TechStackItem } from "../components/TechStackItem";

export const NewTechStackSection = () => {
  return (
    <div className="flex gap-10 px-5 py-7 justify-around">
      <div className="">
        <TechStackItem imgPath="/assets/tech-icos/ico-react.png" imgAlt="react" />
      </div>
      <div className="flex flex-col gap-5 items-center flex-1">
        <div className="tag">
          <p className="whitespace-nowrap">Tech Stack</p>
          <img src="/assets/tag-icons/tech-stack.png" alt="icon" className="" />
        </div>
        <h2 className="gradient-text section-title">Technologies I Used</h2>
        <p className="section-desc">
          I've worked with a variety of technologies and frameworks over the
          years, and I'm always eager to learn new ones. Here are some of the
          technologies I've used:
        </p>
      </div>
    </div>
  );
};
