import { CalendarDays, BriefcaseBusiness } from "lucide-react";
import heroImage from "../../images/B2BHeroImg.png";
import B2BStateItem from "../layout/B2BStateItem";
import { B2BStatsData } from "../common/B2BStatsData"
const B2BHero = () => {
  return (
    <section className="lg:py-[54px] py-[54px]">
      <div
        className="
          mx-auto
          max-w-[1360px]
          rounded-[28px]
          bg-white
         
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

          <div className="w-full lg:w-[54%] font-dmSans">

            {/* Badge */}

            <div
              className="
                inline-flex
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
              mt-[19px]
               
                font-extrabold
               leading-[52.5px]
    tracking-[-0.96px]
    text-[#111827]

                md:text-[42px]

                lg:text-[54px]
              "
            >Custom Digitizing, Vector Art & Logo Design for Growing Businesses
            </h1>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-[560px]
                font-inter
                text-[16px]
                leading-8
                text-[#6C7283]
              "
            >
              We work behind the scenes with print shops,
              embroidery brands and design agencies to turn
              their orders into clean, production-ready files.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-4

                sm:flex-row
              "
            >
              <button
                className="
                  rounded-[12px]
                  bg-[#6C29E0]
                  px-7
                  py-4
                  font-bold
                  text-white
                  transition
                  hover:opacity-80
                "
              >
                Get B2B Quote
              </button>

              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[12px]
                  border
                  border-[#7434E5]
                  px-7
                  py-4
                  font-bold
                  text-[#7434E5]
                  transition
                  hover:bg-[#7434E5]
                  hover:text-white
                "
              >
                <CalendarDays size={18} />

                Schedule a Call
              </button>
            </div>

          </div>

          {/* RIGHT */}

          
          
          <div className="relative w-full lg:w-[46%] ">
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