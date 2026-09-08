// // import { ChevronRight } from "lucide-react";

// // const SitemapCard = ({
// //   number,
// //   title,
// //   icon: Icon,
// //   links,
// // }) => {
// //   return (
// //     <div
// //       className="
// //         group
// //      w-full
// //         lg:w-[252px]
// //         h-[274px]
// //         rounded-[20px]
// //         border
// //         border-[#E8E8F0]
// //         bg-white
// //       p-[24px]
// //         shadow-none
// //         transition-all
// //         duration-200
// //         hover:-translate-y-[2px]
// //         hover:shadow-[0_8px_25px_rgba(30,20,50,0.05)]
// //       "
// //     >
// //       {/* Icon */}
// //       <div
// //         className="
// //           flex
// //           h-[52px]
// //           w-[52px]
// //           items-center
// //           justify-center
// //           rounded-full
// //           bg-[#EDE7F9]
// //         "
// //       >
// //         <Icon
// //          skroke="#2E2E40"
// //           size={24}
// //           strokeWidth={1.9}
// //         />
// //       </div>

// //       {/* Title */}
// //       <h2
// //         className="
// //        my-[10px]
// //           max-w-full
// //           text-[18px]
// //           font-dmSans
// //           leading-[1.55]
// //           tracking-[-0.45px]
// //           font-bold
// //           text-[#111118]
// //         "
// //       >
// //         {number}. {title}
// //       </h2>

// //       {/* Divider */}
// //       <div
// //         className="
// //           mt-[11px]
// //           h-px
// //           w-full
// //           bg-[#E9E6ED]
// //         "
// //       />

// //       {/* Links */}
// //       <ul className="mt-[17px] space-y-[9px]">
// //         {links.map((link) => (
// //           <li key={link}>
// //             <a
// //               href="#"
// //               className="
// //                 group/link
// //                 flex
// //                 items-center
// //                 gap-[7px]
// //                 text-[13px]
// //                 font-inter
// //                 leading-[1.4]
// //                 text-[#733AFF]
// //                 transition-colors
// //                 duration-150
// //                 hover:text-[#5420D9]
// //               "
// //             >
// //               <ChevronRight
// //                 size={11}
// //                 strokeWidth={2}
// //                 className="
// //                   shrink-0
// //                   text-[#733AFF]
// //                   transition-transform
// //                   duration-150
// //                   group-hover/link:translate-x-[2px]
// //                 "
// //               />

// //               <span>{link}</span>
// //             </a>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SitemapCard;

// import { ChevronRight } from "lucide-react";

// const SitemapCard = ({
//   number,
//   title,
//   icon: Icon,
//   links,
// }) => {
//   return (
//     <div
//       className="
//        group
//     w-full
//     max-w-[252px]
//     min-h-[260px]

//     rounded-[18px]
//     border
//     border-[#E8E8F0]
//     bg-white
//     p-[18px]

//     sm:min-h-[270px]
//     sm:rounded-[20px]
//     sm:p-[22px]

//     lg:min-h-[274px]
//     lg:p-[24px]

//     shadow-none
//     transition-all
//     duration-200
//     hover:-translate-y-[2px]
//     hover:shadow-[0_8px_25px_rgba(30,20,50,0.05)]
//       "
//     >
//       {/* Icon */}
//       <div
//         className="
//           flex
//           h-[46px]
//           w-[46px]
//           items-center
//           justify-center
//           rounded-full
//           bg-[#EDE7F9]

//           sm:h-[50px]
//           sm:w-[50px]

//           lg:h-[52px]
//           lg:w-[52px]
//         "
//       >
//         <Icon
//           stroke="#2E2E40"
//           size={21}
//           strokeWidth={1.9}
//           className="sm:h-[22px] sm:w-[22px] lg:h-[24px] lg:w-[24px]"
//         />
//       </div>

//       {/* Title */}
//       <h2
//         className="
//           my-[9px]
//           max-w-full
//           text-[16px]
//           font-dmSans
//           font-bold
//           leading-[1.45]
//           tracking-[-0.35px]
//           text-[#111118]

//           sm:my-[10px]
//           sm:text-[17px]

//           lg:text-[18px]
//           lg:leading-[1.55]
//           lg:tracking-[-0.45px]
//         "
//       >
//         {number}. {title}
//       </h2>

//       {/* Divider */}
//       <div
//         className="
//           mt-[10px]
//           h-px
//           w-full
//           bg-[#E9E6ED]
//         "
//       />

//       {/* Links */}
//       <ul
//         className="
//           mt-[14px]
//           space-y-[7px]

//           sm:mt-[16px]
//           sm:space-y-[8px]

//           lg:mt-[17px]
//           lg:space-y-[9px]
//         "
//       >
//         {links.map((link) => (
//             <li key={link.path}>
//             <a
//           to={link.path}
//               className="
//                 group/link
//                 flex
//                 min-w-0
//                 items-center
//                 gap-[6px]
//                 text-[12px]
//                 font-inter
//                 leading-[1.4]
//                 text-[#733AFF]
//                 transition-colors
//                 duration-150
//                 hover:text-[#5420D9]

//                 sm:gap-[7px]
//                 sm:text-[14px]
//               "
//             >
//               <ChevronRight
//                 size={10}
//                 strokeWidth={2}
//                 className="
//                   shrink-0
//                   text-[#733AFF]
//                   transition-transform
//                   duration-150
//                   group-hover/link:translate-x-[2px]

//                   sm:h-[11px]
//                   sm:w-[11px]
//                 "
//               />

//               <span className="min-w-0 truncate">
//                 {link}
//               </span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SitemapCard;

import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SitemapCard = ({
  number,
  title,
  icon: Icon,
  links,
}) => {
  return (
    <div
      className="
        group
        w-full
        max-w-[252px]
        min-h-[260px]
        rounded-[18px]
        border
        border-[#E8E8F0]
        bg-white
        p-[18px]

        sm:min-h-[270px]
        sm:rounded-[20px]
        sm:p-[22px]

        lg:min-h-[274px]
        lg:p-[24px]

        shadow-none
        transition-all
        duration-200
        hover:-translate-y-[2px]
        hover:shadow-[0_8px_25px_rgba(30,20,50,0.05)]
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-[46px]
          w-[46px]
          items-center
          justify-center
          rounded-full
          bg-[#EDE7F9]

          sm:h-[50px]
          sm:w-[50px]

          lg:h-[52px]
          lg:w-[52px]
        "
      >
        <Icon
          stroke="#2E2E40"
          size={21}
          strokeWidth={1.9}
          className="sm:h-[22px] sm:w-[22px] lg:h-[24px] lg:w-[24px]"
        />
      </div>

      {/* Title */}
      <h2
        className="
          my-[9px]
          max-w-full
          text-[16px]
          font-dmSans
          font-bold
          leading-[1.45]
          tracking-[-0.35px]
          text-[#111118]

          sm:my-[10px]
          sm:text-[17px]

          lg:text-[18px]
          lg:leading-[1.55]
          lg:tracking-[-0.45px]
        "
      >
        {number}. {title}
      </h2>

      {/* Divider */}
      <div className="mt-[10px] h-px w-full bg-[#E9E6ED]" />

      {/* Links */}
      <ul
        className="
          mt-[14px]
          space-y-[7px]

          sm:mt-[16px]
          sm:space-y-[8px]

          lg:mt-[17px]
          lg:space-y-[9px]
        "
      >
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="
                group/link
                flex
                min-w-0
                items-center
                gap-[6px]
                text-[12px]
                font-inter
                leading-[1.4]
                text-[#733AFF]
                transition-colors
                duration-150
                hover:text-[#5420D9]

                sm:gap-[7px]
                sm:text-[14px]
              "
            >
              <ChevronRight
                size={10}
                strokeWidth={2}
                className="
                  shrink-0
                  text-[#733AFF]
                  transition-transform
                  duration-150
                  group-hover/link:translate-x-[2px]

                  sm:h-[11px]
                  sm:w-[11px]
                "
              />

              <span className="min-w-0 truncate">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SitemapCard;