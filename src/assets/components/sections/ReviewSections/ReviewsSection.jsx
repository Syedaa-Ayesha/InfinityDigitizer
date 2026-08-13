import { useState } from "react";

import ReviewHeader from "./ReviewHeader";
import ReviewCard from "../../layout/ReviewCard";
import CommonTab from "../../layout/CommonTab";
import OutlineButton from "../../layout/OutlineBtn";

import {
  reviewsData,
  reviewTabs,
} from "../../common/ReviewsData";

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredReviews =
    activeTab === "all"
      ? reviewsData
      : reviewsData.filter(
          (review) => review.category === activeTab
        );

  return (
    <section className="mx-auto p-[22px] max-w-[1300px] lg:py-16">

      {/* Header */}

      <ReviewHeader />

      {/* Tabs */}

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

      {/* Reviews Grid */}

      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          lg:grid-cols-3
          lg:gap-4
        "
      >
        {filteredReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}
      </div>

      {/* Load More */}

      <div className="mt-5 flex justify-center">
        <OutlineButton title="Load More Reviews ↗" />
      </div>

    </section>
  );
};

export default ReviewsSection;