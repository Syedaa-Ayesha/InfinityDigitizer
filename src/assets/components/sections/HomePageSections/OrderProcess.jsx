import { CardData } from "../../common/CardData";
import ProcessCard from "../../layout/HomeLayout/ProcessCard";
import SectionHeading from "../../layout/SectionHeading";
import CTASection from "../../layout/CTASection";
import { Headphones, Settings } from "lucide-react";
import { scrollToQuote } from "../../layout/HomeLayout/ScrollTOQuote";
const OrderProcess = () => {
    return (
        <section
            className="p-[22px] lg:py-[54px] "
            style={{
                background:
                    "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
            }}
        >
            <SectionHeading
                icon={<Settings size={24} />}
                badge="OUR EASY ORDER PROCESS"
                heading={
                    <>
                        HOW TO PLACE YOUR ORDER WITH <br />
                        INFINITY DIGITIZING
                    </>
                }
                description=""
            />
            <div className=" grid grid-cols-1  gap-6 mx-auto my-[34px] lg:w-[1288px]  lg:min-h-[70vh] lg:grid-cols-3">
                {CardData.map((item) => (
                    <ProcessCard
                        key={item.step}
                        step={item.step}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
           <CTASection
  icon={
    <Headphones
      size={38}
      strokeWidth={2.2}
      className="text-[#7434E5]"
    />
  }
  title="Your Artwork Deserves the Best!"
  description="Upload it now, and our team will turn it into a clean, high
quality file, fast, accurate, no errors, no delays, just quality 
work"
  buttonText="Get Free Quote"
  titleClass = "text-[28px]"
  sectionWidth = "max-w-[1275px] mx-auto"
  iconHeight= "h-[96px]"
  iconWidth = "w-[96px]"
  onClick={scrollToQuote}
/>
        </section>
    );
};

export default OrderProcess;
