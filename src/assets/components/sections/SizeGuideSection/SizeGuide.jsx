import { useState } from "react";
import CommonTab from "../../layout/CommonTab";
import SizeGuideHeader from "./SizeGuideHeader";
import { sizeGuideData } from "../../common/SizeGuideData";
import SizeGuideTable from "./SizeGuideTable";

const SizeGuide = () => {
  const [activeTab, setActiveTab] = useState("garments");

  const activeCategory = sizeGuideData.find(
    (item) => item.value === activeTab
  );
  return (
    <section
      className="
        min-h-screen
        border-t-[6px]
        border-[#7434E5]
        bg-[#FAF9FC]
        p-[22px]
        lg:py-13
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1210px]
        "
      >

        {/* Header */}
        <SizeGuideHeader />

        {/* Tabs */}
        <div className="mt-8">
        
        <CommonTab
       tabs={sizeGuideData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
          classname="shadow-none border-0"
        />
      </div>
        {/* Next step */}

        {/* Placement Table */}
          {/* Active table */}
      <SizeGuideTable  data={activeCategory?.tableData || []}/>
        {/* Next step */}

        {/* Bottom Cards */}
        {/* Next step */}

      </div>
    </section>
  );
};

export default SizeGuide;