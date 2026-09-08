import { CalendarDays, Clock3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const BlogCard = ({blog}) => {
  return (
     <Link
    to={`/blogs/${blog.id}`}
    className="block"
  >
    <article
      className="
      
        group
        overflow-hidden
        rounded-[28px]
        border
        border-[#ECECF3]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        
      "
    >
      {/* Image */}

      <div className="overflow-hidden">

        <img
          src={blog.image}
          alt={blog.title}
          className="
            h-[240px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Category */}

        <span
          className="
            inline-flex
            rounded-full
            bg-[#F4EEFF]
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-[#7B3FF2]
          "
        >
          {blog.category}
        </span>

        {/* Title */}

        <h3
          className="
            mt-5
            line-clamp-2
            text-[24px]
            font-bold
            leading-snug
            text-[#1F2937]
            transition-colors
            duration-300
            group-hover:text-[#7B3FF2]
          "
        >
          {blog.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4
            line-clamp-3
            text-[15px]
            leading-7
            text-[#6B7280]
          "
        >
          {blog.description}
        </p>

        {/* Meta */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            gap-4
            text-sm
            text-[#6B7280]
          "
        >
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {blog.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            {blog.readTime}
          </div>
        </div>

        {/* Button */}

        <div
  className="
    mt-8
    flex
    items-center
    gap-2
    font-semibold
    text-[#7B3FF2]
    transition-all
    duration-300
    group-hover:gap-3
  "
>
  Read More
  <ArrowRight size={18} />
</div>

      </div>
    </article>
    </Link>
  )
}

export default BlogCard