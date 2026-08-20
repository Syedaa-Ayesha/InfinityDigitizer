import SectionHeading from "../../layout/SectionHeading"
import FreeDesignFreeSection from "../FreeDesignFreeSection"
// import CommonTabs from '../../layout/CommonTab'
const FreeDesignSection = () => {
  return (
    <section
         className="
           mx-auto
           max-w-[1300px]
           p-[22px]
           lg:py-[54px]
         "
       >
         {/* ================= SECTION HEADING ================= */}
   
         <SectionHeading
             icon={Image}
             badge="Our Simple Process "
             heading="Free Designs"
             description="Browse our collection of free embroidery designs and vector artwork. Download professionally crafted files for printing, embroidery, and creative projects at no cost."
             desClass="text-[18px] font-light "
             headingClassName=" capitalize "
           />
   
        
     {/* <div className="mt-5 lg:mt-10">
      <CommonTabs
        tabs={pricingTabs}
       activeTab={activePricing?.id}
       setActiveTab={handleTabChange}
    /> 
     </div> */}
         {/* ================= ACCORDION ================= */}
   
         <div
           className="
             mx-auto
             mb-9
             mt-6
             w-full
             rounded-2xl
             border
             border-[#E7E3ED]
             px-4
             pb-4
             pt-2
             shadow-2xl
             lg:max-w-[1300px]
           "
         >
        <FreeDesignFreeSection classname="border-0 shadow-none"/>
   </div>
         {/* ================= CTA ================= */}
   
         
       </section>
  )
}

export default FreeDesignSection