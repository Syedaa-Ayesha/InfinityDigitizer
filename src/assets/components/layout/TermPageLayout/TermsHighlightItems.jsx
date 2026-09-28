

const TermsHighlightItem = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-[12px] mx-auto">
      <div
        className="
          flex h-[56px] w-[56px] shrink-0 items-center justify-center
          rounded-full bg-[#7434E5]
        "
      >
        <Icon
          size={24}
          strokeWidth={1.55}
          className="text-white"
        />
      </div>

      <h3
        className="
          text-base
          font-bold
          font-dmSans
          leading-[1.25]
          tracking-[-0.05px]
          text-[#111118]
        "
      >
        {title}
      </h3>

      <p
        className="
          max-w-[195px]
          text-sm
          font-normal
          leading-[1.55]
          font-inter
          text-[#6B6B80]
        "
      >
        {description}
      </p>
    </div>
  );
};

export default TermsHighlightItem;