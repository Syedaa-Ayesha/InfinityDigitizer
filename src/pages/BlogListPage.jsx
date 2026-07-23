import SectionHeading from "../assets/components/common/SectionHeading"
import { Book, Headphones } from "lucide-react"
import { useState } from "react";
import CTASection from "../assets/components/layout/CTASection";
import BlogFilter from "../assets/components/sections/BlogFilter";
import BlogGrid from "../assets/components/layout/BlogGrid";
import BlogPagination from "../assets/components/layout/BlogPagination";

// import BlogNewsletter from "../components/sections/BlogNewsletter";
const BlogListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
  return (
    
    // <main className="bg-[#F9F9FC]">

    //   <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 xl:px-10">

        

    //     <div className="mt-10">
    //       <BlogFilter />
    //     </div>

    //     <div className="mt-10">
    //       <BlogGrid />
    //     </div>

    //     <div className="mt-12 flex justify-center">
    //       <BlogPagination />
    //     </div>

    //     <div className="mt-20">
    //       {/* <BlogNewsletter /> */}
    //     </div>

    //   </div>

    // </main>


<main className="bg-[#FAFAFD] flex
flex-col
gap-10">

      <div
        className="
          mx-auto
          max-w-[1440px]
          px-5
          py-14

          lg:px-10
          xl:px-12
        "
      >
         <SectionHeading
          icon={<Book size={24} />}
          badge="Our Blog"
          heading="Latest Blogs & Expert Tips"
          description="Explore expert tips, practical guides, and industry updates to improve every design project."
           headingClassName="text-[56px] text-[#0F1729] font-extrablod"
        />
      </div>
<div className="mt-0">
          <BlogFilter />
        </div>
        <div className="mt-0">
  <BlogGrid />
  <BlogPagination currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage} />
</div>
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
  bg =" bg-[linear-gradient(93.97deg,_#6C29E0_0%,_#5413C3_100%)]"
 
/>


    </main>
  )
}

export default BlogListPage