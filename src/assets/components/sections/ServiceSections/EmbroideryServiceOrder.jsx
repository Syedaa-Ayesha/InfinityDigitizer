import { serviceCards } from "../../common/ServiceCardsData";
import ServiceCardsSection from "../ServiceSections/ServiceCardSection";

const EmbroideryServiceOrder = () => {
  return (
    <ServiceCardsSection data={serviceCards.embroidery} />
  );
};

export default EmbroideryServiceOrder;
