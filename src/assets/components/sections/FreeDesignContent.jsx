import FreeDesignHeader from "../sections/FreeDesignHeader";
import FreeDesignFreeSection from "../sections/FreeDesignFreeSection";
// import FreeDesignPremiumSection from "./FreeDesignPremiumSection";
import CTASection from "../layout/CTASection";
import { Gift } from "lucide-react";
const FreeDesignContent = () => {
  return (
    <section className="min-w-0">
      {/* Header */}
      <FreeDesignHeader />
      {/* Free Designs */}
      <FreeDesignFreeSection />

       <CTASection
  icon={
    <Gift 
      size={16}
      strokeWidth={2.2}
      className="text-[#7434E5]"
    />
  }
  title=""
  description="Love our free designs? Upgrade to Premium and get exclusive high quality designs!"
  buttonText="Explore Premium Designs"
  titleClass = "text-[28px]"
  sectionWidth = "max-w-[1275px]"
  iconHeight= "h-[52px]"
  iconWidth = "w-[52px]"
/>
    </section>
  );
};

export default FreeDesignContent;