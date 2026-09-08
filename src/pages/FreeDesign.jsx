import { useState } from "react";

import CategorySidebar from "../assets/components/layout/FreeDesignLayout/CategorySideBar";
import DesignsContent from "../assets/components/layout/FreeDesignLayout/FreeDesignContent";
import Breadcrumb from "../assets/components/layout/SiteMap/breadcrumb";

const FreeDesign = () => {
  /* ================= ACTIVE CATEGORY ================= */

  const [activeCategory, setActiveCategory] = useState("embroidery");

  return (
    <>
    <Breadcrumb />
    <main className="bg-[#F8F8FC] min-h-screen py-8">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8">

          <CategorySidebar
            activeTab={activeCategory}
            setActiveTab={setActiveCategory}
          />

          <DesignsContent
            activeCategory={activeCategory}
          />

        </div>
      </div>
    </main>
    </>
  );
};

export default FreeDesign;