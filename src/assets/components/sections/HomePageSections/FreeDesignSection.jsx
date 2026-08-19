// import { Tag } from "lucide-react"
// import SectionHeading from "../../layout/SectionHeading"
// import OutlineButton from '../../layout/OutlineBtn'
// import PricingSlider from "../../layout/PricingSlider"
// import { FreeDesignData } from "../../common/FreeDesignData";
// import FreeCard from "./DesignCard";
// const FreeDesignSection = () => {
//   return (
//     <section  className="p-[22px]  lg:py-12.5"
//       style={{
//         background:
//           "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
//       }}>
//  <SectionHeading
//         icon={<Tag size={18} />}
//         badge="All Prices shown are start pricing"
//         heading="OUR COMPETITIVE PRICES"
//         description="Affordable Embroidery, Logo and Vector Art Services. Grab Embroidery, Logo and Vector Designs Now"
//         headingClassName ="text-[12px]"
//       />
//         <div
//         className="
//           mb-8
//           flex
//           flex-col
//           gap-4
//           sm:flex-row
//           sm:items-center
//           sm:justify-between
//         "
//       >
//         <div>
//           <p
//             className="
//               text-sm
//               font-bold
//               font-dmSans
//               uppercase
//               tracking-[3px]
//               text-[#6F3DFF]
//             "
//           >
//             Free Designs
//           </p>
//         </div>

//         <OutlineButton title="View All Free Designs" />
//       </div> 

//       {/* Mobile Slider */}

//       <div className="w-full lg:hidden">
//         <PricingSlider
//           data={FreeDesignData}
//           CardComponent={FreeCard}
//           cardProp="design"
//         />
//       </div>

//       {/* Desktop Grid */}

//       <div
//         className="
//           hidden
//           lg:grid
//           lg:grid-cols-3
//           xl:grid-cols-4
//           gap-6
//         "
//       >
//         {freeDesigns.map((design) => (
//           <FreeCard
//             key={design.id}
//             design={design}
//           />
//         ))}
//       </div>
//       <div className="mt-5 lg:mt-10">
//       {/* <CommonTabs
//         tabs={pricingTabs}
//         activeTab={activePricing?.id}
//         setActiveTab={handleTabChange}
//       /> */}
//       </div>

//     </section>
//   )
// }

// export default FreeDesignSection