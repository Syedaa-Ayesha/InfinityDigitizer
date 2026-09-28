import Breadcrumb from "../../layout/SiteMap/breadcrumb";

const ServiceHero = ({
  category = "EMBROIDERY DIGITIZING",
  title = "Quality Cap Digitizing Services",
  description = "",
  image = "",
  imageAlt = "",
}) => {
  return (
    <section className="w-full">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Hero */}
      <div
        className="
          mt-[22px]

          grid
          grid-cols-1
          items-start
          gap-[36px]

          md:grid-cols-[minmax(0,1fr)_320px]
          md:gap-[45px]

          lg:grid-cols-[minmax(0,1fr)_405px]
          lg:gap-[62px]
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            min-w-0
            pt-[8px]

            lg:pt-[18px]
          "
        >
          {/* Category Badge */}
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#D9C8FF]
              bg-[#F5F0FF]

              px-[13px]
              py-[6px]

              sm:px-[14px]
              sm:py-[7px]
            "
          >
            <span
              className="
                font-inter
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.6px]
                text-[#7434E5]

                sm:text-[9px]
              "
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="
              mt-[17px]
              max-w-[560px]

              font-dmSans
              text-[36px]
              font-extrabold
              leading-[1.06]
              tracking-[-1.6px]
              text-[#111118]

              sm:text-[42px]

              lg:text-[48px]
            "
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="
              mt-[16px]
              max-w-[570px]

              font-inter
              text-[13px]
              font-normal
              leading-[1.65]
              text-[#6B6B80]

              sm:text-[14px]

              lg:text-[15px]
            "
          >
            {description}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-[12px]
            border
            border-[#E8E8F0]
            bg-[#FDF2F2]

            h-[230px]

            sm:h-[270px]

            md:h-[235px]

            lg:h-[315px]
          "
        >
          {image ? (
            <img
              src={image}
              alt={imageAlt || title}
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;