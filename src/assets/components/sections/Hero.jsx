import Navbar from "../layout/Navbar"
import HeroContentCard from "../common/HeroContentCard"
import HeroLogoContainer from "../common/HeroLogoContainer"
import ServiceRibbon from "../common/ServiceRibbon"
const Hero = () => {
  return (
    <>
    <section className="">
     <Navbar/>
     <div className="px-[70px] flex justify-around py-12">
  <HeroContentCard />
  <HeroLogoContainer />
</div>
<ServiceRibbon/>
    </section>
    </>
  )
}

export default Hero