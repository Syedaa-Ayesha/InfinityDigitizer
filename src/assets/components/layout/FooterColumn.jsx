import { ChevronRight } from "lucide-react";

const FooterColumn = ({
  title,
  links = [],
}) => {
  return (
    <div className="min-w-[180px]">
      {/* Heading */}
      <h3 className="font-dmSans text-[18px] font-bold text-white">
        {title}
      </h3>

      {/* Purple Line */}
      <div className="mt-3 mb-6 h-[3px] w-10 rounded-full bg-[#7434E5]" />

      {/* Links */}
      <ul className="space-y-4">
        {links.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="
                group
                flex
                items-center
                gap-2
                text-[14px]
                text-[#9CA3AF]
                transition-all
                duration-300
                hover:text-white
              "
            >
              <ChevronRight
                size={14}
                className="
                  text-[#7434E5]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn