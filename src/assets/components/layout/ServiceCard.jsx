import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  button,
  learnMore,
  quoteLink,
image,
}) => {
  return (
    <div
      className="
      relative
      h-[470px]
      rounded-[18px]
      border
      border-[#ECECEC]
      bg-white
      p-7
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_20px_50px_rgba(0,0,0,.12)]
      "
    >
      {/* Top */}

      <div className="flex justify-between items-start gap-5">

        {/* Left */}

        <div className="flex-1">

          {/* Icon */}

          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#F8F4FF]
            shadow-[0_8px_20px_rgba(116,52,229,.12)]
            "
          >
            <Icon
              size={30}
              className="text-[#7434E5]"
              strokeWidth={1.8}
            />
          </div>

          {/* Title */}

          <h3
            className="
            mt-5
            text-[28px]
            font-bold
            leading-8
            text-[#7434E5]
            "
          >
            {title}
          </h3>

          {/* Description */}

          <p
            className="
            mt-3
            text-[15px]
            leading-6
            text-[#6B7280]
            "
          >
            {description}
          </p>
        </div>

        {/* Preview */}

        <div
          className="
          flex
          h-[110px]
          w-[110px]
          items-center
          justify-center
          rounded-[14px]
          bg-[#F6F6F6]
          overflow-hidden
          "
        >
          {image && (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          )}
        </div>

      </div>

      {/* Features */}

      <div className="mt-8 space-y-3">

        {features.map((feature, index) => (

          <div
            key={index}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={16}
              className="text-[#7434E5] shrink-0"
              fill="#7434E5"
              stroke="white"
            />

            <span
              className="
              text-[14px]
              text-[#4B5563]
              "
            >
              {feature}
            </span>

          </div>

        ))}

      </div>

      {/* Bottom */}

      <div
        className="
        absolute
        bottom-7
        left-7
        right-7
        "
      >

        <Link
          to={quoteLink}
          className="
          flex
          h-12
          items-center
          justify-center
          rounded-lg
          bg-gradient-to-r
          from-[#7434E5]
          to-[#A877FF]
          text-white
          font-semibold
          transition-all
          duration-300
          hover:opacity-90
          "
        >
          {button}
        </Link>

        <Link
          to={learnMore}
          className="
          mt-4
          flex
          items-center
          justify-center
          gap-2
          text-[15px]
          font-semibold
          text-[#7434E5]
          "
        >
          Learn More

          <ArrowRight size={16} />

        </Link>

      </div>

    </div>
  )
}

export default ServiceCard