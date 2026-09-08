// import { ArrowRight } from "lucide-react";
// import SolidButton from "../SolidButton";
import OutlineBtn from "../OutlineBtn";
import SolidButton from "../SolidButton";

const ServicePageCard = ({
  image,
  title,
  description,
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

      <div className="flex gap-3 mt-3">
        <SolidButton title="Order Now" type="button" classname ="rounded-xl"/>
        <OutlineBtn title="Explore More" type="button" classname ="rounded-xl"/>

      </div>
    </article>
  );
};

export default ServicePageCard;