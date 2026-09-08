const QuoteBox = ({ quote }) => {
  if (!quote) return null;

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-2xl
        bg-[#F4F0F9]
      "
    >

      {/* Left Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[6px]
          bg-[#4F1DA5]
        "
      />

      {/* Content */}

      <blockquote
        className="
          px-6
          py-5

          sm:px-8
          md:px-10
          md:py-8
        "
      >

        <p
          className="
            font-dmSans
            text-[20px]
            italic
            font-medium
          leading-7
            text-[#4F1DA5]
            md:leading-[38px]
          "
        >
          "{quote}"
        </p>

      </blockquote>

    </section>
  );
};

export default QuoteBox;