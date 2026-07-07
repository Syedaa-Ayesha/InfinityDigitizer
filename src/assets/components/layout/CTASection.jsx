import { ArrowRight } from "lucide-react";

const CTASection = ({
  icon,
  title,
  description,
  buttonText = "Get Free Quote",
  onClick,
  titleClass,
  sectionWidth,
  iconHeight,
  iconWidth
}) => {
  return (
    <section className={`mx-auto ${sectionWidth}`}>
      <div className="flex items-center justify-between rounded-[16px] bg-gradient-to-l from-[#7434E5] to-[#A877FF] px-8 py-[21px]">

        {/* Left */}

        <div className="flex items-center gap-6">

          <div className={`${iconHeight} ${iconWidth} flex items-center justify-center rounded-full bg-white shrink-0 `}>
            {icon}
          </div>

          <div>
            <h2 className={`font-dmSans text-[32px] font-bold leading-none text-white ${titleClass}`}>
              {title}
            </h2>

            <p className="mt-2.5 max-w-[470px] text-[16px] font-inter leading-5 text-white/80 font-light whitespace-pre-wrap" >
              {description}
            </p>
          </div>
        </div>

        {/* Button */}

        <button
          onClick={onClick}
          className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[14px] font-semibold text-[#7434E5] transition hover:scale-105"
        >
          {buttonText}

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>
    </section>
  );
};

export default CTASection;