// import ContactInfoCard from "../ContactUsLayout/ContactInfoCard";

// const SupportInfoCard = ({
//   title = "Still Need Help?",
//   description = "",
//   items = [],
// }) => {
//   return (
//     <aside
//       className="
//         w-full
//         min-w-0
//         overflow-hidden

//         rounded-[14px]
//         border
//         border-[#E7E3ED]
//         bg-white

//         shadow-[0_4px_18px_rgba(55,36,88,0.05)]
//       "
//     >
//       {/* ================= HEADER ================= */}
//       <div
//         className="
//           min-w-0
//           px-[16px]
//           pt-[18px]

//           sm:px-[18px]
//           sm:pt-[20px]

//           lg:px-[20px]
//           lg:pt-[20px]
//         "
//       >
//         <h2
//           className="
//             break-words
//             font-dmSans
//             text-[16px]
//             font-bold
//             leading-[1.3]
//             text-[#17161F]

//             sm:text-[17px]
//           "
//         >
//           {title}
//         </h2>

//         <p
//           className="
//             mt-[7px]
//             max-w-full
//             break-words

//             font-inter
//             text-[10px]
//             font-normal
//             leading-[1.6]
//             text-[#6B6B80]

//             sm:text-[11px]
//           "
//         >
//           {description}
//         </p>
//       </div>

//       {/* Divider */}
//       <div
//         className="
//           mx-[16px]
//           my-[14px]
//           h-px
//           bg-[#EEEAF3]

//           sm:mx-[18px]

//           lg:mx-[20px]
//         "
//       />

//       {/* ================= SUPPORT ITEMS ================= */}
//       <div
//         className="
//           min-w-0
//           px-[16px]
//           pb-[6px]

//           sm:px-[18px]

//           lg:px-[20px]
//         "
//       >
//         {items.map((item, index) => (
//           <div
//             key={item.id || item.title}
//             className={`
//               min-w-0
//               py-[11px]

//               first:pt-0

//               ${
//                 index !== items.length - 1
//                   ? "border-b border-[#EEEAF3]"
//                   : "pb-[14px]"
//               }
//             `}
//           >
//             <div className="min-w-0 max-w-full overflow-hidden">
//               <ContactInfoCard
//                 icon={item.icon}
//                 title={item.title}
//                 description={item.description}
//                 available={item.available}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default SupportInfoCard;


import ContactInfoCard from "../ContactUsLayout/ContactInfoCard";

const SupportInfoCard = ({
  title = "Still Need Help?",
  description = "",
  items = [],
}) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <aside
      className="
        w-full
        max-w-full
        min-w-0
        overflow-hidden

        rounded-[14px]
        border
        border-[#E7E3ED]
        bg-white

        shadow-[0_4px_18px_rgba(55,36,88,0.05)]

        sm:rounded-[16px]
      "
    >
      {/* ================= HEADER ================= */}
      <div
        className="
          min-w-0
          w-full

          px-[16px]
          pt-[18px]

          sm:px-[18px]
          sm:pt-[20px]

          lg:px-[20px]
          lg:pt-[22px]
        "
      >
        <h2
          className="
            min-w-0
            max-w-full
            break-words

            font-dmSans
            text-[18px]
            font-bold
            leading-[1.3]
            tracking-[-0.15px]
            text-[#17161F]

            sm:text-[19px]

            lg:text-[20px]
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-[8px]
            min-w-0
            max-w-full
            break-words

            font-inter
            text-[13px]
            font-normal
            leading-[1.65]
            text-[#6B6B80]

            sm:text-[14px]
            sm:leading-[1.7]

            lg:text-[14px]
            lg:leading-[1.75]
          "
        >
          {description}
        </p>
      </div>

      {/* ================= DIVIDER ================= */}
      <div
        className="
          mx-[16px]
          my-[15px]
          h-px
          bg-[#EEEAF3]

          sm:mx-[18px]
          sm:my-[17px]

          lg:mx-[20px]
          lg:my-[18px]
        "
      />

      {/* ================= SUPPORT ITEMS ================= */}
      <div
        className="
          min-w-0
          w-full

          px-[12px]
          pb-[8px]

          sm:px-[14px]
          sm:pb-[10px]

          lg:px-[16px]
          lg:pb-[12px]
        "
      >
        {items.map((item, index) => (
          <div
            key={item.id ?? item.title ?? index}
            className={`
              min-w-0
              w-full
              py-[10px]

              sm:py-[11px]

              lg:py-[12px]

              ${
                index !== items.length - 1
                  ? "border-b border-[#EEEAF3]"
                  : "pb-[10px]"
              }
            `}
          >
            <div
              className="
                min-w-0
                w-full
                max-w-full
                overflow-hidden
              "
            >
              <ContactInfoCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                available={item.available}
              />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SupportInfoCard;