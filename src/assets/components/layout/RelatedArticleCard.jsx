import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const RelatedArticleCard = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="
        group
        flex
        items-start
        gap-4
      "
    >
      {/* Image */}

      <img
        src={blog.image}
        alt={blog.title}
        className="
          h-24
          w-24
          shrink-0
          rounded-2xl
          object-cover
        "
      />

      {/* Content */}

      <div className="flex-1">

        {/* Category */}

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            font-inter
            tracking-[0.08em]
            text-[#7434E5]
          "
        >
          {blog.category}
        </span>

        {/* Title */}

        <h3
          className="
          mt-1
            line-clamp-2
            text-sm
            font-bold
            font-dmSans
            leading-6
            text-[#1F2937]
          "
        >
          {blog.title}
        </h3>

        {/* Date */}

        <div
          className="
            mt-1
            flex
            items-center
            gap-2
            text-[12px]
            text-[#ACB0B9]
          "
        >
          <CalendarDays size={14} />

          <span>{blog.date}</span>

        </div>

      </div>
    </Link>
  );
};

export default RelatedArticleCard;