
import { Image } from "lucide-react";
const AdvantageCard = ({ icon: Icon, title, description, image, }) => { 
  return ( 
  <article className=" 
  w-full 
  overflow-hidden 
  rounded-[20px] 
  border
   border-[#E7E3ED] 
  bg-white
   p-5 
  shadow-[0_3px_12px_rgba(31,21,61,0.06)] 
  transition-transform duration-300 
  hover:-translate-y-1 
  hover:shadow-[0_8px_24px_rgba(31,21,61,0.10)] 
  sm:p-6 
  lg:p-7 " > 

  {/* ================= ICON ================= */} 
  {Icon && ( 
    <div className=" flex 
    h-11 
    w-11 
    items-center 
    justify-center 
    rounded-full 
    bg-[#7434E5] 
    sm:h-[46px] 
    sm:w-[46px] 
    lg:h-12 lg:w-12 " > 
    <Icon 
    size={23} 
    strokeWidth={1.5} 
    className="text-white" /> 
    </div> )} 
    
    {/* ================= TITLE ================= */} 
    <h3 className=" mt-4 
    font-dmSans 
    text-[18px] 
    font-bold 
    leading-6 
    text-[#0C0C30] 
    sm:mt-[18px]
     sm:text-[19px] 
     lg:mt-5 
    lg:text-[20px] " > 
    {title} 
    </h3> 
    {/* ================= DESCRIPTION ================= */} 
    <p className=" mt-3 
    font-inter 
    text-[14px] 
    font-normal 
    leading-6 
    text-[#6B7280] 
    sm:mt-4
     sm:text-sm
      lg:leading-[25px] " > 
    {description} </p> 
    {/* ================= IMAGE ================= */} 
    <div className=" mt-5
     flex h-[210px] 
     w-full
      items-center 
    justify-center 
    overflow-hidden
     rounded-[10px] 
    border 
    border-dashed
     border-[#FF6868]
     bg-[#FFF7F7] 
     sm:h-[230px] 
     lg:h-[274px] " > 
     {image ? ( 
      <img 
     src={image} 
     alt={title} 
     loading="lazy" 
     className="h-full w-full object-cover" /> ) : ( 
     <Image size={20} 
     strokeWidth={1.8} 
     className="text-[#FF6868]" 
     aria-hidden="true" /> )} 
     
     
    </div> 
    </article> 
    ); 
    }; 
    export default AdvantageCard;