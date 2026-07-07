import Hero from "../assets/components/sections/Hero"
import LoginSubmissionPortal from "../assets/components/sections/LoginSubmissionPortal"
import PortfolioSlider from "../assets/components/sections/PortfolioSlider";
import Services from "../assets/components/sections/Services";
import OrderProcess from "../assets/components/sections/OrderProcess";
import ChooseUs from "../assets/components/sections/ChooseUs";
import Portfolio from "../assets/components/sections/Portfolio";
import PricingSection from "../assets/components/sections/PricingSection";
import FAQ from "../assets/components/sections/FAQ";
import Testimonial from "../assets/components/sections/Testimonial";
const Home = () => {
  return (

<main className="">
       <Hero />
       <LoginSubmissionPortal />
       <PortfolioSlider/>
       <Services/>
       <OrderProcess/>
       <ChooseUs/>
       <PricingSection/>
       <Portfolio/>
       <FAQ/>
       <Testimonial />
       </main>
  )
}

export default Home