import { Check } from "lucide-react";

const DescriptionTab = ({ design }) => {
  if (!design) return null;

  return (
    <div className="space-y-7">

      {/* About */}

      <section className="">

        <h2 className="text-[20px] font-bold font-dmSans text-[#0F1729]">
          About This Design
        </h2>

        <p
          className="
mt-2
            max-w-5xl
            text-[16px]
            leading-8
            font-inter
            text-[#424957]
          "
        >
          {design.description}
        </p>

      </section>

      {/* Features */}

      <section>

        <h2 className="text-[20px] font-dmSans font-bold text-[#0F1729]">
          Design Features
        </h2>

        <div className="mt-3 space-y-2">

          {design.features.map((feature, index) => (

            <div
              key={index}
              className="flex items-start gap-2"
            >
<div className="h-4 w-4 rounded-full flex items-center justify-center mt-1
                  bg-[#7434E5]">
              <Check
                size={10}
                strokeWidth={3}
                className="
                  text-[#ffffff]
                  
                "
              />
</div>
              <p
                className="
                  text-[16px]
                  leading-7
                  font-inter
                  text-[#424957]
                "
              >
                {feature}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Fabrics */}

      <section>

        <h2 className="text-[20px] font-dmSans font-bold text-[#0F1729]">
          Recommended Fabrics
        </h2>

        <p
          className="
            max-w-5xl
            text-[16px]
            leading-8
            text-[#424957]
          "
        >
          {design.recommendedFabrics}
        </p>

      </section>

      {/* License */}

      <section>

        <h2 className="text-[20px] font-dmSans font-bold text-[#0F1729]">
          Licensing
        </h2>

        <p
          className="
            max-w-5xl
            text-[16px]
            leading-8
            text-[#424957]
          "
        >
          {design.licensing}
        </p>

      </section>

    </div>
  );
};

export default DescriptionTab;