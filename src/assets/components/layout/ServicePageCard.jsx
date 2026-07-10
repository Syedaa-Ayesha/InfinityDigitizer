
import { ArrowRight } from "lucide-react";
const ServicePageCard = ({
image,
  title,
  description,
  onClick,
}) => {
  return (
   <div
      className="
      group
      flex
      h-full
      w-[412px]
      flex-col
      rounded-[20px]
      border
      border-[#E7E3ED]
      bg-white
      p-[18px]
      shadow-[0px_4px_20px_rgba(211,202,226,0.26)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0px_18px_40px_rgba(116,52,229,0.12)]
    "
    >
      {/* Top */}

      <div className="flex items-center gap-5">

        {/* Icon */}

        <div
          className="
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-[14px]
          bg-[#EDE7F8]
        "
        >
          {/* <Icon
            size={36}
            strokeWidth={1.8}
            className="text-[#7434E5]"
          /> */}
          <img src={image} alt="Card Images" />
        </div>

        {/* Title */}

        <h3
          className="
          font-inter
          text-[24px]
          font-semibold
          leading-[120%]
          text-[#000000]
          tracking-[-0.02em]
        "
        >
          {title}
        </h3>
      </div>

      {/* Description */}

      <p
        className="
        mt-5
        flex-1
        font-inter
        text-[14px]
        leading-5
        text-[#000000]/70
      "
      >
        {description}
      </p>

      {/* Button */}

      <button
        onClick={onClick}
        className="
        mt-5
        flex
        w-fit
        items-center
        gap-3
        rounded-[6px]
        bg-[linear-gradient(100.36deg,_#6C29E0_0%,_#5413C3_100%)]
        pr-[18px]
        pl-3
        py-[10px]
        font-dmSans
        text-[16px]
        font-semibold
        uppercase
        text-white
        transition-all
        duration-300
        hover:scale-105
      "
     
      >
        ORDER NOW

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  )
}

export default ServicePageCard