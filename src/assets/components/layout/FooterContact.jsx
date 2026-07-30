import { Phone, Mail, MapPin, CloudUpload, ArrowRight } from "lucide-react";

import { footerContact } from "../common/FooterData";

const contactItems = [
  {
    icon: Phone,
    title: footerContact.phone,
    subtitle: footerContact.phoneSubtitle,
  },
  {
    icon: Mail,
    title: footerContact.email,
    subtitle: footerContact.emailSubtitle,
  },
  {
    icon: MapPin,
    title: footerContact.address,
    subtitle: footerContact.addressSubtitle,
  },
];

const FooterContact = () => {
  return (
    <div
      className="
      max-w-[330px]

      mx-auto
      lg:mx-0
      "
    >
      {/* Heading */}

      <h3
        className="
        text-[20px]
        font-bold
        text-white

        lg:text-left
        "
      >
        Contact Us
      </h3>

      {/* Line */}

      <div
        className="
        mt-3
        mb-8

        h-[3px]
        w-10
        rounded-full
        bg-[#7434E5]
    
        "
      />

      {/* Contact Items */}

      <div className="space-y-7">
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
              flex
              items-start
              gap-4
              "
            >
              {/* Icon */}

              <div
                className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full

                border
                border-[#35355A]

                bg-[#1C1C42]

                transition-all
                duration-300

                hover:border-[#7434E5]
              "
              >
                <Icon size={18} className="text-[#9B6BFF]" />
              </div>

              {/* Text */}

              <div className="min-w-0">
                <h4
                  className="
                  wrap-break-words

                  text-base
                  font-semibold
                  text-white
                "
                >
                  {item.title}
                </h4>

                {item.subtitle && (
                  <p
                    className="
                    mt-1

                    text-[13px]
                    leading-6
                    text-[#9CA3AF]
                  "
                  >
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}

      <div
        className="
        mt-10

        rounded-[18px]

        border
        border-[#2E2E5C]

        bg-[#1B1B40]

        p-6
      "
      >
        {/* Icon */}

        <div
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full    
border
        border-[#7434E5]
          bg-[#311C54]
        "
        >
          <CloudUpload size={24} className="text-[#ffffff]/80" />
        </div>

        {/* Heading */}

        <h3
          className="
          mt-2
font-dmSans
          text-base
          font-bold
          text-white
        "
        >
          Send Your Design
        </h3>

        {/* Text */}

        <p
          className="
          mt-2
font-inter
          text-xs
          leading-5
          text-[#A8A8C7]
        "
        >
          Upload your design and get a free quote in minutes.
        </p>

        {/* Button */}

        <button
          className="
          group
          mt-3
text-sm
font-dmSans
          flex
          items-center
          gap-1
          font-bold
          text-[#7434E5]
          transition-all
          duration-300
          hover:text-white
        "
        >
          Upload Now
          <ArrowRight
            size={20}
            className="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
          />
        </button>
      </div>
    </div>
  );
};

export default FooterContact;
