// // // import { serviceMenuData } from "../common/ServiceMenuData";
// // // import ServiceCard from "./ServiceCard";

// // import vector21 from '../../images/Vector 21.png'
// // import vector23 from '../../images/Vector 23.png'
// // import MegaMenuCard from "../layout/MegaMenuCard";
// // import { MegaMenuData } from "../common/MegaMenuData";
// // const MegaMenu = () => {

// //   return (
// //      <div
// //       className="
// //       absolute
// //       top-6
// //       z-50
// //       w-[1114px]
// //       h-[591px]
// //       -translate-x-1/4
// //       rounded-[18px]
// //       border
// //       border-[#FFFFFF]
// //       bg-white
// //       p-5
// //       "
// //      style={{
// //     boxShadow:
// //       "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
// //   }}
// //     >
// //       {/* Triangle */}

// //       <div
// //         className="
// //         absolute
// //         -top-2
// //         left-1/4
// //         h-5
// //         w-7
// //         -translate-x-1/2
// //          rotate-45
// //         border-l
// //         border-t
// //         border-[#ECECEC]
// //         bg-white
// //         "
// //       />

// //       {/* Badge */}

// //       <div className="flex justify-center">

// //         <div
// //           className="
// //           flex
// //           items-center
// //           gap-3
// //           font-semibold
// //           uppercase
// //           tracking-[2px]
// //           text-[#7434E5]
// //           font-inter 
// //           text-[14px]
// //           "
// //         >
// //           {/* <span>adfd<span/> */}
// // <img src={vector23} alt="vector 23" />
// //           OUR SERVICES

// //           <img src={vector21} alt="vector 21" />

// //         </div>

// //       </div>

// //       {/* Heading */}

// //       <h2
// //         className="
// //         mt-4
// //         text-center
// //         font-inter
// //         text-[36px]
// //         font-semibold
// //         text-[#000000]
// //         "
// //       >
// //         Choose the service that fits your needs
// //       </h2>

// //       {/* Subtitle */}

// //       <p
// //         className="
// //         text-center
// //         text-[14px]
// //         font-medium
// //         font-inter
// //         text-[#000000]
// //         "
// //       >
// //         High quality. Fast turnaround. 100% satisfaction guaranteed.
// //       </p>

// //       {/* Cards */}

// //       <div className="mt-5 grid grid-cols-3 gap-[18px]">

// //         {MegaMenuData.map((service) => (

// //           <MegaMenuCard
// //             key={service.id}
// //             {...service}
// //           />

// //         ))}

// //       </div>

// //     </div>
// //   )
// // }

// // export default MegaMenu



// import vector21 from "../../images/Vector 21.png";
// import vector23 from "../../images/Vector 23.png";

// import MegaMenuCard from "../layout/MegaMenuCard";
// import { MegaMenuData } from "../common/MegaMenuData";

// const MegaMenu = ({
//   mobile = false,
//   onNavigate,
// }) => {
//   return (
//     <div
//       className={`
//         ${
//           mobile
//             ? `
//               relative
//               w-full
//               h-auto
//               rounded-2xl
//               border
//               border-white/20
//               bg-white
//               p-4
//             `
//             : `
//               absolute
//               top-6
//               z-50
//               w-[1114px]
//               h-[591px]
//               -translate-x-1/4
//               rounded-[18px]
//               border
//               border-[#FFFFFF]
//               bg-white
//               p-5
//             `
//         }
//       `}
//       style={{
//         boxShadow:
//           "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
//       }}
//     >

//       {/* ================= DESKTOP TRIANGLE ================= */}

//       {!mobile && (
//         <div
//           className="
//             absolute
//             -top-2
//             left-1/4
//             h-5
//             w-7
//             -translate-x-1/2
//             rotate-45
//             border-l
//             border-t
//             border-[#ECECEC]
//             bg-white
//           "
//         />
//       )}


//       {/* ================= BADGE ================= */}

//       <div className="flex justify-center">

//         <div
//           className="
//             flex
//             items-center
//             gap-3
//             font-inter
//             text-[12px]
//             font-semibold
//             uppercase
//             tracking-[2px]
//             text-[#7434E5]
//             sm:text-[14px]
//           "
//         >

//           <img
//             src={vector23}
//             alt=""
//             className="h-auto w-auto"
//           />

//           <span>OUR SERVICES</span>

//           <img
//             src={vector21}
//             alt=""
//             className="h-auto w-auto"
//           />

//         </div>

//       </div>


//       {/* ================= HEADING ================= */}

//       <h2
//         className="
//           mt-3
//           text-center
//           font-inter
//           text-[22px]
//           font-semibold
//           leading-tight
//           text-[#000000]
//           sm:text-[28px]
//           lg:mt-4
//           lg:text-[36px]
//         "
//       >
//         Choose the service that fits your needs
//       </h2>


//       {/* ================= SUBTITLE ================= */}

//       <p
//         className="
//           mt-2
//           text-center
//           font-inter
//           text-[12px]
//           font-medium
//           leading-5
//           text-[#000000]
//           sm:text-[14px]
//         "
//       >
//         High quality. Fast turnaround. 100% satisfaction guaranteed.
//       </p>


//       {/* ================= CARDS ================= */}

//      <div
//   className={`
//     ${
//       mobile
//         ? `
//           relative
//           w-full
//           h-auto
//           max-h-[calc(100vh-80px)]
//           overflow-y-auto
//           overflow-x-hidden
//           rounded-2xl
//           border
//           border-white/20
//           bg-white
//           p-4

//           [scrollbar-width:none]
//           [-ms-overflow-style:none]
//           [&::-webkit-scrollbar]:hidden
//         `
//         : `
//           absolute
//           top-6
//           z-50
//           w-[1114px]
//           h-[591px]
//           -translate-x-1/4
//           rounded-[18px]
//           border
//           border-[#FFFFFF]
//           bg-white
//           p-5
//         `
//     }
//   `}
//   style={{
//     boxShadow:
//       "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
//   }}
// >

//         {MegaMenuData.map((service) => (
//           <MegaMenuCard
//             key={service.id}
//             {...service}
//             mobile={mobile}
//             onNavigate={onNavigate}
//           />
//         ))}

//       </div>

//     </div>
//   );
// };

// export default MegaMenu;


import vector21 from "../../images/Vector 21.png";
import vector23 from "../../images/Vector 23.png";

import MegaMenuCard from "../layout/MegaMenuCard";
import { MegaMenuData } from "../common/MegaMenuData";

const MegaMenu = ({ mobile = false, onNavigate }) => {
  return (
    <div
      className={`
        ${
          mobile
            ? `
              relative
              z-[1000]
              flex
              w-full
              max-h-[calc(100vh-90px)]
              flex-col
              overflow-y-auto
              overflow-x-hidden
              rounded-2xl
              border
              border-[#E7E3ED]
              bg-white
              p-4

              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            `
            : `
              absolute
              top-6
              z-[1000]
              h-[591px]
              w-[1114px]
              -translate-x-1/4
              rounded-[18px]
              border
              border-[#FFFFFF]
              bg-white
              p-5
              shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]
            `
        }
      `}
    >
      {/* ================= TRIANGLE ================= */}

      {!mobile && (
        <div
          className="
            absolute
            -top-2
            left-1/4
            h-5
            w-7
            -translate-x-1/2
            rotate-45
            border-l
            border-t
            border-[#ECECEC]
            bg-white
          "
        />
      )}

      {/* ================= HEADER ================= */}

      <div className="shrink-0">
        {/* Badge */}

        <div className="flex justify-center">
          <div
            className="
              flex
              items-center
              gap-2
              font-inter
              text-[11px]
              font-semibold
              uppercase
              tracking-[1.5px]
              text-[#7434E5]

              sm:gap-3
              sm:text-[14px]
              sm:tracking-[2px]
            "
          >
            <img
              src={vector23}
              alt=""
              className="h-auto w-auto"
            />

            <span>OUR SERVICES</span>

            <img
              src={vector21}
              alt=""
              className="h-auto w-auto"
            />
          </div>
        </div>

        {/* Heading */}

        <h2
          className="
            mt-3
            text-center
            font-inter
            text-[21px]
            font-semibold
            leading-tight
            text-[#000000]

            sm:text-[28px]

            lg:mt-4
            lg:text-[36px]
          "
        >
          Choose the service that fits your needs
        </h2>

        {/* Subtitle */}

        <p
          className="
            mt-2
            text-center
            font-inter
            text-[11px]
            font-medium
            leading-5
            text-[#000000]

            sm:text-[14px]
          "
        >
          High quality. Fast turnaround. 100% satisfaction guaranteed.
        </p>
      </div>

      {/* ================= CARDS ================= */}

      <div
        className={`
          mt-5

          ${
            mobile
              ? `
                grid
                grid-cols-1
                gap-4

                sm:grid-cols-2
                sm:gap-5
              `
              : `
                grid
                grid-cols-3
                gap-[18px]
              `
          }
        `}
      >
        {MegaMenuData.map((service) => (
          <MegaMenuCard
            key={service.id}
            {...service}
            mobile={mobile}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;