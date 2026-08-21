// import { useState } from "react";
// import { Star, Info, ArrowRight } from "lucide-react";

// const ReviewForm = () => {
//   /* ================= REVIEW STATE ================= */

//   const [rating, setRating] = useState(0);
//   const [reviewContent, setReviewContent] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   /* ================= RATING ================= */

//   const handleRating = (value) => {
//     setRating(value);
//     setSubmitted(false);
//   };

//   /* ================= SUBMIT ================= */

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!rating || !reviewContent.trim()) {
//       return;
//     }

//     setSubmitted(true);
//   };

//   /* ================= BUTTON STATE ================= */

//   const canSubmit =
//     rating > 0 && reviewContent.trim().length > 0;

//   return (
//     <div
//       className="
//       max-w-[1330px]
//       mx-auto
//       mt-5
//         rounded-[14px]
//         border
//         border-[#E8E5ED]
//         bg-white
//         px-5
//         py-5
//         shadow-[0px_4px_14px_rgba(0,0,0,0.08)]
//         sm:px-6
//         sm:py-6
//       "
//     >

//       {/* ================= TITLE ================= */}

//       <h2
//         className="
//           font-dmSans
//           text-[17px]
//           font-bold
//           leading-[22px]
//           text-[#0C0C30]
//         "
//       >
//         Reviews
//       </h2>


//       {/* ================= STATUS ================= */}

//       <div
//         className="
//           mt-3
//           flex
//           min-h-[45px]
//           items-center
//           gap-3
//           rounded-[6px]
//           bg-linear-to-r
//           from-[#6F20D8]
//           to-[#5D17C9]
//           px-4
//           py-2.5
//           text-white
//         "
//       >

//         {/* Info Icon */}

//         <span
//           className="
//             flex
//             h-6
//             w-6
//             shrink-0
//             items-center
//             justify-center
//             rounded-full
//             border
//             border-white/30
//             bg-white/10
//           "
//         >
//           {submitted ? (
//             <span className="text-[12px] font-bold">
//               ✓
//             </span>
//           ) : (
//             <Info
//               size={14}
//               strokeWidth={1.7}
//             />
//           )}
//         </span>

//         {/* Message */}

//         <span
//           className="
//             font-inter
//             text-[11px]
//             font-medium
//             leading-[16px]
//           "
//         >
//           {submitted
//             ? "Thank you for your review!"
//             : "There are no reviews yet."}
//         </span>

//       </div>


//       {/* ================= WRITE REVIEW ================= */}

//       <form onSubmit={handleSubmit}>

//         <h3
//           className="
//             mt-3
//             font-dmSans
//             text-[13px]
//             font-bold
//             leading-[18px]
//             text-[#0C0C30]
//           "
//         >
//           Write a Review
//         </h3>


//         {/* ================= STAR RATING ================= */}

//         <div
//           className="
//             mt-2
//             flex
//             items-center
//             gap-[3px]
//           "
//           role="radiogroup"
//           aria-label="Rating"
//         >
//           {[1, 2, 3, 4, 5].map((item) => (
//             <button
//               key={item}
//               type="button"
//               onClick={() => handleRating(item)}
//               aria-label={`${item} star rating`}
//               className="
//                 flex
//                 h-6
//                 w-6
//                 items-center
//                 justify-center
//                 transition-all
//                 duration-200
//                 hover:scale-110
//               "
//             >
//               <Star
//                 size={20}
//                 strokeWidth={1.4}
//                 className={
//                   item <= rating
//                     ? "fill-[#7434E5] text-[#7434E5]"
//                     : "text-[#AEB3C0]"
//                 }
//               />
//             </button>
//           ))}
//         </div>


//         {/* ================= REVIEW CONTENT LABEL ================= */}

//         <label
//           htmlFor="review-content"
//           className="
//             mt-3
//             block
//             font-inter
//             text-[9px]
//             font-semibold
//             text-[#0C0C30]
//           "
//         >
//           Review Content
//         </label>


//         {/* ================= TEXTAREA ================= */}

//         <textarea
//           id="review-content"
//           value={reviewContent}
//           onChange={(e) => {
//             setReviewContent(e.target.value);
//             setSubmitted(false);
//           }}
//           placeholder="Share your experience with this design..."
//           className="
//             mt-1
//             h-[88px]
//             w-full
//             resize-none
//             rounded-[8px]
//             border
//             border-[#E6E3EB]
//             bg-white
//             px-3
//             py-2.5
//             font-inter
//             text-[10px]
//             leading-[16px]
//             text-[#333333]
//             outline-none
//             placeholder:text-[#B7BAC4]
//             focus:border-[#7434E5]
//             focus:ring-1
//             focus:ring-[#7434E5]/20
//           "
//         />


//         {/* ================= SUBMIT BUTTON ================= */}

//         <button
//           type="submit"
//           disabled={!canSubmit}
//           className={`
//             mt-4
//             flex
//             h-[31px]
//             items-center
//             justify-center
//             gap-1
//             rounded-full
//             px-5
//             font-inter
//             text-[10px]
//             font-semibold
//             transition-all
//             duration-300
//             ${
//               canSubmit
//                 ? "bg-[#7434E5] text-white hover:bg-[#6327CC] hover:shadow-md"
//                 : "cursor-not-allowed bg-[#C5C8D0] text-white"
//             }
//           `}
//         >
//           Submit Review

//           <ArrowRight
//             size={13}
//             strokeWidth={1.8}
//           />
//         </button>

//       </form>

//     </div>
//   );
// };

// export default ReviewForm;


import { useState } from "react";
import { Star, Info, ArrowRight } from "lucide-react";

const ReviewForm = () => {
  /* ================= REVIEW STATE ================= */

  const [rating, setRating] = useState(0);
  const [reviewContent, setReviewContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* ================= RATING ================= */

  const handleRating = (value) => {
    // Same selected star dobara click = rating remove
    if (rating === value) {
      setRating(0);
      setSubmitted(false);
      return;
    }

    setRating(value);
    setSubmitted(false);
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !reviewContent.trim()) {
      return;
    }

    setSubmitted(true);
  };

  /* ================= BUTTON STATE ================= */

  const canSubmit =
    rating > 0 && reviewContent.trim().length > 0;

  return (
    <div
      className="
        max-w-[1330px]
        mx-auto
        mt-5
        rounded-[14px]
        border
        border-[#E8E5ED]
        bg-white
        px-5
        py-5
        shadow-[0px_4px_14px_rgba(0,0,0,0.08)]
        sm:px-6
        sm:py-6
      "
    >

      {/* ================= TITLE ================= */}

      <h2
        className="
          font-dmSans
          text-[26px]
          font-extrabold
          leading-[22px]
          text-[#0C0C30]
        "
      >
        Reviews
      </h2>


      {/* ================= STATUS ================= */}

      <div
        className={`
          mt-3
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
          ${
            rating > 0
              ? "max-h-0 opacity-0 mt-0 py-0"
              : "max-h-[80px] opacity-100"
          }
        `}
      >
        <div
          className="
            flex
            min-h-[45px]
            items-center
            gap-3
            rounded-[6px]
            bg-linear-to-r
            from-[#6F20D8]
            to-[#5D17C9]
            px-4
            py-2.5
            text-white
          "
        >

          {/* Info Icon */}

          <span
            className="
              flex
              h-6
              w-6
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-white/10
            "
          >
            {submitted ? (
              <span className="text-[12px] font-bold">
                ✓
              </span>
            ) : (
              <Info
                size={14}
                strokeWidth={1.7}
              />
            )}
          </span>

          {/* Message */}

          <span
            className="
              font-inter
              text-sm
              font-medium
              leading-[16px]
            "
          >
            {submitted
              ? "Thank you for your review!"
              : "There are no reviews yet."}
          </span>

        </div>
      </div>


      {/* ================= WRITE REVIEW ================= */}

      <form onSubmit={handleSubmit}>

        <h3
          className="
            mt-3
            font-dmSans
            text-[20px]
            font-bold
            leading-[18px]
            text-[#0C0C30]
          "
        >
          Write a Review
        </h3>


        {/* ================= STAR RATING ================= */}

        <div
          className="
            mt-2
            flex
            items-center
            gap-[3px]
          "
          role="radiogroup"
          aria-label="Rating"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleRating(item)}
              aria-label={`${item} star rating`}
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                transition-all
                duration-200
                hover:scale-110
              "
            >
              <Star
                size={30}
                strokeWidth={1.4}
                className={
                  item <= rating
                    ? "fill-[#F4B625] text-[#F4B625]"
                    : "text-[#AEB3C0]"
                }
              />
            </button>
          ))}
        </div>


        {/* ================= REVIEW CONTENT LABEL ================= */}

        <label
          htmlFor="review-content"
          className="
            mt-3
            block
            font-dmSans
            text-base
            font-bold
            text-[#0C0C30]
          "
        >
          Review Content
        </label>


        {/* ================= TEXTAREA ================= */}

        <textarea
          id="review-content"
          value={reviewContent}
          onChange={(e) => {
            setReviewContent(e.target.value);
            setSubmitted(false);
          }}
          placeholder="Share your experience with this design..."
          className="
            mt-1
            h-[88px]
            w-full
            resize-none
            rounded-[8px]
            border
            border-[#E6E3EB]
            bg-white
            px-3
            py-2.5
            font-inter
            text-sm
            leading-[16px]
            text-[#333333]
            outline-none
            placeholder:text-[#B7BAC4]
            focus:border-[#7434E5]
            focus:ring-1
            focus:ring-[#7434E5]/20
          "
        />


        {/* ================= SUBMIT BUTTON ================= */}

        <button
          type="submit"
          disabled={!canSubmit}
          className={`
            mt-4
            flex
            h-[44px]
            items-center
            justify-center
            gap-1
            rounded-full
            px-7
            
            font-inter
            text-base
            font-semibold
            transition-all
            duration-300
          bg-[#7434E5]
          text-white
          `}
        >
          Submit Review

          <ArrowRight
            size={16}
            strokeWidth={1.8}
          />
        </button>

      </form>

    </div>
  );
};

export default ReviewForm;