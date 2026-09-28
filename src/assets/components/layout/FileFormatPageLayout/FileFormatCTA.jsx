import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FileFormatCTA = ({ cards = [] }) => {
  if (!Array.isArray(cards) || cards.length === 0) {
    return null;
  }

  return (
    <section
      className="
        w-full
        max-w-full
        min-w-0
        overflow-x-hidden
      "
    >
      <div
        className="
          grid
          w-full
          max-w-full
          min-w-0

          grid-cols-1
          gap-[14px]

          sm:gap-[16px]

          lg:grid-cols-2
          lg:gap-[20px]
        "
      >
        {cards.map((card, index) => {
          const isGuarantee = card.type === "guarantee";

          return (
            <article
              key={card.id ?? `cta-${index}`}
              className={`
                group
                relative
                w-full
                min-w-0
                overflow-hidden

                rounded-[12px]
                border

                px-[16px]
                py-[16px]

                sm:px-[20px]
                sm:py-[18px]

                lg:px-[22px]
                lg:py-[20px]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-[2px]
              `}
              style={{
                backgroundColor: isGuarantee
                  ? "#F1FFF5"
                  : "#F8F4FF",
                borderColor: isGuarantee
                  ? "#C9EFD7"
                  : "#DDD1F5",
              }}
            >
              {/* ================= DECORATIVE GLOW ================= */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[35px]
                  -top-[35px]
                  h-[90px]
                  w-[90px]
                  rounded-full
                  bg-white/50
                  blur-[2px]
                "
              />

              {/* ================= CONTENT ================= */}
              <div className="relative z-10 flex min-w-0 items-start gap-[12px]">
                {/* ICON */}
                <div
                  className={`
                    flex
                    h-[36px]
                    w-[36px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    sm:h-[40px]
                    sm:w-[40px]
                  `}
                  style={{
                    backgroundColor: isGuarantee
                      ? "#D7F6E2"
                      : "#EDE4FF",
                  }}
                >
                  {card.icon ? (
                    <img
                      src={card.icon}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="
                        block
                        h-[18px]
                        w-[18px]
                        object-contain
                      "
                    />
                  ) : (
                    <span
                      className={`
                        font-dmSans
                        text-[12px]
                        font-bold

                        ${
                          isGuarantee
                            ? "text-[#159447]"
                            : "text-[#7434E5]"
                        }
                      `}
                    >
                      {isGuarantee ? "✓" : "?"}
                    </span>
                  )}
                </div>

                {/* TEXT */}
                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      min-w-0
                      break-words
                      font-dmSans
                      text-[16px]
                      font-bold
                      leading-[1.35]
                      text-[#17161F]

                      sm:text-[17px]

                      lg:text-[18px]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`
                      mt-[6px]
                      min-w-0
                      max-w-[620px]
                      break-words
                      font-inter
                      text-[13px]
                      font-normal
                      leading-[1.65]

                      sm:text-[14px]
                      sm:leading-[1.7]

                      lg:text-[14px]
                      lg:leading-[1.75]

                      ${
                        isGuarantee
                          ? "text-[#557360]"
                          : "text-[#70667E]"
                      }
                    `}
                  >
                    {card.description}
                  </p>

                  {/* BUTTON */}
                  {card.buttonText && (
                    <Link
                      to={card.buttonLink || "#"}
                      className={`
                        mt-[12px]
                        inline-flex
                        items-center
                        gap-[5px]

                        rounded-full
                        px-[12px]
                        py-[7px]

                        font-inter
                        text-[11px]
                        font-semibold
                        leading-none
                        text-white

                        transition-all
                        duration-200

                        sm:mt-[14px]
                        sm:px-[14px]
                        sm:py-[8px]
                        sm:text-[12px]

                        lg:px-[15px]
                        lg:text-[12px]

                        ${
                          isGuarantee
                            ? "bg-[#18A957] hover:bg-[#128C46]"
                            : "bg-[#7434E5] hover:bg-[#6428D0]"
                        }
                      `}
                    >
                      {card.buttonText}

                      <ArrowRight
                        size={13}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-200
                          group-hover:translate-x-[2px]
                        "
                      />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FileFormatCTA;