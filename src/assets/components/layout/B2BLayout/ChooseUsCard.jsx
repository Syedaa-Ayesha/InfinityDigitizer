

const ChooseUsCard = ({ item }) => {
      const Icon = item.icon;
  return (
    <div
                key={item.id}
                className="
                  group
                  h-[265px]
                  w-[236px]
                  rounded-[16px]
                  border
                  border-[#ECE8F4]
                  bg-white
                  p-[25px]
                  shadow-[0px_12px_30px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0px_20px_45px_rgba(116,52,229,0.15)]
                  lg:p-7
                  lg:h-[240px]
                  lg:w-[420px]
                "
              >

                {/* Icon */}

                <div
                  className="
                    flex
                    h-[56px]
                    w-[56px]
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#F5F0FF]
                    transition-all
                    duration-300
                    group-hover:bg-[#7434E5]
                  "
                >

                  <Icon
                    size={24}
                    className="
                      text-[#7434E5]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  />

                </div>

                {/* Title */}

                <h3
                  className="
                    mt-7
                    text-base
                    font-bold
                    text-[#111827]

                    lg:text-[18px]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-4
                    text-sm
                   leading-5
                    text-[#6B7280]
                    lg:text-[16px]
                     lg:leading-8
                  "
                >
                  {item.description}
                </p>

              </div>

  )
}

export default ChooseUsCard