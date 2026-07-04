import { CardData } from "../common/CardData";
import ProcessCard from "../common/ProcessCard";
import SectionHeading from "../common/SectionHeading";
import CTASection from "../layout/CTASection";
import { Settings } from "lucide-react";
const OrderProcess = () => {
    return (
        <section
            className="py-[50px] "
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
                        How to Place Your Order with <br />
                        Infinity Digitizing
                    </>
                }
                description=""
            />
            <div className="w-[1288px] h-[587px]  grid grid-cols-3 gap-6 m-auto my-[34px]">
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
            {/* <div className="w-[1160px] h-[112px] rounded-[16px] bg-gradient-to-r from-[#B685FF] via-[#8C45F6] to-[#7434E5] px-8 flex items-center justify-between m-auto">
               
                <div className="flex items-center gap-5">
                    
                    <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center shrink-0">
                        <Headphones
                            size={34}
                            strokeWidth={2.2}
                            className="text-[#7434E5]"
                        />
                    </div>

                    
                    <div>
                        <h2 className="font-dmSans text-white text-[32px] font-bold leading-none">
                            Your Artwork Deserves the Best!
                        </h2>

                        <p className="mt-2 max-w-[470px] text-[14px] leading-[20px] text-white/80 font-inter">
                            Upload it now, and our team will turn it into a clean, high
                            quality file, fast, accurate, no errors, no delays, just quality
                            work.
                        </p>
                    </div>
                </div>

                
                <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[14px] font-semibold text-[#7434E5] transition hover:scale-105">
                    Get Free Quote
                    <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </button>
            </div> */}
           <CTASection/>
        </section>
    );
};

export default OrderProcess;
