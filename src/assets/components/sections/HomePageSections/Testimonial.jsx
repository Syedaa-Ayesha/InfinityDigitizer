import { Link } from "react-router-dom";
import SectionHeading from "../../layout/SectionHeading";
import TestimonialCard from "../../layout/HomeLayout/TextimonialCard";
import { TestimonialData } from "../../common/TestimonialData";
import PricingSlider from "../../layout/PricingSlider";

import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Star,
} from "lucide-react";

const Testimonial = () => {
  return (
    <section
      className="p-[22px] lg:py-12.5"
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
      }}
    >
      {/* ================= SECTION HEADING ================= */}

      <SectionHeading
        icon={<MessageCircle/>}
        badge="Testimonials"
        heading="FEEDBACK FROM OUR COSTUMERS"
        description=""
      />

      {/* ================= DECORATIVE DIVIDER ================= */}

      <div className="mt-2 mb-5 lg:my-4.5 flex items-center justify-center">
        <div className="mt-0.5 h-0.5 w-12 bg-[#D4D4E0]" />

        <div className="mx-1.5 h-2 w-2 rounded-full bg-[#7434E5]" />

        <div className="mt-0.5 h-0.5 w-12 bg-[#D4D4E0]" />
      </div>

      {/* ================= REVIEW SUMMARY ================= */}

      <div className="mx-auto flex w-fit flex-col gap-4.5">
        <p className="text-center font-inter text-[18px] text-[#6B6B80]">
          Here's what our customers have to say about working with us.
        </p>

        <div className="flex flex-col max-w-[450px] items-center justify-center  mx-auto gap-2 lg:flex-row">
          {/* Stars */}

          <div className="flex text-[#2E2E40]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                color="#7434E5"
                fill="#7434E5"
              />
            ))}
          </div>

          <p className="font-inter text-base text-[#2E2E40]">
            4.9 out of 5, based on <span className="font-inter text-base font-bold text-[#2E2E40] whitespace-pre-wrap">
             1,200+ reviews
          </span>
          </p>

          
        </div>
      </div>

      {/* ================= TESTIMONIAL SLIDER ================= */}

      <div className="mx-auto mt-8 lg:mt-14 max-w-[1320px]">
        <PricingSlider
          data={TestimonialData}
          CardComponent={TestimonialCard}
          cardProp="item"
          prevClass="testimonial-prev"
          nextClass="testimonial-next"
          slidesPerView={1}
          spaceBetween={28}
           breakpoints={{
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }}
        />

        {/* ================= NAVIGATION BUTTONS ================= */}

        <div className="mt-4 lg:mt-10 flex items-center justify-center gap-4">
          {/* Previous */}

          <button
            type="button"
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
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}

          <button
            type="button"
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
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* ================= SEE ALL ================= */}

      <div className="mt-6 flex justify-center">
        <Link
        to="/reviews"
          className="
            font-inter
            text-base
            font-semibold
            text-[#7434E5]
            underline
            underline-offset-4
          "
        >
          See all
        </Link>
      </div>
    </section>
  );
};

export default Testimonial;