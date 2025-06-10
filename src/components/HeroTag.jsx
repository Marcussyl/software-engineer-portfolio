import Float from "@/fancy/components/blocks/float.jsx";
import { motion } from "motion/react";

export const HeroTag = ({ number, desc, moreClass }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.5, ease: "easeOut" }}
      className={`absolute hidden md:block ${moreClass}`}
    >
      <Float>
        <div
          className={`flex gap-2 items-center p-3 rounded bg-[#1e103a]`}
        >
          <p className="text-2xl font-bold gradient-text">{number}</p>
          <p
            className="text-grayish-white text-xs text-left"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      </Float>
    </motion.div>
  );
};
