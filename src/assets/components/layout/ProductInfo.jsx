
import {
  Star,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const ProductInfo = ({ design }) => {

  const navigate = useNavigate();
 
  return (
    <section className=" flex flex-col gap-5">
      {/* Category Badge */}

      <div className="w-fit flex items-center rounded-full bg-[#F4EEFF] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#7B3FF2]">
        {design.category}
      </div>

      {/* Title */}

      <h1 className="text-[22px] font-bold leading-tight text-[#1E1E1E] lg:text-[34px]">
        {design.title}
      </h1>

      {/* Rating */}

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center text-[#7434E5]">
          {[1, 2, 3, 4, 5].map((item) => (
            <Star key={item} size={18} fill="currentColor" />
          ))}
        </div>

        <span className="font-semibold text-[#222]">{design.rating}</span>

        <span className="text-sm text-gray-500">{design.reviews}</span>

        <button className="text-sm font-medium text-[#7B3FF2] hover:underline"  onClick={() => navigate("/reviews")}>
          See all reviews
        </button>
      </div>

      {/* Divider */}

      <div className=" border-t border-[#ECECEC]" />

      {/* Price */}

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[40px] font-extrabold font-dmSans text-[#7434E5]">
          {design.price}
        </span>

        <span className="text-sm text-gray-500">/ per file</span>

        <span className="text-lg font-semibold text-gray-400 line-through">
          {design.oldPrice}
        </span>

        <span className="rounded-full bg-[#EAF8ED] px-3 py-1 text-xs font-semibold text-[#1F9D57]">
          {design.discount}
        </span>
      </div>

      {/* Description */}

      <p className=" max-w-[650px] text-base leading-7 text-[#424957]">
        A beautifully detailed butterfly embroidery design, perfect for
        garments, hats, tote bags and accessories. Crisp stitching, vibrant
        color separations and optimized stitch paths for professional results on
        any machine.
      </p>
      <div className=" border-t border-[#ECECEC]" />
      {/* What's Included */}

      <div >
        <p className="text-base font-bold font-dmSans text-[#0F1729] text-[18px]">
          What's Included
        </p>

        <div className="mt-4 space-y-3">
          {design.included.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-[#424957] font-inter"
            >
              <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#7434E5]">
                <Check size={12} strokeWidth={4.5} className="text-[#FFFFFF]" />
              </div>

              <span className="">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-4 flex flex-wrap gap-3">
          {design.formats.map((format) => (
            <span
              key={format}
              className="
        rounded-full
        border
        border-[#D7CDEA]
        bg-[#EDE7F8]
        px-4
        py-[6px]
        text-sm
        font-bold
        text-[#4F1DA5]
        
        "
            >
              {format}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
