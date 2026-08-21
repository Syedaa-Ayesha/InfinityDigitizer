import Hero from "../assets/components/sections/HomePageSections/Hero"
import ServiceForm from "../assets/components/sections/HomePageSections/ServiceForm"
import PortfolioSlider from "../assets/components/sections/HomePageSections/Portfolio";
import Services from "../assets/components/sections/HomePageSections/Services";
import OrderProcess from "../assets/components/sections/HomePageSections/OrderProcess";
import ChooseUs from "../assets/components/sections/HomePageSections/ChooseUs";
import PricingSection from "../assets/components/sections/HomePageSections/PricingSection";
import FAQ from "../assets/components/sections/HomePageSections/FAQ";
import Testimonial from "../assets/components/sections/HomePageSections/Testimonial";
import FreeDesignSection from "../assets/components/sections/HomePageSections/FreeDesignSection";
const Home = () => {
  return (

<>
       <Hero />
       <ServiceForm />
       <PortfolioSlider/>
       <Services/>
       <OrderProcess/>
       <ChooseUs/>
       <PricingSection/>
       <FreeDesignSection />
       <FAQ/>
       <Testimonial />
       </>
  )
}

export default Home