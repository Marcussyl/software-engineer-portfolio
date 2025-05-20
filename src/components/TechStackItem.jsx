export const TechStackItem = ({imgPath, imgAlt}) => {
  return (
    <div className="tech-stack-item rounded-sm bg-linear-to-br from-[#5930AC] from-[47%] via-[#2E067E] via-[66%] to-[#EBE4FB] to-[100%] blur">
      <div className="img-wrapper bg-linear-to-br from-[#FFFFFF] from-[100%] via-transparent via-[50%] to-[#FFFFFF] to-[100%]">
      </div>
        <img src={imgPath} alt={imgAlt} />
    </div>
  );
}