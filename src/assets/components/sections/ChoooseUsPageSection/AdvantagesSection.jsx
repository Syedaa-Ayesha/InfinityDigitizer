// import { advantagesData } from "../../common/AdvantageData";
// import SectionHeading from "../../layout/SectionHeading";
// import AdvantageCard from "../../layout/WhyChooseLayout/AdvantageCard";

// const AdvantagesSection = () => {
//   return (
//     <section
//       className="
//         w-full
//         bg-[#FAF9FC]
//         px-4
//         py-12
//         sm:px-6
//         lg:px-8
//         lg:py-14
//       "
//     >
//       <div
//         className="
//           mx-auto
//           w-full
//           max-w-[1320px]
//         "
//       >

//         {/* ================= HEADING ================= */}

//         <div className="mb-8 text-center">
//           <h2
//             className="
//               font-dmSans
//               text-[24px]
//               font-bold
//               leading-[32px]
//               text-[#0C0C30]
//               sm:text-[28px]
//               sm:leading-[36px]
//               lg:text-[25px]
//               lg:leading-[32px]
//             "
//           >
            
//           </h2>
          
//  <SectionHeading
               
//                 badge="OUR EASY ORDER PROCESS"
//                 heading={
//                     <>
//                        The Advantages of Working With Infinity Digitizing
//                     </>
//                 }
                
//             />
//           {/* Purple underline */}

//           <div
//             className="
//               mx-auto
//               mt-[10px]
//               h-[3px]
//               w-[40px]
//               rounded-full
//               bg-[#7434E5]
//             "
//           />
//         </div>

//         {/* ================= CARDS ================= */}

//         <div
//           className="
//           mt-12
//             grid
//             grid-cols-1
//             gap-7
//             sm:grid-cols-2
//             lg:grid-cols-3
//           "
//         >
//           {advantagesData.map((item) => (
//             <AdvantageCard
//               key={item.id}
//               icon={item.icon}
//               title={item.title}
//               description={item.description}
//               image={item.image}
//             />
//           ))}
//         </div>

//       </div>
     
//     </section>
//   );
// };

// export default AdvantagesSection;

import { advantagesData } from "../../common/AdvantageData"; import SectionHeading from "../../layout/SectionHeading"; import AdvantageCard from "../../layout/WhyChooseLayout/AdvantageCard"; const AdvantagesSection = () => { return ( <section className="w-full bg-[#FAF9FC] px-4 py-12 sm:px-6 lg:px-8 lg:py-14"> <div className="mx-auto w-full max-w-[1320px]"> {/* ================= HEADING ================= */} <div clas sName="text-center"> <SectionHeading badge="OUR EASY ORDER PROCESS" heading="The Advantages of Working With Infinity Digitizing" /> <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-[#7434E5]" /> </div> {/* ================= CARDS ================= */} <div className=" mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 " > {advantagesData.map((item) => ( <AdvantageCard key={item.id} icon={item.icon} title={item.title} description={item.description} image={item.image} /> ))} </div> </div> </section> ); }; export default AdvantagesSection;