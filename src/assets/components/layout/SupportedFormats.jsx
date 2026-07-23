// import { FileCode2 } from "lucide-react";

const SupportedFormats = ({ formats }) => {
  if (!formats?.length) return null;

  return (
    <section className="mb-6">

      {/* Formats */}

      <div
        className="
          mt-3
          flex
          flex-wrap
          gap-4
        "
      >

        {formats.map((format) => (

          <span
            key={format}
            className="
              rounded-2xl
              border
              border-[#D9C8FF]
              bg-[#F7F2FF]
              px-4
              py-2
              text-[14px]
              font-semibold
              tracking-wide
              text-[#7434E5]
              transition-all
              duration-300
              hover:text-white
              hover:bg-[#7434E5]
              hover:shadow-lg
            "
          >
            {format}
          </span>

        ))}

      </div>

    </section>
  );
};

export default SupportedFormats;