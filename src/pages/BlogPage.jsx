import { useParams } from "react-router-dom";
import { BlogData } from "../assets/components/common/BlogData";

import BlogHero from "../assets/components/layout/BlogHero";
import BlogSidebar from "../assets/components/layout/BlogSidebar";
import BlogContent from "../assets/components/sections/BlogContent";
import AuthorCard from "../assets/components/layout/AuthorCard";
import ShareSection from "../assets/components/layout/ShareSection";
// import NextPreviousSection from "../assets/components/sections/NextPreviousSection";
import MoreArticlesSection from "../assets/components/sections/MoreArticlesSection";
import TagSection from "../assets/components/sections/TagSection";
const BlogPage = () => {

  const { id } = useParams();

  const blog = BlogData.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <div className="py-20 text-center text-2xl font-bold">
        Blog Not Found
      </div>
    );
  }

  return (
<main className="bg-[#FAFAFC] lg:p-16">

  <div className="container mx-auto px-4">

    {/* Hero */}
    <BlogHero blog={blog} />

    {/* Content + Sidebar */}
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_330px]">

      <BlogContent blog={blog} />

      <BlogSidebar blog={blog} />

    </div>

    {/* Full Width Sections */}

    <div className="pt-10">
<TagSection tags={blog.tags} />
      <ShareSection blog={blog} />

      <AuthorCard blog={blog} />


      {/* <NextPreviousSection currentBlog={blog} /> */}

<MoreArticlesSection currentBlog={blog} />
    </div>

  </div>

</main>
  );
};

export default BlogPage;