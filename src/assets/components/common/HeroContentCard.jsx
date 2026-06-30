import {
  FileCheck,
  Headset,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Heading from "./Heading";
import ServiceHighlights from "./ServiceHighlights";
import Herobtn from "./Herobtn";
import TrustPanel from "./TrustPanel";

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
    <div className="min-w-[613px]">

      {/* WhatsApp Banner */}
      <div className="mb-[18px] flex w-fit items-center rounded-3xl bg-[#16E156]/10 px-3 py-1">
        <FaWhatsapp className="h-6 w-6 text-[#16E156]" />

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-sm font-semibold uppercase text-[#16E156]"
        >
          Click here to Contact Quickly
        </a>
      </div>
    <Heading title={`Professional
        Embroidery Digitizing,
        Logo Designing &
        Vector Art Services`}/>
     

     

      {/* Features List */}
      <ul className="mb-7 ml-1 list-inside list-disc text-[#00030B]/70">
        <li>Serving the USA, Canada, the UK & Australia</li>
        <li>Fast Turnaround — 4 to 24 Hours</li>
        <li>Quality Guarantee on Every File</li>
      </ul>
 {/* Subtitle */}
      <p className="my-7 text-base font-medium text-[#00030B]/70">
        OVER 35,000 HAPPY CUSTOMERS, SERVING SINCE 2012
      </p>
      {/* Service Highlights */}
      <div className="mb-7 flex w-[553px] flex-wrap gap-4">
        {services.map((service, index) => (
          <ServiceHighlights
            key={index}
            title={service.title}
            Icon={service.Icon}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Herobtn
          className="border border-[#8A38F5] bg-[#8A38F5] text-white"
          btnText="Get Free Quote"
        />

        <Herobtn
          className="border border-[#3F4D5E] bg-white text-[#00030B]"
          btnText="View Portfolio"
        />
      </div>

      {/* Trust Section */}
      <TrustPanel />
    </div>
  );
};

export default HeroContentCard;