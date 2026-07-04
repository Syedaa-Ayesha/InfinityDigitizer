import Hero from "../assets/components/sections/Hero"
import LoginSubmissionPortal from "../assets/components/sections/LoginSubmissionPortal"
import PortfolioSlider from "../assets/components/sections/PortfolioSlider";
import Services from "../assets/components/sections/Services";
import OrderProcess from "../assets/components/sections/OrderProcess";
import ChooseUs from "../assets/components/sections/ChooseUs";
const Home = () => {
  return (

<main className="">
       <Hero />
       <LoginSubmissionPortal />
       <PortfolioSlider/>
       <Services/>
       <OrderProcess/>
       <ChooseUs/>
       </main>
  )
}

export default Home