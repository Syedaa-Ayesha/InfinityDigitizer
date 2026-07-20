import { Star } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <article
      className="
      rounded-[22px]
      border
      border-[#E7E3ED]
      bg-white
      px-6
      py-[22px]
      transition-all
      duration-300
      hover:shadow-md
      "
    >
      <div className="flex items-start justify-between gap-4">

        <div className="flex gap-4">

          {/* Avatar */}

          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#E8E1F4]
            text-[14px]
            font-bold
            font-dmSans
            text-[#4F1DA5]
            "
          >
            {review.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>

          {/* User */}

          <div>

            <h3
              className="
              text-base
              font-bold
              font-dmSans
              text-[#0F1729]
              "
            >
              {review.name}
            </h3>

            <p
              className="
              mt-1
              text-sm
              font-inter
              text-[#ACB0B9]
              "
            >
              {review.date}
            </p>

          </div>

        </div>

        {/* Stars */}

        <div className="flex gap-1">

          {[1,2,3,4,5].map((item)=>(

            <Star
              key={item}
              size={18}
              fill="currentColor"
              className="text-[#7B3FF2]"
            />

          ))}

        </div>

      </div>

      {/* Review */}

      <p
        className="
        mt-[14px]
        text-[14px]
        leading-8
        font-inter
        text-[#424957]
        
        "
      >
        {review.review}
      </p>

    </article>
  );
};

export default ReviewCard;