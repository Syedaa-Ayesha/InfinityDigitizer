
import { ArrowUpRight } from "lucide-react";

const FileFormatCard = ({
  extension = "",
  name = "",
  subtitle = "",
  description = "",
  icon = null,
  variant = "format",
  showArrow = true,
}) => {
  const isRequirement = variant === "requirement";

  return (
    <article
      className={`
        group
        relative
        flex
        w-full
        min-w-0
        max-w-full
        flex-col
        overflow-hidden
        rounded-[12px]
        border
        border-[#E5E2EA]
        bg-white
        shadow-[0_4px_16px_rgba(44,32,68,0.06)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-[2px]
        hover:border-[#D8C9F4]
        hover:shadow-[0_10px_24px_rgba(116,52,229,0.10)]

        ${
          isRequirement
            ? `
              min-h-[168px]
              px-[16px]
              py-[16px]

              sm:min-h-[174px]
              sm:px-[17px]
              sm:py-[17px]

              md:min-h-[182px]
              md:px-[18px]
              md:py-[18px]

              lg:min-h-[188px]
              lg:px-[18px]
              lg:py-[18px]
            `
            : `
              h-[172px]
              px-[14px]
              py-[14px]

              sm:h-[178px]
              sm:px-[15px]
              sm:py-[15px]

              lg:h-[184px]
              lg:px-[16px]
              lg:py-[16px]
            `
        }
      `}
    >
      {/* =====================================================
          TOP ROW
      ===================================================== */}
      <div
        className="
          flex
          min-w-0
          max-w-full
          items-start
          justify-between
          gap-[10px]
        "
      >
        {/* Icon + Name */}
        <div
          className="
            flex
            min-w-0
            max-w-full
            flex-1
            items-center
            gap-[11px]
          "
        >
          {/* ICON */}
          <div
            className={`
              flex
              shrink-0
              items-center
              justify-center
              overflow-hidden
              border
              border-[#E6DDF5]
              bg-[#F7F3FC]

              ${
                isRequirement
                  ? `
                    h-[42px]
                    w-[42px]
                    rounded-[9px]

                    sm:h-[44px]
                    sm:w-[44px]

                    md:h-[46px]
                    md:w-[46px]
                  `
                  : `
                    h-[46px]
                    w-[46px]
                    rounded-[10px]

                    sm:h-[48px]
                    sm:w-[48px]

                    lg:h-[50px]
                    lg:w-[50px]
                  `
              }
            `}
          >
            {icon ? (
              typeof icon === "string" ? (
                <img
                  src={icon}
                  alt={name || extension || "File format"}
                  loading="lazy"
                  decoding="async"
                  className="
                    block
                    h-full
                    w-full
                    max-w-full
                    object-cover
                  "
                />
              ) : (
                icon
              )
            ) : (
              <span
                className="
                  font-dmSans
                  text-[13px]
                  font-bold
                  tracking-[-0.01em]
                  text-[#7434E5]
                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                {extension}
              </span>
            )}
          </div>

          {/* NAME */}
          <div className="min-w-0 max-w-full flex-1">
            <h3
              className={`
                min-w-0
                max-w-full
                break-words
                font-dmSans
                font-bold
                leading-[1.3]
                tracking-[-0.01em]
                text-[#17161F]

                ${
                  isRequirement
                    ? `
                      text-[15px]

                      sm:text-[16px]

                      md:text-[17px]
                    `
                    : `
                      truncate
                      text-[16px]

                      sm:text-[17px]

                      lg:text-[18px]
                    `
                }
              `}
              style={{
                overflowWrap: "anywhere",
              }}
            >
              {name || extension}
            </h3>
          </div>
        </div>

        {/* ARROW */}
        {!isRequirement && showArrow && (
          <div
            className="
              flex
              h-[28px]
              w-[28px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#ECE8F2]
              bg-[#FAF8FD]
              text-[#85808F]
              transition-all
              duration-300

              group-hover:border-[#D9C8F3]
              group-hover:bg-[#F4EEFC]
              group-hover:text-[#7434E5]

              sm:h-[30px]
              sm:w-[30px]
            "
          >
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-[1px]
                group-hover:-translate-y-[1px]
              "
            />
          </div>
        )}
      </div>

      {/* =====================================================
          SUBTITLE
      ===================================================== */}
      {!isRequirement && subtitle && (
        <p
          className="
            mt-[8px]
            min-w-0
            max-w-full
            truncate
            font-inter
            text-[11px]
            font-medium
            leading-[1.45]
            text-[#7434E5]

            sm:text-[12px]

            lg:text-[13px]
          "
        >
          {subtitle}
        </p>
      )}

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}
      {description && (
        <p
          className={`
            min-w-0
            max-w-full
            break-words
            font-inter
            font-normal
            text-[#6B7280]

            ${
              isRequirement
                ? `
                  mt-[10px]
                  text-[13px]
                  leading-[1.6]

                  sm:mt-[11px]
                  sm:text-[14px]
                  sm:leading-[1.65]

                  md:text-[14px]
                  md:leading-[1.65]
                `
                : `
                  mt-[10px]
                  line-clamp-3
                  overflow-hidden
                  text-[13px]
                  leading-[1.6]

                  sm:mt-[11px]
                  sm:text-[14px]

                  lg:mt-[12px]
                  lg:text-[14px]
                `
            }
          `}
          style={{
            overflowWrap: "anywhere",
          }}
        >
          {description}
        </p>
      )}
    </article>
  );
};

export default FileFormatCard;