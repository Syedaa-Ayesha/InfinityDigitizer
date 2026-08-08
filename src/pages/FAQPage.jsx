import FaqSection from "../assets/components/sections/FAQ"
import { MessageCircleQuestionMark } from "lucide-react"
import SectionHeading from "../assets/components/common/SectionHeading"
const FAQPage = () => {
  return (
       <section className="bg-[#FFFFFF] p-[22px] lg:py-16">
  <div className="lg:mx-auto lg:max-w-[1320px] ">
        <SectionHeading
          icon={<MessageCircleQuestionMark size={24} />}
          badge="Ask"
          heading="Frequently Asked Question"
          description="Find Answer to common questions about our embroidery Digitizing, vector art, and logo design services"
          desClass="text-[18px] font-light "
          headingClassName=" capitalize "
        />
         <FaqSection />
        </div>
        </section>
  )
}

export default FAQPage