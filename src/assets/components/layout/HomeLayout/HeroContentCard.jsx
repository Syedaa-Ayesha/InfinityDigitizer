// import {
//   FileCheck,
//   Headset,
//   ShieldCheck,
//   Zap,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import Heading from "../../common/Heading";
// import ServiceHighlights from "./ServiceHighlights";
// import Herobtn from "../../common/Herobtn";
// import TrustPanel from "../../common/TrustPanel";

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
//   return (
//     <div className="min-w-[613px] border">

//       {/* WhatsApp Banner */}
//       <div className="mb-[18px] flex w-fit items-center rounded-3xl bg-[#16E156]/10 px-3 py-1">
//         <FaWhatsapp className="h-6 w-6 text-[#16E156]" />

//         <a
//           href="https://wa.me/923001234567"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ml-1 text-sm font-semibold uppercase text-[#16E156]"
//         >
//           Click here to Contact Quickly
//         </a>
//       </div>
//     <Heading title={`Professional
//         Embroidery Digitizing,
//         Logo Designing &
//         Vector Art Services`}/>
     

     

//       {/* Features List */}
//       <ul className="mb-7 ml-1 list-inside list-disc text-[#00030B]/70">
//         <li>Serving the USA, Canada, the UK & Australia</li>
//         <li>Fast Turnaround — 4 to 24 Hours</li>
//         <li>Quality Guarantee on Every File</li>
//       </ul>
//  {/* Subtitle */}
//       <p className="my-7 text-base font-medium text-[#00030B]/70">
//         OVER 35,000 HAPPY CUSTOMERS, SERVING SINCE 2012
//       </p>
//       {/* Service Highlights */}
//       <div className="mb-7 flex w-[553px] flex-wrap gap-4">
//         {services.map((service, index) => (
//           <ServiceHighlights
//             key={index}
//             title={service.title}
//             Icon={service.Icon}
//           />
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-4">
//         <Herobtn
//           className="border border-[#8A38F5] bg-[#8A38F5] text-white"
//           btnText="Get Free Quote"
//         />

//         <Herobtn
//           className="border border-[#3F4D5E] bg-white text-[#00030B]"
//           btnText="View Portfolio"
//         />
//       </div>

//       {/* Trust Section */}
//       <TrustPanel />
//     </div>
//   );
// };

// export default HeroContentCard;


import {
  FileCheck,
  Headset,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// import Heading from "../../common/Heading";
import ServiceHighlights from "../ServiceHighlights";
import Herobtn from "../../common/Herobtn";
import TrustPanel from "../TrustPanel";

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
{/* 
      <Heading
        title={`Professional
        Embroidery Digitizing,
        Logo Designing &
        Vector Art Services`}
      /> */}
  <h1 className="text-[34px] font-bold leading-[110%] tracking-[-0.01em] text-[#04000B] mb-3 whitespace-pre-line lg:text-[58px]" >
      Professional Embroidery Digitizing,
        Logo Designing &
        Vector Art Services
      </h1>

      {/* ================= FEATURES ================= */}

      <ul
        className="
          mb-5
          ml-1
          list-inside
          list-disc
          text-sm
          leading-6
          text-[#00030B]/70

          sm:mb-7
          sm:text-base
          sm:leading-7
        "
      >
        <li>Serving the USA, Canada, the UK & Australia</li>
        <li>Fast Turnaround — 4 to 24 Hours</li>
        <li>Quality Guarantee on Every File</li>
      </ul>


      {/* ================= CUSTOMER TEXT ================= */}

      <p
        className="
          my-5
          text-sm
          font-medium
          leading-6
          text-[#00030B]/70

          sm:my-7
          sm:text-base
        "
      >
        OVER 35,000 HAPPY CUSTOMERS, SERVING SINCE 2012
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
        w-[calc(50%-6px)]
        lg:w-auto
        lg:flex-1
      "
    />
  ))}
</div>


      {/* ================= BUTTONS ================= */}

      <div
        className="
          flex
          w-full
          flex-col
          gap-3

          sm:flex-row
          sm:gap-4
        "
      >
        <Herobtn
          className="
            w-full
            border
            border-[#8A38F5]
            bg-[#8A38F5]
            text-white

            sm:w-auto
          "
          btnText="Get Free Quote"
        />

        <Herobtn
          className="
            w-full
            border
            border-[#3F4D5E]
            bg-white
            text-[#00030B]

            sm:w-auto
          "
          btnText="View Portfolio"
        />
      </div>


      {/* ================= TRUST PANEL ================= */}

      <TrustPanel />

    </div>
  );
};

export default HeroContentCard;