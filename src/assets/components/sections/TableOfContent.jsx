import SidebarHeading from "../layout/SidebarHeading"
import { List } from "lucide-react"
const TableOfContent = ({ sections }) => {
  return (
    <div
      className="
      rounded-[24px]
      border
      border-[#ECECEC]
      bg-white
      px-[22px]
      py-6
      shadow-
      mb-4
      "
    >
      {/* Heading */}

<SidebarHeading sidebarHeading = "Table Of Content" Icon ={List}/>
      {/* Links */}

      <div className="py-[10px] space-y-1">

       {sections
  .filter((section) => section.type === "text")
  .map((section, index) => (

          <button
            key={index}
            className="
           flex
    items-start
    w-full
    gap-3
    rounded-xl
    px-4
    py-3
    text-left
    transition-all
    duration-200
    hover:bg-[#F7F2FF]
            "
          >
             <span
    className="
       shrink-0
    w-7
    pt-[2px]
    font-semibold
    text-[#7434E5]
    "
  >
    {String(index + 1).padStart(2, "0")}
  </span>
           <span
    className="
      text-[15px]
      leading-6
      text-[#6B7280]
      hover:text-[#7434E5]
    "
  >
    {section.heading}
  </span>
          </button>

        ))}

      </div>

    </div>
  )
}

export default TableOfContent