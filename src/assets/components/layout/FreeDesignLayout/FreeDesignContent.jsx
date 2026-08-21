import { useState } from "react";

import FreeDesignHeader from "../FreeDesignLayout/FreeDesignHeader";
import FreeDesignFreeSection from "../../sections/FreeDesignPageSections/FreeDesignFreeSection";
import CTASection from "../../layout/CTASection";
import DesignCard from "../FreeDesignLayout/DesignCard";

import { Gift } from "lucide-react";

import {
  EmbroideryDesignData,
  VectorDesignData,
} from "../../common/FreeDesignData";

const FreeDesignContent = ({
  activeCategory,
}) => {
  /* ================= SEARCH ================= */

  const [searchTerm, setSearchTerm] = useState("");

  /* ================= ACTIVE DATA ================= */

  const activeData =
    activeCategory === "embroidery"
      ? EmbroideryDesignData
      : VectorDesignData;

  /* ================= SECTION TITLE ================= */

  const sectionTitle =
    activeCategory === "embroidery"
      ? "Free Designs"
      : "Vector Designs";

  /* ================= VIEW ALL BUTTON ================= */

  const viewAllText =
    activeCategory === "embroidery"
      ? "View All Free Designs"
      : "View All Vector Designs";

  return (
    <section className="min-w-0">

      {/* ================= HEADER ================= */}

      <FreeDesignHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* ================= FREE DESIGNS ================= */}

      <FreeDesignFreeSection
        key={activeCategory}
        searchTerm={searchTerm}
        data={activeData}
        CardComponent={DesignCard}
        sectionTitle={sectionTitle}
        viewAllText={viewAllText}
      />

      {/* ================= CTA ================= */}

      <CTASection
        icon={
          <Gift
            size={28}
            strokeWidth={1.7}
            className="text-[#7434E5]"
          />
        }
        title=""
        description={
          activeCategory === "embroidery"
            ? "Love our free designs? Upgrade to Premium and get exclusive high quality designs!"
            : "Looking for more vector designs? Explore our premium collection!"
        }
        buttonText="Explore Premium Designs"
        titleClass="text-[28px]"
        sectionWidth="max-w-[1275px]"
        iconHeight="h-[52px]"
        iconWidth="w-[52px]"
      />

    </section>
  );
};

export default FreeDesignContent;