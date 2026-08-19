

const CategoryBtn = ({ title, active }) => {

  return (
      <button
      className={`
        rounded-full
        border
        px-5
        py-2
        text-sm
        font-medium
        transition-all
        duration-300

        ${
          active
            ? "border-[#7B3FF2] bg-[#7B3FF2] text-white"
            : "border-[#E8E8F0] bg-white text-[#6B7280] hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
        }
      `}
    >
      {title}
    </button>
  )
}

export default CategoryBtn