import ServicePageCard from "../../layout/ServicePageLayout/ServicePageCard";
import PricingSlider from "../../layout/PricingSlider";

const ServiceCardsSection = ({ data }) => {
  return (
    <section className="w-full py-4 sm:py-5 lg:py-6">
      <div
        className="
          mx-auto
          w-full
          max-w-[1320px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= DESKTOP / TABLET ================= */}

        <div
          className="
            hidden
            grid-cols-1
            gap-6
            sm:grid
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-7
          "
        >
          {data.map((item) => (
            <ServicePageCard
              key={item.id}
              {...item}
            />
          ))}
        </div>

        {/* ================= MOBILE SLIDER ================= */}

        <div className="block sm:hidden">
          <PricingSlider
            data={data}
            CardComponent={ServicePageCard}
            directProps
            breakpoints={{
              0: {
                slidesPerView: 1.08,
                spaceBetween: 14,
              },
              375: {
                slidesPerView: 1.08,
                spaceBetween: 16,
              },
              430: {
                slidesPerView: 1.12,
                spaceBetween: 16,
              },
            }}
            sliderClassName="mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;