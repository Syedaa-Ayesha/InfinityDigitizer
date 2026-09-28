// import { ArrowRight, BookOpen } from "lucide-react";
// import { Link } from "react-router-dom";

// const PopularHelpArticles = ({ articles = [] }) => {
//   return (
//     <section
//       className="
//         w-full
//         overflow-hidden
//         rounded-[14px]
//         border
//         border-[#E7E3ED]
//         bg-white
//         shadow-[0_4px_18px_rgba(55,36,88,0.05)]
//       "
//     >
//       {/* ================= HEADER ================= */}
//       <div
//         className="
//           flex
//           items-center
//           justify-between
//           gap-4

//           border-b
//           border-[#ECE9F1]

//           px-[14px]
//           py-[12px]

//           sm:px-[16px]
//           sm:py-[13px]
//         "
//       >
//         {/* Left */}
//         <div className="flex min-w-0 items-center gap-[9px]">
//           <div
//             className="
//               flex
//               h-[32px]
//               w-[32px]
//               shrink-0
//               items-center
//               justify-center
//               rounded-[9px]
//               bg-[#F0E8FF]
//             "
//           >
//             <BookOpen
//               size={16}
//               strokeWidth={1.7}
//               className="text-[#7434E5]"
//             />
//           </div>

//           <h2
//             className="
//               truncate
//               font-dmSans
//               text-[14px]
//               font-bold
//               leading-[1.3]
//               text-[#17161F]

//               sm:text-[15px]
//             "
//           >
//             Popular Help Articles
//           </h2>
//         </div>

//         {/* View all */}
//         <Link
//           to="/faqs"
//           className="
//             flex
//             shrink-0
//             items-center
//             gap-[4px]

//             font-inter
//             text-[9px]
//             font-medium
//             text-[#7434E5]

//             transition-colors
//             duration-200

//             hover:text-[#5F25C9]

//             sm:text-[10px]
//           "
//         >
//           <span className="hidden sm:inline">
//             View All Articles
//           </span>

//           <ArrowRight
//             size={12}
//             strokeWidth={1.8}
//           />
//         </Link>
//       </div>

//       {/* ================= ARTICLES ================= */}
//       <div
//         className="
//           grid
//           grid-cols-1

//           md:grid-cols-2
//         "
//       >
//         {articles.map((article, index) => {
//           const isRightColumn = index % 2 === 1;
//           const isLastRow =
//             index >= articles.length - 2;

//           return (
//             <Link
//               key={article.id}
//               to={article.link || "#"}
//               className={`
//                 group
//                 flex
//                 min-h-[44px]
//                 items-center
//                 justify-between
//                 gap-4

//                 px-[14px]
//                 py-[10px]

//                 font-inter
//                 text-[9.5px]
//                 font-medium
//                 leading-[1.4]
//                 text-[#3F3B48]

//                 transition-colors
//                 duration-200

//                 hover:bg-[#FAF7FF]
//                 hover:text-[#7434E5]

//                 ${
//                   !isLastRow
//                     ? "border-b border-[#EEEAF3]"
//                     : ""
//                 }

//                 ${
//                   isRightColumn
//                     ? "md:border-l md:border-[#EEEAF3]"
//                     : ""
//                 }
//               `}
//             >
//               <span className="min-w-0">
//                 {article.title}
//               </span>

//               <ArrowRight
//                 size={11}
//                 strokeWidth={1.7}
//                 className="
//                   shrink-0
//                   text-[#A9A4B2]

//                   transition-all
//                   duration-200

//                   group-hover:translate-x-[2px]
//                   group-hover:text-[#7434E5]
//                 "
//               />
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default PopularHelpArticles;




import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const PopularHelpArticles = ({ articles = [] }) => {
  if (!Array.isArray(articles) || articles.length === 0) {
    return null;
  }

  return (
    <section
      className="
        w-full
        max-w-full
        min-w-0
        overflow-hidden

        rounded-[14px]
        border
        border-[#E7E3ED]
        bg-white

        shadow-[0_4px_18px_rgba(55,36,88,0.05)]

        sm:rounded-[16px]
      "
    >
      {/* ================= HEADER ================= */}
      <div
        className="
          flex
          min-w-0
          items-center
          justify-between
          gap-[12px]

          border-b
          border-[#ECE9F1]

          px-[16px]
          py-[14px]

          sm:px-[18px]
          sm:py-[15px]

          lg:px-[20px]
          lg:py-[16px]
        "
      >
        {/* LEFT */}
        <div
          className="
            flex
            min-w-0
            items-center
            gap-[9px]
          "
        >
          <div
            className="
              flex
              h-[36px]
              w-[36px]
              shrink-0
              items-center
              justify-center

              rounded-[10px]
              bg-[#F0E8FF]

              sm:h-[38px]
              sm:w-[38px]
            "
          >
            <BookOpen
              size={18}
              strokeWidth={1.7}
              className="
                text-[#7434E5]

                sm:h-[19px]
                sm:w-[19px]
              "
            />
          </div>

          <h2
            className="
              min-w-0
              max-w-full
              truncate

              font-dmSans
              text-[16px]
              font-bold
              leading-[1.3]
              text-[#17161F]

              sm:text-[17px]

              lg:text-[18px]
            "
          >
            Popular Help Articles
          </h2>
        </div>

        {/* VIEW ALL */}
        <Link
          to="/faqs"
          className="
            inline-flex
            shrink-0
            items-center
            gap-[5px]
            whitespace-nowrap

            font-inter
            text-[11px]
            font-medium
            leading-none
            text-[#7434E5]

            transition-colors
            duration-200

            hover:text-[#5F25C9]

            sm:text-[12px]

            lg:text-[13px]
          "
        >
          <span className="hidden sm:inline">
            View All Articles
          </span>

          <ArrowRight
            size={14}
            strokeWidth={1.8}
          />
        </Link>
      </div>

      {/* ================= ARTICLES ================= */}
      <div
        className="
          grid
          w-full
          min-w-0
          grid-cols-1

          md:grid-cols-2
        "
      >
        {articles.map((article, index) => {
          const isRightColumn = index % 2 === 1;
          const isLastRow =
            index >= articles.length - 2;

          return (
            <Link
              key={article.id ?? index}
              to={article.link || "#"}
              className={`
                group
                flex
                min-w-0
                min-h-[58px]
                items-center
                justify-between
                gap-[14px]

                px-[16px]
                py-[12px]

                font-inter
                text-[13px]
                font-medium
                leading-[1.5]
                text-[#4A4653]

                transition-colors
                duration-200

                hover:bg-[#FAF7FF]
                hover:text-[#7434E5]

                sm:min-h-[60px]
                sm:px-[18px]
                sm:py-[13px]
                sm:text-[14px]
                sm:leading-[1.55]

                lg:min-h-[62px]
                lg:px-[20px]
                lg:py-[14px]
                lg:text-[14px]
                lg:leading-[1.6]

                ${
                  !isLastRow
                    ? "border-b border-[#EEEAF3]"
                    : ""
                }

                ${
                  isRightColumn
                    ? "md:border-l md:border-[#EEEAF3]"
                    : ""
                }
              `}
            >
              {/* TITLE */}
              <span
                className="
                  min-w-0
                  max-w-full
                  break-words
                "
              >
                {article.title}
              </span>

              {/* ARROW */}
              <ArrowRight
                size={14}
                strokeWidth={1.7}
                className="
                  shrink-0
                  text-[#A9A4B2]

                  transition-all
                  duration-200

                  group-hover:translate-x-[2px]
                  group-hover:text-[#7434E5]

                  sm:h-[15px]
                  sm:w-[15px]
                "
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PopularHelpArticles;