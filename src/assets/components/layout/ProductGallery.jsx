
import { useState } from "react";
const ProductGallery = ({ design }) => {
    const [activeIndex, setActiveIndex] = useState(0);
//     const [activeImage, setActiveImage] = useState(
//     design.images[0]
//   );
  return (
     <section>

      {/* Main Image */}

      <div
        className="
       group
overflow-hidden
rounded-[24px]
border
border-[#ECECEC]
bg-[#FFF7F5]
        "
      >
        <img
  src={design.images[activeIndex]}
  alt={design.title}
  className="
    h-[280px]
    sm:h-[360px]
    md:h-[450px]
    lg:h-[520px]
    xl:h-[620px]
    w-full
    object-contain
    transition-transform
    duration-500
    group-hover:scale-105
  "
/>
      </div>

      {/* Thumbnails */}

      <div className="mt-5 flex gap-3 overflow-x-auto pb-2">

        {design.images.map((image, index) => (
  <button
    key={index}
    onClick={() => setActiveIndex(index)}
    className={`
      flex-shrink-0
      h-20
      w-20
      sm:h-24
      sm:w-24
      overflow-hidden
      rounded-2xl
      border-2
      transition-all
      duration-300
      hover:scale-105
      ${
        activeIndex === index
          ? "border-[#7B3FF2]"
          : "border-[#ECECEC]"
      }
    `}
  >
    <img
      src={image}
      alt={design.title}
      className="
        h-full
        w-full
        object-cover
      "
    />
  </button>
))}

      </div>

    </section>
  )
}

export default ProductGallery