import { Download, Heart } from "lucide-react";

const DesignCard = ({ design }) => {
  return (
    
    <article
      className="
      group
      bg-white
      rounded-[24px]
      border border-[#E9E9EE]
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden bg-[#FFF9F6]">

        {/* Favorite Button */}
        <button
          className="
          absolute
          top-4
          right-4
          z-10
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-md
          transition
          hover:scale-110
          "
        >
          <Heart
            size={18}
            className={`${
              design.favorite
                ? "fill-[#6F3DFF] text-[#6F3DFF]"
                : "text-[#B9B9C3]"
            }`}
          />
        </button>

        <img
          src={design.image}
          alt={design.title}
          className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <h3
          className="
          text-[17px]
          font-semibold
          text-[#1E1E1E]
          truncate
          "
        >
          {design.title}
        </h3>

        <button
          className="
          mt-5
          flex
          h-11
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          border
          border-[#6F3DFF]
          text-sm
          font-medium
          text-[#6F3DFF]
          transition-all
          duration-300
          hover:bg-[#6F3DFF]
          hover:text-white
          "
        >
          <Download size={18} />

          Free Download
        </button>

      </div>
    </article>
   
  )
}

export default DesignCard