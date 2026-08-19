import { serviceCards } from "../../common/ServiceCardsData";
import ServiceCardsSection from "../ServiceSections/ServiceCardSection";

const VectorArtServiceOrder = () => {
  return (
    <ServiceCardsSection data={serviceCards.vector} />
  );
};
export default VectorArtServiceOrder;