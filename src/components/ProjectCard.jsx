const ProjectCard = ({ handleCardClick, projectId, thumbImgs, title, tags }) => {
    return (
      <div
        className="self-stretch p-4 border-2 border-dashed border-main-purple rounded-md bg-[rgba(133,78,243,10%)] text-white relative transition-all duration-200 ease-out cursor-pointer w-full md:w-[45%] lg:w-[25%]"
        data-project-id={projectId}
        onClick={handleCardClick}
      >
        <div className="aspect-video overflow-hidden rounded">
          <img
            src={thumbImgs[0]}
            alt="project thumbnail"
            className="proj-thumb object-cover"
          />
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center p-2 ">
            <div>
              <h3 className="proj-title text-sharp-purple font-bold">
                {title}
              </h3>
            </div>
            <img
              src="/software-engineer-portfolio/assets/up-right-arrow.png"
              alt="link icon"
              className="round-btn"
            />
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3 p-2">
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
      </div>
    );
}

export default ProjectCard;