

// const ServiceHighlights = ({
//   Icon,
//   title,

//   classname = "",


//   iconBg = "bg-[#E8DBFE]",
//   iconColor = "text-[#7434E5]",
//   // borderColor = "border-gray-300",

//   // Width can be controlled from parent
//   width = "",
// }) => {
//   return (
//     <div
//       className={`
//         flex
//         flex-row
//         items-center
//         justify-center
//         gap-[10px]

//         ${width}

       
//       `}
//     >
//       {/* Icon */}
//       <span
//         className={`
//           flex
//           h-10
//           w-10
//           shrink-0
//           items-center
//           justify-center
//           rounded-full
//           ${iconBg}
//         `}
//       >
//         {Icon && (
//           <Icon
//             className={`
//               h-5
//               w-5
//               ${iconColor}
//             `}
//           />
//         )}
//       </span>

//       {/* Text */}
//       <span
//         className={`
//           whitespace-pre-line
//           text-xs
//           font-semibold
//           leading-[16px]
//           text-[#00030B]
//           ${classname}
//         `}
//       >
//         {title}
//       </span>
//     </div>
//   );
// };

// export default ServiceHighlights;


const ServiceHighlights = ({
  Icon,
  title,
  variant = "default",
  classname = "",

  iconBg = "bg-[#E8DBFE]",
  iconColor = "text-[#7434E5]",

  width = "",
}) => {
  // Logo variant styling
  const isLogo = variant === "logo";

  return (
    <div
      className={`
        flex
        flex-row
        items-center
        justify-center
        gap-[10px]
        ${width}
      `}
    >
      {/* Icon */}
      <span
        className={`
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full

          ${isLogo ? "bg-white" : iconBg}
        `}
      >
        {Icon && (
          <Icon
            className={`
              h-5
              w-5

              ${isLogo ? "text-[#7434E5]" : iconColor}
            `}
          />
        )}
      </span>

      {/* Text */}
      <span
        className={`
          whitespace-pre-line
          text-xs
          font-semibold
          leading-[16px]
          text-[#00030B]
          ${classname}
        `}
      >
        {title}
      </span>
    </div>
  );
};

export default ServiceHighlights;