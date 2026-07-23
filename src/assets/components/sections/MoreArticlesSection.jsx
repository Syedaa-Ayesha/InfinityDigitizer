import { useState } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import { BlogData } from "../common/BlogData";
import BlogCard from "../layout/BlogCard";

const MoreArticlesSection = ({ currentBlog }) => {
    const [showAll, setShowAll] = useState(false);

  // Remove current blog
  const allBlogs = BlogData.filter(
    (blog) => blog.id !== currentBlog.id
  );

  // Show 3 initially
  const displayedBlogs = showAll
    ? allBlogs
    : allBlogs.slice(0, 3);
  return (
     <section className="mt-24">

      {/* Heading */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <h2
          className="
            font-dmSans
            text-[32px]
            font-bold
            text-[#0F1729]

            md:text-[40px]
          "
        >
          More Articles You'll Love
        </h2>

        {
          allBlogs.length > 3 && (

            <button

              onClick={() => setShowAll(!showAll)}

              className="
                inline-flex
                items-center
                gap-2
                self-start
                rounded-full
                border
                border-[#D9CBFF]
                bg-white
                px-5
                py-2.5
                font-semibold
                text-[#7434E5]
                transition-all
                duration-300

                hover:bg-[#7434E5]
                hover:text-white
              "
            >

              {showAll ? "Show Less" : "View All Posts"}

              {
                showAll
                  ? <ArrowUp size={18}/>
                  : <ArrowRight size={18}/>
              }

            </button>

          )
        }

      </div>

      {/* Cards */}

      <div
        className="
          mt-10
          grid
          gap-8

          sm:grid-cols-2

          xl:grid-cols-3
        "
      >

        {

          displayedBlogs.map((blog)=>(

            <BlogCard
              key={blog.id}
              blog={blog}
            />

          ))

        }

      </div>

    </section>
  )
}

export default MoreArticlesSection