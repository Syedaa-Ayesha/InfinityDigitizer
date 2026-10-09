import { CalendarDays } from "lucide-react";
const PolicyHero = ({
  title = "Terms and Conditions",
  description = "",
  date = "May 15, 2026",
  subtitle = "",
  rightImage = null,
  containerClassName = "",
  gridClassName = "",
  contentClassName = "",
  imageClassName = "",
}) => {
  return (
    <section
      className={`
        box-border
        w-full
        max-w-full
        min-w-0
        overflow-x-clip
        mx-auto
        ${containerClassName}
      `}
    >
      {/* HERO GRID */}
      <div
        className={`
          box-border
          grid
          w-full
          max-w-full
          min-w-0
          grid-cols-1
          gap-0
          overflow-hidden
          rounded-[12px]
          bg-white

          md:grid-cols-[minmax(0,1fr)_280px]
          lg:grid-cols-[minmax(0,1fr)_494px]

          ${gridClassName}
        `}
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div
          className={`
            box-border
            min-w-0
            w-full
            max-w-full
            flex
            flex-col
            justify-center

            px-[24px]
            py-[28px]

            sm:px-[24px]
            sm:py-[36px]

            md:px-[24px]
            md:py-[40px]

            lg:px-[24px]
            lg:py-[48px]

            lg:min-h-[378px]

            ${contentClassName}
          `}
        >
          {/* SUBTITLE */}
          {subtitle && (
            <span
              className="
                mb-[8px]
                block
                max-w-full
                break-words
                font-inter
                text-[16px]
                font-semibold
                leading-[1.4]
                text-[#7434E5]

                sm:text-[17px]

                lg:text-[18px]
              "
            >
              {subtitle}
            </span>
          )}

          {/* TITLE */}
          <h1
            className="
              min-w-0
              max-w-full
              break-words
              font-dmSans
              text-[26px]
              font-bold
              leading-[1.18]
              tracking-[-0.02em]
              text-[#17161F]

              sm:text-[32px]

              lg:text-[42px]
            "
          >
            {title}
          </h1>

          {/* PURPLE LINE */}
          <div
            className="
              mt-[12px]
              h-[2px]
              w-[42px]
              shrink-0
              rounded-full
              bg-[#7434E5]

              lg:mt-[14px]
            "
          />

          {/* DESCRIPTION */}
          {description && (
            <p
              className="
                mt-[16px]
                w-full
                max-w-[620px]
                min-w-0
                break-words
                font-inter
                text-[14px]
                font-normal
                leading-[1.75]
                text-[#666778]

                sm:text-[16px]
                sm:leading-[1.8]

                lg:text-[16px]
                lg:leading-[1.8]
              "
            >
              {description}
            </p>
          )}

          {/* DATE */}
          {date && (
            <div
              className="
                mt-[18px]
                inline-flex
                w-fit
                max-w-full
                min-w-0
                items-center
                gap-[8px]
                rounded-[10px]
                border
                border-[#E8E8F0]
                bg-[#F7F6FA]
                px-[12px]
                py-[8px]

                sm:gap-[9px]
                sm:rounded-[11px]
                sm:px-[14px]
                sm:py-[9px]

                lg:gap-[10px]
                lg:rounded-[12px]
                lg:px-[16px]
                lg:py-[10px]
              "
            >
              <CalendarDays
                size={18}
                strokeWidth={1.8}
                className="
                  h-[18px]
                  w-[18px]
                  shrink-0
                  text-[#7434E5]

                  sm:h-[19px]
                  sm:w-[19px]

                  lg:h-[20px]
                  lg:w-[20px]
                "
              />

              <span
                className="
                  min-w-0
                  whitespace-nowrap
                  font-inter
                  text-[12px]
                  font-medium
                  leading-none
                  text-[#727385]

                  sm:text-[13px]

                  lg:text-[14px]
                "
              >
                Last Updated:
              </span>

              <span
                className="
                  min-w-0
                  max-w-full
                  truncate
                  font-inter
                  text-[12px]
                  font-semibold
                  leading-none
                  text-[#7434E5]

                  sm:text-[13px]

                  lg:text-[14px]
                "
              >
                {date}
              </span>
            </div>
          )}
        </div>

        {/* =====================================================
            RIGHT IMAGE
        ===================================================== */}
        <div
          className={`
            relative
            box-border
            w-full
            max-w-full
            min-w-0
            self-stretch
            overflow-hidden
            bg-[#FDF2F2]
rounded-[12px]
            h-[260px]

            sm:h-[300px]

            md:h-full

            lg:min-h-[378px]

            !px-0
            !pr-0
            !pl-0

            ${imageClassName}
          `}
        >
          {rightImage && (
            <img
              src={rightImage}
              alt={title || "Policy"}
              loading="lazy"
              decoding="async"
              className="
                absolute
                inset-0
                block
                h-full
                w-full
                max-w-full
                object-cover
                object-center
              "
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PolicyHero;