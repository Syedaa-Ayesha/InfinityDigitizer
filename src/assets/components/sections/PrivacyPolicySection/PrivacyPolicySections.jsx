import PrivacyContentSection from "./PrivacyContentSection";

const PrivacyPolicySections = ({ sections = [] }) => {
  if (!Array.isArray(sections) || sections.length === 0) {
    return null;
  }

  return (
    <section
      className="
        w-full
        max-w-full
        min-w-0
        overflow-x-hidden
      "
    >
      <div
        className="
          w-full
          max-w-full
          min-w-0

          space-y-[40px]

          sm:space-y-[50px]

          md:space-y-[60px]

          lg:space-y-[72px]

          xl:space-y-[78px]
        "
      >
        {sections.map((section, index) => {
          const imagePosition =
            section.imagePosition ||
            (index % 2 === 0 ? "left" : "right");

          return (
            <div
              key={`${section.id || "section"}-${index}`}
              className="
                w-full
                max-w-full
                min-w-0
              "
            >
              <PrivacyContentSection
                number={
                  section.id ||
                  String(index + 1).padStart(2, "0")
                }
                title={section.title}
                description={section.description}
                bullets={section.bullets || []}
                image={section.image || null}
                imagePosition={imagePosition}
                showVisual={section.showVisual !== false}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PrivacyPolicySections;