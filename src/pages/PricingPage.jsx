import PricingPageHero from "../assets/components/sections/PricingPagesections/PricingPageHero"
import EmbroideryDigitizingService from "../assets/components/sections/PricingPagesections/EmbroideryDigitizingService"
import VectorTracingSection from "../assets/components/sections/PricingPagesections/VectorTracingSection"
import LogoDesignSection from "../assets/components/sections/PricingPagesections/LogoDesignSection"
import CTASection from "../assets/components/layout/CTASection"
import ServiceHighlights from "../assets/components/common/ServiceHighlights"
import {Leaf, BanknoteCheck, CreditCard, Headphones, FileSpreadsheet } from "lucide-react"
 const services = [
  {
    title: `Packages That Fit\nYour Budget`,
    Icon: Leaf,
  },
  {
    title: `Affordable\nPackages`,
    Icon: BanknoteCheck,
  },
  {
    title: `No Hidden\nCosts`,
    Icon: CreditCard,
  },
  {
    title: `Custom Quotes\nAvailable`,
    Icon: Headphones,
  },
];
const PricingPage = () => {
 
  return (
    <section className='mx-auto lg:max-w-[1320px] py-6 bg-[#FFFFFF] lg:py-[54px]'>
       
  <PricingPageHero />
   <div className="py-7 lg:py-11">
  <EmbroideryDigitizingService /></div>
  <div className="py-7 lg:py-11">
  <VectorTracingSection /></div>
  <div className="py-7 lg:py-11">
  <LogoDesignSection />
  </div>
 <CTASection
  icon={
    <FileSpreadsheet
      size={30}
      strokeWidth={2.2}
      className="text-[#7434E5]"
    />
  }
  title="Need Something Beyond Our Standard Packages?"
  description="Not every project fits into a fixed package. If you have complex artwork, bulk orders, special requirements, or ongoing business needs, we'll create a custom solution that matches your project and budget."
  buttonText="Get Free Quote"
  titleClass = "text-[24px]"
 
  bg =" bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
 
/>

      {/* Service Highlights */}
      <div className=" mt-7
    mx-auto
    w-fit
    lg:w-full
    max-w-[1310px]
    border-t
    border-[#E7E3ED]
gap-5
    flex
    flex-col

    lg:flex-row
    lg:items-center
    lg:justify-between
    lg:py-7
    lg:px-6 ">
        {services.map((service, index) => (
          <ServiceHighlights
            key={index}
            title={service.title}
            Icon={service.Icon}
            variant="logo"
            width="flex-1"
            isLast={index === services.length - 1}
          />
        ))}
      </div>
  </section>
  )
}

export default PricingPage