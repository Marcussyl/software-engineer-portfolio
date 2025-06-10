export const Projects = () => {
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
      <div className="flex flex-col md:flex-row py-4 px-10 gap-5">
        <div className="expandable-card">
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
        <div className="expandable-card">
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
        <div className="expandable-card">
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
      <div className="proj-detail-card hidden">
        <button className="close-btn absolute top-0 right-2">x</button>
        <div className="basic-info flex-1 flex flex-col gap-5">
          <img
            src="/software-engineer-portfolio/assets/proj-thumbs/image.png"
            alt="swiper img"
            className="proj-thumb"
          />
          <div className="tags flex gap-2 flex-wrap">
            <div className="proj-tag">API Integration</div>
            <div className="proj-tag">Frontend</div>
            <div className="proj-tag">Responsive</div>
            <div className="proj-tag">Responsive</div>
            <div className="proj-tag">Responsive</div>
          </div>
        </div>
        <div className="details flex-1 flex flex-col gap-5">
          <h2 className="proj-title">Jimming</h2>
          <div className="overview">
            <h3 className="proj-subtitle">Overview</h3>
            <p className="proj-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores ab vel nam quis aut eligendi quaerat facilis mollitia
              tempora corporis odio quam ipsam, ad fugit eos est qui eum
              possimus.
            </p>
          </div>
          <div className="features">
            <h3 className="proj-subtitle">Key Features</h3>
            <div className="feature-item flex gap-2">
              <img src="/software-engineer-portfolio/assets/tick.png" alt="icon" />
              <p className="proj-desc">Frontend</p>
            </div>
            <div className="feature-item flex gap-2">
              <img src="/software-engineer-portfolio/assets/tick.png" alt="icon" />
              <p className="proj-desc">Responsive Design</p>
            </div>
            <div className="feature-item flex gap-2">
              <img src="/software-engineer-portfolio/assets/tick.png" alt="icon" />
              <p className="proj-desc">API Integration</p>
            </div>
          </div>
          <div className="buttons flex gap-5">
            <a href="" className="glowing-btn">
              <div className="inner">
                View Source Code
                <img
                  src="/software-engineer-portfolio/assets/github.png"
                  alt="icon"
                  className="object-contain w-[12px]"
                />
              </div>
            </a>
            <div className="flex items-center px-2 gap-2 border-2 border-grayish-white">
              <p>Live Preview</p>
              <img
                src="/software-engineer-portfolio/assets/play.png"
                alt="icon"
                className="object-contain w-[12px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}