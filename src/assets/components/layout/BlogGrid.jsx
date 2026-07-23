
import BlogCard from "../layout/BlogCard";
import { BlogData } from "../common/BlogData";
const BlogGrid = () => {
  return (
   <section
      className="
      max-w-[1330px] mx-auto
        grid
        grid-cols-1
        gap-8

        md:grid-cols-2

        xl:grid-cols-3
      "
    >
      {BlogData.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
        />
      ))}
    </section>
  )
}

export default BlogGrid