import {
  Image,
  Upload,
} from "lucide-react";

import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb";
import SectionHeading from "../assets/components/layout/SectionHeading";
import ServiceHighlights from "../assets/components/layout/ServiceHighlights";

import GeneralRequirementsSection from "../assets/components/sections/ArtRequiredSection/ArtRequiredSection";
import ArtRequirementSections from "../assets/components/sections/ArtRequiredSection/ArtRequirements";

import { artRequiredData } from "../assets/components/common/ArtRequiredData";
import CTASection from "../assets/components/layout/CTASection";
import { useNavigate } from "react-router-dom";

const ArtRequiredPage = () => {
   const navigate = useNavigate();
  return (
    <main
      className="
        min-h-screen
        w-full
        max-w-[100vw]
        min-w-0
        overflow-x-hidden
        bg-[#FBF9FE]
      "
    >
      {/* =====================================================
          BREADCRUMB
      ===================================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1364px]
          min-w-0
          px-[14px]

          sm:px-[22px]

          md:px-[24px]

          lg:px-[40px]

          2xl:px-[48px]
        "
      >
        <Breadcrumb />
      </div>

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1364px]
          min-w-0
          overflow-x-hidden

          px-[14px]
          pt-[18px]
          pb-[48px]

          sm:px-[22px]
          sm:pt-[24px]
          sm:pb-[56px]

          md:px-[24px]
          md:pt-[32px]
          md:pb-[64px]

          lg:px-[40px]
          lg:pt-[44px]
          lg:pb-[76px]

          2xl:px-[48px]
        "
      >
        {/* =====================================================
            PAGE HEADING
        ===================================================== */}
        <SectionHeading
          icon={
            <Image
              size={22}
              strokeWidth={1.8}
            />
          }
          badge={artRequiredData.hero.badge}
          heading={artRequiredData.hero.title}
          description={artRequiredData.hero.description}
          desClass="
            mx-auto
            mb-[22px]
            max-w-[700px]
            px-1
            font-inter
            text-[14px]
            font-normal
            leading-[1.7]
            text-[#6B6B80]

            sm:mb-[26px]
            sm:text-[15px]
            sm:leading-[1.75]

            md:mb-[28px]
            md:text-[16px]
            md:leading-[1.8]

            lg:mb-[30px]
            lg:max-w-[760px]
            lg:text-[16px]
            lg:leading-[1.8]
          "
          headingClassName="capitalize"
        />

        {/* =====================================================
            HERO HIGHLIGHTS
        ===================================================== */}
        <section
          className="
            mx-auto
            mb-[42px]
            grid
            w-full
            max-w-[760px]
            min-w-0
            grid-cols-1
            gap-[18px]

            sm:grid-cols-3
            sm:gap-[20px]

            md:gap-[28px]

            lg:mb-[52px]
            lg:max-w-[820px]
            lg:gap-[42px]
          "
        >
          {artRequiredData.highlights.map((item) => (
            <div
              key={item.id}
              className="
                min-w-0
                w-full
              "
            >
              <ServiceHighlights
                title={item.title}
                description={item.description}
                Icon={item.Icon}
                width="
                  flex
                  w-full
                  min-w-0
                  items-start
                  justify-start
                "
              />
            </div>
          ))}
        </section>

        {/* =====================================================
            GENERAL REQUIREMENTS
        ===================================================== */}
        <GeneralRequirementsSection
          title={artRequiredData.generalRequirements.title}
          description={artRequiredData.generalRequirements.description}
          items={artRequiredData.generalRequirements.items}
        />

        {/* =====================================================
            LARGE REQUIREMENT CARDS
        ===================================================== */}
        <div
          className="
            mt-[24px]

            sm:mt-[28px]

            md:mt-[32px]

            lg:mt-[36px]
          "
        >
          <ArtRequirementSections
            sections={artRequiredData.requirementSections}
          />
        </div>
        <div className="mt-10">
         <CTASection icon={
                        <Upload size={30} 
                        strokeWidth={2.2} 
                        className="text-[#7434E5]" />} 
                        title="Ready to Simplify Your Artwork Process?"
                         description="Partner with Infinity Digitizing for reliable embroidery digitizing, vector art, and custom design services. 100% accurate files, fast turnaround, and dependable support." 
                         buttonText="Get Free Consultation" 
                         titleClass="text-[22px] sm:text-[24px]"
                          bg="bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
                          onClick={() => navigate("/contact-us")}
                          /> </div>
      </div>
      
    </main>
  );
};

export default ArtRequiredPage;