// import { Play } from "lucide-react";

// const PortfolioCard = ({ item }) => {
//   return (
//     <div className="relative h-85 w-[225px] overflow-hidden rounded-[18px] lg:w-[265px]">
      
//       {/* Portfolio Image */}
//       <img
//         src={item.image}
//         alt="portfolio"
//         className="h-full w-full border object-contain"
//       />

//       {/* Play Button */}
//       <button
//         type="button"
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           flex
//           h-16
//           w-16
//           -translate-x-1/2
//           -translate-y-1/2
//           items-center
//           justify-center
//           rounded-full
//           bg-white
//           shadow-xl
//         "
//       >
//         <Play
//           size={28}
//           fill="black"
//         />
//       </button>

//     </div>
//   );
// };

// export default PortfolioCard;

import { Play } from "lucide-react";

const PortfolioCard = ({ item }) => {
  return (
    <div
      className="
        relative
        h-[340px]
        w-full
        overflow-hidden
        rounded-[18px]
      "
    >
      {/* ================= PORTFOLIO IMAGE ================= */}

      <img
        src={item.image}
        alt="portfolio"
        className="
          h-full
          w-full
          object-cover
        "
      />

      {/* ================= PLAY BUTTON ================= */}

      <button
        type="button"
        aria-label="Play portfolio video"
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-16
          w-16
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          transition-transform
          duration-200
          hover:scale-105
          active:scale-95
        "
      >
        <Play
          size={27}
          fill="black"
          strokeWidth={1.5}
        />
      </button>
    </div>
  );
};

export default PortfolioCard;