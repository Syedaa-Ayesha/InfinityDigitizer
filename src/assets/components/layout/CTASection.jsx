import { ArrowRight } from "lucide-react";

const CTASection = ({
  icon,
  title,
  description,
  buttonText = "Get Free Quote",
  onClick,
  Solidbtn ,
  titleClass = "",
  sectionWidth = "",
  iconHeight = "",
  iconWidth = "",
  bg = "",
}) => {
  return (
    <section className={`px-7 lg:mx-auto w-full  ${sectionWidth}`}>
      <div
        className={`
          rounded-[24px]
          bg-gradient-to-l
          from-[#7434E5]
          to-[#A877FF]

          px-6
          py-6

          lg:px-10
          lg:py-8

          ${bg}
        `}
      >
        <div
          className="
            flex
            flex-col
            gap-7

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Left */}

          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
            "
          >
            {/* Icon */}

            <div
              className={`
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-white

                lg:h-[86px]
                lg:w-[86px]
                lg:rounded-full
                lg:bg-white

                ${iconHeight}
                ${iconWidth}
              `}
            >
              {icon}
            </div>

            {/* Content */}

            <div>
              <h2
                className={`
                  font-dmSans
                  font-bold
                  text-white

                  text-[22px]
                  leading-[130%]
                  lg:leading-[120%]

                 lg:${titleClass}
                `}
              >
                {title}
              </h2>

              <p
                className="
                  mt-3

                  max-w-[600px]

                  text-[16px]
                  leading-7

                  text-white/85
                "
              >
                {description}
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="flex gap-7">
{Solidbtn}

          <button
  onClick={onClick}
  className="
    group
    mt-2
    inline-flex
    w-fit
    items-center
    justify-center
    gap-2
whitespace-nowrap
    rounded-full
    bg-white

    h-12
    px-6

    font-dmSans
    text-[16px]
    font-bold
    text-[#7434E5]

    transition-all
    duration-300

    hover:scale-[1.02]

    lg:mt-0
    lg:h-14
    lg:px-8
    lg:self-center
  "
>
  <span>{buttonText}</span>

  <ArrowRight
    size={18}
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</button>
</div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;