import { Heart, Crown, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
const PremiumDesignCard = ({design}) => {
  return (
     <Link to={`/design/${design.id}`}>
    <article
      className="
            group
      bg-white
      rounded-[24px]
      border border-[#E9E9EE]
      overflow-hidden
      transition-all
      p-1
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-[215px] overflow-hidden bg-[#FFF9F6] rounded-2">

        {/* Premium Badge */}
        <div className="absolute left-4 top-4 z-10">
          <div className="flex items-center
            justify-center rounded-full h-[30px] w-[30px] bg-[#FFF4C9] text-[#FFCD0A] border-[#FFCD0A]/10">
            <Crown size={16} stroke="#FFCD0A" strokeWidth={2} />
          </div>
        </div>

        {/* Wishlist */}
        <button
          className="
            absolute
            right-4
            top-4
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
                ? "fill-[#FF4D7D] text-[#FF4D7D]"
                : "text-[#BDBDBD]"
            }`}
          />
          
        </button>
 {/* Price */}
        <p className=" absolute bottom-2 right-2 px-[10px] py-1 border-[#E7E3ED] bg-[#FFFFFF] rounded-full text-[14px] font-dmSans font-bold text-[#0F1729] z-40">
          {design.price}
        </p>
        {/* Image */}
          <img
          src={design.image}
          alt={design.title}
          className="
          h-full
          w-full
          object-cover
         
          "
        />
        
      </div>

      {/* Content */}
      <div className="p-5">

       

        {/* Title */}
        <h3 className="mt-2 text-[17px] font-semibold text-[#1F1F1F] text-center">
          {design.title}
        </h3>

        {/* Button */}
        <button
          className="
            mt-5
            flex
            h-11
            w-full
            items-center
            justify-center
            gap-2
            rounded-md
            bg-[#7B3FF2]
            text-sm
            font-semibold
            text-white
            transition
            duration-300
            hover:bg-[#6632EA]
          "
        >
          <ShoppingCart size={17} />
          Add to Cart
        </button>

      </div>
    </article>
</Link>

  )
}

export default PremiumDesignCard