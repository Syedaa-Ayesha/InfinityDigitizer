import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const PricingSlider = ({
  data = [],
  CardComponent,
  cardProp = "item",
  prevClass,
  nextClass,
  slidesPerView = 1.12,
  spaceBetween = 4,
  breakpoints,
  centeredSlides = false,
  sliderClassName = "",
  directProps = false,
  loop = true,
  speed = 500,
}) => {
  if (!data.length || !CardComponent) {
    return null;
  }

  const navigation =
    prevClass && nextClass
      ? {
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }
      : true;

  return (
    <div className={`relative w-full ${sliderClassName}`}>
      <Swiper
        modules={[Navigation]}
        loop={loop}
        speed={speed}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        navigation={navigation}
        breakpoints={breakpoints}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex h-auto"
          >
            {directProps ? (
              <CardComponent {...item} />
            ) : (
              <CardComponent
                {...{
                  [cardProp]: item,
                }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PricingSlider;