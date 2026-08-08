import { CircleCheck, CircleX,  } from "lucide-react";

const ComparisonRow = ({
  leftText,
  rightText,
  
}) => {
  return (
    <div
      className={`
        grid
        grid-cols-2
      `}
    >
      {/* Left Side */}

      <div
        className="
          flex
          items-center
          gap-[10px]
          px-5
          py-[14px]
          max-lg:px-[18px]
          max-lg:py-[10px]
        "
      >
        <CircleX
          size={16}
          strokeWidth={2.2}
          className="
            shrink-0
            text-[#ACB0B9]
          "
        />

        <p
          className="
            font-inter
            text-sm
            leading-5
            text-[#424957]
          "
        >
          {leftText}
        </p>
      </div>

      {/* Right Side */}

      <div
        className="
          flex
          items-center
          gap-[10px]
          px-5
          py-[14px]
          max-lg:px-[18px]
          max-lg:py-[10px]
        "
      >
        <CircleCheck
          size={16}
          strokeWidth={2.2}
          className="
            shrink-0
            text-[#7434E5]
          "
        />

        <p
          className="
            font-inter
            text-sm
            leading-5
            text-[#424957]
            font-medium
          "
        >
          {rightText}
        </p>
      </div>
    </div>
  );
};

export default ComparisonRow;