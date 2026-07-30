import { Lock } from "lucide-react";
import Visa from "../../images/Visa.png";
import PayPal from "../../images/Paypal.png";
import Piyoneer from "../../images/payoneer_logo.svg.png";
import MasterCard from "../../images/MasterCard.png";
import Discover from "../../images/Discover.png";
const paymentMethods = [
  {
    id: 1,
    image: Visa,
    alt: "Visa",
  },
  {
    id: 2,
    image: PayPal,
    alt: "PayPal",
  },
  {
    id: 3,
    image: MasterCard,
    alt: "MasterCard",
  },
  {
    id: 4,
    image: Discover,
    alt: "Discover",
  },
  {
    id: 5,
    image: Piyoneer,
    alt: "Payoneer",
  },
];

const FooterBottom = () => {
  return (
    <div
      className="
      mt-16
      border-t
      border-[#26264D]
      pt-8
      pb-10
      "
    >
      <div
        className="
        mx-auto
        max-w-[1320px]
        flex
        flex-col
        items-center
        gap-6
        px-5
        sm:px-6
        lg:px-0
        "
      >
        {/* Copyright */}

        <p
          className="
          font-normal
          text-sm
          font-inter
          leading-7
          text-[#ffffff]
        "
        >
          © 2026 Infinity Digitizing. All Rights Reserved.
        </p>

        <div
          className="
    flex
    flex-wrap
    items-center
    justify-center
    gap-3
    sm:gap-4
  "
        >
          {paymentMethods.map((item) => (
            <div
              key={item.id}
              className="
        flex
        h-[46px]
        w-[82px]
        items-center
        justify-center
        rounded-[14px]
        border
        border-white/12
        bg-white/6
        transition-all
        duration-300
        hover:border-[#7434E5]
        hover:bg-[#7434E5]/10
      "
            >
              <img
                src={item.image}
                alt={item.alt}
                className="
          h-auto
          max-h-6
          w-auto
          object-contain
        "
              />
            </div>
          ))}
        </div>

        {/* Secure */}

        <div
          className="
          flex
          items-center
          justify-center
          gap-2
          text-center
        "
        >
          <Lock size={24} className="text-[#FFFFFF]" strokeWidth={1} />

          <p
            className="
            text-sm
            text-[#FFFFFF]
          "
          >
            Secure Payments.
            <span>Your data is safe with us.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
