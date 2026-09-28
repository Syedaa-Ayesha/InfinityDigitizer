import { useMemo, useState } from "react";
import { ArrowRight, CircleQuestionMark, MessageCircle } from "lucide-react";

import HelpFAQSection from "../assets/components/sections/HelpSection/HelpFaqSection";
import { helpPageFaqItems } from "../assets/components/common/FAQData";

import SectionHeading from "../assets/components/layout/SectionHeading";
import SearchInput from "../assets/components/layout/SearchInput";
import HelpTopicCard from "../assets/components/layout/HelpPagelayout/HelpTopicCard";

import { popularHelpArticles } from "../assets/components/common/PopularHelpArticles";
import { helpTopics } from "../assets/components/common/HelpTopicsData";

import CTASection from "../assets/components/layout/CTASection";

import SupportInfoCard from "../assets/components/layout/HelpPagelayout/SupportInfoCard";
import { supportInfo } from "../assets/components/common/SupportInfo";

import PopularHelpArticles from "../assets/components/layout/HelpPagelayout/PopularHelpArticles";
import { useNavigate } from "react-router-dom";


const HelpPage = () => {
       const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return helpTopics;
    }

    return helpTopics.filter((topic) => {
      const titleMatch = topic.title
        .toLowerCase()
        .includes(query);

      const descriptionMatch = topic.description
        .toLowerCase()
        .includes(query);

      const keywordMatch = topic.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(query)
      );

      return titleMatch || descriptionMatch || keywordMatch;
    });
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <main
      className="
        relative
        isolate
        min-h-screen
        w-full
        max-w-[100vw]
        min-w-0
        overflow-x-clip
        bg-[#FBF9FE]
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1364px]
          min-w-0
          max-w-full
          overflow-x-clip

          px-[14px]
          pt-[22px]
          pb-[44px]

          sm:px-[22px]
          sm:py-[24px]
          sm:pb-[52px]

          md:px-[24px]
          md:py-[34px]
          md:pb-[60px]

          lg:px-[40px]
          lg:py-[52px]
          lg:pb-[70px]

          2xl:px-[48px]
        "
      >
        {/* ================= HEADER ================= */}
        <SectionHeading
          icon={
            <CircleQuestionMark
              size={22}
              strokeWidth={1.8}
            />
          }
          badge="Help Center"
          heading="How Can We Help You?"
          description={
            <>
              Find answers, guides, and support to make your experience
              <br className="hidden sm:block" />
              with Infinity Digitizing easy and smooth.
            </>
          }
          desClass="
            mx-auto
            mb-8
            max-w-[720px]
            px-1
            font-inter
            text-[14px]
            font-normal
            leading-[1.7]
            text-[#6B6B80]

            sm:mb-9
            sm:text-[15px]
            sm:leading-[1.75]

            md:mb-10
            md:text-[16px]
            md:leading-[1.8]

            lg:mb-12
            lg:text-[16px]
            lg:leading-[1.8]
          "
          headingClassName="capitalize"
        />

        {/* ================= SEARCH ================= */}
        <div
          className="
            w-full
            min-w-0
            max-w-full
            overflow-x-clip
          "
        >
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
        </div>

        {/* ================= HELP TOPICS ================= */}
        <section
          className="
            mt-[40px]
            w-full
            min-w-0
            max-w-full
            overflow-x-clip

            sm:mt-[48px]

            md:mt-[54px]

            lg:mt-[58px]
          "
        >
          {/* Heading Row */}
          <div
            className="
              mb-[16px]
              flex
              min-w-0
              max-w-full
              items-center
              justify-between
              gap-[16px]

              sm:mb-[18px]

              lg:mb-[20px]
            "
          >
            <h2
              className="
                min-w-0
                max-w-full
                font-dmSans
                text-[20px]
                font-bold
                leading-[1.3]
                tracking-[-0.25px]
                text-[#17161F]

                sm:text-[22px]

                lg:text-[24px]
              "
            >
              Browse Help Topics
            </h2>

            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="
                hidden
                shrink-0
                items-center
                gap-[5px]

                font-inter
                text-[12px]
                font-medium
                leading-none
                text-[#7434E5]

                transition-colors
                duration-200

                hover:text-[#5F25C9]

                sm:inline-flex

                lg:text-[13px]
              "
            >
              View All Articles

              <ArrowRight
                size={14}
                strokeWidth={1.8}
              />
            </button>
          </div>

          {/* HELP TOPIC CARDS */}
          {filteredTopics.length > 0 ? (
            <div
              className="
                grid
                w-full
                max-w-full
                min-w-0

                grid-cols-1
                gap-[14px]

                sm:grid-cols-2
                sm:gap-[16px]

                md:grid-cols-3
                md:gap-[18px]

                lg:grid-cols-4
                lg:gap-[18px]

                xl:grid-cols-[repeat(7,minmax(0,1fr))]
                xl:gap-[14px]
              "
            >
              {filteredTopics.map((topic) => (
                <HelpTopicCard
                  key={topic.id}
                  icon={topic.icon}
                  title={topic.title}
                  description={topic.description}
                  link={topic.link}
                />
              ))}
            </div>
          ) : (
            /* ================= NO RESULTS ================= */
            <div
              className="
                flex
                min-h-[190px]
                w-full
                max-w-full
                min-w-0
                flex-col
                items-center
                justify-center

                rounded-[16px]
                border
                border-dashed
                border-[#DCD4E9]
                bg-white

                px-[18px]
                py-[26px]

                sm:min-h-[210px]
                sm:px-[24px]
                sm:py-[30px]

                md:px-[30px]
              "
            >
              <div
                className="
                  flex
                  h-[46px]
                  w-[46px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F1EAFF]

                  sm:h-[50px]
                  sm:w-[50px]
                "
              >
                <CircleQuestionMark
                  size={21}
                  strokeWidth={1.8}
                  className="text-[#7434E5]"
                />
              </div>

              <h3
                className="
                  mt-[13px]
                  font-dmSans
                  text-[18px]
                  font-bold
                  leading-[1.3]
                  text-[#17161F]

                  sm:text-[19px]
                "
              >
                No help topic found
              </h3>

              <p
                className="
                  mt-[7px]
                  w-full
                  max-w-[520px]
                  break-words
                  text-center
                  font-inter
                  text-[14px]
                  font-normal
                  leading-[1.7]
                  text-[#777281]

                  sm:text-[15px]
                  sm:leading-[1.75]
                "
              >
                We couldn't find a matching help topic for
                <span className="font-semibold text-[#7434E5]">
                  {" "}
                  “{searchTerm}”
                </span>
                . Try another search term.
              </p>

              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="
                  mt-[16px]
                  rounded-full
                  bg-[#7434E5]
                  px-[16px]
                  py-[9px]

                  font-inter
                  text-[12px]
                  font-semibold
                  leading-none
                  text-white

                  transition-colors
                  duration-200

                  hover:bg-[#6428D0]
                "
              >
                Clear Search
              </button>
            </div>
          )}

          {/* ================= HELP CONTENT ================= */}
          <section
            className="
              mt-[44px]
              w-full
              max-w-full
              min-w-0
              overflow-x-clip

              sm:mt-[50px]

              md:mt-[54px]

              lg:mt-[58px]
            "
          >
            <div
              className="
                grid
                w-full
                max-w-full
                min-w-0
                grid-cols-1
                gap-[18px]

                sm:gap-[20px]

                md:gap-[22px]

                lg:grid-cols-[minmax(0,1fr)_300px]

                xl:grid-cols-[minmax(0,1fr)_320px]

                2xl:grid-cols-[minmax(0,1fr)_340px]

                lg:items-start
              "
            >
              {/* LEFT */}
              <div className="w-full min-w-0 max-w-full">
                <PopularHelpArticles
                  articles={popularHelpArticles}
                />
              </div>

              {/* RIGHT */}
              <div className="w-full min-w-0 max-w-full">
                <SupportInfoCard
                  title="Still Need Help?"
                  description="Our support team is here for you. Get in touch and we'll be happy to assist you."
                  items={supportInfo}
                />
              </div>
            </div>
          </section>

          {/* ================= FAQ ================= */}
          <section
            className="
              mt-[44px]
              w-full
              max-w-full
              min-w-0
              overflow-x-clip

              sm:mt-[50px]

              md:mt-[56px]

              lg:mt-[64px]
            "
          >
            <HelpFAQSection items={helpPageFaqItems} />
          </section>

          {/* ================= CTA ================= */}
          <section
            className="
              mt-[44px]
              w-full
              max-w-full
              min-w-0
              overflow-x-clip

              sm:mt-[52px]

              lg:mt-[64px]
            "
          >
            <CTASection
  icon={
    <MessageCircle
      size={32}
      strokeWidth={2.2}
      className="text-[#7434E5]"
    />
  }
  title="Still Have Questions?"
  description="Our team is always ready to help you with any questions or special requirements."
  titleClass = "text-[24px]"
  buttonText="Contact Support" 
  bg =" bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)]"
   onClick={() => navigate("/contact-us")}
 
/>
          </section>
        </section>
      </div>
    </main>
  );
};

export default HelpPage;