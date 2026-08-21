import { serviceHeroData } from "../assets/components/common/ServiceHeroData";
import EmbroideryServiceOrder from "../assets/components/sections/ServiceSections/EmbroideryServiceOrder";
import VectorArtServiceOrder from "../assets/components/sections/ServiceSections/VectorArtServiceOrder";
import LogoDesignServiceOrder from "../assets/components/sections/ServiceSections/LogoDesignServiceOrder";

import ServicePageHero from "../assets/components/sections/ServicePageHero";

const serviceSections = [
  {
    hero: serviceHeroData[0],
    OrderComponent: EmbroideryServiceOrder,
  },
  {
    hero: serviceHeroData[1],
    OrderComponent: VectorArtServiceOrder,
  },
  {
    hero: serviceHeroData[2],
    OrderComponent: LogoDesignServiceOrder,
  },
];

const ServicesPage = () => {
  return (
    <main>
      {serviceSections.map(
        ({ hero, OrderComponent }) => (
          <section key={hero.title}>
            <ServicePageHero
              title={hero.title}
              description={hero.description}
              image={hero.image}
              services={hero.services}
            />

            <OrderComponent  />
          </section>
        )
      )}
    </main>
  );
};

export default ServicesPage;