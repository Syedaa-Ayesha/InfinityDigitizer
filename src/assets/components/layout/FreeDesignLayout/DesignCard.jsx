// import { Download, Heart } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const DesignCard = ({ design }) => {
//   const navigate = useNavigate();

//   /* ================= FAVORITE STATE ================= */

//   const [isFavorite, setIsFavorite] = useState(
//     design.favorite || false
//   );

//   /* ================= FAVORITE ================= */

//   const handleFavorite = (e) => {
//     e.stopPropagation();

//     setIsFavorite((prev) => !prev);
//   };

//   /* ================= DOWNLOAD ================= */

//   const handleDownload = (e) => {
//     e.stopPropagation();

//     const link = document.createElement("a");

//     link.href = design.image;
//     link.download = `${design.title}.png`;

//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   /* ================= PRODUCT DETAIL ================= */

//   const handleCardClick = () => {
//     navigate(`/design/${design.id}`);
//   };

//   return (
//     <article
//       onClick={handleCardClick}
//       className="
//         group
//         cursor-pointer
//         bg-white
//         rounded-[24px]
//         border
//         border-[#E9E9EE]
//         overflow-hidden
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:shadow-xl
//       "
//     >
//       {/* ================= IMAGE ================= */}

//       <div className="relative h-[220px] overflow-hidden bg-[#FFF9F6]">

//         {/* ================= FAVORITE BUTTON ================= */}

//         <button
//           type="button"
//           onClick={handleFavorite}
//           aria-label={
//             isFavorite
//               ? "Remove from favorites"
//               : "Add to favorites"
//           }
//           className="
//             absolute
//             top-4
//             right-4
//             z-10
//             flex
//             h-10
//             w-10
//             items-center
//             justify-center
//             rounded-full
//             bg-white
//             shadow-md
//             transition-all
//             duration-300
//             hover:scale-110
//           "
//         >
//           <Heart
//             size={18}
//             className={
//               isFavorite
//                 ? "fill-[#6F3DFF] text-[#6F3DFF]"
//                 : "text-[#B9B9C3]"
//             }
//           />
//         </button>

//         {/* ================= DESIGN IMAGE ================= */}

//         <img
//           src={design.image}
//           alt={design.title}
//           className="
//             h-full
//             w-full
//             object-cover
//             transition-transform
//             duration-500
//             group-hover:scale-105
//           "
//         />
//       </div>

//       {/* ================= CONTENT ================= */}

//       <div className="p-5">

//         {/* ================= TITLE ================= */}

//         <h3
//           className="
//             text-[17px]
//             font-semibold
//             text-[#1E1E1E]
//             truncate
//           "
//         >
//           {design.title}
//         </h3>

//         {/* ================= DOWNLOAD BUTTON ================= */}

//         <button
//           type="button"
//           onClick={handleDownload}
//           className="
//             mt-5
//             flex
//             h-11
//             w-full
//             items-center
//             justify-center
//             gap-2
//             rounded-full
//             border
//             border-[#6F3DFF]
//             text-sm
//             font-medium
//             text-[#6F3DFF]
//             transition-all
//             duration-300
//             hover:bg-[#6F3DFF]
//             hover:text-white
//           "
//         >
//           <Download size={18} />

//           Free Download
//         </button>
//       </div>
//     </article>
//   );
// };

// export default DesignCard;


import { Download, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DesignCard = ({ design }) => {
  const navigate = useNavigate();
  /* ================= FAVORITE STATE ================= */

  const [isFavorite, setIsFavorite] = useState(
    design.favorite || false
  );
  /* ================= SAFETY ================= */

  if (!design) {
    return null;
  }



  /* ================= FAVORITE ================= */

  const handleFavorite = (e) => {
    e.stopPropagation();

    setIsFavorite((prev) => !prev);
  };

  /* ================= DOWNLOAD ================= */

  const handleDownload = (e) => {
    e.stopPropagation();

    if (!design.image) {
      return;
    }

    const link = document.createElement("a");

    link.href = design.image;
    link.download = `${design.title || "design"}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ================= PRODUCT DETAIL ================= */

  const handleCardClick = () => {
    if (!design.id) {
      return;
    }

    navigate(`/design/${design.id}`);
  };

  return (
    <article
      onClick={handleCardClick}
      className="
        group
        cursor-pointer
        bg-white
        rounded-[24px]
        border
        border-[#E9E9EE]
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >

      {/* ================= IMAGE ================= */}

      <div className="relative h-[220px] overflow-hidden bg-[#FFF9F6]">

        {/* ================= FAVORITE BUTTON ================= */}

        <button
          type="button"
          onClick={handleFavorite}
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
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
            transition-all
            duration-300
            hover:scale-110
          "
        >
          <Heart
            size={18}
            className={
              isFavorite
                ? "fill-[#6F3DFF] text-[#6F3DFF]"
                : "text-[#B9B9C3]"
            }
          />
        </button>

        {/* ================= DESIGN IMAGE ================= */}

        {design.image && (
          <img
  src={design?.image}
  alt={design?.title || "Free Design"}
  className="
    h-full
    w-full
    object-cover
    transition-transform
    duration-500
    group-hover:scale-105
  "
/>
        )}

      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-5">

        {/* ================= TITLE ================= */}

        <h3
          className="
            text-[17px]
            font-semibold
            text-[#1E1E1E]
            truncate
          "
        >
          {design.title || "Untitled Design"}
        </h3>

        {/* ================= DOWNLOAD BUTTON ================= */}

        <button
          type="button"
          onClick={handleDownload}
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
  );
};

export default DesignCard;