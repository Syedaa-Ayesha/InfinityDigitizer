import { ArrowRight, CirclePlus, CircleMinus } from "lucide-react";
import { Link } from "react-router-dom";
import Accordion from "../../layout/FAQPageLayout/Accordion";

const HelpFAQSection = ({ items = [] }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const leftColumn = items.filter((_, index) => index % 2 === 0);
  const rightColumn = items.filter((_, index) => index % 2 === 1);

  const accordionProps = {
    openIcon: CircleMinus,
    closeIcon: CirclePlus,
    defaultOpen: false,
    width: "max-w-none",
    

    buttonClassName: `
      !w-full
      !min-w-0
      !gap-[12px]
      !px-[16px]
      !py-[16px]
      sm:!px-[20px]
      sm:!py-[18px]
      lg:!px-[22px]
      lg:!py-[20px]
    `,

    titleClassName: `
      !min-w-0
      !pr-[8px]
      !font-dmSans
      !text-[15px]
      !font-semibold
      !leading-[1.45]
      !tracking-[-0.1px]
      !text-[#17161F]

      sm:!text-[16px]
      sm:!leading-[1.5]

      lg:!text-[17px]
      lg:!leading-[1.5]
    `,

    panelClassName: `
      !rounded-none
      !bg-transparent
      !px-[16px]
      !pt-0
      !pb-[16px]
      !font-inter
      !text-[14px]
      !font-normal
      !leading-[1.75]
      !text-[#6B6B80]

      sm:!px-[20px]
      sm:!pb-[18px]
      sm:!text-[15px]
      sm:!leading-[1.8]

      lg:!px-[22px]
      lg:!pb-[20px]
      lg:!text-[16px]
      lg:!leading-[1.8]
    `,
  };

  return (
    <section
      className="
        w-full
        max-w-full
        min-w-0
        overflow-x-hidden
      "
    >
      {/* ================= HEADER ================= */}
      <div
        className="
          mb-[16px]
          flex
          min-w-0
          items-center
          justify-between
          gap-[12px]

          sm:mb-[18px]

          lg:mb-[20px]
        "
      >
        <h2
          className="
            min-w-0
            font-dmSans
            text-[20px]
            font-bold
            leading-[1.3]
            tracking-[-0.25px]
            text-[#17161F]

            sm:text-[22px]

            lg:text-[24px]
          "
        >
          How Can We Help You
        </h2>

        <Link
          to="/faqs"
          className="
            inline-flex
            shrink-0
            items-center
            gap-[6px]
            whitespace-nowrap

            font-inter
            text-[12px]
            font-medium
            leading-none
            text-[#7434E5]

            transition-colors
            duration-200

            hover:text-[#5F25C9]

            sm:text-[14px]
          "
        >
          <span>View All FAQs</span>

          <ArrowRight
            size={14}
            strokeWidth={1.8}
          />
        </Link>
      </div>

      {/* ================= FAQ BOX ================= */}
      <div
        className="
          w-full
          min-w-0
          overflow-hidden

          rounded-[16px]
          border
          border-[#E9E5F0]
          bg-white

          shadow-[0_4px_20px_rgba(55,36,88,0.045)]

          sm:rounded-[18px]

          lg:rounded-[20px]
        "
      >
        <div
          className="
            grid
            w-full
            min-w-0
            grid-cols-1

            lg:grid-cols-2
          "
        >
          {/* ================= LEFT COLUMN ================= */}
          <div
            className="
              min-w-0
              w-full

              lg:border-r
              lg:border-[#EEEAF3]
            "
          >
            <Accordion
              data={leftColumn}
              {...accordionProps}
            />
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div
            className="
              min-w-0
              w-full

              border-t
              border-[#EEEAF3]

              lg:border-t-0
            "
          >
            <Accordion
              data={rightColumn}
              {...accordionProps}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpFAQSection;