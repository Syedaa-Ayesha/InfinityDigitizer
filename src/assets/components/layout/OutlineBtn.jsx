import { ArrowRight } from "lucide-react";


const OutlineBtn = ({ title }) => {
  return (
     <button
      className="
      h-10
      px-5
      rounded-full
      border
      border-[#7B3FF2]
      text-[#7B3FF2]
      text-[12px]
      font-medium
      flex
      items-center
      gap-2
      hover:bg-[#7B3FF2]
      hover:text-white
      transition-all
      duration-300
      "
    >
      {title}

      <ArrowRight size={15} />
    </button>
  )
}

export default OutlineBtn