import SolidButton from "../SolidButton";
import { CircleCheck, ArrowRight } from "lucide-react";
const PricingCard = ({ item}) => {
  return (
<div
      className="
        h-full
        w-full
        flex
        flex-col
        rounded-[20px]
        border
        border-[#E7E3ED]
        bg-white
        px-4
        py-5

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Title */}

      <h3
        className="
          min-h-[52px]

          text-center

          font-dmSans
          font-bold

          text-[16px]
          leading-6

          text-[#0F1729]

          lg:min-h-[60px]
        "
      >
        {item.title}
      </h3>

      {/* Image */}

      <div
        className="
          mt-4

          flex
          items-center
          justify-center

          rounded-2xl

          border-2
          border-dashed
          border-[#FF5A52]

          bg-[#FFF7F6]

          overflow-hidden

          h-[170px]

          sm:h-[190px]

          lg:h-[218px]
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            w-auto

            max-w-[82%]

            h-auto

            max-h-[120px]

            sm:max-h-[140px]

            lg:max-h-[160px]

            object-contain
          "
        />
      </div>

      {/* Price */}

      <div className="mt-5 text-center">

        <p
          className="
            text-[11px]

            font-bold

            uppercase

            tracking-[1px]

            text-[#7434E5]
          "
        >
          STARTING FROM
        </p>

        <h2
          className="
            mt-1

            font-dmSans

            text-[36px]

            font-extrabold

            leading-none

            text-[#182032]

            lg:text-[40px]
          "
        >
          {item.price}
        </h2>

      </div>

      {/* Features */}

      <div
        className="
          mt-5

          flex-1

          space-y-3
        "
      >
        {item.features.map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-start
              gap-2
            "
          >
            <CircleCheck
              size={15}
              className="
                mt-[2px]
                shrink-0
                fill-[#7434E5]
                text-white
              "
            />

            <span
              className="
                text-[14px]
                leading-6

                text-[#424957]
              "
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}

      <div className="mt-auto pt-6">
        <SolidButton
          Icon={ArrowRight}
          title="Order Now"
          classname = "py-3 w-full"
        />
      </div>

    </div>
  )
}

export default PricingCard