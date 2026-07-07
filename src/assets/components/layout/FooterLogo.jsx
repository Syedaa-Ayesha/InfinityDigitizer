
import logo from "../../images/Logo.png";

import {
  footerFeatures,
} from "../common/FooterData";

import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const FooterLogo = () => {
  return (
     <div className="w-[330px]">

      {/* Logo */}

      <img
        src={logo}
        alt="Infinity Digitizing"
        className="w-[140px]"
      />

      {/* Description */}

      <p className="mt-6 text-[14px] leading-[28px] text-[#9C9CB8]">
        Infinity Digitizing is a professional online embroidery
        digitizing, logo designing & vector art company with
        15 years of experience. We serve our services across
        the USA, UK, Canada, and Australia with fast
        turnarounds, machine embroidery files, conversion,
        print ready and consistent quality.
      </p>

      {/* Features */}

      <div className="mt-8 flex gap-4">

        {footerFeatures.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="flex w-[72px] flex-col items-center"
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
                  text-center
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
                  text-center
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
        "
      >
        Follow Us
      </h4>

      {/* Social */}

      <div className="mt-5 flex gap-3">

        {[
        <FaYoutube size={18} />,
    <FaInstagram size={18} />,
    <FaFacebookF size={18} />,
    <FaPinterestP size={18} />,
        ].map((icon, index) => (

          <div
            key={index}
            className="
              flex
              h-11
              w-11
              cursor-pointer
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

            {icon}

          </div>

        ))}

      </div>

    </div>
  )
}

export default FooterLogo