import { ArrowUpRight } from "lucide-react";

const FileFormatCard = ({
  extension = "",
  name = "",
  subtitle = "",
  description = "",
  icon = null,
}) => {
  return (
    <article
      className="
        group relative flex w-full min-w-0 max-w-full flex-col
        overflow-hidden rounded-[12px]
        border border-[#E5E2EA]
        bg-white
        px-[14px] py-[14px]
        shadow-[0_4px_16px_rgba(44,32,68,0.06)]
        transition-all duration-300 ease-out
        hover:-translate-y-[3px]
        hover:border-[#D8C9F4]
        hover:shadow-[0_12px_28px_rgba(116,52,229,0.12)]
        sm:min-h-[166px]
        sm:px-[15px] sm:py-[15px]
        lg:min-h-[176px]
        lg:px-[16px] lg:py-[16px]
      "
    >
      {/* Top Row */}
      <div className="flex min-w-0 items-start justify-between gap-[10px]">
        {/* Icon / Dummy Image */}
        <div
          className="
            flex h-[46px] w-[46px] shrink-0 items-center justify-center
            overflow-hidden rounded-[10px]
            border border-[#E6DDF5]
            bg-[#F7F3FC]
            sm:h-[48px] sm:w-[48px]
            lg:h-[50px] lg:w-[50px]
          "
        >
          {icon ? (
            <img
              src={icon}
              alt={name || extension || "File format"}
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover"
            />
          ) : (
            <span
              className="
                font-dmSans text-[13px] font-bold
                tracking-[-0.01em] text-[#7434E5]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              {extension}
            </span>
          )}
        </div>

        {/* Arrow */}
        <div
          className="
            flex h-[28px] w-[28px] shrink-0 items-center justify-center
            rounded-full border border-[#ECE8F2]
            bg-[#FAF8FD]
            text-[#85808F]
            transition-all duration-300
            group-hover:border-[#D9C8F3]
            group-hover:bg-[#F4EEFC]
            group-hover:text-[#7434E5]
            sm:h-[30px] sm:w-[30px]
          "
        >
          <ArrowUpRight
            size={14}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-[14px] min-w-0">
        <h3
          className="
            min-w-0 max-w-full break-words
            font-dmSans text-[16px] font-bold
            leading-[1.25] tracking-[-0.01em]
            text-[#17161F]
            sm:text-[17px]
            lg:text-[18px]
          "
        >
          {name || extension}
        </h3>

        {subtitle && (
          <p
            className="
              mt-[4px]
              min-w-0 max-w-full break-words
              font-inter text-[12px] font-medium
              leading-[1.45]
              text-[#7434E5]
              sm:text-[13px]
            "
          >
            {subtitle}
          </p>
        )}

        {description && (
          <p
            className="
              mt-[7px]
              min-w-0 max-w-full break-words
              font-inter text-[13px] font-normal
              leading-[1.6]
              text-[#707080]
              sm:text-[14px]
            "
          >
            {description}
          </p>
        )}
      </div>

      {/* Bottom Accent */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-0
          h-[3px] w-0
          rounded-r-full
          bg-[#7434E5]
          transition-all duration-300
          group-hover:w-[44px]
        "
      />
    </article>
  );
};

export default FileFormatCard;