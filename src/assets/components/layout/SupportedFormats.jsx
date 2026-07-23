import { FileCode2 } from "lucide-react";

const SupportedFormats = ({ formats }) => {
  if (!formats?.length) return null;

  return (
    <section className="my-14">

      {/* Heading */}

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#F4EEFF]
          "
        >
          <FileCode2
            size={20}
            className="text-[#7434E5]"
          />
        </div>

        <h3
          className="
            font-dmSans
            text-[24px]
            font-bold
            text-[#0F1729]

            md:text-[28px]
          "
        >
          Supported Formats
        </h3>

      </div>

      {/* Formats */}

      <div
        className="
          mt-8
          flex
          flex-wrap
          gap-4
        "
      >

        {formats.map((format) => (

          <span
            key={format}
            className="
              rounded-full
              border
              border-[#D9C8FF]
              bg-[#F7F2FF]
              px-6
              py-3
              text-[15px]
              font-semibold
              tracking-wide
              text-[#7434E5]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#7434E5]
              hover:text-white
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