import { Ruler, Info } from "lucide-react";

const SizeGuideHeader = () => {
  return (
    <div
      className="
        flex
        items-start
        justify-between
        gap-8
      "
    >

      {/* Left Content */}

      <div className="flex items-center gap-4">

        {/* Icon */}

        <div
          className="
            flex
            h-[64px]
            w-[64px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-[0px_8px_20px_rgba(0,0,0,0.06)]
          "
        >
          <Ruler
            size={30}
            strokeWidth={2}
            className="text-[#7434E5]"
          />
        </div>

        {/* Text */}

        <div>
          <h1
            className="
              font-dmSans
              text-[28px]
              font-bold
              leading-[34px]
              text-[#0C0C30]
            "
          >
            Size Guidelines
          </h1>

          <p
            className="
              mt-1.5
              max-w-[430px]
              font-inter
              text-[11px]
              leading-[16px]
              text-[#737789]
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
          w-[350px]
          shrink-0
          items-start
          gap-3
          rounded-[12px]
          bg-white
          px-4
          py-3
          shadow-[0px_6px_18px_rgba(0,0,0,0.06)]
        "
      >

        {/* Icon */}

        <div
          className="
            flex
            h-[28px]
            w-[28px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#7434E5]
          "
        >
          <Info
            size={14}
            strokeWidth={2.5}
            className="text-white"
          />
        </div>

        {/* Content */}

        <div>
          <h3
            className="
              font-dmSans
              text-[10px]
              font-bold
              text-[#111118]
            "
          >
            Important Note
          </h3>

          <p
            className="
              mt-1
              font-inter
              text-[9px]
              leading-[13px]
              text-[#737789]
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