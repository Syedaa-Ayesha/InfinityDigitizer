import { Flower, PenTool, Gem, ArrowRight, Sparkle } from "lucide-react";
import SectionHeading from "../common/SectionHeading"

const services = [
  {
    id: 1,
    icon: <Flower className="w-8 h-8" strokeWidth={1.8} />,
    number: "1",
    title: "CUSTOM EMBROIDERY DIGITIZING",
    description:
      "We convert your artwork into embroidery files for everything from cap digitizing and jacket back designs to left chest logos.",
  },
  {
    id: 2,
    icon: <PenTool className="w-8 h-8" strokeWidth={1.8} />,
    number: "2",
    title: "VECTOR ART SERVICES",
    description:
      "Our vector art services cover everything from screen printing and DTF to laser cutting and more.",
  },
  {
    id: 3,
    icon: <Gem className="w-8 h-8" strokeWidth={1.8} />,
    number: "3",
    title: "LOGO DESIGN",
    description:
      "We design minimal logos, mascot logos, emblems and more logos with perfection.",
  },
];
const Services = () => {
  return (
    <>
    <section className="pt-[50px] w-max m-auto">
   <SectionHeading
  icon={<Sparkle size={24} />}
  badge="What we do best"
  heading="What Services We Offer"
  description="Infinity Digitizing is your one stop shop for all your embroidery digitizing needs. "
/>
    <div className="mt-16 grid grid-cols-3 gap-8">

    {services.map((service) => (

        <div
            key={service.id}
            className="
            h-[296px]
            w-[296px]
            group
            rounded-[18px]
            bg-white
            p-5
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            "
        >

            {/* Icon */}

            <div className="flex justify-center text-[#7434E5]">

                {service.icon}

            </div>

            {/* Divider */}

            <div className="mx-auto my-5 flex w-[90px] items-center gap-3">

                <div className="h-[2px] flex-1 bg-[#7434E5]"></div>

                <span className="font-bold text-[#7434E5]">

                    {service.number}

                </span>

                <div className="h-[2px] flex-1 bg-[#7434E5]"></div>

            </div>

            {/* Title */}

            <h3 className="text-center font-dmSans text-[22px] font-bold uppercase">

                {service.title}

            </h3>

            {/* Description */}

            <p className=" text-center text-[14px] leading-6 text-[#7A7591]">

                {service.description}

            </p>

            {/* Button */}

            <div className="text-[20px] font-inter font-semibold flex justify-center">

                <button
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-md
                    bg-[#7434E5]
                    px-5
                    py-3
                    text-[13px]
                    font-semibold
                    uppercase
                    text-white
                    transition
                    duration-300
                    hover:bg-[#5D26D6]
                    "
                >

                    Explore Services

                    <ArrowRight size={16} />

                </button>

            </div>

        </div>

    ))}

</div>
</section>
    </>
  )
}

export default Services