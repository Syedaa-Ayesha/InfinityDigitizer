import { RefreshCw, Grid3X3, Palette, FileDown } from "lucide-react";

const PremiumProductStats = ({design}) => {
     const stats = [
    {
      value: design.stitchCount,
      label: "Stitch Count",
      icon: RefreshCw,
    },
    {
      value: design.designSize,
      label: "Design Size",
      icon: Grid3X3,
    },
    {
      value: design.threadColors,
      label: "Thread Colors",
      icon: Palette,
    },
    {
      value: design.fileFormats,
      label: "File Formats",
      icon: FileDown,
    },
  ];

  return (

     <section
      className="
        my-3
        mx-auto
        max-w-[1320px]
        overflow-hidden
        rounded-[20px]
        border
        border-[#ECECF3]
        bg-white
      "
    >
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
        "
      >
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={`
                flex
                flex-col
                items-center
                justify-center
                gap-[10px]
                py-7
                px-5
                text-center
                transition-all
                duration-300
                hover:bg-[#FAF8FF]

                ${
                  index !== stats.length - 1
                    ? "border-b border-[#ECECF3] lg:border-b-0 lg:border-r"
                    : ""
                }

                ${
                  index === 1
                    ? "lg:border-r border-[#ECECF3]"
                    : ""
                }
              `}
            >
              {/* Icon */}

              <div
                className="
                  flex
                 
                  h-13
                  w-13
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EDE7F8]
                "
              >
                <Icon
                  size={24}
                  strokeWidth={2}
                  className="text-[#7434E5]"
                />
              </div>

              {/* Value */}

              <h3
                className="
                  text-[26px]
                  font-extrabold
                  font-dmSans
                  leading-none
                  text-[#7434E5]

                  md:text-[32px]
                "
              >
                {item.value}
              </h3>

              {/* Label */}

              <p
                className="
                  text-[14px]
                  font-medium
                  text-[#6B7280]

                  md:text-[16px]
                "
              >
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default PremiumProductStats