import TechStackGrid from "../components/TechStackGrid";
import { motion } from "motion/react";

const techStackItems = [
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-redux.png",
    imgAlt: "redux",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-js.png",
    imgAlt: "js",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-react.png",
    imgAlt: "react",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-vue.png",
    imgAlt: "vue",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-nodejs.png",
    imgAlt: "nodejs",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-aws.png",
    imgAlt: "express",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-azure.png",
    imgAlt: "mongodb",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-docker.png",
    imgAlt: "postgresql",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-jest.png",
    imgAlt: "mysql",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-mocha.png",
    imgAlt: "mysql",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-passportjs.png",
    imgAlt: "mysql",
  },
  {
    imgPath:
      "/software-engineer-portfolio/assets/tech-icos/ico-google-cloud.png",
    imgAlt: "mysql",
  },
  {
    imgPath:
      "/software-engineer-portfolio/assets/tech-icos/ico-google-cloud.png",
    imgAlt: "mysql",
  },
  {
    imgPath:
      "/software-engineer-portfolio/assets/tech-icos/ico-google-cloud.png",
    imgAlt: "mysql",
  },
];

const TechStackSection = () => {
  return (
    <div className="flex flex-col gap-10 px-5 py-7 justify-center items-center">
      <motion.div
        className="inline-flex flex-col gap-5 items-start w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="tag mx-auto">
          <p className="whitespace-nowrap">Tech Stack</p>
          <img
            src="/software-engineer-portfolio/assets/tag-icons/tech-stack.png"
            alt="icon"
            className=""
          />
        </div>
        <h2 className="gradient-text section-title leading-normal text-center mx-auto">
          Technologies I Used
        </h2>
        <p className="section-desc">
          I've worked with a variety of technologies and frameworks over the
          years, and I'm always eager to learn new ones. Here are some of the
          technologies I've used:
        </p>
      </motion.div>
      <TechStackGrid techStackItems={techStackItems}/>
    </div>
  );
};

export default TechStackSection;