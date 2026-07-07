import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "../layout/TextimonialCard";
import { TestimonialsData } from "../../components/common/TestimonialData";
import { ChevronLeft, ChevronRight, MessageCircle, Star } from "lucide-react";


const Testimonial = () => {
    return (
        <section
            className="py-12.5"
            style={{
                background:
                    "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
            }}
        >

            <SectionHeading
                icon={<MessageCircle size={24} />}
                badge="Testimonials"
                heading="Feedback From Our Customers"
                description=""
            />
            <div className="flex justify-center align-middle my-4.5">
                <div className="h-0.5 w-12 bg-[#D4D4E0] mt-0.5"></div>
                <div className="h-2 w-2 bg-[#7434E5] rounded-full mx-1.5">
                </div>
                <div className="h-0.5 w-12 bg-[#D4D4E0] mt-0.5"></div>

            </div>
            <div className="flex w-fit flex-col gap-4.5 mx-auto ">
            <p className="text-center text-[18px] text-[#6B6B80] font-inter">Here's what our customers have to say about working with us.</p>
            <div className="max-w-[410px] flex  justify-around align-middle">
                <div className="flex  text-[#2E2E40] font-inter text-base">
                    <Star color="#7434E5" fill="#7434E5" />
                    <Star color="#7434E5" fill="#7434E5" />
                    <Star color="#7434E5" fill="#7434E5" />
                    <Star color="#7434E5" fill="#7434E5" />
                    <Star color="#7434E5" fill="#7434E5" />
                    </div>
                <p className="text-[#2E2E40] font-inter text-base">4.9 out of 5 based on</p>
                <div className="font-bold  text-[#2E2E40] font-inter text-base">1,200+ reviews</div>
                </div>
            </div>
            <div className="mx-auto mt-14 max-w-[1320px] ">

                {/* Swiper */}

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
                        <SwiperSlide key={item.id}  >

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

                {/* Navigation Buttons */}

                <div className="mt-10 flex items-center justify-center gap-4">

                    <button
                        className="
              testimonial-prev
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#E5E7EB]
              bg-white
              shadow-[0_8px_25px_rgba(0,0,0,.12)]
              transition-all
              duration-300
              hover:bg-[#7434E5]
              hover:text-white
            "
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        className="
              testimonial-next
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#E5E7EB]
              bg-white
              shadow-[0_8px_25px_rgba(0,0,0,.12)]
              transition-all
              duration-300
              hover:bg-[#7434E5]
              hover:text-white
            "
                    >
                        <ChevronRight size={22} />
                    </button>

                </div>

            </div>
<div className="mt-6 flex justify-center">
  <a
    href="#"
    className="text-base font-semibold text-[#7434E5] underline underline-offset-4 pointer font-inter"
  >
    See all
  </a>
</div>
        </section>
    );
};

export default Testimonial;