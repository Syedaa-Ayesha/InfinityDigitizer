// import { ArrowRight } from "lucide-react";


const OutlineBtn = ({ title, Icon,classname, onClick,type}) => {
  return (
     <button
     type={type}
      className={`
      px-6
      py-[14px]
      rounded-full
      border
    
      border-[#7B3FF2]
      text-[#7B3FF2]
      text-sm
      font-medium
      flex
      items-center
      cursor-pointer
      gap-2
      hover:bg-[linear-gradient(94.72deg,#6C29E0_0%,#5413C3_100%)]
      hover:text-white
      transition-all
      duration-500
      lg:px-5
   
      lg:text-xs
    ${classname}`}
        onClick={onClick}
    >
      {title}

   {Icon && <Icon size={15} />}
    </button>
  )
}

export default OutlineBtn