import SectionHeading from "../../layout/SectionHeading";
import PricingSlider from "../../layout/PricingSlider";
import PortfolioCard from "../../layout/HomeLayout/PortfolioCard";

import { BsInstagram } from "react-icons/bs";

import {
  ChevronLeft,
  ChevronRight,
  CircleUser,
  Lock,
  BanknoteX,
  CircleStar,
  SmilePlus,
} from "lucide-react";

import work1 from "../../../images/Before After-12.jpg 1.png";

const portfolio = [
  { id: 1, image: work1 },
  { id: 2, image: work1 },
  { id: 3, image: work1 },
  { id: 4, image: work1 },
  { id: 5, image: work1 },
  { id: 6, image: work1 },
  { id: 7, image: work1 },
  { id: 8, image: work1 },
];

const features = [
  {
    icon: <SmilePlus size={24} strokeWidth={1.7} />,
    title: "35,000+",
    text: "Happy Customers",
  },
  {
    icon: <CircleStar size={24} strokeWidth={1.7} />,
    title: "Since 2012",
    text: "Trusted Worldwide",
  },
  {
    icon: <BanknoteX size={24} strokeWidth={1.7} />,
    title: "No Hidden Charges",
    text: "100% Transparent Pricing",
  },
  {
    icon: <Lock size={24} strokeWidth={2.2} />,
    title: "Secure & Private",
    text: "Your Data Is Safe With Us",
  },
];

const Portfolio = () => {
  return (
    <section
      className="lg:pt-12.5"
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
      }}
    >
      <div className="max-w-330 py-[22px] lg:mx-28.25">

        {/* ================= SECTION HEADING ================= */}

        <SectionHeading
          icon={<CircleUser size={24} />}
          badge="Trusted by Thousands"
          heading="SEE THE WORK WE'RE KNOWN FOR"
          description="Every project we take on ends up here. Embroidery digitizing, high quality 
          vector art conversion & logo designing, scroll through and see how the work actually
          turns out. No stock samples, no mockups, just real orders we've completed for real 
          clients across the USA, UK, Canada, and Australia."
        />

        {/* ================= PORTFOLIO SLIDER ================= */}

        <div className="relative mt-14 max-w-[1000px] mx-auto">

          {/* LEFT ARROW */}

          <button
            type="button"
            className="
              pricing-portfolio-prev
              absolute
              -left-8
              top-1/2
              z-30
              h-12
              w-12
             
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-xl
              hidden
              lg:flex
              md:flex
            "
          >
            <ChevronLeft />
          </button>

          {/* SLIDER */}

          <PricingSlider
  data={portfolio}
  CardComponent={PortfolioCard}
  prevClass="pricing-portfolio-prev"
  nextClass="pricing-portfolio-next"
  spaceBetween={18}
  breakpoints={{
    0: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  }}
/>

          {/* RIGHT ARROW */}

          <button
            type="button"
            className="
              pricing-portfolio-next
              absolute
              -right-6
              top-1/2
              z-30
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-xl
              hidden
              lg:flex
              md:flex
            "
          >
            <ChevronRight/>
          </button>

        </div>

        {/* ================= INSTAGRAM BUTTON ================= */}

        <div className="mt-[30px] mb-2 flex justify-center">
          <a
            href="#"
            className="
              flex
              gap-[10px]
              rounded-[6px]
              bg-[#7434E5]
              px-4
              py-3
              font-inter
              text-base
              text-white
              transition
              hover:bg-[#5F2FD3]
            "
          >
            <BsInstagram size={22} />

            Follow us on Instagram
          </a>
        </div>

      </div>

      {/* ================= FEATURES BAR ================= */}

      <section className="bg-[#46546A] py-3">

        <div className="mx-auto max-w-330 px-4">

          <div className="grid grid-cols-2 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">

            {features.map((item, index) => (
              <div
                key={index}
                className={`
                  flex
                  flex-col
                  items-center
                  gap-4
                  py-2
                  lg:flex-row
                  lg:justify-center

                  ${
                    index !== features.length - 1
                      ? "border-white/15 xl:border-r"
                      : ""
                  }
                `}
              >

                {/* ICON */}

                <div
                  className="
                    flex
                    h-13.5
                    w-13.5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                  "
                >
                  <div className="text-[#7434E5]">
                    {item.icon}
                  </div>
                </div>

                {/* TEXT */}

                <div className="flex flex-col items-center lg:items-start">

                  <h3 className="font-dmSans text-[18px] font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-inter text-[14px] leading-5 text-[#D5D8DF]">
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </section>
  );
};

export default Portfolio;