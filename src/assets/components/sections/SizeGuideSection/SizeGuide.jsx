import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SizeGuideHeader from "./SizeGuideHeader";
import { sizeGuideData } from "../../common/SizeGuideData";
import SizeGuideTable from "./SizeGuideTable";

const SizeGuide = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultTab = "garments";

  const categoryFromUrl =
    searchParams.get("category") || defaultTab;

  const isValidCategory = sizeGuideData.some(
    (item) => item.value === categoryFromUrl
  );

  const [activeTab, setActiveTab] = useState(
    isValidCategory ? categoryFromUrl : defaultTab
  );

  useEffect(() => {
    const validCategory = sizeGuideData.some(
      (item) => item.value === categoryFromUrl
    );

    const newTab = validCategory
      ? categoryFromUrl
      : defaultTab;

    setActiveTab(newTab);
  }, [categoryFromUrl]);

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
        <SizeGuideHeader />

        {/* <div className="mt-8">
          <CommonTab
            tabs={sizeGuideData}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            classname="shadow-none border-0"
          />
        </div> */}

        <div className="mt-7 w-full min-w-0">
  <div
    className="
      flex
      w-full
      min-w-0
      flex-wrap
      items-center
      justify-start
      gap-2

      sm:gap-2.5

      lg:gap-3
    "
  >
    {sizeGuideData.map((tab) => {
      const Icon = tab.icon;
      const isActive = activeTab === tab.value;

      return (
        <button
          key={tab.value}
          type="button"
          onClick={() => handleTabChange(tab.value)}
          className={`
            flex
            w-fit
            max-w-full
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-full
            border
            px-3
            py-2.5
            text-center
            transition-all
            duration-200

            sm:px-3.5
            sm:py-3

            lg:px-4
            lg:py-3

            ${
              isActive
                ? "border-[#7434E5] bg-[#7434E5] text-white shadow-[0px_5px_14px_rgba(116,52,229,0.16)]"
                : "border-[#E7E3ED] bg-white text-[#4B5563] hover:border-[#CDB9F5] hover:text-[#7434E5]"
            }
          `}
        >
          {Icon && (
            <Icon
              size={16}
              strokeWidth={1.8}
              className="shrink-0"
            />
          )}

          <span
            className="
              whitespace-nowrap
              font-inter
              text-[11px]
              font-semibold
              leading-none

              sm:text-[12px]

              lg:text-[12px]
            "
          >
            {tab.title}
          </span>
        </button>
      );
    })}
  </div>
</div>

        <SizeGuideTable
          title={activeCategory?.title}
          data={activeCategory?.tableData || []}
        />
      </div>
    </section>
  );
};

export default SizeGuide;