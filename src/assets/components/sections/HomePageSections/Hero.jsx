import HeroContentCard from "../../layout/HomeLayout/HeroContentCard";
import HeroLogoContainer from "../../layout/HomeLayout/HeroLogoContainer";
import ServiceRibbon from "../../layout/HomeLayout/ServiceRibbon";

const Hero = () => {
  return (
    <section
      className="w-full"
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
      }}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1320px]
          flex-col
          items-center
          gap-8
          px-4
          py-8

          sm:gap-10
          sm:px-6
          sm:py-10

          md:gap-10
          md:px-8
          md:py-12

          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:gap-10
          lg:px-8
          lg:py-12

          xl:px-0
        "
      >
        {/* Left Content */}
        <div className="w-full min-w-0 lg:w-auto">
          <HeroContentCard />
        </div>

        {/* Right Logo Gallery */}
        <div className="w-full min-w-0 lg:w-auto">
          <HeroLogoContainer />
        </div>
      </div>

      <ServiceRibbon />
    </section>
  );
};

export default Hero;