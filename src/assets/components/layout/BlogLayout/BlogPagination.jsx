
import { ChevronLeft, ChevronRight } from "lucide-react";
const BlogPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
   <section className="mt-16 flex justify-center">

      <nav
        className="
          flex
          items-center
          gap-2
        "
      >

        {/* Previous */}

        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#E5E7EB]
            bg-white
            text-[#6B7280]
            transition-all
            duration-300
            hover:border-[#7B3FF2]
            hover:text-[#7B3FF2]
          "
           disabled={currentPage === 1}
  onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Pages */}

        {Array.from({ length: totalPages }, (_, index) => {

  const page = index + 1;

  return (

    <button
      key={page}
      onClick={() => onPageChange(page)}
      className={`

        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        text-sm
        font-semibold
        transition-all

        ${
          currentPage === page
            ? "bg-[#7B3FF2] text-white"
            : "border border-[#E5E7EB] bg-white text-[#6B7280]"
        }

      `}
    >
      {page}
    </button>

  );

})}

        {/* Next */}

        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#E5E7EB]
            bg-white
            text-[#6B7280]
            transition-all
            duration-300
            hover:border-[#7B3FF2]
            hover:text-[#7B3FF2]
          "
        >
          <ChevronRight size={18} />
        </button>

      </nav>

    </section>
  )
}

export default BlogPagination