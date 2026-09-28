import ServiceHero from "../assets/components/sections/ServiceDetailsPagesSection/ServiceHero";
import capImage from "../assets/images/ServiceHeroImage03.png";
import CapTypesSection from "../assets/components/sections/ServiceDetailsPagesSection/CapTypesSection";
import { serviceCards } from "../assets/components/common/ServiceCardsData";
import CTASection from "../assets/components/layout/CTASection";
import { useNavigate } from "react-router-dom";
import { PencilLine } from "lucide-react";

const CapDigitizingPage = () => {
  const navigate = useNavigate();

  const capService = serviceCards?.embroidery?.find(
    (service) => service.slug === "cap-digitizing"
  );

  const detail = capService?.detail;
  const hero = detail?.heroSection;

  if (!capService || !detail) {
    return null;
  }

  return (
    <main
      className="
        box-border
        min-h-screen
        w-full
        min-w-0
        max-w-[100vw]
        bg-[#FBF9FE]
      "
    >
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="
          box-border
          w-full
          min-w-0
          max-w-full
        "
      >
        <ServiceHero
          category={hero?.category}
          title={hero?.title}
          description={hero?.description}
          image={capImage}
        />
      </section>

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}
      <div
        className="
          box-border
          

          w-full
          min-w-0
          max-w-[1344px]

          px-[12px]
          pt-[26px]
          pb-[42px]

          sm:px-[18px]
          sm:pt-[32px]
          sm:pb-[48px]

          md:px-[24px]
          md:pt-[40px]
          md:pb-[56px]

          lg:px-[40px]
          lg:pt-[50px]
          lg:pb-[68px]

          xl:px-[44px]

          2xl:px-[48px]
          xl:ml-10
        "
      >
        {/* =====================================================
            ARTICLE CONTENT
        ===================================================== */}
        <section
          className="
            box-border
            w-full
            min-w-0
            max-w-full
          "
        >
          <CapTypesSection
            title={detail.introSection?.title}
            description1={detail.introSection?.description1}
            description2={detail.introSection?.description2}
            typesToDisplay={detail.introSection?.typesToDisplay}
            capTypes={detail.capTypes}
            submissionSteps={detail.submissionSteps}
            fileFormatsSection={detail.fileFormatsSection}
          />
        </section>

       
  
      </div>
      <div className="mx-[22px] max-w-full mb-9">
      <CTASection
  icon={
    <PencilLine
      size={22}
      strokeWidth={1.8}
      className="text-[#7434E5]"
    />
  }
  title="Get Your Cap Design Ready for Embroidery"
  description="Send us your artwork and let our team turn it into a clean, embroidery-ready digitizing file. Whether it's a logo, lettering or detailed artwork, we'll prepare it for a smooth stitch-out."
  buttonText="Order now"
   bg="bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
  onClick={() => navigate("/contact-us")}
   
/></div>
    </main>
  );
};

export default CapDigitizingPage;