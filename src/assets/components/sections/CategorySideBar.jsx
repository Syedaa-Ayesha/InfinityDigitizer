import { Image, Shapes } from "lucide-react";

const CategorySideBar = () => {
  return (
      <aside className="sticky top-6 self-start">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Categories
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Choose a category to explore amazing designs
        </p>

        <div className="mt-6 space-y-3">

          <button className="flex w-full items-center gap-3 rounded-xl bg-[#6D3DF5] px-4 py-3 text-sm font-medium text-white shadow-lg">
            <Image size={18} />
            Embroidery Designs
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-[#6D3DF5] hover:text-[#6D3DF5]">
            <Shapes size={18} />
            Vector Designs
          </button>

        </div>

      </div>
    </aside>
  )
}

export default CategorySideBar