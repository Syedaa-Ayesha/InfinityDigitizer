import B2BHero from "../assets/components/sections/B2BSections/B2BHero"
import BusinessServe from "../assets/components/sections/B2BSections/BusinessServe"
import B2BWhyChooseUs from "../assets/components/sections/B2BSections/B2BWhyChooseUs"
import ProfessionalServices from "../assets/components/sections/B2BSections/ProfessionalServices"
import ProcessWork from "../assets/components/sections/B2BSections/ProcessWork"
import TrustedPartnership from "../assets/components/sections/B2BSections/TrustedPartnership"
import CTASection from "../assets/components/layout/CTASection"
import { ArrowRight, Headphones } from "lucide-react"
import SolidButton from "../assets/components/layout/SolidButton"

const B2B = () => {
  return (
    <>
   <B2BHero />
   <BusinessServe/>
   <B2BWhyChooseUs />
   <ProfessionalServices />
   <ProcessWork />
   <TrustedPartnership />
   <CTASection
  icon={
    <Headphones
      size={38}
      strokeWidth={2.2}
      className="text-[#7434E5]"
    />
  }
  title="Your Artwork Deserves the Best!"
  description="Upload it now, and our team will turn it into a clean, high
quality file, fast, accurate, no errors, no delays, just quality 
work"
  buttonText="Get Free Quote"
  titleClass = "text-[28px]"
  sectionWidth = "w-[1330px]"
  iconHeight= "h-[96px]"
  iconWidth = "w-[96px]"
  bg =" bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)]"
  Solidbtn ={<SolidButton
      title="Get Started"
      Icon={ArrowRight}
    />}
 
/>
   </>
  )
}

export default B2B