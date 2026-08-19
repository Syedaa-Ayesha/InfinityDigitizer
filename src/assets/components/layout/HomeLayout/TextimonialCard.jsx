import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ item }) => {
  // ================= INITIALS =================

  const getInitials = (name = "") => {
    const words = name.trim().split(/\s+/);

    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }

    return words[0]?.slice(0, 2).toUpperCase() || "??";
  };

  const initials = getInitials(item.name);

  return (
    <div
      className="
        flex
        min-h-[300px]
        max-h-[360px]
        w-full
        max-w-[410px]
        flex-col
        rounded-2xl
        border
        border-[#ECECEC]
        bg-white
        px-8
        py-8
        shadow-sm
      "
    >
      {/* ================= QUOTE ICON ================= */}

      <Quote
        size={22}
        strokeWidth={2}
        fill="#7434E5"
        className="rotate-180 text-[#7434E5]"
      />

      {/* ================= REVIEW ================= */}

      <p className="mt-3 line-clamp-4 font-inter text-[15px] leading-7 text-[#4B5563]">
        {item.review}
      </p>

      {/* ================= STARS ================= */}

      <div className="mt-4 flex gap-1">
        {[...Array(item.rating)].map((_, index) => (
          <Star
            key={index}
            size={16}
            fill="#7434E5"
            className="text-[#7434E5]"
          />
        ))}
      </div>

      {/* ================= CUSTOMER INFO ================= */}

      <div className=" flex items-center justify-between pt-4">
        {/* Customer */}

        <div className="flex min-w-0 items-center gap-4">
          {/* Profile Image / Initials */}

          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="
                h-12
                w-12
                shrink-0
                rounded-full
                object-cover
              "
            />
          ) : (
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#E8DBFE]
                font-dmSans
                text-[15px]
                font-bold
                text-[#7434E5]
              "
            >
              {initials}
            </div>
          )}

          {/* Name + Country */}

          <div className="min-w-0">
            <h4
              className="
                truncate
                font-dmSans
                text-[15px]
                font-semibold
                text-[#1D2433]
              "
            >
              {item.name}
            </h4>

            <p
              className="
                truncate
                font-inter
                text-sm
                text-[#7A7A7A]
              "
            >
              {item.country}
            </p>
          </div>
        </div>

        {/* Country Flag */}
        <img
  src={item.flag}
  alt={`${item.country} flag`}
  className="h-5 w-7 shrink-0 rounded-sm object-cover"
/>
      </div>
    </div>
  );
};

export default TestimonialCard;