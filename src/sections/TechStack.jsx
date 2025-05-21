import { TechStackItem } from "../components/TechStackItem"

export const TechStackSection = () => {
  return (
    <div className="flex gap-10 px-5 py-7 justify-around">
      <div className="tect-stack-container flex flex-col gap-5 items-center flex-1">
        <div className="flex gap-2 py-2 px-6 border-[1px] border-main-purple rounded-[20px]">
          <p className="whitespace-nowrap">Tech Stack</p>
          <img src="" alt="icon" className="" />
        </div>
        <h2 className="gradient-text text-2xl font-bold">Technologies I Used</h2>
        <p className="text-[rgb(181,178,186)] text-center text-balance">
          I've worked with a variety of technologies and frameworks over the years, and I'm always eager to learn new ones. Here are some of the technologies I've used:
        </p>
        <div className="flex gap-5 text-[#B5B2BA] w-full justify-evenly">
          <div>
            <p className="font-bold">Frontend</p>
            <ul className="text-sm list-disc marker:text-main-purple ml-[13px]">
              <li className="mb-2">React</li>
              <li className="mb-2">Redux</li>
              <li className="mb-2">Vue</li>
              <li className="mb-2">Typescript</li>
              <li className="mb-2">Tailwind</li>
              <li className="mb-2">Sass</li>
              <li className="mb-2">HTML</li>
              <li className="mb-2">CSS</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Backend</p>
            <ul className="text-sm list-disc marker:text-main-purple ml-[13px]">
              <li className="mb-2">Nodejs</li>
              <li className="mb-2">Express</li>
              <li className="mb-2">MongoDB</li>
              <li className="mb-2">PostgreSQL</li>
              <li className="mb-2">MySQL</li>
              <li className="mb-2">SQL</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Infrastructure</p>
            <ul className="text-sm list-disc marker:text-main-purple ml-[13px]">
              <li className="mb-2">Docker</li>
              <li className="mb-2">Kubernetes</li>
              <li className="mb-2">AWS</li>
              <li className="mb-2">Azure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}