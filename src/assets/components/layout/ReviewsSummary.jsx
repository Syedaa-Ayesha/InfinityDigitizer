import { Star } from "lucide-react";

const ReviewsSummary = ({design}) => {

  const ratings = design?.ratingBreakdown || [];
  return (
    <div
      className="
      h-fit
      rounded-[16px]
      bg-[#F4F1F9]
      py-7
      px-6
      flex
      flex-col
      gap-[14px]
      "
    >
      {/* Rating */}

      <h2
        className="
        text-center
        text-[72px]
        font-extrabold
        leading-none
        text-[#7B3FF2]
        font-dmSans
        "
      >
        {design.rating}
      </h2>

      {/* Stars Rating*/}

      <div className=" flex justify-center">

        {[1,2,3,4,5].map((item)=>(

          <Star
            key={item}
            size={24}
            fill="currentColor"
            className="text-[#7B3FF2]"
          />

        ))}

      </div>

      <p
        className="
        text-center
        text-[14px]
        text-[#6B7280]
        font-inter
        "
      >
        Based on {design.reviews} reviews
      </p>

      {/* Progress */}

      <div className=" space-y-4">

        {ratings.map((item)=>(

          <div
            key={item.star}
            className="flex items-center gap-[10px]"
          >

            <span
              className="
              w-5
              text-sm
              text-[#6B7280]
              font-semibold
              "
            >
              {item.star}★
            </span>

            <div
              className="
              h-[8px]
              flex-1
              overflow-hidden
              rounded-full
              bg-[#ECE7F9]
              "
            >

              <div
                className="h-full rounded-full bg-gradient-to-r from-[#6C29E0] to-[#5413C3]
    transition-all
    duration-500"
                style={{
                 width: `${item.percentage}%`,
            
                }}
              />

            </div>

            <span
              className="
              w-8
              text-
              font-inter
              font-semibold
              text-sm
              text-[#6B7280]
              "
            >
              {item.percentage}%
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default ReviewsSummary