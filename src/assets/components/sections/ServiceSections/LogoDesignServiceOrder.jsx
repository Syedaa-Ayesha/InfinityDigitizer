import { serviceCards } from "../../common/ServiceCardsData";
import ServiceCardsSection from "../ServiceSections/ServiceCardSection";

const LogoDesignServiceOrder = () => {
  return (
    <ServiceCardsSection data={serviceCards.logo} />
  );
};
export default LogoDesignServiceOrder;