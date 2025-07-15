import { useState } from "react";
import ProjectDetailCard from "../components/ProjectDetailCard";
import { motion, AnimatePresence } from "motion/react";

export const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState(null);

  const handleCardClick = (e) => {
    const projectId = e.currentTarget.getAttribute("data-project-id");
    setOpenProjectId(projectId);
    console.log("openProjectId", openProjectId);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="tag">
        <p>Projects</p>
        <img src="/software-engineer-portfolio/assets/tag-icons/tech-stack.png" alt="icon" />
      </div>
      <h1 className="gradient-text section-title">
        Take a Look at the Latest Projects I Have Done
      </h1>
      <p className="section-desc">
        Explore my latest projects, showcasing creativity and precision in
        design. Each project reflects innovation and user-focused solutions.
      </p>
      <div className="flex flex-col md:flex-row py-4 px-6 md:px-10 gap-5">
        <div className="expandable-card" data-project-id="1" onClick={handleCardClick}>
          <img
            src="/software-engineer-portfolio/assets/proj-thumbs/image.png"
            alt="project thumbnail"
            className="proj-thumb"
          />
          <div className="mt-3">
            <div className="flex justify-between items-center p-2 ">
              <h3 className="proj-title">Jammming</h3>
              <img
                src="/software-engineer-portfolio/assets/up-right-arrow.png"
                alt="link icon"
                className="round-btn"
              />
            </div>
            <div className="flex flex-wrap gap-3 p-2">
              <div className="proj-tag">school project</div>
              <div className="proj-tag">react</div>
              <div className="proj-tag">jquery</div>
            </div>
          </div>
        </div>
        <div className="expandable-card" data-project-id="2" onClick={handleCardClick}>
          <img
            src="/software-engineer-portfolio/assets/proj-thumbs/image-1.png"
            alt="project thumbnail"
            className="proj-thumb"
          />
          <div className="mt-3">
            <div className="flex justify-between items-center p-2 ">
              <h3 className="proj-title">AI Racer</h3>
              <img
                src="/software-engineer-portfolio/assets/up-right-arrow.png"
                alt="link icon"
                className="round-btn"
              />
            </div>
            <div className="flex flex-wrap gap-3 p-2">
              <div className="proj-tag">school project</div>
              <div className="proj-tag">react</div>
              <div className="proj-tag">jquery</div>
            </div>
          </div>
        </div>
        <div className="expandable-card" data-project-id="3" onClick={handleCardClick}>
          <img
            src="/software-engineer-portfolio/assets/proj-thumbs/image-2.png"
            alt="project thumbnail"
            className="proj-thumb"
          />
          <div className="mt-3">
            <div className="flex justify-between items-center p-2 ">
              <h3 className="proj-title">Mark Sixer</h3>
              <img
                src="/software-engineer-portfolio/assets/up-right-arrow.png"
                alt="link icon"
                className="round-btn"
              />
            </div>
            <div className="flex flex-wrap gap-3 p-2">
              <div className="proj-tag">school project</div>
              <div className="proj-tag">react</div>
              <div className="proj-tag">jquery</div>
            </div>
          </div>
        </div>
      </div>
      <div className="round-btn animate-bounce">
        <img src="/software-engineer-portfolio/assets/up-right-arrow.png" alt="arrow icon" className="rotate-135"/>
      </div>

      {/* Project Detail Card */}
      {openProjectId && <div className="blury-bg fixed top-0 left-0 w-full h-full z-50 bg-black/20 cursor-pointer backdrop-blur-xs" onClick={() => setOpenProjectId(null)}></div>}
      <AnimatePresence>
        {openProjectId === '1' && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
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
                features={["Playlist Generation", "Spotify API Integration", "Responsive Design"]}
                challenges={["API Integration", "Responsive Design", "User Authentication"]}
                githubLink="https://github.com/your-username/jammming"
                liveLink="https://jammming.your-domain.com"
                tags={["React", "JavaScript", "Responsive Design"]}
                swiperImgs={["/software-engineer-portfolio/assets/proj-thumbs/image.png", "/software-engineer-portfolio/assets/proj-thumbs/image-1.png", "/software-engineer-portfolio/assets/proj-thumbs/image-2.png"]}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openProjectId === '2' && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
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
                features={["Playlist Generation", "Spotify API Integration", "Responsive Design"]}
                challenges={["API Integration", "Responsive Design", "User Authentication"]}
                githubLink="https://github.com/your-username/jammming"
                liveLink="https://jammming.your-domain.com"
                tags={["React", "JavaScript", "Responsive Design"]}
                swiperImgs={["/software-engineer-portfolio/assets/proj-thumbs/image.png", "/software-engineer-portfolio/assets/proj-thumbs/image-1.png", "/software-engineer-portfolio/assets/proj-thumbs/image-2.png"]}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openProjectId === '3' && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
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
                features={["Playlist Generation", "Spotify API Integration", "Responsive Design"]}
                challenges={["API Integration", "Responsive Design", "User Authentication"]}
                githubLink="https://github.com/your-username/jammming"
                liveLink="https://jammming.your-domain.com"
                tags={["React", "JavaScript", "Responsive Design"]}
                swiperImgs={["/software-engineer-portfolio/assets/proj-thumbs/image.png", "/software-engineer-portfolio/assets/proj-thumbs/image-1.png", "/software-engineer-portfolio/assets/proj-thumbs/image-2.png"]}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}