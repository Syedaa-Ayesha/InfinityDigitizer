const SizeGuideTable = ({ data = [] }) => {
  return (
    <div
      className="
        w-full
        overflow-x-auto
        rounded-[20px]
        border
        border-[#E7E3ED]
        bg-white
        shadow-[0px_12px_35px_rgba(0,0,0,0.08)]
      "
    >
      <table className="w-full min-w-[650px] border-collapse">

        {/* Table Header */}

        <thead>
          <tr className="bg-[#F7F5FA]">

            <th
              className="
                px-6
                py-5
                text-left
                font-dmSans
                text-[16px]
                font-bold
                text-[#0C0C30]
              "
            >
              Placement
            </th>

            <th
              className="
                px-6
                py-5
                text-left
                font-dmSans
                text-[16px]
                font-bold
                text-[#0C0C30]
              "
            >
              Recommended Size
            </th>

            <th
              className="
                px-6
                py-5
                text-left
                font-dmSans
                text-[16px]
                font-bold
                text-[#0C0C30]
              "
            >
              Position
            </th>

          </tr>
        </thead>

        {/* Table Body */}

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="
                border-t
                border-[#E7E3ED]
              "
            >
              <td
                className="
                  px-6
                  py-5
                  font-inter
                  text-[15px]
                  font-medium
                  text-[#0C0C30]
                "
              >
                {item.item}
              </td>

              <td
                className="
                  px-6
                  py-5
                  font-inter
                  text-[15px]
                  text-[#6B7280]
                "
              >
                {item.size}
              </td>

              <td
                className="
                  px-6
                  py-5
                  font-inter
                  text-[15px]
                  text-[#6B7280]
                "
              >
                {item.placement}
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default SizeGuideTable;