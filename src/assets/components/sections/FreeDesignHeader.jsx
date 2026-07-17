
import FreeDesignDropdown from "../layout/FreeDesignDropDown";
import SearchInput from "../layout/SearchInput";
// import OutlineButton from "../layout/OutlineBtn";
const FreeDesignHeader = () => {
  return (
    <section>

      {/* Heading */}

      <h1 className="text-[28px] md:text-[42px] font-bold leading-none">

        <span className="text-[#202020]">
          Free &
        </span>

        {" "}

        <span className="text-[#7B3FF2]">
          Premium Designs
        </span>

      </h1>

      <p className="mt-2 text-[#8A8A8A] text-[13px]">
        High quality embroidery and vector designs for your next project.
      </p>

      {/* Filters */}

      <div className="mt-8 flex flex-col xl:flex-row xl:justify-between gap-5">

        <div className="flex flex-wrap gap-3">

          <FreeDesignDropdown label="Newest" />

          <FreeDesignDropdown label="Sort by: Latest" />

        </div>

        <div className="flex flex-col sm:flex-row gap-3">

          <SearchInput />

          {/* <OutlineButton title="View All Free Designs" /> */}

        </div>

      </div>

    </section>
  )
}

export default FreeDesignHeader