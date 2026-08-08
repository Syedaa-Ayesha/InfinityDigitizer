import B2BHeading from "../../layout/B2BLayout/B2BHeading"
import  {ProfessionalServicesData} from "../../common/ProfessinalServicesData";
import ProfessionalServiceCard from "../../layout/B2BLayout/ProfessionalServicesCard";

const ProfessionalServices = () => {
  return (
  <section className="pb-[22px] px-[22px] lg:py-6" >
    <div className="mx-auto max-w-[1320px]">
    <B2BHeading title="Our Professional Services for Every Project" />

{/* Desktop Grid */}

<div
  className="
    grid-cols-1
    grid
    lg:grid-cols-3
    gap-6
  "
>
  {ProfessionalServicesData.map((item) => (
    <ProfessionalServiceCard
      key={item.id}
      item={item}
    />
  ))}
</div>
      </div>
  </section>
  )
}

export default ProfessionalServices