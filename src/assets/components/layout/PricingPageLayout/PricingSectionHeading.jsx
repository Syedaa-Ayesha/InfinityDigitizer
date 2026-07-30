import { ArrowLeft, ArrowRight } from "lucide-react";

const PricingSectionHeading = ({ title }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        w-full
        mb-6
        gap-3
        lg:gap-5
        
      "
    >
      {/* Left */}

      <div
        className="
          hidden
          sm:flex
          flex-1
          items-center
        "
      >
        <div className="h-[2px] w-full bg-[#7434E5]" />

        <ArrowRight
          size={20}
          strokeWidth={2}
          className="
            ml-2
            shrink-0
            text-[#7434E5]
          "
        />
      </div>

      {/* Title */}

      <h2
        className=" text-center font-bold leading-[120%] text-[#0F1729] text-[36px]
sm:text-[34px]
lg:text-[56px]"
      >
        {title}
      </h2>

      {/* Right */}

      <div
        className="
          hidden
          sm:flex
          flex-1
          items-center
        "
      >
        <ArrowLeft
          size={20}
          strokeWidth={2}
          className="
            mr-2
            shrink-0
            text-[#7434E5]
          "
        />

        <div className="h-[2px] w-full bg-[#7434E5]" />
      </div>
    </div>
  );
};

export default PricingSectionHeading;