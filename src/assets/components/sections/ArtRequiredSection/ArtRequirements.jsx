// import ArtRequirementCard from "../../layout/ArtRequiredLayout/ArtRequirementCard";

// const ArtRequirements = ({
//   sections = [],
// }) => {
//   if (!Array.isArray(sections) || sections.length === 0) {
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
//       <div
//         className="
//           flex
//           w-full
//           min-w-0
//           max-w-full
//           flex-col
//           gap-[16px]

//           sm:gap-[18px]

//           md:gap-[20px]

//           lg:gap-[22px]
//         "
//       >
//         {sections.map((section, index) => (
//           <div
//             key={section.id ?? `art-requirement-${index}`}
//             className="
//               w-full
//               min-w-0
//               max-w-full
//             "
//           >
//             <ArtRequirementCard
//               title={section.title}
//               subtitle={section.subtitle}
//               bullets={section.bullets}
//               acceptedFormats={section.acceptedFormats}
//               Icon={section.Icon}
//               image={section.image}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ArtRequirements;

import ArtRequirementCard from "../../layout/ArtRequiredLayout/ArtRequirementCard";

const ArtRequirements = ({ sections = [] }) => {
  if (!Array.isArray(sections) || sections.length === 0) {
    return null;
  }

  return (
    <section
      className="
        w-full
        min-w-0
        max-w-full
        overflow-hidden
      "
    >
      <div
        className="
          flex
          w-full
          min-w-0
          max-w-full
          flex-col
          gap-[16px]

          sm:gap-[18px]

          md:gap-[20px]

          lg:gap-[22px]
        "
      >
        {sections.map((section, index) => (
          <div
            key={section.id ?? `art-requirement-${index}`}
            className="
              w-full
              min-w-0
              max-w-full
            "
          >
            <ArtRequirementCard
              title={section.title}
              subtitle={section.subtitle}
              bullets={section.bullets}
              acceptedFormats={section.acceptedFormats}
              Icon={section.Icon}
              image={section.image}
              theme={section.theme}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtRequirements;