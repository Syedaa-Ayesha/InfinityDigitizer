import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <section className="mt-16 flex justify-center">
      <nav
        aria-label="Blog pagination"
        className="flex items-center gap-2"
      >
        {/* ================= PREVIOUS ================= */}

        <button
          type="button"
          aria-label="Previous page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
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
            disabled:cursor-not-allowed
            disabled:opacity-40
            disabled:hover:border-[#E5E7EB]
            disabled:hover:text-[#6B7280]
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* ================= PAGE NUMBERS ================= */}

        {Array.from(
          { length: totalPages },
          (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                aria-label={`Go to page ${page}`}
                aria-current={
                  currentPage === page
                    ? "page"
                    : undefined
                }
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
                  duration-300
                  ${
                    currentPage === page
                      ? "bg-[#7B3FF2] text-white"
                      : "border border-[#E5E7EB] bg-white text-[#6B7280] hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                  }
                `}
              >
                {page}
              </button>
            );
          }
        )}

        {/* ================= NEXT ================= */}

        <button
          type="button"
          aria-label="Next page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
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
            disabled:cursor-not-allowed
            disabled:opacity-40
            disabled:hover:border-[#E5E7EB]
            disabled:hover:text-[#6B7280]
          "
        >
          <ChevronRight size={18} />
        </button>
      </nav>
    </section>
  );
};

export default BlogPagination;