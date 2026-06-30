import Hero from "../assets/components/sections/Hero"
import LoginSubmissionPortal from "../assets/components/sections/LoginSubmissionPortal"
import PortfolioSlider from "../assets/components/sections/PortfolioSlider";
import Services from "../assets/components/sections/Services";
const Home = () => {
  return (
    <>
<section className="">
       <Hero />
       <LoginSubmissionPortal />
       <PortfolioSlider/>
       <Services/>
       </section>
   </>
  )
}

export default Home