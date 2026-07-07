
const PortfolioCard = ({
    before,
    after,
    beforeTitle = "Before",
    afterTitle = "After",
}) => {
  
  return (
       
 <div
      className="
        max-w-60.25
        h-141.5
        rounded-[20px]
        bg-white
        border
        border-[#ECECEC]
        
        p-3
        transition-all
        duration-300
        hover:-translate-y-1
        ]
      "
    >
      {/* Before */}
      <h5 className="text-[10px] font-bold uppercase text-center tracking-wider text-[#1D2433]">
       {beforeTitle}
      </h5>

      <div className="mt-2 w-47.75  h-53.25 overflow-hidden rounded-[10px]">
        <img
          src={before}
          alt="Before Design"
          className="h-auto w-full object-fill"
        />
      </div>

      {/* After */}
      <h5 className="mt-3 text-[10px] font-bold uppercase text-center tracking-wider text-[#1D2433]">
        {afterTitle}
      </h5>

      <div className="mt-2 w-47.75  h-53.25 overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat border items-center">
        <img
          src={after}
          alt="After Design"
          className="h-auto w-full object-fill" 
             />
    
      </div>
    </div>
  )
}

export default PortfolioCard