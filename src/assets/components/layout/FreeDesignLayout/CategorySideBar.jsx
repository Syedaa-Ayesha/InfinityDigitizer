import {ImageIcon, Shapes } from "lucide-react";
const CategorySideBar = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <aside className="sticky top-6 self-start z-50">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

        {/* ================= HEADING ================= */}

        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Categories
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Choose a category to explore amazing designs
        </p>

        {/* ================= CATEGORIES ================= */}

        <div className="mt-6 space-y-3">

          {/* ================= EMBROIDERY ================= */}

          <button
            type="button"
            onClick={() => setActiveTab("embroidery")}
            className={`
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-sm
              font-medium
              transition-all
              duration-300
              ${
                activeTab === "embroidery"
                  ? "bg-[#6D3DF5] text-white shadow-lg"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-[#6D3DF5] hover:text-[#6D3DF5]"
              }
            `}
          >
         <ImageIcon size={18} />

            Embroidery Designs
          </button>

          {/* ================= VECTOR ================= */}

          <button
            type="button"
            onClick={() => setActiveTab("vector")}
            className={`
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-sm
              font-medium
              transition-all
              duration-300
              ${
                activeTab === "vector"
                  ? "bg-[#6D3DF5] text-white shadow-lg"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-[#6D3DF5] hover:text-[#6D3DF5]"
              }
            `}
          >
            <Shapes size={18} />

            Vector Designs
          </button>

        </div>

      </div>
    </aside>
  );
};

export default CategorySideBar;