import { ShieldCheck } from "lucide-react";

const PrivacyContentSection = ({
  number,
  title,
  description,
  bullets = [],
  image,
  imagePosition = "left",
  showVisual = true,
}) => {
  const isImageLeft = imagePosition === "left";

  const paragraphs = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  const renderText = (item) => {
    if (typeof item === "string") {
      return item;
    }

    if (item && typeof item === "object") {
      return (
        <>
          {item.label && (
            <span className="font-semibold text-[#4F5060]">
              {item.label}
              {item.text ? " " : ""}
            </span>
          )}

          {item.text && item.text}
        </>
      );
    }

    return null;
  };

  return (
    <section className="w-full max-w-full min-w-0 overflow-x-hidden">
      <div
        className={`
          grid
          w-full
          max-w-full
          min-w-0
          items-center
          grid-cols-1
          gap-[28px]

          sm:gap-[34px]

          ${showVisual ? "lg:grid-cols-2 lg:gap-[52px]" : ""}
        `}
      >
        {/* =====================================================
            VISUAL / IMAGE / PLACEHOLDER
        ===================================================== */}
        {showVisual && (
          <div
            className={`
              w-full
              max-w-full
              min-w-0
              overflow-hidden
              rounded-[12px]
              bg-[#F7F4FB]

              h-[250px]

              sm:h-[300px]

              md:h-[350px]

              lg:h-[420px]

              ${isImageLeft ? "lg:order-1" : "lg:order-2"}
            `}
          >
            {image ? (
              <img
                src={image}
                alt={title || "Privacy Policy"}
                loading="lazy"
                decoding="async"
                className="
                  block
                  h-full
                  w-full
                  max-w-full
                  object-cover
                  object-center
                "
              />
            ) : (
              <div
                className="h-full w-full bg-[#FDF2F2]"
                aria-hidden="true"
              />
            )}
          </div>
        )}

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div
          className={`
            min-w-0
            max-w-full
            ${
              showVisual
                ? isImageLeft
                  ? "lg:order-2"
                  : "lg:order-1"
                : "lg:max-w-[920px]"
            }
          `}
        >
          {/* NUMBER + TITLE */}
          <div className="flex min-w-0 items-center gap-[9px] sm:gap-[10px]">
            <span
              className="
                flex
                h-[30px]
                min-w-[30px]
                shrink-0
                items-center
                justify-center
                rounded-[6px]
                bg-[#7434E5]
                px-[7px]
                font-dmSans
                text-[11px]
                font-bold
                leading-none
                text-white
                shadow-[0_4px_10px_rgba(116,52,229,0.18)]
              "
            >
              {number}
            </span>

            <h2
              className="
                min-w-0
                max-w-full
                break-words
                font-dmSans
                text-[18px]
                font-bold
                leading-[1.3]
                tracking-[-0.01em]
                text-[#17161F]

                sm:text-[20px]

                lg:text-[22px]
              "
            >
              {title}
            </h2>
          </div>

          {/* PURPLE LINE */}
          <div
            className="
              mt-[10px]
              h-[3px]
              w-[48px]
              shrink-0
              rounded-full
              bg-[#B29BDA]

              sm:mt-[11px]
            "
          />

          {/* PARAGRAPHS */}
          {paragraphs.length > 0 && (
            <div
              className="
                mt-[15px]
                space-y-[10px]

                sm:mt-[16px]
                sm:space-y-[12px]

                lg:mt-[18px]
                lg:space-y-[13px]
              "
            >
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="
                    min-w-0
                    max-w-full
                    break-words
                    font-inter
                    text-[14px]
                    font-normal
                    leading-[1.75]
                    text-[#6B6B80]

                    sm:text-[15px]
                    sm:leading-[1.8]

                    lg:text-[16px]
                    lg:leading-[1.8]
                  "
                >
                  {renderText(paragraph)}
                </p>
              ))}
            </div>
          )}

          {/* BULLETS */}
          {bullets?.length > 0 && (
            <div
              className="
                mt-[16px]
                space-y-[9px]

                sm:mt-[18px]
                sm:space-y-[10px]
              "
            >
              {bullets.map((bullet, index) => (
                <div
                  key={bullet.id ?? index}
                  className="
                    flex
                    min-w-0
                    items-start
                    gap-[9px]

                    sm:gap-[10px]
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      flex
                      shrink-0
                      items-start
                      justify-center
                      pt-[3px]

                      sm:pt-[4px]

                      lg:pt-[4px]
                    "
                  >
                    <ShieldCheck
                      size={15}
                      strokeWidth={2}
                      className="
                        block
                        shrink-0
                        text-[#7434E5]

                        sm:h-[16px]
                        sm:w-[16px]
                      "
                    />
                  </div>

                  {/* BULLET TEXT */}
                  <p
                    className="
                      min-w-0
                      max-w-full
                      break-words
                      font-inter
                      text-[14px]
                      font-normal
                      leading-[1.7]
                      text-[#5F6072]

                      sm:text-[15px]
                      sm:leading-[1.75]

                      lg:text-[16px]
                      lg:leading-[1.8]
                    "
                  >
                    {renderText(bullet)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContentSection;