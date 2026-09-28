
import ServiceHero from "../assets/components/sections/ServiceDetailsPagesSection/ServiceHero";
import capImage from "../assets/images/ServiceHeroImage03.png";

import { serviceCards } from "../assets/components/common/ServiceCardsData";

const CapDigitizingPage = () => {
  const capService = serviceCards.embroidery.find(
    (service) => service.slug === "cap-digitizing"
  );

  const hero = capService?.detail?.heroSection;

  return (
    <ServiceHero
      category={hero?.category}
      title={hero?.title}
      description={hero?.description}
      image={capImage}
    />
  );
};

export default CapDigitizingPage;