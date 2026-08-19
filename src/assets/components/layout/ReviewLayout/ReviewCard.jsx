// import { Quote } from "lucide-react";

// const ReviewCard = ({ review }) => {
//   return (
//     <article
//       className="
//         flex
//         min-h-[188px]
//         flex-col
//         rounded-[12px]
//         border
//         border-[#E7E3ED]
//         bg-white
//         px-[14px]
//         py-[14px]
//         shadow-[0px_2px_12px_rgba(211,202,226,0.22)]
//         transition-all
//         duration-300
//         hover:-translate-y-0.5
//         hover:shadow-[0px_8px_20px_rgba(75,36,143,0.10)]
//       "
//     >
//       {/* Quote Icon */}

//       <div
//         className="
//           flex
//           h-[22px]
//           w-[22px]
//           shrink-0
//           items-center
//           justify-center
//           rounded-full
//           bg-[#F1EDFD]
//           text-[#7434E5]
//         "
//       >
//         <Quote
//           size={11}
//           strokeWidth={2.5}
//         />
//       </div>

//       {/* Rating */}

//       <div className="mt-[9px] flex items-center gap-[2px]">
//         {[...Array(5)].map((_, index) => (
//           <span
//             key={index}
//             className="
//               text-[9px]
//               leading-none
//               text-[#FFAA00]
//             "
//           >
//             ★
//           </span>
//         ))}
//       </div>

//       {/* Review */}

//       <p
//         className="
//           mt-[8px]
//           font-inter
//           text-[9px]
//           leading-[14px]
//           text-[#424957]
//         "
//       >
//         {review.text}
//       </p>

//       {/* Customer */}

//       <div
//         className="
//           mt-auto
//           flex
//           items-center
//           gap-[8px]
//           border-t
//           border-[#ECEAF0]
//           pt-[9px]
//         "
//       >
//         {/* Avatar */}

//         <div
//           className="
//             flex
//             h-[24px]
//             w-[24px]
//             shrink-0
//             items-center
//             justify-center
//             rounded-full
//             bg-[#F1EDFD]
//             font-dmSans
//             text-[8px]
//             font-semibold
//             text-[#7434E5]
//           "
//         >
//           {review.initials}
//         </div>

//         {/* Name + Country */}

//         <div className="min-w-0">
//           <h3
//             className="
//               truncate
//               font-dmSans
//               text-[9px]
//               font-bold
//               leading-[12px]
//               text-[#0C0C30]
//             "
//           >
//             {review.name}
//           </h3>

//           <p
//             className="
//               mt-[1px]
//               font-inter
//               text-[8px]
//               leading-[10px]
//               text-[#6B7280]
//             "
//           >
//             {review.flag} {review.country}
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ReviewCard;