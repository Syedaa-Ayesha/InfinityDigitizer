import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CommonTab = ({
  tabs,
  activeTab,
  setActiveTab,
  classname = "",
}) => {
  return (
    <div className="w-full">

      {/* Desktop Tabs */}
      <div className="hidden lg:flex justify-center">
        <div
          className={`
            flex
            items-center
            gap-3
            rounded-full
            bg-white
            p-2
            shadow-lg
            ${classname}
          `}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-[#E7E3ED]
                  px-7
                  py-3
                  font-dmSans
                  text-sm
                  transition-all
                  duration-300
                  cursor-pointer

                  ${
                    activeTab === tab.id
                      ? "bg-[#7434E5] text-white"
                      : "text-[#1D2433] hover:bg-[#F5F1FF]"
                  }
                `}
              >
                {Icon && <Icon size={18} />}
                {tab.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView={1.5}
          navigation
          className="faq-tabs-slider"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <SwiperSlide key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-[#E7E3ED]
                    px-[22px]
                    py-[14px]
                    font-medium
                    font-dmSans
                    text-sm
                    transition-all
                    duration-300
                    cursor-pointer

                    ${
                      activeTab === tab.id
                        ? "bg-[#7434E5] text-white"
                        : "bg-white text-[#424957]"
                    }
                  `}
                >
                  {Icon && <Icon size={16} />}
                  {tab.title}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </div>
  );
};

export default CommonTab;