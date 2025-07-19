import { motion } from "motion/react";

const ProjectDetailCard = ({
  setOpenProjectId,
  title,
  desc,
  features,
  challenges,
  githubLink,
  liveLink,
  tags,
  thumbImgs,
}) => {
  return (
    <div className="relative text-grayish-white p-5 md:p-8 pt-12 md:pt-8 border-2 border-dashed border-main-purple rounded-xl w-full bg-dark-purple">
      <button
        className="absolute top-4 right-4 cursor-pointer z-20 group"
        onClick={() => setOpenProjectId(null)}
      >
        <img
          src="/software-engineer-portfolio/assets/icon-close.svg"
          alt="close icon"
          className="group-hover:hidden w-6 h-6"
        />
        <img
          src="/software-engineer-portfolio/assets/icon-close-purple.svg"
          alt="close icon"
          className="hidden group-hover:block w-6 h-6"
        />
      </button>
      <div className="flex flex-col md:flex-row gap-2 md:gap-7 max-h-[500px] md:h-auto" style={{overflowY: "auto", WebkitOverflowScrolling: "touch"}}>
        <div className="basic-info flex-1 flex flex-col gap-5">
          <img src={thumbImgs[0]} alt="swiper img" className="proj-thumb" />
          <div className="tags flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <div
                className="text-xs md:text-sm border-1 border-grayish-white py-1 px-2 md:px-[13px] rounded-[18px] whitespace-nowrap text-grayish-white"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="details flex-1 flex flex-col gap-3 md:gap-5">
          <h2 className="text-2xl text-sharp-purple font-bold">{title}</h2>
          <div className="overview">
            <h3 className="text-lg font-bold text-grayish-white">Overview</h3>
            <p className="text-sm md:text-base text-grayish-white">{desc}</p>
          </div>
          {(features || challenges) && (
            <div className="flex gap-10">
              {features && (
                <div className="features flex flex-col gap-2">
                  <h3 className="proj-subtitle">Key Features</h3>
                  {features.map((feature, index) => (
                    <div className="feature-item flex gap-2" key={index}>
                      <img
                        src="/software-engineer-portfolio/assets/tick.png"
                        alt="icon"
                      />
                      <p className="proj-desc">{feature}</p>
                    </div>
                  ))}
                </div>
              )}
              {challenges && (
                <div className="challenges flex flex-col gap-2">
                  <h3 className="proj-subtitle">Challenges</h3>
                  {challenges.map((challenge, index) => (
                    <div className="feature-item flex gap-2" key={index}>
                      <img
                        src="/software-engineer-portfolio/assets/tick.png"
                        alt="icon"
                      />
                      <p className="proj-desc">{challenge}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          <div className="buttons flex gap-2 md:gap-5">
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                className="glowing-btn flex-1"
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="inner w-full justify-center py-2 text-sm md:text-base gap-3">
                  GitHub
                  <img
                    src="/software-engineer-portfolio/assets/github.png"
                    alt="icon"
                    className="object-contain w-[15px]"
                  />
                </div>
              </motion.a>
            )}
            {liveLink && (
              <motion.a
                href={liveLink}
                target="_blank"
                className="flex justify-center flex-1 py-2 text-sm md:text-base items-center px-2 gap-3 border-2 border-grayish-white cursor-pointer"
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <p>Live</p>
                <img
                  src="/software-engineer-portfolio/assets/play.png"
                  alt="icon"
                  className="object-contain w-[15px]"
                />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
