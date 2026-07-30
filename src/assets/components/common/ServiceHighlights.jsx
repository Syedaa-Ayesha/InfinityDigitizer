const ServiceHighlights = ({
  Icon,
  title,
  variant = "default",
  classname = "",
  isLast = false,
  // New Props
  iconBg = "bg-[#E8DBFE]",
  iconColor = "text-[#7434E5]",
  borderColor = "border-gray-300",
  width
}) => {
  return (
    <div
      className={`
        flex
        items-center
        lg:justify-center
       w-full
        gap-[10px]
       ${width}
        
        ${
          variant === "logo" && !isLast
            ? `lg:border-r ${borderColor} pr-4`
            : ""
        }
            
      `}
    >
      <span
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          ${iconBg}
        `}
      >
        {Icon && (
          <Icon
            className={`h-5 w-5 ${iconColor}`}
          />
        )}
      </span>

      <span
        className={`
          whitespace-pre-line
          text-xs
          font-semibold
          text-[#00030B]
          ${classname}
        `}
      >
        {title}
      </span>
    </div>
  );
};

export default ServiceHighlights;