const HighlightsCard = ({
  items = [],
  variant = "terms",
}) => {
  const isPrivacy = variant === "privacy";

  return (
    <section
      className="
        w-full
        rounded-[12px]
        border
        border-[#E8E8F0]
        bg-white
        shadow-[0px_2px_24px_rgba(0,0,0,0.07)]
      "
    >
      <div
        className={`
          grid
          grid-cols-1
          gap-x-[20px]
          gap-y-[32px]

          px-[24px]
          py-[28px]

          sm:grid-cols-2
          sm:gap-x-[28px]
          sm:gap-y-[34px]
          sm:px-[45px]
          sm:py-[30px]

          md:grid-cols-3
          md:px-[60px]

          lg:grid-cols-5
          lg:gap-x-0
          lg:gap-y-0
          lg:px-[70px]
          lg:py-[26px]

          ${isPrivacy ? "lg:divide-x lg:divide-[#E8E8F0]" : ""}
        `}
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`
                flex
                min-w-0
                flex-col
                items-center
                text-center

                lg:px-[22px]

                ${isPrivacy ? "py-[4px]" : ""}
              `}
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#7434E5]

                  sm:h-[44px]
                  sm:w-[44px]
                "
              >
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className="text-white"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mt-[11px]
                  max-w-[190px]
                  font-dmSans
                  text-[14px]
                  font-bold
                  leading-[1.35]
                  tracking-[-0.15px]
                  text-[#17161F]

                  sm:text-[15px]
                  lg:max-w-[180px]
                  lg:text-[14px]
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-[7px]
                  max-w-[220px]
                  font-inter
                  text-[11px]
                  font-normal
                  leading-[1.6]
                  text-[#6B6B80]

                  sm:max-w-[210px]
                  sm:text-[11.5px]

                  lg:max-w-[180px]
                  lg:text-[11px]
                  lg:leading-[1.6]
                "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HighlightsCard;