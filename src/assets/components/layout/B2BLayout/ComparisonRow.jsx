import { CircleCheck } from "lucide-react";

const ComparisonRow = ({
  leftText,
  rightText,
  isLast,
}) => {
  return (
    <div
      className={`
        grid
        grid-cols-2

        ${
          !isLast
            ? "border-b border-[#E7E3ED]"
            : ""
        }
      `}
    >
      {/* Left Side */}

      <div
        className="
          flex
          items-center
          gap-3

          px-5
          py-[14px]

          border-r
          border-[#E7E3ED]
        "
      >
        <CircleCheck
          size={14}
          strokeWidth={2.2}
          className="
            shrink-0
            text-[#9CA3AF]
          "
        />

        <p
          className="
            font-inter
            text-[13px]
            leading-5
            text-[#6B7280]
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
          gap-3

          px-5
          py-[14px]
        "
      >
        <CircleCheck
          size={14}
          strokeWidth={2.2}
          className="
            shrink-0
            text-[#7434E5]
          "
        />

        <p
          className="
            font-inter
            text-[13px]
            leading-5
            text-[#182032]
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