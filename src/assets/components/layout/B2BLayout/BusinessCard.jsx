const BusinessCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group
        flex
        h-[178px]
       w-[220px]
        flex-col
        items-center
        justify-center
        rounded-[20px]
        border
        border-[#E7E3ED]
        bg-[#F5F0FF]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0px_15px_35px_rgba(116,52,229,0.12)]
        lg:w-full
      "

    >
      {/* Icon */}

      <div
        className="
          flex
          h-[56px]
          w-[56px]
          items-center
          justify-center
          rounded-2xl
          bg-white
          shadow-[0px_6px_18px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          ease-in-out
          group-hover:scale-110
          group-hover:bg-[#7434E5]
        "
      >
       <Icon
          size={26}
          strokeWidth={2}
          className="text-[#7434E5] transition-colors duration-300 group-hover:text-white"
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-5
          max-w-[190px]
          text-center
          text-[18px]
          font-bold
          leading-[120%]
          tracking-[-0.02em]
          text-[#111827]
        "
      >
        {item.title}
      </h3>
    </div>
  );
};

export default BusinessCard;