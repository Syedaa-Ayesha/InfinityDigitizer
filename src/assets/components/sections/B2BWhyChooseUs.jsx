import {
  UserRound,
  Tag,
  Star,
  ShieldCheck,
  Lock,
} from "lucide-react";

const chooseUsData = [
  {
    id: 1,
    title: "Skilled Designing Team",
    description:
      "Experienced specialists creating any design ready files with precision.",
    icon: UserRound,
  },
  {
    id: 2,
    title: "Long Term Partnership",
    description:
      "Your trusted creative partner for long-term business success.",
    icon: Tag,
  },
  {
    id: 3,
    title: "Dedicated Project Support",
    description:
      "Work directly with a responsive team that understands your artwork requirements.",
    icon: Tag,
  },
  {
    id: 4,
    title: "Consistent Brand Standards",
    description:
      "Every design is created to maintain the same quality across all your orders.",
    icon: Star,
  },
  {
    id: 5,
    title: "Scalable Business Solutions",
    description:
      "Whether you have one design or hundreds, we deliver with the same attention to detail.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Rush Order Available",
    description:
      "Need it urgently? Our team prioritizes urgent projects without compromising on quality.",
    icon: Lock,
  },
];


const B2BWhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1320px] px-5">

        {/* Heading */}

        <div className="mb-14 text-center">

          <h2
            className="
              text-[30px]
              font-extrabold
              text-[#111827]
              md:text-[38px]
              lg:text-[48px]
            "
          >
            Why Businesses Choose Us?
          </h2>

          <div className="mx-auto mt-4 h-[4px] w-[64px] rounded-full bg-[#7434E5]" />

        </div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {chooseUsData.map((item) => {
            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className="
                  group
                  rounded-[22px]
                  border
                  border-[#ECE8F4]
                  bg-white
                  p-7
                  shadow-[0px_12px_30px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0px_20px_45px_rgba(116,52,229,0.15)]
                "
              >

                {/* Icon */}

                <div
                  className="
                    flex
                    h-[54px]
                    w-[54px]
                    items-center
                    justify-center
                    rounded-[16px]
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
                    text-[24px]
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
                    text-[16px]
                    leading-8
                    text-[#6B7280]
                  "
                >
                  {item.description}
                </p>

              </div>

            );
          })}

        </div>

      </div>
    </section>
  )
}

export default B2BWhyChooseUs