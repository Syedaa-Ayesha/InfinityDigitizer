import FreeDesignHeader from "../sections/FreeDesignHeader";
import FreeDesignFreeSection from "./FreeDesignFreeSection";
import FreeDesignPremiumSection from "./FreeDesignPremiumSection";
import CTASection from "../layout/CTASection";
import { Lock, Gift } from "lucide-react";
const FreeDesignContent = () => {
  return (
    <section className="min-w-0">
      {/* Header */}
      <FreeDesignHeader />

      {/* Free Designs */}
      <FreeDesignFreeSection />

      {/* Divider */}
      <div className="my-14 flex justify-center">
        <div className="relative w-full border-t border-gray-200">
          <div className="absolute left-1/2 -top-5 -translate-x-1/2 h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center">
            <Lock size={16} stroke="#6B7280" />
          </div>
        </div>
      </div>

      {/* Premium Designs */}
      <FreeDesignPremiumSection />
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
