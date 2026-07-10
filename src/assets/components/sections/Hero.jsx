// import Navbar from "../layout/Navbar"
import HeroContentCard from "../common/HeroContentCard"
import HeroLogoContainer from "../common/HeroLogoContainer"
import ServiceRibbon from "../common/ServiceRibbon"
const Hero = () => {
  return (
    <>
    <section className="" style={{
    background:
      "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
  }}>
     {/* <Navbar/> */}
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