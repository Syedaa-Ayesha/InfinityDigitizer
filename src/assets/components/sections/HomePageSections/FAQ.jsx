

// import { useState } from "react";
// import {
//   CircleMinus,
//   CirclePlus,
//   Headphones,
//   MessageCircleQuestionMark,
// } from "lucide-react";

// import CommonTab from "../../layout/CommonTab";
// import Accordion from "../../layout/FAQPageLayout/Accordion";
// import CTASection from "../../layout/CTASection";

// import { faqData } from "../../common/FaqData";
// import { scrollToQuote } from "../../layout/HomeLayout/ScrollTOQuote";
// import SectionHeading from "../../layout/SectionHeading";


// const FaqSection = () => {
//   const [activeTab, setActiveTab] = useState("embroidery");

//   // Only these FAQ categories will be shown in this section
//   const filteredFaqData = faqData.filter((item) =>
//     [ "support", "embroidery", "vector", "logo"].includes(item.id)
//   );

//   const activeCategory = filteredFaqData.find(
//     (item) => item.id === activeTab
//   );

//   return (
//     <section
//       className="
//         mx-auto
//         max-w-[1300px]
//         p-[22px]
//       "
//     >
//       {/* ================= SECTION HEADING ================= */}

//       <SectionHeading
//           icon={<MessageCircleQuestionMark/>}
//           badge="Ask"
//           heading="Frequently Asked Question"
//           description="Find Answer to common questions about our embroidery Digitizing, vector art, and logo design services"
//           desClass="text-[18px] font-light "
//           headingClassName=" capitalize "
//         />

//       {/* ================= TABS ================= */}

//       <div className="mt-10">
//         <CommonTab
//           tabs={filteredFaqData}
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//           classname="shadow-none border-0"
//         />
//       </div>

//       {/* ================= ACCORDION ================= */}

//       <div
//         className="
//           mx-auto
//           mb-9
//           mt-6
//           w-full
//           rounded-2xl
//           border
//           border-[#E7E3ED]
//           px-4
//           pb-4
//           pt-2
//           shadow-2xl
//           lg:max-w-[1300px]
//         "
//       >
//         <Accordion
//           data={activeCategory?.questions || []}
//           openIcon={CircleMinus}
//           closeIcon={CirclePlus}
//           width="lg:min-w-[1200px]"
//         />
//       </div>

//       {/* ================= CTA ================= */}

//       <CTASection
//         icon={
//           <Headphones
//             size={32}
//             strokeWidth={2.2}
//             className="text-[#7434E5]"
//           />
//         }
//         title="Need Expert Digitizing Assistance?"
//         description={`Our team is available 24/7 to help with embroidery,
// vector, and logo design projects.`}
//         buttonText="Get Free Quote"
//         titleClass="text-[26px]"
//         iconHeight="h-[72px]"
//         iconWidth="w-[72px]"
//         bg="bg-[linear-gradient(94.2deg,#6C29E0_0%,#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
//          onClick={scrollToQuote}
//       />
//     </section>
//   );
// };

// export default FaqSection;


import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  CircleMinus,
  CirclePlus,
  Headphones,
  MessageCircleQuestionMark,
} from "lucide-react";

import CommonTab from "../../layout/CommonTab";
import Accordion from "../../layout/FAQPageLayout/Accordion";
import CTASection from "../../layout/CTASection";

import { faqData } from "../../common/FaqData";
import { scrollToQuote } from "../../layout/HomeLayout/ScrollTOQuote";
import SectionHeading from "../../layout/SectionHeading";


const FaqSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /* ================= FAQ CATEGORIES ================= */

  const filteredFaqData = faqData.filter((item) =>
    ["support", "embroidery", "vector", "logo"].includes(item.id)
  );

  /* ================= URL CATEGORY ================= */

  const categoryFromUrl =
    searchParams.get("category") || "embroidery";

  /* ================= ACTIVE TAB ================= */

  const isValidCategory = filteredFaqData.some(
    (item) => item.id === categoryFromUrl
  );

  const [activeTab, setActiveTab] = useState(
    isValidCategory ? categoryFromUrl : "embroidery"
  );

  /* ================= SYNC URL → TAB ================= */

  useEffect(() => {
    const isValidCategory = filteredFaqData.some(
      (item) => item.id === categoryFromUrl
    );

    const newCategory = isValidCategory
      ? categoryFromUrl
      : "embroidery";

    setActiveTab(newCategory);
  }, [categoryFromUrl]);

  /* ================= TAB CHANGE ================= */

  const handleCategoryChange = (category) => {
    setActiveTab(category);

    const params = new URLSearchParams(searchParams);

    if (category === "embroidery") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    setSearchParams(params);
  };

  /* ================= ACTIVE CATEGORY ================= */

  const activeCategory = filteredFaqData.find(
    (item) => item.id === activeTab
  );

  return (
    <section
      className="
        mx-auto
        max-w-[1300px]
        p-[22px]
      "
    >

      {/* ================= SECTION HEADING ================= */}

      <SectionHeading
        icon={<MessageCircleQuestionMark />}
        badge="Ask"
        heading="Frequently Asked Question"
        description="Find Answer to common questions about our embroidery Digitizing, vector art, and logo design services"
        desClass="text-[18px] font-light"
        headingClassName="capitalize"
      />

      {/* ================= TABS ================= */}

      <div className="mt-10">
        <CommonTab
          tabs={filteredFaqData}
          activeTab={activeTab}
          setActiveTab={handleCategoryChange}
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
        onClick={scrollToQuote}
      />

    </section>
  );
};

export default FaqSection;