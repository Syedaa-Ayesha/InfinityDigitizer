const AdvantageCard = ({
  icon: Icon,
  image,
  title,
  description,
}) => {
  return (
    <article
      className="
        group
        flex
        min-h-[280px]
        flex-col
        overflow-hidden
        rounded-[16px]
        border
        border-[#EAE7F0]
        bg-white
        p-[20px]
        transition-all
        duration-300
        hover:-translate-y-[2px]
        hover:shadow-[0_10px_28px_rgba(55,30,110,0.06)]
        sm:min-h-[295px]
        sm:p-[22px]
        lg:min-h-[310px]
        lg:p-[24px]
      "
    >
      {/* ================= ICON ================= */}

      <div
        className="
          flex
          h-[42px]
          w-[42px]
          shrink-0
          items-center
          justify-center
          rounded-[10px]
          bg-[#F3EEFF]
          text-[#6825E5]
          transition-all
          duration-300
          group-hover:bg-[#6825E5]
          group-hover:text-white
        "
      >
        <Icon
          size={20}
          strokeWidth={1.8}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="mt-[16px]">
        <h3
          className="
            text-[14px]
            font-semibold
            leading-[1.3]
            tracking-[-0.01em]
            text-[#171735]
            sm:text-[15px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-[8px]
            max-w-[330px]
            text-[9px]
            leading-[1.65]
            text-[#858597]
            sm:text-[10px]
          "
        >
          {description}
        </p>
      </div>

      {/* ================= BOTTOM IMAGE ================= */}

      <div
        className="
          mt-auto
          flex
          h-[100px]
          w-full
          items-end
          justify-center
          overflow-hidden
          pt-[15px]
          sm:h-[110px]
          lg:h-[120px]
        "
      >
        <img
          src={image}
          alt="Images"
          loading="lazy"
          decoding="async"
          className="
          w-full
            h-full
            max-w-full
            object-contain
            rounded-md
            overflow-hidden
            object-bottom
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />
      </div>
    </article>
  );
};

export default AdvantageCard;