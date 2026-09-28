// const ContactInfoCard = ({
//   icon: Icon,
//   title,
//   description,
//   available
// }) => {
//   return (
//     <div
//       className="
//         flex
//          items-center
//         gap-[18px]
//         rounded-xl
//         border
//         border-[#E7E3ED]
//         bg-white
//         p-5
//         shadow-[0px_2px_8px_rgba(211,202,226,0.18)]
//       "
//     >
//       {/* Icon */}

//       <div
//         className="
//           flex
//           h-14
//           w-14
//           shrink-0
//           items-center
//           justify-center
//           rounded-full
//            bg-[linear-gradient(94.72deg,#6C29E0_0%,#5413C3_100%)]
//         "
//       >
//         <Icon
//           size={20}
//           className="text-[#ffffff]"
//           strokeWidth={2}
//         />
//       </div>

//       {/* Content */}

//       <div>
//         <h3
//           className="
//             font-dmSans
//             text-base
//             font-bold
//             text-[#0C0C30]
//           "
//         >
//           {title}
//         </h3>

//         <p
//           className="
//             font-dmSans
//             text-[18px]
//             leading-6
//             font-bold
//             text-[#7434E5]
//             whitespace-pre-line
//           "
//         >
//           {description}
//         </p>
//           <p
//           className="
//             text-sm
//             leading-6
//             font-inter
//             text-[#6B7280]
//             whitespace-pre-line
//           "
//         >
//           {available}
//         </p>
//       </div>
//     </div>

//   );
// };

// export default ContactInfoCard;



import { ArrowUpRight } from "lucide-react";

const ContactInfoCard = ({
  icon: Icon,
  title,
  description,
  available,
  link,
}) => {
  const isClickable = Boolean(link);

  const CardContent = (
    <div
      className="
        group
        flex
        w-full
        min-w-0
        items-start
        gap-[10px]

        rounded-[11px]

        p-[9px]

        transition-all
        duration-200

        hover:bg-[#FAF8FE]
      "
    >
      {/* ================= ICON ================= */}
      <div
        className="
          flex
          h-[36px]
          w-[36px]
          shrink-0
          items-center
          justify-center

          rounded-[10px]
          bg-[#F0E9FF]

          transition-all
          duration-200

          group-hover:bg-[#7434E5]
        "
      >
        {Icon && (
          <Icon
            size={17}
            strokeWidth={1.7}
            className="
              text-[#7434E5]
              transition-colors
              duration-200
              group-hover:text-white
            "
          />
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="min-w-0 flex-1">
        {/* Title */}
        <div
          className="
            flex
            min-w-0
            items-center
            justify-between
            gap-[6px]
          "
        >
          <h3
            className="
              min-w-0
              truncate

              font-dmSans
              text-[11px]
              font-bold
              leading-[1.35]
              text-[#17161F]

              sm:text-[12px]
            "
          >
            {title}
          </h3>

          {/* Optional arrow */}
          {isClickable && (
            <ArrowUpRight
              size={12}
              strokeWidth={1.8}
              className="
                shrink-0
                text-[#A49FAA]
                transition-all
                duration-200
                group-hover:-translate-y-[1px]
                group-hover:translate-x-[1px]
                group-hover:text-[#7434E5]
              "
            />
          )}
        </div>

        {/* Description */}
        <p
          className="
            mt-[3px]
            min-w-0

            break-words
            whitespace-normal
            [overflow-wrap:anywhere]

            font-inter
            text-[10px]
            font-medium
            leading-[1.5]
            text-[#4F4A59]

            sm:text-[10.5px]
          "
        >
          {description}
        </p>

        {/* Available */}
        {available && (
          <p
            className="
              mt-[3px]
              min-w-0

              break-words
              whitespace-normal
              [overflow-wrap:anywhere]

              font-inter
              text-[9px]
              font-normal
              leading-[1.45]
              text-[#898591]

              sm:text-[9.5px]
            "
          >
            {available}
          </p>
        )}
      </div>
    </div>
  );

  if (isClickable) {
    return (
      <a
        href={link}
        className="
          block
          w-full
          min-w-0
          no-underline
        "
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default ContactInfoCard;