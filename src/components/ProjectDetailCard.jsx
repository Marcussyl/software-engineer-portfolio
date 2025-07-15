const ProjectDetailCard = ({ setOpenProjectId, title, desc, features, challenges, githubLink, liveLink, tags, swiperImgs }) => {
    return (
        <div className="proj-detail-card">
        <button
            className="close-btn absolute top-5 right-6 cursor-pointer text-white text-2xl z-20"
            onClick={() => setOpenProjectId(null)}
        >
            x
        </button>
        <div className="basic-info flex-1 flex flex-col gap-5">
            <img
            src={swiperImgs[0]}
            alt="swiper img"
            className="proj-thumb"
            />
            <div className="tags flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
                <div className="proj-tag" key={index}>{tag}</div>
            ))}
            </div>
        </div>
        <div className="details flex-1 flex flex-col gap-5">
            <h2 className="proj-title">{title}</h2>
            <div className="overview">
            <h3 className="proj-subtitle">Overview</h3>
            <p className="proj-desc">
                {desc}
            </p>
            </div>
            <div className="flex gap-10">
                <div className="features flex flex-col gap-2">
                    <h3 className="proj-subtitle">Key Features</h3>
                    {
                        features.map((feature, index) => (
                            <div className="feature-item flex gap-2" key={index}>
                                <img src="/software-engineer-portfolio/assets/tick.png" alt="icon" />
                                <p className="proj-desc">{feature}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="challenges flex flex-col gap-2">
                    <h3 className="proj-subtitle">Challenges</h3>
                    {
                        challenges.map((challenge, index) => (
                            <div className="feature-item flex gap-2" key={index}>
                                <img src="/software-engineer-portfolio/assets/tick.png" alt="icon" />
                                <p className="proj-desc">{challenge}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="buttons flex gap-5 mt-5">
            <a href={githubLink} target="_blank" className="glowing-btn flex-1">
                <div className="inner w-full justify-center p-3 text-base gap-4">
                View Source Code
                <img
                    src="/software-engineer-portfolio/assets/github.png"
                    alt="icon"
                    className="object-contain w-[15px]"
                />
                </div>
            </a>
            <a href={liveLink} target="_blank" className="flex justify-center p-3 text-base items-center px-2 gap-4 border-2 border-grayish-white flex-1 cursor-pointer">
                <p>Live Preview</p>
                <img
                src="/software-engineer-portfolio/assets/play.png"
                alt="icon"
                className="object-contain w-[15px]"
                />
            </a>
            </div>
        </div>
        </div>
    );
}

export default ProjectDetailCard;