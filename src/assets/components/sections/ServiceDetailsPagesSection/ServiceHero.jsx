import Breadcrumb from "../../layout/SiteMap/breadcrumb";

const ServiceHero = ({
  category = "EMBROIDERY DIGITIZING",
  title = "Quality Cap Digitizing Services",
  description = "",
  image = "",
  imageAlt = "",
}) => {
  return (
    <section
      className="
        box-border
        mx-auto
        w-full
        min-w-0
        max-w-[1344px]
        px-[14px]
        sm:px-[18px]
        md:px-[24px]
        lg:px-[32px]
        xl:px-0
        py-6
    xl:py-13
        border-b
        border-[#6B7280]/20
      "
    >
      {/* Breadcrumb */}
      <div className="w-full min-w-0 max-w-full">
        <Breadcrumb />
      </div>

      {/* Hero */}
      <div
        className="
          mt-[18px]
          grid
          w-full
          min-w-0
          max-w-full
          grid-cols-1
          items-start
          gap-[24px]

          sm:mt-[22px]
          sm:gap-[28px]

          md:grid-cols-[minmax(0,1fr)_320px]
          md:gap-[36px]

          lg:grid-cols-[minmax(0,1fr)_405px]
          lg:gap-[52px]

          xl:gap-[62px]
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            box-border
            min-w-0
            max-w-full
            pt-0

            sm:pt-[4px]

            lg:pt-[18px]
          "
        >
          {/* Category Badge */}
          <div
            className="
              inline-flex
              max-w-full
              items-center
              rounded-full
              border
              border-[#D9C8FF]
              bg-[#F5F0FF]
              px-[11px]
              py-[5px]

              sm:px-[13px]
              sm:py-[6px]

              lg:px-[14px]
              lg:py-[7px]
            "
          >
            <span
              className="
                max-w-full
                break-words
                font-inter
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.45px]
                text-[#7434E5]

                sm:text-[10px]

                lg:text-[10px]
              "
              style={{ overflowWrap: "anywhere" }}
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="
              mt-[14px]
              max-w-[620px]
              break-words
              font-dmSans
              text-[30px]
              font-extrabold
              leading-[1.08]
              tracking-[-1.1px]
              text-[#111118]

              sm:mt-[16px]
              sm:text-[36px]
              sm:tracking-[-1.3px]

              md:text-[42px]

              lg:mt-[17px]
              lg:text-[48px]
              lg:tracking-[-1.6px]
            "
            style={{ overflowWrap: "anywhere" }}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              className="
                mt-[13px]
                max-w-[620px]
                break-words
                font-inter
                text-[13px]
                font-normal
                leading-[1.65]
                text-[#6B6B80]

                sm:mt-[15px]
                sm:text-[14px]
                sm:leading-[1.7]

                md:max-w-[600px]

                lg:mt-[16px]
                lg:text-[15px]
                lg:leading-[1.75]
              "
              style={{ overflowWrap: "anywhere" }}
            >
              {description}
            </p>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            box-border
            w-full
            min-w-0
            max-w-full
            rounded-[12px]
            border
            border-[#E8E8F0]
            bg-[#FDF2F2]
          "
        >
          {image ? (
            <img
              src={image}
              alt={imageAlt || title}
              className="
                block
                h-auto
                w-full
                max-w-full
                rounded-[11px]
                object-cover
                object-center

                aspect-[16/10]
                sm:aspect-[16/10]

                md:h-[235px]
                md:aspect-auto

                lg:h-[315px]
              "
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;