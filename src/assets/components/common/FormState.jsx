// import DropDown from "../common/DropDown"
import { useState } from "react";
// import Instruction from "./Instruction";
import {Flower, Gem, Frame} from 'lucide-react'
import EmbroideryDesignForm from "../layout/EmbroideryDesignForm";
import VectorArt from "../layout/VectorArt";
import LogoDesign from "../layout/LogoDesign";

const categories = [
  {
    name: "Embroidery",
    icon: <Flower className="h-[32px] w-[32px]" />,
  },
  {
    name: "Vector Art",
    icon:<Frame className="h-[32px] w-[32px]" />,
  },
  {
    name: "Logo Design",
    icon: <Gem className="h-[32px] w-[32px]" />,
  },
];

const FormState = () => {
    const [activeTab, setActiveTab] = useState("Embroidery");
 
  return (
    <>
   
<div className="border border-[#E9E9E9] shadow-2xl h-fit w-[560px] px-[25px] py-7 rounded-[22px] ml-23 space-y-4">

  <h2 className="font-bold font-dmSans text-[28px]">
    Get Your Free Quote Today
  </h2>

  <p className="text-[12.7px] font-inter text-[#7A7591]">
    Upload your artwork and receive a fast, accurate quote from our digitizing experts.
  </p>

  <span className="block text-[#7A7591] text-[12px] font-bold font-inter uppercase tracking-wide">
    Choose a Service Category
  </span>

  {/* Service Categories */}
 <div className="flex gap-[10px]">
  {categories.map((category) => (
    <button
      key={category.name}
      type="button"
      onClick={() => setActiveTab(category.name)}
      className={`h-[95px] w-[155px] rounded-[14px] px-[10px] py-4 cursor-pointer font-bold text-[13px] uppercase flex flex-col items-center justify-center gap-2 border transition-all duration-300
      ${
        activeTab === category.name
          ? "bg-gradient-to-r from-[#753DF0] to-[#4E2A8C] text-white border-transparent"
          : "border-[#E7E4F3] text-black bg-white"
      }`}
    >
      {category.icon}
      {category.name}
    </button>
  ))}
</div>
<div className="mt-8">

        {activeTab === "Embroidery" && <EmbroideryDesignForm />}

        {activeTab === "Vector Art" && <VectorArt />}

        {activeTab === "Logo Design" && <LogoDesign />}

      </div>
</div>

    </>
  )
}

export default FormState