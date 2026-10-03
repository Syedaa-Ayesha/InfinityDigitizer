import ServicePageCard from "../../layout/ServicePageLayout/ServicePageCard";
import PricingSlider from "../../layout/PricingSlider";

const ServiceCardsSection = ({ data = [] }) => {
  const safeData = Array.isArray(data) ? data : [];

  if (safeData.length === 0) {
    return null;
  }

  return (
    <section
      className="
        w-full
        min-w-0
        overflow-hidden
        py-4

        sm:py-5

        lg:py-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1320px]
          min-w-0
          px-[14px]

          sm:px-[22px]

          md:px-[24px]

          lg:px-[32px]

          2xl:px-[40px]
        "
      >
        {/* =====================================================
            DESKTOP / TABLET GRID
        ===================================================== */}
        <div
          className="
            hidden
            w-full
            min-w-0
            grid-cols-1
            gap-[16px]

            sm:grid
            sm:grid-cols-2
            sm:gap-[18px]

            lg:grid-cols-4
            lg:gap-[20px]
          "
        >
          {safeData.map((item, index) => (
            <div
              key={item?.id ?? `service-card-${index}`}
              className="
                min-w-0
                max-w-full
              "
            >
              <ServicePageCard {...item} />
            </div>
          ))}
        </div>

        {/* =====================================================
            MOBILE SLIDER
        ===================================================== */}
        <div
          className="
            block
            w-full
            min-w-0
            overflow-hidden

            sm:hidden
          "
        >
          <PricingSlider
            data={safeData}
            CardComponent={ServicePageCard}
            directProps
            loop={false}
            speed={450}
            breakpoints={{
              0: {
                slidesPerView: 1.06,
                spaceBetween: 12,
              },

              360: {
                slidesPerView: 1.08,
                spaceBetween: 14,
              },

              390: {
                slidesPerView: 1.08,
                spaceBetween: 14,
              },

              430: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
            }}
            sliderClassName="w-full min-w-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;