// import { ArrowRight } from "lucide-react";

// const ServicePageCard = ({
//   image,
//   title,
//   description,
//   onOrder,
//   onExplore,
// }) => {

//   return (
//     <article
//       className="
//         group
//         flex
//         h-full
//         min-w-0
//         flex-col
//         overflow-hidden
//         rounded-[20px]
//         border
//         border-[#EDEAF4]
//         bg-white
//         shadow-[0px_8px_24px_rgba(41,23,79,0.06)]
//         transition-all
//         duration-300
//         hover:-translate-y-[3px]
//         hover:shadow-[0px_14px_30px_rgba(41,23,79,0.10)]
//       "
//     >
//       {/* ================= IMAGE ================= */}
//       <div
//         className="
//           relative
//           aspect-[1.7/1]
//           w-full
//           min-w-0
//           overflow-hidden
//           bg-[#F4F0FA]
//         "
//       >
//         {image ? (
//           <img
//             src={image}
//             alt={title || "Service"}
//             loading="lazy"
//             decoding="async"
//             className="
//               block
//               h-full
//               w-full
//               object-cover
//               object-center
//               transition-transform
//               duration-500
//               group-hover:scale-[1.025]
//             "
//           />
//         ) : (
//           <div className="h-full w-full bg-[#F4F0FA]" />
//         )}
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div
//         className="
//           flex
//           min-w-0
//           flex-1
//           flex-col
//           px-[20px]
//           pb-[20px]
//           pt-[17px]

//           sm:px-[21px]
//           sm:pb-[21px]

//           lg:px-[20px]
//           lg:pb-[20px]
//         "
//       >
          

//         {/* TITLE */}
//         <h3
//           className="
//             mt-[14px]
//             min-w-0
//             max-w-full
//             break-words
//             font-dmSans
//             text-[21px]
//             font-bold
//             leading-[1.2]
//             tracking-[-0.35px]
//             text-[#11182B]

//             sm:text-[22px]

//             lg:text-[21px]
//           "
//           style={{ overflowWrap: "anywhere" }}
//         >
//           {title}
//         </h3>

//         {/* DESCRIPTION */}
//         <p
//           className="
//             mt-[9px]
//             min-w-0
//             max-w-full
//             break-words
//             font-inter
//             text-[13px]
//             font-normal
//             leading-[1.7]
//             text-[#72788A]

//             sm:text-[14px]
//             sm:leading-[1.65]
//           "
//           style={{ overflowWrap: "anywhere" }}
//         >
//           {description}
//         </p>

//         {/* ================= BUTTONS ================= */}
//         <div
//           className="
//             mt-auto
//             flex
//             w-full
//             gap-[12px]
//             pt-[22px]
//           "
//         >
//           {/* ORDER NOW */}
//           <button
//             type="button"
//             onClick={onOrder}
//             className="
//               group/order
//               inline-flex
//               min-w-0
//               flex-1
//               items-center
//               justify-center
//               gap-[7px]
//               rounded-[10px]
//               bg-[linear-gradient(94.72deg,#6C29E0_0%,#5413C3_100%)]
//               px-[12px]
//               py-[12px]

//               font-dmSans
//               text-[13px]
//               font-bold
//               text-white

//               transition-all
//               duration-300
//               hover:shadow-[0px_8px_18px_rgba(92,31,205,0.22)]
//             "
//           >
//             <span className="whitespace-nowrap">
//               Order Now
//             </span>

//             <ArrowRight
//               size={16}
//               strokeWidth={2}
//               className="
//                 shrink-0
//                 transition-transform
//                 duration-300
//                 group-hover/order:translate-x-1
//               "
//             />
//           </button>

//           {/* EXPLORE */}
//           <button
//             type="button"
//             onClick={onExplore}
//             className="
//               inline-flex
//               min-w-0
//               flex-1
//               items-center
//               justify-center
//               gap-[7px]
//               rounded-[10px]
//               border
//               border-[#C7AEF5]
//               bg-white
//               px-[12px]
//               py-[12px]

//               font-dmSans
//               text-[13px]
//               font-bold
//               text-[#7434E5]

//               transition-all
//               duration-300
//               hover:bg-[#F8F4FF]
//             "
//           >
//             <span className="whitespace-nowrap">
//               Explore
//             </span>

//             <ArrowRight
//               size={16}
//               strokeWidth={2}
//               className="shrink-0"
//             />
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ServicePageCard;
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicePageCard = ({
  image,
  title,
  description,
  slug,
  onOrder,
}) => {
  return (
    <article
      className="
        group
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        border-[#EDEAF4]
        bg-white
        shadow-[0px_8px_24px_rgba(41,23,79,0.06)]
        transition-all
        duration-300
        hover:-translate-y-[3px]
        hover:shadow-[0px_14px_30px_rgba(41,23,79,0.10)]
      "
    >
      {/* ================= IMAGE ================= */}
      <div
        className="
          relative
          aspect-[1.7/1]
          w-full
          min-w-0
          overflow-hidden
          bg-[#F4F0FA]
        "
      >
        {image ? (
          <img
            src={image}
            alt={title || "Service"}
            loading="lazy"
            decoding="async"
            className="
              block
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-[1.025]
            "
          />
        ) : (
          <div className="h-full w-full bg-[#F4F0FA]" />
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          px-[20px]
          pb-[20px]
          pt-[17px]

          sm:px-[21px]
          sm:pb-[21px]

          lg:px-[20px]
          lg:pb-[20px]
        "
      >
        {/* TITLE */}
        <h3
          className="
            mt-[14px]
            min-w-0
            max-w-full
            break-words
            font-dmSans
            text-[21px]
            font-bold
            leading-[1.2]
            tracking-[-0.35px]
            text-[#11182B]

            sm:text-[22px]

            lg:text-[21px]
          "
          style={{ overflowWrap: "anywhere" }}
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-[9px]
            min-w-0
            max-w-full
            break-words
            font-inter
            text-[13px]
            font-normal
            leading-[1.7]
            text-[#72788A]

            sm:text-[14px]
            sm:leading-[1.65]
          "
          style={{ overflowWrap: "anywhere" }}
        >
          {description}
        </p>

        {/* ================= BUTTONS ================= */}
        <div
          className="
            mt-auto
            flex
            w-full
            gap-[12px]
            pt-[22px]
          "
        >
          {/* ORDER NOW */}
          <button
            type="button"
            onClick={onOrder}
            className="
              group/order
              inline-flex
              min-w-0
              flex-1
              items-center
              justify-center
              gap-[7px]
              rounded-[10px]
              bg-[linear-gradient(94.72deg,#6C29E0_0%,#5413C3_100%)]
              px-[12px]
              py-[12px]

              font-dmSans
              text-[13px]
              font-bold
              text-white

              transition-all
              duration-300
              hover:shadow-[0px_8px_18px_rgba(92,31,205,0.22)]
            "
          >
            <span className="whitespace-nowrap">
              Order Now
            </span>

            <ArrowRight
              size={16}
              strokeWidth={2}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover/order:translate-x-1
              "
            />
          </button>

          {/* EXPLORE */}
          {slug ? (
            <Link
              to={`/services/${slug}`}
              className="
                inline-flex
                min-w-0
                flex-1
                items-center
                justify-center
                gap-[7px]
                rounded-[10px]
                border
                border-[#C7AEF5]
                bg-white
                px-[12px]
                py-[12px]

                font-dmSans
                text-[13px]
                font-bold
                text-[#7434E5]

                transition-all
                duration-300
                hover:bg-[#F8F4FF]
              "
            >
              <span className="whitespace-nowrap">
                Explore
              </span>

              <ArrowRight
                size={16}
                strokeWidth={2}
                className="shrink-0"
              />
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="
                inline-flex
                min-w-0
                flex-1
                cursor-not-allowed
                items-center
                justify-center
                gap-[7px]
                rounded-[10px]
                border
                border-[#E5E0ED]
                bg-[#F8F7FA]
                px-[12px]
                py-[12px]
                font-dmSans
                text-[13px]
                font-bold
                text-[#B0AABD]
              "
            >
              <span className="whitespace-nowrap">
                Explore
              </span>

              <ArrowRight
                size={16}
                strokeWidth={2}
                className="shrink-0"
              />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ServicePageCard;