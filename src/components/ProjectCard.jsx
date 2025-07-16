const ProjectCard = ({ handleCardClick, projectId, thumbImg, title, tags }) => {
    return (
      <div
        className="expandable-card"
        data-project-id={projectId}
        onClick={handleCardClick}
      >
        <img
          src={thumbImg}
          alt="project thumbnail"
          className="proj-thumb"
        />
        <div className="mt-3">
          <div className="flex justify-between items-center p-2 ">
            <div>
                <h3 className="proj-title text-sharp-purple font-bold">{title}</h3>
            </div>
            <img
              src="/software-engineer-portfolio/assets/up-right-arrow.png"
              alt="link icon"
              className="round-btn"
            />
          </div>
          <div className="flex flex-wrap gap-3 p-2">
            {tags.map((tag, index) => (
              <div className="proj-tag" key={index}>{tag}</div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ProjectCard;