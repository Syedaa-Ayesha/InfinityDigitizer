import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchInput from "../../layout/SearchInput";
import CommonTab from "../../layout/CommonTab";

const BlogFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /* ================= BLOG CATEGORIES ================= */

  const BlogCategories = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "embroidery",
      title: "Embroidery Digitizing",
    },
    {
      id: "vector",
      title: "Vector Tracing",
    },
    {
      id: "logo",
      title: "Logo Designing",
    },
    {
      id: "tips",
      title: "Tips & Guides",
    },
    {
      id: "news",
      title: "Industry News",
    },
  ];

  /* ================= URL VALUES ================= */

  const categoryFromUrl =
    searchParams.get("category") || "all";

  const searchFromUrl =
    searchParams.get("search") || "";

  /* ================= STATE ================= */

  const [activeTab, setActiveTab] =
    useState(categoryFromUrl);

  const [searchTerm, setSearchTerm] =
    useState(searchFromUrl);

  /* ================= URL → STATE ================= */

  useEffect(() => {
    const isValidCategory = BlogCategories.some(
      (category) => category.id === categoryFromUrl
    );

    setActiveTab(
      isValidCategory ? categoryFromUrl : "all"
    );

    setSearchTerm(searchFromUrl);
  }, [categoryFromUrl, searchFromUrl]);

  /* ================= CATEGORY CHANGE ================= */

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    setActiveTab(category);
    setSearchParams(params);
  };

  /* ================= SEARCH CHANGE ================= */

  const handleSearchChange = (value) => {
    setSearchTerm(value);

    const params = new URLSearchParams(searchParams);

    const trimmedValue = value.trim();

    if (trimmedValue) {
      params.set("search", trimmedValue);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  };

  return (
    <section
      className="
        mx-auto
        max-w-[1330px]
        rounded-[22px]
        border
        border-[#ECECF3]
        bg-white
        p-5
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        md:p-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* ================= SEARCH ================= */}

        <div className="w-full lg:w-auto">
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={handleSearchChange}
            placeholder="Search blogs..."
          />
        </div>

        {/* ================= CATEGORIES ================= */}

        <div
          className="
            flex
            min-w-0
            flex-col
            gap-3
            lg:flex-1
            lg:flex-row
            lg:items-center
            lg:justify-end
          "
        >
          <span
            className="
              shrink-0
              text-sm
              font-semibold
              text-[#4B5563]
            "
          >
            Categories:
          </span>

          <div className="min-w-0">
            <CommonTab
              tabs={BlogCategories}
              activeTab={activeTab}
              setActiveTab={handleCategoryChange}
              classname="
                mt-0
                max-w-full
                overflow-hidden
                border-0
                bg-transparent
                p-0
                shadow-none
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFilter;