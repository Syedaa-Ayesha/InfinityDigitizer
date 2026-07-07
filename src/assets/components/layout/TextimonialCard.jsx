import { Quote, Star } from "lucide-react";

const TestimonialCard = ({
  quote,
  rating,
  name,
  company,
  image,
  country,
}) => {
  return (
    <div
       className="
    flex
    flex-col
    h-[360px]
    w-full
    max-w-[410px]
    rounded-[20px]
    border
    border-[#ECECEC]
    bg-white
    px-8
    py-8
    shadow-[0px_14px_40px_rgba(0,0,0,0.08)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0px_20px_55px_rgba(116,52,229,0.18)]
  "
    >
      {/* Quote Icon */}

      <Quote
        size={28}
        strokeWidth={3}
        className="text-[#7434E5] rotate-180"
      />

      {/* Review */}

      <p className="mt-6 text-[15px] leading-7 text-[#4B5563]">
        {quote}
      </p>

      {/* Stars */}

      <div className="mt-6 flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            size={16}
            fill="#7434E5"
            className="text-[#7434E5]"
          />
        ))}
      </div>

      {/* Bottom */}

      <div className="mt-7 flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-4">

          <img
            src={image}
            alt={name}
            className="
            h-12
            w-12
            rounded-full
            object-cover
            "
          />

          <div>

            <h4 className="font-semibold text-[#1D2433]">
              {name}
            </h4>

            <p className="text-sm text-[#7A7A7A]">
              {company}
            </p>

          </div>

        </div>

        {/* Country */}

        <img
          src={country}
          alt="Country"
          className="h-5 w-7 object-cover rounded-sm"
        />

      </div>
    </div>
  );
};

export default TestimonialCard;