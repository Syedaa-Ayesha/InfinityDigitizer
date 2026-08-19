// import { MessageCircleQuestionMark } from "lucide-react";
// import { FreeDesignData } from "../common/FreeDesignData";
// import FreeCard from "./HomePageSections/DesignCard";
// import OutlineButton from "../layout/OutlineBtn";
// import PricingSlider from "../layout/PricingSlider";
// import SectionHeading from "../layout/SectionHeading";

// const FreeDesignFreeSection = () => {
// //   const freeDesigns = FreeDesignData.filter(
// //     (item) => item.type === "free"
// //   );

//   return (
//     <section className="mt-12">

//       {/* Heading */}
//       <SectionHeading
//           icon={<MessageCircleQuestionMark size={24} />}
//           badge="Ask"
//           heading="Frequently Asked Question"
//           description="Find Answer to common questions about our embroidery Digitizing, vector art, and logo design services"
//           desClass="text-[18px] font-light "
//           headingClassName=" capitalize "
//         /> 
//       <div
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

//     </section>
//   );
// };

// export default FreeDesignFreeSection;