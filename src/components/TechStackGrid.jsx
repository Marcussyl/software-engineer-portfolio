import { motion } from "motion/react";
import TechStackItem from "./TechStackItem";

const gridCols = 4;
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
        imgPath: "",
        imgAlt: "",
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
        imgPath: "",
        imgAlt: "",
    },
    {
        imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-google-cloud.png",
        imgAlt: "mysql",
    },
    {
        imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-google-cloud.png",
        imgAlt: "mysql",
    },
    {
        imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-google-cloud.png",
        imgAlt: "mysql",
    },
]

const baseDelay = 0.1;

const TechStackGrid = () => {
    return (
      <div className="grid grid-cols-4 grid-rows-4 gap-4 w-fit m-5 z-20 cursor-pointer">
        {techStackItems.map((item, idx) => {
          const row = Math.floor(idx / gridCols);
          const col = idx % gridCols;
          const delay = (row + col) * baseDelay;

          if (!item) return <div key={idx}></div>;

          if (item.imgPath === "") {
            return (
              <div key={idx} className="w-10 h-10 bg-transparent rounded-sm"></div>
            )
          }

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay, duration: 0.5, type: "spring" }}
            >
              <TechStackItem imgPath={item.imgPath} imgAlt={item.imgAlt} />
            </motion.div>
          );
        })}
      </div>
    );

}

export default TechStackGrid;