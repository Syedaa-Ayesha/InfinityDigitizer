import {FreeDesignData} from "../common/FreeDesignData"
import PremiumCard from "../layout/PremiumDesignCard";
import OutlineButton from "../layout/OutlineBtn";

const FreeDesignPremiumSection = () => {
     const premiumDesigns = FreeDesignData.filter(
    (item) => item.type === "premium"
  );
  return (
   <section className="mb-6">

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm font-bold uppercase font-dmSans tracking-[3px] text-[#7B3FF2]">
            Premium Designs
          </p>
        </div>

        <OutlineButton title="View All Premium Designs" />
      </div>

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
        {premiumDesigns.map((design) => (
          <PremiumCard
            key={design.id}
            design={design}
          />
        ))}
      </div>

    </section>
  )
}

export default FreeDesignPremiumSection