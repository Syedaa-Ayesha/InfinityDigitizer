import { useState } from "react";
import { CircleMinus, CirclePlus, Headphones, } from "lucide-react";
import CommonTab from "../layout/CommonTab";
import Accordion from "../layout/Accordion";
import CTASection from "../layout/CTASection";

import { faqData } from "../common/FaqData";

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("general");

  const activeCategory = faqData.find(
    (item) => item.id === activeTab
  );

  return (
    <>

      {/* Tabs */}

      <div className="mt-10 ">
        
        <CommonTab
          tabs={faqData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          classname="shadow-none border-0"
        />
      </div>

      {/* Accordion */}

      <div className="mt-6 px-4 pt-2 pb-4 w-full mx-auto rounded-2xl mb-9 shadow-2xl border border-[#E7E3ED] lg:max-w-[1300px]">
        <Accordion
          data={activeCategory?.questions || []} openIcon={CircleMinus}
  closeIcon={CirclePlus}  
width="lg:min-w-[1200px]"
        />
      </div>

      {/* CTA */}

      <CTASection
        icon={
          <Headphones
            size={32}
            strokeWidth={2.2}
            className="text-[#7434E5]"
          />
        }
        title="Need Expert Digitizing Assistance?"
        description="Our team is available 24/7 to help with embroidery,
vector, and logo design projects."
        buttonText="Get Free Quote"
        titleClass="text-[26px]"
        
        iconHeight="h-[72px]"
        iconWidth="w-[72px]"
        bg="bg-[linear-gradient(94.2deg,#6C29E0_0%,#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
      />
   </>
  );
};

export default FaqSection;