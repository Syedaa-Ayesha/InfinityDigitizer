import { Mail, ArrowRight } from "lucide-react";
import SidebarHeading from "./SidebarHeading";
const Newsletter = () => {
  return (
    <section
      className="
        rounded-[28px]
        border
        border-[#ECECEC]
        bg-white
        py-6
        px-[22px]
        shadow-sm
        sm:p-8
        
      "
    >
      {/* Heading */}

      <SidebarHeading sidebarHeading ="Newsletter" Icon= {Mail}/>

      {/* Description */}

      <p
        className="
        mt-[14px]
          text-[14px]
          font-inter
          leading-6
          text-[#6B7280]
        "
      >
        Get the latest digitizing tips and guides
delivered to your inbox weekly.
      </p>

      {/* Form */}

      <form className=" space-y-3">

        {/* Email */}

        <input
          type="email"
          placeholder="Your email address"
          className="
          mt-[14px]
            h-[42px]
            w-full
            py-3
            px-[14px]
            rounded-[10px]
            border
            border-[#DCDFE5]
            bg-white
            text-[14px]
            text-[#111827]
            outline-none
            transition-all
            duration-300
            placeholder:text-[#ACB0B9]
            focus:border-[#7434E5]
            
            focus:ring-[#7434E5]/10
          "
        />

        {/* Button */}

        <button
          type="submit"
          className="
            flex
            h-[42px]
            w-full
            rounded-[10px]
            items-center
            justify-center
            gap-2
            font-inter
            text-sm[22px]
            font-bold
            text-white
            transition-all
            duration-300
            hover:scale-[1.01]
            hover:shadow-xl
            active:scale-[0.99]
          "
          style={{
           background: "linear-gradient(94.72deg, #6C29E0 0%, #5413C3 100%)"
          }}
        >
          Subscribe

          <ArrowRight size={14} strokeWidth={4}/>
        </button>

      </form>
    </section>
  );
};

export default Newsletter;