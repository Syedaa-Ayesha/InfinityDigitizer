
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight, CircleDollarSign } from "lucide-react";

import SectionHeading from "../common/SectionHeading";
import PortfolioCard from "../layout/PortfolioCard";
import PricingTabs from "../layout/PricingTab";
import {
  embroideryDesigns,
  vectorDesigns,
} from "../common/PortfolioData";
const portfolioTabs = [
  {
    id:1,
    title:"Embroidery Digitizing",
    value:"embroidery"
  },
  {
    id:2,
    title:"Vector Tracing",
    value:"vector"
  }
];
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("embroidery");

  const portfolio =
    activeTab === "embroidery"
      ? embroideryDesigns
      : vectorDesigns;

  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #fff",
      }}
    >
      <div className="mx-auto max-w-325 border-0">

        <SectionHeading
          icon={<CircleDollarSign size={24} />}
          badge="Trusted by Thousands"
          heading="SEE THE WORK WE'RE KNOWN FOR"
          description="Every project we take on ends up here. Embroidery digitizing, high quality vector art conversion & logo designing."
        />

        {/* Tabs + Navigation */}

        <div className="mt-14 flex items-center justify-between">

          {/* <div className="flex gap-5">

            <button
              onClick={() => setActiveTab("embroidery")}
              className={`rounded-full px-8 py-4 font-semibold duration-300
              ${activeTab === "embroidery"
                  ? "bg-linear-to-r from-[#7434E5] to-[#4E2A8C] text-white shadow-xl"
                  : "bg-white border border-[#ECECEC]"
                }`}
            >
              Embroidery Digitizing
            </button>

            <button
              onClick={() => setActiveTab("vector")}
              className={`rounded-full px-8 py-4 font-semibold duration-300
              ${activeTab === "vector"
                  ? "bg-linear-to-r from-[#7434E5] to-[#4E2A8C] text-white shadow-xl"
                  : "bg-white border border-[#ECECEC]"
                }`}
            >
              Vector Tracing
            </button>

          </div> */}
<PricingTabs
    tabs={portfolioTabs}
    activeTab={activeTab}
    setActiveTab={setActiveTab}
/>
          <div className="flex gap-4">

            <button className="portfolio-prev flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-lg transition hover:bg-[#7434E5] hover:text-white">

              <ChevronLeft />

            </button>

            <button className="portfolio-next flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-lg transition hover:bg-[#7434E5] hover:text-white">

              <ChevronRight />

            </button>

          </div>

        </div>

        {/* Swiper */}

        <div className="mt-12">

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".portfolio-prev",
              nextEl: ".portfolio-next",
            }}
            loop={true}
            spaceBetween={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
          >
            {portfolio.map((item) => (
              <SwiperSlide key={item.id}>
                <PortfolioCard
                  before={item.before}
                  after={item.after}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;