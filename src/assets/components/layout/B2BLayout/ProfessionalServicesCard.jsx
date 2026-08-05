const ProfessionalServiceCard = ({
  image,
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-[22px]
      bg-white
      shadow-[0px_12px_35px_rgba(0,0,0,0.08)]
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-[0px_20px_45px_rgba(116,52,229,.16)]
    "
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          h-[220px]
          w-full
          object-cover
          transition
          duration-500
          group-hover:scale-105

          md:h-[260px]
          lg:h-[310px]
        "
        />
      </div>

      {/* Content */}

      <div className="p-6">

        {/* Icon */}

        <div
          className="
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-[14px]
          bg-[linear-gradient(100deg,#6C29E0_0%,#5413C3_100%)]
          shadow-[0px_8px_20px_rgba(108,41,224,.30)]
        "
        >
          <Icon
            size={28}
            strokeWidth={2}
            className="text-white"
          />
        </div>

        {/* Title */}

        <h3
          className="
          mt-5
          font-dmSans
          text-[22px]
          font-bold
          text-[#111827]

          md:text-[24px]
        "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
          mt-4
          font-inter
          text-[15px]
          leading-8
          text-[#6C7283]

          md:text-[16px]
        "
        >
          {description}
        </p>

      </div>
    </div>
  );
};

export default ProfessionalServiceCard;