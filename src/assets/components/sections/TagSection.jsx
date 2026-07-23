const TagSection = ({ tags }) => {

  if (!tags?.length) return null;

  return (
    <section className="mb-4">

      <div className="flex flex-wrap items-center gap-3">

        <h4
          className="
            text-[15px]
            font-semibold
            text-[#0F1729]
          "
        >
          Tags:
        </h4>

        {tags.map((tag, index) => (

          <button
            key={index}
            className="
              rounded-full
              border
              border-[#E5E7EB]
              bg-[#FAFAFC]
              px-4
              py-2
              text-[13px]
              font-medium
              text-[#6B7280]
              transition-all
              duration-300
              hover:border-[#7434E5]
              hover:bg-[#7434E5]
              hover:text-white
            "
          >
            {tag}
          </button>

        ))}

      </div>

    </section>
  );
};

export default TagSection;