// import vector21 from "../../images/Vector 21.png";
// import vector23 from "../../images/Vector 23.png";

// import MegaMenuCard from "../layout/MegaMenuCard";
// import { MegaMenuData } from "../common/MegaMenuData";

// const MegaMenu = ({ mobile = false, onNavigate }) => {
//   return (
//     <div
//       className={`
//         ${
//           mobile
//             ? `
//               relative
//               z-[1000]
//               flex
//               w-full
//               max-h-[calc(100vh-90px)]
//               flex-col
//               overflow-y-auto
//               overflow-x-hidden
//               rounded-2xl
//               border
//               border-[#E7E3ED]
//               bg-white
//               p-4

//               [scrollbar-width:none]
//               [-ms-overflow-style:none]
//               [&::-webkit-scrollbar]:hidden
//             `
//             : `
//               absolute
//               top-6
//               z-[1000]
//               h-[591px]
//               w-[1114px]
//               -translate-x-1/4
//               rounded-[18px]
//               border
//               border-[#FFFFFF]
//               bg-white
//               p-5
//               shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]
//             `
//         }
//       `}
//     >
//       {/* ================= TRIANGLE ================= */}

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

//       {/* ================= HEADER ================= */}

//       <div className="shrink-0">
//         {/* Badge */}

//         <div className="flex justify-center">
//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               font-inter
//               text-[11px]
//               font-semibold
//               uppercase
//               tracking-[1.5px]
//               text-[#7434E5]

//               sm:gap-3
//               sm:text-[14px]
//               sm:tracking-[2px]
//             "
//           >
//             <img
//               src={vector23}
//               alt=""
//               className="h-auto w-auto"
//             />

//             <span>OUR SERVICES</span>

//             <img
//               src={vector21}
//               alt=""
//               className="h-auto w-auto"
//             />
//           </div>
//         </div>

//         {/* Heading */}

//         <h2
//           className="
//             mt-3
//             text-center
//             font-inter
//             text-[21px]
//             font-semibold
//             leading-tight
//             text-[#000000]

//             sm:text-[28px]

//             lg:mt-4
//             lg:text-[36px]
//           "
//         >
//           Choose the service that fits your needs
//         </h2>

//         {/* Subtitle */}

//         <p
//           className="
//             mt-2
//             text-center
//             font-inter
//             text-[11px]
//             font-medium
//             leading-5
//             text-[#000000]

//             sm:text-[14px]
//           "
//         >
//           High quality. Fast turnaround. 100% satisfaction guaranteed.
//         </p>
//       </div>

//       {/* ================= CARDS ================= */}

//       <div
//         className={`
//           mt-5

//           ${
//             mobile
//               ? `
//                 grid
//                 grid-cols-1
//                 gap-4

//                 sm:grid-cols-2
//                 sm:gap-5
//               `
//               : `
//                 grid
//                 grid-cols-3
//                 gap-[18px]
//               `
//           }
//         `}
//       >
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



import { useState } from "react";
import { ChevronDown } from "lucide-react";

import vector21 from "../../images/Vector 21.png";
import vector23 from "../../images/Vector 23.png";

import MegaMenuCard from "../layout/MegaMenuCard";
import { MegaMenuData } from "../common/MegaMenuData";

const MegaMenu = ({ mobile = false, onNavigate }) => {
  const [openService, setOpenService] = useState(null);

  const handleServiceClick = (service) => {
    setOpenService(
      openService === service.id ? null : service.id
    );
  };

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

      {/* ================= DESKTOP ================= */}

      {!mobile && (
        <div
          className="
            mt-5
            grid
            grid-cols-3
            gap-[18px]
          "
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
      )}

      {/* ================= MOBILE SERVICES ================= */}

      {mobile && (
        <div className="mt-6 flex flex-col gap-2">
          {MegaMenuData.map((service) => {
            const isOpen = openService === service.id;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#E7E3ED]
                  bg-white
                "
              >
                {/* SERVICE HEADER */}

                <button
                  type="button"
                  onClick={() => handleServiceClick(service)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-4
                    text-left
                  "
                >
                  <div className="flex min-w-0 items-center gap-3">
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        shadow-[0px_5px_15px_rgba(0,0,0,0.10)]
                      "
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="text-[#7434E5]"
                      />
                    </div>

                    {/* Title */}

                    <span
                      className="
                        font-inter
                        text-[16px]
                        font-bold
                        text-[#7434E5]
                      "
                    >
                      {service.title}
                    </span>
                  </div>

                  {/* Arrow */}

                  <ChevronDown
                    size={20}
                    className={`
                      shrink-0
                      text-[#7434E5]
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* DROPDOWN CONTENT */}

                {isOpen && (
                  <div
                    className="
                      border-t
                      border-[#E7E3ED]
                      px-4
                      pb-4
                      pt-3
                    "
                  >
                    {/* Description */}

                    <p
                      className="
                        font-inter
                        text-[12px]
                        leading-[20px]
                        text-[#000000]
                      "
                    >
                      {service.description}
                    </p>

                    {/* Features */}

                    {service.features?.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {service.features.map((item, index) => (
                          <div
                            key={index}
                            className="
                              flex
                              items-center
                              gap-2
                              font-inter
                              text-[12px]
                              text-[#000000]
                            "
                          >
                            <span
                              className="
                                flex
                                h-4
                                w-4
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#7434E5]
                                text-[9px]
                                text-[#7434E5]
                              "
                            >
                              ✓
                            </span>

                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Image */}

                    {service.image && (
                      <div className="mt-4 flex justify-center">
                        <div
                          className="
                            flex
                            h-[120px]
                            w-full
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#F7F7F7]
                          "
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            className="max-h-[90px] max-w-[150px] object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* Button */}

                    {service.buttonText && (
                      <button
                        type="button"
                        onClick={() => onNavigate?.(service)}
                        className="
                          mt-4
                          w-full
                          rounded-lg
                          bg-[linear-gradient(94.89deg,_#6724DB_0%,_#5116B6_100%)]
                          px-5
                          py-3
                          font-dmSans
                          text-[12px]
                          font-bold
                          text-white
                          transition
                          duration-300
                          hover:opacity-90
                        "
                      >
                        {service.buttonText}
                      </button>
                    )}

                    {/* Link */}

                    {service.linkText && (
                      <button
                        type="button"
                        onClick={() => onNavigate?.(service)}
                        className="
                          mt-3
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          font-inter
                          text-[12px]
                          font-semibold
                          text-[#7434E5]
                        "
                      >
                        {service.linkText}

                        <span className="text-[16px]">
                          →
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;

