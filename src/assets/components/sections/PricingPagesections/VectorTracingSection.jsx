import PricingCard from "../../layout/PricingPageLayout/PricingCard"
import {vectorTracingServices}  from "../../common/PricingPageData"
import PricingSlider from "../../layout/PricingPageLayout/PricingSlider"
import PricingSectionHeading from "../../layout/PricingPageLayout/PricingSectionHeading"
import OutlineBtn from "../../layout/OutlineBtn"

const VectorTracingSection = () => {
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
  <OutlineBtn title="View All Vector Services"/>
  <PricingSectionHeading  title="Vector Tracing Services"/>
  <div className="w-full xl:hidden">
  <PricingSlider    data={vectorTracingServices}/>
</div>
<div
  className="
    hidden
    xl:grid
    xl:grid-cols-5
    gap-5
  "
>
   {vectorTracingServices.map((item) => (
    <PricingCard
      key={item.id}
      item={item}
    />
  ))}
</div>
</section>
  )
}

export default VectorTracingSection