import { Quote } from "lucide-react";

const QuoteBox = ({ quote }) => {
  if (!quote) return null;

  return (
    <section
        className="
    relative
    my-14
    overflow-hidden
    rounded-[24px]
    border
    border-[#DDD2F6]
    bg-[#F7F3FF]
    p-6

    md:p-10
  "
    >
        <div
    className="
      absolute
      right-6
      top-2
      select-none
      font-serif
      text-[120px]
      leading-none
      text-[#7434E5]/10
    "
  >
    ”
  </div>
      <div className="flex gap-5 ">

        {/* Quote Icon */}

        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-sm
          "
        >
          <Quote
            size={28}
            className="text-[#7434E5]"
            strokeWidth={2.5}
          />
        </div>

        {/* Quote Text */}

        <blockquote>

          <p
            className="
              font-dmSans
              text-[20px]
              font-medium
              italic
              leading-9
              text-[#0F1729]

              md:text-[28px]
              md:leading-[48px]
            "
          >
            "{quote}"
          </p>

        </blockquote>

      </div>
    </section>
  );
};

export default QuoteBox;