import KeyPointBox from "../layout/KeyPointBox";
import BlogImage from "../layout/BlogImage";
import StitchTypes from "../layout/StitchTypes";
import QuoteBox from "../layout/QuoteBox";
import SupportedFormats from "../layout/SupportedFormats";

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

        if (section.type === "text") {
          return (
            <section
              key={index}
              className="mt-12"
            >
              <h2
                className="
                  text-[28px]
                  font-bold
                  font-dmSans
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

        if (section.type === "keyPoint") {
          return (
            <KeyPointBox
              key={index}
              text={keyPoint}
            />
          );
        }

       if (section.type === "image") {

  const currentImage = images[section.imageIndex];

  return (
    <BlogImage
      key={index}
      image={currentImage.src}
      caption={currentImage.caption}
    />
  );
}

        if (section.type === "stitchTypes") {
          return (
            <StitchTypes
              key={index}
              items={stitchTypes}
            />
          );
        }

        if (section.type === "quote") {
          return (
            <QuoteBox
              key={index}
              quote={quote}
            />
          );
        }

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