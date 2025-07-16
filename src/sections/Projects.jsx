import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailCard from "../components/ProjectDetailCard";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    projectId: "1",
    thumbImg: "/software-engineer-portfolio/assets/proj-thumbs/image.png",
    title: "Jammming",
    tags: ["React", "JavaScript", "Responsive Design"],
  },
  {
    projectId: "2",
    thumbImg: "/software-engineer-portfolio/assets/proj-thumbs/image-1.png",
    title: "AI Racer",
    tags: ["React", "JavaScript", "Responsive Design"],
  },
  {
    projectId: "3",
    thumbImg: "/software-engineer-portfolio/assets/proj-thumbs/image-2.png",
    title: "Mark Sixer",
    tags: ["React", "JavaScript", "Responsive Design"],
  },
  {
    projectId: "4",
    thumbImg: "/software-engineer-portfolio/assets/proj-thumbs/image-2.png",
    title: "Mark Sixer",
    tags: ["React", "JavaScript", "Responsive Design"],
  },
  {
    projectId: "5",
    thumbImg: "/software-engineer-portfolio/assets/proj-thumbs/image-2.png",
    title: "Mark Sixer",
    tags: ["React", "JavaScript", "Responsive Design"],
  },
  {
    projectId: "6",
    thumbImg: "/software-engineer-portfolio/assets/proj-thumbs/image-2.png",
    title: "Mark Sixer",
    tags: ["React", "JavaScript", "Responsive Design"],
  },
];

export const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleCardClick = (e) => {
    const projectId = e.currentTarget.getAttribute("data-project-id");
    setOpenProjectId(projectId);
    console.log("openProjectId", openProjectId);
  };

  useEffect(() => {
    if (openProjectId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up in case the component unmounts while modal is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProjectId]);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <motion.div
        className="flex flex-col justify-center items-center gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="tag">
          <p>Projects</p>
          <img
            src="/software-engineer-portfolio/assets/tag-icons/tech-stack.png"
            alt="icon"
          />
        </div>
        <h1 className="gradient-text section-title">
          Latest Projects I Have Done
        </h1>
        {/* <p className="section-desc">
          Explore my latest projects, showcasing creativity and precision in
          design. Each project reflects innovation and user-focused solutions.
        </p> */}
        <div className="flex flex-col items-center justify-center flex-wrap md:flex-row py-4 px-6 md:px-10 gap-5">
          {projects.slice(0, visibleCount).map((project) => (
            <ProjectCard
              key={project.projectId + project.title}
              handleCardClick={handleCardClick}
              {...project}
            />
          ))}
        </div>
      </motion.div>
      <div className="round-btn animate-bounce" onClick={handleShowMore}>
        <img
          src="/software-engineer-portfolio/assets/up-right-arrow.png"
          alt="arrow icon"
          className="rotate-135"
        />
      </div>

      {/* Project Detail Card */}
      {openProjectId && (
        <div
          className="blury-bg fixed top-0 left-0 w-full h-full z-50 bg-black/20 cursor-pointer backdrop-blur-xs"
          onClick={() => setOpenProjectId(null)}
        ></div>
      )}
      <AnimatePresence>
        {openProjectId === "1" && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 w-4/5">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectDetailCard
                setOpenProjectId={setOpenProjectId}
                title="Jammming"
                desc="A web application that allows users to search for songs, albums, and artists, and add them to a playlist."
                features={[
                  "Playlist Generation",
                  "Spotify API Integration",
                  "Responsive Design",
                ]}
                challenges={[
                  "API Integration",
                  "Responsive Design",
                  "User Authentication",
                ]}
                githubLink="https://github.com/your-username/jammming"
                liveLink="https://jammming.your-domain.com"
                tags={["React", "JavaScript", "Responsive Design"]}
                swiperImgs={[
                  "/software-engineer-portfolio/assets/proj-thumbs/image.png",
                  "/software-engineer-portfolio/assets/proj-thumbs/image-1.png",
                  "/software-engineer-portfolio/assets/proj-thumbs/image-2.png",
                ]}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openProjectId === "2" && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 w-4/5">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectDetailCard
                setOpenProjectId={setOpenProjectId}
                title="Jammming"
                desc="A web application that allows users to search for songs, albums, and artists, and add them to a playlist."
                features={[
                  "Playlist Generation",
                  "Spotify API Integration",
                  "Responsive Design",
                ]}
                challenges={[
                  "API Integration",
                  "Responsive Design",
                  "User Authentication",
                ]}
                githubLink="https://github.com/your-username/jammming"
                liveLink="https://jammming.your-domain.com"
                tags={["React", "JavaScript", "Responsive Design"]}
                swiperImgs={[
                  "/software-engineer-portfolio/assets/proj-thumbs/image.png",
                  "/software-engineer-portfolio/assets/proj-thumbs/image-1.png",
                  "/software-engineer-portfolio/assets/proj-thumbs/image-2.png",
                ]}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openProjectId === "3" && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 w-4/5">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectDetailCard
                setOpenProjectId={setOpenProjectId}
                title="Jammming"
                desc="A web application that allows users to search for songs, albums, and artists, and add them to a playlist."
                features={[
                  "Playlist Generation",
                  "Spotify API Integration",
                  "Responsive Design",
                ]}
                challenges={[
                  "API Integration",
                  "Responsive Design",
                  "User Authentication",
                ]}
                githubLink="https://github.com/your-username/jammming"
                liveLink="https://jammming.your-domain.com"
                tags={["React", "JavaScript", "Responsive Design"]}
                swiperImgs={[
                  "/software-engineer-portfolio/assets/proj-thumbs/image.png",
                  "/software-engineer-portfolio/assets/proj-thumbs/image-1.png",
                  "/software-engineer-portfolio/assets/proj-thumbs/image-2.png",
                ]}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}