import { Headphones, Star } from "lucide-react"
import CTASection from "../assets/components/layout/CTASection"
import SectionHeading from "../assets/components/layout/SectionHeading"
// import CreativeTeamSection from "../assets/components/sections/ChoooseUsPageSection/CreativeTeamSection";
// import AdvantagesSection from "../assets/components/sections/ChoooseUsPageSection/AdvantagesSection";
import B2BHero from "../assets/components/sections/B2BSections/B2BHero";

const WhyChooseUs = () => {
  return (
   <main className="w-full bg-[#FCFBFF] p-[22px] lg:py-[54px]">
      {/* ================= WHY CHOOSE US ================= */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1400px]
          "
      >
       <SectionHeading
          icon={<Star/>}
          badge="Why Choose Us"
          heading="Why Choose Infinity Digitizing?"
          description="Infinity Digitizing is your trusted partner for premium embroidery digitizing, logo designing and vector art services across the USA, UK, Canada, and Australia. We use advanced, industry leading software programs and we have a skilled team to deliver higher quality, affordable design services for every project."
          desClass="text-[18px] font-light mb-13"
          headingClassName=" capitalize"
        />
        {/* <CreativeTeamSection /> */}
        {/* <AdvantagesSection /> */}
        <B2BHero badge="Our Commitment" heading="The Creative Team Behind Your Best Looking Designs" description ="Every design is created with precision and attention to detail. Whether you need embroidery digitizing, vector artwork, or custom design, our experienced team delivers production-ready files for fast, professional results.
         " />
        <CTASection
  icon={
    <Headphones
      size={30}
      strokeWidth={2.2}
      className="text-[#7434E5]"
    />
  }
  title="Ready to Simplify Your Artwork Process?"
  description="Partner with Infinity Digitizing for reliable embroidery digitizing, vector art, and custom design services. 100% accurate files, fast turnaround, and dependable support."
  buttonText="Get Free Consultation"
  titleClass = "text-[24px]"
 
  bg =" bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
 
/>
      </section>
    </main>
  )
}

export default WhyChooseUs