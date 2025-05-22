import { TechStackItem } from "../components/TechStackItem"

export const TechStackSection = () => {
  return (
    <div className="flex gap-10 px-5 py-7 justify-around">
      <div className="flex flex-col gap-5 items-center flex-1">
        <div className="tag">
          <p className="whitespace-nowrap">Tech Stack</p>
          <img src="/assets/tag-icons/tech-stack.png" alt="icon" className="" />
        </div>
        <h2 className="gradient-text section-title">
          Technologies I Used
        </h2>
        <p className="text-[rgb(181,178,186)] text-center text-balance">
          I've worked with a variety of technologies and frameworks over the
          years, and I'm always eager to learn new ones. Here are some of the
          technologies I've used:
        </p>
        <div className="flex gap-5 text-[#B5B2BA] w-full justify-evenly items-center">
          <div className="tech-stack-col">
            <p className="tech-stack-col-title">Frontend</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Vue</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Sass</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="tech-stack-col">
            <p className="tech-stack-col-title">Backend</p>
            <ul>
              <li>Nodejs</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="tech-stack-col">
            <p className="tech-stack-col-title">Infrastructure</p>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>AWS</li>
              <li>Azure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}