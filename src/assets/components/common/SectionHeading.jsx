
const SectionHeading = ({icon, badge, heading, description}) => {
  return (
   <>
    <div className="text-center">
      <span className="inline-flex items-center  font-inter rounded-2xl gap-2 text-[#7434E5] px-[10px] py-[6px] text-[16px]  uppercase  font-semibold bg-[#F1EDFD]"> 
        {icon}
        {badge}
      </span>

      <h2 className="font-dmSans text-[36px] font-bold uppercase leading-none mt-4">
        {heading}
      </h2>

      <p className="mt-5 mx-auto max-w-[500px] text-sm text-[#00030B] leading-6">
        {description}
      </p>
    
  
</div>
   </>
  )
};
export default SectionHeading

