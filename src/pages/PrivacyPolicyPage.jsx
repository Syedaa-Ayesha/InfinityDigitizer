import PolicyHero from "../assets/components/sections/TermsSections/PolicyHero";
import PrivacyHighlights from "../assets/components/layout/PrivacyPolicyLayout/PrivacyHighlights";
import PrivacyPolicySections from "../assets/components/sections/PrivacyPolicySection/PrivacyPolicySections";
import { privacyPolicyData } from "../assets/components/common/PrivacyPolicyData";
import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb";
import CTASection from "../assets/components/layout/CTASection";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full overflow-x-hidden bg-[#FBF9FE]">
      {/* BREADCRUMB */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1344px]
          px-[14px]
          sm:px-[20px]
          md:px-[24px]
          lg:px-0
        "
      >
        <Breadcrumb />
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1344px]
          px-[14px]
          pb-[34px]
          sm:px-[20px]
          sm:pb-[48px]
          md:px-[24px]
          md:pb-[56px]
          lg:px-0
          lg:pb-[70px]
        "
      >
        {/* HERO */}
        <PolicyHero
          title={privacyPolicyData.hero.title}
          description={privacyPolicyData.hero.description}
          date={privacyPolicyData.hero.date}
          rightImage={privacyPolicyData.hero.rightImage}
          subtitle="Your Privacy is our Priority"
          containerClassName="
            w-full
            overflow-hidden
            rounded-[20px]
            border
            border-[#E8E8F0]
            bg-white
            shadow-[0_3px_18px_rgba(0,0,0,0.08)]

            !h-auto

            sm:rounded-[22px]

            lg:rounded-[24px]
            lg:!h-[600px]
            lg:pl-[52px]
          "
          gridClassName="
            !w-full
            !grid-cols-1
            !h-auto
            !gap-0

            md:!grid-cols-2
            md:!h-auto

            lg:!grid-cols-2
            lg:!h-full
            lg:!gap-0
          "
          imageClassName="
            !w-full
            !min-w-0
            !h-[260px]
            !min-h-0
            !rounded-none
            !px-0

            sm:!h-[300px]

            md:!h-full

            lg:!h-full
            lg:!min-h-0
            lg:!pr-[18px]
          "
          contentClassName="
            !w-full
            !min-w-0
            !px-[18px]
            !py-[28px]

            sm:!px-[24px]
            sm:!py-[34px]

            md:!px-[28px]
            md:!py-[36px]

            lg:!px-0
            lg:!pr-[42px]
            lg:!py-[48px]
          "
        />

        {/* HIGHLIGHTS */}
        <div
          className="
            mt-[18px]
            sm:mt-[24px]
            md:mt-[28px]
            lg:mt-[30px]
          "
        >
          <PrivacyHighlights items={privacyPolicyData.highlights} />
        </div>

        {/* CONTENT SECTIONS */}
        <div
          className="
            my-[34px]
            sm:my-[48px]
            md:my-[56px]
            lg:my-[70px]
          "
        >
          <PrivacyPolicySections
            sections={privacyPolicyData.sections}
          />
        </div>

        {/* CTA */}
        <CTASection
          icon={
            <Lock
              size={30}
              strokeWidth={2.2}
              className="text-[#7434E5]"
            />
          }
          title="Have Privacy Questions?"
          description="Our team is available 24/7 to answer any privacy or data-related questions you may have."
          buttonText="Contact Us"
          titleClass="text-[20px] sm:text-[22px] md:text-[24px]"
          bg="
            bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)]
            shadow-[0px_18px_40px_rgba(75,36,143,0.3)]
          "
          onClick={() => navigate("/contact-us")}
        />
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;