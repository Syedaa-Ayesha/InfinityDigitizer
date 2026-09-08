const StatsItem = ({
  icon: Icon,
  value,
  label,
  showDivider,
}) => {
  return (
    <div
      className={`
        relative
        flex
        min-w-0
        flex-col
        items-center
        justify-start
        px-2
        text-center
        ${
          showDivider
            ? "after:absolute after:right-0 after:top-1/2 after:h-[78px] after:w-px after:-translate-y-1/2 after:bg-white/20"
            : ""
        }
      `}
    >
      {/* Icon */}
      <div className="flex h-[28px] items-center justify-center">
        {Icon && (
          <Icon
            size={24}
            strokeWidth={1.4}
            className="text-white"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Value */}
      <span
        className="
          mt-2
          font-dmSans
          text-[20px]
          font-extrabold
          leading-[24px]
          tracking-[-0.3px]
          text-white
          sm:text-[22px]
          lg:text-[28px]
        "
      >
        {value}
      </span>

      {/* Label */}
      <span
        className="
          mt-1
          max-w-[180px]
          font-inter
          text-[11px]
          leading-[16px]
          text-white/85
          sm:text-xs
          lg:text-sm
          lg:leading-[20px]
        "
      >
        {label}
      </span>
    </div>
  );
};

export default StatsItem;


