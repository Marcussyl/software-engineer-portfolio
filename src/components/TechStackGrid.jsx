import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const TechStackGrid = ({techStackItems}) => {
    return (
      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {techStackItems.map((item, idx) => {
          if (!item) return <div key={idx}></div>;

          if (item.imgPath === "") {
            return (
              <div
                key={idx}
                className="w-10 h-10 bg-transparent rounded-sm"
              ></div>
            );
          }

          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              transition={{ duration: 0.5, type: "spring" }}
              style={{ justifySelf: "center" }}
            >
              <div className="w-25 h-25 p-7">
                <img
                  src={item.imgPath}
                  alt={item.imgAlt}
                  className="rounded-sm"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );

}

export default TechStackGrid;