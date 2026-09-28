const CapTypesSection = ({
  title = "",
  description1 = "",
  description2 = "",
  typesToDisplay = [],
  capTypes = [],
  submissionSteps = null,
  fileFormatsSection = null,
}) => {
  const typesList =
    Array.isArray(typesToDisplay) && typesToDisplay.length > 0
      ? typesToDisplay
      : capTypes.map((item) => item.name);

  return (
    <article
      className="
        box-border
        w-full
        min-w-0
        max-w-[1080px]
        overflow-hidden
        font-inter
        text-[#5F6470]
      "
    >
      {/* =====================================================
          INTRO
      ===================================================== */}
      <header className="w-full min-w-0">
        {title && (
          <h2
            className="
              min-w-0
              max-w-full
              break-words
              font-dmSans
              text-[22px]
              font-bold
              leading-[1.3]
              tracking-[-0.02em]
              text-[#17161F]

              sm:text-[24px]

              lg:text-[27px]
            "
          >
            {title}
          </h2>
        )}

        {description1 && (
          <p
            className="
              mt-[9px]
              max-w-full
              break-words
              text-[13px]
              font-normal
              leading-[1.65]
              text-[#6B7280]

              sm:mt-[10px]
              sm:text-[14px]
              sm:leading-[1.7]

              lg:text-[15px]
              lg:leading-[1.75]
            "
            style={{ overflowWrap: "anywhere" }}
          >
            {description1}
          </p>
        )}

        {description2 && (
          <p
            className="
              mt-[7px]
              max-w-full
              break-words
              text-[13px]
              font-normal
              leading-[1.65]
              text-[#6B7280]

              sm:text-[14px]
              sm:leading-[1.7]

              lg:text-[15px]
              lg:leading-[1.75]
            "
            style={{ overflowWrap: "anywhere" }}
          >
            {description2}
          </p>
        )}
      </header>

      {/* =====================================================
          TYPES TO DISPLAY
      ===================================================== */}
      {typesList.length > 0 && (
        <div className="mt-[14px]">
          <p
            className="
              font-dmSans
              text-[13px]
              font-semibold
              leading-[1.5]
              text-[#00000]

              sm:text-[14px]

              lg:text-[15px]
            "
          >
            Types to display:
          </p>

          <ul
            className="
              mt-[4px]
              grid
              grid-cols-1
              gap-x-[24px]
              gap-y-[1px]

             
            "
          >
            {typesList.map((type, index) => (
              <li
                key={`${type}-${index}`}
                className="
                  flex
                  min-w-0
                  items-start
                  gap-[6px]
                  font-inter
                  text-[12px]
                  leading-[1.55]
                  text-[#666A74]

                  sm:text-[13px]

                  lg:text-[14px]
                "
              >
                <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#7434E5]" />
                <span
                  className="min-w-0 break-words"
                  style={{ overflowWrap: "anywhere" }}
                >
                  {type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* =====================================================
          CAP TYPE CONTENT
      ===================================================== */}
      {Array.isArray(capTypes) && capTypes.length > 0 && (
        <div className="mt-[16px]">
          {capTypes.map((item, index) => (
            <section
              key={item.id ?? `cap-type-${index}`}
              className="
                w-full
                min-w-0
              "
            >
              <h3
                className="
                  mt-[10px]
                  min-w-0
                  max-w-full
                  break-words
                  font-dmSans
                  text-[14px]
                  font-bold
                  leading-[1.4]
                  text-[#252731]

                  sm:text-[15px]

                  lg:text-[16px]
                "
                style={{ overflowWrap: "anywhere" }}
              >
                {item.name}
              </h3>

              {item.description && (
                <p
                  className="
                    mt-[2px]
                    max-w-full
                    break-words
                    text-[12px]
                    font-normal
                    leading-[1.6]
                    text-[#626774]

                    sm:text-[13px]
                    sm:leading-[1.65]

                    lg:text-[14px]
                    lg:leading-[1.7]
                  "
                  style={{ overflowWrap: "anywhere" }}
                >
                  {item.description}
                </p>
              )}
            </section>
          ))}
        </div>
      )}

      {/* =====================================================
          SUBMISSION STEPS
      ===================================================== */}
      {submissionSteps && (
        <section className="mt-[18px]">
          {submissionSteps.title && (
            <h2
              className="
                min-w-0
                max-w-full
                break-words
                font-dmSans
                text-[18px]
                font-bold
                leading-[1.35]
                text-[#252731]

                sm:text-[20px]

                lg:text-[22px]
              "
              style={{ overflowWrap: "anywhere" }}
            >
              {submissionSteps.title}
            </h2>
          )}

          {submissionSteps.intro && (
            <p
              className="
                mt-[6px]
                max-w-full
                break-words
                text-[12px]
                leading-[1.65]
                text-[#626774]

                sm:text-[13px]

                lg:text-[14px]
                lg:leading-[1.7]
              "
              style={{ overflowWrap: "anywhere" }}
            >
              {submissionSteps.intro}
            </p>
          )}

          {Array.isArray(submissionSteps.steps) &&
            submissionSteps.steps.length > 0 && (
              <div className="mt-[8px]">
                {submissionSteps.steps.map((step, index) => (
                  <div
                    key={step.number ?? index}
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-[5px]
                    "
                  >
                    <span
                      className="
                        shrink-0
                        font-dmSans
                        text-[12px]
                        font-semibold
                        leading-[1.65]
                        text-[#333640]

                        sm:text-[13px]

                        lg:text-[14px]
                      "
                    >
                      {step.number}.
                    </span>

                    <p
                      className="
                        min-w-0
                        max-w-full
                        break-words
                        text-[12px]
                        leading-[1.65]
                        text-[#626774]

                        sm:text-[13px]

                        lg:text-[14px]
                        lg:leading-[1.7]
                      "
                      style={{ overflowWrap: "anywhere" }}
                    >
                      <span className="font-semibold text-[#30333B]">
                        {step.title}
                      </span>

                      {step.details && (
                        <>
                          {" "}
                          {step.details}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}
        </section>
      )}

      {/* =====================================================
          FILE FORMATS
      ===================================================== */}
      {fileFormatsSection && (
        <section className="mt-[18px]">
          {fileFormatsSection.title && (
            <h2
              className="
                min-w-0
                max-w-full
                break-words
                font-dmSans
                text-[18px]
                font-bold
                leading-[1.35]
                text-[#252731]

                sm:text-[20px]

                lg:text-[22px]
              "
              style={{ overflowWrap: "anywhere" }}
            >
              {fileFormatsSection.title}
            </h2>
          )}

          {fileFormatsSection.description && (
            <p
              className="
                mt-[6px]
                max-w-full
                break-words
                text-[12px]
                leading-[1.65]
                text-[#626774]

                sm:text-[13px]

                lg:text-[14px]
                lg:leading-[1.7]
              "
              style={{ overflowWrap: "anywhere" }}
            >
              {fileFormatsSection.description}
            </p>
          )}

          {Array.isArray(fileFormatsSection.formats) &&
            fileFormatsSection.formats.length > 0 && (
              <div
                className="
                  mt-[8px]
                  flex
                  min-w-0
                  max-w-full
                  flex-wrap
                  gap-[5px]
                  overflow-hidden
                "
              >
                {fileFormatsSection.formats.map(
                  (format, index) => (
                    <span
                      key={`${format}-${index}`}
                      className="
                        shrink-0
                        rounded-full
                        border
                        border-[#E2D9F0]
                        bg-[#F8F5FC]
                        px-[8px]
                        py-[3px]
                        font-inter
                        text-[10px]
                        font-medium
                        leading-[1.3]
                        text-[#7434E5]

                        sm:px-[9px]
                        sm:py-[4px]
                        sm:text-[11px]
                      "
                    >
                      {format}
                    </span>
                  )
                )}
              </div>
            )}
        </section>
      )}
    </article>
  );
};

export default CapTypesSection;