import FaqSection from "../assets/components/sections/HomePageSections/FAQ"
import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb"
const FAQPage = () => {
  return (
    <>
    <Breadcrumb />
       <section className="bg-[#FFFFFF] p-[22px]">
  <div className="lg:mx-auto lg:max-w-[1320px] ">
         <FaqSection />
        </div>
        </section></>
  )
}

export default FAQPage