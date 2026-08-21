// const SectionHeading = ({
//   icon: Icon,
//   badge,
//   heading,
//   description,
//   headingClassName,
//   desClass,
// }) => {
//   return (
//     <div className="flex flex-col justify-center items-center gap-[18px] mx-[22px] lg:gap-4">

//       <span
//         className={`inline-flex w-max items-center font-inter rounded-2xl gap-2 text-[#7434E5] px-2.5 py-1.5 lg:text-base uppercase font-semibold bg-[#F1EDFD]`}
//       >
//        {Icon && <Icon size={24} />}
//         {badge}
//       </span>

//       <h2
//         className={`font-dmSans text-center text-[36px] font-bold text-[#0C0C30] leading-10 lg:leading-none ${headingClassName}`}
//       >
//         {heading}
//       </h2>

//       <p
//         className={`mx-auto text-center text-sm text-[#6B7280] leading-6 whitespace-pre-line font-normal font-inter ${desClass}lg:max-w-125`}
//       >
//         {description}
//       </p>

//     </div>
//   );
// };

// export default SectionHeading;



const SectionHeading = ({
  icon,
  badge,
  heading,
  description,
  headingClassName = "",
  desClass = "",
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[18px] mx-[22px] lg:gap-4">

      <span
        className="
          inline-flex
          w-max
          
          items-center
          font-inter
          rounded-2xl
          gap-2
          text-[#7434E5]
          px-2.5
          py-1.5
          lg:text-base
          uppercase
          font-semibold
          bg-[#F1EDFD]
        "
      >
        {/* ICON */}

        {icon &&
          (typeof icon === "function" ? (
            <icon size={24} />
          ) : (
            icon
          ))}

        {badge}
      </span>

      {/* HEADING */}

      <h2
        className={`
          font-dmSans
          text-center
          text-[36px]
          font-bold
          text-[#0C0C30]
          leading-10
          lg:leading-none
          ${headingClassName}
        `}
      >
        {heading}
      </h2>

      {/* DESCRIPTION */}

      <p
        className={`
          mx-auto
          text-center
          text-sm
          text-[#6B7280]
          leading-6
          whitespace-pre-line
          font-normal
          font-inter
          
          ${desClass}
          lg:max-w-185
        `}
      >
        {description}
      </p>

    </div>
  );
};

export default SectionHeading;