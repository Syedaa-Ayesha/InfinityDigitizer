import { Book } from "lucide-react";
import { BlogData } from "../common/BlogData";
import RelatedArticleCard from "../layout/RelatedArticleCard";
import SidebarHeading from "./SidebarHeading";
const RelatedArticles = ({ currentBlog }) => {

  const relatedBlogs = BlogData
    .filter(
      (blog) =>
        blog.category === currentBlog.category &&
        blog.id !== currentBlog.id
    )
    .slice(0, 3);

  return (
    <section
      className="
      rounded-[24px]
      border
      border-[#ECECEC]
      bg-white
      py-6
      px-[22px]
      shadow-sm
      mb-4
      "
    >

  <SidebarHeading sidebarHeading ="Related Articles" Icon = {Book }/>

      <div className="mt-6">

  {relatedBlogs.map((blog, index) => (

    <div key={blog.id}>

      <RelatedArticleCard blog={blog} />

      {index !== relatedBlogs.length - 1 && (
        <div className="my-4 h-px bg-[#E5E7EB]" />
      )}

    </div>

  ))}

</div>

    </section>
  );
};

export default RelatedArticles;