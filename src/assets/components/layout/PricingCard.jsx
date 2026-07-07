import { Check } from "lucide-react";

const PricingCard = ({
  title,
  price,
  logoType,
  features,
  active,
}) => {
  return (
    <div
      className={`
        relative
        w-93
        h-147
        rounded-3xl
        overflow-hidden
        transition-all
        duration-300
        bg-white
        

        ${
          active
            ? "border border-[#7434E5]"
            : "border border-[#ECECEC] shadow-[0_12px_35px_rgba(0,0,0,.08)]"
        }
      `}
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,.12) 2.34%, rgba(116,52,229,0) 30%, rgba(116,52,229,0) 65%, rgba(116,52,229,.12) 97.66%), #fff",
      }}
    >
      {/* Top */}
<div className="flex  flex-col gap-11.5 ">
      <div className="px-9 pt-10.5">

        <h4 className="uppercase font-dmSans text-[24px] font-bold text-[#757575]">
          {title}
        </h4>

        <div className=" flex items-end">

          <span className="text-[84px] font-dmSans tracking-[-6px]  text-black font-extrabold leading-none">
           $ {price}
          </span>
<span className="ml-1 text-[84px] font-black leading-24 text-[#7434E5]">
            /
          </span>
          <span className="font-inter mb-1 text-[20px] font-semibold text-[#757575]">
            {logoType}
          </span>

        </div>


        <div className="mt-11.5 h-0.5 rounded-full bg-[#7434E5]" />
      </div>

      {/* Features */}

      <div className=" px-8">

        {features.map((feature, index) => (

          <div
            key={index}
            className="mb-6 flex items-center gap-4"
          >

            <div className="flex h-5.25 w-5.25 items-center justify-center rounded-full border-2 border-[#7434E5]">

              <Check
                
                strokeWidth={2}
                className="text-[#7434E5] "
              />

            </div>

            <p className="text-base font-medium uppercase text-[#757575]">
              {feature}
            </p>

          </div>

        ))}

      </div>

      {/* Button */}

      <div className="absolute bottom-15.5 left-0 right-0 flex justify-center">

        <button
          className="
          h-12
          w-41.25
          rounded-full
          background: linear-gradient(94.89deg, #6724DB 0%, #5116B6 100%)
          text-white
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          "
        >
          Order Now →
        </button>

      </div>
    </div>
    </div>
  );
};

export default PricingCard;