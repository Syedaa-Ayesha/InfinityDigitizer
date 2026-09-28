import {
  Headset,
  ShieldCheck,
  Zap,
  FileCheck2,
} from "lucide-react";

import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb";
import SectionHeading from "../assets/components/layout/SectionHeading";
import ServiceHighlights from "../assets/components/layout/ServiceHighlights";

import FileFormatSection from "../assets/components/sections/FileFormateSection/FileFormatsSection";
import FileFormatCTA from "../assets/components/layout/FileFormatPageLayout/FileFormatCTA";

import { fileFormatData } from "../assets/components/common/FikeFormatData";

const formatHighlights = [
  {
    id: 1,
    title: "Wide Format Support",
    description: "Send your file in any common format.",
    Icon: Zap,
  },
  {
    id: 2,
    title: "Machine Ready Files",
    description: "Optimized for all major machines.",
    Icon: ShieldCheck,
  },
  
  {
    id: 3,
    title: "24/7 Friendly Support",
    description: "Our team is here to assist",
    Icon: Headset,
  },
];

const FileFormatPage = () => {
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
          pb-[44px]

          sm:px-[22px]
          sm:pt-[24px]
          sm:pb-[52px]

          md:px-[24px]
          md:pt-[32px]
          md:pb-[60px]

          lg:px-[40px]
          lg:pt-[46px]
          lg:pb-[70px]

          2xl:px-[48px]
        "
      >
        {/* =====================================================
            PAGE HEADING
        ===================================================== */}
        <SectionHeading
          icon={
            <FileCheck2
              size={22}
              strokeWidth={1.8}
            />
          }
          badge={fileFormatData.hero.badge}
          heading={fileFormatData.hero.title}
          description={fileFormatData.hero.description}
          desClass="
            mx-auto
            mb-6
            max-w-[700px]
            px-1
            font-inter
            text-[14px]
            font-normal
            leading-[1.7]
            text-[#6B6B80]

            sm:mb-9
            sm:text-[15px]
            sm:leading-[1.75]

            md:mb-6
            md:text-[16px]
            md:leading-[1.8]

            lg:mb-[22px]
            lg:max-w-[760px]
            lg:text-[16px]
            lg:leading-[1.8]
          "
          headingClassName="capitalize"
        />

        {/* =====================================================
            SERVICE HIGHLIGHTS
        ===================================================== */}
        <section
          className="
            mb-[6px]
            flex
            w-full
            max-w-[900px]
            flex-wrap
            justify-center
            gap-[10px]
            mx-auto

            sm:gap-[12px]

            md:gap-[14px]

            lg:max-w-[680px]
            lg:flex-nowrap
            lg:gap-[14px]
          "
        >
         {formatHighlights.map((item) => (
  <ServiceHighlights
    key={item.id}
    title={item.title}
    description={item.description}
    Icon={item.Icon}
    variant="logo"
    width="
      flex
      items-start
      justify-start
      w-[calc(50%-5px)]

      sm:w-[calc(50%-6px)]

      md:w-[calc(25%-11px)]

      lg:w-auto
      lg:flex-1
      lg:items-center
      lg:justify-center
    "
  />
))}
        </section>

        {/* =====================================================
            EMBROIDERY FILE FORMATS
        ===================================================== */}
        <div
          className="
            mt-[42px]

            sm:mt-[50px]

            md:mt-[58px]

            lg:mt-[66px]
          "
        >
          <FileFormatSection
            title="Embroidery File Formats"
            description="We provide machine-ready embroidery files compatible with all major embroidery machines."
            formats={fileFormatData.embroideryFormats}
          />
        </div>

        {/* =====================================================
            VECTOR FILE FORMATS
        ===================================================== */}
        <div
          className="
            mt-[42px]

            sm:mt-[50px]

            md:mt-[58px]

            lg:mt-[66px]
          "
        >
          <FileFormatSection
            title="Vector File Formats"
            description="We accept and deliver vector files for printing, engraving, cutting, and more."
            formats={fileFormatData.vectorFormats}
          />
        </div>

        {/* =====================================================
            OTHER ACCEPTED FORMATS
        ===================================================== */}
        <div
          className="
            mt-[42px]

            sm:mt-[50px]

            md:mt-[58px]

            lg:mt-[66px]
          "
        >
          <FileFormatSection
            title="Other Accepted File Types"
            description="You can also send us these common image file formats."
            formats={fileFormatData.otherFormats}
          />
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <div
          className="
            mt-[38px]

            sm:mt-[46px]

            md:mt-[54px]

            lg:mt-[62px]
          "
        >
          <FileFormatCTA
            cards={fileFormatData.bottomCards}
          />
        </div>
      </div>
    </main>
  );
};

export default FileFormatPage;