import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative w-full md:w-[230px]">

      <Search
        size={16}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search designs..."
        className="
        w-full
        h-10
        rounded-lg
        border
        border-[#E8E8EE]
        pl-4
        pr-10
        text-[12px]
        outline-none
        focus:border-[#7B3FF2]
        "
      />

    </div>
  );
};

export default SearchInput;