

import FreeDesignDropdown from "./FreeDesignDropDown";
import SearchInput from "../SearchInput";

const FreeDesignHeader = ({
  searchTerm = "",
  setSearchTerm = () => {},
}) => {
  return (
    <section>

      {/* Heading */}

      <p className="text-[28px] md:text-[42px] font-bold leading-none">

        <span className="text-[#202020]">
          Free &
        </span>

        {" "}

        <span className="text-[#7B3FF2]">
          Premium Designs
        </span>

      </p>

      <p className="mt-2 text-[#8A8A8A] text-[13px]">
        High quality embroidery and vector designs for your next project.
      </p>

      {/* Filters */}

      <div className="mt-7 flex flex-col xl:flex-row xl:justify-between gap-5">

        <FreeDesignDropdown label="Sort by: Latest" />

        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

      </div>

    </section>
  );
};

export default FreeDesignHeader;