import { serviceHeroData } from "../assets/components/common/ServiceHeroData";

import EmbroideryServiceOrder from "../assets/components/sections/ServiceSections/EmbroideryServiceOrder";
import VectorArtServiceOrder from "../assets/components/sections/ServiceSections/VectorArtServiceOrder";
import LogoDesignServiceOrder from "../assets/components/sections/ServiceSections/LogoDesignServiceOrder";

import ServicePageHero from "../assets/components/sections/ServiceSections/ServicePageHero";
import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb";

const serviceSections = [
  {
    id: "embroidery-digitizing",
    hero: serviceHeroData[0],
    OrderComponent: EmbroideryServiceOrder,
  },
  {
    id: "vector-art",
    hero: serviceHeroData[1],
    OrderComponent: VectorArtServiceOrder,
  },
  {
    id: "logo-design",
    hero: serviceHeroData[2],
    OrderComponent: LogoDesignServiceOrder,
  },
];

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb />

      <main>
        {serviceSections.map(({ id, hero, OrderComponent }) => (
          <section key={id} id={id}>
            <ServicePageHero
              title={hero.title}
              description={hero.description}
              image={hero.image}
              services={hero.services}
            />

            <OrderComponent />
          </section>
        ))}
      </main>
    </>
  );
};

export default ServicesPage;