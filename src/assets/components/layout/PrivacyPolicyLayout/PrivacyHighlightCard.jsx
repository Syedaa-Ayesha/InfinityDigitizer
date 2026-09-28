const PrivacyHighlightCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <article
      className="
        group
        w-full
        min-w-0
        max-w-full
        text-center
        px-[8px]

        sm:px-[10px]

        lg:px-[12px]
      "
    >
      {/* ICON */}
      <div className="flex justify-center">
        <div
          className="
            flex
            h-[42px]
            w-[42px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#F0E9FF]
            text-[#7434E5]

            transition-all
            duration-300

            group-hover:bg-[#7434E5]
            group-hover:text-white
            group-hover:shadow-[0_6px_18px_rgba(116,52,229,0.18)]

            sm:h-[44px]
            sm:w-[44px]

            lg:h-[46px]
            lg:w-[46px]
          "
        >
          {Icon && (
            <Icon
              size={18}
              strokeWidth={1.8}
              className="
                h-[18px]
                w-[18px]

                sm:h-[19px]
                sm:w-[19px]

                lg:h-[20px]
                lg:w-[20px]
              "
            />
          )}
        </div>
      </div>

      {/* TITLE */}
      <h3
        className="
          mt-[11px]
          min-w-0
          max-w-full
          break-words
          font-dmSans
          text-[14px]
          font-bold
          leading-[1.35]
          text-[#17161F]

          sm:text-[15px]

          lg:text-[16px]
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          mx-auto
          mt-[7px]
          w-full
          max-w-[190px]
          break-words
          font-inter
          text-[12px]
          font-normal
          leading-[1.6]
          text-[#777789]

          sm:max-w-[200px]
          sm:text-[13px]
          sm:leading-[1.65]

          lg:max-w-[215px]
          lg:text-[14px]
          lg:leading-[1.7]
        "
      >
        {description}
      </p>
    </article>
  );
};

export default PrivacyHighlightCard;