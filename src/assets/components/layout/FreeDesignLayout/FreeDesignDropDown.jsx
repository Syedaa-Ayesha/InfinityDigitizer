import { ChevronDown } from "lucide-react";

const FreeDesignDropDown = ({label}) => {
  return (
    <button
      className="
      h-10
      px-4
      bg-white
      border
      border-[#E8E8EE]
      rounded-lg
      flex
      items-center
      gap-2
      text-[12px]
      font-medium
      text-[#4A4A4A]
      hover:border-[#7B3FF2]
      transition-all
      duration-300
      "
    >
      {label}

      <ChevronDown size={15} />
    </button>
  )
}

export default FreeDesignDropDown