import SectionHeading from "../assets/components/layout/SectionHeading"
import { Book, Headphones } from "lucide-react"
import { useState } from "react";
import CTASection from "../assets/components/layout/CTASection";
import BlogFilter from "../assets/components/sections/BlogFilter";
import BlogGrid from "../assets/components/layout/BlogGrid";
import BlogPagination from "../assets/components/layout/BlogLayout/BlogPagination";

// import BlogNewsletter from "../components/sections/BlogNewsletter";
const BlogListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
  return (
<main className="bg-[#FAFAFD] flex
flex-col
gap-10
p-[22px]
lg:py-[54px]">

      <div
        className="
          mx-auto
          max-w-[1440px]  
          
        "
      >
         <SectionHeading
          icon={<Book/>}
          badge="Our Blog"
          heading="LATEST BLOGS & EXPERT TIPS"
          description="Explore expert tips, practical guides, and industry updates to improve every design project."
           headingClassName="lg:text-[52px] text-[#0F1729] font-extrablod leading-12"
        />
      </div>
<div >
          <BlogFilter />
        </div>
        <div className="w-fit mx-auto">
  <BlogGrid />
  <BlogPagination currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage} />
        <CTASection
  icon={
    <Headphones
      size={38}
      strokeWidth={2.2}
      className="text-[#7434E5]"
    />
  }
  title="Your Artwork Deserves the Best!"
  description="Upload it now, and our team will turn it into a clean, high
quality file, fast, accurate, no errors, no delays, just quality 
work"
  buttonText="Get Free Quote"
  titleClass = "text-[28px]"
  sectionWidth = "w-[1330px]"
  iconHeight= "h-[96px]"
  iconWidth = "w-[96px]"
  bg =" bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)] mt-9"
 
/>

</div>
 

    </main>
  )
}

export default BlogListPage