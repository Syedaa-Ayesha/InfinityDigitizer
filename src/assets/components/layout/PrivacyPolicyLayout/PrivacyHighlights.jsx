import PrivacyHighlightCard from "./PrivacyHighlightCard";

const PrivacyHighlights = ({ items = [] }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <section
      className="
        w-full
        max-w-full
        min-w-0
        overflow-hidden
        rounded-[12px]
        border
        border-[#E8E8F0]
        bg-white
        shadow-[0_3px_18px_rgba(0,0,0,0.08)]
      "
    >
      <div
        className="
          grid
          w-full
          max-w-full
          min-w-0

          grid-cols-1

          divide-y
          divide-[#EDEAF2]

          sm:grid-cols-2
          sm:divide-x
          sm:divide-y-0

          lg:grid-cols-5
        "
      >
        {items.map((item, index) => (
          <div
            key={item.id ?? `highlight-${index}`}
            className="
              flex
              min-w-0
              w-full
              items-center
              justify-center

              min-h-[142px]
              px-[12px]
              py-[20px]

              sm:min-h-[148px]
              sm:px-[14px]
              sm:py-[22px]

              md:min-h-[154px]
              md:px-[16px]
              md:py-[24px]

              lg:min-h-[160px]
              lg:px-[12px]
              lg:py-[22px]
            "
          >
            <PrivacyHighlightCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyHighlights;