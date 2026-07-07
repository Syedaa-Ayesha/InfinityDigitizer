import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "../layout/TextimonialCard";
import { TestimonialsData } from "../../components/common/TestimonialData";
import {ChevronLeft, ChevronRight} from 'lucide-react'
const Testimonial = () => {
  return (
 <section className="py-[50px]  m-auto "  style={{
    background:
      "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
  }}>

<div className="relative mx-auto mt-14 max-w-[1320px] bg-transparent">

      {/* Left Arrow */}

      <button
        className="
        testimonial-prev
        absolute
        left-[-30px]
        top-1/2
        z-20
        flex
        h-12
        w-12
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white
        shadow-[0_8px_25px_rgba(0,0,0,.15)]
        transition
        hover:scale-105
        "
      >
        <ChevronLeft />
      </button>

      {/* Slider */}

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next",
        }}
        loop={true}
        speed={700}
        spaceBetween={28}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {TestimonialsData.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonialCard
              quote={item.quote}
              rating={item.rating}
              name={item.name}
              company={item.company}
              image={item.image}
              country={item.country}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Arrow */}

      <button
        className="
        testimonial-next
        absolute
        right-[-30px]
        top-1/2
        z-20
        flex
        h-12
        w-12
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white
        shadow-[0_8px_25px_rgba(0,0,0,.15)]
        transition
        hover:scale-105
        "
      >
        <ChevronRight />
      </button>
    </div>


   
 </section>
  )
}

export default Testimonial