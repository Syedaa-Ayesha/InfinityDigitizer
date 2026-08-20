import { useState } from "react";
import CommonTabs from "../../layout/CommonTab";
// import {embroideryPricing, vectorPricing, logoPricing} from "../../common/PricingData";
import { embroideryServices, vectorTracingServices, logoDesignServices} from '../../common/PricingPageData'
import SectionHeading from "../../layout/SectionHeading";
import { Tag} from "lucide-react";
import PricingCard from "../../layout/PricingCard";
import PricingSlider from '../../layout/PricingSlider'
const pricingTabs = [
  {
    id: 1,
    title: "Embroidery Digitizing",
    value: "embroidery",
    data: embroideryServices,
  },
  {
    id: 2,
    title: "Vector Tracing",
    value: "vector",
    data: vectorTracingServices,
  },
  {
    id: 3,
    title: "Logo Designing",
    value: "logo",
     data: logoDesignServices,
  },
];
const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("embroidery");

  const activePricing = pricingTabs.find(
    (tab) => tab.value === activeTab
  );

  const handleTabChange = (tabId) => {
    const selectedTab = pricingTabs.find(
      (tab) => tab.id === tabId
    );

    if (selectedTab) {
      setActiveTab(selectedTab.value);
    }
  };
  
  return (
    
    <section
      className="lg:py-12.5 py-[22px]"
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
      }}
    >
      <SectionHeading
        icon={<Tag size={18} />}
        badge="All Prices shown are start pricing"
        heading="OUR COMPETITIVE PRICES"
        description="Affordable Embroidery, Logo and Vector Art Services. Grab Embroidery, Logo and Vector Designs Now"
        headingClassName ="text-[12px]"
      />
      <div className="mt-5 lg:my-10 ">
      <CommonTabs
        tabs={pricingTabs}
        activeTab={activePricing?.id}
        setActiveTab={handleTabChange}
      />
      </div>
{/* pricing sectionn */}
      <div className="relative flex justify-center items-center h-[450px] w-full max-w-[1050px] mx-auto overflow-x-hidden px-12 lg:px-0">

  <PricingSlider
   data={activePricing?.data || []}
    CardComponent={PricingCard}
    cardProp="item"
    prevClass="pricing-prev"
    nextClass="pricing-next"
    slidesPerView={1}
    spaceBetween={18}
    centeredSlides={true}
    sliderClassName="pricing-slider"
    breakpoints={{
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }}
  />




</div>

    </section>
  );
};

export default PricingSection;



