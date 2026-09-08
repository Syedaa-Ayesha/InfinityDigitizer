import { FileText } from "lucide-react";
import CTASection from "../assets/components/layout/CTASection";
import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb";
import MapHero from "../assets/components/sections/SiteMapSections/MapHero";
import MapSection from "../assets/components/sections/SiteMapSections/MapSection";
import { useNavigate } from "react-router-dom";

const SitemapPage = () => {
     const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-white pb-[56px]">

      {/* Top Border */}
      <div className="h-[3px] bg-[#4338CA]" />

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <Breadcrumb/>

        <MapHero />

        <MapSection />
<CTASection
  icon={
    <FileText
      size={30}
      strokeWidth={2.2}
      className="text-[#7434E5]"
    />
  }
  title="Still Can't Find What You're Looking For?"
  description="Our support team is always here to help you.
Get in touch and we'll guide you to the right place."
  buttonText="Contact Us Now"
  titleClass = "text-[24px]"
  bg =" bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)] shadow-[0px_18px_40px_rgba(75,36,143,0.3)]"
   onClick={() => navigate("/contactus")}
 
/>
      </div>
    </main>
  );
};

export default SitemapPage;