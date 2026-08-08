const Process = ({
  icon: Icon,
  title,
  description,
  isLast,
}) => {
  return (
    <div className="relative flex flex-col items-center flex-1 text-center gap-3">
      
      {/* Top (Icon + Line) */}
      <div className="relative flex items-center w-full justify-center">

        {/* Right Line */}
        {!isLast && (
          <div
            className="
            hidden
              absolute
              left-[64%]
              top-1/2
              h-[2px]
              w-[190px]
              -translate-y-1/2
             bg-[#7434E5]
             lg:block
             
             
            "
          />
        )}

        {/* Icon Box */}
        <div
          className="
            relative
            z-10
            flex
            h-[54px]
            w-[54px]
            items-center
            justify-center
            rounded-[12px]
                  bg-[linear-gradient(95.33deg,#7F3DF0_0%,#4E2A8C_100%)]
  shadow-[0px_6px_18px_rgba(91,61,240,0.35)]
          "
        >
          <Icon
            size={24}
            strokeWidth={2}
            className="text-white"
          />
        </div>
      </div>

      {/* Step Title */}
      <h3
        className="
        w-max
          font-dmSans
          text-base
          font-bold
          text-[#0C0C30]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          max-w-[230px]
          font-inter
          text-sm
          leading-7
          text-[#6B7280]
        "
      >
        {description}
      </p>
    </div>
  );
};

export default Process;