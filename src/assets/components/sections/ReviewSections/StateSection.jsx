import {
  UsersRound,
  Star,
  Award,
  Globe2,
} from "lucide-react";

const statsData = [
  {
    id: 1,
    type: "rating",
    value: "4.9",
    label: "Client Rating",
    subText: "Out of 5",
    reviewText: "Based on 350+ Reviews",
  },
  {
    id: 2,
    icon: UsersRound,
    title: "Client Rating",
    value: "100+",
  },
  {
    id: 3,
    icon: Star,
    title: "Successful Projects",
    value: "90%",
  },
  {
    id: 4,
    icon: Award,
    title: "Returning Customers",
    value: "15+",
  },
  {
    id: 5,
    icon: Globe2,
    title: "Years of Industry Experience",
    value: "4",
  },
];

const StatsSection = () => {
  return (
    <section id="success" className="" >
      <div
        className="
          mx-auto
          w-full
          max-w-[1300px]
          overflow-hidden
          rounded-[22px]  
        bg-white
         shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]
          grid
          grid-cols-1
        //   sm:grid-cols-1
          lg:grid-cols-5
          
        "
      >
        {statsData.map((item, index) => {
          const Icon = item.icon;
const isLast = index === statsData.length - 1;
          return (
            <div
              key={item.id}
              className={`
  relative
  flex
  min-h-[210px]
  flex-col
  items-center
  justify-center
  px-5
  py-7
  text-center
  border-[#E2DFE8]

  /* Mobile + Tablet */
  ${!isLast ? "max-lg:border-b" : ""}
  ${!isLast ? "max-lg:border-r" : ""}

  /* Desktop */
  ${
    !isLast
      ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-[120px] lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-[#E2DFE8]"
      : ""
  }
`}
            >
              {item.type === "rating" ? (
                <>
                  {/* Rating Number */}

                  <h3
                    className="
                      font-dmSans
                      text-[46px]
                      font-bold
                      leading-none
                      text-[#7434E5]
                      lg:text-[46px]
                    "
                  >
                    {item.value}
                  </h3>

                  {/* Stars */}

                  <div className="mt-4 flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="fill-[#F4A329] text-[#F4A329]"
                      />
                    ))}

                    <Star
                      size={16}
                      className="fill-[#F4A329] text-[#F4A329]"
                    />
                  </div>

                  <p
                    className="
                      mt-2
                      font-inter
                      text-[14px]
                      leading-5
                      text-[#697080]
                    "
                  >
                    {item.subText}
                  </p>

                  <p
                    className="
                      font-inter
                      text-[14px]
                      leading-5
                      text-[#697080]
                    "
                  >
                    {item.reviewText}
                  </p>
                </>
              ) : (
                <>
                  {/* Icon Circle */}

                  <div
                    className="
                      flex
                      h-[54px]
                      w-[54px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F0EDF9]
                      text-[#7434E5]
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-4
                      max-w-[190px]
                      font-dmSans
                      text-[26px]
                      font-bold
                      leading-[1.25]
                      text-[#20243B]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Value */}

                  <p
                    className="
                      mt-3
                      font-inter
                      text-[15px]
                      text-[#697080]
                    "
                  >
                    {item.value}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;


