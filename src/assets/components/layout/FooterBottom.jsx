import { Lock } from "lucide-react";

const paymentMethods = [
  "VISA",
  "PayPal",
  "Mastercard",
  "Discover",
  "AmEx",
];

const FooterBottom = () => {
  return (
     <div
      className="
      mt-16
      border-t
      border-[#2B2B52]
      pt-7
    "
    >
      <div
        className="
        mx-auto
        flex
        max-w-[1280px]
        items-center
        justify-between
      "
      >
        {/* Copyright */}

        <p className="text-[14px] text-[#9CA3AF]">
          © 2025 Infinity Digitizing. All Rights Reserved.
        </p>

        {/* Payment Methods */}

        <div className="flex items-center gap-3">

          {paymentMethods.map((item) => (

            <div
              key={item}
              className="
              flex
              h-[42px]
              min-w-[72px]
              items-center
              justify-center
              rounded-lg
              border
              border-[#35355A]
              bg-[#1C1C42]
              px-4
            "
            >
              <span
                className="
                text-[13px]
                font-semibold
                text-white
              "
              >
                {item}
              </span>
            </div>

          ))}

        </div>

        {/* Secure */}

        <div
          className="
          flex
          items-center
          gap-2
          text-[#9CA3AF]
        "
        >

          <Lock
            size={16}
            className="text-[#7434E5]"
          />

          <span className="text-[14px]">
            Secure Payments
          </span>

        </div>

      </div>
    </div>
  )
}

export default FooterBottom