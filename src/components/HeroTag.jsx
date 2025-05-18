export const HeroTag = ({number, desc, moreClass}) => {
    return (
      <div
        className={`absolute flex gap-2 items-center p-3 rounded ${moreClass} bg-[#1e103a]`}
      >
        <p className="text-2xl font-bold gradient-text">
          {number}
        </p>
        <p
          className="text-grayish-white text-xs text-left"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    );
}