import { useState } from "react";
import PricingTabs from "../layout/PricingTab";
import {embroideryPricing, vectorPricing, logoPricing} from "../common/PricingData";
import SectionHeading from "../common/SectionHeading";
import { Tag, ChevronLeft, ChevronRight } from "lucide-react";
import PricingCard from "../layout/PricingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("embroidery");
  const pricingData = {
    embroidery: embroideryPricing,
    vector: vectorPricing,
    logo: logoPricing,
  };
  const pricingTabs = [
  {
    id: 1,
    title: "Embroidery Digitizing",
    value: "embroidery",
  },
  {
    id: 2,
    title: "Vector Tracing",
    value: "vector",
  },
  {
    id: 3,
    title: "Logo Designing",
    value: "logo",
  },
];
  return (
    
    <section
      className="py-12.5"
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
      }}
    >
      <SectionHeading
        icon={<Tag size={24} />}
        badge="All Prices shown are start pricing"
        heading="Our Competitive Prices"
        description="Affordable Embroidery, Logo and Vector Art Services. Grab Embroidery, Logo and Vector Designs Now"
      />
      <PricingTabs
  tabs={pricingTabs}
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>
      <div className="flex justify-center gap-7 flex-wrap mt-10 w-fit mx-auto">
        <div className="relative mt-14 w-7xl">
          <button className="pricing-prev absolute -left-17 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
            <ChevronLeft />
          </button>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".pricing-prev",
              nextEl: ".pricing-next",
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            speed={700}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {pricingData[activeTab].map((item) => (
              <SwiperSlide key={item.id}>
                <PricingCard
                  title={item.title}
                  price={item.price}
                  logoType={item.logoType}
                  features={item.features}
                  active={item.active}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="pricing-next absolute -right-7.5 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
