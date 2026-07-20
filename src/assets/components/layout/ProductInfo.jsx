import { useState } from "react";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Check,
  Download,
  ShieldCheck,
  Lock,
  Heart
} from "lucide-react";

const ProductInfo = ({ design }) => {
  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
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

        <button className="text-sm font-medium text-[#7B3FF2] hover:underline">
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

      <div className="">
        <h3 className="text-base font-bold font-dmSans text-[#0F1729]">
          What's Included
        </h3>

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
      <div className="">
        {/* <h3 className="text-lg font-semibold text-[#1E1E1E]">
    Supported Formats
  </h3> */}

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

      <div className=" border-t border-[#ECECEC]" />
      <div className=" flex flex-col gap-4 lg:flex-row">
        {/* Quantity */}

        <div
          className="
    flex
    h-[60px]
    w-[130px]
    items-center
    justify-between
    rounded-[14px]
    border
    border-[#DCDFE5]
    
    "
        >
          <div className="h-full flex items-center justify-center border-r border-[#DCDFE5]  w-[40px]">
            <button onClick={decrease}>
              <Minus size={18} />
            </button>
          </div>
          <div className="h-full flex items-center justify-center border-r border-[#DCDFE5] w-[40px]">
            <span className="font-semibold">{quantity}</span>
          </div>
          <div className="h-full flex items-center justify-center w-[40px]">
            <button onClick={increase}>
              <Plus size={18} />
            </button>
          </div>
        </div>

        {/* Add Cart */}

        <button
          className="
    flex-1
    rounded-xl
    bg-[#7B3FF2]
   
    py-4
    font-semibold
    text-white
    transition
    hover:bg-[#6930E6]
    "
        >
          <ShoppingCart size={18} className="mr-2 inline" />
          Add To Cart
        </button>
      </div>
      

<button
  className="
    flex
    h-14
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    border
    border-[#DCDFE5]
    bg-white
    font-inter
    text-[#1F2937]
    font-semibold
    transition-all
    duration-300
    hover:border-[#7B3FF2]
    hover:bg-[#F7F3FF]
    hover:text-[#7B3FF2]
    active:scale-[0.98]
  "
>
  <Heart
    size={20}
    strokeWidth={2}
    className="transition-colors duration-300"
  />

  Add to Wishlist
</button>
     <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
  <div className="flex items-center justify-center gap-2 border-r border-[#E5E7EB] px-2">
    <Download className="text-[#7B3FF2]" size={16} />
    <p className="text-[10px] sm:text-xs text-[#6B7280] whitespace-nowrap">
      Instant Download
    </p>
  </div>

  <div className="flex items-center justify-center gap-2 border-r border-[#E5E7EB] px-2">
    <Lock className="text-[#7B3FF2]" size={16} />
    <p className="text-[10px] sm:text-xs text-[#6B7280] whitespace-nowrap">
      Secure Payment
    </p>
  </div>

  <div className="flex items-center justify-center gap-2 px-2">
    <ShieldCheck className="text-[#7B3FF2]" size={16} />
    <p className="text-[10px] sm:text-xs text-[#6B7280] whitespace-nowrap">
      Quality Guarantee
    </p>
  </div>
</div>
    </section>
  );
};

export default ProductInfo;
