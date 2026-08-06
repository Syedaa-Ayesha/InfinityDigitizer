// import { ArrowRight } from "lucide-react";


const OutlineBtn = ({ title, Icon,classname }) => {
  return (
     <button
      className={`
      px-6
      py-14px
      rounded-full
      border
      border-[#7B3FF2]
      text-[#7B3FF2]
      text-sm
      font-medium
      flex
      items-center
      gap-2
      hover:bg-[#7B3FF2]
      hover:text-white
      transition-all
      duration-300
      lg:px-5
      lg:text-xs
    ${classname}`}
      
    >
      {title}

      <Icon size={15}/>
    </button>
  )
}

export default OutlineBtn