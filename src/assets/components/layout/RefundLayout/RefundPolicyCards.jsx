import { ShieldCheck, Check } from "lucide-react";
const RefundPolicyCards = ({ cards = [] }) => {
  return (
    <section className="w-full">
      <div
        className="
          grid
          grid-cols-1
          gap-[16px]

          sm:grid-cols-2
          sm:gap-[18px]

          lg:grid-cols-3
          lg:gap-[20px]

          xl:grid-cols-4

          2xl:grid-cols-5
        "
      >
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.number}
              className="
                group
             
                flex
                min-h-[370px]
                flex-col
                overflow-hidden

                rounded-[22px]
                border
                border-[#E8E4F0]
                bg-white

                p-[20px]

                shadow-[0_6px_24px_rgba(44,28,78,0.05)]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-[4px]
                hover:border-[#D9CBF5]
                hover:shadow-[0_18px_42px_rgba(116,52,229,0.11)]
              "
            >
              

              {/* =========================
                  HEADER
              ========================= */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-start
                  justify-between
                "
              >
                {/* Number */}
                <div
                  className="
                    flex
                    h-[34px]
                    min-w-[34px]
                    items-center
                    justify-center
                    rounded-[8px]
                    bg-[#7434E5]
                    px-[8px]
                    shadow-[0_5px_14px_rgba(116,52,229,0.18)]
                  "
                >
                  <span
                    className="
                      font-dmSans
                      text-[11px]
                      font-bold
                      leading-none
                      text-white
                    "
                  >
                    {card.number}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    items-center
                    justify-center

                    rounded-[16px]
                    border
                    border-[#E6DAFA]
                    bg-[#F4EEFF]

                    transition-all
                    duration-300

                    group-hover:border-[#7434E5]
                    group-hover:bg-[#7434E5]
                    group-hover:shadow-[0_8px_20px_rgba(116,52,229,0.18)]
                  "
                >
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    className="
                      text-[#3A3345]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  />
                </div>
              </div>

              {/* =========================
                  CONTENT
              ========================= */}
              <div
                className="
                  relative
                  z-10
                  mt-[26px]
                  flex
                  flex-1
                  flex-col
                "
              >
                {/* Title */}
                <h3
                  className="
                    max-w-[230px]

                    font-dmSans
                    text-[19px]
                    font-bold
                    leading-[1.22]
                    tracking-[-0.35px]
                    text-[#17161F]

                    sm:text-[20px]
                  "
                >
                  {card.title}
                </h3>

                {/* Accent */}
                <div
                  className="
                    mt-[12px]
                    h-[3px]
                    w-[32px]
                    rounded-full
                    bg-[#7434E5]
                  "
                />

                {/* Description */}
                {card.description && (
                  <p
                    className="
                      mt-[15px]

                      font-inter
                      text-[13px]
                      font-normal
                      leading-[1.7]
                      text-[#6B6B80]
                    "
                  >
                    {card.description}
                  </p>
                )}

                {/* =========================
                    BULLETS
                ========================= */}
                {card.bullets?.length > 0 && (
                  <div
                    className="
                      mt-[17px]
                      space-y-[9px]
                    "
                  >
                    {card.bullets.map((bullet, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          items-start
                          gap-[9px]

                          rounded-[10px]
                          bg-[#FAF8FE]
                          px-[9px]
                          py-[8px]

                          transition-colors
                          duration-200

                          group-hover:bg-[#F7F2FF]
                        "
                      >
                        <span
                          className="
                            mt-[1px]
                            flex
                            h-[17px]
                            w-[17px]
                            shrink-0
                            items-center
                            justify-center

                            rounded-full
                            bg-[#EEE5FF]
                          "
                        >
                          <Check
                            size={10}
                            strokeWidth={2.6}
                            className="text-[#7434E5]"
                          />
                        </span>

                        <span
                          className="
                            font-inter
                            text-[11.5px]
                            font-medium
                            leading-[1.5]
                            text-[#696277]
                          "
                        >
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom spacing / alignment */}
                <div className="mt-auto pt-[20px]">
                  <div
                    className="
                      h-[1px]
                      w-full
                      bg-[#F0EDF5]
                    "
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* =========================
          RESOLUTION NOTE
      ========================= */}
      <div
        className="
          mt-[20px]

          relative
          overflow-hidden

          flex
          items-start
          gap-[14px]

          rounded-[18px]
          border
          border-[#DDD1F5]
          bg-[#F8F4FF]

          px-[18px]
          py-[17px]

          sm:items-center
          sm:px-[22px]
          sm:py-[18px]
        "
      >
        {/* Decorative glow */}
       

        {/* Icon */}
        <div
          className="
            
            flex
            h-[42px]
            w-[42px]
            shrink-0
            items-center
            justify-center
            rounded-[12px]
            bg-[#7434E5]
            shadow-[0_6px_18px_rgba(116,52,229,0.18)]
          "
        >
          <ShieldCheck
            size={20}
            strokeWidth={1.7}
            className="text-white"
          />
        </div>

        {/* Text */}
        <p
          className="
            relative
            z-10

            font-inter
            text-[12px]
            font-medium
            leading-[1.65]
            text-[#4812A5]

            sm:text-[13px]
          "
        >
          We always try to resolve any issue with revisions or corrections
          first. Your satisfaction is important to us and we will do our best
          to make it right.
        </p>
      </div>
    </section>
  );
};

export default RefundPolicyCards;