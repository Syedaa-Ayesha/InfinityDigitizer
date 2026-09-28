import FileFormatCard from "../../layout/FileFormatPageLayout/FileFormatCard";

const FileFormatSection = ({
  title = "",
  description = "",
  formats = [],
}) => {
  if (!Array.isArray(formats) || formats.length === 0) {
    return null;
  }

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden">
      {/* Section Header */}
      <div className="mb-[20px] min-w-0 max-w-full sm:mb-[24px] lg:mb-[28px]">
        <h2
          className="
            min-w-0 max-w-full break-words
            font-dmSans text-[20px] font-bold
            leading-[1.25] tracking-[-0.02em]
            text-[#17161F]
            sm:text-[22px]
            lg:text-[24px]
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-[7px]
              w-full min-w-0 max-w-[760px]
              break-words
              font-inter text-[14px] font-normal
              leading-[1.7]
              text-[#6B6B80]
              sm:mt-[8px]
              sm:text-[15px]
              lg:text-[16px]
              lg:leading-[1.75]
            "
          >
            {description}
          </p>
        )}

        <div
          className="
            mt-[10px]
            h-1 w-[42px]
            rounded-full
            bg-[#7434E5]
            sm:mt-[11px]
            sm:w-[46px]
            lg:mt-[12px]
            lg:w-[48px]
          "
        />
      </div>

      {/* Format Cards */}
      <div
        className="
          grid w-full min-w-0 max-w-full
          grid-cols-1
          gap-[12px]
          sm:grid-cols-2
          sm:gap-[14px]
          md:grid-cols-3
          lg:grid-cols-4
          lg:gap-[16px]
          xl:grid-cols-5
          xl:gap-[18px]
        "
      >
        {formats.map((format, index) => (
          <div
            key={format.id ?? `${format.extension || "format"}-${index}`}
            className="min-w-0 max-w-full"
          >
            <FileFormatCard
              extension={format.extension}
              name={format.name}
              subtitle={format.subtitle}
              description={format.description}
              icon={format.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FileFormatSection;