const TermsRow = ({
  number,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <article
      className="
        mx-auto
        w-full
        max-w-[1344px]

        flex
        flex-col
        items-center
        gap-[20px]

        rounded-[12px]
        border
        border-[#E8E8F0]
        bg-white

        px-[20px]
        py-[22px]

        transition-all
        duration-200
        ease-out

        hover:border-[#DED4F4]
        hover:shadow-[0_5px_16px_rgba(116,52,229,0.05)]

        sm:px-[24px]
        sm:py-[22px]

        lg:flex-row
        lg:items-center
        lg:gap-[20px]
        lg:px-[24px]
        lg:py-[22px]
      "
    >
      {/* Number */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-[6px]
          bg-[#7434E5]
        "
      >
        <span
          className="
            font-dmSans
            text-sm
            font-extrabold
            leading-none
            text-white
          "
        >
          {number}
        </span>
      </div>

      {/* Icon */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#E8E8F0]
        "
      >
        <Icon
          size={22}
          strokeWidth={1.6}
          className="text-black"
        />
      </div>

      {/* Content */}
      <div
        className="
          min-w-0
          w-full
          text-center

          lg:text-left
        "
      >
        {/* Title */}
        <h2
          className="
            font-dmSans
            text-[17px]
            font-bold
            leading-[1.3]
            tracking-[-0.15px]
            text-[#4812A5]

            sm:text-[18px]
          "
        >
          {title}
        </h2>

        {/* Description */}
        <div
          className="
            mt-[6px]
            font-inter
            text-[12px]
            font-normal
            leading-[1.6]
            text-[#6B6B80]

            sm:text-[13px]
          "
        >
          {description}
        </div>
      </div>
    </article>
  );
};

export default TermsRow;