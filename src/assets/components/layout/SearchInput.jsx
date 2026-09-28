// import { Search } from "lucide-react";
// const defaultPopularSearches = [
//   "Order Status",
//   "File Formats",
//   "Revisions",
//   "Payment",
//   "Artwork Requirements",
// ];

// const SearchInput = ({
//   searchTerm = "",
//   setSearchTerm,
//   onSearch,
//   popularSearches = defaultPopularSearches,
//   placeholder = "Search for help (e.g. order, file format, payment...)",
// }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const value = searchTerm.trim();

//     if (!value) return;

//     onSearch?.(value);
//   };

//   const handlePopularSearch = (term) => {
//     setSearchTerm(term);
//     onSearch?.(term);
//   };

//   return (
//     <div className="mx-auto w-full max-w-[690px]">
//       {/* ================= SEARCH BAR ================= */}
//       <form
//         onSubmit={handleSubmit}
//         className="
//           mx-auto
//           flex
//           w-full
//           max-w-[475px]
//           items-center

//           rounded-full
//           border
//           border-[#E5E1EC]
//           bg-white

//           p-[3px]
//           shadow-[0_5px_20px_rgba(73,49,112,0.10)]

//           transition-all
//           duration-200

//           focus-within:border-[#CBB8F4]
//           focus-within:shadow-[0_7px_24px_rgba(116,52,229,0.14)]

//           sm:max-w-[510px]
//           sm:p-[4px]

//           md:max-w-[540px]
//         "
//       >
//         {/* Search Icon */}
//         <div
//           className="
//             flex
//             h-[36px]
//             w-[36px]
//             shrink-0
//             items-center
//             justify-center

//             sm:h-[38px]
//             sm:w-[38px]
//           "
//         >
//           <Search
//             size={15}
//             strokeWidth={1.7}
//             className="text-[#A0A0AE] sm:h-[16px] sm:w-[16px]"
//           />
//         </div>

//         {/* Input */}
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder={placeholder}
//           aria-label="Search help"
//           className="
//             min-w-0
//             flex-1

//             border-none
//             bg-transparent

//             px-[2px]
//             py-[8px]

//             font-inter
//             text-[11px]
//             font-normal
//             text-[#25222D]

//             outline-none

//             placeholder:text-[#9C99A7]
//             placeholder:opacity-100

//             sm:text-[12px]
//           "
//         />

//         {/* Search Button */}
//         <button
//           type="submit"
//           disabled={!searchTerm.trim()}
//           className="
//             flex
//             h-[36px]
//             shrink-0
//             items-center
//             justify-center

//             rounded-full
//             bg-[#7434E5]

//             px-[18px]

//             font-inter
//             text-[10px]
//             font-semibold
//             text-white

//             shadow-[0_3px_10px_rgba(116,52,229,0.18)]

//             transition-all
//             duration-200

//             hover:bg-[#6428D0]
//             active:scale-[0.98]

//             disabled:cursor-not-allowed
//             disabled:opacity-50
//             disabled:hover:bg-[#7434E5]

//             sm:h-[38px]
//             sm:px-[22px]
//             sm:text-[11px]
//           "
//         >
//           Search
//         </button>
//       </form>

//       {/* ================= POPULAR SEARCHES ================= */}
//       <div
//         className="
//           mx-auto
//           mt-[12px]

//           flex
//           w-full
//           max-w-[690px]

//           flex-wrap
//           items-center
//           justify-center
//           gap-[6px]
//           px-2

//           sm:mt-[13px]
//           sm:gap-[7px]
//         "
//       >
//         {/* Label */}
//         <span
//           className="
//             mr-[2px]
//             shrink-0

//             font-inter
//             text-[9px]
//             font-semibold
//             text-[#55515F]

//             sm:text-[10px]
//           "
//         >
//           Popular searches:
//         </span>

//         {/* Chips */}
//         {popularSearches.map((item) => (
//           <button
//             key={item}
//             type="button"
//             onClick={() => handlePopularSearch(item)}
//             className="
//               inline-flex
//               min-h-[22px]
//               items-center
//               justify-center

//               rounded-full
//               border
//               border-[#E5E1EC]
//               bg-white

//               px-[9px]
//               py-[3px]

//               font-inter
//               text-[8px]
//               font-medium
//               leading-none
//               text-[#5F5B68]

//               transition-all
//               duration-200

//               hover:border-[#CDB9F3]
//               hover:bg-[#F8F4FF]
//               hover:text-[#7434E5]

//               sm:min-h-[23px]
//               sm:px-[10px]
//               sm:text-[8.5px]
//             "
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchInput;



import { Search } from "lucide-react";

const defaultPopularSearches = [
  "Order Status",
  "File Formats",
  "Revisions",
  "Payment",
  "Artwork Requirements",
];

const SearchInput = ({
  searchTerm = "",
  setSearchTerm,
  onSearch,
  popularSearches = defaultPopularSearches,
  placeholder = "Search for help (e.g. order, file format, payment...)",
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = searchTerm.trim();

    if (!value) return;

    onSearch?.(value);
  };

  const handlePopularSearch = (term) => {
    setSearchTerm(term);
    onSearch?.(term);
  };

  return (
    <div
      className="
        mx-auto
        w-full
        max-w-[700px]
        min-w-0
      "
    >
      {/* ================= SEARCH BAR ================= */}
      <form
        onSubmit={handleSubmit}
        className="
          mx-auto
          flex
          w-full
          max-w-[500px]
          min-w-0
          items-center

          rounded-full
          border
          border-[#E5E1EC]
          bg-white

          p-[4px]

          shadow-[0_5px_20px_rgba(73,49,112,0.10)]

          transition-all
          duration-200

          focus-within:border-[#CBB8F4]
          focus-within:shadow-[0_7px_24px_rgba(116,52,229,0.14)]

          sm:max-w-[540px]
          sm:p-[4px]

          md:max-w-[570px]

          lg:max-w-[590px]
        "
      >
        {/* SEARCH ICON */}
        <div
          className="
            flex
            h-[38px]
            w-[38px]
            shrink-0
            items-center
            justify-center

            sm:h-[40px]
            sm:w-[40px]

            lg:h-[42px]
            lg:w-[42px]
          "
        >
          <Search
            size={17}
            strokeWidth={1.7}
            className="
              text-[#9895A4]

              sm:h-[18px]
              sm:w-[18px]

              lg:h-[19px]
              lg:w-[19px]
            "
          />
        </div>

        {/* INPUT */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          aria-label="Search help"
          className="
            min-w-0
            flex-1

            border-none
            bg-transparent

            px-[3px]
            py-[9px]

            font-inter
            text-[14px]
            font-normal
            leading-[1.4]
            text-[#25222D]

            outline-none

            placeholder:text-[#9C99A7]
            placeholder:opacity-100

            sm:text-[15px]

            lg:text-[16px]
          "
        />

        {/* SEARCH BUTTON */}
        <button
          type="submit"
          disabled={!searchTerm.trim()}
          className="
            flex
            h-[38px]
            shrink-0
            items-center
            justify-center

            rounded-full
            bg-[#7434E5]

            px-[16px]

            font-inter
            text-[12px]
            font-semibold
            leading-none
            text-white

            shadow-[0_3px_10px_rgba(116,52,229,0.18)]

            transition-all
            duration-200

            hover:bg-[#6428D0]
            active:scale-[0.98]

            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:bg-[#7434E5]

            sm:h-[40px]
            sm:px-[20px]
            sm:text-[13px]

            lg:h-[42px]
            lg:px-[22px]
            lg:text-[14px]
          "
        >
          Search
        </button>
      </form>

      {/* ================= POPULAR SEARCHES ================= */}
      <div
        className="
          mx-auto
          mt-[13px]
          flex
          w-full
          max-w-[700px]
          min-w-0

          flex-wrap
          items-center
          justify-center

          gap-[6px]
          px-[4px]

          sm:mt-[15px]
          sm:gap-[7px]
          sm:px-0

          lg:mt-[16px]
          lg:gap-[8px]
        "
      >
        {/* LABEL */}
        <span
          className="
            mr-[2px]
            shrink-0
            font-inter
            text-[11px]
            font-semibold
            leading-none
            text-[#55515F]

            sm:text-[12px]

            lg:text-[13px]
          "
        >
          Popular searches:
        </span>

        {/* CHIPS */}
        {popularSearches.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => handlePopularSearch(item)}
            className="
              inline-flex
              min-h-[26px]
              max-w-full
              items-center
              justify-center

              rounded-full
              border
              border-[#E5E1EC]
              bg-white

              px-[10px]
              py-[5px]

              font-inter
              text-[10px]
              font-medium
              leading-none
              text-[#5F5B68]

              transition-all
              duration-200

              hover:border-[#CDB9F3]
              hover:bg-[#F8F4FF]
              hover:text-[#7434E5]

              sm:min-h-[28px]
              sm:px-[11px]
              sm:text-[11px]

              lg:min-h-[30px]
              lg:px-[12px]
              lg:text-[12px]
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;