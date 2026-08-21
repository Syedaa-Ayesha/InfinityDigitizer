import { useState } from "react";

import FreeDesignHeader from "../../layout/FreeDesignLayout/FreeDesignHeader";
import FreeDesignFreeSection from "./FreeDesignFreeSection";

import {
  EmbroideryDesignData,
  VectorDesignData,
} from "../../common/FreeDesignData";

import DesignCard from "../../layout/FreeDesignLayout/DesignCard";

const FreeDesignSection = () => {

  /* ================= SEARCH ================= */

  const [searchTerm, setSearchTerm] = useState("");

  /* ================= HOME PAGE DATA ================= */

  const freeDesigns = [
    ...(Array.isArray(EmbroideryDesignData)
      ? EmbroideryDesignData
      : []),

    ...(Array.isArray(VectorDesignData)
      ? VectorDesignData
      : []),
  ];

  return (
    <section className="max-w-[1300px] mx-auto lg:py-[54px] border">

      <FreeDesignHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <FreeDesignFreeSection
        searchTerm={searchTerm}
        data={freeDesigns}
        CardComponent={DesignCard}
        sectionTitle="Free Designs"
        viewAllText="View All Free Designs"
      />

    </section>
  );
};

export default FreeDesignSection;