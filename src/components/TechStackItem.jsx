export const TechStackItem = ({text, value, moreClass}) => {
  return (
    <div class={`tech-stack-item text-light-white hover:scale-3d cursor-pointer w-fit ${moreClass}`} data-value={value}>
      {text}
    </div>
  );
}