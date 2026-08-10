const SizeGuideTable = ({ data = [] }) => {
  return (
    <>
      {/* ================= DESKTOP TABLE ================= */}

      <div
        className="
          hidden
          rounded-[20px]
          border
          mt-[22px]
          border-[#E7E3ED]
          p-8
          bg-white
          shadow-[0px_2px_12px_rgba(211,202,226,0.22)]
          lg:block
          lg:mt-[72px]
        "
      >
            <h1 className="font-bold font-dmSans text-[22px] text-[#0C0C30]">Embroidery Placement on Garments</h1>
          <table className="w-full border-collapse mt-6">

            {/* Header */}

            <thead>
              <tr
                className="
                  bg-[linear-gradient(95deg,#6C29E0_0%,#5413C3_100%)]
                  font-dmSans
    
                "
              >
                <th className="px-5 py-4 text-left text-sm font-bold text-white">
                  Placement
                </th>

                <th className="px-5 py-4 text-center text-sm font-bold text-white">
                  Image
                </th>

                <th className="px-5 py-4 text-left text-sm font-bold text-white">
                  Location
                </th>

                <th className="px-5 py-4 text-left text-sm font-bold text-white">
                  Recommended Size
                </th>

                <th className="px-5 py-4 text-left text-sm font-bold text-white">
                  Notes
                </th>
              </tr>
            </thead>

            {/* Body */}

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

                  <td className="px-4 py-5">
                    <p
                      className="
                        font-dmSans
                        text-base
                        font-bold
                        text-[#0C0C30]
                      "
                    >
                      {item.item}
                    </p>
                  </td>

                  {/* Image */}

                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.item}
                          className="
                            h-[46px]
                            w-[44px]
                            object-contain
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex
                            h-[60px]
                            w-[60px]
                            items-center
                            justify-center
                            
    
                          "
                        >
                          
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Location */}

                  <td className="px-5 py-6">
                    <p
                      className="
                        font-inter
                        text-sm
                        leading-6
                        text-[#6B7280]
                      "
                    >
                      {item.placement}
                    </p>
                  </td>

                  {/* Size */}

                  <td className="px-5 py-6">
                    <p
                      className="
                        font-dmSans
                        text-sm
                        font-bold
                        leading-6
                        text-[#7434E5]
                      "
                    >
                      {item.size}
                    </p>
                  </td>

                  {/* Notes */}

                  <td className="px-5 py-6">
                    <p
                      className="
                        font-inter
                        text-sm
                        leading-6
                        text-[#6B7280]
                        font-normal
                      "
                    >
                      {item.notes}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        
      </div>


      {/* ================= MOBILE CARDS ================= */}

      <div className="flex flex-col gap-3 lg:hidden mt-4">

        {data.map((item) => (
          <article
            key={item.id}
            className="
              overflow-hidden
              rounded-[16px]
              border
              border-[#E7E3ED]
              bg-white
            shadow-[0px_2px_12px_rgba(211,202,226,0.22)]
            "
          >

            {/* Top Section */}

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
              <div>
                <p
                  className="
                    font-inter
                    text-xs
                    font-bold
                    uppercase
                    tracking-[1.2px]
                    text-[#7434E5]
                  "
                >
                  Placement
                </p>

                <h3
                  className="
                    mt-1
                    font-dmSans
                    text-[18px]
                    font-bold
                    text-[#182032]
                  "
                >
                  {item.item}
                </h3>
              </div>


              {/* Garment Image */}

              <div
                className="
                  flex
                  h-[62px]
                  w-[62px]
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
                      w-[48px]
                      object-contain
                    "
                  />
                ) : (
                  <span className="text-xs text-[#7434E5]">
                    Image
                  </span>
                )}
              </div>
            </div>


            {/* Details */}

            <div className="p-4">

              {/* Location */}

              <div className="pb-4">
                <p
                  className="
                    font-inter
                    text-xs
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-[#7434E5]
                  "
                >
                  Location
                </p>

                <p
                  className="
                    mt-1
                    font-inter
                    text-sm
                    leading-6
                    text-[#4B5563]
                  "
                >
                  {item.placement}
                </p>
              </div>


              {/* Size + Notes */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-4

                  border-t
                  border-[#E7E3ED]

                  pt-4
                "
              >
                {/* Recommended Size */}

                <div>
                  <p
                    className="
                      font-inter
                      text-[11px]
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
                      font-inter
                      text-[14px]
                      font-bold
                      leading-5
                      text-[#7434E5]
                    "
                  >
                    {item.size}
                  </p>
                </div>


                {/* Notes */}

                <div>
                  <p
                    className="
                      font-inter
                      text-xs
                      font-bold
                      uppercase
                      tracking-[1px]
                      text-[#0C0C30]
                    "
                  >
                    Note
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
                    {item.notes}
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