import CategorySidebar from "../assets/components/sections/CategorySideBar";
import DesignsContent from "../assets/components/sections/FreeDesignContent";

const FreeDesign = () => {
  return (
    <main className="bg-[#F8F8FC] min-h-screen py-8">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8">
          <CategorySidebar />
          <DesignsContent />
          
        </div>
      </div>
    </main>
  )
}

export default FreeDesign