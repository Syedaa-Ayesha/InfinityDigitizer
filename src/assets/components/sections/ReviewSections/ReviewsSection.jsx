import { useEffect, useState } from "react";
import {useNavigate, useSearchParams } from "react-router-dom";

import ReviewHeader from "./ReviewHeader";
import CommonTab from "../../layout/CommonTab";
import CommonSlider from "../../layout/PricingSlider";
import OutlineButton from "../../layout/OutlineBtn";
import TestimonialCard from "../../layout/HomeLayout/TextimonialCard";
import CTASection from "../../layout/CTASection";

import { Headphones, RefreshCw } from "lucide-react";

import { TestimonialData } from "../../common/TestimonialData";
import { reviewTabs } from "../../common/ReviewsData";

const REVIEWS_PER_LOAD = 3;

const ReviewsSection = () => {
  const [searchParams] = useSearchParams();

  /* ================= URL TAB ================= */

  const tabFromUrl = searchParams.get("tab");

  const isValidTab = reviewTabs.some(
    (tab) => tab.id === tabFromUrl
  );

  /* ================= ACTIVE TAB ================= */

  const [activeTab, setActiveTab] = useState(
    isValidTab ? tabFromUrl : "all"
  );

  /* ================= VISIBLE COUNT ================= */

  const [visibleCount, setVisibleCount] =
    useState(REVIEWS_PER_LOAD);

  /* ================= UPDATE TAB FROM URL ================= */

  useEffect(() => {
    if (isValidTab) {
      setActiveTab(tabFromUrl);
    } else {
      setActiveTab("all");
    }
  }, [tabFromUrl, isValidTab]);

  /* ================= RESET LOAD MORE ================= */

  useEffect(() => {
    setVisibleCount(REVIEWS_PER_LOAD);
  }, [activeTab]);

  /* ================= FILTER REVIEWS ================= */

  const filteredReviews =
    activeTab === "all"
      ? TestimonialData
      : TestimonialData.filter(
          (review) => review.category === activeTab
        );

  /* ================= VISIBLE REVIEWS ================= */

  const visibleReviews = filteredReviews.slice(
    0,
    visibleCount
  );

  /* ================= LOAD MORE ================= */

  const hasMoreReviews =
    visibleCount < filteredReviews.length;

  const handleLoadMore = () => {
    setVisibleCount(
      (prev) => prev + REVIEWS_PER_LOAD
    );
  };
const navigate = useNavigate();
  return (
    <section
      className="
        mx-auto
        w-full
        max-w-[1300px]
        px-4
        py-[22px]
        sm:px-6
        lg:px-8
      "
    >
      {/* ================= HEADER ================= */}

      <ReviewHeader />

      {/* ================= TABS ================= */}
<div id="reviews">
      <div className="mt-6 flex justify-center">
        <CommonTab
          tabs={reviewTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          classname="
            mt-0
            max-w-full
            overflow-x-auto
            border-0
            bg-transparent
            p-0
            shadow-none
          "
        />
      </div>
</div>
      {/* ================= DESKTOP / TABLET GRID ================= */}

      <div
        className="
          mt-6
          hidden
          grid-cols-1
          gap-4
          sm:grid
          sm:grid-cols-2
          lg:grid-cols-3
          lg:gap-5
        "
      >
        {visibleReviews.map((review) => (
          <TestimonialCard
            key={review.id}
            item={review}
          />
        ))}
      </div>

      {/* ================= MOBILE SLIDER ================= */}

      <div className="mt-6 block sm:hidden">
        <CommonSlider
          data={visibleReviews}
          CardComponent={TestimonialCard}
          cardProp="item"
          slidesPerView={1}
          spaceBetween={16}
          loop={false}
        />
      </div>

      {/* ================= LOAD MORE ================= */}

      {hasMoreReviews && (
        <div className="mt-7 flex justify-center">
          <OutlineButton
            title="Load More Reviews"
            Icon={RefreshCw}
            classname="w-full justify-center lg:w-fit"
            onClick={handleLoadMore}
          />
        </div>
      )}

      {/* ================= CTA ================= */}

      <CTASection
        icon={
          <Headphones
            size={38}
            strokeWidth={2.2}
            className="text-[#7434E5]"
          />
        }
        title="Your Artwork Deserves the Best!"
        description="Upload it now, and our team will turn it into a clean, high quality file, fast, accurate, no errors, no delays, just quality work"
        buttonText="Get Free Quote"
        titleClass="text-[28px]"
        sectionWidth="w-[1330px]"
        iconHeight="h-[96px]"
        iconWidth="w-[96px]"
        bg="bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)] mt-5"
        onClick={() => navigate("/#quote")}
      />
    </section>
  );
};

export default ReviewsSection;