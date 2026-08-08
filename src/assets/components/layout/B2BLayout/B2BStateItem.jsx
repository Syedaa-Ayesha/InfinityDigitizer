const B2BStateItem = ({
  icon: Icon,
  value,
  title,
}) => {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        justify-center
        mx-4
        my-5
        text-center
        lg:min-h-[170px]
        lg:m-0
      "
    >
      <Icon
        size={24}
        strokeWidth={2}
        className="text-[#7434E5]"
      />

      <h3
        className="
          mt-4
          font-dmSans
          text-[28px]
          font-extrabold
          leading-none
          text-[#181A39]

        "
      >
        {value}
      </h3>

      <p
        className="
          mt-2
          whitespace-pre-line
          font-inter
          text-sm
          leading-6
          text-[#6B7280]
        "
      >
        {title}
      </p>
    </div>
  );
};

export default B2BStateItem;