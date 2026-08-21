import { Check } from "lucide-react";
import teamImage from "../../../images/B2BHeroImg.png"
const CreativeTeamSection = () => {
  const points = [
    "Experienced and skilled digitizing professionals",
    "Reliable quality and fast turnaround times",
    "Consistent results for every design",
  ];

  return (
    <section className="w-full">
      <div
        className="
          mx-auto
          grid
          max-w-[1300px]
          border
          grid-cols-1
          items-center
          gap-[32px]
         
       
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-[60px]
       
        "
      >
        {/* ================= LEFT CONTENT ================= */}

        <div className="max-w-[500px]">
          {/* Eyebrow */}

          <span
            className="
              inline-flex
              rounded-full
              items-start
              bg-[#F3EEFF]
              px-[10px]
              py-[4px]
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-[#6825E5]
            "
          >
            Our Commitment
          </span>

          {/* Heading */}

          <h2
            className="
              mt-[10px]
              text-[24px]
              font-semibold
              leading-[1.2]
              tracking-[-0.03em]
              text-[#171735]
              sm:text-[28px]
              lg:text-[32px]
            "
          >
            The Creative Team Behind Your Best Looking Designs
          </h2>

          {/* Description */}

          <p
            className="
              mt-[14px]
              max-w-[470px]
              text-[10px]
              leading-[1.7]
              text-[#858597]
              sm:text-[11px]
            "
          >
            Our creative team combines technical expertise, creativity and
            attention to detail to transform your ideas into professional,
            production-ready designs.
          </p>

          {/* ================= POINTS ================= */}

          <div className="mt-[20px] space-y-[11px]">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-[9px]"
              >
                <span
                  className="
                    mt-[1px]
                    flex
                    h-[16px]
                    w-[16px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#6825E5]
                  "
                >
                  <Check
                    size={10}
                    strokeWidth={3}
                    className="text-white"
                  />
                </span>

                <p className="text-[9px] leading-[1.5] text-[#55556B] sm:text-[10px]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}

<div className="relative">
  {/* Image */}

  <div
    className="
      relative
      aspect-[1.35/1]
      w-full
      overflow-hidden
      rounded-[18px]
      bg-[#EDE9F8]
    "
  >
     <img
      src={teamImage}
      alt="Creative team"
      loading="lazy"
      decoding="async"
      className="
        h-full
        w-full
        object-cover
        object-center
      "
    />
   

    <div className="flex h-full w-full items-center justify-center">
      <span className="text-[11px] text-[#AAA6B8]">
        Team Image
      </span>
    </div>
  </div>

          {/* ================= STATS ================= */}

          <div
            className="
              relative
              z-[2]
              mx-auto
              -mt-[28px]
              w-[90%]
              rounded-[12px]
              border
              border-[#ECE9F3]
              bg-white
              px-[14px]
              py-[15px]
              shadow-[0_8px_30px_rgba(40,20,80,0.07)]
              sm:-mt-[35px]
              sm:px-[20px]
              sm:py-[18px]
              lg:-mt-[40px]
              lg:w-[86%]
            "
          >
            <div className="grid grid-cols-3">
              {/* Stat 1 */}

              <div className="text-center">
                <h3 className="text-[17px] font-bold text-[#6825E5] sm:text-[20px]">
                  15+
                </h3>

                <p className="mt-[3px] text-[7px] text-[#858597] sm:text-[8px]">
                  Years Experience
                </p>
              </div>

              {/* Stat 2 */}

              <div
                className="
                  border-x
                  border-[#E9E6EF]
                  text-center
                "
              >
                <h3 className="text-[17px] font-bold text-[#6825E5] sm:text-[20px]">
                  50K+
                </h3>

                <p className="mt-[3px] text-[7px] text-[#858597] sm:text-[8px]">
                  Designs Completed
                </p>
              </div>

              {/* Stat 3 */}

              <div className="text-center">
                <h3 className="text-[17px] font-bold text-[#6825E5] sm:text-[20px]">
                  99%
                </h3>

                <p className="mt-[3px] text-[7px] text-[#858597] sm:text-[8px]">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeTeamSection;