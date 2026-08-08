import B2BHero from "../assets/components/sections/B2BSections/B2BHero"
import BusinessServe from "../assets/components/sections/B2BSections/BusinessServe"
import B2BWhyChooseUs from "../assets/components/sections/B2BSections/B2BWhyChooseUs"
import ProfessionalServices from "../assets/components/sections/B2BSections/ProfessionalServices"
import ProcessWork from "../assets/components/sections/B2BSections/ProcessWork"
import TrustedPartnership from "../assets/components/sections/B2BSections/TrustedPartnership"
import SolidButton from "../assets/components/layout/SolidButton"
import { ArrowRight, Headphones, Phone } from "lucide-react";
import B2BCTA from "../assets/components/layout/B2BLayout/B2BCTA"
import OutlineBtn from "../assets/components/layout/OutlineBtn"


const B2BPage = () => {
  return (
    <>
   <B2BHero />
   <BusinessServe/>
   <B2BWhyChooseUs />
   <ProfessionalServices />
   <ProcessWork />
   <TrustedPartnership />
   <div className="max-w-[1350px] mx-auto mb-5">

<B2BCTA
  icon={
    <Headphones
      size={26}
      className="text-[#7434E5]"
    />
  }
  title="Your Complete B2B Artwork Solution Starts Here"
  description="Everything you need to bring your ideas to life under one roof. We provide reliable artwork solutions designed to support your business at every stage."
  buttons={
    <>
      <SolidButton
        title="Become a B2B Partner"
        Icon={ArrowRight}
      />

      <OutlineBtn
        title="Get Free Consultation"
        Icon={Phone}
        classname="flex-row-reverse justify-center"
      />
    </>
  }
/>
            </div>
   </>
   
  )
}

export default B2BPage