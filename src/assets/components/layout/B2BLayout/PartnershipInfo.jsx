import { HeartHandshake } from "lucide-react";

const PartnershipInfo = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        gap-4
        lg:max-w-[360px]
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-[84px]
          w-[84px]
          items-center
          justify-center
          backdrop-blur-sm
        "
      >
        <HeartHandshake
          size={84}
          strokeWidth={2}
          className="text-white"
        />
      </div>

      {/* Description */}

      <p
        className="
          font-inter
          text-base
          font-light
          leading-7
          text-white/85
        "
      >
      Partner with a trusted B2B team committed to delivering quality, consistency, and reliable creative solutions that help your business grow.
      </p>
    </div>
  );
};

export default PartnershipInfo;