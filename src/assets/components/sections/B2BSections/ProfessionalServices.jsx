import B2BHeading from "../../layout/B2BLayout/B2BHeading"
import  {professionalServicesData} from "../../common/ProfessinalServicesData";
import ServiceCard from "../../layout/B2BLayout/ProfessionalServicesCard";
const ProfessionalServices = () => {
  return (
  <section className="" >
    <div className="mx-auto max-w-[1320px] px-5">
    <B2BHeading title="Our Professional Services for Every Project" />
      <div
        className="
          grid

          grid-cols-1

          gap-6

          sm:grid-cols-2

          xl:grid-cols-3
        "
      >
        {professionalServicesData.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      </div>
  </section>
  )
}

export default ProfessionalServices