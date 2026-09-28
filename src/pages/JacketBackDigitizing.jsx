import ServiceHero from "../assets/components/sections/ServiceDetailsPagesSection/ServiceHero";
import { serviceCards } from "../assets/components/common/ServiceCardsData";

const JacketBackDigitizingPage = () => {
  const service = serviceCards.embroidery.find(
    (item) => item.slug === "jacket-back-digitizing"
  );

  const hero = service?.detail?.heroSection;

  return (
    <ServiceHero
      category={hero?.category}
      title={hero?.title}
      description={hero?.description}
      image={service?.image}
    />
  );
};

export default JacketBackDigitizingPage;