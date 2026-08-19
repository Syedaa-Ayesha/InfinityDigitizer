
// import { serviceHeroData } from "../assets/components/common/ServiceHeroData"
// import EmbroideryServiceOrder from "../assets/components/sections/EmbroideryServiceOrder"
// import ServicePageHero from "../assets/components/sections/HomePageSections/ServicePageHero"
// import VectorArtServiceOrder from '../assets/components/sections/VectorArtServiceOrder'
// import LogoDesignServiceOrder from '../assets/components/sections/LogoDesignServiceOrder'
// const ServicesPage = () => {
//   return (
//     <>
//     <ServicePageHero
//   title={serviceHeroData[0].title}
//   description={serviceHeroData[0].description}
//   image={serviceHeroData[0].image}
//   services={serviceHeroData[0].services}
// />
// <EmbroideryServiceOrder/>
// <ServicePageHero
//   title={serviceHeroData[1].title}
//   description={serviceHeroData[1].description}
//   image={serviceHeroData[1].image}
//   services={serviceHeroData[1].services}
// />
// <VectorArtServiceOrder/>
// <ServicePageHero
//   title={serviceHeroData[2].title}
//   description={serviceHeroData[2].description}
//   image={serviceHeroData[2].image}
//   services={serviceHeroData[2].services}
// />
// <LogoDesignServiceOrder/>
//     </>
//   )
// }

// export default ServicesPage



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