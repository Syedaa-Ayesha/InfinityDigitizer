const ServiceHighlights = ({
  Icon,
  title,
  variant = "default",
}) => {
  return (
    <span
      className={`flex items-center gap-[10px] ${
        variant === "logo" ? "border-r border-gray-300 pr-4" : ""
      }`}
    >
      <span
        className={`w-10 h-10 flex items-center justify-center rounded-full ${
          variant === "logo"
            ? "bg-white"
            : "bg-[#E8DBFE]"
        }`}
      >
        {Icon && (
          <Icon
            className={`w-5 h-5 ${
              variant === "logo"
                ? "text-black"
                : "text-[#7434E5]"
            }`}
          />
        )}
      </span>

      <span className="text-xs font-semibold text-[#00030B] whitespace-pre-line">
        {title}
      </span>
    </span>
  );
};

export default ServiceHighlights;