import FreeDesignHeader from "../../layout/FreeDesignLayout/FreeDesignHeader";
import FreeDesignFreeSection from "./FreeDesignFreeSection";

import {
  EmbroideryDesignData,
  VectorDesignData,
} from "../../common/FreeDesignData";

import DesignCard from "../../layout/FreeDesignLayout/DesignCard";

const FreeDesignSection = () => {

  /* ================= HOME PAGE DATA ================= */

  const freeDesigns = [
    ...EmbroideryDesignData,
    ...VectorDesignData,
  ];

  return (
    <section className="max-w-[1300px] mx-auto lg:py-[54px] border">

      <FreeDesignHeader />

      <FreeDesignFreeSection
        data={freeDesigns}
        CardComponent={DesignCard}
        sectionTitle="Free Designs"
        viewAllText="View All Free Designs"
      />

    </section>
  );
};

export default FreeDesignSection;