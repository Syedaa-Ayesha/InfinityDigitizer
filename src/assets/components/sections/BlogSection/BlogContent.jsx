import StitchTypes from "../../layout/StitchTypes";
import QuoteBox from "../../layout/BlogLayout/QuoteBox";
import SupportedFormats from "../../layout/SupportedFormats";
import KeyPointBox from "../../layout/BlogLayout/KeyPointBox";

const BlogContent = ({ blog }) => {
  if (!blog) return null;

  const {
    introduction,
    sections,
    keyPoint,
    images,
    stitchTypes,
    quote,
    supportedFormats,
  } = blog.content;

  return (
    <article>
      {/* Introduction */}
      <p
        className="
          text-[16px]
          leading-8
          text-[#424957]
          md:text-[18px]
          md:leading-9
        "
      >
        {introduction}
      </p>

      {/* Dynamic Sections */}
      {sections.map((section, index) => {
        /* ================= TEXT ================= */
        if (section.type === "text") {
          return (
            <section key={index} className="mt-12">
              <h2
                className="
                  font-dmSans
                  text-[28px]
                  font-bold
                  text-[#0F1729]
                  md:text-[34px]
                "
              >
                {section.heading}
              </h2>

              <div className="mt-6 space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="
                      text-[16px]
                      leading-8
                      text-[#424957]
                      md:text-[18px]
                      md:leading-9
                    "
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          );
        }

        /* ================= KEY POINT ================= */
        if (section.type === "keyPoint") {
          return (
            <KeyPointBox
              key={index}
              text={keyPoint}
            />
          );
        }

        /* ================= IMAGE ================= */
        if (section.type === "image") {
          const currentImage = images?.[section.imageIndex];

          if (!currentImage) return null;

          return (
            <figure key={index} className="mt-10">
              <img
                src={currentImage.src}
                alt={currentImage.caption || "Blog image"}
                className="
                  h-auto
                  w-full
                  rounded-2xl
                  object-cover
                "
              />

              {currentImage.caption && (
                <figcaption
                  className="
                    mt-3
                    text-center
                    text-sm
                    leading-6
                    text-[#6B7280]
                  "
                >
                  {currentImage.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        /* ================= STITCH TYPES ================= */
        if (section.type === "stitchTypes") {
          return (
            <StitchTypes
              key={index}
              items={stitchTypes}
            />
          );
        }

        /* ================= QUOTE ================= */
        if (section.type === "quote") {
          return (
            <QuoteBox
              key={index}
              quote={quote}
            />
          );
        }

        /* ================= FORMATS ================= */
        if (section.type === "formats") {
          return (
            <SupportedFormats
              key={index}
              formats={supportedFormats}
            />
          );
        }

        return null;
      })}
    </article>
  );
};

export default BlogContent;