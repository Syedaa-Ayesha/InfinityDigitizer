import { ChevronRight } from "lucide-react";

const StitchTypes = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section className="my-14">

      <div className="space-y-8">

        {items.map((item, index) => (

          <div
            key={index}
            className="
              flex
              items-start
              gap-5
            "
          >
            {/* Icon */}

            <div
              className="
                mt-1
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#F4EEFF]
              "
            >
              <ChevronRight
  size={18}
  strokeWidth={2.8}
  className="text-[#7434E5]"
/>
            </div>

            {/* Content */}

            <div>

              <h3
                className="
                  font-dmSans
                  text-[20px]
                  font-bold
                  text-[#0F1729]

                  md:text-[22px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  text-[16px]
                  leading-8
                  text-[#424957]

                  md:text-[18px]
                "
              >
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default StitchTypes;