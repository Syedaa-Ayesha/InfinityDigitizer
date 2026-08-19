// import { Check } from "lucide-react";

// const PricingCard = ({
//   title,
//   price,
//   logoType,
//   features,
//   active,
// }) => {
//   return (
//     <div
//       className={`
//         relative
//         w-93
//         h-147
//         rounded-3xl
//         overflow-hidden
//         transition-all
//         duration-300
//         bg-white
        

//         ${
//           active
//             ? "border border-[#7434E5]"
//             : "border border-[#ECECEC] shadow-[0_12px_35px_rgba(0,0,0,.08)]"
//         }
//       `}
//       style={{
//         background:
//           "linear-gradient(227.68deg, rgba(116,52,229,.12) 2.34%, rgba(116,52,229,0) 30%, rgba(116,52,229,0) 65%, rgba(116,52,229,.12) 97.66%), #fff",
//       }}
//     >
//       {/* Top */}
// <div className="flex  flex-col gap-11.5 ">
//       <div className="px-9 pt-10.5">

//         <h4 className="uppercase font-dmSans text-[24px] font-bold text-[#757575]">
//           {title}
//         </h4>

//         <div className=" flex items-end">

//           <span className="text-[84px] font-dmSans tracking-[-6px]  text-black font-extrabold leading-none">
//            $ {price}
//           </span>
// <span className="ml-1 text-[84px] font-black leading-24 text-[#7434E5]">
//             /
//           </span>
//           <span className="font-inter mb-1 text-[20px] font-semibold text-[#757575]">
//             {logoType}
//           </span>

//         </div>


//         <div className="mt-11.5 h-0.5 rounded-full bg-[#7434E5]" />
//       </div>

//       {/* Features */}

//       <div className=" px-8">

//         {features.map((feature, index) => (

//           <div
//             key={index}
//             className="mb-6 flex items-center gap-4"
//           >

//             <div className="flex h-5.25 w-5.25 items-center justify-center rounded-full border-2 border-[#7434E5]">

//               <Check
                
//                 strokeWidth={2}
//                 className="text-[#7434E5] "
//               />

//             </div>

//             <p className="text-base font-medium uppercase text-[#757575]">
//               {feature}
//             </p>

//           </div>

//         ))}

//       </div>

//       {/* Button */}

//       <div className="absolute bottom-15.5 left-0 right-0 flex justify-center">

//         <button
//           className="
//           h-12
//           w-41.25
//           rounded-full
//           background: linear-gradient(94.89deg, #6724DB 0%, #5116B6 100%)
//           text-white
//           font-semibold
//           transition-all
//           duration-300
//           hover:scale-105
//           "
//         >
//           Order Now →
//         </button>

//       </div>
//     </div>
//     </div>
//   );
// };

// export default PricingCard;


// import { Check, ArrowRight } from "lucide-react";
// const PricingCard = ({ item }) => {
//   return (
//     <div
//       className="
//         pricing-card
//         relative
//         flex
//         h-[368px]
//         w-full
//         max-w-[360px]
//         mx-auto
//         flex-col
//         overflow-hidden
//         rounded-[16px]
//         border
//         border-transparent
//         bg-white
//         px-[22px]
//         py-[22px]
//         shadow-[0px_12px_28px_rgba(0,0,0,0.14)]
//         transition-all
//         duration-500
//         ease-out
//       "
//     >
//       {/* =========================================
//           TITLE
//       ========================================== */}

//       <div className="relative z-10 text-center">
//         <h3
//           className="
//             font-dmSans
//             text-[16px]
//             font-bold
//             uppercase
//             leading-[20px]
//             text-[#777777]
//           "
//         >
//           {item.title}
//         </h3>

//         {/* =========================================
//             PRICE
//         ========================================== */}

//         <div className="mt-[18px] flex items-end justify-center">
//           <span
//             className="
//               font-dmSans
//               text-[54px]
//               font-bold
//               leading-[54px]
//               tracking-[-2px]
//               text-black
//             "
//           >
//             ${item.price}
//           </span>

//           <span
//             className="
//               mb-[7px]
//               ml-[8px]
//               font-dmSans
//               text-[48px]
//               font-bold
//               leading-[44px]
//               text-[#7434E5]
//             "
//           >
//             /
//           </span>

//           <span
//             className="
//               mb-[7px]
//               ml-[7px]
//               font-dmSans
//               text-[13px]
//               font-medium
//               uppercase
//               text-[#777777]
//             "
//           >
//             {item.unit || "LOGO"}
//           </span>
//         </div>
//       </div>

//       {/* =========================================
//           DIVIDER
//       ========================================== */}

//       <div className="mt-[24px] h-[1.5px] w-full bg-[#7434E5]" />

//       {/* =========================================
//           FEATURES
//       ========================================== */}

//       <div className="mt-[22px] flex flex-1 flex-col">
//         {item.features?.map((feature, index) => (
//           <div
//             key={index}
//             className="
//               flex
//               items-center
//               gap-[7px]
//               py-[6px]
//             "
//           >
//             <Check
//               size={16}
//               strokeWidth={2}
//               className="
//                 shrink-0
//                 text-[#7434E5]
//               "
//             />

//             <span
//               className="
//                 font-dmSans
//                 text-[11px]
//                 font-medium
//                 uppercase
//                 leading-[16px]
//                 text-[#6B6B6B]
//               "
//             >
//               {feature}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* =========================================
//           ORDER BUTTON
//       ========================================== */}

//       <div className="flex justify-center">
//         <button
//           type="button"
//           className="
//             flex
//             h-[34px]
//             min-w-[128px]
//             items-center
//             justify-center
//             gap-[8px]
//             rounded-full
//             bg-[#6420D7]
//             px-[20px]
//             font-dmSans
//             text-[11px]
//             font-semibold
//             text-white
//             shadow-[0px_6px_15px_rgba(100,32,215,0.25)]
//             transition-all
//             duration-300
//             hover:bg-[#7434E5]
//             hover:shadow-[0px_8px_20px_rgba(100,32,215,0.35)]
//           "
//         >
//           Order Now
//           <ArrowRight size={14} strokeWidth={2.5} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PricingCard;





import { Check } from "lucide-react";

const PricingCard = ({ item }) => {
  return (
    <div
      className="
        pricing-card
        relative
        flex
        h-[378px]
        w-[320px]
        flex-col
        rounded-[15px]
        border
        border-transparent
        bg-white
        px-[22px]
        py-[22px]
        shadow
        transition-all
        duration-500
        ease-out

        lg:h-[368px]
        lg:px-[22px]
        lg:py-[22px]
      "
    >
      {/* ================= TITLE ================= */}

      <h3
        className="
          min-h-[22px]
          text-center
          font-dmSans
          text-base
          font-semibold
          leading-[22px]
          text-[#6D6D75]
          uppercase
        "
      >
        {item.title}
      </h3>

      {/* ================= PRICE ================= */}

      <div
        className="
          mt-[14px]
          flex
          items-baseline
          justify-center
          whitespace-nowrap
        "
      >
        <span
          className="
            font-dmSans
            text-[54px]
            font-bold
            leading-none
            tracking-[-2px]
            text-black
          "
        >
          ${item.price}
        </span>

        <span
          className="
            mx-[7px]
            font-dmSans
            text-[46px]
            font-bold
            leading-none
            text-[#7434E5]
          "
        >
          /
        </span>

        <span
          className="
            font-dmSans
            text-[13px]
            font-semibold
            uppercase
            text-[#77777F]
          "
        >
          {item.logoType}
        </span>
      </div>

      {/* ================= DIVIDER ================= */}

      <div
        className="
          mt-[22px]
          h-[1.5px]
          w-full
          bg-[#7434E5]
        "
      />

      {/* ================= FEATURES ================= */}

      <ul
        className="
          mt-[23px]
          flex
          flex-col
          gap-[14px]
        "
      >
        {item.features.map((feature, index) => (
          <li
            key={`${item.id}-${index}`}
            className="
              flex
              items-center
              gap-[8px]
              font-inter
              text-[12px]
              font-medium
              uppercase
              leading-[18px]
              text-[#6D6D75]
            "
          >
            <span
              className="
                flex
                h-[15px]
                w-[15px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-[1.5px]
                border-[#7434E5]
              "
            >
              <Check
                size={10}
                strokeWidth={3}
                className="text-[#7434E5]"
              />
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* ================= ORDER BUTTON ================= */}

      <button
        type="button"
        className="
          mt-auto
          mx-auto
          flex
          h-[34px]
          min-w-[128px]
          items-center
          justify-center
          gap-[8px]
          rounded-full
          bg-[#6820D9]
          px-[20px]
          font-dmSans
          text-[11px]
          font-semibold
          text-white
          shadow-[0px_6px_14px_rgba(104,32,217,0.25)]
          transition-all
          duration-300
          hover:bg-[#5915C5]
          hover:shadow-[0px_8px_18px_rgba(104,32,217,0.32)]
        "
      >
        Order Now
        <span className="text-[16px] leading-none">
          →
        </span>
      </button>
    </div>
  );
};

export default PricingCard;