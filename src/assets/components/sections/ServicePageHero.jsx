
// import ServiceHighlights from "../../layout/ServiceHighlights"

// const ServicePageHero = ({
//   title,
//   description,
//   services,
//   image,
//   reverse = false,
// }) => {
//   return (
//       <section className="p-[22px] lg:py-[34px] bg-[#FBF9FE]">
//       <div
//         className={`
//           mx-auto
//           flex
//           max-w-[1320px]
//           items-center
//           justify-between
//           gap-10
//           rounded-3xl
//           border
//           border-[#E7E3ED]
//           bg-white
//           p-8
//           ${reverse ? "flex-row-reverse" : ""}
//         `}
//       >
//         {/* Left */}

//         <div className="flex  w-[48%] flex-col gap-6 l">
//           <h1
//             className="
//               max-w-120
//               font-dmSans
//               text-[48px]
//               font-extrabold
//               leading-15
//               tracking-[-0.04em]
//               text-[#0F1729]
//             "
//           >
//             {title}
//           </h1>

//           <p
//             className="
//               max-w-[580px]
//               font-inter
//               text-[16px]
//               leading-5
//               text-[#6B7280]
//             "
//           >
//             {description}
//           </p>

//           <div className="mb-4 flex flex-wrap gap-6">
//             {services.map((service, index) => (
//               <ServiceHighlights
//                 key={index}
//                 title={service.title}
//                 Icon={service.Icon}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right */}

//         <div className="relative w-[52%]">
//           <div className="h-[500px] overflow-hidden rounded-3xl">
//             <img
//               src={image}
//               alt={title}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServicePageHero









import ServiceHighlights from "../layout/ServiceHighlights";

const ServicePageHero = ({
  title,
  description,
  services,
  image,
  reverse = false,
}) => {
  return (
    <section className="bg-[#FBF9FE] py-6 sm:py-8 lg:py-10">
      <div
        className={`
          mx-auto
          flex
          w-full
          max-w-[1320px]
          flex-col
          gap-8
          rounded-2xl
          border
          border-[#E7E3ED]
          bg-white
          p-5
          sm:gap-10
          sm:rounded-3xl
          sm:p-6
          md:p-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-10
          xl:p-10
          ${reverse ? "lg:flex-row-reverse" : ""}
        `}
      >
        {/* Content */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-5
            sm:gap-6
            lg:w-[48%]
          "
        >
          <h1
            className="
              max-w-[600px]
              font-dmSans
              text-[32px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              text-[#0F1729]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[48px]
              lg:leading-[1.15]
            "
          >
            {title}
          </h1>

          <p
            className="
              max-w-[580px]
              font-inter
              text-[15px]
              leading-6
              text-[#6B7280]
              sm:text-[16px]
              sm:leading-7
            "
          >
            {description}
          </p>

          {/* Service Highlights */}
          <div
            className="
          grid
    grid-cols-2
    gap-x-4
    gap-y-3
    sm:grid-cols-3
    sm:gap-x-5
    sm:gap-y-4
    lg:grid-cols-3
    lg:gap-x-6
    lg:gap-y-4
            "
          >
            {services.map((service, index) => (
              <ServiceHighlights
                key={index}
                title={service.title}
                Icon={service.Icon}
            
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[52%]">
          <div
            className="
              h-[280px]
              overflow-hidden
              rounded-2xl
              sm:h-[350px]
              sm:rounded-3xl
              md:h-[420px]
              lg:h-[480px]
              xl:h-[500px]
            "
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHero;




