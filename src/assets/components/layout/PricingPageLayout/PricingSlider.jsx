// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";



// const PricingSlider = ({data, CardComponent, slidesPerView = 1.12, spaceBetween = 20,
// }) => {
//         if (!CardComponent) {
//     console.error("CardComponent is undefined");
//     return null;
//   }
//   return (
//      <div className="relative mt-6">

//       <Swiper
//         modules={[Navigation]}
//         navigation
//        spaceBetween={spaceBetween}
//         slidesPerView={slidesPerView}
//         loop={true}
//         breakpoints={{
//           480: {
//             slidesPerView: 1.3,
//           },

//           640: {
//             slidesPerView: 2,
//           },

//           768: {
//             slidesPerView: 2.4,
//           },
//         }}
//       >
//         {data.map((item) => (
//           <SwiperSlide key={item.id} className="h-auto flex">
//             <CardComponent item={item} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

// export default PricingSlider

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const PricingSlider = ({
  data,
  CardComponent,
  cardProp = "item",
}) => {
  return (
    <div className="relative mt-6">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1.12}
        breakpoints={{
          480: {
            slidesPerView: 1.3,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.4,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="h-auto flex"
          >
            <CardComponent
              {...{ [cardProp]: item }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PricingSlider;