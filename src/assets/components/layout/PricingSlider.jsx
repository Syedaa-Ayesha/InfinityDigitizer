// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// const PricingSlider = ({
//   data,
//   CardComponent,
//   cardProp = "item",
//   prevClass,
//   nextClass,
//   slidesPerView = 1.12,
//   spaceBetween = 20,
//   breakpoints,
// }) => {
//   return (
//     <div className="relative mt-6">
//       <Swiper
//         modules={[Navigation]}
//         loop={true}
//         speed={400}
//         spaceBetween={spaceBetween}
//         slidesPerView={slidesPerView}
//         navigation={
//           prevClass && nextClass
//             ? {
//                 prevEl: `.${prevClass}`,
//                 nextEl: `.${nextClass}`,
//               }
//             : true
//         }
//         breakpoints={
//           breakpoints || {
//             480: {
//               slidesPerView: 1,
//             },
//             640: {
//               slidesPerView: 2.4,
//             },
//             1024: {
//               slidesPerView: 4,
//             },
//           }
//         }
//       >
//         {data.map((item) => (
//           <SwiperSlide key={item.id} className="flex h-auto">
//             <CardComponent
//               {...{
//                 [cardProp]: item,
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default PricingSlider;



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