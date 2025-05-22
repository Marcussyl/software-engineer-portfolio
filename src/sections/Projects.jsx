export const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="tag">
        <p>Projects</p>
        <img src="/assets/tag-icons/tech-stack.png" alt="icon"/>
      </div>
      <h1 className="gradient-text section-title">Take a Look at the Latest Projects I Have Done</h1>
      <p className="section-desc">Explore my latest projects, showcasing creativity and precision in design. Each project reflects innovation and user-focused solutions.</p>
      <div className="flex p-4 gap-2 font-mono">
        <div className="expandable-card">
          <img src="" alt="project thumbnail" className="h-[150px] border-1 border-white object-contain"/>
          <div className="mt-3">
            <div className="flex justify-between border-1 border-white p-2">
              <h3 className="font-bold">App Development</h3>
              <img src="/assets/up-right-arrow.png" alt="link icon" className="cursor-pointer object-contain"/>
            </div>
            <div className="flex flex-wrap gap-3 p-2">
              <div className="card-tag">#school project</div>
              <div className="card-tag">#react</div>
              <div className="card-tag">#jquery</div>
            </div>
          </div>
        </div>
        <div className="expandable-card">
          <img src="" alt="project thumbnail" className="h-[150px] border-1 border-white object-contain"/>
          <div className="mt-3">
            <div className="flex justify-between border-1 border-white p-2">
              <h3 className="font-bold">App Development</h3>
              <img src="/assets/up-right-arrow.png" alt="link icon" className="cursor-pointer object-contain"/>
            </div>
            <div className="flex flex-wrap gap-3 p-2">
              <div className="card-tag">#school project</div>
              <div className="card-tag">#react</div>
              <div className="card-tag">#jquery</div>
            </div>
          </div>
        </div>
        <div className="expandable-card">
          <img src="" alt="project thumbnail" className="h-[150px] border-1 border-white object-contain"/>
          <div className="mt-3">
            <div className="flex justify-between border-1 border-white p-2">
              <h3 className="font-bold">App Development</h3>
              <img src="/assets/up-right-arrow.png" alt="link icon" className="cursor-pointer object-contain"/>
            </div>
            <div className="flex flex-wrap gap-3 p-2">
              <div className="card-tag">#school project</div>
              <div className="card-tag">#react</div>
              <div className="card-tag">#jquery</div>
            </div>
          </div>
        </div>
      </div>
      <div className="glowing-btn">
        <div className="inner">
          Show More
        </div>
      </div>
    </div>
  )
}