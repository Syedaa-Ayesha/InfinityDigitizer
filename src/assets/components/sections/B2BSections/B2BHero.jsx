import { BriefcaseBusiness, ArrowRight, Phone } from "lucide-react";
import heroImage from "../../../images/B2BHeroImg.png";
import B2BStateItem from "../../layout/B2BLayout/B2BStateItem";
import { B2BStatsData } from "../../common/B2BStatsData"
import SolidButton from "../../layout/SolidButton";
import OutlineBtn from "../../layout/OutlineBtn";
const B2BHero = () => {
  return (
    <section className="p-[22px] lg:py-[54px]" >
      <div
        className="
          mx-auto
          rounded-[28px]
          bg-white
          lg:max-w-[1340px]
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            lg:flex-row
          "
        >
          {/* LEFT */}

          <div className="w-full lg:w-[55%] font-dmSans flex flex-col lg:gap-2">

            {/* Badge */}

            <div
              className="
                inline-flex
                w-fit
                items-center
                rounded-full
                bg-[#F5F0FF]
                gap-2
                px-[22px]
                py-[10px]
              "
            >
              <BriefcaseBusiness
                size={14}
                className="text-[#7434E5]"
              />

              <span
                className="
                  text-[14px]
                  font-bold
                  uppercase
                  tracking-[1px]
                  text-[#7434E5]
                "
              >
                B2B Solutions
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
               mt-5
               pr-8
    max-w-[780px]
    font-dmSans
    font-extrabold
    text-[36px]
    leading-[110%]
    tracking-[-0.96px]

    text-[#111827]

    md:text-[42px]
    md:leading-[110%]

    lg:text-[48px]
    lg:leading-[52.5px]
              "
            >Custom Digitizing, Vector Art & Logo Design for Growing Businesses
            </h1>

            {/* Description */}

            <p
              className="
                max-w-[480px]
                font-inter
                text-[16px]
                leading-8
                text-[#6C7283]
                lg:mt-6
              "
            >
              We work behind the scenes with print shops,
              embroidery brands and design agencies to turn
              their orders into clean, production-ready files.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-[10px]
                mb-[18px]
                flex
              justify-around
              flex-row
              lg:gap-4
                lg:mb-0
                lg:justify-start
                lg:mt-8
              "
            >
              <SolidButton title="Get  Quote" Icon={ArrowRight} classname=""/>
               <OutlineBtn title="Schedule a Call" Icon={Phone} classname="flex-row-reverse"/>
            </div>

          </div>

          {/* RIGHT */}

          
          
          <div className="relative w-full lg:w-[45%] ">
 <div
    className="
      overflow-hidden
      rounded-[28px]
      
    "
  >
    <img
      src={heroImage}
      alt="B2B"
      className="
        h-full
        w-full
        object-cover
      "
    />
  </div> 

  {/* Floating Card */}

  <div
    className="
      mt-6
      lg:absolute
      lg:-bottom-10
      lg:left-1/2
      lg:w-[92%]
      lg:-translate-x-1/2
    "
  >
    <div
  className="
    rounded-[22px]
    border-[#ECE8F4]
    bg-white
    shadow-[0px_18px_50px_rgba(0,0,0,0.12)]
    overflow-hidden
    
  "
>

 <div
  className="
    grid
    grid-cols-2
    lg:grid-cols-4
  "
>
  {B2BStatsData.map((item, index) => (
    <div
      key={item.id}
      className={`
        ${
          index !== B2BStatsData.length - 1
            ? "lg:border-r border-[#ECECEC] "
            : ""
        }

        ${
          index < 2
            ? "border-b lg:border-b-0 border-[#ECECEC] "
            : ""
        }
      `}
    >
      <B2BStateItem {...item} />
    </div>
  ))}
</div>

</div>

    {/* Step 03 */}

  </div>

</div>
        </div>
      </div>
    </section>
  )
}

export default B2BHero