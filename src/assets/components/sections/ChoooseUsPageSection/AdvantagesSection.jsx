import {
  BadgeCheck,
  Clock3,
  Palette,
  Headphones,
  ShieldCheck,
  Zap,
} from "lucide-react";

import AdvantageCard from "../../layout/AdvantageCard";

const advantagesData = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "We deliver clean, precise and production-ready designs with attention to every detail.",
  },

  {
    icon: Clock3,
    title: "Fast Turnaround",
    description:
      "Our streamlined workflow helps us complete your designs quickly without compromising quality.",
  },

  {
    icon: Palette,
    title: "Creative Expertise",
    description:
      "Our experienced designers combine creativity and technical expertise to bring your ideas to life.",
  },

  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our support team is always available to understand your requirements and assist whenever needed.",
  },

  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "Your designs and information are handled with care through a secure and dependable workflow.",
  },

  {
    icon: Zap,
    title: "Professional Results",
    description:
      "Every project is carefully reviewed to ensure consistent and professional results for your business.",
  },
];

const AdvantagesSection = () => {
  return (
    <section
      className="
        w-full
        bg-white
      "
    >
      <div
        className="
          mx-auto
          max-w-[1300px]
          px-[24px]
          py-[50px]
          sm:px-[32px]
          sm:py-[60px]
          lg:px-[40px]
          lg:py-[72px]
        "
      >
        {/* ================= SECTION HEADING ================= */}

        <div className="mx-auto max-w-[650px] text-center">
          <span
            className="
              inline-flex
              rounded-full
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
            Our Advantages
          </span>

          <h2
            className="
              mt-[9px]
              text-[23px]
              font-semibold
              leading-[1.2]
              tracking-[-0.03em]
              text-[#171735]
              sm:text-[27px]
              lg:text-[30px]
            "
          >
            Why Businesses Choose Us
          </h2>

          <div
            className="
              mx-auto
              mt-[9px]
              h-[2px]
              w-[35px]
              rounded-full
              bg-[#6825E5]
            "
          />

          <p
            className="
              mx-auto
              mt-[13px]
              max-w-[560px]
              text-[9px]
              leading-[1.6]
              text-[#858597]
              sm:text-[10px]
            "
          >
            We combine quality, creativity, speed and reliable support to
            provide a smooth design experience from start to finish.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div
          className="
            mt-[30px]
            grid
            grid-cols-1
            gap-[14px]
            sm:mt-[38px]
            sm:grid-cols-2
            sm:gap-[18px]
            lg:mt-[44px]
            lg:grid-cols-3
            lg:gap-[20px]
          "
        >
          {advantagesData.map((advantage) => (
            <AdvantageCard
              key={advantage.title}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;