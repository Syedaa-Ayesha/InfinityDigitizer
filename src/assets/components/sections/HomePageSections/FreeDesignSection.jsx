// import SectionHeading from "../../layout/SectionHeading"
// import FreeDesignFreeSection from "../FreeDesignPageSections/FreeDesignFreeSection"

// const FreeDesignSection = () => {
//   return (
//     <section
//          className="
//            mx-auto
//            max-w-[1300px]
           
//            lg:py-[54px]
//          "
//        >
//          {/* ================= SECTION HEADING ================= */}
//    <div className="p-[22px]">
//          <SectionHeading
//              icon={Image}
//              badge="Our Simple Process "
//              heading="Free Designs"
//              description="Browse our collection of free embroidery designs and vector artwork. Download professionally crafted files for printing, embroidery, and creative projects at no cost."
//              desClass="text-[18px] font-light "
//              headingClassName=" capitalize "
//            />
//    </div>
    
//          {/* ================= ACCORDION ================= */}
   
//          <div
//            className="
//              mx-auto
//              mb-9
//              mt-6
//              w-full
             
             
//              lg:max-w-[1300px]
//            "
//          >
//         <FreeDesignFreeSection classname="px-[22px]"/>
//    </div>
//          {/* ================= CTA ================= */}
   
         
//        </section>
//   )
// }

// export default FreeDesignSection


import { Image } from "lucide-react";
import SectionHeading from "../../layout/SectionHeading";
import FreeDesignFreeSection from "../FreeDesignPageSections/FreeDesignFreeSection";
import {
  FreeDesignData,
} from "../../common/FreeDesignData";
import DesignCard from "../../layout/FreeDesignLayout/DesignCard";

const FreeDesignSection = () => {
  return (
    <section
      className="
        mx-auto
        max-w-[1300px]
        
        lg:py-[54px]
      "
    >

      {/* ================= SECTION HEADING ================= */}

      <div className="p-[22px]">

        <SectionHeading
          icon={<Image size={18} />}
          badge="Our Simple Process "
          heading="Free Designs"
          description="Browse our collection of free embroidery designs and vector artwork. Download professionally crafted files for printing, embroidery, and creative projects at no cost."
          desClass="text-[18px] font-light "
          headingClassName=" capitalize "
        />

      </div>

      {/* ================= FREE DESIGNS ================= */}

      <div
        className="
          mx-auto
          mb-9
          mt-6
          w-full
          
          
          lg:max-w-[1300px]
        "
      >

        <FreeDesignFreeSection
          classname="px-[22px]"
          data={FreeDesignData}
          CardComponent={DesignCard}
          sectionTitle="Free Designs"
          viewAllText="View All Free Designs"
        />

      </div>

      {/* ================= CTA ================= */}

    </section>
  );
};

export default FreeDesignSection;