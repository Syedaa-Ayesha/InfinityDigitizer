import { useState } from "react";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  
  Check,
  Download,
  ShieldCheck,
  BadgeCheck,
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
     <section>

      {/* Category Badge */}

      <span className="inline-flex items-center rounded-full bg-[#F4EEFF] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#7B3FF2]">
        {design.category}
      </span>

      {/* Title */}

      <h1 className="mt-4 text-[22px] font-bold leading-tight text-[#1E1E1E] lg:text-[34px]">
        {design.title}
      </h1>

      {/* Rating */}

      <div className="mt-4 flex flex-wrap items-center gap-2">

        <div className="flex items-center gap-1 text-[#F5B301]">
          {[1,2,3,4,5].map((item)=>(
            <Star
              key={item}
              size={16}
              fill="currentColor"
            />
          ))}
        </div>

        <span className="font-semibold text-[#222]">
          {design.rating}
        </span>

        <span className="text-sm text-gray-500">
          {design.reviews}
        </span>

        <button className="text-sm font-medium text-[#7B3FF2] hover:underline">
          See all reviews
        </button>

      </div>

      {/* Divider */}

      <div className="my-6 border-t border-[#ECECEC]" />

      {/* Price */}

      <div className="flex flex-wrap items-center gap-3">

        <span className="text-[38px] font-bold text-[#7B3FF2]">
          {design.price}
        </span>

        <span className="text-sm text-gray-500">
         / per file
        </span>

        <span className="text-lg font-semibold text-gray-400 line-through">
          {design.oldPrice}
        </span>

        <span className="rounded-full bg-[#EAF8ED] px-3 py-1 text-xs font-semibold text-[#1F9D57]">
          {design.discount}
        </span>

      </div>

      {/* Description */}

      <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#6B7280]">
        A beautifully detailed butterfly embroidery design,
        perfect for garments, hats, tote bags and accessories.
        Crisp stitching, vibrant color separations and optimized
        stitch paths for professional results on any machine.
      </p>
{/* What's Included */}

<div className="mt-8">

  <h3 className="text-lg font-semibold text-[#1E1E1E]">
    What's Included
  </h3>

  <div className="mt-4 space-y-3">

    {design.included.map((item, index) => (

      <div
        key={index}
        className="flex items-center gap-3"
      >

        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F4EEFF]">

          <Check
            size={14}
            className="text-[#7B3FF2]"
          />

        </div>

        <span className="text-[15px] text-[#555]">
          {item}
        </span>

      </div>

    ))}

  </div>

</div>
<div className="mt-8">

  <h3 className="text-lg font-semibold text-[#1E1E1E]">
    Supported Formats
  </h3>

  <div className="mt-4 flex flex-wrap gap-3">

    {design.formats.map((format) => (

      <span
        key={format}
        className="
        rounded-full
        border
        border-[#DDD]
        px-4
        py-2
        text-sm
        font-medium
        text-[#444]
        "
      >
        {format}
      </span>

    ))}

  </div>

</div>
<div className="mt-10 flex flex-col gap-4 lg:flex-row">

  {/* Quantity */}

  <div
    className="
    flex
    h-14
    w-[150px]
    items-center
    justify-between
    rounded-xl
    border
    border-[#E8E8EE]
    px-4
    "
  >

    <button onClick={decrease}>
      <Minus size={18} />
    </button>

    <span className="font-semibold">
      {quantity}
    </span>

    <button onClick={increase}>
      <Plus size={18} />
    </button>

  </div>

  {/* Add Cart */}

  <button
    className="
    flex-1
    rounded-xl
    bg-[#7B3FF2]
    px-6
    py-4
    font-semibold
    text-white
    transition
    hover:bg-[#6930E6]
    "
  >

    <ShoppingCart
      size={18}
      className="mr-2 inline"
    />

    Add To Cart

  </button>

</div>
<div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">

  <div className="flex items-center gap-3">

    <Download className="text-[#7B3FF2]" />

    <div>

      <p className="font-semibold">
        Instant Download
      </p>

      <span className="text-sm text-gray-500">
        Available after purchase
      </span>

    </div>

  </div>

  <div className="flex items-center gap-3">

    <ShieldCheck className="text-[#7B3FF2]" />

    <div>

      <p className="font-semibold">
        Secure Payment
      </p>

      <span className="text-sm text-gray-500">
        100% Safe Checkout
      </span>

    </div>

  </div>

  <div className="flex items-center gap-3">

    <BadgeCheck className="text-[#7B3FF2]" />

    <div>

      <p className="font-semibold">
        Premium Quality
      </p>

      <span className="text-sm text-gray-500">
        Optimized stitch files
      </span>

    </div>

  </div>

</div>
    </section>
  )
}

export default ProductInfo