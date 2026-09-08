const SitemapHero = () => {
  return (
    <section className="py-[56px]">
      <div
        className="
          grid
          min-h-[420px]
          grid-cols-1
          overflow-hidden
          rounded-2xl
          bg-[#fbf9ff]
          lg:min-h-[480px]
          lg:grid-cols-2
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            flex
            items-center
            px-6
            py-14
            sm:px-10
            sm:py-16
            lg:px-14
            xl:px-16
          "
        >
          <div className="max-w-[540px]">
            
            {/* Heading */}
            <h1
              className="
                text-[40px]
                font-bold
                leading-[1.1]
                tracking-[-1.5px]
                text-[#17151d]
                sm:text-[46px]
                lg:text-[52px]
                xl:text-[56px]
              "
            >
              Sitemap
            </h1>

            {/* Purple Line */}
            <div
              className="
                mt-5
                h-[3px]
                w-[48px]
                rounded-full
                bg-[#5914D2]
                sm:mt-6
              "
            />

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[520px]
                text-[14px]
                leading-[1.8]
                text-[#737084]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Find all the important pages of Infinity Digitizing
              website in one place. Navigate easily to get the
              information you need.
            </p>

          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div
          className="
            flex
            min-h-[280px]
            items-center
            justify-center
            px-5
            pb-6
            sm:min-h-[320px]
            sm:px-8
            lg:min-h-full
            lg:px-10
            lg:py-10
          "
        >
          <div
            className="
              h-full
              min-h-[280px]
              w-full
              rounded-2xl
              border
              border-[#eee7f2]
              bg-[#fff5f5]
              sm:min-h-[320px]
              lg:min-h-[380px]
              xl:min-h-[400px]
            "
          >
            {/* Hero Image / Illustration */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitemapHero;