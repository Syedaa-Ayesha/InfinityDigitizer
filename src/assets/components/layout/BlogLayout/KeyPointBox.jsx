import { Info } from "lucide-react";

const KeyPointBox = ({ text }) => {
  return (
    <section
      className="
        my-10
        rounded-[18px]
        border
        border-[#DDD2F6]
        bg-[#F7F3FF]
        px-5
        py-5
        md:px-7
        md:py-6
      "
    >
      <div className="flex items-start gap-4">
        {/* Icon */}

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#ECE3FF]
          "
        >
          <Info
            size={18}
            className="text-[#7434E5]"
          />
        </div>

        {/* Content */}

        <div>

          <h4
            className="
              font-dmSans
              text-[18px]
              font-bold
              text-[#7434E5]
            "
          >
            Key Point
          </h4>

          <p
            className="
              mt-2
              text-[15px]
              leading-7
              text-[#5A6475]
              md:text-[17px]
              md:leading-8
            "
          >
            {text}
          </p>

        </div>
      </div>
    </section>
  );
};

export default KeyPointBox;