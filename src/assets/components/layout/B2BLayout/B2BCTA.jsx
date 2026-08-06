

const B2BCTA = ({
  icon,
  title,
  description,
  buttons,
}) => {
  return (
    <section className="mx-auto max-w-[1320px] px-4 lg:px-0">
      <div
        className="
          flex
          flex-col
          gap-8

          rounded-[24px]
          border
          border-[#E7E3ED]
          bg-white

          px-6
          py-7

          shadow-[0px_10px_35px_rgba(116,52,229,0.08)]

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-12
          lg:py-9
        "
      >
        {/* Left Side */}

        <div className="flex items-start gap-5">
          {/* Icon */}

          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#F4EDFF]

              lg:h-16
              lg:w-16
            "
          >
            {icon}
          </div>

          {/* Text */}

          <div className="max-w-[560px]">
            <h2
              className="
                font-dmSans
                text-[28px]
                font-bold
                leading-[120%]
                text-[#181A39]

                lg:text-[40px]
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-3
                font-inter
                text-[16px]
                leading-6
                text-[#6B7280]
              "
            >
              {description}
            </p>
          </div>
        </div>

        {/* Buttons */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-4

            sm:flex-row
            lg:w-auto
          "
        >
          {buttons}
        </div>
      </div>
    </section>
  );
};

export default B2BCTA;