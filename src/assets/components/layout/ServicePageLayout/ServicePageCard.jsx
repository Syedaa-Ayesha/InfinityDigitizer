// import { ArrowRight } from "lucide-react";
// import SolidButton from "../SolidButton";
import OutlineBtn from "../OutlineBtn";

const ServicePageCard = ({
  image,
  title,
  description,
  // onClick,
}) => {
  return (
    <article
      className="
        group
        flex
        h-full
        w-full
        flex-col
        rounded-[20px]
        border
        border-[#E7E3ED]
        bg-white
        p-4
        shadow-[0_4px_20px_rgba(211,202,226,0.26)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(116,52,229,0.12)]
        sm:p-[18px]
      "
    >
      {/* ================= TOP ================= */}

      <div className="flex items-center gap-4 sm:gap-5">

        {/* IMAGE */}

        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            bg-[#EDE7F8]
            sm:h-16
            sm:w-16
          "
        >
          <img
            src={image}
            alt={title}
            className="
              h-9
              w-9
              object-contain
              sm:h-10
              sm:w-10
            "
          />
        </div>

        {/* TITLE */}

        <h3
          className="
            min-w-0
            font-inter
            text-[19px]
            font-semibold
            leading-[120%]
            tracking-[-0.02em]
            text-black
            sm:text-[22px]
            lg:text-[24px]
          "
        >
          {title}
        </h3>
      </div>

      {/* ================= DESCRIPTION ================= */}

      <p
        className="
          mt-4
          flex-1
          font-inter
          text-[13px]
          leading-[1.55]
          text-black/70
          sm:mt-5
          sm:text-[14px]
          sm:leading-5
        "
      >
        {description}
      </p>

      {/* ================= BUTTON ================= */}

      {/* <button
        type="button"
        onClick={onClick}
        className="
          mt-4
          flex
          w-fit
          items-center
          gap-2.5
          rounded-[6px]
          bg-[linear-gradient(100.36deg,#6C29E0_0%,#5413C3_100%)]
          px-3
          py-2.5
          font-dmSans
          text-[13px]
          font-semibold
          uppercase
          text-white
          transition-all
          duration-300
          hover:scale-[1.03]
          sm:mt-5
          sm:text-[14px]
          lg:text-[16px]
        "
      >
        ORDER NOW

        <ArrowRight
          size={17}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button> */}

      <div classname="flex gap-3">
        {/* <SolidButton title="Order Now" type="button" onClick={navigate()}/> */}
        <OutlineBtn title="Learn More" type="button" />

      </div>
    </article>
  );
};

export default ServicePageCard;