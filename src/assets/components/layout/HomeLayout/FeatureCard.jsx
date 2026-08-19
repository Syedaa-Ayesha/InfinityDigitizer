
// const FeatureCard = ({step , icon , title , description , image}) => {
//   return (
//     <div className="relative flex flex-row h-[182px] w-full max-w-[1275px] overflow-visible rounded-[16px] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)] lg:flex-col-reverse border"
//     >

//       {/* Number Badge */}
//       <div className="absolute left-[-40px] z-10 top-1/2 -translate-y-1/2 px-8 py-7">
//         <div className="flex h-[40px] w-[56px] items-center justify-center  rounded-r-[16px] rounded-l-[4px] bg-gradient-to-r from-[#753DF0] to-[#4E2A8C]">
//           <span className="text-base font-bold text-white font-dmSans">{step}</span>
//         </div>
//       </div>

//       {/* Left Content */}
//       <div className="flex flex-1 items-center  pr-6  pl-17.5 "  style={{
//             background:
//                 "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
//         }}>

//         {/* Icon */}
//        <div className="mr-[36px] flex h-[118px] w-[118px] items-center justify-center rounded-full bg-[#753DF0]/9">
//          {icon}
//         </div>

//         {/* Text */}
//         <div className="">
//           <h3 className="font-dmSans text-[20px] font-bold text-[#1D2433]">
//            {title}
//           </h3>

//           <p className="mt-3 max-w-[611px]  text-base leading-7 text-[#6B7280]">
//             {description}
//           </p>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="h-full w-[345px] shrink-0 overflow-hidden rounded-r-[16px] ">
//         <img
//           src={image}
//           alt="ContainerImage"
//           className="object-contain "
//         />
//       </div>

//     </div>
//   );
// };

// export default FeatureCard



const FeatureCard = ({ step, icon, title, description, image }) => {
  return (
    <div
      className="
        relative
        flex
        flex-row
        h-[182px]
        w-full
        max-w-[1275px]
        overflow-visible
        rounded-[16px]
        bg-white
        shadow-[0_10px_35px_rgba(0,0,0,0.12)]
        max-lg:h-auto
        max-lg:min-h-[200px]
        max-md:min-h-0
        max-md:flex-col
        max-md:overflow-hidden
      "
    >

      {/* ================= NUMBER BADGE ================= */}

      <div
        className="
          absolute
          left-[-40px]
          z-10
          top-1/2
          -translate-y-1/2
          px-8
          py-7
          max-lg:left-[-20px]
          max-lg:px-4
          max-lg:py-5
          max-md:left-0
          max-md:top-5
          max-md:translate-y-0
          max-md:px-0
          max-md:py-0
        "
      >
        <div
          className="
            flex
            h-[40px]
            w-[56px]
            items-center
            justify-center
            rounded-r-[16px]
            rounded-l-[4px]
            bg-gradient-to-r
            from-[#753DF0]
            to-[#4E2A8C]
            max-md:h-[34px]
            max-md:w-[48px]
            max-md:rounded-r-[12px]
          "
        >
          <span
            className="
              text-base
              font-bold
              text-white
              font-dmSans
              max-md:text-sm
            "
          >
            {step}
          </span>
        </div>
      </div>


      {/* ================= LEFT CONTENT ================= */}

      <div
        className="
          flex
          flex-1
          items-center
          pr-6
          pl-17.5
          max-lg:pl-14
          max-lg:pr-5
          max-lg:py-6
          max-md:flex-col
          max-md:items-center
          max-md:px-5
          max-md:py-6
          max-md:text-center
        "
        style={{
          background:
            "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
        }}
      >

        {/* ================= ICON ================= */}

        <div
          className="
            mr-[36px]
            flex
            h-[118px]
            w-[118px]
            items-center
            justify-center
            rounded-full
            bg-[#753DF0]/9
            max-lg:mr-6
            max-lg:h-[90px]
            max-lg:w-[90px]
            max-md:mr-0
            max-md:mb-5
            max-md:h-[82px]
            max-md:w-[82px]
          "
        >
          {icon}
        </div>


        {/* ================= TEXT ================= */}

        <div className="max-md:w-full">
          <h3
            className="
              font-dmSans
              text-[20px]
              font-bold
              text-[#1D2433]
              max-md:text-[18px]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              max-w-[611px]
              text-base
              leading-7
              text-[#6B7280]

              max-lg:text-base
              max-lg:leading-6

              max-md:mt-2
              max-md:text-base
              max-md:leading-5
            "
          >
            {description}
          </p>
        </div>
      </div>


      {/* ================= RIGHT IMAGE ================= */}

      <div
        className="
          h-full
          w-[345px]
          shrink-0
          overflow-hidden
          rounded-r-[16px]
          max-lg:h-[220px]
          max-lg:w-full
          max-lg:rounded-r-none
          max-lg:rounded-b-[16px]
          max-md:h-[160px]
          max-md:rounded-b-[14px]
        "
      >
        <img
          src={image}
          alt="ContainerImage"
          className="
            object-cover
            max-lg:h-full
            max-lg:w-full
          "
        />
      </div>

    </div>
  );
};

export default FeatureCard;