import PolicyHero from "../assets/components/sections/TermsSections/PolicyHero";
import { refundPolicyData } from "../assets/components/common/RefundPolicyData";
import RefundPolicyCards from "../assets/components/layout/RefundLayout/RefundPolicyCards";
import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb";

const RefundPage = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#FBF9FE]">
      {/* BREADCRUMB */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1344px]
          min-w-0
          px-[14px]
          sm:px-[20px]
          md:px-[24px]
          lg:px-[30px]
          xl:px-[40px]
          2xl:px-0
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
          min-w-0
          overflow-hidden

          px-[14px]
          pb-[40px]
          pt-[14px]

          sm:px-[20px]
          sm:pb-[50px]
          sm:pt-[18px]

          md:px-[24px]
          md:pb-[60px]
          md:pt-[22px]

          lg:px-[30px]
          lg:pb-[70px]
          lg:pt-[24px]

          xl:px-[40px]

          2xl:px-0
        "
      >
        {/* =========================
            REFUND HERO
        ========================= */}
        <PolicyHero
          title={refundPolicyData.hero.title}
          description={refundPolicyData.hero.description}
          date={refundPolicyData.hero.date}
          rightImage={refundPolicyData.hero.rightImage}
          showBreadcrumb={false}
          containerClassName="
            w-full
            max-w-full
            min-w-0
          "
        />

        {/* =========================
            POLICY AT A GLANCE
        ========================= */}
        <section
          className="
            w-full
            min-w-0
            text-center

            px-[8px]
            py-[30px]

            sm:px-[12px]
            sm:py-[36px]

            md:px-[18px]
            md:py-[42px]

            lg:px-[24px]
            lg:py-[46px]
          "
        >
          {/* HEADING */}
          <h2
            className="
              mx-auto
              max-w-[900px]
              font-dmSans
              text-[24px]
              font-extrabold
              leading-[1.2]
              tracking-[-0.3px]
              text-[#111118]

              sm:text-[28px]

              md:text-[32px]

              lg:text-[36px]
            "
          >
            Our Policy At A Glance
          </h2>

          {/* PURPLE LINE */}
          <div
            className="
              mx-auto
              mt-[12px]
              h-[3px]
              w-[40px]
              rounded-full
              bg-[#7434E5]

              sm:mt-[14px]

              lg:mt-[16px]
            "
          />

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-[14px]
              w-full
              max-w-[680px]
              font-inter
              text-[14px]
              font-normal
              leading-[1.7]
              text-[#6B6B80]

              sm:mt-[15px]
              sm:text-[15px]
              sm:leading-[1.75]

              md:max-w-[720px]
              md:text-[16px]

              lg:mt-[16px]
              lg:max-w-[760px]
              lg:text-[16px]
              lg:leading-[1.8]
            "
          >
            Please read the following terms carefully to understand your rights
            and our procedures regarding refunds, cancellations and revisions.
          </p>
        </section>

        {/* =========================
            REFUND CARDS
        ========================= */}
        <div className="w-full min-w-0">
          <RefundPolicyCards cards={refundPolicyData.cards} />
        </div>
      </div>
    </main>
  );
};

export default RefundPage;