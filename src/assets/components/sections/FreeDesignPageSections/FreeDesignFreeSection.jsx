import {  useState } from "react";
import OutlineButton from "../../layout/OutlineBtn";
import PricingSlider from "../../layout/PricingSlider";

const FreeDesignFreeSection = ({
  classname,
  searchTerm = "",
  data = [],
  CardComponent,
  sectionTitle = "Free Designs",
  viewAllText = "View All Designs",
}) => {
  /* ================= VIEW ALL STATE ================= */

  const [showAll, setShowAll] = useState(false);

  /* ================= SAFE DATA ================= */

  const safeData = Array.isArray(data) ? data : [];

  /* ================= SEARCH FILTER ================= */

  const filteredDesigns = safeData.filter((design) =>
    design?.title
      ?.toLowerCase()
      .includes(searchTerm?.toLowerCase() || "")
  );

  /* ================= RESET VIEW ALL ================= */

  // useEffect(() => {
  //   setShowAll(false);
  // }, [searchTerm, data]);

  /* ================= VISIBLE DESIGNS ================= */

  const visibleDesigns = showAll
    ? filteredDesigns
    : filteredDesigns.slice(0, 4);

  /* ================= VIEW ALL ================= */

  const handleViewAll = () => {
    setShowAll(true);
  };

  /* ================= CARD SAFETY ================= */

  if (!CardComponent) {
    console.error(
      "FreeDesignFreeSection: CardComponent is missing."
    );

    return null;
  }

  return (
    <section className="my-12">

      {/* ================= HEADING ================= */}

      <div
        className="
          px-[22px]
          mb-8
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        {/* ================= SECTION TITLE ================= */}

        <div
          className={`
            ${classname || ""}
            lg:p-0
          `}
        >
          <p
            className="
              text-sm
              font-bold
              font-dmSans
              uppercase
              tracking-[3px]
              text-[#6F3DFF]
            "
          >
            {sectionTitle}
          </p>
        </div>

        {/* ================= VIEW ALL ================= */}

        {!showAll && filteredDesigns.length > 4 && (
          <OutlineButton
            title={viewAllText}
            onClick={handleViewAll}
          />
        )}

      </div>

      {/* ================= MOBILE SLIDER ================= */}

      <div className="w-full lg:hidden">
        <PricingSlider
          data={visibleDesigns}
          CardComponent={CardComponent}
          cardProp="design"
          loop={false}
        />
      </div>

      {/* ================= DESKTOP GRID ================= */}

      <div
        className="
          hidden
          lg:grid
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        "
      >
        {visibleDesigns.map((design, index) => (
          <CardComponent
            key={design?.id ?? index}
            design={design}
          />
        ))}
      </div>

      {/* ================= NO RESULTS ================= */}

      {filteredDesigns.length === 0 && (
        <div
          className="
            px-[22px]
            py-12
            text-center
          "
        >
          <p
            className="
              text-base
              font-medium
              text-[#777780]
            "
          >
            No designs found.
          </p>
        </div>
      )}

    </section>
  );
};

export default FreeDesignFreeSection;