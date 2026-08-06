import { HeartHandshake } from "lucide-react";

const PartnershipInfo = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        lg:max-w-[360px]
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-[88px]
          w-[88px]
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/10
          backdrop-blur-sm
        "
      >
        <HeartHandshake
          size={42}
          strokeWidth={2}
          className="text-white"
        />
      </div>

      {/* Heading */}

      <h3
        className="
          mt-8

          font-dmSans
          font-bold

          text-white

          text-[28px]
          leading-[120%]

          lg:text-[32px]
        "
      >
        Why It Matters
      </h3>

      {/* Description */}

      <p
        className="
          mt-5

          font-inter

          text-[16px]
          leading-7

          text-white/85
        "
      >
        A reliable digitizing partner becomes an extension of your
        business. With consistent quality, fast turnaround times,
        and dependable communication, you can confidently take on
        more clients while reducing production delays and costly
        revisions.
      </p>
    </div>
  );
};

export default PartnershipInfo;