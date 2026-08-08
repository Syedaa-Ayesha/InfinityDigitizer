

const B2BCTA = ({
  icon,
  title,
  description,
  buttons,
}) => {
  return (
    <section className="mx-auto max-w-[1320px] px-4 lg:px-0 pb-6">
      <div
        className="
          flex
          flex-col
          gap-4
          rounded-[24px]
          border
          border-[#E7E3ED]
          bg-white
          p-[22px]
         shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]
lg:gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-12
          lg:py-9
        "
      >
        {/* Left Side */}

        <div className="flex flex-col items-start gap-5 lg:flex-row">
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
              bg-[#EDE7F8]
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
                text-[20px]
                font-bold
                leading-[140%]
                text-[#0C0C30]
                lg:text-[40px]
                lg:leading-[110%]
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-3
                font-inter
                text-sm
                lg:leading-6
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