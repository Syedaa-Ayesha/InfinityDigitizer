const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex w-full items-center gap-4">

      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#EDE7F8]
          text-[#7434E5]
        "
      >
        {Icon && (
          <Icon
            size={24}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 pt-[1px]">
        <h3
          className="
            lg:text-base
            font-bold
            font-dmSans
            leading-[26px]
            text-[#0C0C30]
            text-[12px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-[2px]
            max-w-[390px]
            lg:text-sm
            font-inter
            lg:leading-[22px]
            text-[#6B7280]
            text-[14px]
            leading-[17px]
          "
        >
          {description}
        </p>
      </div>

    </div>
  );
};

export default FeatureItem;
