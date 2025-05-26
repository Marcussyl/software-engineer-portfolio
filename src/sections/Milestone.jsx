export const Milestone = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="tag">
        <p>Milestones</p>
        <img src="/assets/tag-icons/achievement.png" alt="milestone" />
      </div>
      <h1 className="section-title gradient-text">Milestone</h1>
      <p className="section-desc">
        A showcase of certifications, awards, and achievements highlighting
        expertise, innovation, and dedication to front-end development.
      </p>
      <div className="accordion" data-active-accordion="aws-practitioner">
        <div className="thumbnails">
          <img
            src="/assets/proj-thumbs/image.png"
            alt="aws practitioner"
            data-achievement="aws-practitioner"
          />
          <img
            src="/assets/proj-thumbs/image-1.png"
            alt="hackathon"
            data-achievement="hackathon"
          />
          <img
            src="/assets/proj-thumbs/image-2.png"
            alt="java competition"
            data-achievement="java-competition"
          />
        </div>
        <div className="details">
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="aws-practitioner"
            >
              <h2>Lorem ipsum dolor sit amet.</h2>
              <img
                src="/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div
              className="accordion-content"
              data-achievement="aws-practitioner"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              similique ipsam quis quae accusamus rerum, necessitatibus placeat
              molestias debitis quisquam?
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="hackathon"
            >
              <h2>Lorem ipsum dolor sit amet.</h2>
              <img
                src="/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div className="accordion-content" data-achievement="hackathon">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              similique ipsam quis quae accusamus rerum, necessitatibus placeat
              molestias debitis quisquam?
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="java-competition"
            >
              <h2>Lorem ipsum dolor sit amet.</h2>
              <img
                src="/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div
              className="accordion-content"
              data-achievement="java-competition"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              similique ipsam quis quae accusamus rerum, necessitatibus placeat
              molestias debitis quisquam?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};