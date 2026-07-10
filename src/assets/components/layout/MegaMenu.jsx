// import { serviceMenuData } from "../common/ServiceMenuData";
// import ServiceCard from "./ServiceCard";

import vector21 from '../../images/Vector 21.png'
import vector23 from '../../images/Vector 23.png'
import MegaMenuCard from "../layout/MegaMenuCard";
import { MegaMenuData } from "../common/MegaMenuData";
const MegaMenu = () => {

  return (
     <div
      className="
      absolute
      top-6
      z-50
      w-[1114px]
      h-[591px]
      -translate-x-1/4
      rounded-[18px]
      border
      border-[#FFFFFF]
      bg-white
      p-5
      "
     style={{
    boxShadow:
      "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
  }}
    >
      {/* Triangle */}

      <div
        className="
        absolute
        -top-2
        left-1/4
        h-5
        w-[28px]
        -translate-x-1/2
         rotate-45
        border-l
        border-t
        border-[#ECECEC]
        bg-white
        "
      />

      {/* Badge */}

      <div className="flex justify-center">

        <div
          className="
          flex
          items-center
          gap-3
          font-semibold
          uppercase
          tracking-[2px]
          text-[#7434E5]
          font-inter 
          text-[14px]
          "
        >
          {/* <span>adfd<span/> */}
<img src={vector23} alt="vector 23" />
          OUR SERVICES

          <img src={vector21} alt="vector 21" />

        </div>

      </div>

      {/* Heading */}

      <h2
        className="
        mt-4
        text-center
        font-inter
        text-[36px]
        font-semibold
        text-[#000000]
        "
      >
        Choose the service that fits your needs
      </h2>

      {/* Subtitle */}

      <p
        className="
        text-center
        text-[14px]
        font-medium
        font-inter
        text-[#000000]
        "
      >
        High quality. Fast turnaround. 100% satisfaction guaranteed.
      </p>

      {/* Cards */}

      <div className="mt-5 grid grid-cols-3 gap-[18px]">

        {MegaMenuData.map((service) => (

          <MegaMenuCard
            key={service.id}
            {...service}
          />

        ))}

      </div>

    </div>
  )
}

export default MegaMenu