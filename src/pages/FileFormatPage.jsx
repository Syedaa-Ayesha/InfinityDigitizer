import {
  Headset,
  ShieldCheck,
  Zap,
  FileCheck2,
  FileUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb";
import SectionHeading from "../assets/components/layout/SectionHeading";
import FileFormatSection from "../assets/components/sections/FileFormateSection/FileFormatsSection";
import FileFormatCTA from "../assets/components/layout/FileFormatPageLayout/FileFormatCTA";
import { fileFormatData } from "../assets/components/common/FikeFormatData";
import CTASection from "../assets/components/layout/CTASection";

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
    description: "Our team is here to assist.",
    Icon: Headset,
  },
];

const FileFormatPage = () => {
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
    mx-auto
    mb-[6px]
    grid
    w-[280px]
    max-w-[980px]
    grid-cols-1
    gap-y-[24px]

    sm:gap-y-[26px]

    md:grid-cols-3
    md:gap-x-[28px]

    lg:gap-x-[42px]
  "
>
  {formatHighlights.map(
    ({ id, Icon, title, description }) => (
      <div
        key={id}
        className="
          flex
          w-full
          min-w-0
          items-start
          justify-start
          gap-[12px]

          sm:gap-[14px]

          md:gap-[12px]
          lg:gap-[14px]
        "
      >
        {/* ICON */}
        <div
          className="
            flex
            h-[50px]
            w-[50px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#E8DBFE]
            text-[#7434E5]

            sm:h-[54px]
            sm:w-[54px]
          "
        >
          {Icon && (
            <Icon
              size={23}
              strokeWidth={1.8}
            />
          )}
        </div>

        {/* CONTENT */}
        <div className="min-w-0 flex-1 text-left">
          <h3
            className="
              font-dmSans
              text-[16px]
              font-bold
              leading-[1.3]
              text-[#0F1729]

              sm:text-[17px]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-[5px]
              max-w-full
              font-inter
              text-[12px]
              leading-[1.55]
              text-[#7A7591]

              sm:text-[13px]
            "
          >
            {description}
          </p>
        </div>
      </div>
    )
  )}
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
            BOTTOM CTA CARDS
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

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <div
          className="
            mt-[38px]
            sm:mt-[46px]
            md:mt-[54px]
            lg:mt-[62px]
          "
        >
          <CTASection
            icon={
              <FileUp
                size={30}
                strokeWidth={2.2}
                className="text-[#7434E5]"
              />
            }
            title="Have Your Artwork Ready?"
            description="Upload your file now and get a fast, free quote from our expert team."
            buttonText="Upload & Get Quote"
            titleClass="text-[22px] sm:text-[24px]"
            bg="bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
            onClick={() => navigate("/contact-us")}
          />
        </div>
      </div>
    </main>
  );
};

export default FileFormatPage;