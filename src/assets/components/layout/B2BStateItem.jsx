

const B2BStateItem = ({
  icon: Icon,
  value,
  title,
}) => {
  return (
   <div
      className="
      my-6
      mx-4
        flex
        flex-col
        items-center
        justify-center
        border
        text-center
      "
    >
      {/* Icon */}

      <Icon
        size={24}
        strokeWidth={2}
        className="text-[#7434E5]"
      />

      {/* Value */}

      <h3
        className="
          mt-3
          font-dmSans
          text-[28px]
          font-extrabold
          leading-none
          text-[#0F1729]
        "
      >
        {value}
      </h3>

      {/* Text */}

      <p
        className="
          mt-2
          whitespace-pre-line
          font-inter
          text-[14px]
          font-medium
          leading-5
          text-[#6B7280]
        "
      >
        {title}
      </p>
    </div>
  )
}

export default B2BStateItem