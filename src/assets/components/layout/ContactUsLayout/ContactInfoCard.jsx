const ContactInfoCard = ({
  icon: Icon,
  title,
  description,
  available
}) => {
  return (
    <div
      className="
        flex
         items-center
        gap-[18px]
        rounded-xl
        border
        border-[#E7E3ED]
        bg-white
        p-5
        shadow-[0px_2px_8px_rgba(211,202,226,0.18)]
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
           bg-[linear-gradient(94.72deg,#6C29E0_0%,#5413C3_100%)]
        "
      >
        <Icon
          size={20}
          className="text-[#ffffff]"
          strokeWidth={2}
        />
      </div>

      {/* Content */}

      <div>
        <h3
          className="
            font-dmSans
            text-base
            font-bold
            text-[#0C0C30]
          "
        >
          {title}
        </h3>

        <p
          className="
            font-dmSans
            text-[18px]
            leading-6
            font-bold
            text-[#7434E5]
            whitespace-pre-line
          "
        >
          {description}
        </p>
          <p
          className="
            text-sm
            leading-6
            font-inter
            text-[#6B7280]
            whitespace-pre-line
          "
        >
          {available}
        </p>
      </div>
    </div>

  );
};

export default ContactInfoCard;