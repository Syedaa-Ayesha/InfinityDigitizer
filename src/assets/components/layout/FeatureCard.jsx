
const FeatureCard = ({step , icon , title , description , image}) => {
  return (
    <div className="relative flex h-[182px] w-full max-w-[1275px] overflow-visible rounded-[16px] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)] "
    >

      {/* Number Badge */}
      <div className="absolute left-[-40px] z-10 top-1/2 -translate-y-1/2 px-8 py-7">
        <div className="flex h-[40px] w-[56px] items-center justify-center  rounded-r-[16px] rounded-l-[4px] bg-gradient-to-r from-[#753DF0] to-[#4E2A8C]">
          <span className="text-base font-bold text-white font-dmSans">{step}</span>
        </div>
      </div>

      {/* Left Content */}
      <div className="flex flex-1 items-center  pr-6  pl-17.5 "  style={{
            background:
                "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
        }}>

        {/* Icon */}
       <div className="mr-[36px] flex h-[118px] w-[118px] items-center justify-center rounded-full bg-[#753DF0]/9">
         {icon}
        </div>

        {/* Text */}
        <div className="">
          <h3 className="font-dmSans text-[20px] font-bold text-[#1D2433]">
           {title}
          </h3>

          <p className="mt-3 max-w-[611px]  text-base leading-7 text-[#6B7280]">
            {description}
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="h-full w-[345px] shrink-0 overflow-hidden rounded-r-[16px] ">
        <img
          src={image}
          alt="ContainerImage"
          className="object-contain "
        />
      </div>

    </div>
  );
};

export default FeatureCard