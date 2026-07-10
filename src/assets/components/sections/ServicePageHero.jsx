
// import ServiceHeroImage01 from "../../images/ServiceHeroImage01.png";
import ServiceHighlights from "../common/ServiceHighlights"

const ServicePageHero = ({
  title,
  description,
  services,
  image,
  reverse = false,
}) => {
  return (
      <section className="py-[34px]">
      <div
        className={`
          mx-auto
          flex
          max-w-[1320px]
          items-center
          justify-between
          gap-10
          rounded-[24px]
          border
          border-[#E7E3ED]
          bg-white
          p-8
          ${reverse ? "flex-row-reverse" : ""}
        `}
      >
        {/* Left */}

        <div className="flex w-[48%] flex-col gap-6">
          <h1
            className="
              max-w-[480px]
              font-dmSans
              text-[48px]
              font-extrabold
              leading-[60px]
              tracking-[-0.04em]
              text-[#0F1729]
            "
          >
            {title}
          </h1>

          <p
            className="
              max-w-[580px]
              font-inter
              text-[16px]
              leading-[20px]
              text-[#6B7280]
            "
          >
            {description}
          </p>

          <div className="mb-4 flex flex-wrap gap-6">
            {services.map((service, index) => (
              <ServiceHighlights
                key={index}
                title={service.title}
                Icon={service.Icon}
              />
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="relative w-[52%]">
          <div className="h-[500px] overflow-hidden rounded-[24px]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePageHero