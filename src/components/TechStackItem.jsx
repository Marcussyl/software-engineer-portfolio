export const TechStackItem = ({text, value, moreClass}) => {
  return (
    <div class={`tech-label text-light-white ${moreClass}`} data-value={value}>
      {text}
    </div>
  );
}