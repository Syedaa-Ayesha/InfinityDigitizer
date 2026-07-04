import Heading from "../common/Heading"
import patchPreview from "../../images/Patch preview with infographic.png"
import FormState from "../../components/common/FormState"
import {
  Zap,
  FileCheck,
  ShieldCheck,
  Clover 
} from "lucide-react";

const LoginSubmissionPortal = () => {
    const servicePoints =[
        {
            icon: <Zap/>,
            title:"Fast Turnaround Times",
            text: "Get your digitized files delivered within 4–24 hours without compromising quality."
        },
        {
            icon: <FileCheck />,
            title:"All Major File Formats Supported",
            text: "We provide DST, PES, EXP, JEF, VP3, EMB, AI, EPS, SVG, PDF, and more."
        },
        {
            icon:<ShieldCheck/>,
            title:"Unlimited Revisions",
            text: "Need changes? We'll revise your design until it meets your requirements."
        },
        {
            icon:  <Clover />,
            title:"Perfect Stitching Results",
            text: "Every design is manually digitized to deliver clean, smooth, and accurate embroidery."
        }

    ]
  return (
    <>
    <div className="min-h-screen flex px-[70px] py-12 " style={{
    background:
      "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
  }}>
<div>
<Heading title={`Your Artwork,
    Perfectly Prepared`}/>
    <p className="font-inter text-basis mb-8 ">Embroidery digitizing, vector art & logo digitizing services designed to deliver accurate, reliable, and production ready files.</p>
    <img src={patchPreview} alt="Patch Preview" className="ml-8" />
    <div className="relative mt-[320px]">
        <h2 className="font-bold text-[32px] font-dmSans leading-9.5 mb-[57px]">What Do You Get with <br /> Infinity Digitizing?</h2>

       <div className="grid grid-cols-2 gap-6">
  {servicePoints.map((item, index) => (
    <div key={index} className="flex gap-4 ">
      {/* Icon */}
      <div className="w-[54px] h-[54px] p-4 rounded-full bg-[#E8DBFE] text-[#7434E5] flex items-center justify-center">
        {item.icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="font-bold text-[18px]">
          {item.title}
        </h3>

        <p className="text-[#7A7591] text-[14px]">
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
    </div>
<FormState/>
    </div>
    </>
  )                                                                                                                                                                                                                               
}

export default LoginSubmissionPortal