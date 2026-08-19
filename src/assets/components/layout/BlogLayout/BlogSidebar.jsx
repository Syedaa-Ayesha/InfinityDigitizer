import TableOfContents from "../../sections/TableOfContent";
import RelatedArticles from "../RelatedArticles";
import NewsletterCard from "../NewsletterCard";
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
      <TableOfContents
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