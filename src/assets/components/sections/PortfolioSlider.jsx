import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionHeading from "../common/SectionHeading";
import "swiper/css";
import "swiper/css/navigation";
import {
  Users,
  Clock3,
  BadgeCheck,
  Shield,
  ChevronLeft,
  ChevronRight,
  Play,
  CircleUser
} from "lucide-react";

import work1 from "../../images/Trustprofile01.png";
const portfolio = [
  { id: 1, image: work1 },
  { id: 2, image: work1 },
  { id: 3, image: work1 },
  { id: 4, image: work1 },
  { id: 5, image: work1 },
  { id: 6, image: work1 },
  { id: 7, image: work1 },
  { id: 8, image: work1 },
];


const features = [
  {
    icon: <Users size={20} strokeWidth={2.2} />,
    title: "35,000+",
    text: "Happy Customers",
  },
  {
    icon: <Clock3 size={20} strokeWidth={2.2} />,
    title: "Since 2012",
    text: "Trusted Worldwide",
  },
  {
    icon: <BadgeCheck size={20} strokeWidth={2.2} />,
    title: "No Hidden Charges",
    text: "100% Transparent Pricing",
  },
  {
    icon: <Shield size={20} strokeWidth={2.2} />,
    title: "Secure & Private",
    text: "Your Data Is Safe With Us",
  },
];

const PortfolioSlider = () => {
  return (
    <section className="py-12.5" style={{
    background:
      "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
  }}>

      <div className="max-w-330  px-4 mx-28.25" >

        {/* Badge */}
<SectionHeading
  icon={<CircleUser size={24} />}
  badge="Trusted by Thousands"
  heading="SEE THE WORK WE'RE KNOWN FOR"
  description="Every project we take on ends up here. Embroidery digitizing, high quality vector art conversion & logo designing, scroll through and see how the work actually turns out. No stock samples, no mockups, just real orders we've completed for real clients across the USA, UK, Canada, and Australia."
/>
      

        {/* Slider */}

        <div className="relative mt-14">

          {/* Previous */}

          <button
            className="custom-prev absolute -left-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl"
          >
            <ChevronLeft />
          </button>

          {/* Swiper */}

          <Swiper
            modules={[Navigation]}
            loop={true}
            speed={700}
            spaceBetween={30}
            navigation={{
              prevEl: ".pricing-prev",
              nextEl: ".pricing-next",
            }}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween:20,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4,
              },
              
            }}
          >
            {portfolio.map((item) => (
              <SwiperSlide key={item.id}>

                <div className="relative h-85 overflow-hidden rounded-[18px]">

                  <img
                    src={item.image}
                    alt="portfolio"
                    className="h-full w-full object-cover"
                  />

                  {/* Play Button */}

                  <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">

                    <Play
                      size={28}
                      fill="black"
                    />

                  </button>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next */}

          <button
            className="custom-next absolute -right-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl"
          >
            <ChevronRight />
          </button>

        </div>

        {/* Instagram Button */}

        <div className="flex justify-center my-7.5">

          <a
            href="#"
            className="rounded-sm bg-[#7434E5] px-6 py-3 text-basis font-inter text-white transition hover:bg-[#5F2FD3]"
          >
            <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    .
  </svg>
            Follow us on Instagram
          </a>

        </div>

      </div>
<section className="bg-[#46546A] py-10">
  <div className="max-w-330 mx-auto px-4">

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

      {features.map((item, index) => (

        <div
          key={index}
          className={`
            flex items-center gap-4
            py-6
            px-8

            ${
              index !== features.length - 1
                ? "xl:border-r border-white/15"
                : ""
            }
          `}
        >

          {/* Icon */}

          <div className="flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-full bg-white">

            <div className="text-[#7434E5]">

              {item.icon}

            </div>

          </div>

          {/* Text */}

          <div>

            <h3 className="font-dmSans text-[18px] font-bold text-white">

              {item.title}

            </h3>

            <p className="mt-1 font-inter text-[14px] leading-5 text-[#D5D8DF]">

              {item.text}

            </p>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
    </section>
  );
};

export default PortfolioSlider;