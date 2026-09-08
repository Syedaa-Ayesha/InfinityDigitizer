import {
  CalendarDays,
  Clock3,
  User,
  Eye,
} from "lucide-react";

const BlogHero = ({ blog }) => {
  if (!blog) return null;

  return (
    <section className="flex flex-col gap-[18px]">

      {/* Breadcrumb yahan next step me banayenge */}

      {/* Category */}

      <span
        className="
        inline-flex
        items-center
        rounded-full
        bg-[#F3EEFF]
        px-3
        py-1
        text-[11px]
        font-semibold
        uppercase
        tracking-wide
        text-[#7B3FF2]
        w-fit
        "
      >
        {blog.category}
      </span>

      {/* Title */}

      <h1
        className="
        text-[32px]
        font-extrabold
        leading-tight
        font-dmSans
        text-[#1F2937]
        md:text-[36px]
        lg:text-[48px]
        "
      >
        {blog.title}
      </h1>

      {/* Meta */}

      <div
        className="
        flex
        flex-wrap
        items-center
        gap-x-6
        gap-y-3
        text-sm
        text-[#6B7280]
        font-inter
        "
      >
        <div className="flex items-center gap-2">
          <CalendarDays size={14} />
          <span>{blog.date}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={14} />
          <span>{blog.readTime}</span>
        </div>

        <div className="flex items-center gap-2">
          <User size={14} />
          <span>{blog.author.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <Eye size={14} />
          <span>{blog.views}</span>
        </div>
      </div>

      {/* Featured Image */}

      <div
        className="
        overflow-hidden
        rounded-[28px]
        border
        border-[#ECECF3]
        bg-white
        shadow-sm
        
        "
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="
         
          w-full
          object-cover
          md:h-[420px]
          lg:h-[520px]
          "
        />
      </div>

    </section>
  );
};

export default BlogHero;