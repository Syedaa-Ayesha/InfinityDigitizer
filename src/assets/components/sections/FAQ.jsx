import { LifeBuoy } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import PricingTabs from "../layout/PricingTab";
import Accordion from "../layout/Accordion";
import CTASection from "../layout/CTASection";
import { BellCheck } from "lucide-react";

import { useState } from "react";
const faqTabs = [
  {
    id: 1,
    title: "Policies & Support",
    value: "policy",
  },
  {
    id: 2,
    title: "Embroidery Digitizing",
    value: "embroidery",
  },
  {
    id: 3,
    title: "Vector Tracing",
    value: "vector",
  },
  {
    id: 4,
    title: "Logo Designing",
    value: "logo",
  },
];

const FaqSection = () => {

  const [activeTab, setActiveTab] = useState("policy");

  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
      }}
    >

      <SectionHeading
        icon={<LifeBuoy size={20} />}
        badge="Need Help?"
        heading="Frequently Asked Questions"
        description={`Got questions? We've answered the ones our customers 
             ask most often`}
             
      />

      <div className="mt-10 flex justify-center">
     <PricingTabs
  tabs={faqTabs}
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>
      </div>

      <Accordion />
<CTASection
  icon={
    <BellCheck 
      size={38}
      strokeWidth={2.2}
      className="text-[#7434E5]"
    />
  }
  title="Need Expert Design Assistance?"
  description="Our team is available 24/7 to help with embroidery,
  vector, and logo design projects."
  buttonText="Get Free Quote"
  titleClass="text-[28px]"
sectionWidth = "w-[1032px]"
iconHeight= "h-[96px]"
iconWidth ="w-[96px]"
/>
    </section>
  );
};

export default FaqSection;

