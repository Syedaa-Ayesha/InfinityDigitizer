import {
  Eye,
  Printer,
  Shirt,
  Store,
  Mail,
  Share2,
} from "lucide-react";

const businessData = [
  {
    id: 1,
    title: "Embroidery Shops",
    icon: Eye,
  },
  {
    id: 2,
    title: "Print Shops",
    icon: Printer,
  },
  {
    id: 3,
    title: "Promotional Companies",
    icon: Shirt,
  },
  {
    id: 4,
    title: "Apparel Brands",
    icon: Store,
  },
  {
    id: 5,
    title: "Sign Shops",
    icon: Mail,
  },
  {
    id: 6,
    title: "Design Agencies",
    icon: Share2,
  },
];

const BusinessServe = () => {
  return (
    <section className="py-[85px]">
      <div className="mx-auto max-w-[1320px]">

        {/* Heading */}

        <div className="mb-14 text-center">
          <h2
            className="
              text-[24px]
              font-extrabold
              font-dmSans
              text-[#111827]
              md:text-[32px]
              lg:text-[42px]
            "
          >
            Businesses We Serve
          </h2>

          <div className="mx-auto mt-[11px] h-[3px] w-[64px] rounded-full bg-[#7434E5]" />
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {businessData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  flex
                  h-[177px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[20px]
                  bg-[#F5F0FF]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0px_15px_35px_rgba(116,52,229,0.12)]
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
                    rounded-[16px]
                    bg-white
                    shadow-[0px_6px_18px_rgba(0,0,0,0.08)]
                   transition-all
    duration-300
    ease-in-out

    group-hover:bg-[#7434E5]
    
    group-hover:scale-110
                  "
                >
                  <Icon
                    size={26}
                    strokeWidth={2}
                    className="text-[#7434E5]
                    hover:transition
                    group-hover:text-[#ffffff]"
                    
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5
                    max-w-[190px]
                    text-center
                    text-[18px]
                    font-bold
                    leading-[120%]
                    tracking-[-0.02em]
                    text-[#111827]
                  "
                >
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default BusinessServe;