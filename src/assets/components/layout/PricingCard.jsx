import { Check } from "lucide-react";

const PricingCard = ({ item }) => {
  return (
    <div
      className="
        pricing-card
        relative
        flex
        h-[378px]
        w-[320px]
        flex-col
        rounded-[15px]
        border
        border-transparent
        bg-white
        px-[22px]
        py-[22px]
        shadow
        transition-all
        duration-500
        ease-out

        lg:h-[368px]
        lg:px-[22px]
        lg:py-[22px]
      "
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
      }}
    >
      {/* ================= TITLE ================= */}

      <h3
        className="
          min-h-[22px]
          text-center
          font-dmSans
          text-base
          font-semibold
          leading-[22px]
          text-[#6D6D75]
          uppercase
        "
      >
        {item.title}
      </h3>

      {/* ================= PRICE ================= */}

      <div
        className="
          mt-[14px]
          flex
          items-baseline
          justify-center
          whitespace-nowrap
        "
      >
        <span
          className="
            font-dmSans
            text-[54px]
            font-bold
            leading-none
            tracking-[-2px]
            text-black
          "
        >
          {item.price}
        </span>

        <span
          className="
            mx-[7px]
            font-dmSans
            text-[46px]
            font-bold
            leading-none
            text-[#7434E5]
          "
        >
          /
        </span>

        <span
          className="
            font-dmSans
            text-[13px]
            font-semibold
            uppercase
            text-[#77777F]
          "
        >
          {item.logoType}
        </span>
      </div>

      {/* ================= DIVIDER ================= */}

      <div
        className="
          mt-[22px]
          h-[1.5px]
          w-full
          bg-[#7434E5]
        "
      />

      {/* ================= FEATURES ================= */}

      <ul
        className="
          mt-[23px]
          flex
          flex-col
          gap-[14px]
        "
      >
        {item.features.map((feature, index) => (
          <li
            key={`${item.id}-${index}`}
            className="
              flex
              items-center
              gap-[8px]
              font-inter
              text-[12px]
              font-medium
              uppercase
              leading-[18px]
              text-[#6D6D75]
            "
          >
            <span
              className="
                flex
                h-[15px]
                w-[15px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-[1.5px]
                border-[#7434E5]
              "
            >
              <Check
                size={10}
                strokeWidth={3}
                className="text-[#7434E5]"
              />
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* ================= ORDER BUTTON ================= */}

      <button
        type="button"
        className="
          mt-auto
          mx-auto
          flex
          h-[34px]
          min-w-[128px]
          items-center
          justify-center
          gap-[8px]
          rounded-full
          bg-[#6820D9]
          px-[20px]
          font-dmSans
          text-[11px]
          font-semibold
          text-white
          shadow-[0px_6px_14px_rgba(104,32,217,0.25)]
          transition-all
          duration-300
          hover:bg-[#5915C5]
          hover:shadow-[0px_8px_18px_rgba(104,32,217,0.32)]
        "
      >
        Order Now
        <span className="text-[16px] leading-none">
          →
        </span>
      </button>
    </div>
  );
};

export default PricingCard;