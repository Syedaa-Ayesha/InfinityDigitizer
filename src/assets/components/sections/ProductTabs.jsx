import { useState } from "react";
import { FileText, Star } from "lucide-react";
import DescriptionTab from "../sections/DescriptionTab";
import ReviewsTab from "../sections/ReviewsTab";

const ProductTabs = ({ design }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="max-w-[1330px] mx-auto">
      <div
        className="
          overflow-hidden
          rounded-[20px]
          border
          border-[#ECECF3]
          bg-white
        "
      >
        {/* Tabs */}

        <div
          className="
            flex
            items-center
            overflow-x-auto
            border-b
            border-[#E7E3ED]
            whitespace-nowrap
          "
        >
          {/* Description */}

          <button
            onClick={() => setActiveTab("description")}
            className={`
              flex
              items-center
              gap-2
              border-b-2
              px-6
              py-5
              text-[14px]
              font-bold
              font-dmSans
              transition-all

              ${
                activeTab === "description"
                  ? "border-[#7B3FF2] text-[#7B3FF2]"
                  : "border-transparent text-[#6B7280] hover:text-[#7B3FF2]"
              }
            `}
          >
            <FileText size={18} />

            Description
          </button>

          {/* Reviews */}

          <button
            onClick={() => setActiveTab("reviews")}
            className={`
              flex
              items-center
              gap-2
              border-b-2
              px-6
              py-5
              text-[14px]
              font-bold
              font-dmSans
              transition-all

              ${
                activeTab === "reviews"
                  ? "border-[#7B3FF2] text-[#7B3FF2]"
                  : "border-transparent text-[#6B7280] hover:text-[#7B3FF2]"
              }
            `}
          >
            <Star size={18} />

            Reviews ({design.reviews})
          </button>
        </div>

        {/* Content */}

        <div className="p-6 md:p-10">
          {activeTab === "description" ? (
            <DescriptionTab design={design} />
          ) : (
            <ReviewsTab design={design} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;