import {
  Phone,
  Mail,
  MapPin,
  Upload,
  ArrowRight,
} from "lucide-react";

import { footerContact } from "../common/FooterData";

const FooterContact = () => {
  return (
      <div className="w-[305px]">

      {/* Heading */}

      <h3 className="font-dmSans text-[18px] font-bold text-white">
        Contact Us
      </h3>

      <div className="mt-3 mb-6 h-[3px] w-10 rounded-full bg-[#7434E5]" />

      {/* Phone */}

      <div className="mb-7 flex gap-4">

        <div
          className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#34345C]
          bg-[#1B1B40]
        "
        >
          <Phone size={18} className="text-[#9B6BFF]" />
        </div>

        <div>
          <h4 className="text-[15px] font-semibold text-white">
            {footerContact.phone}
          </h4>

          <p className="mt-1 text-[13px] text-[#9CA3AF]">
            {footerContact.phoneSubtitle}
          </p>
        </div>
      </div>

      {/* Email */}

      <div className="mb-7 flex gap-4">

        <div
          className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#34345C]
          bg-[#1B1B40]
        "
        >
          <Mail size={18} className="text-[#9B6BFF]" />
        </div>

        <div>
          <h4 className="text-[15px] font-semibold text-white">
            {footerContact.email}
          </h4>

          <p className="mt-1 text-[13px] text-[#9CA3AF]">
            {footerContact.emailSubtitle}
          </p>
        </div>
      </div>

      {/* Address */}

      <div className="mb-8 flex gap-4">

        <div
          className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#34345C]
          bg-[#1B1B40]
        "
        >
          <MapPin size={18} className="text-[#9B6BFF]" />
        </div>

        <div>
          <h4 className="text-[15px] font-semibold text-white">
            {footerContact.address}
          </h4>
        </div>

      </div>

      {/* Purple CTA Card */}

      <div
        className="
        rounded-[16px]
        border
        border-[#2D2D59]
        bg-[#23234B]
        p-6
      "
      >

        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#7434E5]
        "
        >
          <Upload size={20} className="text-white" />
        </div>

        <h3 className="mt-5 text-[20px] font-bold text-white">
          Send Your Design
        </h3>

        <p className="mt-2 text-[14px] leading-7 text-[#A8A8C7]">
          Upload your design and get a free quote in minutes.
        </p>

        <button
          className="
          group
          mt-6
          flex
          items-center
          gap-2
          text-[15px]
          font-semibold
          text-[#A877FF]
          transition-all
          duration-300
          hover:text-white
        "
        >
          Upload Now

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>

    </div>
  )
}

export default FooterContact