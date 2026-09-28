
import { highlightItems } from "../../common/TermsData";
import TermsHighlightItem from "./TermsHighlightItems";

const TermsHighlights = () => {
  return (
    <section
      className="
      mb-13
        w-full
        rounded-[20px]
       border
    border-[#E8E8F0]
    bg-white
    shadow-[0px_2px_24px_rgba(0,0,0,0.07)]
        px-[40px]
        py-[32px]

        sm:px-[30px]

        lg:px-[28px]
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-x-[20px]
          gap-y-[28px]

          sm:grid-cols-3
          sm:gap-x-[28px]

          lg:grid-cols-5
          lg:gap-x-0
          lg:gap-y-0
        "
      >
        {highlightItems.map((item) => (
          <TermsHighlightItem
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default TermsHighlights;