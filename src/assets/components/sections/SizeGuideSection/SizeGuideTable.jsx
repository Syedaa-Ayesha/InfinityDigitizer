const SizeGuideTable = ({
  data = [],
  title = "Embroidery Placement on Garments",
}) => {
  return (
    <>
      {/* ================= DESKTOP TABLE ================= */}

      <div
        className="
          mt-[12px]
          hidden
          rounded-[20px]
          border
          border-[#E7E3ED]
          bg-white
          p-5
          shadow-[0px_2px_12px_rgba(211,202,226,0.22)]

          lg:mt-[58px]
          lg:block
          lg:p-6
          xl:p-8
        "
      >
        <h2
          className="
            font-dmSans
            text-[20px]
            font-bold
            text-[#0C0C30]

            xl:text-[22px]
          "
        >
          {title}
        </h2>

        <div className="mt-5 w-full overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse">
            <thead>
              <tr
                className="
                  bg-[linear-gradient(95deg,#6C29E0_0%,#5413C3_100%)]
                  font-dmSans
                "
              >
                <th className="px-4 py-4 text-left text-sm font-bold text-white">
                  Placement
                </th>

                <th className="px-4 py-4 text-center text-sm font-bold text-white">
                  Image
                </th>

                <th className="px-4 py-4 text-left text-sm font-bold text-white">
                  Location Guide
                </th>

                <th className="px-4 py-4 text-left text-sm font-bold text-white">
                  Recommended Size
                </th>

                <th className="px-4 py-4 text-left text-sm font-bold text-white">
                  Best For
                </th>

                <th className="px-4 py-4 text-left text-sm font-bold text-white">
                  Notes
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-b
                    border-[#E7E3ED]
                    last:border-b-0
                  "
                >
                  {/* Placement */}
                  <td className="px-4 py-5 align-middle">
                    <p
                      className="
                        font-dmSans
                        text-sm
                        font-bold
                        leading-5
                        text-[#0C0C30]
                      "
                    >
                      {item.item}
                    </p>
                  </td>

                  {/* Image */}
                  <td className="px-4 py-5 align-middle">
                    <div className="flex justify-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.item}
                          className="
                            h-[64px]
                            w-[80px]
                            object-contain
                          "
                        />
                      ) : (
                        <div
                          className="
                            h-[64px]
                            w-[80px]
                          "
                        />
                      )}
                    </div>
                  </td>

                  {/* Location */}
                  <td className="px-4 py-5 align-middle">
                    <p
                      className="
                        whitespace-pre-line
                        font-inter
                        text-[13px]
                        leading-5
                        text-[#6B7280]
                      "
                    >
                      {item.placement}
                    </p>
                  </td>

                  {/* Size */}
                  <td className="px-4 py-5 align-middle">
                    <p
                      className="
                        whitespace-pre-line
                        font-dmSans
                        text-[13px]
                        font-bold
                        leading-5
                        text-[#7434E5]
                      "
                    >
                      {item.size}
                    </p>
                  </td>

                  {/* Best For */}
                  <td className="px-4 py-5 align-middle">
                    <p
                      className="
                        font-inter
                        text-[13px]
                        leading-5
                        text-[#6B7280]
                      "
                    >
                      {item.bestFor || "—"}
                    </p>
                  </td>

                  {/* Notes */}
                  <td className="px-4 py-5 align-middle">
                    <p
                      className="
                        font-inter
                        text-[13px]
                        leading-5
                        text-[#6B7280]
                      "
                    >
                      {item.notes || "—"}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MOBILE ================= */}

      <div className="mt-4 flex flex-col gap-3 lg:hidden">
        {data.map((item) => (
          <article
            key={item.id}
            className="
              rounded-[16px]
              border
              border-[#E7E3ED]
              bg-white
              shadow-[0px_2px_12px_rgba(211,202,226,0.22)]
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                border-b
                border-[#E7E3ED]
                px-4
                py-4
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    font-inter
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-[#7434E5]
                  "
                >
                  Placement
                </p>

                <h3
                  className="
                    mt-1
                    font-dmSans
                    text-[17px]
                    font-bold
                    leading-5
                    text-[#182032]
                  "
                >
                  {item.item}
                </h3>
              </div>

              <div
                className="
                  flex
                  h-[62px]
                  w-[70px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[12px]
                  bg-[#F7F5FA]
                "
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.item}
                    className="
                      h-[48px]
                      w-[58px]
                      object-contain
                    "
                  />
                ) : (
                  <span className="text-[10px] text-[#7434E5]">
                    Image
                  </span>
                )}
              </div>
            </div>

            <div className="p-4">
              {/* Location */}
              <div className="pb-4">
                <p
                  className="
                    font-inter
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-[#7434E5]
                  "
                >
                  Location Guide
                </p>

                <p
                  className="
                    mt-1
                    whitespace-pre-line
                    font-inter
                    text-[13px]
                    leading-5
                    text-[#4B5563]
                  "
                >
                  {item.placement}
                </p>
              </div>

              {/* Bottom information */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-4
                  border-t
                  border-[#E7E3ED]
                  pt-4

                  sm:grid-cols-3
                "
              >
                {/* Size */}
                <div>
                  <p
                    className="
                      font-inter
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[1px]
                      text-[#9CA3AF]
                    "
                  >
                    Recommended Size
                  </p>

                  <p
                    className="
                      mt-2
                      whitespace-pre-line
                      font-inter
                      text-[13px]
                      font-bold
                      leading-5
                      text-[#7434E5]
                    "
                  >
                    {item.size || "—"}
                  </p>
                </div>

                {/* Best For */}
                <div>
                  <p
                    className="
                      font-inter
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[1px]
                      text-[#0C0C30]
                    "
                  >
                    Best For
                  </p>

                  <p
                    className="
                      mt-2
                      font-inter
                      text-[13px]
                      leading-5
                      text-[#6B7280]
                    "
                  >
                    {item.bestFor || "—"}
                  </p>
                </div>

                {/* Notes */}
                <div>
                  <p
                    className="
                      font-inter
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[1px]
                      text-[#0C0C30]
                    "
                  >
                    Notes
                  </p>

                  <p
                    className="
                      mt-2
                      font-inter
                      text-[13px]
                      leading-5
                      text-[#6B7280]
                    "
                  >
                    {item.notes || "—"}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default SizeGuideTable;