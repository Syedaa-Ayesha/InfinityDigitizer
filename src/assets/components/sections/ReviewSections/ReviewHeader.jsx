import { Star } from "lucide-react"
import SectionHeading from "../../layout/SectionHeading"
import StatsSection from "./StateSection"


const ReviewHeader = () => {
  return (
     <section className="bg-[#FFFFFF] p-[22px]">
         <SectionHeading
          icon={<Star size={24} />}
          badge="Reviews"
          heading="Real Businesses. Real Projects. Real Feedback."
          description="Every review reflects a project we've completed with care and commitment. From embroidery digitizing
           to vector artwork and logo designs, we're proud to earn the trust of businesses that choose us for
           consistent and quality results."
           headingClassName="lg:text-[48px] text-[#0C0C30] font-extrablod tracking-[-2px]"
        />
         <StatsSection /></section>

  )
}

export default ReviewHeader