import {FreeDesignData} from "../common/FreeDesignData"
import FreeCard from "../layout/DesignCard";
import OutlineButton from "../layout/OutlineBtn";

const FreeDesignFreeSection = () => {
     const freeDesigns = FreeDesignData.filter(
    (item) => item.type === "free"
  );
  
  return (
   <section className="mt-12">

      {/* Heading */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-sm font-bold font-dmSans uppercase tracking-[3px] text-[#6F3DFF]">
            Free Designs
          </p>


        </div>

        <OutlineButton title="View All Free Designs" />

      </div>

      {/* Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
        "
      >
        {freeDesigns.map((design) => (
          <FreeCard
            key={design.id}
            design={design}
          />
        ))}
      </div>

    </section>
  )
}

export default FreeDesignFreeSection