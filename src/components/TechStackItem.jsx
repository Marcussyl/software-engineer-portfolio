const TechStackItem = ({imgPath, imgAlt}) => {
  return (
    <div className="w-25 h-25">
      <img src={imgPath} alt={imgAlt} className="rounded-sm"/>
    </div>
  );
}

export default TechStackItem;