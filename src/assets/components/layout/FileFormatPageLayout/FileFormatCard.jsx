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
        group relative flex h-[172px] w-full min-w-0 max-w-full
        flex-col overflow-hidden rounded-[12px]
        border border-[#E5E2EA]
        bg-white
        px-[14px] py-[14px]
        shadow-[0_4px_16px_rgba(44,32,68,0.06)]
        transition-all duration-300 ease-out
        hover:-translate-y-[3px]
        hover:border-[#D8C9F4]
        hover:shadow-[0_12px_28px_rgba(116,52,229,0.12)]

        sm:h-[178px]
        sm:px-[15px]
        sm:py-[15px]

        lg:h-[184px]
        lg:px-[16px]
        lg:py-4
      "
    >
      {/* =========================================
          TOP ROW
      ========================================= */}
      <div className="flex min-w-0 items-start justify-between gap-[10px]">
        {/* Icon + Name */}
        <div className="flex min-w-0 flex-1 items-center gap-[10px]">
          {/* Icon */}
          <div
            className="
              flex h-[46px] w-[46px] shrink-0
              items-center justify-center
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
                  font-dmSans
                  text-[13px] font-bold
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

          {/* Name */}
          <div className="min-w-0 flex-1">
            <h3
              className="
                min-w-0 max-w-full
                truncate
                font-dmSans
                text-[16px] font-bold
                leading-[1.25]
                tracking-[-0.01em]
                text-[#17161F]

                sm:text-[17px]
                lg:text-[18px]
              "
            >
              {name || extension}
            </h3>
          </div>
        </div>

        
      </div>

      {/* =========================================
          SUBTITLE
      ========================================= */}
      {subtitle && (
        <p
          className="
            mt-[8px]
            min-w-0 max-w-full
            truncate
            font-inter
            text-[11px] font-medium
            leading-[1.45]
            text-[#7434E5]

            sm:text-[12px]
            lg:text-[13px]
          "
        >
          {subtitle}
        </p>
      )}

      {/* =========================================
          DESCRIPTION
      ========================================= */}
      {description && (
        <p
          className="
            mt-[10px]
            min-w-0 max-w-full
            line-clamp-3
            overflow-hidden
            font-inter
            text-[13px] font-normal
            leading-[1.6]
            text-[#707080]

            sm:mt-[11px]
            sm:text-[14px]

            lg:mt-[12px]
            lg:text-[14px]
          "
        >
          {description}
        </p>
      )}

    </article>
  );
};

export default FileFormatCard;