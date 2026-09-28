import { CheckCircle2, FileText } from "lucide-react";

const ArtRequirementCard = ({
  title = "",
  subtitle = "",
  bullets = [],
  acceptedFormats = null,
  Icon = null,
  image = null,
  theme = {},
}) => {
  const {
    iconGradient = "linear-gradient(135deg, #7434E5 0%, #5B20C4 100%)",
    bulletColor = "#7434E5",
    acceptedBg = "#F7F4FC",
    acceptedColor = "#7434E5",
    acceptedBorder = "#E6DDF5",
  } = theme;

  return (
    <article
      className="
        box-border
        w-full
        min-w-0
        max-w-full
        overflow-hidden
        rounded-[12px]
        border border-[#E5E1EA]
        bg-white
        shadow-[0_4px_18px_rgba(45,32,68,0.06)]
      "
    >
      <div
        className="
          box-border
          grid
          w-full
          min-w-0
          max-w-full
          grid-cols-1
          gap-[20px]
          overflow-hidden
          p-[16px]

          sm:gap-[22px]
          sm:p-[18px]

          md:gap-[24px]
          md:p-[20px]

          lg:grid-cols-[160px_minmax(0,1fr)_190px]
          lg:items-center
          lg:gap-[22px]
          lg:p-[20px]

          xl:grid-cols-[165px_minmax(0,1fr)_195px]
          xl:gap-[24px]
        "
      >
        {/* =====================================================
            LEFT IMAGE / VISUAL
        ===================================================== */}
        <div
          className="
            box-border
            h-[170px]
            w-full
            min-w-0
            max-w-full
            overflow-hidden
            rounded-[10px]
            bg-[#F7F5FA]

            sm:h-[190px]

            md:h-[210px]

            lg:h-[155px]
            lg:w-[160px]

            xl:h-[160px]
            xl:w-[165px]
          "
        >
          {image ? (
            <img
              src={image}
              alt={title || "Artwork requirement"}
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
              className="
                h-full
                w-full
                max-w-full
                bg-[#F7F5FA]
              "
              aria-hidden="true"
            />
          )}
        </div>

        {/* =====================================================
            CENTER CONTENT
        ===================================================== */}
        <div
          className="
            min-w-0
            max-w-full
            overflow-hidden
          "
        >
          {/* TITLE + ICON */}
          <div
            className="
              flex
              min-w-0
              max-w-full
              items-start
              gap-[10px]
            "
          >
            {Icon && (
              <div
                className="
                  flex
                  h-[36px]
                  w-[36px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[9px]
                  text-white

                  sm:h-[38px]
                  sm:w-[38px]
                "
                style={{
                  background: iconGradient,
                }}
              >
                <Icon
                  size={19}
                  strokeWidth={2}
                />
              </div>
            )}

            <div className="min-w-0 max-w-full flex-1">
              <h3
                className="
                  min-w-0
                  max-w-full
                  break-words
                  font-dmSans
                  text-[19px]
                  font-bold
                  leading-[1.25]
                  tracking-[-0.015em]
                  text-[#17161F]

                  sm:text-[20px]

                  md:text-[21px]

                  lg:text-[21px]
                "
                style={{
                  overflowWrap: "anywhere",
                }}
              >
                {title}
              </h3>

              {subtitle && (
                <p
                  className="
                    mt-[5px]
                    min-w-0
                    max-w-full
                    break-words
                    font-inter
                    text-[14px]
                    font-normal
                    leading-[1.55]
                    text-[#747383]

                    sm:text-[14px]

                    md:text-[15px]

                    lg:text-[14px]
                  "
                  style={{
                    overflowWrap: "anywhere",
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* =====================================================
              BULLETS
          ===================================================== */}
          {Array.isArray(bullets) && bullets.length > 0 && (
            <div
              className="
                mt-[16px]
                flex
                min-w-0
                max-w-full
                flex-col
                gap-[9px]

                sm:mt-[17px]
                sm:gap-[9px]

                md:mt-[18px]

                lg:mt-[15px]
                lg:gap-[7px]
              "
            >
              {bullets.map((bullet, index) => {
                const text =
                  typeof bullet === "string"
                    ? bullet
                    : bullet?.text || "";

                const note =
                  typeof bullet === "object"
                    ? bullet?.note || ""
                    : "";

                return (
                  <div
                    key={bullet?.id ?? `${text}-${index}`}
                    className="
                      flex
                      min-w-0
                      max-w-full
                      items-start
                      gap-[8px]
                    "
                  >
                    <CheckCircle2
                      size={16}
                      strokeWidth={2.3}
                      className="
                        mt-[3px]
                        h-[16px]
                        w-[16px]
                        shrink-0
                      "
                      style={{
                        color: bulletColor,
                      }}
                    />

                    <p
                      className="
                        min-w-0
                        max-w-full
                        break-words
                        font-inter
                        text-[14px]
                        font-normal
                        leading-[1.55]
                        text-[#626773]

                        sm:text-[14px]

                        md:text-[15px]

                        lg:text-[14px]
                        lg:leading-[1.5]
                      "
                      style={{
                        overflowWrap: "anywhere",
                      }}
                    >
                      <span className="font-semibold text-[#2B2C38]">
                        {text}
                      </span>

                      {note && (
                        <span className="text-[#626773]">
                          {" "}
                          {note}
                        </span>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* =====================================================
            ACCEPTED FILE FORMATS
        ===================================================== */}
        {acceptedFormats && (
          <div
            className="
              box-border
              flex
              min-w-0
              max-w-full
              w-full
              items-start
              gap-[10px]
              rounded-[10px]
              border
              px-[12px]
              py-[11px]

              sm:px-[13px]
              sm:py-[12px]

              md:px-[14px]
              md:py-[13px]

              lg:w-[190px]
            "
            style={{
              backgroundColor: acceptedBg,
              borderColor: acceptedBorder,
            }}
          >
            {/* ICON */}
            <div
              className="
                flex
                h-[34px]
                w-[34px]
                shrink-0
                items-center
                justify-center
                rounded-[8px]

                sm:h-[36px]
                sm:w-[36px]
              "
              style={{
                backgroundColor: acceptedColor,
              }}
            >
              <FileText
                size={17}
                strokeWidth={1.9}
                className="text-white"
              />
            </div>

            {/* CONTENT */}
            <div className="min-w-0 max-w-full flex-1">
              <h4
                className="
                  min-w-0
                  max-w-full
                  break-words
                  font-dmSans
                  text-[13px]
                  font-bold
                  leading-[1.4]
                  text-[#343541]

                  sm:text-[14px]

                  md:text-[14px]
                "
                style={{
                  overflowWrap: "anywhere",
                }}
              >
                {acceptedFormats.title}
              </h4>

              <p
                className="
                  mt-[4px]
                  min-w-0
                  max-w-full
                  break-words
                  font-inter
                  text-base
                  font-normal
                  leading-[1.5]
                  text-[#626773]

                  sm:text-[14px]

                  md:text-[13px]
                "
                style={{
                  overflowWrap: "anywhere",
                }}
              >
                {acceptedFormats.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ArtRequirementCard;