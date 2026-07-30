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
     <div className=" mx-auto
    flex
    max-w-[1320px]
    flex-col
    items-center
    gap-12

    px-5
    py-12

    sm:px-6

    lg:flex-row
    lg:items-center
    lg:justify-between
    lg:gap-10
    lg:px-8

    xl:px-0">
  <HeroContentCard />
  <HeroLogoContainer />
</div>
<ServiceRibbon/>
    </section>
    </>
  )
}

export default Hero