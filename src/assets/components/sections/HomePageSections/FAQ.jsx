

import { useState } from "react";
import {
  CircleMinus,
  CirclePlus,
  Headphones,
} from "lucide-react";

import CommonTab from "../../layout/CommonTab";
import Accordion from "../../layout/Accordion";
import CTASection from "../../layout/CTASection";

import { faqData } from "../../common/FaqData";
// import SectionHeading from "../../layout/SectionHeading";

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("embroidery");

  // Only these FAQ categories will be shown in this section
  const filteredFaqData = faqData.filter((item) =>
    [ "support", "embroidery", "vector", "logo"].includes(item.id)
  );

  const activeCategory = filteredFaqData.find(
    (item) => item.id === activeTab
  );

  return (
    <section
      className="
        mx-auto
        max-w-[1300px]
        p-[22px]
        lg:py-[54px]
      "
    >
      {/* ================= SECTION HEADING ================= */}

      {/* <SectionHeading
        icon={<ShieldCheck size={24} />}
        badge="OUR COMMITMENT"
        heading="Why Choose Infinity Digitizing?"
        description="Infinity Digitizing is your one stop shop for all your embroidery digitizing needs. Infinity Digitizing is your trusted partner for premium embroidery digitizing, logo designing and vector art services across the USA, UK, Canada, and Australia. We use advanced, industry leading software programs and we have a skilled team to deliver higher quality, affordable design services for every project."
      /> */}

      {/* ================= TABS ================= */}

      <div>
        <CommonTab
          tabs={filteredFaqData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          classname="shadow-none border-0"
        />
      </div>

      {/* ================= ACCORDION ================= */}

      <div
        className="
          mx-auto
          mb-9
          mt-6
          w-full
          rounded-2xl
          border
          border-[#E7E3ED]
          px-4
          pb-4
          pt-2
          shadow-2xl
          lg:max-w-[1300px]
        "
      >
        <Accordion
          data={activeCategory?.questions || []}
          openIcon={CircleMinus}
          closeIcon={CirclePlus}
          width="lg:min-w-[1200px]"
        />
      </div>

      {/* ================= CTA ================= */}

      <CTASection
        icon={
          <Headphones
            size={32}
            strokeWidth={2.2}
            className="text-[#7434E5]"
          />
        }
        title="Need Expert Digitizing Assistance?"
        description={`Our team is available 24/7 to help with embroidery,
vector, and logo design projects.`}
        buttonText="Get Free Quote"
        titleClass="text-[26px]"
        iconHeight="h-[72px]"
        iconWidth="w-[72px]"
        bg="bg-[linear-gradient(94.2deg,#6C29E0_0%,#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
      />
    </section>
  );
};

export default FaqSection;