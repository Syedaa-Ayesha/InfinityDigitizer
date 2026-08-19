import ServiceHighlights from "../ServiceHighlights";
import logo01 from "../../../images/logo01.png";
import logo02 from "../../../images/logo02.png";
import logo03 from "../../../images/logo03.png";
import logo04 from "../../../images/logo04.png";
import logo05 from "../../../images/logo05.png";
import logo06 from "../../../images/logo06.png";

import {
  Target,
  BrushCleaning,
  Layers,
  Smile,
} from "lucide-react";

const HeroLogoContainer = () => {
  const services = [
    {
      title: `Precision\nDigitizing`,
      Icon: Target,
    },
    {
      title: `Clean\nStitches`,
      Icon: BrushCleaning,
    },
    {
      title: `Perfect\nSequencing`,
      Icon: Layers,
    },
    {
      title: `Customer\nSatisfaction`,
      Icon: Smile,
    },
  ];

  const logos = [
    logo01,
    logo02,
    logo03,
    logo04,
    logo05,
    logo06,
  ];

  return (
    <div
      className="
        w-full
        max-w-[656px]
        rounded-[22px]
        border
        border-[#E9E9E9]
        bg-white
        p-4
        shadow-2xl

        sm:p-5

        lg:h-[579px]
        lg:p-7
      "
    >
      {/* ================= LOGO GRID ================= */}

      <div
        className="
          grid
          grid-cols-3
          gap-2
          sm:gap-3
          lg:gap-4
        "
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="
              flex
              h-[100px]
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              bg-[#F4EFFC]
              shadow-lg

              sm:h-[135px]

              lg:h-[199px]
            "
          >
            <img
              src={logo}
              alt={`Embroidery design ${index + 1}`}
              className="
                max-h-[90%]
                max-w-[90%]
                object-contain
              "
            />
          </div>
        ))}
      </div>

      {/* ================= DIVIDER ================= */}

      <div
        className="
          my-5
          h-[1px]
          w-full
          bg-gray-300

          sm:my-6

          lg:my-[34px]
        "
      />

      {/* ================= SERVICE HIGHLIGHTS ================= */}

      {/* <div
        className="
          mx-auto
          flex
          w-full
          flex-wrap
          justify-center
          gap-3

          sm:gap-4

          lg:mb-7
        "
      >
        {services.map((service, index) => (
          <ServiceHighlights
            key={index}
            title={service.title}
            Icon={service.Icon}
            variant="logo"
          />
        ))}
      </div> */}


      {/* ================= LOGO SERVICE HIGHLIGHTS ================= */}

<div
  className="
    mx-auto
    flex
    w-full  
    justify-center
    gap-2

    lg:flex-nowrap
    lg:gap-0
    lg:mb-7
  "
>
  {services.map((service, index) => (
    <ServiceHighlights
      key={index}
      title={service.title}
      Icon={service.Icon}
      variant="logo"
      
      width="
      flex-col
        w-[calc(50%-6px)]
        lg:w-auto
        lg:flex-1
        border-gray-200
        border-r-1
        last:border-r-0
        lg:flex-row
      "
    />
  ))}
</div>
    </div>
  );
};

export default HeroLogoContainer;