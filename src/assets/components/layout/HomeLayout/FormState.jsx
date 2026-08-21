import { useState } from "react";
import { Flower, Frame, Gem } from "lucide-react";

import EmbroideryDesignForm from "./EmbroideryDesignForm";
import VectorArt from "./VectorArt";
import LogoDesign from "./LogoDesign";

const serviceCategories = [
  {
    id: "embroidery",
    name: "Embroidery",
    icon: Flower,
    component: EmbroideryDesignForm,
  },
  {
    id: "vector",
    name: "Vector Art",
    icon: Frame,
    component: VectorArt,
  },
  {
    id: "logo",
    name: "Logo Design",
    icon: Gem,
    component: LogoDesign,
  },
];

const ServiceCategoryButton = ({
  category,
  isActive,
  onClick,
}) => {
  const Icon = category.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`
        flex
        h-[88px]
        min-w-0
        flex-1
        flex-col
        items-center
        justify-center
        gap-2
        rounded-[12px]
        border
        px-2
        transition-all
        duration-300
        sm:h-[92px]
        sm:rounded-[14px]
        ${
          isActive
            ? `
              border-transparent
              bg-gradient-to-r
              from-[#753DF0]
              to-[#4E2A8C]
              text-white
              shadow-[0_8px_20px_rgba(116,52,229,0.28)]
            `
            : `
              border-[#E7E4F3]
              bg-white
              text-[#0F1729]
              hover:border-[#CDBAF4]
              hover:bg-[#FAF8FF]
            `
        }
      `}
    >
      <Icon
        size={25}
        strokeWidth={1.8}
        className="shrink-0"
      />

      <span
        className="
          font-inter
          text-[10px]
          font-bold
          uppercase
          leading-none
          sm:text-[11px]
        "
      >
        {category.name}
      </span>
    </button>
  );
};

const FormState = () => {
  const [activeTab, setActiveTab] = useState(
    serviceCategories[0].id
  );

  const activeCategory = serviceCategories.find(
    (category) => category.id === activeTab
  );

  const ActiveForm = activeCategory?.component;

  return (
    <div
      className="
        w-full
        rounded-[20px]
        border
        border-[#E9E9E9]
        bg-white
        px-4
        py-6
        shadow-[0_12px_35px_rgba(25,15,55,0.16)]
        sm:px-5
        sm:py-7
        lg:px-[25px]
      "
    >
      {/* ================= HEADER ================= */}

      <div>
        <h2
          className="
            font-dmSans
            text-[24px]
            font-bold
            leading-[1.2]
            text-[#0F1729]
            sm:text-[27px]
            lg:text-[28px]
          "
        >
          Get Your Free Quote Today
        </h2>

        <p
          className="
            mt-1
            max-w-[500px]
            font-inter
            text-[11px]
            leading-4
            text-[#7A7591]
            sm:text-[12px]
          "
        >
          Upload your artwork and receive a fast, accurate quote
          from our digitizing experts.
        </p>
      </div>

      {/* ================= CATEGORY LABEL ================= */}

      <div className="mt-4">
        <span
          className="
            block
            font-inter
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3px]
            text-[#7A7591]
            sm:text-[10px]
          "
        >
          Choose a Service Category
        </span>

        {/* ================= CATEGORY BUTTONS ================= */}

        <div
          className="
            mt-1.5
            grid
            grid-cols-3
            gap-2
            sm:gap-2.5
          "
        >
          {serviceCategories.map((category) => (
            <ServiceCategoryButton
              key={category.id}
              category={category}
              isActive={activeTab === category.id}
              onClick={() =>
                setActiveTab(category.id)
              }
            />
          ))}
        </div>
      </div>

      {/* ================= ACTIVE FORM ================= */}


<div
  className="
    mt-5
    border-t
    border-[#EEEEEE]
    pt-5
    sm:mt-6
    sm:pt-6
  "
>
  {ActiveForm && <ActiveForm />}
</div>
    </div>
  );
};

export default FormState;