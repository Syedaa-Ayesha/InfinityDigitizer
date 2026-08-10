import { Ruler, Info } from "lucide-react";

const SizeGuideHeader = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-start
        lg:justify-between
        lg:flex-row
        gap-8
      "
    >

      {/* Left Content */}

      <div className="flex items-center gap-4">

        {/* Icon */}

        <div
          className="
            flex
            h-[50px]
            w-[50px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-[0px_8px_20px_rgba(0,0,0,0.06)]
          "
        >
          <Ruler
            size={26}
            strokeWidth={1.4}
            className="text-[#7434E5]"
          />
        </div>

        {/* Text */}

        <div>
          <h1
            className="
              font-dmSans
              text-[36px]
              font-bold
              leading-[34px]
              text-[#0C0C30]
            "
          >
            Size <span className="text-[#7434E5]"> Guidelines</span>
          </h1>

          <p
            className="
              mt-3
              max-w-[430px]
              font-inter
              text-sm
              leading-[22px]
              text-[#6B7280]
            "
          >
            Find the recommended embroidery sizes for different placements
            and garments to get the best stitching results.
          </p>
        </div>

      </div>


      {/* Important Note */}

      <div
        className="
          flex
          max-w-[450px]
          shrink-0
          items-start
          gap-4
          rounded-[12px]
          bg-white
          px-6
          py-5
          shadow-[0px_6px_18px_rgba(0,0,0,0.06)]
        "
      >

        {/* Icon */}

        <div
          className="
            flex
            h-[44px]
            w-[44px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#7434E5]
          "
        >
          <Info
            size={20}
            strokeWidth={1.5}
            className="text-white"
          />
        </div>

        {/* Content */}

        <div>
          <h3
            className="
              font-dmSans
              text-base
              font-bold
              text-[#0C0C30]
            "
          >
            Important Note
          </h3>

          <p
            className="
              mt-1
              font-inter
              text-sm
              leading-[22px]
              text-[#6B7280]
            "
          >
            These are general guidelines. Final size may vary depending on
            design complexity and fabric type.
          </p>
        </div>

      </div>

    </div>
  );
};

export default SizeGuideHeader;