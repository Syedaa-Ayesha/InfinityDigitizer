import { serviceCards } from "../common/ServiceCardsData";
import ServicePageCard from "../layout/ServicePageCard";

const LogoDesignServiceOrder = () => {
  return (
    <section className="py-4">
          <div className="mx-auto max-w-[1320px]">
    
            <div
              className="
              grid
              grid-cols-1
              gap-7
    
              sm:grid-cols-1
              lg:grid-cols-3
            "
            >
              {serviceCards.logo.map((item) => (
                <ServicePageCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
    
          </div>
        </section>
  )
}

export default LogoDesignServiceOrder