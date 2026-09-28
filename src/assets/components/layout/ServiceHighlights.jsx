const ServiceHighlights = ({
  Icon,
  title,
  description = "",
  variant = "default",
  classname = "",
  iconBg = "bg-[#E8DBFE]",
  iconColor = "text-[#7434E5]",
  width,
}) => {
  // Logo variant styling
  const isLogo = variant === "logo";

  return (
    <div
      className={`
        flex
        items-center
        justify-start
        gap-3
        lg:gap-[10px]
        ${width}
      `}
    >
      {/* Icon */}
      <span
        className={`
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full

          ${isLogo ? "bg-white" : iconBg}
        `}
      >
        {Icon && (
          <Icon
            className={`
              h-5
              w-5

              ${isLogo ? "text-[#7434E5]" : iconColor}
            `}
          />
        )}
      </span>

      {/* Text */}
      <span
        className={`
          flex
          min-w-0
          flex-col
          ${classname}
        `}
      >
        {/* Title */}
        <span
          className="
            whitespace-pre-line
            text-xs
            font-semibold
            leading-[16px]
            text-[#00030B]
          "
        >
          {title}
        </span>

        {/* Description */}
        {description && (
          <span
            className="
              mt-[1px]
              break-words
              text-[10px]
              font-normal
              leading-[13px]
              text-[#8A8892]
            "
          >
            {description}
          </span>
        )}
      </span>
    </div>
  );
};

export default ServiceHighlights;