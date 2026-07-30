import PricingCard from "../../layout/PricingPageLayout/PricingCard"
import PricingSlider from "../../layout/PricingPageLayout/PricingSlider"
import PricingSectionHeading from "../../layout/PricingPageLayout/PricingSectionHeading"
import OutlineBtn from "../../layout/OutlineBtn"
import {embroideryServices}  from "../../common/PricingPageData"
const EmbroideryDigitizingService = () => {
  return (
    <section
  className="
    mx-auto
    max-w-[1320px]
    flex
    flex-col
    items-center
    gap-[14px]
  "
>
  <OutlineBtn title="View All Logo Services"/>
  <PricingSectionHeading  title="Embroidery Digitizing Services"/>
  <div className="w-full xl:hidden">
  <PricingSlider    data={embroideryServices} />
</div>
<div
  className="
    hidden
    xl:grid
    xl:grid-cols-5
    gap-5
  "
>
   {embroideryServices.map((item) => (
    <PricingCard
      key={item.id}
      item={item}
    />
  ))}
</div>
</section>
  )
}

export default EmbroideryDigitizingService