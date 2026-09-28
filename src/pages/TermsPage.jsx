import HighlightsCard from '../assets/components/layout/RefundLayout/HighlightsCard'
import TermsRow from '../assets/components/layout/TermPageLayout/TermsRow';
import PolicyHero from '../assets/components/sections/TermsSections/PolicyHero';
import {
  termsHero,
  highlightItems,
  termsItems,
} from "../assets/components/common/TermsData";

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-[#FBF9FE]  lg:py-13">
      <div
        className="
          mx-auto
          w-full
          max-w-[1344px]
          px-[20px]
          pb-[70px]
          pt-[14px]

          sm:px-[30px]

          lg:px-[48px]
        "
      >
        {/* =========================
            HERO
        ========================= */}
        <PolicyHero
          title={termsHero.title}
          description={termsHero.description}
          date={termsHero.date}
          rightImage={termsHero.rightImage}
        />

        {/* =========================
            HIGHLIGHTS
        ========================= */}
        <div className="mt-[35px]">
          <HighlightsCard
            items={highlightItems}
            variant="terms"
          />
        </div>

        {/* =========================
            TERMS LIST
        ========================= */}
        <section className="mt-[30px] space-y-[8px]">
          {termsItems.map((item) => (
            <TermsRow
              key={item.number}
              {...item}
            />
          ))}
        </section>
           <div className="w-full">
      <div
        className="
          w-full
          rounded-[24px]
          border
          border-[#E5E1EF]
          bg-[#F9F7FE]
mt-13
          px-[24px]
          py-[32px]

          sm:px-[36px]
          sm:py-[40px]

          md:px-[50px]
          md:py-[48px]

          lg:px-[70px]
          lg:py-[62px]

          xl:px-[72px]
          xl:py-[68px]
        "
      >
        <div className="max-w-[760px]">
          {/* Heading */}
          <h2
            className="
              font-inter
              text-[28px]
              font-bold
              leading-[1.2]
              tracking-[-0.6px]
              text-[#7434E5]

              sm:text-[32px]

              md:text-[34px]

              lg:text-[36px]
            "
          >
            Your Trust Matters
          </h2>

          {/* Description */}
          <p
            className="
              mt-[24px]
              font-inter
              text-[16px]
              font-normal
              leading-[1.75]
              text-[#6B6B80]

              sm:mt-[26px]
              sm:text-[17px]
              sm:leading-[1.7]

              lg:mt-[28px]
              lg:text-[18px]
              lg:leading-[1.72]
            "
          >
            At Infinity Digitizing, we value long-term relationships with our
            clients. These terms ensure a safe, secure and transparent
            experience for everyone. If you ever have questions, our team is
            always ready to help — just reach out.
          </p>
        </div>
      </div>
    </div>
      </div>
    </main>
  );
};

export default TermsPage;