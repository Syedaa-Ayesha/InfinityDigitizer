import { Headphones, Star } from "lucide-react";
import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb";
import CTASection from "../assets/components/layout/CTASection";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../assets/components/layout/SectionHeading";
import AdvantagesSection from "../assets/components/sections/ChoooseUsPageSection/AdvantagesSection";
import CommitmentSection from "../assets/components/sections/ChoooseUsPageSection/CommitmentSection";
const WhyChooseUs = () => {
     const navigate = useNavigate();
    return (
        <>
            <Breadcrumb />
            <main className="w-full bg-[#FCFBFF] px-4 py-5 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-[1400px]">
                    {/* ================= PAGE INTRO ================= */}
                    <SectionHeading icon={<Star size={22} />} badge="Why Choose Us" heading="Why Choose Infinity Digitizing?"
                     description="Infinity Digitizing is your trusted partner for premium embroidery digitizing, logo designing and vector art services across the USA, UK, Canada, and Australia. We use advanced, industry-leading software programs and have a skilled team to deliver high-quality, affordable design services for every project." desClass="mb-10 text-[15px] font-light leading-7 sm:text-[16px] sm:leading-7 lg:mb-12 lg:text-[18px] lg:leading-8" headingClassName="capitalize" /> 

                      {/* ================= COMMITMENT ================= */} 
                    <CommitmentSection /> 

                    {/* ================= ADVANTAGES ================= */} 
                    <AdvantagesSection />
                    
                    {/* ================= CTA ================= */} 
                    <CTASection icon={
                        <Headphones size={30} 
                        strokeWidth={2.2} 
                        className="text-[#7434E5]" />} 
                        title="Ready to Simplify Your Artwork Process?"
                         description="Partner with Infinity Digitizing for reliable embroidery digitizing, vector art, and custom design services. 100% accurate files, fast turnaround, and dependable support." 
                         buttonText="Get Free Consultation" 
                         titleClass="text-[22px] sm:text-[24px]"
                          bg="bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
                          onClick={() => navigate("/contactus")}
                          /> 
                          </div>
                           </main> </>);
};
export default WhyChooseUs;