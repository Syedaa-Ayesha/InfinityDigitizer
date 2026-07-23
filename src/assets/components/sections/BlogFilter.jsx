import { useState } from "react";

import SearchInput from "../layout/SearchInput";
import CategoryButton from "../layout/CategoryBtn";

const BlogFilter = () => {
      const BlogCategories = [
  "All",
  "Embroidery Digitizing",
  "Vector Tracing",
  "Logo Designing",
  "Tips & Guides",
  "Industry News",
];
const [activeCategory, setActiveCategory] = useState("All");
  return (
    <section
      className="
      max-w-[1330px]
      mx-auto
        rounded-[22px]
        border
        border-[#ECECF3]
        bg-white
        p-5
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5

          lg:flex-row
          lg:items-center
          lg:justify-around
        "
      >
        {/* Search */}

        <div className="w-full lg:max-w-[320px]">
          <SearchInput />
        </div>

        {/* Categories */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          <span
            className="
              text-sm
              font-semibold
              text-[#4B5563]
            "
          >
            Categories:
          </span>

          {BlogCategories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
            >
              <CategoryButton
                title={item}
                active={activeCategory === item}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogFilter