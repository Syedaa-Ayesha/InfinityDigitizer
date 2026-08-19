import {
  ArrowRight,
  FileCheck,
  Headset,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ServiceHighlights from "../ServiceHighlights";
import TrustPanel from "./TrustPanel";
import OutlineBtn from "../OutlineBtn";
import SolidButton from "../SolidButton";
import { useNavigate } from "react-router-dom";
const services = [
  {
    title: `4-24 hours\nTurnaround`,
    Icon: Zap,
  },
  {
    title: `100% Quality\nGuarantee`,
    Icon: ShieldCheck,
  },
  {
    title: `All major\nfiles formats`,
    Icon: FileCheck,
  },
  {
    title: `24/7 friendly\nsupport`,
    Icon: Headset,
  },
];

const HeroContentCard = () => {
    const navigate = useNavigate();
    const handleGetFreeQuote = () => {
    const quoteSection = document.getElementById("quote");

    if (quoteSection) {
      quoteSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div
      className="
        w-full
        max-w-[613px]
        lg:min-w-[613px]
        lg:max-w-[613px]
      "
    >

      {/* ================= WHATSAPP BANNER ================= */}

      <div
        className="
          mb-4
          flex
          w-fit
          max-w-full
          items-center
          rounded-3xl
          bg-[#16E156]/10
          px-3
          py-1
          sm:mb-[18px]
        "
      >
        <FaWhatsapp
          className="
            h-5
            w-5
            shrink-0
            text-[#16E156]
            sm:h-6
            sm:w-6
          "
        />

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="
            ml-1
            whitespace-nowrap
            text-[12px]
            font-semibold
            uppercase
            text-[#16E156]
            sm:text-sm
          "
        >
          Click here to Contact Quickly
        </a>
      </div>


      {/* ================= MAIN HEADING ================= */}

  <h1 className="text-[34px] font-bold leading-[110%] tracking-[-0.01em] text-[#04000B] mb-3 whitespace-pre-line lg:text-[58px]" >
      Professional Embroidery Digitizing,
        Logo Designing &
        Vector Art Services
      </h1>


      {/* ================= CUSTOMER TEXT ================= */}

      <p
        className="
        max-w-[286px]
          my-5
          text-sm
          font-inter
          leading-5
          text-[#00030B]/70
whitespace-pre-line
          sm:my-7
          sm:text-base
          lg:max-w-[484px]
        "
      >
      Trusted by 35,000+ customers across the 
      USA, Canada, the UK, and Australia since 
      2012, we deliver precision crafted designs 
      within 4 to 24 hours.
      </p>


      {/* ================= SERVICE HIGHLIGHTS ================= */}

      {/* <div
        className="
          mb-6
          flex
          flex-row
          w-full
          flex-wrap
          gap-3
          sm:mb-7
          sm:gap-4
border
          lg:max-w-[553px]
        "
      >
        {services.map((service, index) => (
          <ServiceHighlights
            key={index}
            title={service.title}
            Icon={service.Icon}
          />
        ))}
      </div> */}


  {/* ================= SERVICE HIGHLIGHTS ================= */}

<div
  className="
    mb-6
    flex
    w-full
    flex-wrap
    gap-3
    sm:mb-7
    sm:gap-4
    lg:max-w-[553px]
    lg:flex-nowrap
  "
>
  {services.map((service, index) => (
    <ServiceHighlights
      key={index}
      title={service.title}
      Icon={service.Icon}
      width="
        items-start
        justify-start
        w-[calc(50%-6px)]
        lg:w-auto
        lg:flex-1
      lg:items-center
      lg:justify-center
      "
    />
  ))}
</div>


      {/* ================= BUTTONS ================= */}

      <div
        className="
          flex
          w-full
          gap-8
          flex-row
      lg:gap-3
        "
      >
        <SolidButton title="Get Free Quote" Icon={ArrowRight} classname="rounded-xl" type="button"  
         onClick={handleGetFreeQuote}/>
       <OutlineBtn title = "View Portfolio" Icon ={ArrowRight} classname="rounded-xl" type="button" onClick={() => navigate("/free-design")}/>
      </div>

      {/* ================= TRUST PANEL ================= */}
<div className="flex justify-center items-center w-full lg:justify-start">
      <TrustPanel />
</div>
    </div>
  );
};

export default HeroContentCard;



// import {
//   ArrowRight,
//   FileCheck,
//   Headset,
//   ShieldCheck,
//   Zap,
// } from "lucide-react";

// import { FaWhatsapp } from "react-icons/fa";

// import ServiceHighlights from "../ServiceHighlights";
// import TrustPanel from "./TrustPanel";
// import OutlineBtn from "../OutlineBtn";
// import SolidButton from "../SolidButton";

// const services = [
//   {
//     title: `4-24 hours\nTurnaround`,
//     Icon: Zap,
//   },
//   {
//     title: `100% Quality\nGuarantee`,
//     Icon: ShieldCheck,
//   },
//   {
//     title: `All major\nfiles formats`,
//     Icon: FileCheck,
//   },
//   {
//     title: `24/7 friendly\nsupport`,
//     Icon: Headset,
//   },
// ];

// const HeroContentCard = () => {
//   const handleGetFreeQuote = () => {
//     const quoteSection = document.getElementById("quote");

//     if (quoteSection) {
//       quoteSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <div
//       className="
//         w-full
//         max-w-[613px]
//         lg:min-w-[613px]
//         lg:max-w-[613px]
//       "
//     >
//       {/* ================= WHATSAPP BANNER ================= */}

//       <div
//         className="
//           mb-4
//           flex
//           w-fit
//           max-w-full
//           items-center
//           rounded-3xl
//           bg-[#16E156]/10
//           px-3
//           py-1
//           sm:mb-[18px]
//         "
//       >
//         <FaWhatsapp
//           className="
//             h-5
//             w-5
//             shrink-0
//             text-[#16E156]
//             sm:h-6
//             sm:w-6
//           "
//         />

//         <a
//           href="https://wa.me/923001234567"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             ml-1
//             whitespace-nowrap
//             text-[12px]
//             font-semibold
//             uppercase
//             text-[#16E156]
//             sm:text-sm
//           "
//         >
//           Click here to Contact Quickly
//         </a>
//       </div>

//       {/* ================= MAIN HEADING ================= */}

//       <h1
//         className="
//           mb-3
//           whitespace-pre-line
//           text-[34px]
//           font-bold
//           leading-[110%]
//           tracking-[-0.01em]
//           text-[#04000B]
//           lg:text-[58px]
//         "
//       >
//         Professional Embroidery Digitizing,
//         Logo Designing &
//         Vector Art Services
//       </h1>

//       {/* ================= CUSTOMER TEXT ================= */}

//       <p
//         className="
//           my-5
//           max-w-[286px]
//           whitespace-pre-line
//           font-inter
//           text-sm
//           leading-5
//           text-[#00030B]/70
//           sm:my-7
//           sm:text-base
//           lg:max-w-[484px]
//         "
//       >
//         Trusted by 35,000+ customers across the
//         USA, Canada, the UK, and Australia since
//         2012, we deliver precision crafted designs
//         within 4 to 24 hours.
//       </p>

//       {/* ================= SERVICE HIGHLIGHTS ================= */}

//       <div
//         className="
//           mb-6
//           flex
//           w-full
//           flex-wrap
//           gap-3
//           sm:mb-7
//           sm:gap-4
//           lg:max-w-[553px]
//           lg:flex-nowrap
//         "
//       >
//         {services.map((service, index) => (
//           <ServiceHighlights
//             key={index}
//             title={service.title}
//             Icon={service.Icon}
//             width="
//               items-start
//               justify-start
//               w-[calc(50%-6px)]
//               lg:w-auto
//               lg:flex-1
//               lg:items-center
//               lg:justify-center
//             "
//           />
//         ))}
//       </div>

//       {/* ================= BUTTONS ================= */}

//       <div
//         className="
//           flex
//           w-full
//           flex-row
//           gap-8
//           lg:gap-3
//         "
//       >
//         <SolidButton
//           title="Get Free Quote"
//           Icon={ArrowRight}
//           classname="rounded-xl"
//           type="button"
//           onClick={handleGetFreeQuote}
//         />

//         <OutlineBtn
//           title="View Portfolio"
//           Icon={ArrowRight}
//           classname="rounded-xl"
//           type="button"
//         />
//       </div>

//       {/* ================= TRUST PANEL ================= */}

//       <div
//         className="
//           flex
//           w-full
//           items-center
//           justify-center
//           lg:justify-start
//         "
//       >
//         <TrustPanel />
//       </div>
//     </div>
//   );
// };

// export default HeroContentCard;