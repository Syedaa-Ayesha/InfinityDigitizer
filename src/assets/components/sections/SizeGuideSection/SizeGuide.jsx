import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CommonTab from "../../layout/CommonTab";
import SizeGuideHeader from "./SizeGuideHeader";
import { sizeGuideData } from "../../common/SizeGuideData";
import SizeGuideTable from "./SizeGuideTable";

const SizeGuide = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /* ================= DEFAULT CATEGORY ================= */

  const defaultTab = "garments";

  /* ================= URL CATEGORY ================= */

  const categoryFromUrl =
    searchParams.get("category") || defaultTab;

  /* ================= VALID CATEGORY ================= */

  const isValidCategory = sizeGuideData.some(
    (item) => item.value === categoryFromUrl
  );

  /* ================= ACTIVE TAB ================= */

  const [activeTab, setActiveTab] = useState(
    isValidCategory ? categoryFromUrl : defaultTab
  );

  /* ================= SYNC URL → TAB ================= */

  useEffect(() => {
    const validCategory = sizeGuideData.some(
      (item) => item.value === categoryFromUrl
    );

    const newTab = validCategory
      ? categoryFromUrl
      : defaultTab;

    setActiveTab(newTab);
  }, [categoryFromUrl]);

  /* ================= TAB CHANGE ================= */

  const handleTabChange = (value) => {
    setActiveTab(value);

    const params = new URLSearchParams(searchParams);

    if (value === defaultTab) {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    setSearchParams(params);
  };

  /* ================= ACTIVE CATEGORY ================= */

  const activeCategory = sizeGuideData.find(
    (item) => item.value === activeTab
  );

  return (
    <section
      className="
        min-h-screen
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

        {/* ================= HEADER ================= */}

        <SizeGuideHeader />

        {/* ================= TABS ================= */}

        <div className="mt-8">
          <CommonTab
            tabs={sizeGuideData}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            classname="shadow-none border-0"
          />
        </div>

        {/* ================= ACTIVE TABLE ================= */}

        <SizeGuideTable
          data={activeCategory?.tableData || []}
        />

        {/* ================= NEXT SECTIONS ================= */}

        {/* Placement Table */}

        {/* Bottom Cards */}

      </div>
    </section>
  );
};

export default SizeGuide;