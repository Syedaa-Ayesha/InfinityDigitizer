
import RelatedArticles from "../BlogLayout/RelatedArticles";
import NewsletterCard from "../BlogLayout/NewsletterCard";
import TableOfContent from "../../sections/BlogSection/TableOfContent";
const BlogSidebar = ({ blog }) => {
    if (!blog) return null;
  return (
 <aside
      className="
       
    h-fit
    lg:sticky
    lg:top-28
    self-start
  
      "
    >
      <TableOfContent
        sections={blog.content.sections}
      />

  <RelatedArticles
    currentBlog={blog}
  />
    <NewsletterCard />
    </aside>
  )
}

export default BlogSidebar