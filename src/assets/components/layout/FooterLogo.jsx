import logo from "../../images/Logo.png";

import { footerFeatures } from "../common/FooterData";

import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const socialIcons = [
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
];

const FooterLogo = () => {
  return (
    <div
      className="
      w-full
      max-w-[360px]

      mx-auto
      lg:mx-0
      "
    >
      {/* Logo */}

      <img
        src={logo}
        alt="Infinity Digitizing"
        className="
        w-[145px]

        mx-auto
        lg:mx-0
        "
      />

      {/* Description */}

      <p
        className="
        mt-6
        text-[14px]
        leading-7
        text-[#9C9CB8]

        text-center
        lg:text-left
        "
      >
        Infinity Digitizing is a professional online embroidery
        digitizing, logo designing & vector art company with
        15 years of experience. We serve our services across
        the USA, UK, Canada, and Australia with fast
        turnarounds, machine embroidery files, conversion,
        print ready and consistent quality.
      </p>

      {/* Features */}

      <div
        className="
        mt-8
        grid
        grid-cols-4
        gap-5
        "
      >
        {footerFeatures.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="
              flex
              flex-col
              items-center
              text-center
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
                border
                border-[#35355A]
                bg-[#1C1C42]

                transition-all
                duration-300

                hover:border-[#7434E5]
                hover:bg-[#7434E5]
              "
              >
                <Icon
                  size={18}
                  className="text-[#9B6BFF]"
                />
              </div>

              <h4
                className="
                mt-3
                text-[11px]
                font-semibold
                leading-4
                text-white
                "
              >
                {item.title}
              </h4>

              <p
                className="
                mt-1
                text-[10px]
                leading-4
                text-[#9C9CB8]
                "
              >
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      {/* Follow */}

      <h4
        className="
        mt-10
        text-[18px]
        font-semibold
        text-white

        text-center
        lg:text-left
        "
      >
        Follow Us
      </h4>

      {/* Social */}

      <div
        className="
        mt-5
        flex
        justify-center
        gap-3

        lg:justify-start
        "
      >
        {socialIcons.map((Icon, index) => (
          <button
            key={index}
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#35355A]
            bg-[#1C1C42]
            text-white

            transition-all
            duration-300

            hover:border-[#7434E5]
            hover:bg-[#7434E5]
          "
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FooterLogo;