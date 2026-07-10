import { CheckCircle2, ArrowRight } from "lucide-react";

const MegaMenuCard = ({
    icon: Icon,
    title,
    description,
    features,
    image,
    buttonText,
    linkText,
}) => {
    return (
        <div
            className="
    group
    relative
    flex
    flex-col
    h-[413px]
    rounded-[12px]
    border
    bg-[#F3F3F34A]
    p-[18px]
    shadow-[0px_2px_11.2px_rgba(0,0,0,0.18)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_20px_45px_rgba(116,52,229,.18)]
"
        >
            {/* Top */}

            <div className="flex items-start gap-2">

                {/* Icon */}

                <div
                    className="
          flex
          h-[73px]
          w-[73px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-[0px_12px_30px_rgba(0,0,0,0.12),inset_0px_2px_6px_rgba(255,255,255,0.95),inset_0px_-2px_8px_rgba(0,0,0,0.03)]
        "
                >
                    <Icon
                        size={48}
                        strokeWidth={1.8}
                        className="text-[#7434E5]
            "
                    />
                </div>

                {/* Heading */}

                <div>

                    <h3
                        className="
            font-inter
            font-bold
            text-[26px]
            -leading-[3%]
            text-[#7434E5]
          "
                    >
                        {title}
                    </h3>

                    <p
                        className="
    mt-1
    min-h-[70px]
    text-[12px]
    leading-[22px]
    text-[#000000]
  "
                    >
                        {description}
                    </p>

                </div>

            </div>

            {/* Middle */}

            <div className="mt-3 flex gap-2">

                {/* Features */}

                <div className="flex-1 space-y-2 capitalize">

                    {features.map((item, index) => (

                        <div
                            key={index}
                            className="flex items-center gap-2"
                        >

                            <CheckCircle2
                                size={14}
                                fill="#ffffff"

                                stroke="#7434E5"
                            />

                            <span
                                className="
                text-[12px]
                text-[#000000]
              "
                            >
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

                {/* Preview */}

                <div
                    className="
          flex
          h-[135px]
          w-[111px]
          shrink-0
          items-center
          justify-center
          rounded-[16px]
          bg-white
          shadow-[0_15px_35px_rgba(0,0,0,.12)]
        "
                >

                    <img
                        src={image}
                        alt={title}
                        className="max-h-[95px] object-contain"
                    />

                </div>

            </div>

            {/* Bottom */}

            <div className="absolute w-[310px] bottom-1">

                <button
                    className="
          w-full
          rounded-[8px]
          bg-[linear-gradient(94.89deg,_#6724DB_0%,_#5116B6_100%)]
          py-[10px]
          px-[46px]
          text-[12px]
          font-bold
          font-dmSans
          text-white
          transition
          duration-300
          hover:opacity-90
        "
                >
                    {buttonText}
                </button>

                <button
                    className="
        my-2
          flex
          w-full
          items-center
          justify-center
          gap-2
          font-semibold
          text-[#7434E5]
        "
                >
                    {linkText}

                    <ArrowRight
                        size={18}
                        className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
                    />

                </button>

            </div>

        </div>
    )
}

export default MegaMenuCard