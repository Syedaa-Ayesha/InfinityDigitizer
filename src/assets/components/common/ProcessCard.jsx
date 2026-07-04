
const ProcessCard = ({
  step,
  icon,
  title,
  description,
}) => {
  return (
     <div className="relative rounded-[20px] bg-white border border-[#E6E1EF] px-7 pt-9 pb-7 flex items-center" 
      style={{
    boxShadow:
      "-77px 93px 48px rgba(0, 0, 0, 0.01), -43px 53px 41px rgba(0, 0, 0, 0.05), -19px 23px 30px rgba(0, 0, 0, 0.09), -5px 6px 17px rgba(0, 0, 0, 0.1)",
  }}>

      {/* Step Badge */}
      <div className="absolute -top-3 -left-3 w-11 h-11 rounded-full bg-[#7434E5] text-white text-base font-bold flex items-center justify-center border-4 border-white ">
        {step}
      </div>

      <div className="flex items-center gap-3">

        {/* Icon */}
        <div className="w-[88px] h-[88px] rounded-[16px] bg-[#F3EFFA] flex items-center justify-center text-[#7434E5] shrink-0">
          {icon}
        </div>

        {/* Content */}
        <div className="w-[248px] h-[134px]">
          <h3 className="font-dmSans font-bold text-[20px] text-[#0F1729] ">
            {title}
          </h3>

          <p className="mt-2 text-[#3F4D5E] text-base leading-[22px] text-[#6B7280] font-inter">
            {description}
          </p>
        </div>

      </div>
      
    </div>
  )
}

export default ProcessCard