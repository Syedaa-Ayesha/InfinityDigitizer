// import FileFormatCard from "../../layout/FileFormatPageLayout/FileFormatCard";

// const ArtRequiredSection = ({
//   title = "General Requirements",
//   description = "",
//   items = [],
// }) => {
//   if (!Array.isArray(items) || items.length === 0) {
//     return null;
//   }

//   return (
//     <section
//       className="
//         w-full
//         min-w-0
//         max-w-full
//         overflow-hidden
//       "
//     >
//       {/* =====================================================
//           SECTION HEADER
//       ===================================================== */}
//       <div
//         className="
//           mb-[20px]
//           min-w-0
//           max-w-full

//           sm:mb-[24px]

//           lg:mb-[28px]
//         "
//       >
//         <h2
//           className="
//             min-w-0
//             max-w-full
//             break-words
//             font-dmSans
//             text-[20px]
//             font-bold
//             leading-[1.25]
//             tracking-[-0.02em]
//             text-[#17161F]

//             sm:text-[22px]

//             lg:text-[24px]
//           "
//         >
//           {title}
//         </h2>

//         {description && (
//           <p
//             className="
//               mt-[7px]
//               w-full
//               min-w-0
//               max-w-[800px]
//               break-words
//               font-inter
//               text-[13px]
//               font-normal
//               leading-[1.7]
//               text-[#6B7280]

//               sm:mt-[8px]
//               sm:text-[14px]

//               lg:text-[15px]
//               lg:leading-[1.75]
//             "
//           >
//             {description}
//           </p>
//         )}

//         {/* Small Purple Line */}
//         <div
//           className="
//             mt-[10px]
//             h-[3px]
//             w-[44px]
//             rounded-full
//             bg-[#7534E5]

//             sm:mt-[11px]
//             sm:w-[46px]

//             lg:mt-[12px]
//             lg:w-[48px]
//           "
//         />
//       </div>

//       {/* =====================================================
//           REQUIREMENT CARDS
//       ===================================================== */}
//       <div
//         className="
//           grid
//           w-full
//           min-w-0
//           max-w-full
//           grid-cols-1
//           gap-[12px]

//           sm:grid-cols-2
//           sm:gap-[14px]

//           lg:grid-cols-3
//           lg:gap-[16px]

//           xl:grid-cols-5
//           xl:gap-[16px]
//         "
//       >
//         {items.map((item, index) => (
//           <div
//             key={item.id ?? `requirement-${index}`}
//             className="
//               min-w-0
//               max-w-full
//             "
//           >
//             <FileFormatCard
//               variant="requirement"
//               name={item.title}
//               description={item.description}
//               showArrow={false}
//               icon={
//                 item.Icon ? (
//                   <item.Icon
//                     size={18}
//                     strokeWidth={1.8}
//                     className="text-[#7434E5]"
//                   />
//                 ) : null
//               }
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ArtRequiredSection;



import FileFormatCard from "../../layout/FileFormatPageLayout/FileFormatCard";
import PricingSlider from "../../layout/PricingSlider";

const RequirementCard = ({ item }) => {
  return (
    <FileFormatCard
      variant="requirement"
      name={item.title}
      description={item.description}
      showArrow={false}
      icon={
        item.Icon ? (
          <item.Icon
            size={20}
            strokeWidth={1.8}
            className="text-[#7434E5]"
          />
        ) : null
      }
    />
  );
};

const ArtRequiredSection = ({
  title = "General Requirements",
  description = "",
  items = [],
}) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <section
      className="
        box-border
        w-full
        min-w-0
        max-w-full
        overflow-hidden
      "
    >
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}
      <div
        className="
          mb-[22px]
          min-w-0
          max-w-full

          sm:mb-[26px]

          md:mb-[28px]

          lg:mb-[30px]
        "
      >
        <h2
          className="
            min-w-0
            max-w-full
            break-words
            font-dmSans
            text-[23px]
            font-bold
            leading-[1.25]
            tracking-[-0.02em]
            text-[#17161F]

            sm:text-[25px]

            md:text-[27px]

            lg:text-[28px]
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-[9px]
              w-full
              min-w-0
              max-w-[820px]
              break-words
              font-inter
              text-[14px]
              font-normal
              leading-[1.7]
              text-[#6B7280]

              sm:mt-[10px]
              sm:text-[15px]
              sm:leading-[1.75]

              md:text-[16px]

              lg:mt-[11px]
              lg:text-[16px]
              lg:leading-[1.8]
            "
          >
            {description}
          </p>
        )}

        {/* Purple Accent */}
        <div
          className="
            mt-[12px]
            h-[3px]
            w-[46px]
            rounded-full
            bg-[#7534E5]

            sm:mt-[13px]
            sm:w-[48px]

            lg:mt-[14px]
            lg:w-[50px]
          "
        />
      </div>

      {/* =====================================================
          MOBILE SLIDER
      ===================================================== */}
      <div
        className="
          block
          w-full
          min-w-0
          max-w-full
          overflow-hidden

          md:hidden
        "
      >
        <PricingSlider
          data={items}
          CardComponent={RequirementCard}
          cardProp="item"
          slidesPerView={1.08}
          spaceBetween={12}
          centeredSlides={false}
          loop={false}
          speed={450}
          sliderClassName="w-full !overflow-visible"
        />
      </div>

      {/* =====================================================
          TABLET / DESKTOP GRID
      ===================================================== */}
      <div
        className="
          hidden

          md:grid
          w-full
          min-w-0
          max-w-full
          grid-cols-2
          gap-[16px]

          lg:grid-cols-3
          lg:gap-[18px]

          xl:grid-cols-5
          xl:gap-[18px]
        "
      >
        {items.map((item, index) => (
          <div
            key={item.id ?? `requirement-${index}`}
            className="
              min-w-0
              max-w-full
            "
          >
            <RequirementCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtRequiredSection;

