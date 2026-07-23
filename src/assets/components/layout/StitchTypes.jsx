import { ArrowRight } from "lucide-react";

const StitchTypes = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section className="my-4">

      <div className="space-y-3">

        {items.map((item, index) => (

          <div
            key={index}
            className="
              flex
              items-start
              gap-3
            "
          >

            {/* Arrow */}

            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="
                mt-[6px]
                shrink-0
                
              "
            />

            {/* Content */}

            <div className="flex-1">

              <p
                className="
                  text-[15px]
                  leading-7
                  text-[#424957]

                  sm:text-[16px]
                  md:text-[18px]
                  md:leading-8
                "
              >

                <span
                  className="
                    font-bold
                    text-[#0F1729]
                  "
                >
                  {item.title}
                </span>

                {" — "}

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