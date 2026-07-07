import { Flower, PenTool, Gem, ArrowRight, Sparkle, ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading"

const services = [
  {
    id: 1,
    icon: <Flower size={48} strokeWidth={1.8} />,
    number: "1",
    title: "CUSTOM EMBROIDERY DIGITIZING",
    description:
      "We convert your artwork into embroidery files for everything from cap digitizing and jacket back designs to left chest logos.",
  },
  {
    id: 2,
    icon: <PenTool size={48} strokeWidth={1.8} />,
    number: "2",
    title: "VECTOR ART SERVICES",
    description:
      "Our vector art services cover everything from screen printing and DTF to laser cutting and more.",
  },
  {
    id: 3,
    icon: <Gem size={48} strokeWidth={1.8} />,
    number: "3",
    title: "LOGO DESIGN",
    description:
      "We design minimal logos, mascot logos, emblems and more logos with perfection.",
  },
];
const Services = () => {
  return (
    <>
    <section className="py-12.5  m-auto "  style={{
    background:
      "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
  }}>
   <SectionHeading
  icon={<Sparkle size={24} />}
  badge="What we do best"
  heading="What Services We Offer"
  description="Infinity Digitizing is your one stop shop for all your embroidery digitizing needs. "
/>
    <div className="w-max m-auto my-12 grid grid-cols-3 gap-8 " >

    {services.map((service) => (

        <div
            key={service.id}
            className="
            h-74
            w-74
            group
            rounded-[18px]
            bg-white
            p-5
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            relative 

            "
            style={{
    background:
      "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
  }}
        >

            {/* Icon */}

            <div className="flex justify-center text-[#7434E5]">

                {service.icon}

            </div>

            {/* Divider */}

            <div className="mx-auto  flex w-22.5 items-center gap-3">

                <div className="h-0.5 flex-1 bg-[#7434E5] my-3"></div>

                <span className="font-bold text-[#7434E5] text-xl">

                    {service.number}

                </span>

                <div className="h-0.5 flex-1 bg-[#7434E5] my-3"></div>

            </div>

            {/* Title */}

            <h3 className="text-center font-dmSans font-extrabold uppercase text-[18px] leading-7">

                {service.title}

            </h3>

            {/* Description */}

            <p className="mt-3 text-center text-[13px] leading-5 text-[#7A7591]">

                {service.description}

            </p>

            {/* Button */}

            <div className="text-[20px] font-inter font-semibold flex justify-center ">

                <button
                    className="mt-auto h-10.5  w-44 rounded-lg bg-[#753DF0]  text-white font-semibold text-[12px] uppercase flex items-center justify-center gap-2 absolute inset-x-0 bottom-6.5 left-14.5"
                    
                >

                    Explore Services

                    <ArrowRight size={16} />

                </button>

            </div>

        </div>

    ))}

</div>
<div className="w-241.75 h-57 rounded-2xl bg-linear-to-r from-[#B17BFF] via-[#8C45F6] to-[#7434E5] flex items-center justify-between m-auto px-8.5 py-5.25">

        {/* Left Side */}
        <div className="flex items-center gap-10.5">

          {/* Heading */}
          <h2 className="w-103.25 h-36 font-inter text-white text-[40px] font-semibold leading-13">
            Have a Design in Mind? Let's Turn it into Perfect Design
          </h2>

          {/* Description */}
          <p className="w-53.75 text-[14px] leading-5 font-inter text-white/90">
            Share your artwork with our experts and receive high quality,
            machine ready embroidery & vector files designed for smooth
            production and outstanding results.
          </p>

        </div>

        {/* Arrow Box */}
        <button className="group w-46.5 h-46.5 rounded-[18px] border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white/10">

          <ArrowUpRight size={108}
            strokeWidth={2.8}
            className=" text-white transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1 box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1"
          />

        </button>

      </div>

</section>
    </>
  )
}

export default Services