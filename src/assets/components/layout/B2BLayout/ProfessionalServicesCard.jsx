const ProfessionalServiceCard = ({
 item
}) => {
  const { image, icon: Icon, title, description } = item;
  return (
    <div
      className="
      group
      h-max
      overflow-hidden
      rounded-[20px]
      border-[#E7E3ED]
      bg-white
      shadow-[0px_12px_35px_rgba(0,0,0,0.08)]
      transition-all
      duration-300
      hover:shadow-[0px_20px_45px_rgba(116,52,229,.16)]
      lg:h-[492px]
    "
    >
      {/* Image */}
        <img
          src={image}
          alt={title}
          className="
          w-full
          h-[206px]
          object-cover
          md:h-[260px]
          lg:h-[282px]
        "
        />
      

      {/* Content */}

      <div className="p-6 flex flex-col gap-[10px] lg:gap-2">

        {/* Icon */}

        <div
          className="
          flex
          h-[44px]
          w-[44px]
          items-center
          justify-center
          rounded-[12px]
          bg-[linear-gradient(95.33deg,#7F3DF0_0%,#4E2A8C_100%)]
  shadow-[0px_6px_18px_rgba(91,61,240,0.35)]
        "
        >
          <Icon
            size={22}
            strokeWidth={1.5}
            className="text-white"
          />
        </div>

        {/* Title */}

        <h3
          className="
          font-dmSans
          text-[18px]
          font-bold
          text-[#0C0C30]
        "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
          font-inter
        text-sm
          leading-6
          text-[#6C7283]
        "
        >
          {description}
        </p>

      </div>
    </div>
  );
};

export default ProfessionalServiceCard;