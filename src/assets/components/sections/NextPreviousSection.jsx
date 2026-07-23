import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogData } from "../common/BlogData";

const NextPreviousSection = ({ currentBlog }) => {
  if (!currentBlog) return null;

  const currentIndex = BlogData.findIndex(
    (item) => item.id === currentBlog.id
  );

  const previousBlog =
    currentIndex > 0
      ? BlogData[currentIndex - 1]
      : null;

  const nextBlog =
    currentIndex < BlogData.length - 1
      ? BlogData[currentIndex + 1]
      : null;

  return (
    <section className="mt-16">

      <div className="grid gap-6 md:grid-cols-2">

        {/* Previous */}

        {previousBlog ? (
          <Link
            to={`/blogs/${previousBlog.id}`}
            className="
              group
              rounded-[24px]
              border
              border-[#ECECF3]
              bg-white
              p-6
              transition-all
              duration-300
              hover:border-[#7434E5]
              hover:shadow-lg
            "
          >
            <div className="flex items-center gap-3 text-[#7434E5]">

              <ArrowLeft size={18} />

              <span className="text-sm font-semibold uppercase tracking-wider">
                Previous Article
              </span>

            </div>

            <h3
              className="
                mt-6
                text-[24px]
                font-bold
                leading-8
                text-[#0F1729]
                transition-colors
                group-hover:text-[#7434E5]
              "
            >
              {previousBlog.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-[#6B7280]">
              {previousBlog.description}
            </p>

          </Link>
        ) : (
          <div />
        )}

        {/* Next */}

        {nextBlog ? (
          <Link
            to={`/blogs/${nextBlog.id}`}
            className="
              group
              rounded-[24px]
              border
              border-[#ECECF3]
              bg-white
              p-6
              text-right
              transition-all
              duration-300
              hover:border-[#7434E5]
              hover:shadow-lg
            "
          >
            <div className="flex items-center justify-end gap-3 text-[#7434E5]">

              <span className="text-sm font-semibold uppercase tracking-wider">
                Next Article
              </span>

              <ArrowRight size={18} />

            </div>

            <h3
              className="
                mt-6
                text-[24px]
                font-bold
                leading-8
                text-[#0F1729]
                transition-colors
                group-hover:text-[#7434E5]
              "
            >
              {nextBlog.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-[#6B7280]">
              {nextBlog.description}
            </p>

          </Link>
        ) : (
          <div />
        )}

      </div>

    </section>
  );
};

export default NextPreviousSection;